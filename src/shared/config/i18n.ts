export const locales = ["en", "ru"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

export const localePrefix = "always" as const;

export const localeLabels: Record<AppLocale, string> = {
  en: "English",
  ru: "Русский",
};
