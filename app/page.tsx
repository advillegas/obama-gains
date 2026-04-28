import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Wallet,
  TrendingUp,
  Bot,
  Clock,
  Quote,
  CheckCircle2,
  XCircle,
  Star,
  Vote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MarketTicker } from "@/components/market-ticker";
import { PresidentialPortrait } from "@/components/presidential-portrait";
import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────── HERO (StoryBrand: One-Liner + Hero) ───────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,oklch(0.34_0.14_250/0.25),transparent_60%)]" />

        <div className="container-page pt-12 pb-20 sm:pt-20 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:items-center">
            <div>
              <Badge variant="flag" className="mb-6">
                <Vote className="h-3 w-3" />
                Algo Trading · For The 99%
              </Badge>

              <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Wall Street built robots
                <br />
                to <span className="text-bear">take</span> your money.
                <br />
                <span className="text-gradient-gold">
                  We built one to give it back.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                ObamaGains is algorithmic trading designed for people whose
                checking account has flinched at a $4 latte. Start with{" "}
                <span className="font-bold text-foreground">$5</span>. No suit
                required.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <Link href="#waitlist">
                    Get Early Access
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-bull" />
                  No minimum balance
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-bull" />
                  $0 monthly fee tier
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-bull" />
                  60-second setup
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <PresidentialPortrait />
            </div>
          </div>
        </div>

        <MarketTicker />
      </section>

      {/* ───────────────────── PROBLEM (StoryBrand: External / Internal / Philosophical) ───────────────────── */}
      <section className="container-page py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="bear" className="mb-4">
            <XCircle className="h-3 w-3" />
            The Rigged Game
          </Badge>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            The market wasn&apos;t built for{" "}
            <span className="text-gradient-flag">you</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Hedge funds run thousand-GPU clusters that front-run your $20
            Robinhood trade in 4 milliseconds. You read finance Twitter on the
            bus to your second job. It&apos;s not a fair fight. We&apos;re going
            to fix that.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              kicker: "Externally,",
              title: "You can\u2019t afford the gatekeepers.",
              body:
                "Most robo-advisors require $500+ to start and charge fees that quietly eat your returns. Real wealth managers don\u2019t pick up the phone for less than $250k.",
            },
            {
              kicker: "Internally,",
              title: "You feel one bad month from disaster.",
              body:
                "Watching billionaires hit new ATHs while your savings account earns 0.01% APY is a special kind of psychic damage. You deserve a tool, not a lecture about avocado toast.",
            },
            {
              kicker: "Philosophically,",
              title: "The system is rigged on purpose.",
              body:
                "The same financial machinery that crashed in 2008 is still humming along, well-funded and well-protected. Compound interest shouldn\u2019t be a luxury good.",
            },
          ].map((p, i) => (
            <Card
              key={i}
              className="border-bear/20 bg-card/40 backdrop-blur-sm hover:border-bear/40 transition-colors"
            >
              <CardContent className="p-7">
                <div className="text-xs font-mono uppercase tracking-widest text-bear">
                  {p.kicker}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────────────────── GUIDE (StoryBrand: Empathy + Authority) ───────────────────── */}
      <section className="relative border-y border-border/40 bg-gradient-to-b from-flag-blue/5 via-background to-flag-red/5">
        <div className="container-page py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-flag-blue/15 to-flag-red/15 blur-2xl" />
              <div className="rounded-2xl border border-amber-400/20 bg-card/80 p-8 shadow-xl backdrop-blur-sm">
                <Quote className="h-9 w-9 text-amber-400/80" />
                <blockquote className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                  &ldquo;Yes, we can.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-muted-foreground">
                  — A guy who turned a community-organizer salary into a
                  presidential pension. Allegedly.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                  <Stat label="Min Deposit" value="$5" />
                  <Stat label="Monthly Fee" value="$0" />
                  <Stat label="Suit Required" value="No" />
                </div>
              </div>
            </div>

            <div>
              <Badge className="mb-4">
                <Sparkles className="h-3 w-3" />
                We&apos;ve Been There
              </Badge>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                A guide that actually
                <br />
                <span className="text-gradient-gold">gets it.</span>
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Our founders grew up paying for groceries with quarters from
                  the couch. We didn&apos;t learn investing in a finance frat —
                  we learned it because we had to. Every fee felt personal.
                </p>
                <p>
                  Then we did what any reasonable, slightly-radicalized
                  millennials would do: we built our own bot, named it after
                  the one president who actually <em>looked</em> like he&apos;d
                  rather give us our money than take it, and made it free for
                  the people who need it most.
                </p>
                <p className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 font-display text-xl font-bold italic text-foreground">
                  Hope and change… your bank account.{" "}
                  <span className="text-gradient-flag">Thanks, Obama.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── PLAN (StoryBrand: 3-step process) ───────────────────── */}
      <section className="container-page py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">The Plan</Badge>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            Three steps. Zero MBA required.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If you can order a pizza, you can run an algorithmic trading
            portfolio. We promise.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              icon: Wallet,
              title: "Drop in $5",
              body:
                "Connect your bank, your Cash App, or scrape together couch-cushion change. We don\u2019t care where it came from. There is no minimum.",
            },
            {
              n: "02",
              icon: Bot,
              title: "Pick a bot",
              body:
                "Choose from 6 strategies \u2014 from \u201cSleep Soundly Index Bot\u201d to \u201cYes We Can Aggressive Growth.\u201d Each one comes with a friendly explainer in plain English.",
            },
            {
              n: "03",
              icon: TrendingUp,
              title: "Live your life",
              body:
                "The bot trades while you work, sleep, parent, and exist. We send a weekly text in human language. You stay in control. You can pull out anytime.",
            },
          ].map((s) => (
            <Card key={s.n} className="relative overflow-hidden bg-card/60 backdrop-blur-sm">
              <div className="absolute -top-6 -right-2 font-display text-7xl font-black text-foreground/5 select-none">
                {s.n}
              </div>
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-flag-blue to-flag-red text-white shadow-md">
                  <s.icon className="h-6 w-6" strokeWidth={2.4} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────────────────── STAKES vs SUCCESS (StoryBrand: Failure / Vision) ───────────────────── */}
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Stakes */}
          <Card className="border-bear/30 bg-bear/5">
            <CardContent className="p-8 sm:p-10">
              <Badge variant="bear" className="mb-4">
                <XCircle className="h-3 w-3" />
                Without ObamaGains
              </Badge>
              <h3 className="font-display text-3xl font-black tracking-tight">
                Same job. Same rent.
                <br />
                Same nothing.
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Your savings account earns less than inflation. Again.",
                  "You watch finance TikTokers brag while you skip an oil change.",
                  "Wall Street bonuses hit record highs. Yours don't.",
                  "Retirement remains a meme.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-bear" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Success */}
          <Card className="border-bull/30 bg-bull/5">
            <CardContent className="p-8 sm:p-10">
              <Badge variant="bull" className="mb-4">
                <CheckCircle2 className="h-3 w-3" />
                With ObamaGains
              </Badge>
              <h3 className="font-display text-3xl font-black tracking-tight">
                A bot in your corner.
                <br />
                <span className="text-gradient-gold">Finally.</span>
              </h3>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Your $5 starts compounding the moment it hits the platform.",
                  "Weekly plain-English texts so you actually understand what's happening.",
                  "Bot pauses automatically when the market gets weird. You sleep.",
                  "You finally feel like the system has at least one thing pointed at you.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────────────────── SOCIAL PROOF / TESTIMONIALS ───────────────────── */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container-page py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="gold" className="mb-4">
              <Star className="h-3 w-3 fill-current" />
              From The People
            </Badge>
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
              Real talk from beta testers.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              (Composite quotes for illustration. Trading involves risk. We are
              not your financial advisor.)
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "I put in $20 from my tax return as a joke. Six months later it was $34. That's a tank of gas I didn't have before.",
                name: "Marcus T.",
                role: "Warehouse, Ohio",
              },
              {
                quote:
                  "First time in my life a financial app didn't feel like it was designed to make me feel stupid. Plain English. Actually plain.",
                name: "Yolanda R.",
                role: "Home health aide, Texas",
              },
              {
                quote:
                  "I told my dad I was using a trading bot and he said 'be careful son.' I told him it was called ObamaGains and he said 'oh, then it's fine.'",
                name: "Kev D.",
                role: "Rideshare, Michigan",
              },
            ].map((t, i) => (
              <Card key={i} className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-7">
                  <Quote className="h-6 w-6 text-amber-400/80" />
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-border/60 pt-4">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── PRICING TEASER ───────────────────── */}
      <section className="container-page py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
              Free if you&apos;re broke. Cheap if you&apos;re not.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We charge a flat $0/month for everyone with under $1,000
              invested. Above that, it&apos;s a flat $1.99/month — less than a
              ramen bowl, more than fair.
            </p>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <Link href="/pricing">
                See full pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Card className="overflow-hidden border-amber-400/30 bg-gradient-to-br from-card via-card to-flag-blue/10">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    People&apos;s Tier
                  </div>
                  <div className="mt-1 font-display text-2xl font-black">
                    Yes We Can — Free
                  </div>
                </div>
                <div className="font-display text-5xl font-black text-gradient-gold">
                  $0
                </div>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {[
                  "All 6 trading bots, fully unlocked",
                  "$5 minimum deposit, no minimum balance",
                  "Weekly plain-English text update",
                  "Auto-pause during high market volatility",
                  "Withdraw anytime, no questions",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-lg border border-border/60 bg-background/40 p-3 text-xs text-muted-foreground">
                Funded by a flat $1.99/mo subscription on accounts above $1k.
                That&apos;s it. No payment-for-order-flow. No hidden spreads.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────────────────── CTA / WAITLIST (StoryBrand: Direct Call) ───────────────────── */}
      <section
        id="waitlist"
        className="relative scroll-mt-24 border-y border-amber-400/20 bg-gradient-to-br from-flag-blue/15 via-background to-flag-red/15"
      >
        <div className="absolute inset-0 -z-10 stripes-bg opacity-30" />
        <div className="container-page py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="gold" className="mb-5">
              <Sparkles className="h-3 w-3" />
              Limited Early Access
            </Badge>
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Get on the list.
              <br />
              <span className="text-gradient-gold">Be first in line.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We&apos;re onboarding in waves of 500. Drop your email — when
              your wave opens, you&apos;ll get a link, no spam, no upsell, no
              &ldquo;please verify your identity again.&rdquo;
            </p>

            <div className="mt-10">
              <WaitlistForm />
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              By joining you accept that this is a satirical project under
              construction and you won&apos;t sue Barack Obama. He&apos;s busy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 px-3 py-3">
      <div className="font-display text-2xl font-black text-gradient-gold">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
