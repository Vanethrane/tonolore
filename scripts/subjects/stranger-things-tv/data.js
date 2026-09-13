/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stranger-things-tv",
        "name": "Stranger Things (TV shelf)",
        "type": "topic",
        "short_description": "Hawkins kids, Upside Down, and the nostalgic horror-adventure that defined Netflix originals.",
        "description": "Hawkins kids, Upside Down, and the nostalgic horror-adventure that defined Netflix originals. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stranger Things (TV shelf) so readers can follow long-tail connections across television."
    },
    {
        "slug": "stranger-things-tv-figures",
        "name": "Stranger Things (TV shelf) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stranger Things (TV shelf).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-world",
        "name": "Stranger Things (TV shelf) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stranger Things (TV shelf).",
        "description": "Geography, institutions, and periodization that give Stranger Things (TV shelf) its encyclopedia shape."
    },
    {
        "slug": "stranger-things-tv-places",
        "name": "Stranger Things (TV shelf) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stranger Things (TV shelf).",
        "description": "Places, regions, and built sites that give Stranger Things (TV shelf) its map — where events and figures concentrate."
    },
    {
        "slug": "stranger-things-tv-events",
        "name": "Stranger Things (TV shelf) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stranger Things (TV shelf).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stranger Things (TV shelf) timeline."
    },
    {
        "slug": "stranger-things-tv-objects",
        "name": "Stranger Things (TV shelf) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stranger Things (TV shelf).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-factions",
        "name": "Stranger Things (TV shelf) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stranger Things (TV shelf).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-concepts",
        "name": "Stranger Things (TV shelf) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stranger Things (TV shelf).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stranger Things (TV shelf) readable as a lore graph."
    },
    {
        "slug": "stranger-things-tv-eras",
        "name": "Stranger Things (TV shelf) eras",
        "type": "event",
        "short_description": "Periodization for Stranger Things (TV shelf).",
        "description": "Named eras and phases that help readers track how Stranger Things (TV shelf) changes across time."
    },
    {
        "slug": "stranger-things-tv-works",
        "name": "Stranger Things (TV shelf) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stranger Things (TV shelf).",
        "description": "Primary works and adaptations through which most audiences encounter Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-symbols",
        "name": "Stranger Things (TV shelf) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stranger Things (TV shelf).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-controversies",
        "name": "Stranger Things (TV shelf) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stranger Things (TV shelf).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stranger Things (TV shelf) argumentative."
    },
    {
        "slug": "stranger-things-tv-sources",
        "name": "Stranger Things (TV shelf) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stranger Things (TV shelf).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-geography",
        "name": "Stranger Things (TV shelf) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stranger Things (TV shelf).",
        "description": "Regions, routes, and spatial systems that situate Stranger Things (TV shelf) beyond single named places."
    },
    {
        "slug": "stranger-things-tv-legacy",
        "name": "Stranger Things (TV shelf) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stranger Things (TV shelf).",
        "description": "How Stranger Things (TV shelf) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stranger-things-tv-practices",
        "name": "Stranger Things (TV shelf) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stranger Things (TV shelf).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stranger Things (TV shelf)."
    },
    {
        "slug": "stranger-things-tv-entry-1",
        "name": "Stranger Things (TV shelf) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-2",
        "name": "Stranger Things (TV shelf) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-3",
        "name": "Stranger Things (TV shelf) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-4",
        "name": "Stranger Things (TV shelf) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-5",
        "name": "Stranger Things (TV shelf) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-6",
        "name": "Stranger Things (TV shelf) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-7",
        "name": "Stranger Things (TV shelf) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-8",
        "name": "Stranger Things (TV shelf) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-9",
        "name": "Stranger Things (TV shelf) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-10",
        "name": "Stranger Things (TV shelf) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-11",
        "name": "Stranger Things (TV shelf) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-12",
        "name": "Stranger Things (TV shelf) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-13",
        "name": "Stranger Things (TV shelf) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-14",
        "name": "Stranger Things (TV shelf) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-15",
        "name": "Stranger Things (TV shelf) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-16",
        "name": "Stranger Things (TV shelf) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-17",
        "name": "Stranger Things (TV shelf) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-18",
        "name": "Stranger Things (TV shelf) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-19",
        "name": "Stranger Things (TV shelf) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-20",
        "name": "Stranger Things (TV shelf) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-21",
        "name": "Stranger Things (TV shelf) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-22",
        "name": "Stranger Things (TV shelf) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-23",
        "name": "Stranger Things (TV shelf) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-tv-entry-24",
        "name": "Stranger Things (TV shelf) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things (TV shelf).",
        "description": "A supporting encyclopedia entry in the Stranger Things (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stranger-things-tv",
        "stranger-things-tv-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-places",
        "contains",
        "Stranger Things (TV shelf) places is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-events",
        "contains",
        "Stranger Things (TV shelf) events is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-objects",
        "contains",
        "Stranger Things (TV shelf) objects & artifacts is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-factions",
        "contains",
        "Stranger Things (TV shelf) factions & groups is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-concepts",
        "contains",
        "Stranger Things (TV shelf) concepts is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-eras",
        "contains",
        "Stranger Things (TV shelf) eras is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-works",
        "contains",
        "Stranger Things (TV shelf) works & media is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-symbols",
        "contains",
        "Stranger Things (TV shelf) symbols is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-controversies",
        "contains",
        "Stranger Things (TV shelf) controversies is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-sources",
        "contains",
        "Stranger Things (TV shelf) sources is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-geography",
        "contains",
        "Stranger Things (TV shelf) geography is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-legacy",
        "contains",
        "Stranger Things (TV shelf) legacy is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-practices",
        "contains",
        "Stranger Things (TV shelf) practices is a primary trailhead under Stranger Things (TV shelf).",
        0.88,
        0.82
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-1",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-2",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-3",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-4",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-5",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-6",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-7",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-8",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-9",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-10",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-11",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-12",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-13",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-14",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-15",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-16",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-17",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-18",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-19",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-20",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-21",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-22",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-23",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ],
    [
        "stranger-things-tv",
        "stranger-things-tv-entry-24",
        "contains",
        "Supporting entry under Stranger Things (TV shelf).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
