"use client";

import { Nest, Species, IUCN_LABELS } from "@/lib/types";
import Link from "next/link";

interface NestDetailProps {
  nest: Nest;
  species: Species;
  onClose: () => void;
}

export default function NestDetail({ nest, species, onClose }: NestDetailProps) {
  const iucn = IUCN_LABELS[species.conservationStatus.iucn];

  return (
    <div className="h-full flex flex-col bg-slate-900 text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
        <h2 className="font-bold text-lg truncate">{nest.locationName}</h2>
        <button onClick={onClose} className="text-white/50 hover:text-white p-1" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 5L5 15M5 5l10 10" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Species header */}
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <img
              src={species.imageUrl}
              alt={species.commonName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
            <h3 className="font-bold text-xl text-white">{species.commonName}</h3>
            <a
              href={species.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 text-sm italic hover:underline"
            >
              {species.scientificName} ↗
            </a>
          </div>
        </div>

        <div className="px-4 py-4 space-y-5">
          {/* Status badges */}
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${iucn.bg} ${iucn.color}`}>
              IUCN: {iucn.label}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-300 font-medium">
              CITES {species.conservationStatus.cites}
            </span>
            {species.conservationStatus.euDirective && (
              <span className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-300 font-medium">
                EU Birds Directive
              </span>
            )}
            {nest.hasLiveCamera && (
              <span className="text-xs px-2 py-1 rounded-full bg-red-900/50 text-red-300 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                LIVE CAM
              </span>
            )}
          </div>

          {/* Nest stats */}
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Birds observed" value={String(nest.birdCount)} />
            <StatCard label="Country" value={nest.country} />
            <StatCard label="First recorded" value={nest.dateFirstRecorded} />
            <StatCard
              label="Nidification"
              value={nest.nidificationStart ? new Date(nest.nidificationStart).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : "—"}
            />
            {nest.eggCount !== null && <StatCard label="Eggs" value={String(nest.eggCount)} />}
            {nest.eggStatus && <StatCard label="Status" value={nest.eggStatus} />}
          </div>

          {/* Live camera link */}
          {nest.hasLiveCamera && nest.liveCameraUrl && (
            <a
              href={nest.liveCameraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Watch Live Camera ↗
            </a>
          )}

          {/* Individual birds */}
          {nest.individualBirds.length > 0 && (
            <Section title="Identified Birds">
              <div className="space-y-2">
                {nest.individualBirds.map((bird, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-amber-400">
                        {bird.name || `Bird ${i + 1}`}
                      </span>
                      <span className="text-white/40 text-xs capitalize">{bird.sex}</span>
                    </div>
                    {bird.ringId && <p className="text-white/60 text-xs mt-1">Ring: {bird.ringId}</p>}
                    {bird.chipId && <p className="text-white/60 text-xs">Chip: {bird.chipId}</p>}
                    {bird.age && <p className="text-white/60 text-xs">Age: {bird.age}</p>}
                    {bird.organization && <p className="text-white/60 text-xs">Monitored by: {bird.organization}</p>}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Nest description */}
          {nest.nestDescription && (
            <Section title="Nest Description">
              <p className="text-sm text-white/70 leading-relaxed">{nest.nestDescription}</p>
            </Section>
          )}

          {/* Species info */}
          <Section title="About the Species">
            <p className="text-sm text-white/70 leading-relaxed">{species.description}</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <InfoRow label="Wingspan" value={species.wingspan} />
              <InfoRow label="Weight" value={species.weight} />
              <InfoRow label="Habitat" value={species.habitat} />
              <InfoRow label="Diet" value={species.diet} />
              <InfoRow label="Breeding" value={species.nidificationMonths} />
            </div>
          </Section>

          {/* Egg description */}
          <Section title="Eggs & Nesting">
            <p className="text-sm text-white/70 leading-relaxed">{species.eggDescription}</p>
            <p className="text-sm text-white/70 leading-relaxed mt-2">{species.nestDescription}</p>
          </Section>

          {/* Local protection */}
          <Section title="Protection Status">
            <ul className="space-y-1.5">
              {species.localProtection.map((p, i) => (
                <li key={i} className="text-xs text-white/60 flex gap-2">
                  <span className="text-green-400 shrink-0">●</span>
                  {p}
                </li>
              ))}
            </ul>
          </Section>

          {/* Sources */}
          <Section title="Sources">
            <ul className="space-y-1">
              {nest.sources.map((src, i) => (
                <li key={i} className="text-xs">
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    {src.name}
                  </a>
                  <span className="text-white/40"> — {src.dataType} (accessed {src.accessDate})</span>
                </li>
              ))}
              <li className="text-xs">
                <span className="text-white/40">Species image: {species.imageAttribution}</span>
              </li>
            </ul>
          </Section>

          {/* Link to species page */}
          <Link
            href={`/species/${species.id}`}
            className="block w-full text-center py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium text-sm transition-colors"
          >
            View Full Species Profile
          </Link>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{title}</h4>
      {children}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-lg p-2.5">
      <p className="text-xs text-white/40">{label}</p>
      <p className="text-sm font-medium text-white mt-0.5">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-white/40 shrink-0 w-20">{label}:</span>
      <span className="text-white/70">{value}</span>
    </div>
  );
}
