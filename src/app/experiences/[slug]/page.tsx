import Image from "next/image";
import { notFound } from "next/navigation";
import { experiences, getExperienceBySlug } from "@/content/mock/experiences";
import { buildPageMetadata } from "@/lib/seo";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) {
    return buildPageMetadata({
      title: "Experience Not Found",
      description: "We could not locate this Maison Meridian experience.",
      path: `/experiences/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${experience.name} · Experience`,
    description: experience.summary,
    path: `/experiences/${experience.slug}`,
    ogImage: experience.image,
  });
}

export default async function ExperiencePage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) {
    notFound();
  }

  return (
    <div className="space-y-10 px-5 py-16">
      <div className="mx-auto max-w-[1100px] space-y-10">
        <div className="rounded-[var(--radius-xl)] border border-[rgba(16,20,24,0.08)] bg-white/80 shadow-[var(--shadow-1)]">
          <Image
            src={experience.image}
            alt={experience.name}
            width={1200}
            height={720}
            className="h-auto w-full rounded-t-[var(--radius-xl)] object-cover"
          />
          <div className="space-y-4 px-8 py-10">
            <span className="text-xs uppercase tracking-[0.32em] text-[rgba(16,20,24,0.52)]">
              Duration · {experience.duration}
            </span>
            <h1 className="font-display text-4xl text-fg">{experience.name}</h1>
            <p className="text-[rgba(16,20,24,0.68)]">
              {experience.description}
            </p>
            <ul className="grid gap-2 text-sm text-[rgba(16,20,24,0.68)]">
              {experience.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
