import Link from "next/link";
import QuickBook from "@/components/QuickBook";

const footerLinks = [
  {
    title: "Maison Meridian",
    items: [
      { label: "Stay", href: "/stay" },
      { label: "Offers", href: "/offers" },
      { label: "Experiences", href: "/experiences" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Plan Your Stay",
    items: [
      { label: "Gallery", href: "/gallery" },
      { label: "Location", href: "/location" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(16,20,24,0.08)] bg-[rgba(246,244,241,0.95)]">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-6">
          <p className="font-display text-3xl leading-tight text-fg">
            Maison Meridian
          </p>
          <p className="text-sm text-[rgba(16,20,24,0.6)]">
            18 Promenade des Vagues, Côte d’Azur
            <br />
            +33 (0)4 92 00 11 22
            <br />
            reservations@maisonmeridian.com
          </p>
          <QuickBook />
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.48)]">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[rgba(16,20,24,0.7)] transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[rgba(16,20,24,0.08)] py-6 text-center text-xs uppercase tracking-[0.4em] text-[rgba(16,20,24,0.5)]">
        © {new Date().getFullYear()} Maison Meridian. All rights reserved.
      </div>
    </footer>
  );
}
