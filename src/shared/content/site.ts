import type { LocalizedString } from "@/shared/types/content";

export const siteConfig = {
  name: {
    en: "Maksim Isaev",
    ru: "Максим Исаев",
  },
  tagline: {
    en: "Personal training for strength, mobility, and confidence",
    ru: "Персональные тренировки для силы, мобильности и уверенности",
  },
  contact: {
    email: "coach@maksimisaev.com",
    phone: "+1 (647) 555-0197",
    location: {
      en: "Toronto, ON · Online worldwide",
      ru: "Торонто, Канада · Онлайн по всему миру",
    } satisfies LocalizedString,
  },
  social: {
    instagram: "https://instagram.com/maksim_isaev",
    youtube: "https://youtube.com/@maksimisaev",
    linkedin: "https://linkedin.com/in/maksimisaev",
  },
} as const;
