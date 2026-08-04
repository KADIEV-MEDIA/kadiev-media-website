export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Premium AI-First Creative Studio
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          We Build
          <span className="block text-yellow-500">
            Premium Digital Experiences
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-300">
          Branding, UI/UX Design, Web Development and AI Solutions crafted
          to help ambitious businesses stand out.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Your Project
          </button>

          <button className="rounded-xl border border-yellow-500 px-8 py-4 text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
            View Portfolio
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-yellow-500">50+</h2>
            <p className="mt-2 text-neutral-400">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-yellow-500">10+</h2>
            <p className="mt-2 text-neutral-400">Industries</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-yellow-500">100%</h2>
            <p className="mt-2 text-neutral-400">Custom Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}
