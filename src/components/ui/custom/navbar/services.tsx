import { TranslationFunction } from "@/i18n/types";

type Props = {
  /**
   * Translation function from next-intl
   * @type {TranslationFunction}
   */
  t: TranslationFunction;
};

/**
 * Navigation bar menu option configuration
 * @typedef {Object} NavbarComponentOptions
 * @property {string} text - Display text for the navigation item
 * @property {string} href - Route path for the navigation link
 */
export type NavbarComponentOptions = {
  text: string;
  href: string;
};

/**
 * Generates navigation options for the navbar component
 * @function
 * @param {Props} props - Configuration properties
 * @param {TranslationFunction} props.t - Translation function
 * @returns {NavbarComponentOptions[]} Array of navigation options
 *
 * @example
 * // Usage with next-intl:
 * const t = useTranslations();
 * const options = getNavbarComponentOptions({ t });
 *
 * @remarks
 * Currently only contains the "Reserve" option, but can be extended
 * to include more navigation items as needed.
 */
function getNavbarComponentOptions(props: Props): NavbarComponentOptions[] {
  const options: NavbarComponentOptions[] = [];

  return options;
}

/**
 * Service object containing navbar-related utilities
 * @namespace NavbarComponentServices
 */
export const NavbarComponentServices = {
  /**
   * @function getNavbarComponentOptions
   * @see {@link getNavbarComponentOptions} for implementation details
   */
  getNavbarComponentOptions,
};
