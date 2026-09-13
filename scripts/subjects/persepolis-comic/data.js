/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "persepolis-comic",
        "name": "Persepolis",
        "type": "topic",
        "short_description": "Iranian Revolution memoir in comics form — Satrapi’s landmark autobiographical graphic novel.",
        "description": "Iranian Revolution memoir in comics form — Satrapi’s landmark autobiographical graphic novel. This Ton-o-Lore subject maps people, places, events, and ideas tied to Persepolis so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "persepolis-comic-figures",
        "name": "Persepolis figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Persepolis.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Persepolis."
    },
    {
        "slug": "persepolis-comic-world",
        "name": "Persepolis world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Persepolis.",
        "description": "Geography, institutions, and periodization that give Persepolis its encyclopedia shape."
    },
    {
        "slug": "persepolis-comic-places",
        "name": "Persepolis places",
        "type": "place",
        "short_description": "Locations and geographies that frame Persepolis.",
        "description": "Places, regions, and built sites that give Persepolis its map — where events and figures concentrate."
    },
    {
        "slug": "persepolis-comic-events",
        "name": "Persepolis events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Persepolis.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Persepolis timeline."
    },
    {
        "slug": "persepolis-comic-objects",
        "name": "Persepolis objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Persepolis.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Persepolis."
    },
    {
        "slug": "persepolis-comic-factions",
        "name": "Persepolis factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Persepolis.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Persepolis."
    },
    {
        "slug": "persepolis-comic-concepts",
        "name": "Persepolis concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Persepolis.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Persepolis readable as a lore graph."
    },
    {
        "slug": "persepolis-comic-eras",
        "name": "Persepolis eras",
        "type": "event",
        "short_description": "Periodization for Persepolis.",
        "description": "Named eras and phases that help readers track how Persepolis changes across time."
    },
    {
        "slug": "persepolis-comic-works",
        "name": "Persepolis works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Persepolis.",
        "description": "Primary works and adaptations through which most audiences encounter Persepolis."
    },
    {
        "slug": "persepolis-comic-symbols",
        "name": "Persepolis symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Persepolis.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Persepolis."
    },
    {
        "slug": "persepolis-comic-controversies",
        "name": "Persepolis controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Persepolis.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Persepolis argumentative."
    },
    {
        "slug": "persepolis-comic-sources",
        "name": "Persepolis sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Persepolis.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Persepolis."
    },
    {
        "slug": "persepolis-comic-geography",
        "name": "Persepolis geography",
        "type": "place",
        "short_description": "Broader geographic framing for Persepolis.",
        "description": "Regions, routes, and spatial systems that situate Persepolis beyond single named places."
    },
    {
        "slug": "persepolis-comic-legacy",
        "name": "Persepolis legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Persepolis.",
        "description": "How Persepolis continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "persepolis-comic-practices",
        "name": "Persepolis practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Persepolis.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Persepolis."
    },
    {
        "slug": "persepolis-comic-entry-1",
        "name": "Persepolis entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-2",
        "name": "Persepolis entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-3",
        "name": "Persepolis entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-4",
        "name": "Persepolis entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-5",
        "name": "Persepolis entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-6",
        "name": "Persepolis entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-7",
        "name": "Persepolis entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-8",
        "name": "Persepolis entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-9",
        "name": "Persepolis entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-10",
        "name": "Persepolis entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-11",
        "name": "Persepolis entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-12",
        "name": "Persepolis entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-13",
        "name": "Persepolis entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-14",
        "name": "Persepolis entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-15",
        "name": "Persepolis entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-16",
        "name": "Persepolis entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-17",
        "name": "Persepolis entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-18",
        "name": "Persepolis entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-19",
        "name": "Persepolis entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-20",
        "name": "Persepolis entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-21",
        "name": "Persepolis entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-22",
        "name": "Persepolis entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-23",
        "name": "Persepolis entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persepolis-comic-entry-24",
        "name": "Persepolis entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persepolis.",
        "description": "A supporting encyclopedia entry in the Persepolis subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "persepolis-comic",
        "persepolis-comic-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "persepolis-comic",
        "persepolis-comic-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "persepolis-comic",
        "persepolis-comic-places",
        "contains",
        "Persepolis places is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-events",
        "contains",
        "Persepolis events is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-objects",
        "contains",
        "Persepolis objects & artifacts is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-factions",
        "contains",
        "Persepolis factions & groups is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-concepts",
        "contains",
        "Persepolis concepts is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-eras",
        "contains",
        "Persepolis eras is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-works",
        "contains",
        "Persepolis works & media is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-symbols",
        "contains",
        "Persepolis symbols is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-controversies",
        "contains",
        "Persepolis controversies is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-sources",
        "contains",
        "Persepolis sources is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-geography",
        "contains",
        "Persepolis geography is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-legacy",
        "contains",
        "Persepolis legacy is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-practices",
        "contains",
        "Persepolis practices is a primary trailhead under Persepolis.",
        0.88,
        0.82
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-1",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-2",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-3",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-4",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-5",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-6",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-7",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-8",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-9",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-10",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-11",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-12",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-13",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-14",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-15",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-16",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-17",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-18",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-19",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-20",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-21",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-22",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-23",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ],
    [
        "persepolis-comic",
        "persepolis-comic-entry-24",
        "contains",
        "Supporting entry under Persepolis.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
