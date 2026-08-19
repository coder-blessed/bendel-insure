import Link from "next/link";

export default function NewsNotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-[1440px] flex-col items-center justify-center px-4 py-20 text-center">
      <span className="eyebrow rounded-pill bg-gold px-3 py-1.5 text-[10px] text-brand-deep">
        Newsroom
      </span>
      <h1 className="headline mt-5 text-4xl uppercase text-ink sm:text-5xl">
        Story not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
        The article you were looking for is no longer available or the link is incorrect.
      </p>
      <Link
        href="/news"
        className="eyebrow mt-8 inline-flex items-center rounded-pill bg-brand px-5 py-3 text-[10px] text-white transition-colors hover:bg-brand-dark"
      >
        Back to news
      </Link>
    </section>
  );
}
