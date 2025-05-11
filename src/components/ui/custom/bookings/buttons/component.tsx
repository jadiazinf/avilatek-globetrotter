"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

import { AppLanguageMessages } from "@/i18n/types";

type Props = {
  radius?: "sm" | "full";
  variant?: "solid" | "bordered";
  size?: "md" | "lg";
};

export function BookFlightButton(props: Props) {
  const { radius = "sm", variant = "solid", size = "md" } = props;

  const t = useTranslations();

  function handlePress() {
    redirect("/#form_section");
  }

  return (
    <Button
      color="primary"
      radius={radius}
      size={size}
      variant={variant}
      onPress={handlePress}
    >
      {t(AppLanguageMessages.components.bookings.book)}
    </Button>
  );
}
