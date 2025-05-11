import { z } from "zod";

import { AppLanguageMessages, TranslationFunction } from "@/i18n/types";

export const DocumentType = {
  V: "V",
  E: "E",
  P: "P",
} as const;

export type DocumentType = keyof typeof DocumentType;

export function travelersSchema({ t }: { t: TranslationFunction }) {
  return z
    .object({
      travelersQuantity: z
        .number({
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .travelersSchema.travelersQuantityIsRequired,
          ),
        })
        .min(1)
        .max(10, {
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .travelersSchema.maxTravelersQuantity,
          ),
        }),
      travelersInfo: z.array(
        z.object({
          fullName: z.string().min(1),
          birthdate: z
            .string()
            .refine((val) => !isNaN(new Date(val).getTime()), {
              message: t(AppLanguageMessages.shared.schemas.invalidDate),
            }),
          documentType: z.enum(["V", "E", "P"]),
          documentNumber: z.string().min(1),
        }),
      ),
      withPet: z.boolean().default(false),
      petsQuantity: z
        .number()
        .min(0)
        .optional()
        .transform((val) => (val === undefined ? 0 : val)),
      extraLuggage: z.boolean().default(false),
      luggageQuantity: z
        .number()
        .min(0)
        .optional()
        .transform((val) => (val === undefined ? 0 : val)),
    })
    .refine((data) => !data.withPet || data.petsQuantity >= 1, {
      message: t(
        AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
          .travelersSchema.invalidPetsQuantity,
      ),
      path: ["petsQuantity"],
    })
    .refine((data) => !data.extraLuggage || data.luggageQuantity >= 1, {
      message: t(
        AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
          .travelersSchema.invalidLuggageQuantity,
      ),
      path: ["luggageQuantity"],
    });
}

export type TravelersSchema = z.infer<ReturnType<typeof travelersSchema>>;
