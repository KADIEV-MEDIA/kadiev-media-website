"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const CONSENT_KEY = "kadiev-media-cookie-consent";

export default function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted") {
      setEnabled(true);
    }

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setEnabled(customEvent.detail === "accepted");
    };

    window.addEventListener(
      "kadiev-consent-change",
      handleConsentChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "kadiev-consent-change",
        handleConsentChange as EventListener
      );
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <GoogleAnalytics gaId="G-3E231DDKYP" />;
}