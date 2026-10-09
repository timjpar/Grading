import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { site } from "./site";
import { businessJsonLd, websiteJsonLd } from "./seo";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemePicker } from "./components/ThemePicker";
import { JsonLd } from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Condensed industrial display face — the vernacular of highway / freight
// signage. Carries the page's personality; used uppercase for headlines.
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const description =
  "Grading and site prep contractor in Newport, TN. Land clearing, fill dirt and compaction, precision grading and leveling, french drains, driveways, and concrete. Call 423-608-5805 for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Grading & Site Prep Contractor in Newport, TN | Mountain Movers Grading",
    template: "%s | Mountain Movers Grading",
  },
  description,
  applicationName: site.name,
  keywords: [
    "grading contractor",
    "grading company near me",
    "site prep",
    "site preparation",
    "land clearing",
    "lot clearing",
    "dirt work",
    "fill dirt",
    "soil compaction",
    "land grading",
    "lot grading",
    "building pad grading",
    "house pad",
    "french drain installation",
    "drainage grading",
    "driveway grading",
    "gravel driveway",
    "concrete slab",
    "concrete footings",
    "grading Newport TN",
    "grading East Tennessee",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mountain Movers Grading — Grading & Site Prep",
    description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/photos/g-dozer.jpg", width: 1400, height: 1050, alt: "Dozer on a freshly graded mountain road" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-stone-900">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('mmg-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
        <JsonLd data={[businessJsonLd(), websiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemePicker />
      </body>
      {site.gaId && <GoogleAnalytics gaId={site.gaId} />}
    </html>
  );
}
