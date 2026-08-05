import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A45C]/40">
              <span className="font-[var(--font-cinzel)] text-sm font-semibold text-[#C9A45C]">
                K
              </span>
            </div>

            <div>
              <p className="font-[var(--font-cinzel)] text-lg font-semibold tracking-[0.08em] text-white">
                KADIEV
              </p>

              <p className="-mt-1 text-[9px] uppercase tracking-[0.38em] text-[#C9A45C]">
                Media
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button>Start a Project</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 lg:hidden"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
      </Container>
    </header>
  );
}