import { useTranslations } from "next-intl";

export enum AppLanguages {
  EN = "en",
  ES = "es",
}

export type TranslationFunction = ReturnType<typeof useTranslations>;

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
      }
    }
  },
};
