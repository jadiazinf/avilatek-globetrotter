"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Select, SelectItem } from "@heroui/select";
import { fromDate } from "@internationalized/date";
import { DateRangePicker } from "@heroui/date-picker";

import { FlightClass } from "@/app/components/forms/search_flight/types";
import { Flight } from "@/domain/fligth/model";
import {
  searchFlightSchema,
  SearchFlightSchema,
} from "@/app/components/forms/search_flight/schemas";
import {
  extractDestinationsFromApi,
  extractFlightClassesFromApi,
  translateFlightClass,
} from "@/domain/fligth/helpers";
import { AppLanguageMessages } from "@/i18n/types";

type Props = {
  flights: Flight[];
  data: SearchFlightSchema;
  onSubmit: (data: SearchFlightSchema) => void;
  children: ReactNode;
};

export function SearchFlightForm(props: Props) {
  const [translatedClasses, setTranslatedClasses] = useState<string[]>([]);
  const classes = extractFlightClassesFromApi(props.flights);
  const destinations = extractDestinationsFromApi(props.flights);

  const t = useTranslations();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SearchFlightSchema>({
    resolver: zodResolver(searchFlightSchema({ t })),
    defaultValues: props.data || {
      destiny: "",
      departureDate: "",
      returnDate: "",
      flightClass: FlightClass.ECONOMY,
    },
  });

  const departureDate = watch("departureDate");
  const returnDate = watch("returnDate");

  const rangeValue =
    departureDate && returnDate
      ? {
          start: fromDate(new Date(departureDate), "UTC"),
          end: fromDate(new Date(returnDate), "UTC"),
        }
      : undefined;

  useEffect(() => {
    async function translateClasses() {
      const translated = await Promise.all(
        classes.map((flightClass) =>
          translateFlightClass(flightClass as FlightClass, t),
        ),
      );

      setTranslatedClasses(translated);
    }

    translateClasses();
  }, []);

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-4 gap-5"
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <Select
        className="col-span-full"
        errorMessage={errors.destiny?.message}
        isInvalid={!!errors.destiny}
        label={t(AppLanguageMessages.domain.flights.destination.propName)}
        radius="sm"
        size="lg"
        variant="bordered"
        {...register("destiny")}
      >
        {destinations.map((destination) => (
          <SelectItem key={destination} data-value={destination}>
            {destination}
          </SelectItem>
        ))}
      </Select>
      <Select
        className="col-span-full"
        errorMessage={errors.flightClass?.message}
        isInvalid={!!errors.flightClass}
        label={t(AppLanguageMessages.domain.flights.flightClasses.propName)}
        radius="sm"
        size="lg"
        variant="bordered"
        {...register("flightClass")}
      >
        {classes.map((flightClass, index) => (
          <SelectItem key={flightClass} data-value={flightClass}>
            {translatedClasses[index]}
          </SelectItem>
        ))}
      </Select>
      <DateRangePicker
        className="col-span-full"
        errorMessage={
          errors.departureDate?.message || errors.returnDate?.message
        }
        isInvalid={!!errors.departureDate || !!errors.returnDate}
        label={t(AppLanguageMessages.domain.booking.searchFlight.rangeDate)}
        radius="sm"
        size="lg"
        value={rangeValue}
        variant="bordered"
        onChange={(value) => {
          if (value) {
            setValue("departureDate", value.start.toDate(), {
              shouldValidate: true,
            });
            setValue("returnDate", value.end.toDate(), {
              shouldValidate: true,
            });
          }
        }}
      />

      {props.children}
    </form>
  );
}
