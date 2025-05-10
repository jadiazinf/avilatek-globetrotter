"use server";

import { getRequestConfig } from "next-intl/server";

import { I18nService } from "@/i18n/service";

export default getRequestConfig(async () => {
  const defaultLanguage = await I18nService.getUserLocale();

  return {
    locale: defaultLanguage,
    messages: (await import(`../../locales/${defaultLanguage}.json`)).default,
  };
});
