import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero.png')",
        "half-hero-pattern": "url('/images/halfSizeHero.png')",
        "quarter-hero-pattern": "url('/images/quarterSizeHero.png')",
        "mobile-hero-pattern": "url('/images/mobileHero.png')",
      },
      fontFamily: {
        cloister: ["var(--font-cloister)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
