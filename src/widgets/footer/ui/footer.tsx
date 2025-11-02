import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { getNavigationItems } from "@/shared/config/navigation";
import { getSiteConfig } from "@/shared/config/site";
import type { AppLocale } from "@/shared/config/i18n";

export async function Footer() {
  const [locale, footerT, navigation, siteConfig, navigationT] = await Promise.all([
    getLocale(),
    getTranslations("footer"),
    getNavigationItems(),
    getSiteConfig(),
    getTranslations("navigation.sections"),
  ]);

  const localizedLocation =
    siteConfig.contact.location[locale as AppLocale] ??
    siteConfig.contact.location.en;

  const localizedName =
    siteConfig.name[locale as AppLocale] ?? siteConfig.name.en;

  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-border/40 bg-foreground py-16 text-background"
    >
      <div className="container mx-auto max-w-6xl space-y-16 px-4">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-[0.4em] text-background/80">
            {localizedName}
          </h2>
          <p className="mt-3 text-sm text-background/60">
            {footerT("madeIn")}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
              Navigation
            </h3>
            <nav className="space-y-3 text-sm text-background/80">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block transition hover:text-background"
                >
                  {navigationT(item.id)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-background/80">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition hover:text-background"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                className="transition hover:text-background"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
              Location
            </h3>
            <p className="text-sm text-background/80">{localizedLocation}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
              Social
            </h3>
            <div className="flex flex-wrap gap-3 text-sm text-background/80">
              {Object.entries(siteConfig.social).map(([network, href]) => (
                <a
                  key={network}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-background/30 px-4 py-2 transition hover:bg-background hover:text-foreground"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/20 pt-6 text-sm text-background/60 md:flex-row md:items-center md:justify-between">
            <p>{footerT("rights", { year })}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#top"
              className="transition hover:text-background"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
