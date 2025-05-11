import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { NavbarLayout } from "@/components/ui/custom/navbar/layout";
import "@/app/globals.css";
import { fontSans, montserrat, raleway } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: "Globetrotter",
    template: "%s | Globetrotter",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      suppressHydrationWarning
      className={`${raleway.variable} ${montserrat.variable} ${fontSans.variable} scroll-smooth bg-fly-emirates `}
      lang={locale}
    >
      <head />
      <body
        className={clsx(
          "light min-h-screen bg-fly-emirates text-foreground font-sans antialiased",
          "ligth w-screen max-w-screen overflow-x-hidden mb-10",
        )}
      >
        <NextIntlClientProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <NavbarLayout />
            <main className="pt-16 min-h-screen">{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
