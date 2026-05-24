export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  wikipediaUrl: string;
  description: string;
  habitat: string;
  diet: string;
  wingspan: string;
  weight: string;
  imageUrl: string;
  imageAttribution: string;
  conservationStatus: ConservationStatus;
  localProtection: string[];
  nidificationMonths: string;
  eggDescription: string;
  nestDescription: string;
}

export interface ConservationStatus {
  iucn: IUCNStatus;
  cites: string;
  euDirective?: string;
}

export type IUCNStatus = "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";

export interface Nest {
  id: string;
  speciesId: string;
  latitude: number;
  longitude: number;
  country: string;
  region: string;
  locationName: string;
  birdCount: number;
  dateFirstRecorded: string;
  nidificationStart: string | null;
  nidificationEnd: string | null;
  isActive: boolean;
  hasLiveCamera: boolean;
  liveCameraUrl: string | null;
  liveCameraEmbed: string | null;
  individualBirds: IndividualBird[];
  nestDescription: string | null;
  eggCount: number | null;
  eggStatus: string | null;
  sources: DataSource[];
}

export interface IndividualBird {
  name: string | null;
  ringId: string | null;
  chipId: string | null;
  sex: "male" | "female" | "unknown";
  age: string | null;
  organization: string | null;
}

export interface DataSource {
  name: string;
  url: string;
  accessDate: string;
  dataType: string;
}

export const IUCN_LABELS: Record<IUCNStatus, { label: string; color: string; bg: string }> = {
  LC: { label: "Least Concern", color: "text-green-700", bg: "bg-green-100" },
  NT: { label: "Near Threatened", color: "text-yellow-700", bg: "bg-yellow-100" },
  VU: { label: "Vulnerable", color: "text-orange-700", bg: "bg-orange-100" },
  EN: { label: "Endangered", color: "text-red-700", bg: "bg-red-100" },
  CR: { label: "Critically Endangered", color: "text-red-900", bg: "bg-red-200" },
  EW: { label: "Extinct in Wild", color: "text-purple-700", bg: "bg-purple-100" },
  EX: { label: "Extinct", color: "text-gray-700", bg: "bg-gray-300" },
};
