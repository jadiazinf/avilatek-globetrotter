import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Montserrat,
  Poppins,
  Raleway,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-raleway",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-montserrat",
});
