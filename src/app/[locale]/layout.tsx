import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getMessages, getTranslations } from "next-intl/server";

import { type AppLocale, locales } from "@/shared/config/i18n";
import { LocaleProvider } from "@/shared/providers/locale-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { ScrollProgress } from "@/shared/ui/scroll-progress";
import { Toaster } from "@/shared/ui/sonner";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : null;

  if (!normalizedLocale) {
    return {};
  }

  const t = await getTranslations({
    locale: normalizedLocale,
    namespace: "meta",
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: Object.fromEntries(
        locales.map((code) => [code, `/${code}`]),
      ),
    },
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: normalizedLocale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const normalizedLocale = locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : null;

  if (!normalizedLocale) {
    notFound();
  }

  const messages = await getMessages({ locale: normalizedLocale });

  return (
    <LocaleProvider locale={normalizedLocale} messages={messages}>
      <ThemeProvider defaultTheme="system" enableSystem>
        <ScrollProgress className="h-1" />
        {children}
        <Toaster />
      </ThemeProvider>
    </LocaleProvider>
  );
}
