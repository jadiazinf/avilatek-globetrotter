"use client";

import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";

import { NavbarMenu } from "@/components/ui/custom/navbar/menu";

/**
 * Main navigation bar component with responsive menu and internationalization support.
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child elements to be rendered at the end of the navbar.
 * @returns {JSX.Element} Fixed-position responsive navigation bar.
 *
 * @example
 * // Basic usage with a button as child:
 * <NavbarComponent>
 *   <Button>Sign In</Button>
 * </NavbarComponent>
 *
 * @remarks
 * - Uses `next-intl` for internationalization
 * - Mobile menu state is managed internally
 * - Fixed at top of viewport with z-index 50
 */
export function NavbarComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // const t = useTranslations();

  // const pathname = usePathname();

  /**
   * Determines if a navbar item should be marked as active based on current route
   * @function isNavbarItemActive
   * @param {string} href - The navigation path to check against current route
   * @returns {boolean} True if the item should be active, false otherwise
   *
   * @example
   * // Basic usage:
   * const active = isNavbarItemActive('/about');
   * // Returns true if current route is exactly '/about'
   * // or starts with '/about' (for nested routes)
   *
   * @example
   * // Special case for home route:
   * const active = isNavbarItemActive('/');
   * // Only returns true for exact match of home route
   *
   * @description
   * The function implements two matching strategies:
   * 1. Exact match for home route ('/')
   * 2. Prefix match for all other routes (matches '/products' and '/products/123')
   * This handles both exact routes and dynamic/nested routes appropriately.
   */
  // function isNavbarItemActive(href: string): boolean {
  //   return pathname === href || (href !== "/" && pathname.startsWith(href));
  // }

  return (
    <Navbar
      isBordered
      className="h-16 w-full fixed top-0 z-50 bg-fly-emirates"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      maxWidth="2xl"

      /**
       * Root navbar container
       * @type {JSX.Element}
       * @description
       * - Fixed position at top of screen
       * - Bordered style with background color
       * - Controlled mobile menu state
       */
    >
      <NavbarMenu />

      {/* Desktop navigation items (hidden on mobile) */}
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
        /**
         * Desktop navigation links container
         * @type {JSX.Element}
         * @description
         * - Only visible on sm breakpoint and up
         * - Uses translated navigation options from services
         */
      >
        {/* {NavbarComponentServices.getNavbarComponentOptions({ t }).map(
          (option, index) => (
            <NavbarItem key={index} isActive={isNavbarItemActive(option.href)}>
              <Link color="foreground" href={option.href}>
                {option.text}
              </Link>
            </NavbarItem>
          ),
        )} */}
      </NavbarContent>

      {/* Right-aligned children content */}
      <NavbarContent justify="end">
        <NavbarItem>
          {/**
           * Dynamic children content slot
           * @type {React.ReactNode}
           * @description Typically used for auth buttons or CTA elements
           */}
          {children}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
