import { navigationItems } from "@/shared/content/navigation";
import type { NavigationItem } from "@/shared/types/content";

export function getNavigationItems() {
  return Promise.resolve(navigationItems as NavigationItem[]);
}
