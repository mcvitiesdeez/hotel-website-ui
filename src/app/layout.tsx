import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/nav/MainNav";
import SiteFooter from "@/components/footer/SiteFooter";
import SmoothScroller from "@/components/SmoothScroller";
import PolicyBanner from "@/components/PolicyBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://maison-meridian.example.com"),
  title: {
    default: "Maison Meridian",
    template: "%s · Maison Meridian",
  },
  description:
    "Maison Meridian is a minimalist luxury hotel with panoramic suites, curated experiences, and a serene approach to hospitality.",
  openGraph: {
    title: "Maison Meridian · Minimalist Luxury Stay",
    description:
      "Escape to Maison Meridian — an architectural haven with curated suites, dining, and experiences by the sea.",
    type: "website",
    locale: "en_US",
    url: "https://maison-meridian.example.com",
    siteName: "Maison Meridian",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Meridian",
    description:
      "Minimalist luxury, editorial storytelling, and oceanfront calm — Maison Meridian hotel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[var(--surface)] text-[var(--fg)] antialiased font-body"
      >
        <SmoothScroller />
        <PolicyBanner />
        <div className="flex min-h-screen flex-col">
          <MainNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
