# CLAUDE.md — RaptorNest: Global Birds of Prey Nest Tracker

## Project Overview

**RaptorNest** is a modern, interactive web platform that aggregates and displays real-time data about birds of prey nests worldwide. MVP scope: **European raptors** (Peregrine Falcon, Golden Eagle, White-tailed Eagle, Eurasian Eagle-Owl, Osprey, and others with strong monitoring data). It pulls from public ornithological databases, conservation APIs, live nest cameras, and verified citizen-science sources to provide a rich, visual experience for researchers, bird enthusiasts, and conservation organizations.

The interface must be visually stunning — illustrated backgrounds, real-time imagery, species portraits, and smooth interactivity — while remaining scientifically rigorous with proper sourcing and citations.

### Competitive Landscape & Differentiation

Existing platforms we should integrate with (not compete against):
- **NestWatch** (Cornell Lab) — citizen-science nest monitoring for all birds. Not raptor-specific, no live cameras, basic UI.
- **GRIN** (Peregrine Fund) — raptor-specific database (200k+ entries). Data-collection tool, not a visual experience.
- **European Raptors** — static ID guide. No maps, no real-time data.
- **Hawk Mountain / Movebank** — GPS migration tracking. Not nest-focused.
- **Live cameras** — scattered across dozens of individual sites (Raptor Resource Project, Virginia Falcon Cam, etc.). No aggregator exists.

**RaptorNest fills the gap**: the visual, interactive aggregation layer that combines nest data from GRIN/eBird/GBIF with live camera feeds, protection status, individual bird IDs, and rich species profiles — all in a modern, beautiful interface.

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG for SEO, React ecosystem, API routes |
| Language | **TypeScript** | Type safety across the full stack |
| Styling | **Tailwind CSS + shadcn/ui** | Rapid modern UI, consistent design tokens |
| Maps | **Leaflet + React-Leaflet** (with OpenStreetMap tiles) | Free, open-source, rich plugin ecosystem for geospatial |
| Database | **PostgreSQL + PostGIS** (via Supabase) | Geospatial queries, real-time subscriptions, free tier |
| ORM | **Prisma** | Type-safe database access |
| Real-time | **Supabase Realtime / WebSockets** | Live nest data updates |
| Image hosting | **Cloudinary or Supabase Storage** | Optimized image delivery |
| Deployment | **Vercel** | Seamless Next.js deployment, works in Codespaces |
| Testing | **Vitest + Playwright** | Unit + E2E testing |

---

## Non-Negotiable Rules

1. **All existing functions must work** — identical or enhanced. No regressions, ever.
2. **New functions require explicit user approval** — if a feature isn't in the approved scope, ask before adding it. Don't invent features under the guise of "polish".
3. **All agents are active and available at all times.** Any agent in the pipeline can be invoked at any phase if their expertise is needed. They MUST be called before any non-trivial change, new functionality, or any task whose impact spans more than a single file. Default to using them.
4. **All agents have authority within their scope and skill domain.** When an agent is the right specialist for a question, defer to them.
5. **No degradation, ever.** If a change risks degrading any user-facing function, accessibility, or performance characteristic, stop and flag it before merging.
6. **Data integrity is sacred.** Never display uncited data. Every data point traces back to a registered source in `DATA_SOURCES_REGISTRY.md`. Fabricated or unverified data is a critical violation.
7. **Never attempt a risky change without an agent-evaluated plan.** If a change touches data pipelines, map rendering, API integrations, or real-time feeds — stop and write a plan first, then call relevant agents (Code Reviewer + Backend Architect at minimum) to evaluate impact before applying.
8. **Minimize concurrent read/write on the same files.** Don't fan out parallel tool calls that touch the same file at the same time. Parallelize only across independent files.
9. **Big-file creation = chunked appends.** For any file expected to exceed ~300 lines, create it with the first chunk, then append subsequent chunks sequentially.
10. **Missing assets (photos, species images, icons):** produce a report in `MISSING_ASSETS.md` listing each missing file and its target folder. Use clearly labeled placeholders so pages stay functional.
11. **Every working session leaves a dated log in `DevLog/`.** See DevLog section below.
12. **Every session starts by reading the most recent `DevLog/` entry** and this `CLAUDE.md`. Before touching code — read latest DevLog, then act.

---

## Development Rules

### General Principles
- **Always ask the user for validation** before implementing new functions, pages, components, or features.
- Write clean, maintainable TypeScript. No `any` types unless absolutely unavoidable.
- Mobile-first responsive design — researchers use this in the field.
- All UI must meet WCAG 2.1 AA accessibility standards.
- Performance matters: lazy-load images, code-split routes, optimize map tile loading.
- No premature abstractions — build what's needed now.
- Further visual design and refinement will be done using **Claude Design** with the plugin.

### Commit & Branch Hygiene
- Descriptive commit messages: `feat:`, `fix:`, `docs:`, `refactor:`, `test:` prefixes.
- Work on feature branches; never push directly to main.
- Keep commits atomic — one logical change per commit.

### Code Style
- Minimal comments — only when the "why" is non-obvious.
- Prefer named exports. One component per file.
- Colocate tests with source files (`Component.test.tsx` next to `Component.tsx`).
- Use `const` by default, `let` only when reassignment is needed.

---

## AI Agents — Mandatory Consultation

### Location
All agents are located in the `AIAgents/` folder (cloned from [agency-agents](https://github.com/msitarzewski/agency-agents)).

### Mandatory Rule
**Always consult the appropriate agents before implementing any significant feature.** Agents are the hierarchical superior in their field of expertise — they handle the hard coding and architecture decisions. Agents are always available.

### Selected Agents for This Project

| Agent | File | Role in RaptorNest |
|-------|------|---------------------|
| **Agents Orchestrator** | `specialized/agents-orchestrator.md` | Coordinates multi-agent workflows across features |
| **Software Architect** | `engineering/engineering-software-architect.md` | Overall system architecture, domain modeling |
| **Backend Architect** | `engineering/engineering-backend-architect.md` | API design, database schema, real-time infrastructure |
| **Frontend Developer** | `engineering/engineering-frontend-developer.md` | React components, map UI, interactive data views |
| **Data Engineer** | `engineering/engineering-data-engineer.md` | Data pipelines from public databases, ETL processes |
| **UX Architect** | `design/design-ux-architect.md` | CSS design system, layout framework, responsive grid |
| **UI Designer** | `design/design-ui-designer.md` | Visual design tokens, component styling, theming |
| **Visual Storyteller** | `design/design-visual-storyteller.md` | Illustrated backgrounds, species narratives, infographics |
| **Product Manager** | `product/product-manager.md` | Feature prioritization, user validation, roadmap |
| **Accessibility Auditor** | `testing/testing-accessibility-auditor.md` | WCAG compliance, screen reader testing, keyboard nav |
| **Geographer** | `academic/academic-geographer.md` | Geographic validation, habitat/climate coherence |
| **Rapid Prototyper** | `engineering/engineering-rapid-prototyper.md` | Fast MVP builds for feature validation |
| **Security Engineer** | `engineering/engineering-security-engineer.md` | API security, data protection, auth flows |
| **Code Reviewer** | `engineering/engineering-code-reviewer.md` | Code quality gates before merge |

### Agent Pipeline — 4 Phases for Any Non-Trivial Task

The four-stage flow — understand, plan, implement, verify — applies to every non-trivial change (bug fix, new feature, data integration, UI component).

**Phase 1 — Understand**
- **Software Architect** + **Geographer**: map the domain, understand the data landscape, validate geographic coherence
- When to call: starting a new task, integrating a new data source, working with unfamiliar species/region data

**Phase 2 — Plan / Design**
- **Product Manager**: scope, acceptance criteria, prioritization
- **UX Architect** + **UI Designer** + **Visual Storyteller**: CSS system, layout, visual language, species narratives
- **Backend Architect** + **Data Engineer**: API design, database schema, data pipeline architecture
- When to call: anything that adds a new page, changes a layout, touches the data model, or integrates a new API

**Phase 3 — Implement**
- **Frontend Developer**: React components, map interactions, responsive UI
- **Data Engineer**: ETL pipelines, API client code, data transformation
- **Rapid Prototyper**: fast MVP validation for uncertain features
- When to call: active implementation phase

**Phase 4 — Verify**
- **Accessibility Auditor**: WCAG 2.2 AA compliance, keyboard nav, screen reader testing
- **Code Reviewer**: code quality gate before merge
- **Security Engineer**: API security, data protection review
- When to call: before any merge, before declaring a feature complete

```
Software Architect  →  Product Manager + UX Architect  →  Frontend Dev + Data Engineer  →  Accessibility Auditor + Code Reviewer
    (understand)              (plan/design)                      (implement)                         (verify)
```

For complex multi-step features, use the **Agents Orchestrator** to coordinate the full pipeline.

---

## Data Requirements — Per Nest/Species

Each nest entry on the map must include (where data is available):

### Mandatory Fields
- **Number of birds** observed at the nest
- **Species type** — common name + scientific name with a link to the Wikipedia page
- **Protection status** — both international (IUCN Red List, CITES) and local/national level
- **Species image** — verified photo of the species
- **Species description** — biology, behavior, habitat, diet
- **Date of nest existence** — when first recorded
- **Current nidification period** — start date and expected timeline

### Optional / Real-Time Fields
- **Live camera feed** — embedded if real-time nest cameras are available (e.g., from wildlife cam networks)
- **Individual bird identification** — chip/ring numbers, vet data, bird association records, banding info
- **Nest description** — construction, materials, dimensions, location characteristics
- **Egg description** — number, size, color, incubation status (real-time if camera available, otherwise from verified sources)

### Data Display Principles
- Always show what's available; gracefully hide what isn't (no empty placeholders).
- Real-time data gets a visible "LIVE" indicator.
- Static/reference data is clearly labeled as such with its source date.

---

## Data Sourcing & Citations — Mandatory

### Citation Rule
**Every piece of species/nest data displayed on the site must cite its source.** No uncited data.

Citations must appear:
- Inline on the species/nest detail page (small reference number linking to source).
- In a consolidated references section at the bottom of each detail page.

### Source Registry File
A dedicated file — `data/sources/DATA_SOURCES_REGISTRY.md` — must be maintained listing **every data source** used in the project. Each entry must include:

```
### [Source Name]
- **URL**: [link]
- **Type**: API / Database / Camera Feed / Research Paper / Government Registry
- **Species covered**: [list of species this source provides data for]
- **Countries/Regions**: [geographic scope]
- **Data provided**: [what fields this source populates]
- **License/Terms**: [usage terms]
- **Last verified**: [date]
- **Reliability**: Verified / Community / Official
```

**Every new data source** added to the project must be registered in this file before its data is used on the site. One entry per source, grouped by country/region.

### Known Public Data Sources to Integrate
- **eBird** (Cornell Lab of Ornithology) — global bird observation data
- **GBIF** (Global Biodiversity Information Facility) — species occurrence records
- **IUCN Red List API** — conservation status
- **CITES** — international trade protection status
- **Xeno-canto** — bird sound recordings
- **Macaulay Library** — bird photos and media
- **National wildlife camera networks** — live nest feeds (varies by country)
- **European Raptor Monitoring** — EU nest tracking data
- **HawkWatch International** — raptor population monitoring
- **The Peregrine Fund** — raptor conservation data
- **Local/national bird ringing databases** — individual identification

---

## UI/UX Requirements

### Core Interface
- **Interactive world map** as the primary interface — click/tap nests to explore.
- **Cluster markers** that expand as you zoom in.
- **Filter panel** — by species, country, protection status, live camera availability.
- **Search** — by species name, location, individual bird ID.
- **Detail sidebar/modal** — rich species and nest information on selection.

### Visual Identity
- Nature-inspired color palette: deep greens, earth tones, sky blues, warm accents.
- Illustrated backgrounds for species pages and landing sections.
- High-quality species photography with proper attribution.
- Smooth animations and transitions — the experience should feel alive.
- Dark mode support for nighttime field use.

### Key Pages
1. **Home / Map View** — interactive global map with all tracked nests
2. **Species Directory** — browsable catalog of all tracked raptor species
3. **Nest Detail** — deep dive into a specific nest with all available data
4. **Species Detail** — comprehensive species profile with images, range map, conservation status
5. **Live Cams** — gallery of all available real-time nest cameras
6. **About / Sources** — project info, methodology, complete data sources list

---

## Project Structure

```
/
├── CLAUDE.md                          # This file — project rules and context
├── AIAgents/                          # Cloned agent definitions (gitignored in production)
├── data/
│   └── sources/
│       └── DATA_SOURCES_REGISTRY.md   # All data sources with species/country mapping
├── public/
│   ├── images/
│   │   ├── species/                   # Species reference images
│   │   ├── backgrounds/               # Illustrated backgrounds
│   │   └── icons/                     # Map markers, UI icons
│   └── fonts/
├── src/
│   ├── app/                           # Next.js App Router pages
│   │   ├── page.tsx                   # Home / Map view
│   │   ├── species/
│   │   ├── nest/[id]/
│   │   ├── live-cams/
│   │   └── about/
│   ├── components/
│   │   ├── map/                       # Map-related components
│   │   ├── species/                   # Species cards, detail views
│   │   ├── nest/                      # Nest cards, detail views
│   │   ├── ui/                        # shadcn/ui base components
│   │   └── layout/                    # Header, footer, sidebar
│   ├── lib/
│   │   ├── api/                       # External API clients (eBird, GBIF, IUCN)
│   │   ├── db/                        # Database queries and schema
│   │   ├── types/                     # TypeScript type definitions
│   │   └── utils/                     # Shared utilities
│   ├── hooks/                         # Custom React hooks
│   └── styles/                        # Global styles, Tailwind config
├── prisma/
│   └── schema.prisma                  # Database schema
├── tests/
│   ├── e2e/                           # Playwright E2E tests
│   └── unit/                          # Vitest unit tests
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Running Locally / Codespaces

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in: DATABASE_URL, SUPABASE_URL, SUPABASE_ANON_KEY, EBIRD_API_KEY, etc.

# Run database migrations
npx prisma migrate dev

# Seed initial species data
npm run seed

# Start development server
npm run dev
# → http://localhost:3000
```

The project must be fully testable in GitHub Codespaces with `npm run dev`.

---

## Session Logs (DevLog/)

`DevLog/log-YYYY-MM-DD.md` is the authoritative per-day log. Format:

```
# DevLog — YYYY-MM-DD

Branch: <branch-name>
Session goal: <one-line summary>

## Done
- <SHA> — <short description>

## To do
- <next task>

## Future problems / regression risks
- <known sharp edge surfaced this session>

## Things to improve / refactor
- <code-smell, perf opportunity, a11y gap — defer-OK>

## Open questions for the user
- <decision needed before continuing>
```

Rules:
- One file per calendar day, named exactly `log-YYYY-MM-DD.md`.
- Append, don't rewrite. Multiple sessions on the same day stack as sub-headers.
- Always reference commit SHAs in "Done".
- Write logs so the next session — possibly with a fresh context window — can pick up cold.

---

## Asset Handling

When an asset is missing (species photo, background illustration, icon):
- Add a placeholder in the correct location (e.g., `public/images/species/placeholder.svg`).
- Append an entry to `MISSING_ASSETS.md` at repo root with:
  - Expected file name
  - Target folder (repo-relative path)
  - What it's for (which page, which component)
  - The placeholder currently used

The user will provide real assets; placeholders get swapped in one pass.

---

## Iteration Process

1. **Propose** — describe the feature or change.
2. **Consult agents** — get architecture/design/data guidance from relevant AIAgents.
3. **Validate with user** — present the plan and wait for approval.
4. **Implement** — build it following the rules above.
5. **Test** — verify in browser, run automated tests.
6. **Cite** — register any new data sources in DATA_SOURCES_REGISTRY.md.
7. **Review** — consult Code Reviewer and Accessibility Auditor agents.
8. **Commit & push** — with descriptive message.

---

## Living Documents

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project rules, read every session |
| `data/sources/DATA_SOURCES_REGISTRY.md` | All data sources with species/country mapping |
| `DevLog/log-YYYY-MM-DD.md` | Daily session logs |
| `MISSING_ASSETS.md` | Pending asset placeholder list |
| `AIAgents/` | Agent persona library — do not modify these files unless the user explicitly asks |
