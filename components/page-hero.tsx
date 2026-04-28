import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

export function PageHero({
  badge,
  title,
  description,
  children,
}: {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,oklch(0.34_0.14_250/0.2),transparent_60%)]" />
      <div className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {badge ? <Badge className="mb-5">{badge}</Badge> : null}
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
