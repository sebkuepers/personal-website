/**
 * Cloudflare Worker entry point.
 *
 * Serves the static Astro site via the ASSETS binding, and exposes one API
 * route — POST /api/subscribe — that adds an email to MailerLite using a
 * server-side API token (never exposed to the browser).
 *
 * Configure in the Cloudflare dashboard (Worker → Settings → Variables and Secrets):
 *   MAILERLITE_API_KEY   (Secret)    — MailerLite API token: MailerLite →
 *                                      Integrations → API → generate new token.
 *   MAILERLITE_GROUP_ID  (Variable)  — optional; the group new subscribers join.
 *                                      Find it: Subscribers → Groups → open the
 *                                      group → the numeric ID is in the URL.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/subscribe') {
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'method-not-allowed' }, 405);
      }
      return handleSubscribe(request, env);
    }

    // Everything else → static assets (applies _headers and the 404 fallback).
    return env.ASSETS.fetch(request);
  },
};

async function handleSubscribe(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  const email = String(body?.email ?? '').trim();
  const honeypot = String(body?.company ?? '').trim();

  // A bot filled the hidden honeypot field → silently accept, do nothing.
  if (honeypot) return json({ ok: true });

  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid-email' }, 422);
  }

  if (!env.MAILERLITE_API_KEY) {
    // Token not configured yet — fail loudly in logs, gently to the user.
    console.error('MAILERLITE_API_KEY is not set');
    return json({ ok: false, error: 'not-configured' }, 500);
  }

  const payload = { email };
  if (env.MAILERLITE_GROUP_ID) {
    payload.groups = [String(env.MAILERLITE_GROUP_ID)];
  }

  let res;
  try {
    res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('MailerLite request failed', err);
    return json({ ok: false, error: 'upstream' }, 502);
  }

  // 200 = existing subscriber updated, 201 = created. Both are success.
  if (res.ok) return json({ ok: true });

  if (res.status === 422) return json({ ok: false, error: 'invalid-email' }, 422);

  const detail = await res.text().catch(() => '');
  console.error(`MailerLite responded ${res.status}: ${detail}`);
  return json({ ok: false, error: 'upstream' }, 502);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
