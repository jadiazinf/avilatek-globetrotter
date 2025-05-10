import clsx from "clsx";

import { fontMono } from "@/config/fonts";
import { ComponentSize } from "@/components/ui/custom/types";
import { ComponentsHelpers } from "@/components/ui/custom/helpers";

type LogoColor = "black" | "white";

type Props = {
  size?: ComponentSize;
  color?: LogoColor;
};

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

export function GlobetrotterLogo(props: Props) {
  let size = ComponentsHelpers.getTextSizeByComponentSize(props.size || "sm");
  let color = getLogoColorByColor(props.color || "black");

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
