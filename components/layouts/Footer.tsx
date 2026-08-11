"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "UI / UX Design",
  "Web Development",
  "AI Solutions",
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleHomeClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (pathname === "/") {
      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    router.push("/");
  };

  const handleProcessClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();

    const processSection =
      document.getElementById("process");

    if (processSection) {
      processSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        "/#process"
      );
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <Container>
        <Reveal>
          <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-[1.4fr_0.6fr_0.7fr_0.8fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                onClick={handleHomeClick}
                className="inline-flex items-center gap-5"
                aria-label="Kadiev Media Home"
              >
                {/* KM Mark */}
                <div className="relative h-[64px] w-[64px] shrink-0">
                  <Image
                    src="/brand/kadiev-media-logo.png"
                    alt="Kadiev Media"
                    fill
                    sizes="64px"
                    className="scale-[1.45] object-contain"
                  />
                </div>

                {/* Wordmark */}
                <div>
                  <p className="font-[var(--font-cinzel)] text-[22px] font-semibold tracking-[0.08em] text-white">
                    KADIEV
                  </p>

                  <p className="-mt-1 text-[9px] uppercase tracking-[0.4em] text-[#C9A45C]">
                    Media
                  </p>
                </div>
              </Link>

              <p className="mt-7 max-w-sm leading-7 text-neutral-400">
                Premium AI-first creative studio combining
                strategy, design, technology and intelligent
                systems.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">
                  Human Creativity × AI
                </p>
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
                Explore
              </p>

              <nav className="mt-6 flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={
                      item.label === "Home"
                        ? handleHomeClick
                        : item.label === "Process"
                          ? handleProcessClick
                          : undefined
                    }
                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Capabilities */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
                Capabilities
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {services.map((service) => (
                  <p
                    key={service}
                    className="text-sm text-neutral-400"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
                Contact
              </p>

              <div className="mt-6">
                <a
                  href="mailto:hello@kadievmedia.com"
                  className="text-sm text-neutral-300 transition-colors duration-300 hover:text-[#C9A45C]"
                >
                  hello@kadievmedia.com
                </a>

                <p className="mt-4 text-sm text-neutral-400">
                  Germany
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                  Available for selected
                </p>

                <p className="mt-2 text-sm text-neutral-400">
                  Premium Projects
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/[0.08] py-8 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Kadiev Media. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-7">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Imprint</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}