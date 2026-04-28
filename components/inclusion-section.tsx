import {
  CreditCard,
  Home,
  Apple,
  Baby,
  Accessibility,
  HandCoins,
  IdCard,
  Languages,
  Medal,
  Heart,
  Sprout,
  Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InclusionBadge } from "@/components/inclusion-badges";

const BADGES = [
  {
    icon: CreditCard,
    label: "EBT Accepted",
    sublabel: "SNAP recipients welcome",
    tone: "blue" as const,
  },
  {
    icon: Home,
    label: "Section 8 Friendly",
    sublabel: "Voucher holders welcome",
    tone: "red" as const,
  },
  {
    icon: Apple,
    label: "SNAP Compatible",
    sublabel: "We work around benefit days",
    tone: "blue" as const,
  },
  {
    icon: Baby,
    label: "WIC Welcomed",
    sublabel: "Mothers + families included",
    tone: "red" as const,
  },
  {
    icon: HandCoins,
    label: "SSI / SSDI Ready",
    sublabel: "Disability income works",
    tone: "gold" as const,
  },
  {
    icon: HandCoins,
    label: "TANF Friendly",
    sublabel: "Cash assistance recipients",
    tone: "blue" as const,
  },
  {
    icon: IdCard,
    label: "ITIN Accepted",
    sublabel: "No SSN required",
    tone: "green" as const,
  },
  {
    icon: Languages,
    label: "EN / ES Support",
    sublabel: "Servicio en espa\u00F1ol",
    tone: "blue" as const,
  },
  {
    icon: Medal,
    label: "Veteran Friendly",
    sublabel: "VA disability income works",
    tone: "red" as const,
  },
  {
    icon: Heart,
    label: "LGBTQ+ Welcoming",
    sublabel: "Yes, that obviously includes you",
    tone: "gold" as const,
  },
  {
    icon: Smartphone,
    label: "Unbanked-OK",
    sublabel: "Cash App or prepaid debit work",
    tone: "green" as const,
  },
  {
    icon: Accessibility,
    label: "WCAG AA Accessible",
    sublabel: "Screen-reader, keyboard, contrast",
    tone: "blue" as const,
  },
];

export function InclusionSection() {
  return (
    <section className="relative border-y border-border/40 bg-gradient-to-b from-flag-red/5 via-background to-flag-blue/5">
      <div className="absolute inset-0 -z-10 stripes-bg opacity-20" />
      <div className="container-page py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="flag" className="mb-4">
            <Sprout className="h-3 w-3" />
            Real Inclusion · Not A Brochure
          </Badge>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            Diversity, equity, and{" "}
            <span className="text-gradient-flag">the part Wall Street forgets:</span>{" "}
            <span className="text-gradient-gold">class.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Big finance loves a glossy DEI brochure and a $2,500 minimum balance.
            We do it the other way around. If you receive any of these benefits,
            you are not just &ldquo;welcome&rdquo; here &mdash; you are the entire
            reason we built this.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {BADGES.map((b) => (
            <InclusionBadge key={b.label} {...b} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6 text-sm leading-relaxed text-muted-foreground sm:p-7">
          <p className="font-semibold text-foreground">
            Quick honest note about what those badges mean.
          </p>
          <p className="mt-2">
            We can&apos;t directly accept SNAP, WIC, or Section 8 voucher funds
            as deposits &mdash; federal regulations restrict those programs to
            specific food and housing uses, and that&apos;s the law. What
            those badges <em>do</em> mean: if you receive any of these
            benefits, you&apos;re a fully welcomed user on our platform. Your
            paycheck, side-gig income, tax refund, gift money, or settlement
            money is what funds your account. The bot doesn&apos;t care where
            the dollars came from. Neither do we.
          </p>
          <p className="mt-3">
            Most fintech apps quietly filter out users on government assistance
            with credit checks, minimum-balance rules, or KYC flows that
            penalize PO-box addresses and rural ZIP codes. We don&apos;t do any
            of that. Period.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            {
              stat: "1 in 8",
              label: "Americans receive SNAP. Almost none use a robo-advisor.",
            },
            {
              stat: "$0",
              label: "Min balance for everyone, on every government program.",
            },
            {
              stat: "100%",
              label: "Of features unlocked on the free tier. No gated DEI.",
            },
          ].map((s) => (
            <div
              key={s.stat}
              className="rounded-xl border border-border/60 bg-card/40 p-5 text-center backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-black text-gradient-gold">
                {s.stat}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
