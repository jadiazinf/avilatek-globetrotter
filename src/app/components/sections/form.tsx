"use client";

import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import { ReactNode, useState } from "react";
import { useTranslations } from "use-intl";
import { MdFlightTakeoff, MdMedicalServices } from "react-icons/md";
import { FaCheckDouble, FaPersonWalkingLuggage } from "react-icons/fa6";
import { Button } from "@heroui/button";

import { TravelersInfoForm } from "@/app/components/forms/travelers_info/component";
import { AditionalServicesForm } from "@/app/components/forms/aditional_services/component";
import { FlightInfo } from "@/app/components/flght_info/component";
import { FlightFormData } from "@/app/components/forms/types";
import { AppLanguageMessages, TranslationFunction } from "@/i18n/types";
import { Flight } from "@/domain/fligth/model";
import { SearchFlightForm } from "@/app/components/forms/search_flight/component";

export type FlightFormState =
  | "searchFlight"
  | "travelersInfo"
  | "aditionalServices"
  | "confirmFlight";

type Props = {
  flights: Flight[];
};

export function IndexFormSection(props: Props) {
  const [currentTab, setCurrentTab] = useState<FlightFormState>("searchFlight");

  const [formData, setFormData] = useState<FlightFormData>(
    {} as FlightFormData,
  );

  const t = useTranslations();

  return (
    <div
      className="w-full flex justify-center items-center mt-20"
      id="form_section"
    >
      <Card className="p-5 w-full md:w-2/3" radius="sm">
        <CardBody>
          <Tabs
            aria-label="Options"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-fire",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-black",
            }}
            color="primary"
            selectedKey={currentTab}
            variant="underlined"
            onSelectionChange={(key) => setCurrentTab(key as FlightFormState)}
          >
            <Tab key="searchFlight" title={<FlightInfoTitle t={t} />}>
              <SearchFlightForm
                data={formData.searchFlight}
                flights={props.flights}
                onSubmit={(data) => {
                  setFormData((prev) => ({ ...prev, searchFlight: data }));
                  setCurrentTab("travelersInfo");
                }}
              >
                <FormFooter />
              </SearchFlightForm>
            </Tab>
            <Tab key="travelersInfo" title={<TravelersInfoTitle t={t} />}>
              <TravelersInfoForm
                data={formData.travelers}
                onSubmit={(data) => {
                  setFormData((prev) => ({ ...prev, travelers: data }));
                  setCurrentTab("aditionalServices");
                }}
              >
                <FormFooter previous={() => setCurrentTab("searchFlight")} />
              </TravelersInfoForm>
            </Tab>
            <Tab
              key="aditionalServices"
              title={<AditionalServicesTitle t={t} />}
            >
              <AditionalServicesForm
                data={formData.aditionalServices}
                onSubmit={(data: any) => {
                  setFormData((prev) => ({ ...prev, aditionalServices: data }));
                  setCurrentTab("confirmFlight");
                }}
              >
                <FormFooter previous={() => setCurrentTab("travelersInfo")} />
              </AditionalServicesForm>
            </Tab>
            <Tab key="confirmFlight" title={<ConfirmFlightTitle t={t} />}>
              <FlightInfo data={formData} flights={props.flights} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

function TitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex items-center space-x-2">{children}</div>;
}

function FlightInfoTitle({ t }: { t: TranslationFunction }) {
  return (
    <TitleContainer>
      <MdFlightTakeoff />
      <span>
        {t(
          AppLanguageMessages.pages.index.components.forms.flightInfo
            .searchFlight,
        )}
      </span>
    </TitleContainer>
  );
}

function TravelersInfoTitle({ t }: { t: TranslationFunction }) {
  return (
    <TitleContainer>
      <FaPersonWalkingLuggage />
      <span>
        {t(
          AppLanguageMessages.pages.index.components.forms.flightInfo
            .travelersInfo,
        )}
      </span>
    </TitleContainer>
  );
}

function AditionalServicesTitle({ t }: { t: TranslationFunction }) {
  return (
    <TitleContainer>
      <MdMedicalServices />
      <span>
        {t(
          AppLanguageMessages.pages.index.components.forms.flightInfo
            .aditionalServicesInfo,
        )}
      </span>
    </TitleContainer>
  );
}

function ConfirmFlightTitle({ t }: { t: TranslationFunction }) {
  return (
    <TitleContainer>
      <FaCheckDouble />
      <span>
        {t(
          AppLanguageMessages.pages.index.components.forms.flightInfo
            .confirmFligth,
        )}
      </span>
    </TitleContainer>
  );
}

function FormFooter({ previous }: { previous?: () => void }) {
  const t = useTranslations();

  return (
    <div className="col-span-full">
      <div className="w-full flex justify-end items-center gap-5">
        {previous && (
          <Button
            color="primary"
            radius="sm"
            variant="ghost"
            onPress={() => previous()}
          >
            {t(AppLanguageMessages.components.buttons.goBack)}
          </Button>
        )}
        <Button color="primary" radius="sm" type="submit" variant="solid">
          {t(AppLanguageMessages.components.buttons.continue)}
        </Button>
      </div>
    </div>
  );
}
