import { AppLanguageMessages, TranslationFunction } from "@/i18n/types";

type Props = {
  t: TranslationFunction;
};

export type NavbarComponentOptions = {
  text: string;
  restrictions: string[] | undefined;
};

function getNavbarComponentOptions(props: Props): NavbarComponentOptions[] {
  const options: NavbarComponentOptions[] = [
    {
      text: props.t(AppLanguageMessages.components.navbar.options.reserve),
      restrictions: undefined,
    },
  ];

  return options;
}

export const NavbarComponentServices = {
  getNavbarComponentOptions,
};
