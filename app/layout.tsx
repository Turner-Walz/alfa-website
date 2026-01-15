import "./globals.css";

export const metadata = {
  title: "ALFA — A Look From Above | Drone Photo & Video",
  description:
    "Drone photo & video services for real estate, businesses, and events across Northern Arizona.",
  icons: [{ rel: "icon", url: "/ALFA-01.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
