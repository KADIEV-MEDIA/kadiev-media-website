const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Kadiev Media",
  description:
    "Kadiev Media is a premium AI-first creative studio crafting high-end brands, digital experiences, and AI-powered creative systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
};