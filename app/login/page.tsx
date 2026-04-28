import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Log in",
  description: "Login is rolling out alongside our private beta. Join the waitlist to be invited.",
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        badge="Sign in"
        title={
          <>
            Login&apos;s coming. <span className="text-gradient-gold">Almost there.</span>
          </>
        }
        description="We&apos;re onboarding the first wave of users now. Join the waitlist and we&apos;ll send you a sign-in link as soon as your slot opens."
      />

      <section className="container-page py-16">
        <Card className="mx-auto max-w-md bg-card/70 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-flag-blue to-flag-red text-white shadow-md">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-xl font-bold">Private beta</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The login portal opens to each waitlist wave on a rolling basis.
              Drop your email below to claim your spot.
            </p>
            <Button variant="gold" size="lg" className="mt-6 w-full" asChild>
              <Link href="/#waitlist">
                Join the Waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
