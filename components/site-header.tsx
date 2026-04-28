"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="ObamaGains home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-flag-blue via-flag-blue/80 to-flag-red text-white shadow-md ring-1 ring-white/10 transition-transform group-hover:scale-105">
            <TrendingUp className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-tight">
              Obama<span className="text-gradient-gold">Gains</span>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              .com / yes we can
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <Link href="/#waitlist">Get Early Access</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border/50 overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container-page py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium rounded-md hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3 border-t border-border/50 mt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
            </Button>
            <Button variant="gold" size="sm" className="flex-1" asChild>
              <Link href="/#waitlist" onClick={() => setOpen(false)}>Early Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
