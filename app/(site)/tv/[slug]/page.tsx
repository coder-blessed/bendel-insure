import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Play } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { videos } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return { title: "Video Not Found | Insurance TV" };
  }

  return {
    title: `${video.title} | Insurance TV`,
    description: `Watch ${video.title} on Insurance TV, the official video channel of Bendel Insurance Football Club.`,
  };
}

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default async function VideoPlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    notFound();
  }

  const otherVideos = videos.filter((v) => v.slug !== slug).slice(0, 3);

  return (
    <main className="bg-ink text-white">
      {/* Player Section */}
      <section className="py-12 md:py-16">
        <div className={SHELL}>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/tv" className="hover:text-gold">Insurance TV</Link>
            <span>/</span>
            <span className="text-gold font-semibold truncate">{video.title}</span>
          </nav>

          <Link
            href="/tv"
            className="eyebrow mb-6 inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Videos</span>
          </Link>

          <div className="overflow-hidden rounded-card border border-white/10 bg-black shadow-2xl">
            <div className="relative aspect-video w-full">
              <Media
                src={video.image}
                tone={video.tone}
                monogram={false}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gold text-brand-deep shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                  <Play className="ml-1 h-10 w-10 fill-current" />
                </div>
                <p className="mt-4 text-xs font-mono text-white/80">
                  Duration: {video.duration}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white/5 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="eyebrow inline-block rounded-pill bg-gold/20 px-3 py-1 text-[10px] font-bold text-gold uppercase">
                    Official Broadcast
                  </span>
                  <h1 className="headline mt-2 text-2xl uppercase text-white sm:text-3xl">
                    {video.title}
                  </h1>
                </div>
                <span className="eyebrow rounded-pill border border-white/20 px-4 py-1.5 text-xs text-white/80">
                  {video.duration}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-white/75 leading-relaxed">
                Catch full coverage, tactical moments, and behind-the-scenes perspectives from the Benin Arsenal at Samuel Ogbemudia Stadium and on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Up Next / Related */}
      <section className={`${SHELL} pb-20 md:pb-28`}>
        <SectionHeader
          title="More Videos"
          subtitle="Explore related clips and documentaries"
          dark
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {otherVideos.map((item) => (
            <Link
              key={item.slug}
              href={`/tv/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-white/10 bg-white/5 transition-all hover:border-gold/50 hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Media
                  src={item.image}
                  tone={item.tone}
                  monogram={false}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="eyebrow absolute bottom-2 right-2 rounded-pill bg-black/80 px-2 py-0.5 text-[9px] font-mono text-white">
                  {item.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="headline text-sm uppercase text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
