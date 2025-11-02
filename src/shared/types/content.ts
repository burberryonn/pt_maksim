export type LocalizedString = {
  en: string;
  ru: string;
};

export type LocalizedRichText = LocalizedString;

export type NavigationItem = {
  id: string;
  href: string;
  translationKey: string;
};
