/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alien-sci-fi",
        "name": "Alien (sci-fi shelf)",
        "type": "topic",
        "short_description": "Xenomorphs, Weyland-Yutani, and the haunted-spaceship horror that redefined cinematic SF.",
        "description": "Xenomorphs, Weyland-Yutani, and the haunted-spaceship horror that redefined cinematic SF. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alien (sci-fi shelf) so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "alien-sci-fi-figures",
        "name": "Alien (sci-fi shelf) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alien (sci-fi shelf).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-world",
        "name": "Alien (sci-fi shelf) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alien (sci-fi shelf).",
        "description": "Geography, institutions, and periodization that give Alien (sci-fi shelf) its encyclopedia shape."
    },
    {
        "slug": "alien-sci-fi-places",
        "name": "Alien (sci-fi shelf) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alien (sci-fi shelf).",
        "description": "Places, regions, and built sites that give Alien (sci-fi shelf) its map — where events and figures concentrate."
    },
    {
        "slug": "alien-sci-fi-events",
        "name": "Alien (sci-fi shelf) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alien (sci-fi shelf).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alien (sci-fi shelf) timeline."
    },
    {
        "slug": "alien-sci-fi-objects",
        "name": "Alien (sci-fi shelf) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alien (sci-fi shelf).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-factions",
        "name": "Alien (sci-fi shelf) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alien (sci-fi shelf).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-concepts",
        "name": "Alien (sci-fi shelf) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alien (sci-fi shelf).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alien (sci-fi shelf) readable as a lore graph."
    },
    {
        "slug": "alien-sci-fi-eras",
        "name": "Alien (sci-fi shelf) eras",
        "type": "event",
        "short_description": "Periodization for Alien (sci-fi shelf).",
        "description": "Named eras and phases that help readers track how Alien (sci-fi shelf) changes across time."
    },
    {
        "slug": "alien-sci-fi-works",
        "name": "Alien (sci-fi shelf) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alien (sci-fi shelf).",
        "description": "Primary works and adaptations through which most audiences encounter Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-symbols",
        "name": "Alien (sci-fi shelf) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alien (sci-fi shelf).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-controversies",
        "name": "Alien (sci-fi shelf) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alien (sci-fi shelf).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alien (sci-fi shelf) argumentative."
    },
    {
        "slug": "alien-sci-fi-sources",
        "name": "Alien (sci-fi shelf) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alien (sci-fi shelf).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-geography",
        "name": "Alien (sci-fi shelf) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alien (sci-fi shelf).",
        "description": "Regions, routes, and spatial systems that situate Alien (sci-fi shelf) beyond single named places."
    },
    {
        "slug": "alien-sci-fi-legacy",
        "name": "Alien (sci-fi shelf) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alien (sci-fi shelf).",
        "description": "How Alien (sci-fi shelf) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "alien-sci-fi-practices",
        "name": "Alien (sci-fi shelf) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Alien (sci-fi shelf).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Alien (sci-fi shelf)."
    },
    {
        "slug": "alien-sci-fi-entry-1",
        "name": "Alien (sci-fi shelf) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-2",
        "name": "Alien (sci-fi shelf) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-3",
        "name": "Alien (sci-fi shelf) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-4",
        "name": "Alien (sci-fi shelf) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-5",
        "name": "Alien (sci-fi shelf) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-6",
        "name": "Alien (sci-fi shelf) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-7",
        "name": "Alien (sci-fi shelf) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-8",
        "name": "Alien (sci-fi shelf) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-9",
        "name": "Alien (sci-fi shelf) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-10",
        "name": "Alien (sci-fi shelf) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-11",
        "name": "Alien (sci-fi shelf) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-12",
        "name": "Alien (sci-fi shelf) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-13",
        "name": "Alien (sci-fi shelf) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-14",
        "name": "Alien (sci-fi shelf) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-15",
        "name": "Alien (sci-fi shelf) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-16",
        "name": "Alien (sci-fi shelf) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-17",
        "name": "Alien (sci-fi shelf) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-18",
        "name": "Alien (sci-fi shelf) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-19",
        "name": "Alien (sci-fi shelf) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-20",
        "name": "Alien (sci-fi shelf) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-21",
        "name": "Alien (sci-fi shelf) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-22",
        "name": "Alien (sci-fi shelf) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-23",
        "name": "Alien (sci-fi shelf) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-sci-fi-entry-24",
        "name": "Alien (sci-fi shelf) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Alien (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "alien-sci-fi",
        "alien-sci-fi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-places",
        "contains",
        "Alien (sci-fi shelf) places is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-events",
        "contains",
        "Alien (sci-fi shelf) events is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-objects",
        "contains",
        "Alien (sci-fi shelf) objects & artifacts is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-factions",
        "contains",
        "Alien (sci-fi shelf) factions & groups is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-concepts",
        "contains",
        "Alien (sci-fi shelf) concepts is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-eras",
        "contains",
        "Alien (sci-fi shelf) eras is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-works",
        "contains",
        "Alien (sci-fi shelf) works & media is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-symbols",
        "contains",
        "Alien (sci-fi shelf) symbols is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-controversies",
        "contains",
        "Alien (sci-fi shelf) controversies is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-sources",
        "contains",
        "Alien (sci-fi shelf) sources is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-geography",
        "contains",
        "Alien (sci-fi shelf) geography is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-legacy",
        "contains",
        "Alien (sci-fi shelf) legacy is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-practices",
        "contains",
        "Alien (sci-fi shelf) practices is a primary trailhead under Alien (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-1",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-2",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-3",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-4",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-5",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-6",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-7",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-8",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-9",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-10",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-11",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-12",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-13",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-14",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-15",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-16",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-17",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-18",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-19",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-20",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-21",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-22",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-23",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "alien-sci-fi",
        "alien-sci-fi-entry-24",
        "contains",
        "Supporting entry under Alien (sci-fi shelf).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
