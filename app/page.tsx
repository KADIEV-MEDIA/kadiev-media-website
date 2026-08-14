import type { Metadata } from "next";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import WhyKadiev from "@/components/sections/WhyKadiev";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kadiev Media",
    title: "Kadiev Media | Premium AI-First Creative Studio",
    description:
  "Premium strategy, design, development and AI solutions for distinctive brands and digital experiences.",
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
  "Premium strategy, design, development and AI solutions for distinctive brands and digital experiences.",
    images: ["/og/kadiev-media-og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Trusted />
        <Services />
        <FeaturedProjects />
        <Process />
        <WhyKadiev />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}