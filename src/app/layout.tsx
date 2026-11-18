import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "WinkLink Water Solutions",
  description:
    "Supply and installation of water purification equipment in Kenya.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
