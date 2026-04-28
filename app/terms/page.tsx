import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Terms of Service",
  description: "The rules of the road for using ObamaGains.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Terms of Service"
        title={<>Read once. Then go live your life.</>}
        description="The plain version of what you and ObamaGains agree to."
      />
      <section className="container-page py-16">
        <article className="prose prose-invert mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-sm font-mono uppercase tracking-widest text-amber-400">
            Last updated: April 2026
          </p>
          <p>
            By using this site or signing up for the waitlist, you agree to the
            following: this site is informational and brand-marketing only;
            nothing here is investment advice; brokerage services will be
            provided by a SIPC-member partner subject to your separate
            agreement with that partner.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">Eligibility</h2>
          <p>
            You must be 18+, a U.S. resident, and have a valid SSN or ITIN to
            open a brokerage account through ObamaGains.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">No warranties</h2>
          <p>
            The site is provided &ldquo;as is.&rdquo; Investment performance is
            not guaranteed. ObamaGains is not affiliated with any U.S.
            government entity or with President Barack Obama.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Delaware,
            without regard to its conflict-of-laws principles.
          </p>
          <p className="text-xs italic">
            This is a starter terms document for an early-stage brand. The
            production version will be reviewed by counsel before launch.
          </p>
        </article>
      </section>
    </>
  );
}
