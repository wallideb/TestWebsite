"use client";

import { useEffect, useState } from "react";
import { nests } from "@/lib/data/nests";
import { species as speciesList } from "@/lib/data/species";
import { Nest, Species, IUCN_LABELS } from "@/lib/types";

import "leaflet/dist/leaflet.css";

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

function createNestIcon(speciesId: string, hasCamera: boolean) {
  if (typeof window === "undefined") return null;
  const L = require("leaflet");
  const color = SPECIES_COLORS[speciesId] || "#6b7280";
  const cameraRing = hasCamera ? `<circle cx="16" cy="16" r="14" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>` : "";

  const svg = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      ${cameraRing}
      <circle cx="16" cy="16" r="10" fill="${color}" stroke="white" stroke-width="2"/>
      <circle cx="16" cy="16" r="4" fill="white" opacity="0.8"/>
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: "nest-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
}

interface NestMapProps {
  onNestSelect: (nest: Nest, species: Species) => void;
  selectedSpeciesFilter: string | null;
  showLiveCamsOnly: boolean;
}

export default function NestMap({ onNestSelect, selectedSpeciesFilter, showLiveCamsOnly }: NestMapProps) {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
        <div className="text-white/60 flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-white/30 border-t-amber-400 rounded-full animate-spin" />
          <span>Loading map...</span>
        </div>
      </div>
    );
  }

  return <MapInner onNestSelect={onNestSelect} selectedSpeciesFilter={selectedSpeciesFilter} showLiveCamsOnly={showLiveCamsOnly} />;
}

function MapInner({ onNestSelect, selectedSpeciesFilter, showLiveCamsOnly }: NestMapProps) {
  const { MapContainer, TileLayer, Marker, Popup, useMap } = require("react-leaflet");
  const L = require("leaflet");

  useEffect(() => {
    delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });
  }, [L]);

  const filteredNests = nests.filter((nest) => {
    if (selectedSpeciesFilter && nest.speciesId !== selectedSpeciesFilter) return false;
    if (showLiveCamsOnly && !nest.hasLiveCamera) return false;
    return true;
  });

  return (
    <MapContainer
      center={[48.5, 8.0]}
      zoom={5}
      className="w-full h-full"
      style={{ background: "#1e293b" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {filteredNests.map((nest) => {
        const sp = speciesList.find((s) => s.id === nest.speciesId);
        if (!sp) return null;
        const icon = createNestIcon(nest.speciesId, nest.hasLiveCamera);
        const statusInfo = IUCN_LABELS[sp.conservationStatus.iucn];

        return (
          <Marker
            key={nest.id}
            position={[nest.latitude, nest.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => onNestSelect(nest, sp),
            }}
          >
            <Popup className="nest-popup">
              <div className="min-w-[200px]">
                <p className="font-bold text-sm">{sp.commonName}</p>
                <p className="text-xs italic text-gray-500">{sp.scientificName}</p>
                <p className="text-xs mt-1">{nest.locationName}, {nest.country}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-1.5 py-0.5 rounded ${statusInfo.bg} ${statusInfo.color}`}>
                    {sp.conservationStatus.iucn}
                  </span>
                  {nest.hasLiveCamera && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-red-100 text-red-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-xs mt-1">{nest.birdCount} bird{nest.birdCount !== 1 ? "s" : ""}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
