import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500">
              Kadiev Media
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-neutral-400">
              Premium AI-first creative studio focused on strategy, design,
              development and intelligent digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Navigation</h4>

            <div className="mt-4 flex flex-col gap-3 text-neutral-400">
              <a href="#" className="transition hover:text-yellow-500">
                Home
              </a>
              <a href="#" className="transition hover:text-yellow-500">
                Services
              </a>
              <a href="#" className="transition hover:text-yellow-500">
                Portfolio
              </a>
              <a href="#" className="transition hover:text-yellow-500">
                About
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Services</h4>

            <div className="mt-4 flex flex-col gap-3 text-neutral-400">
              <span>Brand Strategy</span>
              <span>UI / UX Design</span>
              <span>Web Development</span>
              <span>AI Solutions</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>

            <div className="mt-4 flex flex-col gap-3 text-neutral-400">
              <span>hello@kadievmedia.com</span>
              <span>Germany</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-900 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kadiev Media. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-yellow-500">
              Privacy
            </a>
            <a href="#" className="transition hover:text-yellow-500">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}