import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  formIcon?: ReactNode;
  onSubmit?: () => void;
  action?: () => void;
};

export function Form(props: Props) {
  return (
    <form action={props.action} className="w-full" onSubmit={props.onSubmit}>
      <div>{props.formIcon && props.formIcon}</div>
      <div className="my-2">
        <div>
          <h1 className="font-bold text-2xl">{props.title}</h1>
        </div>
        {props.subtitle ? (
          <div className="mt-3">
            <h2 className="text-black text-opacity-50">{props.subtitle}</h2>
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col gap-5">{props.children}</div>
    </form>
  );
}
