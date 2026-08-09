import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Start a project with Kadiev Media. Tell us about your brand, website or digital experience and discover the right strategic, creative and technical direction.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact | Kadiev Media",
    description:
      "Start a conversation with Kadiev Media about branding, premium web design, development and AI-powered creative systems.",
    url: "/contact",
  },

  twitter: {
    title: "Contact | Kadiev Media",
    description:
      "Start a conversation with Kadiev Media about branding, premium web design, development and AI-powered creative systems.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}