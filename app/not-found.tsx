import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Reveal from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-20 pt-32 text-white sm:pt-36 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C]" />
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C9A45C]">
                Page Not Found
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 font-serif text-[clamp(7rem,22vw,16rem)] leading-[0.8] tracking-[-0.06em] text-white">
              404
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  This page has moved
                  <span className="block text-[#C9A45C]">
                    or no longer exists.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400">
                  The destination you were looking for could not be found.
                  Return to Kadiev Media or explore our selected work.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#C9A45C] px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-[#d8b86f]"
                >
                  Back to Home
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#C9A45C]/70 hover:text-[#C9A45C]"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}