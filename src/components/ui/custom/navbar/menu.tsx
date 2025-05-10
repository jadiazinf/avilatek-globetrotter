"use client";

import { Link } from "@heroui/link";
import { NavbarBrand, NavbarContent, NavbarMenuToggle } from "@heroui/navbar";

import { GlobetrotterLogo } from "@/components/ui/custom/globetrotter_logo/component";

export function NavbarMenu(props: { isMenuOpen: boolean }) {
  return (
    <>
      <NavbarBrand>
        <Link href="/">
          <GlobetrotterLogo color="primary" size="xl" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={props.isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
    </>
  );
}
