"use server";

import { getRequestConfig } from "next-intl/server";

import { I18nService } from "@/i18n/service";

/**
 * Next-intl configuration loader
 * @default
 * @description Server-side configuration for internationalization
 * @returns {Promise<Object>} Configuration object with locale and messages
 */
export default getRequestConfig(async () => {
  const defaultLanguage = await I18nService.getUserLocale();

  return {
    locale: defaultLanguage,
    messages: (await import(`../../locales/${defaultLanguage}.json`)).default,
  };
});
