"use client";

import type { AbstractIntlMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

type LocaleProviderProps = {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
};

export function LocaleProvider({
  children,
  locale,
  messages,
}: LocaleProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
