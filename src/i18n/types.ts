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
  pages: {
    index: {
      title: "pages.index.title",
      subtitle: "pages.index.subtitle",
      planYourJourney: "pages.index.planYourJourney",
      journeyPrices: "pages.index.journeyPrices",
      destinations: "pages.index.destinations",
      flightsClasses: "pages.index.flightsClasses",
      components: {
        forms: {
          flightInfo: {
            searchFlight:
              "pages.index.components.forms.flightInfo.searchFlight",
            travelersInfo:
              "pages.index.components.forms.flightInfo.travelersInfo",
            aditionalServicesInfo:
              "pages.index.components.forms.flightInfo.aditionalServicesInfo",
            confirmFligth:
              "pages.index.components.forms.flightInfo.confirmFlight",
            schemas: {
              searchFlightSchema: {
                destinyIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.searchFlightSchema.destinyIsRequired",
                departureDateIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.searchFlightSchema.departureDateIsRequired",
                departureDateMustBeInTheFuture:
                  "pages.index.components.forms.flightInfo.schemas.searchFlightSchema.departureDateMustBeInTheFuture",
                returnDateIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.searchFlightSchema.returnDateIsRequired",
                returnDateMustBeGreaterThanDepartureDate:
                  "pages.index.components.forms.flightInfo.schemas.searchFlightSchema.returnDateMustBeGreaterThanDepartureDate",
              },
              travelerSchema: {
                fullNameIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.fullNameIsRequired",
                fullNameMinLength:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.fullNameMinLength",
                birthdateIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.birthdateIsRequired",
                invalidBirthdate:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.invalidBirthdate",
                documentTypeIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.documentTypeIsRequired",
                documentNumberIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.documentNumberIsRequired",
                documentNumber:
                  "pages.index.components.forms.flightInfo.schemas.travelerSchema.documentNumber",
              },
              travelersSchema: {
                travelersQuantityIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.travelersQuantityIsRequired",
                minTravelersQuantity:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.minTravelersQuantity",
                petsQuantityIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.petsQuantityIsRequired",
                invalidPetsQuantity:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.invalidPetsQuantity",
                invalidLuggageQuantity:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.invalidLuggageQuantity",
                invalidInformationForTravelers:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.invalidInformationForTravelers",
                maxTravelersQuantity:
                  "pages.index.components.forms.flightInfo.schemas.travelersSchema.maxTravelersQuantity",
              },
              aditionalServicesSchema: {
                specialAssistanceNoteIsRequired:
                  "pages.index.components.forms.flightInfo.schemas.aditionalServicesSchema.specialAssistanceNoteIsRequired",
                specialAssistanceMaxCharacters:
                  "pages.index.components.forms.flightInfo.schemas.aditionalServicesSchema.specialAssistanceMaxCharacters",
              },
              confirmFlightInvalidData:
                "pages.index.components.forms.flightInfo.schemas.confirmFlightInvalidData",
            },
          },
        },
      },
    },
  },
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
      created: "errors.http.created",
    },
  },
  shared: {
    schemas: {
      invalidDate: "shared.schemas.invalidDate",
    },
    yes: "shared.yes",
    no: "shared.no",
    remove: "shared.remove",
  },
  components: {
    navbar: {
      options: {},
    },
    bookings: {
      book: "components.bookings.book",
      bookFlight: "components.bookings.bookFlight",
    },
    buttons: {
      continue: "components.buttons.continue",
      goBack: "components.buttons.goBack",
      submit: "components.buttons.submit",
    },
  },
  domain: {
    flights: {
      flightClasses: {
        propName: "domain.flights.flightClasses.propName",
        Economy: "domain.flights.flightClasses.Economy",
        Business: "domain.flights.flightClasses.Business",
        FirstClass: "domain.flights.flightClasses.FirstClass",
      },
      destination: {
        propName: "domain.flights.destination.propName",
      },
      apiResponseMessages: {
        noFlights: "domain.flights.apiResponseMessages.noFlights",
        flightBookingSuccessful:
          "domain.flights.apiResponseMessages.flightBookingSuccessful",
      },
    },
    booking: {
      searchFlight: {
        rangeDate: "domain.booking.searchFlight.rangeDate",
        destinationPrice: "domain.booking.searchFlight.destinationPrice",
      },
      travelersData: {
        travelersQuantity: "domain.booking.travelersData.travelersQuantity",
        propName: "domain.booking.travelersData.propName",
        fullname: "domain.booking.travelersData.fullname",
        birthdate: "domain.booking.travelersData.birthdate",
        dni: "domain.booking.travelersData.dni",
        dniType: "domain.booking.travelersData.dniType",
        withPets: "domain.booking.travelersData.withPets",
        petsQuantity: "domain.booking.travelersData.petsQuantity",
        withExtraLuggage: "domain.booking.travelersData.withExtraLuggage",
        extraLuggageQuantity:
          "domain.booking.travelersData.extraLuggageQuantity",
        petsCost: "domain.booking.travelersData.petsCost",
        extraLuggageCost: "domain.booking.travelersData.extraLuggageCost",
      },
      extraServices: {
        propName: "domain.booking.extraServices.propName",
        withTravelAssurance: "domain.booking.extraServices.withTravelAssurance",
        withPreferenceSeats: "domain.booking.extraServices.withPreferenceSeats",
        withSpecialAssistance:
          "domain.booking.extraServices.withSpecialAssistance",
        specialAssistanceDescription:
          "domain.booking.extraServices.specialAssistanceDescription",
      },
      total: "domain.booking.total",
      traveler: "domain.booking.traveler",
    },
  },
};
