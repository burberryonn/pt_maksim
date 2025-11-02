import type { PricingPackage } from "@/entities/pricing/model/packages";

export const pricingPackages: PricingPackage[] = [
  {
    id: "assessment",
    title: {
      en: "Movement Assessment",
      ru: "Детальная диагностика",
    },
    price: {
      currency: "CAD",
      amount: 149,
      period: {
        en: "one-time session",
        ru: "разовая сессия",
      },
    },
    description: {
      en: "60-minute mobility and strength screening with actionable mobility drills.",
      ru: "60-минутная диагностика силы и мобильности с индивидуальными упражнениями.",
    },
    features: [
      {
        en: "Joint mobility screen + strength testing",
        ru: "Скрининг суставной мобильности и проверка силы",
      },
      {
        en: "Video breakdown & plan recap",
        ru: "Видеоразбор и конспект рекомендаций",
      },
      {
        en: "Follow-up check-in after 7 days",
        ru: "Контрольная встреча через 7 дней",
      },
    ],
  },
  {
    id: "hybrid",
    popular: true,
    title: {
      en: "Hybrid Coaching",
      ru: "Гибридный коучинг",
    },
    price: {
      currency: "CAD",
      amount: 329,
      period: {
        en: "per month",
        ru: "в месяц",
      },
    },
    description: {
      en: "Weekly in-person sessions plus remote programming with nutrition touchpoints.",
      ru: "Еженедельные очные тренировки плюс онлайн-программы и питание.",
    },
    features: [
      {
        en: "4 in-person sessions / month",
        ru: "4 очные тренировки в месяц",
      },
      {
        en: "Customized strength & mobility plan",
        ru: "Индивидуальный план силы и мобильности",
      },
      {
        en: "Bi-weekly nutrition reviews",
        ru: "Разбор питания каждые 2 недели",
      },
    ],
  },
  {
    id: "online",
    title: {
      en: "Online Performance",
      ru: "Онлайн прогресс",
    },
    price: {
      currency: "CAD",
      amount: 209,
      period: {
        en: "per month",
        ru: "в месяц",
      },
    },
    description: {
      en: "Remote training cycles with weekly video feedback and habit tracking.",
      ru: "Онлайн-программы с еженедельной обратной связью и трекингом привычек.",
    },
    features: [
      {
        en: "Program updates every 4 weeks",
        ru: "Обновление программы каждые 4 недели",
      },
      {
        en: "Weekly video technique review",
        ru: "Еженедельный разбор техники по видео",
      },
      {
        en: "Habit and recovery dashboard",
        ru: "Мониторинг привычек и восстановления",
      },
    ],
  },
];
