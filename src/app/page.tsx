import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { AppLanguageMessages } from "@/i18n/types";
import planeBackwing from "@/public/assets/plane.png";
import { BookFlightModalButton } from "@/components/ui/custom/bookings/buttons/modal_pop_up/component";
import { PlanYouYourney } from "@/app/components/plan_your_journey/component";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className={`container mx-auto w-full min-h-[calc(100vh-4rem)] px-4`}>
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
            <BookFlightButton />
          </div>
        </div>
        <div className="w-full relative aspect-video lg:aspect-[4/3]">
          <Image
            fill
            priority
            alt=""
            className="object-contain object-center rounded-full"
            placeholder="blur"
            src={planeBackwing}
          />
        </div>
        <div className="lg:hidden">
          <BookFlightButton />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <PlanYouYourney />
      </div>
    </div>
  );
}

function BookFlightButton(): JSX.Element {
  return <BookFlightModalButton radius="full" size="lg" variant="bordered" />;
}
