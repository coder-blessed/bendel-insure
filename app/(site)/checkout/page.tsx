import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/checkout-flow";

export const metadata: Metadata = {
  title: "Checkout | Bendel Insurance FC",
  description: "Secure checkout for matchday tickets and official club merchandise.",
};

const SHELL = "mx-auto w-full max-w-[1440px] px-4 md:px-8";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams?: Promise<{ type?: string; id?: string; name?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const itemType = params.type ?? "ticket";
  const itemId = params.id ?? "popular";
  const itemName = params.name ?? "Popular";

  return (
    <main className="bg-smoke pb-20 pt-28 text-ink">
      <div className={`${SHELL}`}>
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-steel">
          <a href="/" className="hover:text-brand">Home</a>
          <span>/</span>
          <span className="text-brand font-semibold">Checkout</span>
        </nav>

        <div className="mb-8">
          <p className="eyebrow text-[10px] text-brand">Checkout</p>
          <h1 className="headline mt-2 text-4xl uppercase text-ink sm:text-5xl">
            Secure payment
          </h1>
        </div>

        <CheckoutFlow itemType={itemType} itemId={itemId} itemName={itemName} />
      </div>
    </main>
  );
}
