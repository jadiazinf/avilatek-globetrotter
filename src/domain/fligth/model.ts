import { FlightClass } from "@/app/components/forms/search_flight/types";

export type Flight = {
  destination: string;
  class: FlightClass;
  priceUSD: number;
};
