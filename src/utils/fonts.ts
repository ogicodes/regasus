import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const cloister = localFont({
  src: "../../public/fonts/CloisterBlack.ttf",
  display: "swap",
  variable: "--font-cloister",
});
