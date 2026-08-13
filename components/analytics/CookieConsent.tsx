"use client";

import { useEffect, useState } from "react";

type ConsentStatus = "accepted" | "rejected" | null;

const CONSENT_KEY = "kadiev-media-cookie-consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }

    setIsReady(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");

    window.dispatchEvent(
      new CustomEvent("kadiev-consent-change", {
        detail: "accepted",
      })
    );
  };

  const rejectCookies = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");

    window.dispatchEvent(
      new CustomEvent("kadiev-consent-change", {
        detail: "rejected",
      })
    );
  };

  if (!isReady || consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/95 p-5 shadow-2xl backdrop-blur-xl md:bottom-6 md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-[var(--font-cinzel)] text-base text-white">
            Your privacy matters
          </p>

          <p className="mt-2 text-sm leading-6 text-white/60">
            We use optional analytics cookies to understand how visitors use
            Kadiev Media and improve the experience. You can accept or reject
            analytics tracking.
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={rejectCookies}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:border-white/30"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-[#C9A45C] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}