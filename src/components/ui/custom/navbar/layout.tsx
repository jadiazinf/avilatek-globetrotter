import { BookFlightModalButton } from "@/components/ui/custom/bookings/buttons/modal_pop_up/component";
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
      <BookFlightModalButton />
    </NavbarComponent>
  );
}
