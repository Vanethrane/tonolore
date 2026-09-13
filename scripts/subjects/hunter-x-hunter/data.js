/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hunter-x-hunter",
        "name": "Hunter x Hunter",
        "type": "topic",
        "short_description": "Nen systems, Chimera Ants, and Togashi’s meticulously cruel adventure design.",
        "description": "Nen systems, Chimera Ants, and Togashi’s meticulously cruel adventure design. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hunter x Hunter so readers can follow long-tail connections across anime."
    },
    {
        "slug": "hunter-x-hunter-figures",
        "name": "Hunter x Hunter figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hunter x Hunter.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-world",
        "name": "Hunter x Hunter world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hunter x Hunter.",
        "description": "Geography, institutions, and periodization that give Hunter x Hunter its encyclopedia shape."
    },
    {
        "slug": "hunter-x-hunter-places",
        "name": "Hunter x Hunter places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hunter x Hunter.",
        "description": "Places, regions, and built sites that give Hunter x Hunter its map — where events and figures concentrate."
    },
    {
        "slug": "hunter-x-hunter-events",
        "name": "Hunter x Hunter events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hunter x Hunter.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hunter x Hunter timeline."
    },
    {
        "slug": "hunter-x-hunter-objects",
        "name": "Hunter x Hunter objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hunter x Hunter.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-factions",
        "name": "Hunter x Hunter factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hunter x Hunter.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-concepts",
        "name": "Hunter x Hunter concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hunter x Hunter.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hunter x Hunter readable as a lore graph."
    },
    {
        "slug": "hunter-x-hunter-eras",
        "name": "Hunter x Hunter eras",
        "type": "event",
        "short_description": "Periodization for Hunter x Hunter.",
        "description": "Named eras and phases that help readers track how Hunter x Hunter changes across time."
    },
    {
        "slug": "hunter-x-hunter-works",
        "name": "Hunter x Hunter works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hunter x Hunter.",
        "description": "Primary works and adaptations through which most audiences encounter Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-symbols",
        "name": "Hunter x Hunter symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hunter x Hunter.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-controversies",
        "name": "Hunter x Hunter controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hunter x Hunter.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hunter x Hunter argumentative."
    },
    {
        "slug": "hunter-x-hunter-sources",
        "name": "Hunter x Hunter sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hunter x Hunter.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-geography",
        "name": "Hunter x Hunter geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hunter x Hunter.",
        "description": "Regions, routes, and spatial systems that situate Hunter x Hunter beyond single named places."
    },
    {
        "slug": "hunter-x-hunter-legacy",
        "name": "Hunter x Hunter legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hunter x Hunter.",
        "description": "How Hunter x Hunter continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hunter-x-hunter-practices",
        "name": "Hunter x Hunter practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hunter x Hunter.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hunter x Hunter."
    },
    {
        "slug": "hunter-x-hunter-entry-1",
        "name": "Hunter x Hunter entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-2",
        "name": "Hunter x Hunter entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-3",
        "name": "Hunter x Hunter entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-4",
        "name": "Hunter x Hunter entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-5",
        "name": "Hunter x Hunter entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-6",
        "name": "Hunter x Hunter entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-7",
        "name": "Hunter x Hunter entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-8",
        "name": "Hunter x Hunter entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-9",
        "name": "Hunter x Hunter entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-10",
        "name": "Hunter x Hunter entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-11",
        "name": "Hunter x Hunter entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-12",
        "name": "Hunter x Hunter entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-13",
        "name": "Hunter x Hunter entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-14",
        "name": "Hunter x Hunter entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-15",
        "name": "Hunter x Hunter entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-16",
        "name": "Hunter x Hunter entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-17",
        "name": "Hunter x Hunter entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-18",
        "name": "Hunter x Hunter entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-19",
        "name": "Hunter x Hunter entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-20",
        "name": "Hunter x Hunter entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-21",
        "name": "Hunter x Hunter entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-22",
        "name": "Hunter x Hunter entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-23",
        "name": "Hunter x Hunter entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunter-x-hunter-entry-24",
        "name": "Hunter x Hunter entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hunter x Hunter.",
        "description": "A supporting encyclopedia entry in the Hunter x Hunter subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hunter-x-hunter",
        "hunter-x-hunter-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-places",
        "contains",
        "Hunter x Hunter places is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-events",
        "contains",
        "Hunter x Hunter events is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-objects",
        "contains",
        "Hunter x Hunter objects & artifacts is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-factions",
        "contains",
        "Hunter x Hunter factions & groups is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-concepts",
        "contains",
        "Hunter x Hunter concepts is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-eras",
        "contains",
        "Hunter x Hunter eras is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-works",
        "contains",
        "Hunter x Hunter works & media is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-symbols",
        "contains",
        "Hunter x Hunter symbols is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-controversies",
        "contains",
        "Hunter x Hunter controversies is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-sources",
        "contains",
        "Hunter x Hunter sources is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-geography",
        "contains",
        "Hunter x Hunter geography is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-legacy",
        "contains",
        "Hunter x Hunter legacy is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-practices",
        "contains",
        "Hunter x Hunter practices is a primary trailhead under Hunter x Hunter.",
        0.88,
        0.82
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-1",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-2",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-3",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-4",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-5",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-6",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-7",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-8",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-9",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-10",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-11",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-12",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-13",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-14",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-15",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-16",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-17",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-18",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-19",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-20",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-21",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-22",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-23",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ],
    [
        "hunter-x-hunter",
        "hunter-x-hunter-entry-24",
        "contains",
        "Supporting entry under Hunter x Hunter.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
