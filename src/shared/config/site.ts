import { siteConfig } from "@/shared/content/site";
import type { LocalizedString } from "@/shared/types/content";

export type SiteConfig = {
  name: LocalizedString;
  tagline: LocalizedString;
  contact: {
    email: string;
    phone: string;
    location: LocalizedString;
  };
  social: Record<string, string>;
};

export function getSiteConfig() {
  return Promise.resolve(siteConfig);
}
