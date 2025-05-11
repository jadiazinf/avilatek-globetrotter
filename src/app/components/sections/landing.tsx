import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { BookFlightButton } from "@/components/ui/custom/bookings/buttons/component";
import { AppLanguageMessages } from "@/i18n/types";
import { PlanYouYourney } from "@/app/components/plan_your_journey/component";
import planeBackwing from "@/public/assets/plane.png";
import { Flight } from "@/domain/fligth/model";

export type Props = {
  flights: Flight[];
};

export async function IndexLandingSection(props: Props) {
  const t = await getTranslations();

  return (
    <div>
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 py-12">
        <div className="w-full flex flex-col items-start space-y-4 lg:space-y-6 text-center lg:text-left">
          <h1
            className={`font-raleway text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight`}
          >
            {t(AppLanguageMessages.pages.index.title)}
          </h1>
          <h2
            className={`font-raleway text-lg md:text-xl lg:text-2xl text-gray-600 font-light w-full`}
          >
            {t(AppLanguageMessages.pages.index.subtitle)}
          </h2>
          <div className="hidden lg:block">
            <BookFlightButtonComponent />
          </div>
        </div>
        <div className="w-full relative aspect-video lg:aspect-[4/3]">
          <Image
            fill
            priority
            alt=""
            className="object-contain object-center"
            placeholder="blur"
            src={planeBackwing}
          />
        </div>
        <div className="lg:hidden">
          <BookFlightButtonComponent />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <PlanYouYourney flights={props.flights} />
      </div>
    </div>
  );
}

function BookFlightButtonComponent(): JSX.Element {
  return <BookFlightButton radius="full" size="lg" variant="bordered" />;
}
