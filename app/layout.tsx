import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { site } from "./site";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemePicker } from "./components/ThemePicker";

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

// Vercel exposes the production domain at build time; used to make OG image
// URLs absolute. Falls back to localhost for local builds.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Grading, Land Clearing & Site Prep in TN, NC, VA, GA, KY & SC | Mountain Movers LLC",
    template: "%s | Mountain Movers Grading",
  },
  description:
    "Family-owned grading and site prep based in Newport, Tennessee. Land clearing, fill and compaction, precision grading, french drains, driveways, and concrete. Licensed, bonded, and insured across six states.",
  keywords: [
    "grading contractor",
    "land clearing",
    "site prep",
    "mobile home pad grading",
    "french drain installation",
    "driveway construction",
    "Newport Tennessee grading",
  ],
  openGraph: {
    title: site.brand,
    description:
      "Family-owned, licensed, bonded & insured grading and site prep across Tennessee, North Carolina, Virginia, Georgia, Kentucky, and South Carolina.",
    type: "website",
    images: ["/photos/setup-footers.jpg"],
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemePicker />
      </body>
      {site.gaId && <GoogleAnalytics gaId={site.gaId} />}
    </html>
  );
}
