"use client";

import { addToast } from "@heroui/toast";
import { useTranslations } from "next-intl";

import { AppLanguageMessages } from "@/i18n/types";

export function ShowNoFlightsMessage() {
  const t = useTranslations();

  addToast({
    color: "danger",
    title: t(AppLanguageMessages.domain.flights.apiResponseMessages.noFlights),
  });

  return <></>;
}
