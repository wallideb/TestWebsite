"use client";

import { species } from "@/lib/data/species";
import { nests } from "@/lib/data/nests";

const SPECIES_COLORS: Record<string, string> = {
  "peregrine-falcon": "#3b82f6",
  "golden-eagle": "#f59e0b",
  "white-tailed-eagle": "#6366f1",
  "eurasian-eagle-owl": "#8b5cf6",
  "osprey": "#10b981",
  "spanish-imperial-eagle": "#ef4444",
  "bearded-vulture": "#f97316",
  "griffon-vulture": "#78716c",
};

interface FilterPanelProps {
  selectedSpecies: string | null;
  onSpeciesChange: (id: string | null) => void;
  showLiveCamsOnly: boolean;
  onLiveCamsChange: (show: boolean) => void;
}

export default function FilterPanel({
  selectedSpecies,
  onSpeciesChange,
  showLiveCamsOnly,
  onLiveCamsChange,
}: FilterPanelProps) {
  const speciesWithCounts = species.map((s) => ({
    ...s,
    nestCount: nests.filter((n) => n.speciesId === s.id).length,
    totalBirds: nests.filter((n) => n.speciesId === s.id).reduce((sum, n) => sum + n.birdCount, 0),
  }));

  const totalNests = nests.length;
  const totalBirds = nests.reduce((sum, n) => sum + n.birdCount, 0);
  const liveCams = nests.filter((n) => n.hasLiveCamera).length;

  return (
    <div className="bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 shadow-2xl w-72">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm">Filters</h3>
        <div className="text-xs text-white/40">
          {totalNests} nests &middot; {totalBirds} birds
        </div>
      </div>

      {/* Live cams toggle */}
      <button
        onClick={() => onLiveCamsChange(!showLiveCamsOnly)}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm mb-3 transition-colors ${
          showLiveCamsOnly
            ? "bg-red-600/30 text-red-300 border border-red-500/30"
            : "bg-white/5 text-white/60 hover:bg-white/10 border border-transparent"
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${showLiveCamsOnly ? "bg-red-400 animate-pulse" : "bg-red-400/40"}`} />
        Live Cameras Only ({liveCams})
      </button>

      {/* Species list */}
      <div className="space-y-1">
        <button
          onClick={() => onSpeciesChange(null)}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
            !selectedSpecies
              ? "bg-amber-600/30 text-amber-300 border border-amber-500/30"
              : "bg-white/5 text-white/60 hover:bg-white/10 border border-transparent"
          }`}
        >
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-blue-400" />
          All Species
        </button>

        {speciesWithCounts.map((s) => (
          <button
            key={s.id}
            onClick={() => onSpeciesChange(s.id === selectedSpecies ? null : s.id)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedSpecies === s.id
                ? "bg-amber-600/30 text-amber-300 border border-amber-500/30"
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-transparent"
            }`}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: SPECIES_COLORS[s.id] || "#6b7280" }}
            />
            <span className="truncate flex-1 text-left">{s.commonName}</span>
            <span className="text-xs text-white/30">{s.nestCount}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
