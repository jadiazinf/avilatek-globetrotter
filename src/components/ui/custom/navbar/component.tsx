"use client";

import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { NavbarComponentServices } from "@/components/ui/custom/navbar/services";
import { NavbarMenu } from "@/components/ui/custom/navbar/menu";

export function NavbarComponent({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <Navbar
      isBordered
      className="h-16 w-full fixed top-0 z-50 bg-background"
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenu isMenuOpen={isMenuOpen} />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavbarComponentServices.getNavbarComponentOptions({ t }).map(
          (option, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href="#">
                {option.text}
              </Link>
            </NavbarItem>
          ),
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>{children}</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
