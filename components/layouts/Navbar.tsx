export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-bold tracking-wider text-yellow-500">
          Kadiev Media
        </div>

        <nav className="hidden gap-8 md:flex">
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
          <a href="#" className="transition hover:text-yellow-500">
            Contact
          </a>
        </nav>

        <button className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:opacity-90">
          Book Call
        </button>
      </div>
    </header>
  );
}
