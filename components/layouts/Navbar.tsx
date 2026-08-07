"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => setMenuOpen(false);

  const handleProcessClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    closeMenu();

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();

    const processSection = document.getElementById("process");

    if (processSection) {
      processSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", "/#process");
    }
  };

  const handleMobileNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    router.push(href);
  };

  const handleMobileProcess = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    if (pathname === "/") {
      const processSection = document.getElementById("process");

      if (processSection) {
        processSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "/#process");
      }

      return;
    }

    router.push("/#process");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Kadiev Media Home"
          >
            {/* KM Logo */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#050505]">
              <Image
                src="/brand/kadiev-media-logo.png"
                alt="Kadiev Media"
                fill
                priority
                sizes="44px"
                className="scale-[1.2] object-cover object-center"
              />
            </div>

            {/* Wordmark */}
            <div>
              <p className="font-[var(--font-cinzel)] text-lg font-semibold tracking-[0.08em] text-white">
                KADIEV
              </p>

              <p className="-mt-1 text-[9px] uppercase tracking-[0.38em] text-[#C9A45C]">
                Media
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={
                  item.label === "Process"
                    ? handleProcessClick
                    : undefined
                }
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button>Start a Project</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-[4px]"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col py-7">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (item.label === "Process") {
                    handleMobileProcess(event);
                    return;
                  }

                  handleMobileNavigation(
                    event,
                    item.href
                  );
                }}
                className="flex items-center justify-between border-b border-white/[0.06] py-5"
              >
                <span className="text-lg text-neutral-200">
                  {item.label}
                </span>

                <span className="text-xs text-[#C9A45C]">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={(event) =>
                handleMobileNavigation(
                  event,
                  "/contact"
                )
              }
              className="mt-7 flex items-center justify-center rounded-xl border border-[#C9A45C] bg-[#C9A45C] px-7 py-4 text-sm font-semibold text-[#050505]"
            >
              Start a Project
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}