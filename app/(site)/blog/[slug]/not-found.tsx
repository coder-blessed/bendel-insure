import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default function BlogPostNotFound() {
  return (
    <section className={`${SHELL} pt-32 pb-20 lg:pt-40 lg:pb-28`}>
      <div className="max-w-xl">
        <span className="eyebrow text-[10px] text-brand">404</span>
        <h1 className="headline mt-4 text-3xl text-ink uppercase sm:text-5xl">
          We cannot find that post
        </h1>
        <p className="mt-5 text-base leading-relaxed text-steel">
          It may have been unpublished, or the address may be wrong. The rest of
          the blog is still where you left it.
        </p>
        <Link
          href="/blog"
          className="eyebrow group mt-8 inline-flex items-center gap-3 rounded-pill bg-brand px-6 py-3.5 text-[11px] text-white transition-colors hover:bg-brand-dark"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to the blog
        </Link>
      </div>
    </section>
  );
}
