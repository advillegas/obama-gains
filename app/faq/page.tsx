import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "FAQ",
  description:
    "Honest answers to the questions people actually ask about ObamaGains, including: is this legal? is this satire? and is Obama really involved?",
};

const FAQS = [
  {
    q: "Wait, is this actually serious?",
    a: "Yes and no. ObamaGains is a real product concept being built around a satirical premise. The bot is real. The strategies are real. The fees are real. The endorsement from a former president is, regrettably, not real \u2014 we are not affiliated with him in any way.",
  },
  {
    q: "Is Barack Obama involved with this company?",
    a: "No. Mr. Obama is not affiliated with, endorsing, or aware of this product. The name is a satirical riff on the \u201cthanks Obama\u201d meme that originated as a way to blame the 44th president for everyday inconveniences. We use it affectionately and with full understanding that he\u2019s busy.",
  },
  {
    q: "I literally have $5. Can I really start?",
    a: "Yes. The minimum deposit is $5. There is no minimum balance to maintain. There is no fee while you\u2019re below $1,000 invested. You can deposit $5 today and never add another dollar and we will not bother you about it.",
  },
  {
    q: "Where does the money go? Can you steal it?",
    a: "No. Your funds are held in your name at a SIPC-member partner brokerage. ObamaGains never takes custody. The bot is allowed to execute trades inside your account, but it cannot withdraw funds. Only you can move money out, to a bank account you verified.",
  },
  {
    q: "What happens if the market crashes?",
    a: "Each bot has a built-in volatility brake. If the broad market drops more than 5% intraday, every bot pauses automatically and we send you a heads-up text. You decide when to resume. Crashes still hurt \u2014 we just don\u2019t pretend they don\u2019t.",
  },
  {
    q: "Can I lose money?",
    a: "Yes. Trading involves risk. ObamaGains is not a savings account, not insured by FDIC, and does not guarantee returns. Past performance is not predictive. You should only invest money you can afford to lose. We will say this loudly, often, and at the bottom of every page.",
  },
  {
    q: "How do you make money if you\u2019re free for most users?",
    a: "Two ways: (1) the flat $1.99/month subscription on accounts above $1k, and (2) interest on idle cash held at the brokerage, disclosed clearly on the pricing page. We do NOT sell your trade flow to high-frequency-trading firms (no payment-for-order-flow, ever).",
  },
  {
    q: "Why does the homepage have a picture of President Obama?",
    a: "Because the joke doesn\u2019t land without him. The image is the official 2012 White House portrait by Pete Souza, which is a public-domain U.S. government work. Use of his likeness is satirical and does not imply endorsement.",
  },
  {
    q: "What if I\u2019m undocumented or don\u2019t have a SSN?",
    a: "We\u2019re working on it. The brokerage industry currently requires a SSN or ITIN to open an account due to federal regulations. If you have an ITIN you can sign up. We\u2019re actively partnering with community organizations to expand access.",
  },
  {
    q: "I\u2019m on SNAP / EBT / Section 8 / WIC / SSI. Am I welcome here?",
    a: "Yes. Loudly, explicitly, and as a matter of policy. We do not run credit checks. We do not require minimum balances. We don\u2019t reject PO-box addresses or rural ZIP codes. We can\u2019t legally accept SNAP/EBT/voucher dollars as deposits (federal program rules), but if you receive any of those benefits, your paycheck or side-gig money funds your account exactly the same as everyone else\u2019s. The bot doesn\u2019t care. Neither do we.",
  },
  {
    q: "Can I use my EBT card to fund my account?",
    a: "No \u2014 and we wish we could. SNAP/EBT funds are federally restricted to specific food categories at approved retailers. Routing them into a brokerage account would be illegal under federal program rules. What we can do: make sure the rest of your financial life works around your benefit-day schedule. Auto-deposits can be timed to your paycheck day, your benefit day, or any combination.",
  },
  {
    q: "Do I need a bank account?",
    a: "No. ObamaGains works with Cash App, Chime, Venmo, and most prepaid debit cards. About 5% of U.S. households are unbanked \u2014 we built deposits and withdrawals to handle every common alternative.",
  },
  {
    q: "Is this regulated?",
    a: "Brokerage operations run through a SIPC-member, FINRA-registered partner. ObamaGains itself is registered as an investment adviser. Full Form ADV will be linked from the footer once we launch. If anything in this paragraph is opaque, our FAQ is failing \u2014 ask us in plain English.",
  },
  {
    q: "Can I run this for someone else (parent, friend, kid)?",
    a: "Custodial accounts for minors are coming. For other adults, they\u2019ll need to sign up themselves \u2014 but we make the onboarding flow short enough that you can probably set it up over a phone call.",
  },
  {
    q: "How is this different from Robinhood / Acorns / Wealthfront?",
    a: "Robinhood profits from your trades via PFOF; we don\u2019t. Acorns charges $3/month at the lowest tier, which eats into small balances; we charge $0 below $1k. Wealthfront requires $500 to start; we require $5. We\u2019re aimed at a different user with a different bank balance.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title={
          <>
            Honest answers to the things you&apos;re{" "}
            <span className="text-gradient-gold">actually</span> wondering.
          </>
        }
        description="No legalese. No 'we&apos;re passionate about empowerment' fluff. Just direct answers."
      />

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-14 rounded-2xl border border-amber-400/30 bg-card/60 p-8 text-center backdrop-blur-sm">
            <h3 className="font-display text-2xl font-bold">Still have questions?</h3>
            <p className="mt-2 text-muted-foreground">
              Email us at{" "}
              <a
                href="mailto:hello@obamagains.com"
                className="font-semibold text-amber-400 hover:underline"
              >
                hello@obamagains.com
              </a>
              . A real person will reply within 24 hours.
            </p>
            <Button variant="gold" size="lg" className="mt-5" asChild>
              <Link href="/#waitlist">
                Or just join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
