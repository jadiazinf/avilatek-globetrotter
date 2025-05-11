"use server";

import { I18nService } from "@/i18n/service";
import { AppLanguages } from "@/i18n/types";

/**
 * Cambia el idioma del usuario y actualiza su preferencia en cookies o almacenamiento
 * @param {AppLanguages} locale
 */
export async function changeLanguage(locale: AppLanguages) {
  // Cambia el idioma de la sesión del usuario
  await I18nService.setUserLocale(locale);
}
