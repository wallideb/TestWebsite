import { Species } from "@/lib/types";

export const species: Species[] = [
  {
    id: "peregrine-falcon",
    commonName: "Peregrine Falcon",
    scientificName: "Falco peregrinus",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Peregrine_falcon",
    description:
      "The peregrine falcon is the fastest animal on the planet, reaching speeds over 389 km/h (242 mph) during its hunting stoop. A powerful raptor with a blue-grey back, barred white underparts, and a black head with distinctive dark 'moustache' markings. Highly adaptable, it has successfully colonized urban environments across Europe, nesting on cathedral spires, bridges, and skyscrapers.",
    habitat: "Cliffs, mountains, cities, coastlines. Increasingly urban across Europe.",
    diet: "Primarily medium-sized birds caught in flight — pigeons, starlings, waders, ducks.",
    wingspan: "95–115 cm",
    weight: "600–1,300 g (females larger)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Falco_peregrinus_good_-_Christopher_Watson.jpg/800px-Falco_peregrinus_good_-_Christopher_Watson.jpg",
    imageAttribution: "Christopher Watson, CC BY-SA 4.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix I",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "UK: Wildlife and Countryside Act 1981 — Schedule 1",
      "France: Protected species (Arrêté du 29 octobre 2009)",
      "Germany: Federal Nature Conservation Act — strictly protected",
      "Spain: Listed in National Catalogue of Threatened Species",
    ],
    nidificationMonths: "March–June",
    eggDescription:
      "3–4 eggs, creamy white heavily marked with reddish-brown. Incubation 29–33 days, primarily by female.",
    nestDescription:
      "Scrape on cliff ledge or building ledge; no nest material added. Peregrine falcons do not build traditional nests — they select a sheltered ledge and scrape a shallow depression.",
  },
  {
    id: "golden-eagle",
    commonName: "Golden Eagle",
    scientificName: "Aquila chrysaetos",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Golden_eagle",
    description:
      "One of the most powerful raptors in the Northern Hemisphere. The golden eagle is a large, dark brown bird of prey with a golden-bronze nape that gives it its name. Revered across cultures, it is the national bird of several countries. Pairs mate for life and defend territories of 60–200 km².",
    habitat: "Mountain regions, moorlands, steppe, open landscapes with rocky outcrops.",
    diet: "Hares, rabbits, marmots, grouse, foxes, young deer. Occasionally carrion in winter.",
    wingspan: "190–225 cm",
    weight: "3.0–6.4 kg (females larger)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Golden_Eagle_in_flight_-_5.jpg/800px-Golden_Eagle_in_flight_-_5.jpg",
    imageAttribution: "Tony Hisgett, CC BY 2.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix II",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "UK: Wildlife and Countryside Act 1981 — Schedule 1",
      "France: Protected species (Arrêté du 29 octobre 2009)",
      "Germany: Federal Nature Conservation Act — strictly protected",
      "Scotland: Species Action Plan active",
    ],
    nidificationMonths: "March–July",
    eggDescription:
      "1–3 eggs (usually 2), white with variable brown and violet markings. Incubation 41–45 days.",
    nestDescription:
      "Massive stick nest (eyrie) on cliff ledges or large trees, 1.5–2 m across and up to 4 m deep with years of accumulated material. Pairs typically maintain 2–3 alternate nests within their territory, adding fresh greenery each season.",
  },
  {
    id: "white-tailed-eagle",
    commonName: "White-tailed Eagle",
    scientificName: "Haliaeetus albicilla",
    wikipediaUrl: "https://en.wikipedia.org/wiki/White-tailed_eagle",
    description:
      "Europe's largest eagle and the fourth largest eagle worldwide. With a wingspan reaching 2.45 metres, the white-tailed eagle is an unmistakable sight soaring over coastlines and lakes. Its broad, plank-like wings and short, wedge-shaped white tail make it distinctive in flight. Once driven to extinction across much of Western Europe, successful reintroduction programs have seen populations recover dramatically.",
    habitat: "Coastal areas, large lakes, rivers, wetlands, boreal forests.",
    diet: "Fish, waterbirds, carrion, small mammals. Often pirates food from other raptors.",
    wingspan: "200–245 cm",
    weight: "4.0–7.0 kg (females larger)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Haliaeetus_albicilla_-_Flickr_-_Lip_Kee_%282%29.jpg/800px-Haliaeetus_albicilla_-_Flickr_-_Lip_Kee_%282%29.jpg",
    imageAttribution: "Lip Kee, CC BY-SA 2.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix I",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "UK: Wildlife and Countryside Act 1981 — Schedule 1 (reintroduced species)",
      "Norway: Protected under Wildlife Act",
      "Germany: Federal Nature Conservation Act — strictly protected",
      "Poland: Protected species — active monitoring programs",
    ],
    nidificationMonths: "February–July",
    eggDescription:
      "1–3 eggs (usually 2), white and unmarked. Incubation 38 days, shared by both parents.",
    nestDescription:
      "Enormous stick nest in tall trees or on sea cliffs, up to 2 m wide and 3 m deep. Some nests weigh over a tonne after decades of use. Lined with grass, seaweed, and green branches.",
  },
  {
    id: "eurasian-eagle-owl",
    commonName: "Eurasian Eagle-Owl",
    scientificName: "Bubo bubo",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Eurasian_eagle-owl",
    description:
      "The largest owl in Europe and one of the most powerful nocturnal predators on Earth. With striking orange eyes and prominent ear tufts, the Eurasian eagle-owl is an iconic species. Despite its size, it flies almost silently thanks to specialized feather edges. It can take prey as large as young foxes and roe deer fawns.",
    habitat: "Rocky landscapes, quarries, cliffs, forest edges, increasingly suburban areas.",
    diet: "Mammals (rats, hares, hedgehogs), birds (crows, herons, other raptors), reptiles.",
    wingspan: "160–188 cm",
    weight: "1.5–4.2 kg (females larger)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bubo_bubo_winter.jpg/800px-Bubo_bubo_winter.jpg",
    imageAttribution: "Joëlle Paquet, CC BY 2.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix II",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "France: Protected species — population recovering",
      "Germany: Federal Nature Conservation Act — strictly protected",
      "Spain: Listed in National Catalogue of Threatened Species",
      "Belgium: Recolonizing naturally from continental populations",
    ],
    nidificationMonths: "January–June (earliest breeder among European raptors)",
    eggDescription:
      "2–4 eggs, white, rounded. Incubation 31–36 days by female; male provides food.",
    nestDescription:
      "No nest built — eggs laid directly on rock ledge, cave floor, quarry shelf, or sheltered ground. Occasionally uses abandoned nests of other large birds. Nest sites are often reused for decades.",
  },
  {
    id: "osprey",
    commonName: "Osprey",
    scientificName: "Pandion haliaetus",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Osprey",
    description:
      "The osprey is a specialist fish-hunter found on every continent except Antarctica. Unique among raptors, it has reversible outer toes and spiny foot pads for gripping slippery fish. It dives feet-first into water from heights of 10–40 metres, often becoming completely submerged. A conservation success story in Europe, where populations have recovered from severe persecution and pesticide-related declines.",
    habitat: "Near water — lakes, rivers, reservoirs, estuaries, coasts.",
    diet: "Almost exclusively fish (99% of diet). Catches fish of 150–300 g on average.",
    wingspan: "150–180 cm",
    weight: "1.2–2.0 kg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Osprey_-_Pair_at_Nest.jpg/800px-Osprey_-_Pair_at_Nest.jpg",
    imageAttribution: "Andy Morffew, CC BY 2.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix II",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "UK: Wildlife and Countryside Act 1981 — Schedule 1 (reintroduced to England)",
      "France: Protected species — expanding population",
      "Sweden: Protected — largest European population",
      "Finland: Protected — key breeding population",
    ],
    nidificationMonths: "April–August",
    eggDescription:
      "2–3 eggs, creamy white with bold reddish-brown blotches. Incubation 35–43 days.",
    nestDescription:
      "Large stick nest built atop dead trees, artificial platforms, pylons, or buildings. Nests are added to yearly and can reach 2 m wide. Highly visible — often the most conspicuous raptor nest in an area.",
  },
  {
    id: "spanish-imperial-eagle",
    commonName: "Spanish Imperial Eagle",
    scientificName: "Aquila adalberti",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Spanish_imperial_eagle",
    description:
      "One of the rarest raptors in the world and a flagship species for Mediterranean conservation. Endemic to the Iberian Peninsula, this eagle was on the brink of extinction in the 1960s with only 30 pairs remaining. Intensive conservation efforts have brought the population to over 800 pairs. Distinguished from the eastern imperial eagle by its white 'shoulder patches' and darker plumage.",
    habitat: "Mediterranean woodland, dehesas (oak savanna), pine forests, marshland edges.",
    diet: "Rabbits (primary prey — 60–80%), hares, partridges, pigeons, waterfowl, carrion.",
    wingspan: "180–210 cm",
    weight: "2.5–3.5 kg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aquila_adalberti.jpg/800px-Aquila_adalberti.jpg",
    imageAttribution: "Carlos Delgado, CC BY-SA 4.0, via Wikimedia Commons",
    conservationStatus: {
      iucn: "VU",
      cites: "Appendix I",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "Spain: National Catalogue — Vulnerable (upgraded from Endangered in 2021)",
      "Portugal: Critically Endangered nationally — recolonizing from Spain",
      "EU: Priority species under LIFE funding programs",
    ],
    nidificationMonths: "February–July",
    eggDescription:
      "2–3 eggs, white with sparse purplish-brown markings. Incubation 43 days.",
    nestDescription:
      "Large stick nest in tall pines or cork oaks, 1.2–1.5 m wide. Usually in the upper third of a large tree. Nests are reused and expanded over many years.",
  },
  {
    id: "bearded-vulture",
    commonName: "Bearded Vulture (Lammergeier)",
    scientificName: "Gypaetus barbatus",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Bearded_vulture",
    description:
      "The bearded vulture is one of the most extraordinary raptors in the world. It is the only bird that feeds almost exclusively on bone marrow, dropping large bones from height onto rocks to crack them open — a behaviour called 'ossuary'. Its striking appearance features a rust-orange breast (stained by bathing in iron-rich mud), black 'beard' feathers, and red-ringed eyes. Among the rarest raptors in Europe, with intensive reintroduction programs in the Alps, Andalusia, and Corsica.",
    habitat: "High mountain ranges — Alps, Pyrenees, Crete, Corsica. Above 1,000 m elevation.",
    diet: "Bones and bone marrow (70–90%), tendons, dried skin. Occasionally tortoises and hares.",
    wingspan: "250–282 cm",
    weight: "4.5–7.1 kg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg/800px-Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg",
    imageAttribution: "Richard Bartz, CC BY-SA 2.5, via Wikimedia Commons",
    conservationStatus: {
      iucn: "NT",
      cites: "Appendix II",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "France: Protected species — reintroduction program since 1986 (Alps)",
      "Spain: National Catalogue — Endangered (Pyrenees hold main population)",
      "Switzerland: Protected — Alpine reintroduction program",
      "Austria: Protected — reintroduction from Hohe Tauern",
      "Italy: Protected — reintroduction ongoing in Alps and Sardinia",
    ],
    nidificationMonths: "December–July (winter breeder — eggs laid December–February)",
    eggDescription:
      "1–2 eggs, dirty white with brown spots. Incubation 53–60 days (longest of any European raptor). Usually only one chick survives (obligate cainism).",
    nestDescription:
      "Nest in caves or on deep cliff ledges at 1,000–3,000 m elevation. Built of sticks and lined with wool, fur, and dry dung. Nests can be up to 1 m wide and 70 cm deep.",
  },
  {
    id: "griffon-vulture",
    commonName: "Griffon Vulture",
    scientificName: "Gyps fulvus",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Griffon_vulture",
    description:
      "A massive Old World vulture and one of Europe's most impressive soaring birds. The griffon vulture uses thermal currents to soar effortlessly for hours, covering hundreds of kilometres in search of carrion. Highly social, it nests in colonies on cliff faces and feeds communally. Spain holds over 95% of the EU population, making Iberian conservation critical for the species' survival in Europe.",
    habitat: "Mountain gorges, cliffs, open landscapes. Needs thermals for efficient soaring.",
    diet: "Exclusively carrion — primarily livestock carcasses. A single bird can eat 1.5 kg in one meal.",
    wingspan: "240–280 cm",
    weight: "6.5–11 kg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Gyps_fulvus_in_flight.jpg/800px-Gyps_fulvus_in_flight.jpg",
    imageAttribution: "Thermos, CC BY-SA 2.5, via Wikimedia Commons",
    conservationStatus: {
      iucn: "LC",
      cites: "Appendix II",
      euDirective: "Annex I (Birds Directive 2009/147/EC)",
    },
    localProtection: [
      "Spain: Protected — hosts 95% of EU population (~30,000 pairs)",
      "France: Protected species — reintroduced to Grands Causses, Verdon, Baronnies",
      "Italy: Protected — small colonies in Sardinia, Sicily, reintroduced elsewhere",
      "Croatia: Protected — colonies along Adriatic coast",
    ],
    nidificationMonths: "January–July",
    eggDescription:
      "1 egg, white, sometimes with faint reddish spots. Incubation 48–54 days.",
    nestDescription:
      "Nest on cliff ledges, often in colonies of 15–100+ pairs. Simple platform of sticks lined with grass and wool. Colony sites used for centuries.",
  },
];

export function getSpeciesById(id: string): Species | undefined {
  return species.find((s) => s.id === id);
}

export function getSpeciesByScientificName(name: string): Species | undefined {
  return species.find((s) => s.scientificName.toLowerCase() === name.toLowerCase());
}
