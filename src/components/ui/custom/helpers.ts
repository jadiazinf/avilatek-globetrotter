import { ComponentSize } from "@/components/ui/custom/types";

function getTextSizeByComponentSize(size: ComponentSize): string {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-md";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
    case "5xl":
      return "text-5xl";
    default:
      return "text-sm";
  }
}

export const ComponentsHelpers = {
  getTextSizeByComponentSize,
};
