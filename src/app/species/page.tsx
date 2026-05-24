import Link from "next/link";
import { species } from "@/lib/data/species";
import { nests } from "@/lib/data/nests";
import { IUCN_LABELS } from "@/lib/types";

export const metadata = {
  title: "Species Directory — RaptorNest",
  description: "Browse all tracked European birds of prey species with conservation status, habitat info, and nest locations.",
};

export default function SpeciesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">Species Directory</h1>
        <p className="text-white/50 mb-8">
          {species.length} European raptor species tracked across {nests.length} active nests
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {species.map((sp) => {
            const spNests = nests.filter((n) => n.speciesId === sp.id);
            const birdCount = spNests.reduce((sum, n) => sum + n.birdCount, 0);
            const iucn = IUCN_LABELS[sp.conservationStatus.iucn];
            const hasLive = spNests.some((n) => n.hasLiveCamera);

            return (
              <Link
                key={sp.id}
                href={`/species/${sp.id}`}
                className="group bg-slate-900 rounded-xl border border-white/5 overflow-hidden hover:border-amber-500/30 transition-all hover:shadow-lg hover:shadow-amber-500/5"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={sp.imageUrl}
                    alt={sp.commonName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${iucn.bg} ${iucn.color}`}>
                      {sp.conservationStatus.iucn}
                    </span>
                    {hasLive && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/80 text-red-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">
                    {sp.commonName}
                  </h3>
                  <p className="text-sm text-amber-400/70 italic">{sp.scientificName}</p>
                  <p className="text-sm text-white/50 mt-2 line-clamp-2">{sp.description}</p>

                  <div className="flex items-center gap-4 mt-3 text-xs text-white/40">
                    <span>{spNests.length} nest{spNests.length !== 1 ? "s" : ""}</span>
                    <span>{birdCount} bird{birdCount !== 1 ? "s" : ""}</span>
                    <span>{sp.wingspan}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
