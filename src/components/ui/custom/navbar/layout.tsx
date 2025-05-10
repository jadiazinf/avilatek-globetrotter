import { Suspense } from "react";

import { NavbarComponent } from "@/components/ui/custom/navbar/component";

export async function NavbarLayout() {
  return (
    <NavbarComponent>
      <Suspense
        fallback={
          <div className="w-[200px] h-[40px] animate-pulse bg-gray-200 rounded" />
        }
      />
    </NavbarComponent>
  );
}
