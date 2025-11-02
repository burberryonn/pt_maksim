import type { NavigationItem } from "@/shared/types/content";

export const navigationItems: NavigationItem[] = [
  {
    id: "schedule",
    href: "#schedule",
    translationKey: "navigation.sections.schedule",
  },
  {
    id: "pricing",
    href: "#pricing",
    translationKey: "navigation.sections.pricing",
  },
  {
    id: "contact",
    href: "#contact",
    translationKey: "navigation.sections.contact",
  },
] as const;
