import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isError?: boolean;
  errorMessage?: string;
};

export function FormInputContainer(props: Props) {
  return (
    <div className="relative">
      {props.isError && (
        <div className="absolute -top-6 left-0 w-full">
          <p className="text-error text-sm">{props.errorMessage || ""}</p>
        </div>
      )}
      <div className="w-full flex flex-col gap-3 items-center md:justify-between">
        {props.children}
      </div>
    </div>
  );
}
