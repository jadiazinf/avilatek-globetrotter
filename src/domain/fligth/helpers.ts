import { Flight } from "@/domain/fligth/model";
import {
  FlightClass,
  FlightClassesTranslationsPropsName,
} from "@/app/components/forms/search_flight/types";
import { AppLanguageMessages, TranslationFunction } from "@/i18n/types";

function getPropName(
  attribute: FlightClass,
): FlightClassesTranslationsPropsName {
  switch (attribute) {
    case FlightClass.FIRST_CLASS:
      return FlightClassesTranslationsPropsName.FIRST_CLASS;
    case FlightClass.BUSINESS:
      return FlightClassesTranslationsPropsName.BUSINESS;
    case FlightClass.ECONOMY:
      return FlightClassesTranslationsPropsName.ECONOMY;
  }
}

export function translateFlightClass(
  flightClass: FlightClass,
  t: TranslationFunction,
) {
  return t(
    `${AppLanguageMessages.domain.flights.flightClasses[getPropName(flightClass)]}`,
  );
}

export function extractFlightClassesFromApi(flights: Flight[]): string[] {
  const uniqueClasses = new Set<string>();

  flights.forEach((flight) => {
    uniqueClasses.add(flight.class);
  });

  return Array.from(uniqueClasses);
}

export function extractDestinationsFromApi(flights: Flight[]): string[] {
  const destinations = new Set<string>();

  flights.forEach((flight) => {
    destinations.add(flight.destination);
  });

  return Array.from(destinations);
}

export function getPriceByDestinationAndClass(
  flights: Flight[],
  destination: string,
  flightClass: FlightClass,
): number | null {
  const foundFlight = flights.find(
    (flight) =>
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.class === flightClass,
  );

  return foundFlight ? foundFlight.priceUSD : null;
}
