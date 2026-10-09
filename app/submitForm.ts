/**
 * Browser-side FormSubmit client — the same setup proven on amhatchery /
 * amrabbits.
 *
 * FormSubmit refuses requests from cloud infrastructure (a POST from a Vercel
 * function comes back 403), so submissions go straight from the visitor's
 * browser. That also keeps the site a plain static export: no API route, no
 * key, no environment variable.
 *
 * Delivery only works once the recipient has clicked FormSubmit's one-time
 * "Activate Form" email for this origin — see the README.
 */

import { site } from "./site";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax";

/** Longest value we'll relay, per field. Guards against a paste-bomb. */
const MAX_FIELD_LENGTH = 5000;

export type SubmitResult = { success: true } | { success: false; error: string };

export async function submitForm({
  subject,
  fields,
  replyTo,
  honeypot,
}: {
  subject: string;
  /** Label/value pairs, rendered by FormSubmit as rows in the email. */
  fields: Array<[string, string]>;
  replyTo?: string;
  honeypot?: string;
}): Promise<SubmitResult> {
  // Silent success: a bot that filled the hidden field shouldn't learn it was caught.
  if (honeypot) return { success: true };

  if (fields.some(([, value]) => value.length > MAX_FIELD_LENGTH)) {
    return { success: false, error: "That message is longer than we can accept." };
  }

  try {
    const res = await fetch(
      `${FORMSUBMIT_ENDPOINT}/${encodeURIComponent(site.leadEmail)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(fields),
          _subject: subject,
          _template: "table",
          // The AJAX endpoint can't present a challenge, so asking for one
          // would reject every submission.
          _captcha: "false",
          ...(replyTo ? { _replyto: replyTo } : {}),
        }),
        signal: AbortSignal.timeout(15_000),
      },
    );

    // FormSubmit answers 200 even when it declines, so the body decides.
    // `success` comes back as the string "true", not a boolean.
    const body: unknown = await res.json().catch(() => null);
    const ok =
      typeof body === "object" && body !== null && "success" in body
        ? String((body as { success: unknown }).success) === "true"
        : false;

    return res.ok && ok
      ? { success: true }
      : { success: false, error: "We couldn't send your request just now." };
  } catch {
    return { success: false, error: "We couldn't send your request just now." };
  }
}
