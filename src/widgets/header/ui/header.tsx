import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import type { AppLocale } from "@/shared/config/i18n";
import { getNavigationItems } from "@/shared/config/navigation";
import { getSiteConfig } from "@/shared/config/site";
import { BookSessionButton } from "./book-session-button";

export async function Header() {
  const [locale, navigation, siteConfig, navigationT, navT] = await Promise.all(
    [
      getLocale(),
      getNavigationItems(),
      getSiteConfig(),
      getTranslations("navigation.sections"),
      getTranslations("navigation"),
    ]
  );

  const localizedName =
    siteConfig.name[locale as AppLocale] ?? siteConfig.name.en;

  return (
    <nav className="fixed inset-x-4 top-4 z-50 mx-auto max-w-4xl rounded-full border border-border/40 bg-background/95 px-6 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex items-center justify-between gap-6">
        <Link
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground"
        >
          {localizedName}
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {navigationT(item.id)}
            </Link>
          ))}
        </div>
        <BookSessionButton label={navT("cta")} />
      </div>
    </nav>
  );
}
