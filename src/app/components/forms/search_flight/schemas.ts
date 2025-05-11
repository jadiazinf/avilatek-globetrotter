import { z } from "zod";

import { FlightInfoSchemaProps } from "@/app/components/forms/types";
import { AppLanguageMessages } from "@/i18n/types";
import { dateSchema } from "@/libs/shared/schemas";
import { FlightClass } from "@/app/components/forms/search_flight/types";

export function searchFlightSchema({ t }: FlightInfoSchemaProps) {
  return z
    .object({
      departurePlace: z
        .string({
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.departurePlaceIsRequired,
          ),
        })
        .min(
          1,
          t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.departurePlaceIsRequired,
          ),
        ),
      destiny: z
        .string({
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.destinyIsRequired,
          ),
        })
        .min(
          1,
          t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.destinyIsRequired,
          ),
        ),
      departureDate: dateSchema.refine(
        (date) => new Date(date) >= new Date(new Date().setHours(0, 0, 0, 0)),
        {
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.departureDateMustBeInTheFuture,
          ),
        },
      ),
      returnDate: dateSchema,
      flightClass: z.enum(Object.values(FlightClass) as [string, ...string[]]),
    })
    .superRefine((val, ctx) => {
      if (!val.returnDate || !val.departureDate) return;
      const returnDate = new Date(val.returnDate);
      const departureDate = new Date(val.departureDate);

      if (returnDate <= departureDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t(
            AppLanguageMessages.pages.index.components.forms.flightInfo.schemas
              .searchFlightSchema.returnDateMustBeGreaterThanDepartureDate,
          ),
          path: ["returnDate"],
        });
      }
    });
}

export type SearchFlightSchema = z.infer<ReturnType<typeof searchFlightSchema>>;
