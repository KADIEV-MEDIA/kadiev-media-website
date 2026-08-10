import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Kadiev Media | Premium AI-First Creative Studio",
    template: "%s | Kadiev Media",
  },

  description:
    "Kadiev Media is a premium AI-first creative studio combining brand strategy, visual identity, UI/UX design, modern web development and intelligent AI solutions.",

  applicationName: "Kadiev Media",

  authors: [
    {
      name: "Kadiev Media",
    },
  ],

  creator: "Kadiev Media",
  publisher: "Kadiev Media",

  keywords: [
    "Kadiev Media",
    "AI-first creative studio",
    "creative agency",
    "brand strategy",
    "branding",
    "visual identity",
    "UI UX design",
    "web design",
    "web development",
    "AI solutions",
    "AI creative studio",
    "digital experiences",
    "premium web design",
    "creative technology",
    "Germany creative agency",
  ],

  category: "Design and Technology",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
  type: "website",
  locale: "en_US",
  siteName: "Kadiev Media",
  title: "Kadiev Media | Premium AI-First Creative Studio",
  description:
    "Strategy, premium design, modern development and artificial intelligence combined to create distinctive digital experiences.",
  images: [
    {
      url: "/og/kadiev-media-og.png",
      width: 1200,
      height: 630,
      alt: "Kadiev Media — Premium AI-First Creative Studio",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "Kadiev Media | Premium AI-First Creative Studio",
  description:
    "Strategy, premium design, modern development and artificial intelligence combined to create distinctive digital experiences.",
  images: ["/og/kadiev-media-og.png"],
},

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    google: "notranslate",
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
      translate="no"
      suppressHydrationWarning
      className={`notranslate ${cinzel.variable} ${inter.variable}`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}