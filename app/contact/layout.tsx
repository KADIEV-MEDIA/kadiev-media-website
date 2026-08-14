import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Start a project with Kadiev Media. Tell us about your brand, website or digital experience and discover the right strategic, creative and technical direction.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/contact",
    siteName: "Kadiev Media",
    title: "Contact | Kadiev Media",
    description:
      "Start a conversation with Kadiev Media about branding, premium web design, development and AI-powered creative systems.",
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
    title: "Contact | Kadiev Media",
    description:
      "Start a conversation with Kadiev Media about branding, premium web design, development and AI-powered creative systems.",
    images: ["/og/kadiev-media-og.png"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}