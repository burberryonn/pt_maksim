import { createNavigation } from "next-intl/navigation";

import {
  defaultLocale,
  localePrefix,
  locales,
} from "@/shared/config/i18n";

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
};

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
