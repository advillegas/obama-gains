import Link from "next/link";
import { TrendingUp, Github, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/40 mt-24">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-flag-blue to-flag-red text-white">
                <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="font-display text-base font-black">
                Obama<span className="text-gradient-gold">Gains</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Algorithmic trading built for the working class. We charge less
              because you have less. That&apos;s the whole pitch.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center rounded-md border border-flag-blue/40 bg-flag-blue/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                EBT Accepted
              </span>
              <span className="inline-flex items-center rounded-md border border-flag-red/40 bg-flag-red/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Section 8 Friendly
              </span>
              <span className="inline-flex items-center rounded-md border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                ITIN OK
              </span>
              <span className="inline-flex items-center rounded-md border border-bull/40 bg-bull/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Unbanked-OK
              </span>
            </div>
            <p className="mt-3 font-display text-lg italic text-muted-foreground/80">
              &ldquo;Yes, we can.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Legal &amp; Real Talk
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Risk Disclaimer</Link></li>
              <li><Link href="/disclaimer#satire" className="hover:text-primary transition-colors">Satire Notice</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
            <strong className="text-foreground">Heads up:</strong> ObamaGains is
            a satirical concept and is <em>not affiliated with Barack Obama,
            the Obama Foundation, or any U.S. government entity</em>. Trading
            involves risk of loss, including loss of principal. Past performance
            does not guarantee future results. Don&apos;t bet your rent.
          </p>
          <div className="flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="rounded-md p-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a aria-label="GitHub" href="#" className="rounded-md p-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="Email" href="mailto:hello@obamagains.com" className="rounded-md p-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {year} ObamaGains, an unaffiliated satirical project · Built with
          hope, change, and a non-trivial amount of Red Bull.
        </p>
      </div>
    </footer>
  );
}
