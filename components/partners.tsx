import Link from "next/link";
import { partners } from "@/lib/content";

function LogoTile({ name, large = false }: { name: string; large?: boolean }) {
  return (
    <Link
      href="/partners"
      className={`flex items-center justify-center border border-ink/10 bg-white px-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md ${
        large ? "h-24" : "h-16"
      }`}
    >
      <span
        className={`headline text-steel uppercase transition-colors duration-300 hover:text-brand ${
          large ? "text-lg sm:text-xl" : "text-xs sm:text-sm"
        }`}
      >
        {name}
      </span>
    </Link>
  );
}

export function Partners() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="eyebrow mb-4 text-[10px] text-steel">
          Principal partners
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {partners.principal.map((name) => (
            <LogoTile key={name} name={name} large />
          ))}
        </div>
      </div>

      <div>
        <h3 className="eyebrow mb-4 text-[10px] text-steel">Global partners</h3>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {partners.global.map((name) => (
            <LogoTile key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
