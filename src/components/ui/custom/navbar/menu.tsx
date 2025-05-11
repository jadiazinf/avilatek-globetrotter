"use client";

import { Link } from "@heroui/link";
import { NavbarBrand } from "@heroui/navbar";

import { GlobetrotterLogo } from "@/components/ui/custom/globetrotter_logo/component";

/**
 * Navigation menu component with responsive toggle functionality.
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.isMenuOpen - Current state of the mobile menu.
 * @returns {JSX.Element} Responsive navigation menu elements.
 *
 * @example
 * // Usage in a parent component:
 * const [isOpen, setIsOpen] = useState(false);
 * <NavbarMenu isMenuOpen={isOpen} />
 *
 * @see {@link GlobetrotterLogo} for logo component details
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating} for Next.js Link usage
 */
export function NavbarMenu(): JSX.Element {
  return (
    <>
      {/* Brand section with logo link */}
      <NavbarBrand>
        <Link
          aria-label="Go to homepage"
          href="/"
          /**
           * Navigation link to homepage
           * @type {JSX.Element}
           */
        >
          <GlobetrotterLogo color="dark" size="xl" />
        </Link>
      </NavbarBrand>
    </>
  );
}
