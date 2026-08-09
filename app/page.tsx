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
    url: "/",
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