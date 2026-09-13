/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jersey-devil",
        "name": "Jersey Devil",
        "type": "topic",
        "short_description": "Pine Barrens cursed birth, winged horse-thing, and New Jersey’s colonial-era cryptid.",
        "description": "Pine Barrens cursed birth, winged horse-thing, and New Jersey’s colonial-era cryptid. This Ton-o-Lore subject maps people, places, events, and ideas tied to Jersey Devil so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "jersey-devil-figures",
        "name": "Jersey Devil figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Jersey Devil.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Jersey Devil."
    },
    {
        "slug": "jersey-devil-world",
        "name": "Jersey Devil world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Jersey Devil.",
        "description": "Geography, institutions, and periodization that give Jersey Devil its encyclopedia shape."
    },
    {
        "slug": "jersey-devil-places",
        "name": "Jersey Devil places",
        "type": "place",
        "short_description": "Locations and geographies that frame Jersey Devil.",
        "description": "Places, regions, and built sites that give Jersey Devil its map — where events and figures concentrate."
    },
    {
        "slug": "jersey-devil-events",
        "name": "Jersey Devil events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Jersey Devil.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Jersey Devil timeline."
    },
    {
        "slug": "jersey-devil-objects",
        "name": "Jersey Devil objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Jersey Devil.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Jersey Devil."
    },
    {
        "slug": "jersey-devil-factions",
        "name": "Jersey Devil factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Jersey Devil.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Jersey Devil."
    },
    {
        "slug": "jersey-devil-concepts",
        "name": "Jersey Devil concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Jersey Devil.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Jersey Devil readable as a lore graph."
    },
    {
        "slug": "jersey-devil-eras",
        "name": "Jersey Devil eras",
        "type": "event",
        "short_description": "Periodization for Jersey Devil.",
        "description": "Named eras and phases that help readers track how Jersey Devil changes across time."
    },
    {
        "slug": "jersey-devil-works",
        "name": "Jersey Devil works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Jersey Devil.",
        "description": "Primary works and adaptations through which most audiences encounter Jersey Devil."
    },
    {
        "slug": "jersey-devil-symbols",
        "name": "Jersey Devil symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Jersey Devil.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Jersey Devil."
    },
    {
        "slug": "jersey-devil-controversies",
        "name": "Jersey Devil controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Jersey Devil.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Jersey Devil argumentative."
    },
    {
        "slug": "jersey-devil-sources",
        "name": "Jersey Devil sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Jersey Devil.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Jersey Devil."
    },
    {
        "slug": "jersey-devil-geography",
        "name": "Jersey Devil geography",
        "type": "place",
        "short_description": "Broader geographic framing for Jersey Devil.",
        "description": "Regions, routes, and spatial systems that situate Jersey Devil beyond single named places."
    },
    {
        "slug": "jersey-devil-legacy",
        "name": "Jersey Devil legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Jersey Devil.",
        "description": "How Jersey Devil continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "jersey-devil-practices",
        "name": "Jersey Devil practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Jersey Devil.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Jersey Devil."
    },
    {
        "slug": "jersey-devil-entry-1",
        "name": "Jersey Devil entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-2",
        "name": "Jersey Devil entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-3",
        "name": "Jersey Devil entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-4",
        "name": "Jersey Devil entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-5",
        "name": "Jersey Devil entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-6",
        "name": "Jersey Devil entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-7",
        "name": "Jersey Devil entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-8",
        "name": "Jersey Devil entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-9",
        "name": "Jersey Devil entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-10",
        "name": "Jersey Devil entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-11",
        "name": "Jersey Devil entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-12",
        "name": "Jersey Devil entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-13",
        "name": "Jersey Devil entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-14",
        "name": "Jersey Devil entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-15",
        "name": "Jersey Devil entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-16",
        "name": "Jersey Devil entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-17",
        "name": "Jersey Devil entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-18",
        "name": "Jersey Devil entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-19",
        "name": "Jersey Devil entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-20",
        "name": "Jersey Devil entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-21",
        "name": "Jersey Devil entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-22",
        "name": "Jersey Devil entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-23",
        "name": "Jersey Devil entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jersey-devil-entry-24",
        "name": "Jersey Devil entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jersey Devil.",
        "description": "A supporting encyclopedia entry in the Jersey Devil subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "jersey-devil",
        "jersey-devil-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "jersey-devil",
        "jersey-devil-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "jersey-devil",
        "jersey-devil-places",
        "contains",
        "Jersey Devil places is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-events",
        "contains",
        "Jersey Devil events is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-objects",
        "contains",
        "Jersey Devil objects & artifacts is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-factions",
        "contains",
        "Jersey Devil factions & groups is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-concepts",
        "contains",
        "Jersey Devil concepts is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-eras",
        "contains",
        "Jersey Devil eras is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-works",
        "contains",
        "Jersey Devil works & media is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-symbols",
        "contains",
        "Jersey Devil symbols is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-controversies",
        "contains",
        "Jersey Devil controversies is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-sources",
        "contains",
        "Jersey Devil sources is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-geography",
        "contains",
        "Jersey Devil geography is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-legacy",
        "contains",
        "Jersey Devil legacy is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-practices",
        "contains",
        "Jersey Devil practices is a primary trailhead under Jersey Devil.",
        0.88,
        0.82
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-1",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-2",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-3",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-4",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-5",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-6",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-7",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-8",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-9",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-10",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-11",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-12",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-13",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-14",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-15",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-16",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-17",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-18",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-19",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-20",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-21",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-22",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-23",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ],
    [
        "jersey-devil",
        "jersey-devil-entry-24",
        "contains",
        "Supporting entry under Jersey Devil.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
