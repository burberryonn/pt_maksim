import { getLocale, getTranslations } from "next-intl/server";

import { getPricingPackages } from "@/entities/pricing/model/packages";
import type { AppLocale } from "@/shared/config/i18n";
import { Badge } from "@/shared/ui/badge";
import { Reveal } from "@/shared/ui/reveal";
import { ShinyButton } from "@/shared/ui/shiny-button";

export async function PricingSection() {
  const [locale, packages, t] = await Promise.all([
    getLocale(),
    getPricingPackages(),
    getTranslations("pricing"),
  ]);

  const normalizedLocale = locale as AppLocale;
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  return (
    <section id="pricing" className="relative pb-24 pt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-[3rem] border border-border/40 bg-muted/40 px-6 py-16 shadow-xl md:px-12 lg:px-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 rounded-full border border-border/40 bg-background/70 text-xs uppercase tracking-[0.35em] text-muted-foreground"
            >
              {t("badge")}
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((plan, index) => {
              const amount = formatter.format(plan.price.amount);
              const period =
                plan.price.period[normalizedLocale] ?? plan.price.period.en;
              const title = plan.title[normalizedLocale] ?? plan.title.en;
              const description =
                plan.description[normalizedLocale] ?? plan.description.en;
              const features = plan.features.map(
                (feature) => feature[normalizedLocale] ?? feature.en
              );

              return (
                <Reveal key={plan.id} delay={120 + index * 120}>
                  <article className="relative flex h-full flex-col gap-6 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition hover:border-foreground/30 hover:shadow-md md:p-7">
                    {plan.popular ? (
                      <span className="absolute right-6 top-6 rounded-full border border-foreground/30 bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground">
                        {t("popular")}
                      </span>
                    ) : null}
                    <div className="space-y-5">
                      <div className="space-y-1.5">
                        <h3 className="text-base font-semibold text-foreground">
                          {title}
                        </h3>
                        <div className="text-3xl font-semibold text-foreground md:text-4xl">
                          {amount}
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {period}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 leading-relaxed"
                          >
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/70" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ShinyButton className="mt-auto w-full border border-foreground/40 py-3 text-sm font-semibold uppercase tracking-[0.35em]">
                      {t("cta")}
                    </ShinyButton>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            className="mt-12 text-center text-sm text-muted-foreground"
            delay={160}
          >
            {t("footnote")}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
