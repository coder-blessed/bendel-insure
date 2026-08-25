import Link from "next/link";
import { Crest } from "@/components/brand";
import { SocialIcon } from "@/components/icons";
import { club, footerColumns, socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
          <div className="lg:w-64">
            <Crest className="h-24" />

            <p className="headline mt-5 text-xl uppercase">
              {club.name}
            </p>

            <p className="mt-2 text-sm text-white/50">
              {club.stadium}
              <br />
              {club.city}, {club.state}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="eyebrow mb-4 text-[10px] text-gold">
                  {column.title}
                </h3>

                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-8">
          <div>
            <h3 className="eyebrow mb-3 text-[10px] text-white/50">
              Follow us
            </h3>

            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-gold hover:bg-white/5 hover:text-gold"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3 text-[10px] text-white/50">
              Official app
            </h3>

            <div className="flex gap-3">
              {["App Store", "Google Play"].map((store) => (
                <Link
                  key={store}
                  href="/app"
                  className="eyebrow flex h-11 items-center rounded-pill border border-white/20 px-5 text-[9px] text-white/70 transition-colors hover:border-gold hover:bg-white/5 hover:text-gold"
                >
                  {store}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/35">
          &copy; {new Date().getFullYear()} {club.name}. Founded{" "}
          {club.founded} in {club.city}.
        </p>
      </div>
    </footer>
  );
}