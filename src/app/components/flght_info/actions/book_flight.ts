"use server";

import { FlightFormData } from "@/app/components/forms/types";

export async function bookFlightAction(data: FlightFormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    message: "Reserva realizada con éxito",
    dataSummary: {
      destination: data.searchFlight.destiny,
      departureDate: data.searchFlight.departureDate,
      returnDate: data.searchFlight.returnDate,
      travelers: data.travelers.travelersInfo.map((t) => t.fullName),
    },
  };
}
