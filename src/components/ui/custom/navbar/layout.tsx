import { Suspense } from "react";

import { NavbarComponent } from "@/components/ui/custom/navbar/component";

/**
 * Layout wrapper for the navigation bar with built-in suspense fallback.
 * @component
 * @async
 * @returns {Promise<JSX.Element>} The navbar layout with suspense boundary.
 * @example
 * // Usage in app/layout.tsx:
 * <NavbarLayout />
 *
 * @remarks
 * This component handles async loading states for the navbar content.
 * The fallback shows a pulse animation while content loads.
 */
export function NavbarLayout(): JSX.Element {
  return (
    <NavbarComponent>
      <Suspense
        fallback={
          /**
           * Loading fallback UI for suspended content.
           * @type {JSX.Element}
           * @description Shows an animated placeholder while content loads.
           */
          <div className="w-[200px] h-[40px] animate-pulse bg-gray-200 rounded" />
        }
      />
    </NavbarComponent>
  );
}
