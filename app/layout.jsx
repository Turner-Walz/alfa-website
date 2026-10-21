import { Archivo, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import { OPEN_GRAPH, SITE_URL } from "./lib/site";

const archivo = Archivo({ subsets: ["latin"], display: "swap", variable: "--font-archivo" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains" });

const DEFAULT_TITLE = "ALFA Drone Solutions — Drone Photo, Video & Mapping, Northern AZ";
const DESCRIPTION =
  "Cinematic drone media and construction documentation across Northern Arizona. FAA Part 107 certified, 5-drone fleet. Request a quote.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | ALFA Drone Solutions" },
  description: DESCRIPTION,
  openGraph: { ...OPEN_GRAPH, images: ["/og-image.jpg"], title: DEFAULT_TITLE, description: DESCRIPTION, url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#0b0c0e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteNav />
        {children}
        <Cursor />
        <SmoothScroll />
        <SpeedInsights />
      </body>
    </html>
  );
}
