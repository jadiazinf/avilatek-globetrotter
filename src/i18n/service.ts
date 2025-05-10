import { cookies } from "next/headers";

import { AppLanguages } from "@/i18n/types";

/**
 * Default application locale
 * @constant {AppLanguages}
 * @default AppLanguages.ES
 */
export const AppDefaultLocale = AppLanguages.ES;

/**
 * Cookie name for storing user locale preference
 * @constant {string}
 */
const COOKIE_NAME = "USER_LOCALE";

/**
 * Service for managing internationalization preferences
 * @class I18nService
 * @description Handles locale persistence via cookies
 */
export class I18nService {
  /**
   * Retrieves user's preferred locale from cookies
   * @static
   * @async
   * @returns {Promise<AppLanguages>} User's locale or default if not set
   * @example
   * const locale = await I18nService.getUserLocale();
   */
  static async getUserLocale() {
    return (await cookies()).get(COOKIE_NAME)?.value || AppDefaultLocale;
  }

  /**
   * Sets user's locale preference in cookies
   * @static
   * @async
   * @param {AppLanguages} locale - Locale to set
   * @example
   * await I18nService.setUserLocale(AppLanguages.EN);
   */
  static async setUserLocale(locale: AppLanguages) {
    (await cookies()).set(COOKIE_NAME, locale);
  }
}
