type ValueOf<T> = T[keyof T];

export enum DocumentType {
  VENEZUELAN = "V",
  FOREIGN = "E",
}

export enum FlightClass {
  ECONOMY = "Economy",
  BUSINESS = "Business",
  FIRST_CLASS = "First Class",
}

export enum FlightClassesTranslationsPropsName {
  ECONOMY = "Economy",
  BUSINESS = "Business",
  FIRST_CLASS = "FirstClass",
}

export const FirstClassTranslationPropName = "FirstClass";

export type FlightClassTranslationPropName =
  | ValueOf<FlightClass>
  | typeof FirstClassTranslationPropName;
