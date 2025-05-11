"use client";
import { ReactNode, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { NumberInput } from "@heroui/number-input";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Switch } from "@heroui/switch";
import { Button } from "@heroui/button";
import { LuUserRoundPen, LuTrash2 } from "react-icons/lu";
import { MdOutlinePets, MdOutlineLuggage } from "react-icons/md";

import {
  travelersSchema,
  TravelersSchema,
  DocumentType,
} from "@/app/components/forms/travelers_info/schemas";
import { AppLanguageMessages } from "@/i18n/types";

type Props = {
  data: TravelersSchema;
  onSubmit: (data: TravelersSchema) => void;
  children: ReactNode;
};

export function TravelersInfoForm(props: Props) {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<TravelersSchema>({
    // @ts-ignore
    resolver: zodResolver(travelersSchema({ t })),
    defaultValues: props.data || {
      travelersQuantity: 1,
      travelersInfo: [
        { fullName: "", birthdate: "", documentType: "V", documentNumber: "" },
      ],
      withPet: false,
      petsQuantity: 0,
      extraLuggage: false,
      luggageQuantity: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "travelersInfo",
  });

  const [withPet, extraLuggage] = watch(["withPet", "extraLuggage"]);
  const travelersQuantity = watch("travelersQuantity");

  useEffect(() => {
    const currentTravelers = getValues("travelersInfo").length;

    if (travelersQuantity > currentTravelers) {
      const toAdd = travelersQuantity - currentTravelers;

      for (let i = 0; i < toAdd; i++) {
        append({
          fullName: "",
          birthdate: new Date("1980-01-01").toISOString().split("T")[0],
          documentType: "V",
          documentNumber: "",
        });
      }
    } else if (travelersQuantity < currentTravelers) {
      const toRemove = currentTravelers - travelersQuantity;

      for (let i = 0; i < toRemove; i++) {
        remove(currentTravelers - 1 - i);
      }
    }
  }, [travelersQuantity, append, remove, getValues]);

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-4 gap-5"
      // @ts-ignore
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <Controller
        control={control}
        name="travelersQuantity"
        render={({ field }) => (
          <NumberInput
            className="col-span-full"
            errorMessage={errors.travelersQuantity?.message}
            isInvalid={!!errors.travelersQuantity}
            label={t(
              AppLanguageMessages.domain.booking.travelersData
                .travelersQuantity,
            )}
            max={10}
            min={1}
            radius="sm"
            size="lg"
            value={field.value}
            variant="bordered"
            onChange={(val) => field.onChange(Number(val))}
          />
        )}
      />

      <div className="col-span-full w-full flex items-center gap-2">
        <LuUserRoundPen />
        <p className="font-medium">
          {t(AppLanguageMessages.domain.booking.travelersData.propName)}
        </p>
      </div>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="col-span-full flex flex-col gap-5 p-4 border rounded-lg"
        >
          <div className="flex justify-between items-center">
            {index > 0 && (
              <>
                <h3 className="font-medium">{index + 1}</h3>
                <Button
                  isIconOnly
                  color="danger"
                  size="sm"
                  variant="light"
                  onPress={() => {
                    setValue(
                      "travelersQuantity",
                      getValues("travelersQuantity") - 1,
                    );
                    remove(index);
                  }}
                >
                  <LuTrash2 size={18} />
                </Button>
              </>
            )}
          </div>

          <Input
            errorMessage={errors.travelersInfo?.[index]?.fullName?.message}
            isInvalid={!!errors.travelersInfo?.[index]?.fullName}
            label={t(AppLanguageMessages.domain.booking.travelersData.fullname)}
            radius="sm"
            size="lg"
            variant="bordered"
            {...register(`travelersInfo.${index}.fullName`)}
          />

          <Controller
            control={control}
            name={`travelersInfo.${index}.birthdate`}
            render={({ field }) => (
              <Input
                errorMessage={errors.travelersInfo?.[index]?.birthdate?.message}
                isInvalid={!!errors.travelersInfo?.[index]?.birthdate}
                label={t(
                  AppLanguageMessages.domain.booking.travelersData.birthdate,
                )}
                radius="sm"
                size="lg"
                type="date"
                value={field.value}
                variant="bordered"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />

          <div className="flex gap-3 items-center">
            <Controller
              control={control}
              name={`travelersInfo.${index}.documentType`}
              render={({ field }) => (
                <Select
                  errorMessage={
                    errors.travelersInfo?.[index]?.documentType?.message
                  }
                  isInvalid={!!errors.travelersInfo?.[index]?.documentType}
                  label={t(
                    AppLanguageMessages.domain.booking.travelersData.dni,
                  )}
                  radius="sm"
                  selectedKeys={[field.value]}
                  size="lg"
                  variant="bordered"
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0] as DocumentType)
                  }
                >
                  {Object.entries(DocumentType).map(([_, value]) => (
                    <SelectItem key={value}>{value}</SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              errorMessage={
                errors.travelersInfo?.[index]?.documentNumber?.message
              }
              isInvalid={!!errors.travelersInfo?.[index]?.documentNumber}
              label={t(AppLanguageMessages.domain.booking.travelersData.dni)}
              radius="sm"
              size="lg"
              variant="bordered"
              {...register(`travelersInfo.${index}.documentNumber`)}
            />
          </div>
        </div>
      ))}

      <div className="col-span-full flex flex-col gap-3 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdOutlinePets className="text-lg" />
            <p className="font-medium">
              {t(AppLanguageMessages.domain.booking.travelersData.withPets)}
            </p>
          </div>
          <Switch
            isSelected={withPet}
            onValueChange={(val) => setValue("withPet", val)}
          />
        </div>

        {withPet && (
          <>
            <Controller
              control={control}
              name="petsQuantity"
              render={({ field }) => (
                <NumberInput
                  errorMessage={errors.petsQuantity?.message}
                  isInvalid={!!errors.petsQuantity}
                  label={t(
                    AppLanguageMessages.domain.booking.travelersData
                      .petsQuantity,
                  )}
                  min={1}
                  radius="sm"
                  size="lg"
                  value={field.value}
                  variant="bordered"
                  onChange={(val) => field.onChange(Number(val))}
                />
              )}
            />
            <p className="text-sm text-gray-500">
              {t(AppLanguageMessages.domain.booking.travelersData.petsCost)} 100
              USD
            </p>
          </>
        )}
      </div>

      <div className="col-span-full flex flex-col gap-3 p-4 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdOutlineLuggage className="text-lg" />
            <p className="font-medium">
              {t(
                AppLanguageMessages.domain.booking.travelersData
                  .withExtraLuggage,
              )}
            </p>
          </div>
          <Switch
            isSelected={extraLuggage}
            onValueChange={(val) => setValue("extraLuggage", val)}
          />
        </div>

        {extraLuggage && (
          <>
            <Controller
              control={control}
              name="luggageQuantity"
              render={({ field }) => (
                <NumberInput
                  errorMessage={errors.luggageQuantity?.message}
                  isInvalid={!!errors.luggageQuantity}
                  label={t(
                    AppLanguageMessages.domain.booking.travelersData
                      .extraLuggageQuantity,
                  )}
                  min={1}
                  radius="sm"
                  size="lg"
                  value={field.value}
                  variant="bordered"
                  onChange={(val) => field.onChange(Number(val))}
                />
              )}
            />
            <p className="text-sm text-gray-500">
              {t(
                AppLanguageMessages.domain.booking.travelersData
                  .extraLuggageCost,
              )}{" "}
              50 USD
            </p>
          </>
        )}
      </div>

      {props.children}
    </form>
  );
}
