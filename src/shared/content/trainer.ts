import type { TrainerProfile } from "@/entities/trainer/model/profile";

export const trainerProfile: TrainerProfile = {
  name: "Maksim Isaev",
  credentials: [
    {
      label: {
        en: "Certified Personal Trainer (CPT, NASM)",
        ru: "Сертифицированный персональный тренер (CPT, NASM)",
      },
    },
    {
      label: {
        en: "Functional Range Conditioning Specialist",
        ru: "Специалист по функциональной подготовке (FRC)",
      },
    },
    {
      label: {
        en: "Precision Nutrition Level 1 Coach",
        ru: "Коуч Precision Nutrition уровня 1",
      },
    },
  ],
  bio: {
    headline: {
      en: "Strength coach helping busy people feel at home in their bodies.",
      ru: "Тренер по силовой подготовке, помогающий занятым людям чувствовать себя уверенно в теле.",
    },
    paragraphs: [
      {
        en: "With over 8 years of coaching experience in Canada, I blend evidence-based programming with practical lifestyle strategies. From tech professionals to new parents, my clients build sustainable habits that keep them moving pain-free.",
        ru: "Более 8 лет работаю тренером в Канаде, совмещая научный подход с практичными советами по образу жизни. Моим клиентам — от специалистов IT до молодых родителей — удаётся формировать устойчивые привычки и двигаться без боли.",
      },
      {
        en: "I speak English and Russian, making sure every client feels supported and understood in their preferred language.",
        ru: "Провожу тренировки на русском и английском, чтобы каждый клиент чувствовал поддержку и понимание.",
      },
    ],
  },
  highlights: [
    {
      icon: "badge-check",
      label: {
        en: "Certified personal trainer (NASM CPT)",
        ru: "Сертифицированный тренер (NASM CPT)",
      },
    },
    {
      icon: "dumbbell",
      label: {
        en: "Strength & mobility focus",
        ru: "Фокус на силе и мобильности",
      },
    },
    {
      icon: "users",
      label: {
        en: "Hybrid coaching (online + studio)",
        ru: "Гибридный формат (онлайн + студия)",
      },
    },
    {
      icon: "line-chart",
      label: {
        en: "Data-driven progress tracking",
        ru: "Отслеживание прогресса на основе данных",
      },
    },
  ],
};
