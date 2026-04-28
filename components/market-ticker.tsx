import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const TICKERS = [
  { symbol: "HOPE", price: "44.20", change: "+5.41%", up: true },
  { symbol: "CHANGE", price: "20.16", change: "+8.08%", up: true },
  { symbol: "ACA", price: "10.0", change: "+1.5%", up: true },
  { symbol: "RENT", price: "1,847", change: "+12.4%", up: false },
  { symbol: "EGGS", price: "6.99", change: "+38.2%", up: false },
  { symbol: "GAS", price: "3.45", change: "-2.1%", up: true },
  { symbol: "SPY", price: "612.30", change: "+0.42%", up: true },
  { symbol: "BTC", price: "98,420", change: "+2.18%", up: true },
  { symbol: "OBMA", price: "44.00", change: "+44.00%", up: true },
  { symbol: "YESWECAN", price: "∞", change: "+∞%", up: true },
];

export function MarketTicker() {
  const items = [...TICKERS, ...TICKERS, ...TICKERS];
  return (
    <div className="relative w-full overflow-hidden border-y border-border/50 bg-background/40 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((t, i) => (
          <div
            key={`${t.symbol}-${i}`}
            className="flex items-center gap-2 px-5 text-xs font-mono"
          >
            <span className="font-bold tracking-wider text-foreground">
              {t.symbol}
            </span>
            <span className="text-muted-foreground">${t.price}</span>
            <span
              className={cn(
                "inline-flex items-center gap-0.5 font-semibold",
                t.up ? "text-bull" : "text-bear"
              )}
            >
              {t.up ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {t.change}
            </span>
            <span className="text-border">•</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
