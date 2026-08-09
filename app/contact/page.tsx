"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/motion/Reveal";

const projectTypes = [
  "Brand Strategy",
  "Visual Identity",
  "Web Design",
  "Web Development",
  "AI Content",
  "Creative Systems",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );

    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (
      !name ||
      !email ||
      !budget ||
      !message ||
      selectedServices.length === 0
    ) {
      setStatus("error");
      setErrorMessage(
        "Please complete your name, email, estimated budget, project description and select at least one service."
      );

      return;
    }

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          website,
          services: selectedServices,
          budget,
          timeline,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send inquiry.");
      }

      setStatus("success");
      form.reset();
      setSelectedServices([]);
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-8 lg:pt-40">
          <div className="w-full">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C9A45C] sm:text-sm">
                  Start a Project
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                className="
                  flex
                  max-w-[19rem]
                  flex-col
                  gap-2
                  font-serif
                  text-[2.8rem]
                  font-normal
                  tracking-[-0.04em]

                  min-[390px]:max-w-[22rem]
                  min-[390px]:text-[3.05rem]

                  sm:max-w-[35rem]
                  sm:gap-3
                  sm:text-[3.9rem]

                  md:max-w-[43rem]
                  md:text-[4.6rem]

                  lg:max-w-[50rem]
                  lg:gap-4
                  lg:text-[5.1rem]

                  xl:max-w-[56rem]
                  xl:text-[5.6rem]

                  2xl:max-w-[60rem]
                  2xl:text-[6rem]
                "
              >
                <span className="block leading-[1.06]">
                  Let&apos;s build
                </span>

                <span className="block leading-[1.06]">
                  something
                </span>

                <span className="block leading-[1.06] text-[#C9A45C]">
                  remarkable.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Tell us what you&apos;re building, what needs to change and
                  where you want the brand to go.
                </p>

                <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base lg:justify-self-end">
                  The clearer the context, the better we can understand the
                  challenge and recommend the right direction.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECT INQUIRY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  Project Inquiry
                </p>

                <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                  Give us the
                  <span className="block text-[#C9A45C]">
                    full picture.
                  </span>
                </h2>

                <p className="mt-8 max-w-md text-base leading-8 text-neutral-300">
                  Share the essentials below. This gives us enough context to
                  understand the opportunity before we start a conversation.
                </p>

                <div className="mt-12 border-t border-white/10 pt-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Typical Projects
                  </p>

                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-neutral-300">
                      Brand &amp; digital identity
                    </p>

                    <p className="text-sm text-neutral-300">
                      Premium websites
                    </p>

                    <p className="text-sm text-neutral-300">
                      AI-powered content systems
                    </p>

                    <p className="text-sm text-neutral-300">
                      Creative transformation
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                {/* Name / Email */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      disabled={status === "loading"}
                      onChange={() => setStatus("idle")}
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      disabled={status === "loading"}
                      onChange={() => setStatus("idle")}
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Company / Website */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company or brand"
                      disabled={status === "loading"}
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                    >
                      Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      disabled={status === "loading"}
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-300">
                    What do you need? *
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {projectTypes.map((type) => {
                      const active = selectedServices.includes(type);

                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={active}
                          disabled={status === "loading"}
                          onClick={() => toggleService(type)}
                          className={`border px-4 py-3 text-xs uppercase tracking-[0.16em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
                            active
                              ? "border-[#C9A45C] bg-[#C9A45C] text-black"
                              : "border-white/20 text-neutral-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                  >
                    Estimated Budget *
                  </label>

                  <div className="relative mt-4">
                    <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-base text-[#C9A45C]">
                      €
                    </span>

                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      inputMode="text"
                      placeholder="Enter your estimated budget"
                      disabled={status === "loading"}
                      onChange={() => setStatus("idle")}
                      className="w-full border-b border-white/15 bg-transparent pb-4 pl-6 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <p className="mt-3 text-xs leading-5 text-neutral-400">
                    Enter the budget that feels right for your project.
                  </p>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                  >
                    Timeline
                  </label>

                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="When would you like to launch?"
                    disabled={status === "loading"}
                    className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.22em] text-neutral-300"
                  >
                    Tell us about the project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you building? What needs to change? What would success look like?"
                    disabled={status === "loading"}
                    onChange={() => setStatus("idle")}
                    className="mt-4 w-full resize-none border border-white/15 bg-transparent p-5 text-base leading-7 text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#C9A45C] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-red-400/20 bg-red-400/[0.04] px-5 py-4"
                  >
                    <p className="text-sm leading-6 text-red-300">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Success */}
                {status === "success" && (
                  <div
                    role="status"
                    className="border border-[#C9A45C]/30 bg-[#C9A45C]/[0.05] px-5 py-4"
                  >
                    <p className="text-sm leading-6 text-[#C9A45C]">
                      Thank you. Your inquiry has been sent successfully.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div className="border-t border-white/10 pt-8">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center gap-4 border border-[#C9A45C]/50 px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#C9A45C] transition-all duration-500 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#C9A45C]"
                  >
                    {status === "loading" ? "Sending..." : "Send Inquiry"}

                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="mt-4 text-xs leading-6 text-neutral-400">
                    Fields marked with * are required.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  Availability
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                  Selective by design.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  We take on a limited number of projects at a time so each one
                  gets the strategic attention, creative direction and execution
                  it deserves.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#C9A45C]" />

                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-300">
                    Currently accepting selected projects
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.07] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Prefer Email?
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Start with a
              <span className="block text-[#C9A45C]">
                simple conversation.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href="mailto:hello@kadievmedia.com"
              className="mt-9 inline-block text-base text-neutral-300 underline decoration-white/15 underline-offset-8 transition-colors hover:text-[#C9A45C] sm:text-lg"
            >
              hello@kadievmedia.com
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}