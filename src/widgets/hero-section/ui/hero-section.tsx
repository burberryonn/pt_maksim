import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  BadgeCheck,
  Dumbbell,
  Instagram,
  LineChart,
  Linkedin,
  Users,
  Youtube,
} from "lucide-react";

import type { AppLocale } from "@/shared/config/i18n";
import { getSiteConfig } from "@/shared/config/site";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { getTrainerProfile } from "@/entities/trainer/model/profile";
import { Reveal } from "@/shared/ui/reveal";

const SOCIAL_ICONS = {
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
} as const;

const HIGHLIGHT_ICONS = {
  dumbbell: Dumbbell,
  users: Users,
  "line-chart": LineChart,
  "badge-check": BadgeCheck,
} as const;

const BACKGROUND_DOTS = Array.from({ length: 144 });

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1618517048289-4646902edaf5?auto=format&fit=crop&q=80&w=1200";

export async function HeroSection() {
  const [locale, t, siteConfig, profile] = await Promise.all([
    getLocale(),
    getTranslations("hero"),
    getSiteConfig(),
    getTrainerProfile(),
  ]);

  const localizedLocation =
    siteConfig.contact.location[locale as AppLocale] ??
    siteConfig.contact.location.en;
  const localizedHighlights = profile.highlights.map((highlight) => ({
    ...highlight,
    label:
      highlight.label[locale as AppLocale] ?? highlight.label.en,
  }));

  return (
    <section
      id="top"
      className="relative min-h-screen bg-muted/20 pb-16 pt-32"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />

            <div className="absolute -right-32 top-24 hidden h-64 w-64 rotate-3 opacity-20 lg:block">
              <div className="grid grid-cols-12 gap-1">
                {BACKGROUND_DOTS.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className="h-1 w-1 rounded-full bg-foreground/70"
                  />
                ))}
              </div>
            </div>

            <div className="relative grid min-h-[620px] gap-12 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16">
              <div className="flex flex-col justify-center gap-8">
                <Reveal className="flex flex-wrap items-center gap-4">
                  <Badge
                    variant="outline"
                    className="rounded-full border-foreground/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-foreground/70"
                  >
                    {localizedLocation}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-foreground text-background"
                  >
                    {t("badge")}
                  </Badge>
                </Reveal>
                <Reveal className="space-y-6" delay={80}>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    {profile.bio.headline[locale as AppLocale] ??
                      profile.bio.headline.en}
                  </p>
                  <h1 className="text-4xl font-black uppercase leading-[1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                    {t("title")}
                  </h1>
                  <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                    {t("subtitle")}
                  </p>
                </Reveal>
                <Reveal className="flex flex-wrap items-center gap-4" delay={140}>
                  <Button className="rounded-full px-6 py-6 text-base font-semibold">
                    {t("primaryCta")}
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full border border-input px-6 py-6 text-base font-semibold text-foreground hover:bg-muted"
                    asChild
                  >
                    <a href="#programs">{t("secondaryCta")}</a>
                  </Button>
                </Reveal>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {localizedHighlights.map((highlight, index) => {
                    const HighlightIcon =
                      HIGHLIGHT_ICONS[
                        highlight.icon as keyof typeof HIGHLIGHT_ICONS
                      ] ?? Dumbbell;
                    return (
                      <li key={highlight.icon} className="list-none">
                        <Reveal
                          className="flex h-full w-full items-center gap-3 rounded-full border border-border/40 bg-background/60 px-5 py-3"
                          delay={180 + index * 80}
                        >
                          <HighlightIcon className="h-4 w-4 text-foreground/80" />
                          <span className="flex-1">{highlight.label}</span>
                        </Reveal>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Reveal className="relative flex items-end justify-center" delay={220}>
                <div className="relative isolate flex w-full max-w-[420px] flex-col items-center justify-center">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-foreground/10 to-transparent blur-3xl" />
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border/40 bg-gradient-to-br from-muted to-background">
                    <Image
                      src={HERO_IMAGE}
                      alt="Personal training session"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 420px, 60vw"
                    />
                  </div>
                  <div className="mt-6 flex w-full flex-col items-end gap-3 text-right">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        {t("supportingTitle")}
                      </p>
                      <p className="text-base font-medium text-foreground">
                        {t("supportingSubtitle")}
                      </p>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{t("motivationLineOne")}</p>
                      <p>{t("motivationLineTwo")}</p>
                    </div>
                    <div className="flex gap-3">
                      {(Object.keys(SOCIAL_ICONS) as Array<
                        keyof typeof SOCIAL_ICONS
                      >).map((key) => {
                        const href = siteConfig.social[key];
                        if (!href) {
                          return null;
                        }
                        const Icon = SOCIAL_ICONS[key];
                        return (
                          <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:bg-foreground/80"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
