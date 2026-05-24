import Link from "next/link";
import { species } from "@/lib/data/species";
import { nests } from "@/lib/data/nests";

export const metadata = {
  title: "About & Sources — RaptorNest",
  description: "About the RaptorNest project, data sources, methodology, and how to contribute.",
};

const DATA_SOURCES = [
  {
    name: "eBird",
    org: "Cornell Lab of Ornithology",
    url: "https://ebird.org/",
    description: "Global bird observation database with peer-reviewed citizen science data covering all bird species.",
    dataUsed: "Observation records, location data, species counts, hotspots",
    license: "CC BY-NC",
  },
  {
    name: "GBIF",
    org: "Global Biodiversity Information Facility",
    url: "https://www.gbif.org/",
    description: "International network and data infrastructure providing open access to biodiversity occurrence data.",
    dataUsed: "Species occurrence records, taxonomy, geolocation, collection metadata",
    license: "CC0 / CC BY / CC BY-NC (varies by dataset)",
  },
  {
    name: "IUCN Red List",
    org: "International Union for Conservation of Nature",
    url: "https://www.iucnredlist.org/",
    description: "The world's most comprehensive inventory of the global conservation status of species.",
    dataUsed: "Conservation status, population trends, range maps, threat assessments",
    license: "Non-commercial use with attribution",
  },
  {
    name: "CITES",
    org: "Convention on International Trade in Endangered Species",
    url: "https://cites.org/",
    description: "International agreement regulating trade in specimens of wild animals and plants.",
    dataUsed: "Trade protection appendix listings, national legislation",
    license: "Open access",
  },
  {
    name: "Vulture Conservation Foundation",
    org: "VCF",
    url: "https://www.4vultures.org/",
    description: "Leading organization for vulture conservation in Europe, managing reintroduction programs.",
    dataUsed: "Bearded vulture and griffon vulture monitoring data, reintroduction records",
    license: "Contact for data access",
  },
  {
    name: "GRIN",
    org: "The Peregrine Fund",
    url: "https://globalraptors.org/",
    description: "Global Raptor Impact Network — raptor-specific database with 200,000+ entries worldwide.",
    dataUsed: "Raptor sightings, nest productivity, mortality data",
    license: "Contact for data access",
  },
  {
    name: "LPO",
    org: "Ligue pour la Protection des Oiseaux",
    url: "https://www.lpo.fr/",
    description: "France's leading bird conservation organization with extensive monitoring programs.",
    dataUsed: "French raptor nest monitoring, species surveys",
    license: "Data sharing agreements",
  },
  {
    name: "SEO/BirdLife",
    org: "Sociedad Española de Ornitología",
    url: "https://www.seo.org/",
    description: "Spain's ornithological society and BirdLife International partner.",
    dataUsed: "Spanish imperial eagle and vulture monitoring, live camera feeds",
    license: "Data sharing agreements",
  },
  {
    name: "Wikipedia / Wikimedia Commons",
    org: "Wikimedia Foundation",
    url: "https://en.wikipedia.org/",
    description: "Species descriptions and imagery used under Creative Commons licenses.",
    dataUsed: "Species descriptions (linked), reference images with attribution",
    license: "CC BY-SA 3.0 / CC BY-SA 4.0",
  },
];

export default function AboutPage() {
  const countries = [...new Set(nests.map((n) => n.country))];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">About RaptorNest</h1>

        {/* Mission */}
        <div className="bg-slate-900 rounded-xl border border-white/5 p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Mission</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            RaptorNest is an open platform that aggregates real-time data about birds of prey nests
            across Europe. We combine data from established ornithological databases — eBird, GBIF,
            GRIN, IUCN Red List — with live nest camera feeds and field monitoring reports to create
            the most comprehensive, visual, and accessible raptor nest tracker available.
          </p>
          <p className="text-white/70 leading-relaxed">
            We don&apos;t compete with existing scientific databases. We are the <strong className="text-amber-400">visual, interactive front-end</strong> that
            makes their data accessible to researchers, conservationists, bird enthusiasts, and the
            general public. Every data point is cited. Every source is attributed.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <StatBox label="Species Tracked" value={String(species.length)} />
          <StatBox label="Active Nests" value={String(nests.filter((n) => n.isActive).length)} />
          <StatBox label="Countries" value={String(countries.length)} />
          <StatBox label="Live Cameras" value={String(nests.filter((n) => n.hasLiveCamera).length)} />
        </div>

        {/* Data Sources */}
        <h2 className="text-xl font-bold text-white mb-4">Data Sources</h2>
        <p className="text-white/50 mb-6">
          All data displayed on RaptorNest is sourced from the following verified databases and organizations.
          Each nest and species entry includes inline citations linking to its original source.
        </p>

        <div className="space-y-3 mb-10">
          {DATA_SOURCES.map((src) => (
            <div key={src.name} className="bg-slate-900 rounded-xl border border-white/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-400 hover:underline"
                  >
                    {src.name} ↗
                  </a>
                  <p className="text-sm text-white/50">{src.org}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/40 shrink-0">
                  {src.license}
                </span>
              </div>
              <p className="text-sm text-white/60 mt-2">{src.description}</p>
              <p className="text-xs text-white/30 mt-1">Data used: {src.dataUsed}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <h2 className="text-xl font-bold text-white mb-4">Methodology</h2>
        <div className="bg-slate-900 rounded-xl border border-white/5 p-6 mb-10">
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">1.</span>
              <span><strong className="text-white/80">Data Aggregation:</strong> We pull from public APIs (eBird, GBIF, IUCN Red List, CITES) and curate nest data from national monitoring schemes and bird conservation organizations.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">2.</span>
              <span><strong className="text-white/80">Verification:</strong> Nest locations and species identifications are cross-referenced across multiple sources. Only verified data appears on the map.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">3.</span>
              <span><strong className="text-white/80">Attribution:</strong> Every data point includes its source with access date. Species images use Creative Commons licensed photography from Wikimedia Commons with full attribution.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">4.</span>
              <span><strong className="text-white/80">Conservation Status:</strong> IUCN Red List status and CITES appendix listings are the primary international references. Local/national protection laws are sourced from government wildlife legislation.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">5.</span>
              <span><strong className="text-white/80">Live Cameras:</strong> Camera feeds are aggregated from wildlife organizations that operate public nest cameras. We link to the original streams — we do not host or re-stream video.</span>
            </li>
          </ul>
        </div>

        {/* Nest sensitivity note */}
        <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-6 mb-10">
          <h3 className="font-bold text-amber-400 mb-2">Nest Location Sensitivity</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Some raptor nest locations are sensitive and may be intentionally generalized to protect
            the birds from disturbance. We follow the guidelines of national monitoring schemes
            regarding location precision. If you discover a nest not on our platform, please report
            it to your local bird conservation organization rather than posting exact coordinates publicly.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors"
          >
            Explore the Map
          </Link>
        </div>
      </div>
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
