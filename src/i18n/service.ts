import { cookies } from "next/headers";

import { AppLanguages } from "@/i18n/types";

export const AppDefaultLocale = AppLanguages.ES;

const COOKIE_NAME = "USER_LOCALE";

export class I18nService {
  static async getUserLocale() {
    return (await cookies()).get(COOKIE_NAME)?.value || AppDefaultLocale;
  }

  static async setUserLocale(locale: AppLanguages) {
    (await cookies()).set(COOKIE_NAME, locale);
  }
}
