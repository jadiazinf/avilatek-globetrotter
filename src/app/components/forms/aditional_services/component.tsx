"use client";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Switch } from "@heroui/switch";
import { Textarea } from "@heroui/input";
import { FaUmbrellaBeach, FaWheelchair, FaChair } from "react-icons/fa";

import {
  aditionalServicesSchema,
  AditionalServicesSchema,
} from "@/app/components/forms/aditional_services/schemas";
import { AppLanguageMessages } from "@/i18n/types";

type Props = {
  data: AditionalServicesSchema;
  onSubmit: (data: AditionalServicesSchema) => void;
  children: ReactNode;
};

export function AditionalServicesForm(props: Props) {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AditionalServicesSchema>({
    resolver: zodResolver(aditionalServicesSchema({ t })),
    defaultValues: props.data || {
      withTravelAssurance: false,
      withPreferentialSeats: false,
      withSpecialAssistance: false,
      specialAssistanceNote: "",
    },
  });

  const [withSpecialAssistance] = watch(["withSpecialAssistance"]);

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-4 gap-5"
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <div className="col-span-full flex flex-col gap-3 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaUmbrellaBeach className="text-lg" />
            <p className="font-medium">
              {t(
                AppLanguageMessages.domain.booking.extraServices
                  .withTravelAssurance,
              )}
            </p>
          </div>
          <Switch
            isSelected={watch("withTravelAssurance")}
            onValueChange={(value) => setValue("withTravelAssurance", value)}
          />
        </div>
      </div>

      <div className="col-span-full flex flex-col gap-3 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaChair className="text-lg" />
            <p className="font-medium">
              {t(
                AppLanguageMessages.domain.booking.extraServices
                  .withPreferenceSeats,
              )}
            </p>
          </div>
          <Switch
            isSelected={watch("withPreferentialSeats")}
            onValueChange={(value) => setValue("withPreferentialSeats", value)}
          />
        </div>
      </div>

      <div className="col-span-full flex flex-col gap-3 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaWheelchair className="text-lg" />
            <p className="font-medium">
              {t(
                AppLanguageMessages.domain.booking.extraServices
                  .withSpecialAssistance,
              )}
            </p>
          </div>
          <Switch
            isSelected={watch("withSpecialAssistance")}
            onValueChange={(value) => setValue("withSpecialAssistance", value)}
          />
        </div>

        {withSpecialAssistance && (
          <Textarea
            description={`${t(
              AppLanguageMessages.domain.booking.extraServices
                .specialAssistanceDescription,
            )}`}
            errorMessage={errors.specialAssistanceNote?.message}
            isInvalid={!!errors.specialAssistanceNote}
            label={t(
              AppLanguageMessages.domain.booking.extraServices
                .specialAssistanceDescription,
            )}
            maxLength={200}
            radius="sm"
            size="lg"
            variant="bordered"
            {...register("specialAssistanceNote")}
          />
        )}
      </div>

      {props.children}
    </form>
  );
}
