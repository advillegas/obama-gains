import Link from "next/link";
import { ArrowRight, Heart, Scale, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About",
  description:
    "Why we built ObamaGains: algorithmic trading designed for the half of America that the financial industry pretends doesn't exist.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Built for the people who got skipped",
    body:
      "Half of American adults can\u2019t cover a $400 emergency. The financial industry treats those people like a marketing afterthought. We built the product they got skipped on.",
  },
  {
    icon: Scale,
    title: "Aligned, not extractive",
    body:
      "We make money when you make money, and we charge $1.99/month flat above $1k. We don\u2019t take a cut of your returns. We don\u2019t sell your trade flow. We don\u2019t hide costs in spreads.",
  },
  {
    icon: Sprout,
    title: "Slow money, on purpose",
    body:
      "We don\u2019t want you day-trading meme stocks at 2 AM. The bots are designed for quiet, patient compounding. The most boring product in fintech, deliberately.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title={
          <>
            We built the financial product
            <br />
            <span className="text-gradient-gold">we needed when we were broke.</span>
          </>
        }
        description="ObamaGains is a small team of engineers and former bartenders / cashiers / line cooks who got tired of watching wealth-building tools price out the people who need them most."
      />

      <section className="container-page py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <Card key={v.title} className="bg-card/70 backdrop-blur-sm">
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-flag-blue to-flag-red text-white shadow-md">
                  <v.icon className="h-6 w-6" strokeWidth={2.4} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <h2 className="font-display text-3xl font-black text-foreground">The story</h2>
          <p>
            ObamaGains started as a group chat. Three of us: a backend engineer
            laid off in the 2023 tech wipeout, a former community college
            financial-aid counselor, and a quant who quit their hedge fund the
            week the firm bought its third boat. We were complaining about the
            same thing: every wealth-building product on the market quietly
            assumed the user had a five-figure cushion.
          </p>
          <p>
            We tested the cheapest robo-advisors. Most of them needed $500 to
            start &mdash; a number that made the product useless to roughly{" "}
            <span className="font-bold text-foreground">half of all Americans</span>.
            The ones with no minimums made up for it with subscription fees that
            ate small balances alive. A $3/month fee on a $200 portfolio is
            18% APR in pure drag.
          </p>
          <p>
            So we built ObamaGains. Five-dollar minimum. Free below a thousand.
            Same algorithmic trading the rich pay six figures for. We named it
            after the meme because honestly the market needed the joke. Hope
            and change. Compound interest. Same thing, basically.
          </p>
          <p className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 font-display text-xl italic text-foreground">
            &ldquo;Yes we can.&rdquo; &mdash; a guy
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/#waitlist">
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
