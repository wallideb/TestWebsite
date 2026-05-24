import Link from "next/link";
import { nests } from "@/lib/data/nests";
import { species as speciesList } from "@/lib/data/species";

export const metadata = {
  title: "Live Nest Cameras — RaptorNest",
  description: "Watch birds of prey on live nest cameras across Europe. Real-time feeds from peregrine falcons, eagles, ospreys, and vultures.",
};

export default function LiveCamsPage() {
  const liveCamNests = nests.filter((n) => n.hasLiveCamera);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <h1 className="text-3xl font-bold text-white">Live Nest Cameras</h1>
        </div>
        <p className="text-white/50 mb-8">
          {liveCamNests.length} active camera feeds from raptor nests across Europe
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveCamNests.map((nest) => {
            const sp = speciesList.find((s) => s.id === nest.speciesId);
            if (!sp) return null;

            return (
              <div
                key={nest.id}
                className="bg-slate-900 rounded-xl border border-white/5 overflow-hidden hover:border-red-500/30 transition-all"
              >
                {/* Camera preview area */}
                <div className="relative h-48 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={sp.imageUrl}
                    alt={sp.commonName}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center mb-3 hover:bg-red-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm text-white/80 font-medium">Live Camera Available</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-white text-lg">{sp.commonName}</h3>
                      <p className="text-sm text-amber-400/70 italic">{sp.scientificName}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-300">
                      {nest.birdCount} birds
                    </span>
                  </div>

                  <p className="text-sm text-white/50 mb-1">
                    {nest.locationName}, {nest.country}
                  </p>

                  {nest.nestDescription && (
                    <p className="text-sm text-white/40 mb-3 line-clamp-2">{nest.nestDescription}</p>
                  )}

                  {nest.individualBirds.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {nest.individualBirds.map((bird, i) => (
                        <span key={i} className="text-xs bg-white/5 text-white/60 px-2 py-0.5 rounded">
                          {bird.name || bird.ringId} — {bird.sex}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 mt-3">
                    {nest.liveCameraUrl && (
                      <a
                        href={nest.liveCameraUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Watch Live
                      </a>
                    )}
                    <Link
                      href={`/species/${sp.id}`}
                      className="flex-1 text-center py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Species Info
                    </Link>
                  </div>

                  <div className="mt-3 text-xs text-white/30">
                    Sources: {nest.sources.map((s) => s.name).join(", ")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
