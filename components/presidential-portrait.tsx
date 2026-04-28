import Image from "next/image";

interface PortraitProps {
  className?: string;
}

export function PresidentialPortrait({ className = "" }: PortraitProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-flag-blue/40 via-transparent to-flag-red/40 blur-3xl" />

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-amber-400/30 bg-gradient-to-br from-flag-blue/20 via-background to-flag-red/20 shadow-2xl ring-1 ring-white/5">
        <Image
          src="/obama-portrait.jpg"
          alt="Official 2012 White House portrait of Barack Obama by Pete Souza (public domain, U.S. Government work)"
          width={800}
          height={1000}
          priority
          sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
          className="h-full w-full object-cover object-top"
        />

        {/* Patriotic stripe overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

        {/* Bottom plate / "presidential seal" caption */}
        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-amber-400/30 bg-background/85 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-display text-sm font-black tracking-tight text-foreground">
                The 44th President
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Hope · Change · Compound Interest
              </div>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-[10px] font-black text-flag-blue shadow-md ring-2 ring-amber-300/40">
              44
            </div>
          </div>
        </div>

        {/* Star decoration */}
        <div className="pointer-events-none absolute left-3 top-3 flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="text-amber-300 drop-shadow-[0_0_6px_oklch(0.86_0.16_85/0.6)]"
            >
              ★
            </span>
          ))}
        </div>

        {/* Top right "approved" badge */}
        <div className="absolute right-3 top-3 rounded-full border border-bull/40 bg-bull/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bull backdrop-blur-md">
          POTUS-Approved™
        </div>
      </div>

      {/* Floating "Thanks Obama" sticker */}
      <div className="absolute -right-3 -top-3 rotate-12 rounded-xl border-2 border-flag-red/60 bg-background px-3 py-1.5 font-display text-sm font-black text-flag-red shadow-xl sm:-right-4 sm:-top-4 sm:px-4 sm:py-2 sm:text-base">
        Thanks, Obama.
      </div>
    </div>
  );
}
