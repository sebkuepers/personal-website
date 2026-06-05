# Double opt-in confirmation email — settings

MailerLite's confirmation email is **not** full custom HTML. You can edit the subject,
sender, body text, and the **button/link colors**. Enter the values below to match the brand.

**Where:** MailerLite → the form's **Subscribe settings / Double opt-in** → **Edit** the
double opt-in email. (Settings → Subscribe settings on newer accounts.)

## Settings to enter

**Sender name:** `Sebastian Küpers`
**Sender email:** your verified sending address (e.g. `hello@sebastian-kuepers.com`)

**Subject:**
```
Confirm your subscription to The Drift Letter
```

**Preview text (if available):**
```
One click to confirm — then you're in.
```

**Body copy:**
```
Thank you for subscribing to The Drift Letter.

Please confirm your email address so I know it's really you. One click and you're on
the list — occasional notes on building AI that keeps people in command, and the
thinking behind Slow Intelligence.

If you didn't request this, you can ignore this email and nothing will happen.

— Sebastian Küpers
```

**Confirm button label:**
```
Confirm subscription
```

## Brand colors (set these in the email's design/colour options)

| Element | Value |
|---|---|
| Button background | `#2a5446` (accent — deep sea-green) |
| Button text | `#f5f3ec` (paper) |
| Link color | `#2a5446` |
| Background (if editable) | `#f5f3ec` |
| Body text (if editable) | `#1c1b16` |

## After confirmation

- **Confirmation/“thank you” page:** MailerLite → Unsubscribe/confirmation page settings —
  use the same accent `#2a5446` and a short line like
  *“You're confirmed. Welcome to The Drift Letter.”*
- **Welcome email:** sent separately via an automation — see `welcome.html` and the README.

Source: MailerLite [double opt-in](https://www.mailerlite.com/help/how-to-use-double-opt-in-when-collecting-subscribers).
