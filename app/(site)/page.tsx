import { Hero } from "@/components/hero";
import { HonoursBand } from "@/components/honours-band";
import { Matches } from "@/components/matches";
import { Partners } from "@/components/partners";
import { PromoDuo } from "@/components/promo-duo";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SquadRail } from "@/components/squad-rail";
import { StoryGrid, StoryShowcase } from "@/components/story-card";
import { Ticker } from "@/components/ticker";
import { VideoRail } from "@/components/video-rail";
import {
  club,
  featureStories,
  kitPromos,
  membershipPromos,
  newsStories,
  ticketPromos,
} from "@/lib/content";
import { getHeroSlides, getSiteSettings } from "@/lib/site-content-server";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default async function Home() {
  const slides = await getHeroSlides();
  const settings = await getSiteSettings();

  const customKitPromos = kitPromos.map((p) => {
    if (p.slug === "home-kit" && settings.homeKitImage)
      return { ...p, image: settings.homeKitImage };
    if (p.slug === "away-kit" && settings.awayKitImage)
      return { ...p, image: settings.awayKitImage };
    return p;
  });

  const customTicketPromos = ticketPromos.map((p) => {
    if (p.slug === "stadium-tours" && settings.stadiumTourImage)
      return { ...p, image: settings.stadiumTourImage };
    return p;
  });

  const customMembershipPromos = membershipPromos.map((p) => {
    if (settings.membershipImage) return { ...p, image: settings.membershipImage };
    return p;
  });

  return (
    <>
      {/* Hero flexes to fill whatever height the ticker leaves, so the pair
          lands exactly on the fold instead of leaving a sliver of page below. */}
      <div className="flex min-h-svh flex-col">
        <Hero slides={slides} />
        <Ticker />
      </div>

      {/* News and views */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <SectionHeader
          title={`Welcome to ${club.shortName}`}
          subtitle="News and views from the Benin Arsenal"
          actionLabel="All news"
          actionHref="/news"
        />
        <Reveal delay={0.05}>
          <StoryShowcase stories={newsStories} />
        </Reveal>
      </section>

      {/* Matches + table */}
      <section className="bg-white">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="Matches"
            subtitle={`${club.league} · ${club.stadium}`}
            actionLabel="Fixtures"
            actionHref="/fixtures"
          />
          <Reveal delay={0.05}>
            <Matches />
          </Reveal>
        </div>
      </section>

      {/* Insurance TV */}
      <section className="bg-ink">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="Insurance TV"
            subtitle="Highlights, full matches and behind the scenes"
            actionLabel="Watch all"
            actionHref="/tv"
            dark
          />
          <Reveal delay={0.05}>
            <VideoRail />
          </Reveal>
        </div>
      </section>

      {/* Features and opinion */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <SectionHeader
          title="Features and opinion"
          subtitle="Essential reading from Benin City"
          actionLabel="All features"
          actionHref="/news/features"
        />
        <Reveal delay={0.05}>
          <StoryGrid stories={featureStories} />
        </Reveal>
      </section>

      {/* Club store */}
      <section className="bg-smoke">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="The club store"
            subtitle="Green and gold for every supporter"
            actionLabel="Shop all"
            actionHref="/store"
          />
          <Reveal delay={0.05}>
            <PromoDuo promos={customKitPromos} hrefBase="/store" />
          </Reveal>
        </div>
      </section>

      {/* Squad */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <SectionHeader
          title="First team"
          subtitle="The squad wearing the green and gold this season"
          actionLabel="Full squad"
          actionHref="/teams/first"
        />
        <Reveal delay={0.05}>
          <SquadRail />
        </Reveal>
      </section>

      {/* Honours */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 8.333%, transparent 8.333% 16.666%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(115% 75% at 50% -10%, rgba(247,198,33,0.12) 0%, transparent 60%)",
              "linear-gradient(180deg, transparent 35%, rgba(2,47,23,0.8) 100%)",
            ].join(", "),
          }}
        />
        <div className={`${SHELL} relative py-14 md:py-20`}>
          <SectionHeader
            title="Since 1972"
            subtitle="Founding members of the Nigerian league, originally the Vipers of Benin"
            actionLabel="Trophy Room & History"
            actionHref="/history"
            dark
          />
          <Reveal delay={0.05}>
            <HonoursBand />
          </Reveal>
        </div>
      </section>

      {/* Tickets and tours */}
      <section className={`${SHELL} py-14 md:py-20`}>
        <SectionHeader
          title="Tickets and tours"
          subtitle="Experiences for the Insurance family"
          actionLabel="All tickets"
          actionHref="/tickets"
        />
        <Reveal delay={0.05}>
          <PromoDuo promos={customTicketPromos} hrefBase="/tickets" />
        </Reveal>
      </section>

      {/* Membership */}
      <section className="bg-smoke">
        <div className={`${SHELL} py-14 md:py-20`}>
          <SectionHeader
            title="Become a member"
            subtitle="Priority tickets, exclusive video and members-only merch"
            actionLabel="Join now"
            actionHref="/membership"
          />
          <Reveal delay={0.05}>
            <PromoDuo promos={customMembershipPromos} hrefBase="/membership" />
          </Reveal>
        </div>
      </section>

      <section className={`${SHELL} pb-16 md:pb-24`}>
        <SectionHeader
          title="Our partners"
          actionLabel="All partners"
          actionHref="/partners"
        />
        <Reveal delay={0.05}>
          <Partners />
        </Reveal>
      </section>

    </>
  );
}
