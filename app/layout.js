// app/layout.js (or .tsx)
import { Open_Sans, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Vendor & Gallery Styles (move all CSS imports here)
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";

import "../public/assets/css/style.css";
import "../public/assets/css/myAnimation.css";

import "../public/assets/gallery-assets/css/bootstrap.min.css";
import "../public/assets/gallery-assets/css/slicknav.min.css";
import "../public/assets/gallery-assets/css/fresco.css";
import "../public/assets/gallery-assets/css/slick.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Mujahed Hussaini - Home",
  description:
    "I possess a proven track record in analyzing intricate datasets.",
  openGraph: {
    title: "Mujahed Hussaini",
    description: "Mujahed Hussaini Portfolio",
  },
  keywords: ["IT Consultant"],
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mujahed Hussaini",
  },
  other: {
    viewport: "width=device-width, initial-scale=1.0",
    charset: "utf-8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${raleway.variable} ${poppins.variable}`}
    >
      <body>
        <link rel="stylesheet" href="/assets/gallery-assets/css/style.css" />

        {children}
        {/* Global Scripts */}

        <Script
          defer
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
