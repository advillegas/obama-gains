import Link from "next/link";
import { ArrowRight, Wallet, Bot, TrendingUp, Bell, ShieldCheck, PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "How It Works",
  description:
    "How ObamaGains turns $5 and a checking account into a working algorithmic trading portfolio in 60 seconds.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="How It Works"
        title={
          <>
            From $5 to your first trade in <span className="text-gradient-gold">60 seconds</span>.
          </>
        }
        description="No spreadsheets. No 12-page disclosures with three asterisks each. Just a clean, transparent flow that does the work while you do yours."
      />

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {STEPS.map((step, i) => (
            <Card key={step.title} className="bg-card/70 backdrop-blur-sm">
              <CardContent className="flex flex-col gap-5 p-7 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-flag-blue to-flag-red text-white shadow-md">
                  <step.icon className="h-6 w-6" strokeWidth={2.4} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-amber-400">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-1 font-display text-2xl font-bold">{step.title}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{step.body}</p>
                  {step.detail ? (
                    <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bull" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-flag-blue/10 via-card to-flag-red/10 p-8 text-center sm:p-12">
          <h3 className="font-display text-3xl font-black tracking-tight">
            That&apos;s the whole pitch. Really.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We don&apos;t add complexity to make it feel sophisticated. The bot
            does the complicated thing. You do the living-your-life thing.
          </p>
          <Button variant="gold" size="lg" className="mt-6" asChild>
            <Link href="/#waitlist">
              Join the Waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const STEPS = [
  {
    icon: Wallet,
    title: "Connect $5 (or more, no rush)",
    body:
      "Link your bank, debit card, Cash App, or PayPal. We use the same bank-grade tokenization that Robinhood, Cash App, and Chime use. Your credentials never touch our servers.",
    detail: [
      "$5 minimum, no maximum",
      "ACH transfer, debit card, or Cash App",
      "Funds settle in 1\u20133 business days",
      "Withdraw anytime, no fee",
    ],
  },
  {
    icon: Bot,
    title: "Pick a bot that fits your vibe",
    body:
      "Six pre-built strategies, each named in plain English. We tell you what it does, what it can lose in a bad month, and who it\u2019s for. Switch anytime.",
    detail: [
      "Sleep Soundly Index Bot \u2014 broad ETFs, low risk",
      "Yes We Can Aggressive Growth \u2014 tech-heavy",
      "Hope & Dividends \u2014 income-focused",
      "Three more, all clearly explained",
    ],
  },
  {
    icon: TrendingUp,
    title: "The bot trades. You don\u2019t lift a finger.",
    body:
      "Trades execute automatically based on the strategy you picked. We auto-pause during major volatility events so you don\u2019t wake up to a surprise.",
    detail: [
      "Algorithmic execution 24/5",
      "Auto-pause on >5% market drops",
      "Tax-lot tracking included",
      "Full trade log, always visible",
    ],
  },
  {
    icon: Bell,
    title: "Get a weekly text in human language",
    body:
      "Every Friday: \u201cYour bot made $4.20 this week. Up 0.8%. Nothing wild happened.\u201d That\u2019s it. No jargon. No fear-mongering. No upsell.",
    detail: [
      "SMS or email, your choice",
      "Plain-English summary",
      "One-tap to view details",
      "Pause notifications anytime",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Your money stays yours",
    body:
      "Funds are held at a SIPC-member partner brokerage in your name. ObamaGains never custodies your money directly. We can\u2019t take it. Nobody can but you.",
    detail: [
      "SIPC-protected up to $500k",
      "Held in your name, not ours",
      "Bank-grade encryption end-to-end",
      "We get audited so you don\u2019t have to",
    ],
  },
  {
    icon: PauseCircle,
    title: "Pull out whenever",
    body:
      "Need rent money? Hit pause and withdraw. We will never charge an exit fee. We will never make you call to cancel. We will never email you a guilt-trip.",
    detail: [
      "Withdraw to bank in 1\u20133 days",
      "Cash App withdrawals: instant",
      "No exit fees, ever",
      "Cancel from the app, 1 tap",
    ],
  },
];
