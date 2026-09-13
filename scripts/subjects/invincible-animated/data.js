/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "invincible-animated",
        "name": "Invincible (animated)",
        "type": "topic",
        "short_description": "Viltrumite empire secrets, bloodied cape deconstruction, and Image’s superhero epic on screen.",
        "description": "Viltrumite empire secrets, bloodied cape deconstruction, and Image’s superhero epic on screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Invincible (animated) so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "invincible-animated-figures",
        "name": "Invincible (animated) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Invincible (animated).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Invincible (animated)."
    },
    {
        "slug": "invincible-animated-world",
        "name": "Invincible (animated) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Invincible (animated).",
        "description": "Geography, institutions, and periodization that give Invincible (animated) its encyclopedia shape."
    },
    {
        "slug": "invincible-animated-places",
        "name": "Invincible (animated) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Invincible (animated).",
        "description": "Places, regions, and built sites that give Invincible (animated) its map — where events and figures concentrate."
    },
    {
        "slug": "invincible-animated-events",
        "name": "Invincible (animated) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Invincible (animated).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Invincible (animated) timeline."
    },
    {
        "slug": "invincible-animated-objects",
        "name": "Invincible (animated) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Invincible (animated).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Invincible (animated)."
    },
    {
        "slug": "invincible-animated-factions",
        "name": "Invincible (animated) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Invincible (animated).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Invincible (animated)."
    },
    {
        "slug": "invincible-animated-concepts",
        "name": "Invincible (animated) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Invincible (animated).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Invincible (animated) readable as a lore graph."
    },
    {
        "slug": "invincible-animated-eras",
        "name": "Invincible (animated) eras",
        "type": "event",
        "short_description": "Periodization for Invincible (animated).",
        "description": "Named eras and phases that help readers track how Invincible (animated) changes across time."
    },
    {
        "slug": "invincible-animated-works",
        "name": "Invincible (animated) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Invincible (animated).",
        "description": "Primary works and adaptations through which most audiences encounter Invincible (animated)."
    },
    {
        "slug": "invincible-animated-symbols",
        "name": "Invincible (animated) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Invincible (animated).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Invincible (animated)."
    },
    {
        "slug": "invincible-animated-controversies",
        "name": "Invincible (animated) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Invincible (animated).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Invincible (animated) argumentative."
    },
    {
        "slug": "invincible-animated-sources",
        "name": "Invincible (animated) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Invincible (animated).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Invincible (animated)."
    },
    {
        "slug": "invincible-animated-geography",
        "name": "Invincible (animated) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Invincible (animated).",
        "description": "Regions, routes, and spatial systems that situate Invincible (animated) beyond single named places."
    },
    {
        "slug": "invincible-animated-legacy",
        "name": "Invincible (animated) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Invincible (animated).",
        "description": "How Invincible (animated) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "invincible-animated-practices",
        "name": "Invincible (animated) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Invincible (animated).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Invincible (animated)."
    },
    {
        "slug": "invincible-animated-entry-1",
        "name": "Invincible (animated) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-2",
        "name": "Invincible (animated) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-3",
        "name": "Invincible (animated) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-4",
        "name": "Invincible (animated) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-5",
        "name": "Invincible (animated) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-6",
        "name": "Invincible (animated) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-7",
        "name": "Invincible (animated) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-8",
        "name": "Invincible (animated) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-9",
        "name": "Invincible (animated) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-10",
        "name": "Invincible (animated) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-11",
        "name": "Invincible (animated) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-12",
        "name": "Invincible (animated) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-13",
        "name": "Invincible (animated) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-14",
        "name": "Invincible (animated) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-15",
        "name": "Invincible (animated) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-16",
        "name": "Invincible (animated) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-17",
        "name": "Invincible (animated) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-18",
        "name": "Invincible (animated) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-19",
        "name": "Invincible (animated) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-20",
        "name": "Invincible (animated) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-21",
        "name": "Invincible (animated) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-22",
        "name": "Invincible (animated) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-23",
        "name": "Invincible (animated) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "invincible-animated-entry-24",
        "name": "Invincible (animated) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Invincible (animated).",
        "description": "A supporting encyclopedia entry in the Invincible (animated) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "invincible-animated",
        "invincible-animated-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "invincible-animated",
        "invincible-animated-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "invincible-animated",
        "invincible-animated-places",
        "contains",
        "Invincible (animated) places is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-events",
        "contains",
        "Invincible (animated) events is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-objects",
        "contains",
        "Invincible (animated) objects & artifacts is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-factions",
        "contains",
        "Invincible (animated) factions & groups is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-concepts",
        "contains",
        "Invincible (animated) concepts is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-eras",
        "contains",
        "Invincible (animated) eras is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-works",
        "contains",
        "Invincible (animated) works & media is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-symbols",
        "contains",
        "Invincible (animated) symbols is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-controversies",
        "contains",
        "Invincible (animated) controversies is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-sources",
        "contains",
        "Invincible (animated) sources is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-geography",
        "contains",
        "Invincible (animated) geography is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-legacy",
        "contains",
        "Invincible (animated) legacy is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-practices",
        "contains",
        "Invincible (animated) practices is a primary trailhead under Invincible (animated).",
        0.88,
        0.82
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-1",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-2",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-3",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-4",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-5",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-6",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-7",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-8",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-9",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-10",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-11",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-12",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-13",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-14",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-15",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-16",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-17",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-18",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-19",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-20",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-21",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-22",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-23",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ],
    [
        "invincible-animated",
        "invincible-animated-entry-24",
        "contains",
        "Supporting entry under Invincible (animated).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
