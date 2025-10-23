import Image from "next/image";
import { galleryImages } from "@/content/mock/gallery";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "A glimpse into Maison Meridian—editorial suites, curated experiences, and ambient spaces.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="space-y-10 px-5 py-16">
      <header className="mx-auto max-w-[780px] space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
          Gallery
        </span>
        <h1 className="font-display text-4xl text-fg">
          Textures, light, and vignettes from Maison Meridian.
        </h1>
        <p className="text-[rgba(16,20,24,0.68)]">
          Imagery captured in soft morning light with a restrained color palette
          to reflect the property’s minimalist ethos.
        </p>
      </header>

      <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-3">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="space-y-3 rounded-[var(--radius-lg)] border border-[rgba(16,20,24,0.08)] bg-white/70 p-3 shadow-[var(--shadow-1)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              className="w-full rounded-[var(--radius-md)] object-cover"
            />
            <figcaption className="text-xs uppercase tracking-[0.24em] text-[rgba(16,20,24,0.6)]">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
