# Email templates

Brand-matched HTML email for **The Drift Letter** (MailerLite). Same design language
as the site — paper-and-ink, Newsreader serif (Georgia fallback), one sea-green accent
(`#2a5446`), hairline rules. Built table-based with inline styles so it survives Gmail,
Outlook, and Apple Mail.

## `drift-letter.html` — the newsletter issue template

### Use it in MailerLite
1. **Campaigns → Create campaign → Regular campaign.**
2. For the content step, choose the **Custom HTML editor** ("Code your own" / "Rich-text & HTML" → Custom HTML).
3. Paste the entire contents of `drift-letter.html`.
4. Edit the spots marked `<!-- EDIT … -->` (see checklist below).
5. **Save as template** (so each issue starts from it) → send a **test email** → send.

MailerLite auto-inlines the `<style>` block on save, so it renders reliably across clients.

### Per-issue edit checklist
- **Preheader** (hidden preview text near the top of `<body>`).
- **Issue meta** — `Issue 01 · June 2026`.
- **Headline** — the big serif line.
- **Deck** — the standfirst under it.
- **Body** — keep each paragraph in its own `<p style="margin:0 0 20px;">`.
- **Pull quote** — optional; delete the block if unused.
- **CTA** — the button's `href` and label.

### Required / dynamic tags (MailerLite merge tags — leave these as-is)
- `{$unsubscribe}` — unsubscribe link. **Required** — MailerLite won't send without one.
- `{$url}` — "view in browser" link.
- `{$account.company}` — your account/company name in the footer address line.
- Update the postal address line to your real address (GDPR / CAN-SPAM require a physical address).

### Notes
- **Fonts:** Newsreader + Hanken Grotesk load via web font in Apple Mail / iOS Mail.
  Gmail and Outlook strip web fonts and fall back to **Georgia** (serif) and Arial (UI) —
  the design is built to look right either way.
- **Light only:** `color-scheme: light` is set to stop clients auto-inverting to dark.
- Colours are the site tokens: paper `#f5f3ec`, paper-2 `#efece2`, ink `#1c1b16`,
  ink-2 `#4b483f`, ink-3 `#837e70`, accent `#2a5446`, hairline `#dad6ca`.

Source: MailerLite [Custom HTML editor](https://www.mailerlite.com/help/how-to-use-the-custom-html-editor)
and [variables](https://www.mailerlite.com/help/how-to-use-variables-in-mailerlite).
