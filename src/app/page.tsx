"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Nest, Species } from "@/lib/types";
import FilterPanel from "@/components/map/FilterPanel";
import NestDetail from "@/components/nest/NestDetail";
import { nests } from "@/lib/data/nests";

const NestMap = dynamic(() => import("@/components/map/NestMap"), { ssr: false });

export default function HomePage() {
  const [selectedNest, setSelectedNest] = useState<{ nest: Nest; species: Species } | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [showLiveCamsOnly, setShowLiveCamsOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const liveCamCount = nests.filter((n) => n.hasLiveCamera).length;
  const totalBirds = nests.reduce((sum, n) => sum + n.birdCount, 0);

  return (
    <div className="h-[calc(100vh-3.5rem)] flex relative">
      {/* Map */}
      <div className="flex-1 relative">
        <NestMap
          onNestSelect={(nest, species) => setSelectedNest({ nest, species })}
          selectedSpeciesFilter={selectedSpecies}
          showLiveCamsOnly={showLiveCamsOnly}
        />

        {/* Stats bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[500] flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm">
          <span className="text-white/60">{nests.length} nests</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-white/60">{totalBirds} birds</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-red-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            {liveCamCount} live
          </span>
        </div>

        {/* Filter toggle (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute bottom-6 left-4 z-[500] md:hidden bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full border border-white/10 text-sm font-medium shadow-lg"
        >
          {showFilters ? "Close Filters" : "Filters"}
        </button>

        {/* Filter panel */}
        <div className={`absolute top-4 left-4 z-[500] transition-all ${showFilters ? "block" : "hidden md:block"}`}>
          <FilterPanel
            selectedSpecies={selectedSpecies}
            onSpeciesChange={setSelectedSpecies}
            showLiveCamsOnly={showLiveCamsOnly}
            onLiveCamsChange={setShowLiveCamsOnly}
          />
        </div>
      </div>

      {/* Detail sidebar */}
      {selectedNest && (
        <div className="w-full md:w-[420px] absolute md:relative right-0 top-0 bottom-0 z-[600] md:z-auto shadow-2xl animate-fade-in">
          <NestDetail
            nest={selectedNest.nest}
            species={selectedNest.species}
            onClose={() => setSelectedNest(null)}
          />
        </div>
      )}
    </div>
  );
}
