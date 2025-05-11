import { getTranslations } from "next-intl/server";

import { montserrat } from "@/config/fonts";
import { AppLanguageMessages } from "@/i18n/types";
import { FadeTextSlider } from "@/components/ui/custom/sliders/vertical_text_slider";
import { Flight } from "@/domain/fligth/model";
import { extractDestinationsFromApi } from "@/domain/fligth/helpers";

export async function PlanYouYourney(props: { flights: Flight[] }) {
  const t = await getTranslations();

  const texts = [
    t(AppLanguageMessages.pages.index.journeyPrices),
    `${t(AppLanguageMessages.pages.index.destinations)}: ${extractDestinationsFromApi(props.flights).slice(0, 3).join(", ")}`,
    t(AppLanguageMessages.pages.index.flightsClasses),
  ];

  return (
    <div className="flex flex-col gap-5 items-center">
      <h3
        className={`${montserrat.variable} font-raleway text-lg md:text-xl lg:text-3xl font-bold`}
      >
        {t(AppLanguageMessages.pages.index.planYourJourney)}
      </h3>
      <FadeTextSlider texts={texts} />
    </div>
  );
}
