import clsx from "clsx";

import { ComponentSize } from "@/components/ui/custom/types";
import { ComponentsHelpers } from "@/components/ui/custom/helpers";
import { poppins } from "@/config/fonts";

type LogoColor = "dark" | "light" | "primary";

type Props = {
  size?: ComponentSize;
  color?: LogoColor;
  className?: string;
};

/**
 * Minimalist logo component for Globetrotter
 * @param {Props} props - Component props
 * @param {ComponentSize} [props.size="md"] - Logo size
 * @param {LogoColor} [props.color="dark"] - Color variant
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} Clean logo component
 * @example
 * // Primary version
 * <GlobetrotterLogo color="primary" size="xl" />
 */
export function GlobetrotterLogo({
  size = "md",
  color = "dark",
  className,
}: Props): JSX.Element {
  const sizeClass = ComponentsHelpers.getTextSizeByComponentSize(size);

  const colorClasses = {
    dark: "text-gray-900",
    light: "text-white",
    primary: "text-blue-800",
  };

  return (
    <div
      className={clsx(
        "font-sans font-medium tracking-normal",
        sizeClass,
        colorClasses[color],
        poppins.variable,
        className,
      )}
    >
      <span className="relative inline-block">Globetrotter</span>
    </div>
  );
}
