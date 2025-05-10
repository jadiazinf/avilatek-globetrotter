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
      maxWidth: {
        screen: "max(100vw, 100%)",
      },
      minHeight: {
        "screen-with-navbar": "calc(100vh - 4rem)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      textColor: {
        error: "#f43f5e"
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
