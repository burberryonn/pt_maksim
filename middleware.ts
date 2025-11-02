import createMiddleware from "next-intl/middleware";

import {
  defaultLocale,
  localePrefix,
  locales,
} from "@/shared/config/i18n";

const localeMatcher = locales.join("|");

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", `/(?:${localeMatcher})/:path*`],
};
