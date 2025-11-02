const messages = {
  meta: {
    title: "Maksim Isaev — Personal Training in Canada",
    description:
      "Evidence-based coaching for strength, mobility, and sustainable results in English and Russian.",
  },
  navigation: {
    sections: {
      about: "About",
      services: "Services",
      programs: "Programs",
      schedule: "Schedule",
      pricing: "Pricing",
      contact: "Contact",
    },
    cta: "Book a consultation",
  },
  hero: {
    badge: "Toronto · Online · In-person",
    title: "Personal training tailored to your goals",
    subtitle:
      "Hi, I'm Maksim Isaev. I help busy professionals build strength, improve mobility, and feel confident without restrictive diets.",
    primaryCta: "Start your assessment",
    secondaryCta: "Explore programs",
    supportingTitle: "Personal coaching. Sustainable results.",
    supportingSubtitle: "Strength · Mobility · Recovery",
    motivationLineOne: "Train with intention.",
    motivationLineTwo: "Move with confidence.",
  },
  pricing: {
    badge: "Membership options",
    title: "Pick a coaching plan that fits your life",
    subtitle:
      "Every package includes progress tracking, mobility homework, and direct access to Maksim between sessions.",
    popular: "Most popular",
    cta: "Start this plan",
    footnote: "Not sure where to begin? Book a free intro call.",
  },
  contact: {
    form: {
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "you@email.com",
      },
      phone: {
        label: "Phone (optional)",
        placeholder: "+1 (647) 555-0197",
      },
      message: {
        label: "Tell me about your goals",
        placeholder: "What would make coaching a win for you?",
      },
      submit: "Send message",
    },
    validation: {
      name: "Please enter your name.",
      email: "Enter a valid email.",
      message: "Share a short note so I know how to help.",
    },
  },
  footer: {
    rights: "© {year} Maksim Isaev. All rights reserved.",
    madeIn: "Coaching in Canada & online worldwide.",
  },
} as const;

export default messages;
