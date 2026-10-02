import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOIR — Coffee & Kitchen",
  description:
    "Small-batch espresso and a from-scratch kitchen on SE Alder Street, Portland. Reserve a table, browse the menu, find us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
