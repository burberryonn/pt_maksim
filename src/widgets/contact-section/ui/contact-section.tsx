import { getLocale, getTranslations } from "next-intl/server";

import type { AppLocale } from "@/shared/config/i18n";
import { getContactCopy } from "@/shared/config/contact";
import { Reveal } from "@/shared/ui/reveal";
import { ContactForm } from "./contact-form";

export async function ContactSection() {
  const [locale, contactCopy, t] = await Promise.all([
    getLocale(),
    getContactCopy(),
    getTranslations("contact"),
  ]);

  const normalizedLocale = locale as AppLocale;
  const headline =
    contactCopy.headline[normalizedLocale] ?? contactCopy.headline.en;
  const subheadline =
    contactCopy.subheadline[normalizedLocale] ??
    contactCopy.subheadline.en;

  const successTitle =
    contactCopy.success.title[normalizedLocale] ??
    contactCopy.success.title.en;
  const successDescription =
    contactCopy.success.description[normalizedLocale] ??
    contactCopy.success.description.en;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-foreground text-background"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-64 w-64 rounded-full bg-background/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-background/30 blur-3xl" />
      </div>
      <div className="relative container mx-auto max-w-5xl px-4 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-background/70">{subheadline}</p>
        </Reveal>

        <Reveal className="mt-12 rounded-[2.5rem] border border-background/20 bg-background/5 p-8 backdrop-blur md:p-12" delay={120}>
          <ContactForm
            labels={{
              name: t("form.name.label"),
              email: t("form.email.label"),
              phone: t("form.phone.label"),
              message: t("form.message.label"),
              submit: t("form.submit"),
            }}
            placeholders={{
              name: t("form.name.placeholder"),
              email: t("form.email.placeholder"),
              phone: t("form.phone.placeholder"),
              message: t("form.message.placeholder"),
            }}
            validation={{
              name: t("validation.name"),
              email: t("validation.email"),
              message: t("validation.message"),
            }}
            success={{
              title: successTitle,
              description: successDescription,
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
