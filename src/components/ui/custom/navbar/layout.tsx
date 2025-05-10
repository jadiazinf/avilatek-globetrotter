import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

import { NavbarComponent } from "@/components/ui/custom/navbar/component";
import { AppLanguageMessages } from "@/i18n/types";

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
export async function NavbarLayout(): Promise<JSX.Element> {
  const t = await getTranslations();

  return (
    <NavbarComponent>
      <Button color="primary" radius="sm">
        {t(AppLanguageMessages.components.navbar.options.reserve)}
      </Button>
    </NavbarComponent>
  );
}
