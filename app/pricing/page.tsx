import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Pricing",
  description:
    "Free if you're broke. Cheap if you're not. ObamaGains pricing has two tiers and zero hidden fees.",
};

const TIERS = [
  {
    name: "People\u2019s Tier",
    tagline: "Yes, We Can \u2014 Free",
    price: "$0",
    period: "/month",
    description:
      "Built for the 60% of Americans without $1,000 in savings. Full access. No catch.",
    cta: "Get Early Access",
    href: "/#waitlist",
    variant: "gold" as const,
    eligibility: "For accounts with under $1,000 invested",
    featured: true,
    features: [
      "All 6 trading bots, fully unlocked",
      "$5 minimum deposit",
      "No minimum balance",
      "Weekly plain-English text update",
      "Auto-pause during volatility",
      "Withdraw anytime, no fee",
      "Tax document export at year-end",
      "SIPC-protected funds",
    ],
  },
  {
    name: "POTUS Tier",
    tagline: "Hope & Compound",
    price: "$1.99",
    period: "/month",
    description:
      "For folks who finally crossed $1k invested. Same product, plus a couple of nice-to-haves.",
    cta: "Start Free, Upgrade Later",
    href: "/#waitlist",
    variant: "outline" as const,
    eligibility: "For accounts with $1,000+ invested",
    featured: false,
    features: [
      "Everything in the People\u2019s Tier",
      "Custom strategy mixing (run 2 bots)",
      "Tax-loss harvesting",
      "Real-time push notifications",
      "Priority human support",
      "Early access to new bots",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title={
          <>
            Two tiers. <span className="text-gradient-gold">Zero gotchas.</span>
          </>
        }
        description="We charge $0/month for everyone with under $1,000 invested. Above that it&apos;s a flat $1.99/month. No payment-for-order-flow. No hidden spreads. No drama."
      />

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.featured
                  ? "relative border-amber-400/40 bg-gradient-to-br from-card via-card to-flag-blue/10 shadow-xl"
                  : "bg-card/70 backdrop-blur-sm"
              }
            >
              {tier.featured ? (
                <div className="absolute -top-3 left-6">
                  <Badge variant="gold">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              ) : null}
              <CardContent className="p-8 sm:p-10">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </div>
                <div className="mt-1 font-display text-2xl font-black">
                  {tier.tagline}
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-6xl font-black text-gradient-gold">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                  {tier.eligibility}
                </p>

                <ul className="mt-7 space-y-3 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={tier.variant} size="lg" className="mt-8 w-full" asChild>
                  <Link href={tier.href}>
                    {tier.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/60 bg-card/40 p-8">
          <h3 className="font-display text-2xl font-bold">What we promise we&apos;ll never do</h3>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            {[
              "Charge a fee for withdrawing your own money",
              "Sell your trade flow to a hedge fund (PFOF: never)",
              "Hide costs in a wide bid-ask spread",
              "Lock you into an annual contract",
              "Spam your inbox with \u201ceducational\u201d upsells",
              "Charge based on \u201cassets under management\u201d",
              "Make you call a 1-800 to cancel",
              "Pretend a small fee is \u201cfree\u201d because of an asterisk",
              "Run credit checks on people receiving SNAP, EBT, or Section 8",
              "Require a minimum balance from anyone, ever",
              "Penalize PO-box addresses or rural ZIP codes during KYC",
              "Hide an ITIN-only signup path in a help-center footnote",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
