# RaptorNest — Data Sources Registry

> **Rule**: Every new data source must be registered here before its data is used on the site.
> One entry per source, grouped by scope. Include species and country/region association.

---

## Global Sources

### eBird (Cornell Lab of Ornithology)
- **URL**: https://ebird.org/home
- **API**: https://documenter.getpostman.com/view/664302/S1ENwy59
- **Type**: API / Database
- **Species covered**: All bird species globally, including all raptors
- **Countries/Regions**: Worldwide (200+ countries)
- **Data provided**: Observation records, location, date, species count, hotspots
- **License/Terms**: Free API key required; data CC BY-NC
- **Last verified**: —
- **Reliability**: Verified (peer-reviewed citizen science)

### GBIF (Global Biodiversity Information Facility)
- **URL**: https://www.gbif.org/
- **API**: https://www.gbif.org/developer/summary
- **Type**: API / Database
- **Species covered**: All biodiversity; filter for Accipitriformes, Falconiformes, Strigiformes
- **Countries/Regions**: Worldwide
- **Data provided**: Species occurrence records, taxonomy, geolocation, collection metadata
- **License/Terms**: Open data; individual dataset licenses vary (CC0, CC BY, CC BY-NC)
- **Last verified**: —
- **Reliability**: Verified (aggregated from museums, surveys, research)

### IUCN Red List
- **URL**: https://www.iucnredlist.org/
- **API**: https://apiv3.iucnredlist.org/
- **Type**: API
- **Species covered**: All assessed species including raptors
- **Countries/Regions**: Worldwide
- **Data provided**: Conservation status (CR/EN/VU/NT/LC), population trends, range maps, threats
- **License/Terms**: Free API token required; non-commercial use
- **Last verified**: —
- **Reliability**: Official (international standard)

### CITES (Convention on International Trade in Endangered Species)
- **URL**: https://cites.org/
- **API**: https://speciesplus.net/api
- **Type**: API / Database
- **Species covered**: Species regulated in international trade (many raptors in Appendix I/II)
- **Countries/Regions**: 184 signatory countries
- **Data provided**: Trade protection appendix (I/II/III), trade quotas, national legislation
- **License/Terms**: Open access
- **Last verified**: —
- **Reliability**: Official (treaty-based)

### Xeno-canto
- **URL**: https://xeno-canto.org/
- **API**: https://xeno-canto.org/explore/api
- **Type**: API
- **Species covered**: Birds with audio recordings; good raptor coverage
- **Countries/Regions**: Worldwide
- **Data provided**: Bird vocalizations, call type, location, recordist attribution
- **License/Terms**: CC licenses (varies per recording)
- **Last verified**: —
- **Reliability**: Community (curated recordings with expert ID)

### Macaulay Library (Cornell Lab)
- **URL**: https://www.macaulaylibrary.org/
- **Type**: Media Library
- **Species covered**: All birds; extensive raptor photo/video/audio
- **Countries/Regions**: Worldwide
- **Data provided**: Species photos, videos, audio recordings
- **License/Terms**: Media usage requires attribution; some restrictions
- **Last verified**: —
- **Reliability**: Verified (curated by Cornell Lab)

### Wikipedia
- **URL**: https://en.wikipedia.org/
- **API**: https://en.wikipedia.org/api/rest_v1/
- **Type**: API / Reference
- **Species covered**: All notable raptor species
- **Countries/Regions**: Worldwide
- **Data provided**: Species descriptions, taxonomy, range, behavior (linked from species names)
- **License/Terms**: CC BY-SA 3.0
- **Last verified**: —
- **Reliability**: Community (cross-referenced with cited scientific literature)

---

## Regional Sources

### The Peregrine Fund
- **URL**: https://peregrinefund.org/
- **Type**: Database / Research
- **Species covered**: Raptors — focus on Peregrine Falcon, California Condor, and other endangered raptors
- **Countries/Regions**: Primarily Americas, with global projects
- **Data provided**: Nest monitoring data, population surveys, conservation program results
- **License/Terms**: Contact for data access
- **Last verified**: —
- **Reliability**: Verified (research organization)

### European Raptor Monitoring (EURAPMON)
- **URL**: https://eurapmon.net/
- **Type**: Database / Network
- **Species covered**: European raptors and owls
- **Countries/Regions**: Europe (30+ countries)
- **Data provided**: Breeding population data, nest monitoring, migration counts
- **License/Terms**: Varies by contributing scheme
- **Last verified**: —
- **Reliability**: Verified (coordinated national monitoring schemes)

### HawkWatch International
- **URL**: https://hawkwatch.org/
- **Type**: Database / Research
- **Species covered**: North American raptors
- **Countries/Regions**: Western United States, Mexico
- **Data provided**: Migration count data, nest monitoring, population trends
- **License/Terms**: Contact for data access
- **Last verified**: —
- **Reliability**: Verified (long-term monitoring organization)

---

## Live Camera Networks

> Camera sources will be added per-nest as they are discovered and verified.
> Each camera entry should include the operating organization and stream reliability.

### Explore.org Wildlife Cams
- **URL**: https://explore.org/livecams
- **Type**: Camera Feed
- **Species covered**: Various raptors (Bald Eagle, Osprey, Peregrine Falcon, others)
- **Countries/Regions**: Primarily North America
- **Data provided**: Live video streams of active nests
- **License/Terms**: Embeddable streams; check per-camera terms
- **Last verified**: —
- **Reliability**: Verified (partnered with wildlife organizations)

---

## Country-Specific Sources

> Add new country-specific sources below as they are integrated.
> Format: Country heading, then source entries.

*(To be populated as regional data sources are identified and integrated.)*

---

## Adding a New Source

When adding a new data source:
1. Create an entry in the appropriate section above.
2. Fill in ALL fields (URL, Type, Species, Countries, Data provided, License, Reliability).
3. Set "Last verified" to today's date after confirming the source is active and accessible.
4. Update the corresponding API client in `src/lib/api/` if applicable.
5. Ensure proper attribution is displayed wherever this source's data appears on the site.
