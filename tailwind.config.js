import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1F4F"
      },
      maxWidth: {
        screen: "max(100vw, 100%)",
      },
      minHeight: {
        "screen-with-navbar": "calc(100vh - 4rem)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        raleway: ["var(--font-raleway)"],
        montserrat: ["var(--font-montserrat)"],
      },
      textColor: {
        error: "#f43f5e",
      },
      backgroundColor: {
        "fly-emirates": "#FFFFFF"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
