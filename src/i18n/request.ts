import { getRequestConfig } from "next-intl/server";

import {
  type AppLocale,
  defaultLocale,
  locales,
} from "@/shared/config/i18n";

export default getRequestConfig(async ({ locale }) => {
  const localeToLoad = locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : defaultLocale;

  return {
    locale: localeToLoad,
    messages: (await import(`./messages/${localeToLoad}`)).default,
  };
});
