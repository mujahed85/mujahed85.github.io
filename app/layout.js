import { Open_Sans, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Preloader from "./components/Preloader";
import "../public/assets/owlcarousel/assets/owl.carousel.min.css";
import "../public/assets/owlcarousel/assets/owl.theme.default.min.css";

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
  keywords: ["IT Consultant"],
  icons: {
    icon: "/assets/img/favicon.png",
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
      <head>
        {/* Vendor & Gallery CSS */}
        {/* <link rel="stylesheet" href="/assets/vendor/aos/aos.css" /> */}
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />

        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/myAnimation.css" />

        <link
          rel="stylesheet"
          href="/assets/gallery-assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/gallery-assets/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/gallery-assets/css/slicknav.min.css"
        />
        <link rel="stylesheet" href="/assets/gallery-assets/css/fresco.css" />
        <link rel="stylesheet" href="/assets/gallery-assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/gallery-assets/css/style.css" />

        <link
          rel="stylesheet"
          href="/assets/owlcarousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/owlcarousel/assets/owl.theme.default.min.css"
        />
      </head>

      <body>
        <Preloader />
        {children}
        {/* Scripts placed with Next.js Script component */}
        {/* <Script
          src="/assets/gallery-assets/js/jquery.slicknav.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/music-contols.js" strategy="afterInteractive" />
        <Script src="/assets/js/Contact.js" strategy="afterInteractive" /> */}
        {/* Gallery Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          strategy="beforeInteractive"
        />
        {/* <Script
          src="/assets/gallery-assets/js/jquery.slicknav.min.js"
          strategy="afterInteractive"
        />{" "} */}
        {/* 
        <Script
          src="/assets/gallery-assets/js/slick.min.js"
          strategy="afterInteractive"
        /> */}
        {/* <Script
          src="/assets/gallery-assets/js/fresco.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/gallery-assets/js/main.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/gallery-assets/js/vendor/jquery-3.2.1.min.js"
          strategy="beforeInteractive"
        /> */}
      </body>
    </html>
  );
}
