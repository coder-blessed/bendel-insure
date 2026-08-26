import Image from "next/image";
import { partners } from "@/lib/content";

export function Partners() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="eyebrow mb-4 text-[10px] font-bold text-steel uppercase tracking-wider">
          Official Club Sponsors
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {partners.principal.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-between rounded-card border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-md sm:flex-row"
            >
              <div className="relative h-16 w-48 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:text-right">
                <span className="eyebrow text-[9px] font-bold text-brand uppercase">
                  {partner.role}
                </span>
                <p className="headline mt-0.5 text-base uppercase text-ink group-hover:text-brand transition-colors">
                  {partner.shortName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
