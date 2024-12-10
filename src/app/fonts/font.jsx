import localFont from "next/font/local";
import "../globals.css";
import { Montserrat } from 'next/font/google';

  export const monumentextended = localFont({
    src: "./monumentextended-regular.woff2",
    variable: "--font-geist-sans",
    weight: "100 900",
  });

  export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

