import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface InclusionBadgeProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  tone?: "blue" | "red" | "gold" | "green";
  className?: string;
}

const TONE: Record<NonNullable<InclusionBadgeProps["tone"]>, string> = {
  blue: "border-flag-blue/40 bg-flag-blue/15 text-foreground",
  red: "border-flag-red/40 bg-flag-red/15 text-foreground",
  gold: "border-amber-400/50 bg-amber-400/15 text-foreground",
  green: "border-bull/40 bg-bull/15 text-foreground",
};

const ICON_TONE: Record<NonNullable<InclusionBadgeProps["tone"]>, string> = {
  blue: "text-flag-blue",
  red: "text-flag-red",
  gold: "text-amber-400",
  green: "text-bull",
};

export function InclusionBadge({
  icon: Icon,
  label,
  sublabel,
  tone = "blue",
  className,
}: InclusionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg border px-3 py-2 text-left backdrop-blur-sm transition-colors hover:brightness-110",
        TONE[tone],
        className
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background/60 ring-1 ring-white/5",
          ICON_TONE[tone]
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
        {sublabel ? (
          <span className="block text-[10px] font-medium text-muted-foreground">
            {sublabel}
          </span>
        ) : null}
      </span>
    </div>
  );
}
