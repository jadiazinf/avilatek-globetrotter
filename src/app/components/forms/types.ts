import { TravelersSchema } from "@/app/components/forms/travelers_info/schemas";
import { AditionalServicesSchema } from "@/app/components/forms/aditional_services/schemas";
import { SearchFlightSchema } from "@/app/components/forms/search_flight/schemas";
import { TranslationFunction } from "@/i18n/types";
import { Flight } from "@/domain/fligth/model";

export type FlightInfoSchemaProps = {
  t: TranslationFunction;
};

export type FlightFormData = {
  searchFlight: SearchFlightSchema;
  travelers: TravelersSchema;
  aditionalServices: AditionalServicesSchema;
};

export type FlightFormProps = {
  data: FlightFormData;
  flights: Flight[];
  onPrevious: () => void;
};
