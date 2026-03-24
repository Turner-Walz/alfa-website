import "./globals.css";
import SiteHeader from "./components/SiteHeader"
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "ALFA — A Look From Above | Drone Photo & Video",
  description:
    "Drone photo & video services for real estate, businesses, and events across Northern Arizona.",

  icons: [{ rel: "icon", url: "/ALFA-01.png" }],

  openGraph: {
    title: "ALFA — A Look From Above",
    description:
      "Cinematic drone photo and video for real estate, businesses, and events across Northern Arizona.",
    url: "https://alookfromabove.co",
    siteName: "ALFA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALFA — A Look From Above logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ALFA — A Look From Above",
    description:
      "Cinematic drone photo and video across Northern Arizona.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}