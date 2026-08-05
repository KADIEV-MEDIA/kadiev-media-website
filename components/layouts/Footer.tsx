import Container from "@/components/ui/Container";

const navigation = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "UI / UX Design",
  "Web Development",
  "AI Solutions",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-[1.4fr_0.6fr_0.7fr_0.8fr]">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/40">
                <span className="font-[var(--font-cinzel)] text-base font-semibold text-[#C9A45C]">
                  K
                </span>
              </div>

              <div>
                <p className="font-[var(--font-cinzel)] text-xl font-semibold tracking-[0.08em] text-white">
                  KADIEV
                </p>

                <p className="-mt-1 text-[9px] uppercase tracking-[0.4em] text-[#C9A45C]">
                  Media
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-sm leading-7 text-neutral-400">
              Premium AI-first creative studio combining strategy, design,
              technology and intelligent systems.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">
                Human Creativity × AI
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
              Capabilities
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <p key={service} className="text-sm text-neutral-400">
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

              <p className="mt-4 text-sm text-neutral-500">
                Germany
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Available for selected
              </p>

              <p className="mt-2 text-sm text-neutral-400">
                Premium Projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/[0.08] py-8 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kadiev Media. All rights reserved.</p>

          <div className="flex gap-7">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-neutral-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-neutral-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-neutral-300"
            >
              Imprint
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}