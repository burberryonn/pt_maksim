import { pricingPackages } from "@/shared/content/pricing";
import type { LocalizedString } from "@/shared/types/content";

export type PricingPackage = {
  id: string;
  popular?: boolean;
  title: LocalizedString;
  price: {
    currency: string;
    amount: number;
    period: LocalizedString;
  };
  description: LocalizedString;
  features: LocalizedString[];
};

export function getPricingPackages() {
  return Promise.resolve(pricingPackages);
}
