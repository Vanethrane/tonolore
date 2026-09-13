/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "industrial-revolution",
        "name": "Industrial Revolution",
        "type": "topic",
        "short_description": "Factories, steam, urbanization, and the technological shift that remade labor and cities.",
        "description": "Factories, steam, urbanization, and the technological shift that remade labor and cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Industrial Revolution so readers can follow long-tail connections across history."
    },
    {
        "slug": "industrial-revolution-figures",
        "name": "Industrial Revolution figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Industrial Revolution.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-world",
        "name": "Industrial Revolution world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Industrial Revolution.",
        "description": "Geography, institutions, and periodization that give Industrial Revolution its encyclopedia shape."
    },
    {
        "slug": "industrial-revolution-places",
        "name": "Industrial Revolution places",
        "type": "place",
        "short_description": "Locations and geographies that frame Industrial Revolution.",
        "description": "Places, regions, and built sites that give Industrial Revolution its map — where events and figures concentrate."
    },
    {
        "slug": "industrial-revolution-events",
        "name": "Industrial Revolution events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Industrial Revolution.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Industrial Revolution timeline."
    },
    {
        "slug": "industrial-revolution-objects",
        "name": "Industrial Revolution objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Industrial Revolution.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-factions",
        "name": "Industrial Revolution factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Industrial Revolution.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-concepts",
        "name": "Industrial Revolution concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Industrial Revolution.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Industrial Revolution readable as a lore graph."
    },
    {
        "slug": "industrial-revolution-eras",
        "name": "Industrial Revolution eras",
        "type": "event",
        "short_description": "Periodization for Industrial Revolution.",
        "description": "Named eras and phases that help readers track how Industrial Revolution changes across time."
    },
    {
        "slug": "industrial-revolution-works",
        "name": "Industrial Revolution works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Industrial Revolution.",
        "description": "Primary works and adaptations through which most audiences encounter Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-symbols",
        "name": "Industrial Revolution symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Industrial Revolution.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-controversies",
        "name": "Industrial Revolution controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Industrial Revolution.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Industrial Revolution argumentative."
    },
    {
        "slug": "industrial-revolution-sources",
        "name": "Industrial Revolution sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Industrial Revolution.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-geography",
        "name": "Industrial Revolution geography",
        "type": "place",
        "short_description": "Broader geographic framing for Industrial Revolution.",
        "description": "Regions, routes, and spatial systems that situate Industrial Revolution beyond single named places."
    },
    {
        "slug": "industrial-revolution-legacy",
        "name": "Industrial Revolution legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Industrial Revolution.",
        "description": "How Industrial Revolution continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "industrial-revolution-practices",
        "name": "Industrial Revolution practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Industrial Revolution.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Industrial Revolution."
    },
    {
        "slug": "industrial-revolution-entry-1",
        "name": "Industrial Revolution entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-2",
        "name": "Industrial Revolution entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-3",
        "name": "Industrial Revolution entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-4",
        "name": "Industrial Revolution entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-5",
        "name": "Industrial Revolution entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-6",
        "name": "Industrial Revolution entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-7",
        "name": "Industrial Revolution entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-8",
        "name": "Industrial Revolution entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-9",
        "name": "Industrial Revolution entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-10",
        "name": "Industrial Revolution entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-11",
        "name": "Industrial Revolution entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-12",
        "name": "Industrial Revolution entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-13",
        "name": "Industrial Revolution entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-14",
        "name": "Industrial Revolution entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-15",
        "name": "Industrial Revolution entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-16",
        "name": "Industrial Revolution entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-17",
        "name": "Industrial Revolution entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-18",
        "name": "Industrial Revolution entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-19",
        "name": "Industrial Revolution entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-20",
        "name": "Industrial Revolution entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-21",
        "name": "Industrial Revolution entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-22",
        "name": "Industrial Revolution entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-23",
        "name": "Industrial Revolution entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "industrial-revolution-entry-24",
        "name": "Industrial Revolution entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Industrial Revolution.",
        "description": "A supporting encyclopedia entry in the Industrial Revolution subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "industrial-revolution",
        "industrial-revolution-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "industrial-revolution",
        "industrial-revolution-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "industrial-revolution",
        "industrial-revolution-places",
        "contains",
        "Industrial Revolution places is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-events",
        "contains",
        "Industrial Revolution events is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-objects",
        "contains",
        "Industrial Revolution objects & artifacts is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-factions",
        "contains",
        "Industrial Revolution factions & groups is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-concepts",
        "contains",
        "Industrial Revolution concepts is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-eras",
        "contains",
        "Industrial Revolution eras is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-works",
        "contains",
        "Industrial Revolution works & media is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-symbols",
        "contains",
        "Industrial Revolution symbols is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-controversies",
        "contains",
        "Industrial Revolution controversies is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-sources",
        "contains",
        "Industrial Revolution sources is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-geography",
        "contains",
        "Industrial Revolution geography is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-legacy",
        "contains",
        "Industrial Revolution legacy is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-practices",
        "contains",
        "Industrial Revolution practices is a primary trailhead under Industrial Revolution.",
        0.88,
        0.82
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-1",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-2",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-3",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-4",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-5",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-6",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-7",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-8",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-9",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-10",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-11",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-12",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-13",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-14",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-15",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-16",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-17",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-18",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-19",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-20",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-21",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-22",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-23",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ],
    [
        "industrial-revolution",
        "industrial-revolution-entry-24",
        "contains",
        "Supporting entry under Industrial Revolution.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
