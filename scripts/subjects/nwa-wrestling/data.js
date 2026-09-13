/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nwa-wrestling",
        "name": "NWA",
        "type": "topic",
        "short_description": "Territories, world title lineage, and the alliance that structured pre-national American wrestling.",
        "description": "Territories, world title lineage, and the alliance that structured pre-national American wrestling. This Ton-o-Lore subject maps people, places, events, and ideas tied to NWA so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "nwa-wrestling-figures",
        "name": "NWA figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to NWA.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NWA."
    },
    {
        "slug": "nwa-wrestling-world",
        "name": "NWA world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame NWA.",
        "description": "Geography, institutions, and periodization that give NWA its encyclopedia shape."
    },
    {
        "slug": "nwa-wrestling-places",
        "name": "NWA places",
        "type": "place",
        "short_description": "Locations and geographies that frame NWA.",
        "description": "Places, regions, and built sites that give NWA its map — where events and figures concentrate."
    },
    {
        "slug": "nwa-wrestling-events",
        "name": "NWA events",
        "type": "event",
        "short_description": "Turning points and dated episodes in NWA.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the NWA timeline."
    },
    {
        "slug": "nwa-wrestling-objects",
        "name": "NWA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NWA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NWA."
    },
    {
        "slug": "nwa-wrestling-factions",
        "name": "NWA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NWA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NWA."
    },
    {
        "slug": "nwa-wrestling-concepts",
        "name": "NWA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NWA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NWA readable as a lore graph."
    },
    {
        "slug": "nwa-wrestling-eras",
        "name": "NWA eras",
        "type": "event",
        "short_description": "Periodization for NWA.",
        "description": "Named eras and phases that help readers track how NWA changes across time."
    },
    {
        "slug": "nwa-wrestling-works",
        "name": "NWA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NWA.",
        "description": "Primary works and adaptations through which most audiences encounter NWA."
    },
    {
        "slug": "nwa-wrestling-symbols",
        "name": "NWA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NWA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NWA."
    },
    {
        "slug": "nwa-wrestling-controversies",
        "name": "NWA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NWA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NWA argumentative."
    },
    {
        "slug": "nwa-wrestling-sources",
        "name": "NWA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NWA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NWA."
    },
    {
        "slug": "nwa-wrestling-geography",
        "name": "NWA geography",
        "type": "place",
        "short_description": "Broader geographic framing for NWA.",
        "description": "Regions, routes, and spatial systems that situate NWA beyond single named places."
    },
    {
        "slug": "nwa-wrestling-legacy",
        "name": "NWA legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NWA.",
        "description": "How NWA continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nwa-wrestling-practices",
        "name": "NWA practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NWA.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NWA."
    },
    {
        "slug": "nwa-wrestling-entry-1",
        "name": "NWA entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-2",
        "name": "NWA entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-3",
        "name": "NWA entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-4",
        "name": "NWA entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-5",
        "name": "NWA entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-6",
        "name": "NWA entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-7",
        "name": "NWA entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-8",
        "name": "NWA entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-9",
        "name": "NWA entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-10",
        "name": "NWA entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-11",
        "name": "NWA entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-12",
        "name": "NWA entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-13",
        "name": "NWA entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-14",
        "name": "NWA entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-15",
        "name": "NWA entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-16",
        "name": "NWA entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-17",
        "name": "NWA entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-18",
        "name": "NWA entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-19",
        "name": "NWA entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-20",
        "name": "NWA entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-21",
        "name": "NWA entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-22",
        "name": "NWA entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-23",
        "name": "NWA entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nwa-wrestling-entry-24",
        "name": "NWA entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside NWA.",
        "description": "A supporting encyclopedia entry in the NWA subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nwa-wrestling",
        "nwa-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-places",
        "contains",
        "NWA places is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-events",
        "contains",
        "NWA events is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-objects",
        "contains",
        "NWA objects & artifacts is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-factions",
        "contains",
        "NWA factions & groups is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-concepts",
        "contains",
        "NWA concepts is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-eras",
        "contains",
        "NWA eras is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-works",
        "contains",
        "NWA works & media is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-symbols",
        "contains",
        "NWA symbols is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-controversies",
        "contains",
        "NWA controversies is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-sources",
        "contains",
        "NWA sources is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-geography",
        "contains",
        "NWA geography is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-legacy",
        "contains",
        "NWA legacy is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-practices",
        "contains",
        "NWA practices is a primary trailhead under NWA.",
        0.88,
        0.82
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-1",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-2",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-3",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-4",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-5",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-6",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-7",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-8",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-9",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-10",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-11",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-12",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-13",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-14",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-15",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-16",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-17",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-18",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-19",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-20",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-21",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-22",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-23",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ],
    [
        "nwa-wrestling",
        "nwa-wrestling-entry-24",
        "contains",
        "Supporting entry under NWA.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
