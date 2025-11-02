import { contactCopy } from "@/shared/content/contact";
import type { LocalizedString } from "@/shared/types/content";

export type ContactCopy = {
  headline: LocalizedString;
  subheadline: LocalizedString;
  success: {
    title: LocalizedString;
    description: LocalizedString;
  };
};

export function getContactCopy() {
  return Promise.resolve(contactCopy);
}
