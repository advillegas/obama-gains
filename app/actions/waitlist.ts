"use server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot.length > 0) {
    return { ok: true, message: "You're on the list. Thanks Obama." };
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "That doesn't look like a valid email." };
  }

  // Simulate persistence; in production wire up to Vercel Postgres / Resend / etc.
  await new Promise((r) => setTimeout(r, 600));
  console.log("[waitlist] new signup:", email);

  return {
    ok: true,
    message: "You're on the list. We'll holler when the bot is ready.",
  };
}
