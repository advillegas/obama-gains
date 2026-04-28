import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Privacy Policy",
  description: "How ObamaGains collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Privacy Policy"
        title={<>Your data, our promise.</>}
        description="A short, plain-English summary of how we handle the information you share with us."
      />
      <section className="container-page py-16">
        <article className="prose prose-invert mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-sm font-mono uppercase tracking-widest text-amber-400">
            Last updated: April 2026
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">What we collect</h2>
          <p>
            Email address, name, and the bare minimum brokerage-required
            identity data (SSN/ITIN, date of birth, address). For the bot to
            trade, our partner brokerage also collects standard KYC information
            on their own account-opening forms.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">What we don&apos;t do</h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>We don&apos;t sell your personal data. Ever.</li>
            <li>We don&apos;t sell your trade flow to HFT firms (no PFOF).</li>
            <li>We don&apos;t share your data with advertisers.</li>
            <li>We don&apos;t use third-party tracking pixels.</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-foreground">How to delete your data</h2>
          <p>
            Email{" "}
            <a className="text-amber-400 hover:underline" href="mailto:privacy@obamagains.com">
              privacy@obamagains.com
            </a>{" "}
            and we&apos;ll delete your account and associated data within 30
            days, subject to brokerage record-keeping requirements.
          </p>
          <p className="text-xs italic">
            This is a starter policy for an early-stage brand. The full
            production policy will be reviewed by counsel before launch.
          </p>
        </article>
      </section>
    </>
  );
}
