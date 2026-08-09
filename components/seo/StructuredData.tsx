import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kadiev Media",
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/icon.png`,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}