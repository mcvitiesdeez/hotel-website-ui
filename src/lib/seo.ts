import type { Metadata } from "next";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  ogImage = "/images/og-default.svg",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `https://maison-meridian.example.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Maison Meridian",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    alternates: { canonical: url },
  };
}
