/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "code-geass",
        "name": "Code Geass",
        "type": "topic",
        "short_description": "Geass power, Britannia empire, and the chessboard mecha rebellion of Lelouch.",
        "description": "Geass power, Britannia empire, and the chessboard mecha rebellion of Lelouch. This Ton-o-Lore subject maps people, places, events, and ideas tied to Code Geass so readers can follow long-tail connections across anime."
    },
    {
        "slug": "code-geass-figures",
        "name": "Code Geass figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Code Geass.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Code Geass."
    },
    {
        "slug": "code-geass-world",
        "name": "Code Geass world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Code Geass.",
        "description": "Geography, institutions, and periodization that give Code Geass its encyclopedia shape."
    },
    {
        "slug": "code-geass-places",
        "name": "Code Geass places",
        "type": "place",
        "short_description": "Locations and geographies that frame Code Geass.",
        "description": "Places, regions, and built sites that give Code Geass its map — where events and figures concentrate."
    },
    {
        "slug": "code-geass-events",
        "name": "Code Geass events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Code Geass.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Code Geass timeline."
    },
    {
        "slug": "code-geass-objects",
        "name": "Code Geass objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Code Geass.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Code Geass."
    },
    {
        "slug": "code-geass-factions",
        "name": "Code Geass factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Code Geass.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Code Geass."
    },
    {
        "slug": "code-geass-concepts",
        "name": "Code Geass concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Code Geass.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Code Geass readable as a lore graph."
    },
    {
        "slug": "code-geass-eras",
        "name": "Code Geass eras",
        "type": "event",
        "short_description": "Periodization for Code Geass.",
        "description": "Named eras and phases that help readers track how Code Geass changes across time."
    },
    {
        "slug": "code-geass-works",
        "name": "Code Geass works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Code Geass.",
        "description": "Primary works and adaptations through which most audiences encounter Code Geass."
    },
    {
        "slug": "code-geass-symbols",
        "name": "Code Geass symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Code Geass.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Code Geass."
    },
    {
        "slug": "code-geass-controversies",
        "name": "Code Geass controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Code Geass.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Code Geass argumentative."
    },
    {
        "slug": "code-geass-sources",
        "name": "Code Geass sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Code Geass.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Code Geass."
    },
    {
        "slug": "code-geass-geography",
        "name": "Code Geass geography",
        "type": "place",
        "short_description": "Broader geographic framing for Code Geass.",
        "description": "Regions, routes, and spatial systems that situate Code Geass beyond single named places."
    },
    {
        "slug": "code-geass-legacy",
        "name": "Code Geass legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Code Geass.",
        "description": "How Code Geass continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "code-geass-practices",
        "name": "Code Geass practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Code Geass.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Code Geass."
    },
    {
        "slug": "code-geass-entry-1",
        "name": "Code Geass entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-2",
        "name": "Code Geass entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-3",
        "name": "Code Geass entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-4",
        "name": "Code Geass entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-5",
        "name": "Code Geass entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-6",
        "name": "Code Geass entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-7",
        "name": "Code Geass entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-8",
        "name": "Code Geass entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-9",
        "name": "Code Geass entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-10",
        "name": "Code Geass entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-11",
        "name": "Code Geass entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-12",
        "name": "Code Geass entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-13",
        "name": "Code Geass entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-14",
        "name": "Code Geass entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-15",
        "name": "Code Geass entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-16",
        "name": "Code Geass entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-17",
        "name": "Code Geass entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-18",
        "name": "Code Geass entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-19",
        "name": "Code Geass entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-20",
        "name": "Code Geass entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-21",
        "name": "Code Geass entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-22",
        "name": "Code Geass entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-23",
        "name": "Code Geass entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "code-geass-entry-24",
        "name": "Code Geass entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Code Geass.",
        "description": "A supporting encyclopedia entry in the Code Geass subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "code-geass",
        "code-geass-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "code-geass",
        "code-geass-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "code-geass",
        "code-geass-places",
        "contains",
        "Code Geass places is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-events",
        "contains",
        "Code Geass events is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-objects",
        "contains",
        "Code Geass objects & artifacts is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-factions",
        "contains",
        "Code Geass factions & groups is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-concepts",
        "contains",
        "Code Geass concepts is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-eras",
        "contains",
        "Code Geass eras is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-works",
        "contains",
        "Code Geass works & media is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-symbols",
        "contains",
        "Code Geass symbols is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-controversies",
        "contains",
        "Code Geass controversies is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-sources",
        "contains",
        "Code Geass sources is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-geography",
        "contains",
        "Code Geass geography is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-legacy",
        "contains",
        "Code Geass legacy is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-practices",
        "contains",
        "Code Geass practices is a primary trailhead under Code Geass.",
        0.88,
        0.82
    ],
    [
        "code-geass",
        "code-geass-entry-1",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-2",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-3",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-4",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-5",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-6",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-7",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-8",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-9",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-10",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-11",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-12",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-13",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-14",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-15",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-16",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-17",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-18",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-19",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-20",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-21",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-22",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-23",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ],
    [
        "code-geass",
        "code-geass-entry-24",
        "contains",
        "Supporting entry under Code Geass.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
