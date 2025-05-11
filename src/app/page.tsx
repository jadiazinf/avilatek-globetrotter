import { fetchAllFlights } from "@/app/actions/fetch_flights";
import { IndexLandingSection } from "@/app/components/sections/landing";
import { Flight } from "@/domain/fligth/model";
import { ShowNoFlightsMessage } from "@/app/components/errors/no_flights";
import { IndexFormSection } from "@/app/components/sections/form";

export default async function Home() {
  const flights = (await fetchAllFlights()) as Flight[];

  return (
    <div className={`container mx-auto w-full min-h-[calc(100vh-4rem)] px-4`}>
      {flights.length === 0 && <ShowNoFlightsMessage />}
      <IndexLandingSection flights={flights as Flight[]} />
      <IndexFormSection flights={flights as Flight[]} />
    </div>
  );
}
