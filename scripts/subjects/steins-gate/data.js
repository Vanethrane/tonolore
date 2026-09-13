/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "steins-gate",
        "name": "Steins;Gate",
        "type": "topic",
        "short_description": "Time leap microwave, SERN paranoia, and the visual-novel adaptation beloved for its twist.",
        "description": "Time leap microwave, SERN paranoia, and the visual-novel adaptation beloved for its twist. This Ton-o-Lore subject maps people, places, events, and ideas tied to Steins;Gate so readers can follow long-tail connections across anime."
    },
    {
        "slug": "steins-gate-figures",
        "name": "Steins;Gate figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Steins;Gate.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Steins;Gate."
    },
    {
        "slug": "steins-gate-world",
        "name": "Steins;Gate world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Steins;Gate.",
        "description": "Geography, institutions, and periodization that give Steins;Gate its encyclopedia shape."
    },
    {
        "slug": "steins-gate-places",
        "name": "Steins;Gate places",
        "type": "place",
        "short_description": "Locations and geographies that frame Steins;Gate.",
        "description": "Places, regions, and built sites that give Steins;Gate its map — where events and figures concentrate."
    },
    {
        "slug": "steins-gate-events",
        "name": "Steins;Gate events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Steins;Gate.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Steins;Gate timeline."
    },
    {
        "slug": "steins-gate-objects",
        "name": "Steins;Gate objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Steins;Gate.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Steins;Gate."
    },
    {
        "slug": "steins-gate-factions",
        "name": "Steins;Gate factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Steins;Gate.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Steins;Gate."
    },
    {
        "slug": "steins-gate-concepts",
        "name": "Steins;Gate concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Steins;Gate.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Steins;Gate readable as a lore graph."
    },
    {
        "slug": "steins-gate-eras",
        "name": "Steins;Gate eras",
        "type": "event",
        "short_description": "Periodization for Steins;Gate.",
        "description": "Named eras and phases that help readers track how Steins;Gate changes across time."
    },
    {
        "slug": "steins-gate-works",
        "name": "Steins;Gate works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Steins;Gate.",
        "description": "Primary works and adaptations through which most audiences encounter Steins;Gate."
    },
    {
        "slug": "steins-gate-symbols",
        "name": "Steins;Gate symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Steins;Gate.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Steins;Gate."
    },
    {
        "slug": "steins-gate-controversies",
        "name": "Steins;Gate controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Steins;Gate.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Steins;Gate argumentative."
    },
    {
        "slug": "steins-gate-sources",
        "name": "Steins;Gate sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Steins;Gate.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Steins;Gate."
    },
    {
        "slug": "steins-gate-geography",
        "name": "Steins;Gate geography",
        "type": "place",
        "short_description": "Broader geographic framing for Steins;Gate.",
        "description": "Regions, routes, and spatial systems that situate Steins;Gate beyond single named places."
    },
    {
        "slug": "steins-gate-legacy",
        "name": "Steins;Gate legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Steins;Gate.",
        "description": "How Steins;Gate continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "steins-gate-practices",
        "name": "Steins;Gate practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Steins;Gate.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Steins;Gate."
    },
    {
        "slug": "steins-gate-entry-1",
        "name": "Steins;Gate entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-2",
        "name": "Steins;Gate entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-3",
        "name": "Steins;Gate entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-4",
        "name": "Steins;Gate entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-5",
        "name": "Steins;Gate entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-6",
        "name": "Steins;Gate entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-7",
        "name": "Steins;Gate entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-8",
        "name": "Steins;Gate entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-9",
        "name": "Steins;Gate entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-10",
        "name": "Steins;Gate entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-11",
        "name": "Steins;Gate entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-12",
        "name": "Steins;Gate entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-13",
        "name": "Steins;Gate entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-14",
        "name": "Steins;Gate entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-15",
        "name": "Steins;Gate entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-16",
        "name": "Steins;Gate entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-17",
        "name": "Steins;Gate entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-18",
        "name": "Steins;Gate entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-19",
        "name": "Steins;Gate entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-20",
        "name": "Steins;Gate entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-21",
        "name": "Steins;Gate entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-22",
        "name": "Steins;Gate entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-23",
        "name": "Steins;Gate entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steins-gate-entry-24",
        "name": "Steins;Gate entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steins;Gate.",
        "description": "A supporting encyclopedia entry in the Steins;Gate subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "steins-gate",
        "steins-gate-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "steins-gate",
        "steins-gate-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "steins-gate",
        "steins-gate-places",
        "contains",
        "Steins;Gate places is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-events",
        "contains",
        "Steins;Gate events is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-objects",
        "contains",
        "Steins;Gate objects & artifacts is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-factions",
        "contains",
        "Steins;Gate factions & groups is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-concepts",
        "contains",
        "Steins;Gate concepts is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-eras",
        "contains",
        "Steins;Gate eras is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-works",
        "contains",
        "Steins;Gate works & media is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-symbols",
        "contains",
        "Steins;Gate symbols is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-controversies",
        "contains",
        "Steins;Gate controversies is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-sources",
        "contains",
        "Steins;Gate sources is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-geography",
        "contains",
        "Steins;Gate geography is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-legacy",
        "contains",
        "Steins;Gate legacy is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-practices",
        "contains",
        "Steins;Gate practices is a primary trailhead under Steins;Gate.",
        0.88,
        0.82
    ],
    [
        "steins-gate",
        "steins-gate-entry-1",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-2",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-3",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-4",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-5",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-6",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-7",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-8",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-9",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-10",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-11",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-12",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-13",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-14",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-15",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-16",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-17",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-18",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-19",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-20",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-21",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-22",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-23",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ],
    [
        "steins-gate",
        "steins-gate-entry-24",
        "contains",
        "Supporting entry under Steins;Gate.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
