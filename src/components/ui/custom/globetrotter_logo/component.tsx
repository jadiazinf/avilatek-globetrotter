import clsx from "clsx";

import { fontMono } from "@/config/fonts";
import { ComponentSize } from "@/components/ui/custom/types";
import { ComponentsHelpers } from "@/components/ui/custom/helpers";

type LogoColor = "black" | "white";

type Props = {
  size?: ComponentSize;
  color?: LogoColor;
};

/**
 * Determines the CSS class for the logo color.
 * @param {LogoColor} color - Logo color ("black" or "white").
 * @returns {string} Corresponding CSS class.
 * @private
 */
function getLogoColorByColor(color: LogoColor): string {
  switch (color) {
    case "black":
      return "text-black";
    case "white":
      return "text-white";
    default:
      return "text-black";
  }
}

/**
 * Custom logo component for Globetrotter.
 * @param {Props} props - Component props.
 * @param {ComponentSize} [props.size="sm"] - Logo size (sm, md, lg, etc.).
 * @param {LogoColor} [props.color="black"] - Text color ("black" or "white").
 * @returns {JSX.Element} Rendered logo with dynamic styles.
 * @example
 * // Basic usage:
 * <GlobetrotterLogo size="md" color="white" />
 */
export function GlobetrotterLogo(props: Props) {
  const size = ComponentsHelpers.getTextSizeByComponentSize(props.size || "sm");
  const color = getLogoColorByColor(props.color || "black");

  return (
    <div
      className={clsx(
        `${size} ${color} ${fontMono.variable} font-bold text-center`,
      )}
    >
      Globetrotter
    </div>
  );
}
