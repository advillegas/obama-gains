import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Risk Disclaimer & Satire Notice",
  description:
    "ObamaGains is a satirical brand for a real product concept. Investing involves risk. We are not affiliated with Barack Obama.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        badge="Disclaimers"
        title={
          <>
            The fine print, in <span className="text-gradient-gold">large print</span>.
          </>
        }
        description="Read this before you sign up. We say it big because most companies hide it small."
      />

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <Card className="border-bear/30 bg-bear/5">
            <CardContent className="p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-7 w-7 shrink-0 text-bear" />
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    Investing involves risk of loss
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Trading securities involves risk, including possible loss
                      of principal. There is no guarantee that any investment
                      strategy will succeed, and past performance does not
                      guarantee future results.
                    </p>
                    <p>
                      ObamaGains is not a savings account. Funds are not FDIC
                      insured. They are SIPC-protected against brokerage
                      failure (up to $500,000), but SIPC does not protect
                      against market losses.
                    </p>
                    <p>
                      Do not invest money you cannot afford to lose. Do not
                      invest your rent, your emergency fund, or money you need
                      in the next twelve months.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="satire" className="scroll-mt-24 border-amber-400/40 bg-amber-400/5">
            <CardContent className="p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <Sparkles className="h-7 w-7 shrink-0 text-amber-400" />
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    This is a satirical brand
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      &ldquo;ObamaGains&rdquo; is a satirical name. We are not
                      affiliated with, endorsed by, or sponsored by Barack
                      Obama, Michelle Obama, the Obama Foundation, the Obama
                      Presidential Library, the Democratic National Committee,
                      the U.S. Government, or any related entity.
                    </p>
                    <p>
                      The product itself &mdash; the algorithmic trading bot,
                      the brokerage partnership, the pricing structure &mdash;
                      is a genuine concept being developed by an independent
                      team.
                    </p>
                    <p>
                      The image of President Barack Obama on this site is the
                      official 2012 White House portrait by Pete Souza, which
                      is a public-domain U.S. government work. Use of his
                      likeness is satirical and editorial in nature and does
                      not imply endorsement of any kind.
                    </p>
                    <p>
                      The phrase &ldquo;Thanks Obama&rdquo; is referenced as a
                      well-known internet meme dating to roughly 2009&ndash;2016.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold">
                Forward-looking statements
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Statements on this site about future products, features, or
                pricing represent our current intentions and may change. None
                of this constitutes a binding offer of services. Brokerage
                services will be provided by a SIPC-member partner subject to
                regulatory approval and the partner&apos;s account-opening
                requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
