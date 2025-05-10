/**
 * Available size options for UI components.
 * @typedef {"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"} ComponentSize
 * @description Standardized size options for components.
 * @example
 * // Usage in props:
 * const Button = ({ size }: { size: ComponentSize }) => { ... };
 */
export type ComponentSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";
