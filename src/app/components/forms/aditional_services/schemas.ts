import { z } from "zod";

import { FlightInfoSchemaProps } from "@/app/components/forms/types";
import { AppLanguageMessages } from "@/i18n/types";

export function aditionalServicesSchema({ t }: FlightInfoSchemaProps) {
  return z
    .object({
      withTravelAssurance: z.boolean().default(false).optional(),
      withPreferentialSeats: z.boolean().default(false).optional(),
      withSpecialAssistance: z.boolean().default(false).optional(),
      specialAssistanceNote: z
        .string()
        .max(200, {
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .aditionalServicesSchema.specialAssistanceMaxCharacters,
          ),
        })
        .optional(),
    })
    .superRefine((val, ctx) => {
      if (val.withSpecialAssistance && !val.specialAssistanceNote?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .aditionalServicesSchema.specialAssistanceNoteIsRequired,
          ),
          path: ["specialAssistanceNote"],
        });
      }
    });
}

export type AditionalServicesSchema = z.infer<
  ReturnType<typeof aditionalServicesSchema>
>;
