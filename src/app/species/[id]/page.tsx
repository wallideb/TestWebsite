import Link from "next/link";
import { notFound } from "next/navigation";
import { species } from "@/lib/data/species";
import { nests } from "@/lib/data/nests";
import { IUCN_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return species.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sp = species.find((s) => s.id === id);
  if (!sp) return { title: "Species Not Found" };
  return {
    title: `${sp.commonName} (${sp.scientificName}) — RaptorNest`,
    description: sp.description,
  };
}

export default async function SpeciesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sp = species.find((s) => s.id === id);
  if (!sp) notFound();

  const spNests = nests.filter((n) => n.speciesId === sp.id);
  const totalBirds = spNests.reduce((sum, n) => sum + n.birdCount, 0);
  const iucn = IUCN_LABELS[sp.conservationStatus.iucn];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src={sp.imageUrl} alt={sp.commonName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${iucn.bg} ${iucn.color}`}>
              IUCN: {iucn.label}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-900/60 text-blue-300 font-medium">
              CITES {sp.conservationStatus.cites}
            </span>
            {sp.conservationStatus.euDirective && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/60 text-purple-300 font-medium">
                EU Birds Directive — Annex I
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-white">{sp.commonName}</h1>
          <a
            href={sp.wikipediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-amber-400 italic hover:underline"
          >
            {sp.scientificName} ↗
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          <StatBox label="Tracked Nests" value={String(spNests.length)} />
          <StatBox label="Total Birds" value={String(totalBirds)} />
          <StatBox label="Wingspan" value={sp.wingspan} />
          <StatBox label="Weight" value={sp.weight} />
          <StatBox label="Breeding" value={sp.nidificationMonths} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <Section title="Description">
              <p className="text-white/70 leading-relaxed">{sp.description}</p>
            </Section>

            <Section title="Habitat">
              <p className="text-white/70 leading-relaxed">{sp.habitat}</p>
            </Section>

            <Section title="Diet">
              <p className="text-white/70 leading-relaxed">{sp.diet}</p>
            </Section>

            <Section title="Nest & Eggs">
              <p className="text-white/70 leading-relaxed mb-3">{sp.nestDescription}</p>
              <p className="text-white/70 leading-relaxed">{sp.eggDescription}</p>
            </Section>

            {/* Nest list */}
            <Section title={`Tracked Nests (${spNests.length})`}>
              <div className="space-y-3">
                {spNests.map((nest) => (
                  <div
                    key={nest.id}
                    className="bg-white/5 rounded-lg p-4 border border-white/5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-white">{nest.locationName}</h4>
                        <p className="text-sm text-white/50">{nest.region}, {nest.country}</p>
                      </div>
                      <div className="flex gap-1.5">
                        {nest.hasLiveCamera && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                            LIVE
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/50 text-green-300">
                          {nest.birdCount} birds
                        </span>
                      </div>
                    </div>

                    {nest.nestDescription && (
                      <p className="text-sm text-white/50 mt-2">{nest.nestDescription}</p>
                    )}

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-white/40">
                      <span>First recorded: {nest.dateFirstRecorded}</span>
                      {nest.eggCount !== null && <span>Eggs: {nest.eggCount}</span>}
                      {nest.eggStatus && <span>Status: {nest.eggStatus}</span>}
                    </div>

                    {nest.individualBirds.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {nest.individualBirds.map((bird, i) => (
                          <span key={i} className="text-xs bg-amber-900/30 text-amber-300 px-2 py-0.5 rounded">
                            {bird.name || bird.ringId || `Bird ${i + 1}`} ({bird.sex})
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-2 text-xs text-white/30">
                      Sources: {nest.sources.map((s) => s.name).join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Section title="Protection Status">
              <ul className="space-y-2">
                {sp.localProtection.map((p, i) => (
                  <li key={i} className="text-sm text-white/60 flex gap-2">
                    <span className="text-green-400 shrink-0 mt-1">●</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Image Credit">
              <p className="text-xs text-white/40">{sp.imageAttribution}</p>
            </Section>

            <Link
              href="/"
              className="block w-full text-center py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium text-sm transition-colors"
            >
              View on Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">{title}</h2>
      {children}
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/5 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-white/40 mt-1">{label}</p>
    </div>
  );
}
