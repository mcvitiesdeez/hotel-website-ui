import { notFound } from "next/navigation";
import RoomDetailPanel from "@/components/RoomDetailPanel";
import { getRoomBySlug, rooms } from "@/content/mock/rooms";
import { buildPageMetadata } from "@/lib/seo";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    return buildPageMetadata({
      title: "Suite Not Found",
      description: "The suite you are looking for could not be found.",
      path: `/stay/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${room.name} Suite`,
    description: room.headline,
    path: `/stay/${room.slug}`,
    ogImage: room.gallery[0],
  });
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="space-y-12 px-5 py-16">
      <RoomDetailPanel room={room} />
    </div>
  );
}
