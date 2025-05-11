"use client";

import { useTranslations } from "next-intl";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { format } from "date-fns";
import { MdFlight, MdPets, MdLuggage, MdMedicalServices } from "react-icons/md";
import { FaUser, FaCalendarAlt, FaChair } from "react-icons/fa";
import { useTransition } from "react";
import { addToast } from "@heroui/toast";
import { redirect } from "next/navigation";

import { bookFlightAction } from "./actions/book_flight";

import { FlightFormData, FlightFormProps } from "@/app/components/forms/types";
import { AppLanguageMessages, TranslationFunction } from "@/i18n/types";
import {
  getPriceByDestinationAndClass,
  translateFlightClass,
} from "@/domain/fligth/helpers";
import { FlightClass } from "@/app/components/forms/search_flight/types";
import { searchFlightSchema } from "@/app/components/forms/search_flight/schemas";
import { travelersSchema } from "@/app/components/forms/travelers_info/schemas";
import { aditionalServicesSchema } from "@/app/components/forms/aditional_services/schemas";

export function FlightInfo({ flights, data, onPrevious }: FlightFormProps) {
  const t = useTranslations();

  function validateForm(data: FlightFormData, t: TranslationFunction) {
    const searchSchema = searchFlightSchema({ t });
    const travelers = travelersSchema({ t });
    const services = aditionalServicesSchema({ t });

    return (
      searchSchema.safeParse(data.searchFlight).success &&
      travelers.safeParse(data.travelers).success &&
      services.safeParse(data.aditionalServices).success
    );
  }

  const isFormValid = validateForm(data, t);

  const [isPending, startTransition] = useTransition();

  function handleBookFlight() {
    const isValid = validateForm(data, t);

    if (!isValid) {
      addToast({
        title: t(AppLanguageMessages.errors.http.badRequest),
        color: "danger",
      });

      return;
    }

    startTransition(async () => {
      await bookFlightAction();

      addToast({
        title: t(AppLanguageMessages.errors.http.created),
        color: "success",
      });

      setTimeout(() => {
        redirect("/");
      }, 1000);
    });
  }

  if (!isFormValid) {
    return (
      <div className="text-center text-red-600 p-4 border border-red-300 rounded-md bg-red-50">
        {t(
          AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
            .confirmFlightInvalidData,
        ) ||
          "Faltan datos necesarios para mostrar la información del vuelo. Por favor, completa los pasos anteriores."}
      </div>
    );
  }

  const calculateTotal = () => {
    let total = 0;

    total +=
      getPriceByDestinationAndClass(
        flights,
        data.searchFlight.destiny,
        data.searchFlight.flightClass as FlightClass,
      )! * data.travelers.travelersQuantity;

    if (data.travelers?.withPet) {
      total += (data.travelers.petsQuantity || 0) * 100;
    }

    if (data.travelers?.extraLuggage) {
      total += (data.travelers.luggageQuantity || 0) * 50;
    }

    if (data.aditionalServices?.withTravelAssurance) {
      total += 75;
    }
    if (data.aditionalServices?.withPreferentialSeats) {
      total += 30;
    }

    return total;
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {t(
        AppLanguageMessages.pages.index.components.forms.flightInfo
          .confirmFligth,
      )}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DetailItem
            icon={<MdFlight />}
            label={t(AppLanguageMessages.domain.flights.destination.propName)}
            value={data.searchFlight?.destiny || "-"}
          />

          <DetailItem
            icon={<FaCalendarAlt />}
            label={t(AppLanguageMessages.domain.booking.searchFlight.rangeDate)}
            value={
              data.searchFlight?.departureDate && data.searchFlight?.returnDate
                ? `${format(new Date(data.searchFlight.departureDate), "PPP")} - ${format(new Date(data.searchFlight.returnDate), "PPP")}`
                : "-"
            }
          />

          <DetailItem
            icon={<MdFlight />}
            label={t(AppLanguageMessages.domain.flights.flightClasses.propName)}
            value={translateFlightClass(
              data!.searchFlight!.flightClass! as FlightClass,
              t,
            )}
          />

          <DetailItem
            icon={<FaChair />}
            label={t(
              AppLanguageMessages.domain.booking.searchFlight.destinationPrice,
            )}
            value={`$ ${
              getPriceByDestinationAndClass(
                flights,
                data.searchFlight?.destiny,
                data.searchFlight?.flightClass as FlightClass,
              ) || 0
            } USD`}
          />
        </div>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 font-medium">
          <FaUser className="text-xl" />
          {t(AppLanguageMessages.domain.booking.travelersData.propName)}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailItem
            label={t(
              AppLanguageMessages.domain.booking.travelersData
                .travelersQuantity,
            )}
            value={data.travelers?.travelersQuantity}
          />
          {data.travelers?.travelersInfo?.map((traveler, index) => (
            <div key={index} className="border p-3 rounded-lg">
              <p className="font-medium">{traveler.fullName}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(traveler.birthdate), "PPP")} -{" "}
                {traveler.documentType}-{traveler.documentNumber}
              </p>
            </div>
          ))}
        </div>
      </div>

      {(data.travelers?.withPet ||
        data.travelers?.extraLuggage ||
        data.aditionalServices?.withTravelAssurance ||
        data.aditionalServices?.withPreferentialSeats ||
        data.aditionalServices?.withSpecialAssistance) && (
        <>
          <Divider />
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-medium">
              <MdMedicalServices className="text-xl" />
              {t(AppLanguageMessages.domain.booking.extraServices.propName)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.travelers?.withPet && (
                <DetailItem
                  icon={<MdPets />}
                  label={t(
                    AppLanguageMessages.domain.booking.travelersData.withPets,
                  )}
                  value={`${data.travelers.petsQuantity} x $100 = $${(data.travelers.petsQuantity || 0) * 100}`}
                />
              )}
              {data.travelers?.extraLuggage && (
                <DetailItem
                  icon={<MdLuggage />}
                  label={t(
                    AppLanguageMessages.domain.booking.travelersData
                      .withExtraLuggage,
                  )}
                  value={`${data.travelers.luggageQuantity} x $50 = $${(data.travelers.luggageQuantity || 0) * 50}`}
                />
              )}
              {data.aditionalServices?.withTravelAssurance && (
                <DetailItem
                  icon={<MdMedicalServices />}
                  label={t(
                    AppLanguageMessages.domain.booking.extraServices
                      .withTravelAssurance,
                  )}
                  value="$75"
                />
              )}
              {data.aditionalServices?.withPreferentialSeats && (
                <DetailItem
                  icon={<FaChair />}
                  label={t(
                    AppLanguageMessages.domain.booking.extraServices
                      .withPreferenceSeats,
                  )}
                  value="$30"
                />
              )}
              {data.aditionalServices?.withSpecialAssistance && (
                <DetailItem
                  label={t(
                    AppLanguageMessages.domain.booking.extraServices
                      .withSpecialAssistance,
                  )}
                  value={data.aditionalServices.specialAssistanceNote}
                />
              )}
            </div>
          </div>
        </>
      )}

      <Divider />

      <div className="space-y-2">
        <div className="flex justify-between font-medium">
          <span>{t(AppLanguageMessages.domain.booking.total)}:</span>
          <span>$ {calculateTotal()} USD</span>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          color="primary"
          isDisabled={isPending}
          radius="sm"
          variant="ghost"
          onPress={() => onPrevious()}
        >
          {t(AppLanguageMessages.components.buttons.goBack)}
        </Button>
        <Button
          color="primary"
          isLoading={isPending}
          radius="sm"
          onPress={handleBookFlight}
        >
          {t(AppLanguageMessages.components.bookings.bookFlight)}
        </Button>
      </div>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string | number | undefined;
}) {
  return (
    <div className="flex items-start gap-3">
      {icon && <span className="mt-1">{icon}</span>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value || "-"}</p>
      </div>
    </div>
  );
}
