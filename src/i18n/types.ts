import { useTranslations } from "next-intl";

/**
 * Supported application languages
 * @enum {string}
 */
export enum AppLanguages {
  /** English */
  EN = "en",
  /** Spanish */
  ES = "es",
}

/**
 * Type for next-intl translation function
 * @typedef {ReturnType<typeof useTranslations>} TranslationFunction
 */
export type TranslationFunction = ReturnType<typeof useTranslations>;

/**
 * Centralized type-safe message keys for internationalization.
 *
 * This object serves as both:
 * 1. A runtime lookup for message keys
 * 2. A TypeScript type definition for autocompletion
 *
 * @constant {Readonly<Record<string, string>>} AppLanguageMessages
 * @see {@link https://next-intl-docs.vercel.app/docs/usage/typescript#type-safety} Next-Intl Type Safety
 *
 * @example
 * // Using with useTranslations:
 * const t = useTranslations();
 * t(AppLanguageMessages.welcome); // "Welcome"
 *
 * @example
 * // JSON files should mirror this structure:
 * // locales/en.json
 * {
 *   "welcome": "Welcome",
 *   "errors": {
 *     "http": {
 *       "notFound": "Page not found"
 *     }
 *   }
 * }
 */
export const AppLanguageMessages = {
  welcome: "welcome",
  errors: {
    http: {
      noData: "errors.http.noData",
      badRequest: "errors.http.badRequest",
      unauthorized: "errors.http.unauthorized",
      forbidden: "errors.http.forbidden",
      notFound: "errors.http.notFound",
      methodNotAllowed: "errors.http.methodNotAllowed",
      requestTimeout: "errors.http.requestTimeout",
      conflict: "errors.http.conflict",
      unprocesableEntity: "errors.http.unprocessableEntity",
      tooManyRequests: "errors.http.tooManyRequests",
      internalServerError: "errors.http.internalServerError",
      notImplemented: "errors.http.notImplemented",
      badGateway: "errors.http.badGateway",
      serviceUnavailable: "errors.http.serviceUnavailable",
      gatewayTimeout: "errors.http.gatewayTimeout",
      default: "errors.http.default",
    },
  },
  components: {
    navbar: {
      options: {
        reserve: "components.navbar.options.reserve",
      },
    },
  },
};
