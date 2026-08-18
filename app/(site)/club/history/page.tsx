


import type { Metadata } from "next";
import Link from "next/link";
import { Crest } from "@/components/brand";
import { BlogCard } from "@/components/blog-card";
import { ArrowLeft, ArrowRight, Check } from "@/components/icons";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { getPublishedPosts } from "@/lib/blog-server";
import { club } from "@/lib/content";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export const metadata: Metadata = {
  title: "Club History | Bendel Insurance FC",
  description:
    "The official history of Bendel Insurance FC: from the Vipers of Benin in 1972 to the 1979 league title, continental glory in 1994, and the 2023 Federation Cup victory.",
};

const TROPHIES = [
  {
    year: "1979",
    title: "Nigerian League Champions",
    description:
      "The golden season under Kadiri Ikhana. Unbeaten at Ogbe Stadium, bringing the league trophy to Benin City for the first time.",
    count: "1x Champion",
    tag: "National Title",
  },
  {
    year: "1978, 1980, 2023",
    title: "FA & Federation Cups",
    description:
      "Three domestic cup triumphs, culminating in the emotional 1-0 victory over Enugu Rangers in Asaba to end a 45-year cup wait.",
    count: "3x Winners",
    tag: "Domestic Cup",
  },
  {
    year: "1994",
    title: "CAF Cup Winners",
    description:
      "Continental glory on the African stage, defeating Primeiro de Maio in the final to claim African football's prized silverware.",
    count: "1x Continental",
    tag: "African Trophy",
  },
  {
    year: "1993, 1994",
    title: "WAFU Club Championship",
    description:
      "Back-to-back West African titles cementing the Benin Arsenal as the dominant force in sub-Saharan club football.",
    count: "2x Champions",
    tag: "Sub-Regional",
  },
];

const TIMELINE_EVENTS = [
  {
    year: "1972",
    title: "Birth of the Vipers of Benin",
    description:
      "Founded by the government of the former Mid-Western State of Nigeria, the club was created to give Benin City a proud identity in national sport. Originally nicknamed 'The Vipers of Benin', they wore deep forest green and gold.",
    highlight: "Founded under Dr. Samuel Ogbemudia",
    image: "https://picsum.photos/seed/bendel-history-1972/800/500",
  },
  {
    year: "1978",
    title: "The First FA Cup Triumph",
    description:
      "In front of 60,000 fans at the National Stadium in Lagos, Bendel Insurance stunned the country by defeating heavyweight favourites Rangers International 3-0 in the FA Cup Final.",
    highlight: "First major national silverware",
    image: "https://picsum.photos/seed/bendel-history-1978/800/500",
  },
  {
    year: "1979",
    title: "The Golden League Championship",
    description:
      "A season written in Nigerian football folklore. Spearheaded by defensive legend Kadiri Ikhana, Insurance dominated the league without losing a single home match at Ogbe Stadium, taking the trophy to Benin City.",
    highlight: "Undefeated home record",
    image: "https://picsum.photos/seed/bendel-history-1979/800/500",
  },
  {
    year: "1994",
    title: "CAF Cup & African Glory",
    description:
      "The pinnacle of continental success. Insurance conquered West and Central Africa to reach the CAF Cup Final, outclassing Angola's Primeiro de Maio 3-1 on aggregate to claim the trophy.",
    highlight: "First African continental title",
    image: "https://picsum.photos/seed/bendel-history-1994/800/500",
  },
  {
    year: "2023",
    title: "The Great Revival — Federation Cup Champions",
    description:
      "After decades of rebuilding, Bendel Insurance completed an extraordinary 26-game unbeaten league run and capped it off by defeating Rangers 1-0 in Asaba to lift the Federation Cup and qualify for Africa once more.",
    highlight: "26-game unbeaten streak",
    image: "https://picsum.photos/seed/bendel-history-2023/800/500",
  },
];

export default async function HistoryPage() {
  const allPosts = await getPublishedPosts();
  const historyPosts = allPosts
    .filter((post) => post.category === "History" || post.category === "Club")
    .slice(0, 3);

  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-brand-deep pt-24 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(120% 90% at 20% 0%, rgba(247,198,33,0.18) 0%, transparent 60%)",
              "radial-gradient(80% 60% at 85% 100%, rgba(6,138,63,0.3) 0%, transparent 70%)",
              "linear-gradient(180deg, transparent 40%, rgba(2,47,23,0.95) 100%)",
            ].join(", "),
          }}
        />
        <div className={`${SHELL} relative z-10`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] text-brand-deep">
              Est. 1972 &middot; 54 Years of Pride
            </span>
            <span className="eyebrow rounded-pill bg-white/10 px-3.5 py-1.5 text-[10px] text-white/80 backdrop-blur-sm">
              The Benin Arsenal
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="headline text-4xl text-white uppercase sm:text-6xl lg:text-7xl">
                The Heritage of Benin City
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                For over five decades, Bendel Insurance FC has carried the pride,
                grit, and footballing soul of Edo State. From the Vipers of 1972
                to national title glory and African conquest.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:col-span-4 lg:justify-end">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                <Crest className="h-14" />
              </div>
              <div className="text-white">
                <p className="headline text-2xl uppercase">{club.city}</p>
                <p className="eyebrow text-[10px] text-gold">{club.stadium}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TROPHY CABINET */}
      <section className="bg-smoke py-14 md:py-24">
        <div className={SHELL}>
          <SectionHeader
            title="Honours & Trophy Cabinet"
            subtitle="Silverware forged across domestic leagues and continental competition"
          />

          <Reveal delay={0.05}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TROPHIES.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-card border border-ink/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand/20"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="eyebrow rounded-pill bg-brand/10 px-2.5 py-1 text-[9px] text-brand">
                        {item.tag}
                      </span>
                      <span className="headline text-2xl text-gold">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="headline mt-4 text-xl text-ink uppercase group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-steel">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-ink/8 pt-4">
                    <Check className="h-4 w-4 text-brand shrink-0" />
                    <span className="eyebrow text-[10px] text-ink">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. TIMELINE OF GLORY */}
      <section className={`${SHELL} py-16 md:py-24`}>
        <SectionHeader
          title="Timeline of the Arsenal"
          subtitle="Key milestones that defined five decades of Edo football"
        />

        <div className="mt-12 space-y-16">
          {TIMELINE_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={event.year} delay={0.05 * index}>
                <div
                  className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="headline text-4xl text-brand sm:text-5xl">
                        {event.year}
                      </span>
                      <span className="h-px flex-1 bg-ink/10" />
                    </div>

                    <h3 className="headline mt-3 text-2xl text-ink uppercase sm:text-3xl">
                      {event.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-steel">
                      {event.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-brand/8 px-4 py-2 text-xs font-semibold text-brand-dark">
                      <Check className="h-4 w-4 text-brand shrink-0" />
                      {event.highlight}
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-media bg-brand-deep shadow-lg">
                      <Media
                        src={event.image}
                        tone={index % 6}
                        monogram={false}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 4. CREST & COLOUR HERITAGE */}
      <section className="bg-brand-deep py-16 text-white md:py-24">
        <div className={SHELL}>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-card bg-white/5 p-8 ring-1 ring-white/15 backdrop-blur-md">
                <Crest className="h-40" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="eyebrow rounded-pill bg-gold px-3.5 py-1.5 text-[10px] text-brand-deep">
                Identity & Symbols
              </span>
              <h2 className="headline mt-4 text-3xl uppercase sm:text-4xl lg:text-5xl">
                Green, Gold, and the Arsenal Shield
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                The green represents the rich Edo landscape and our eternal
                vitality. The gold signifies the royal crown of the ancient Benin
                Kingdom and our pursuit of excellence. From the original Vipers
                roundel of 1972 to today's iconic shield, our badge carries the
                unbroken legacy of Benin City.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-control bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <p className="eyebrow text-[9px] text-gold">Primary Color</p>
                  <p className="font-semibold text-white">Edo Forest Green</p>
                </div>
                <div className="rounded-control bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <p className="eyebrow text-[9px] text-gold">Accent Color</p>
                  <p className="font-semibold text-white">Royal Benin Gold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HISTORIC ARCHIVES & BLOG POSTS */}
      {historyPosts.length > 0 && (
        <section className="bg-smoke py-16 md:py-24">
          <div className={SHELL}>
            <SectionHeader
              title="From the Archives"
              subtitle="Deep dives into legendary matches, former stars, and club lore"
              actionLabel="All history posts"
              actionHref="/blog"
            />
            <Reveal delay={0.05}>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {historyPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 6. CALL TO ACTION */}
      <section className={`${SHELL} py-16 md:py-24 text-center`}>
        <div className="mx-auto max-w-3xl rounded-card bg-brand p-8 text-white shadow-2xl md:p-14">
          <h2 className="headline text-3xl uppercase sm:text-4xl lg:text-5xl">
            Be Part of the Next Chapter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            History isn't just behind us — it's written every matchday at the
            Samuel Ogbemudia Stadium.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="eyebrow inline-flex items-center gap-2 rounded-pill bg-gold px-6 py-3.5 text-[10px] text-brand-deep transition-transform hover:scale-105"
            >
              Read the blog <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/admin/login"
              className="eyebrow inline-flex items-center gap-2 rounded-pill border border-white/30 bg-white/10 px-6 py-3.5 text-[10px] text-white transition-colors hover:bg-white/20"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}