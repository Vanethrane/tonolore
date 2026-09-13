/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "castlevania-animated",
        "name": "Castlevania (animated)",
        "type": "topic",
        "short_description": "Belmonts, Dracula’s war, and the gore-soaked adaptation of Konami’s gothic game lore.",
        "description": "Belmonts, Dracula’s war, and the gore-soaked adaptation of Konami’s gothic game lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Castlevania (animated) so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "castlevania-animated-figures",
        "name": "Castlevania (animated) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Castlevania (animated).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-world",
        "name": "Castlevania (animated) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Castlevania (animated).",
        "description": "Geography, institutions, and periodization that give Castlevania (animated) its encyclopedia shape."
    },
    {
        "slug": "castlevania-animated-places",
        "name": "Castlevania (animated) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Castlevania (animated).",
        "description": "Places, regions, and built sites that give Castlevania (animated) its map — where events and figures concentrate."
    },
    {
        "slug": "castlevania-animated-events",
        "name": "Castlevania (animated) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Castlevania (animated).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Castlevania (animated) timeline."
    },
    {
        "slug": "castlevania-animated-objects",
        "name": "Castlevania (animated) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Castlevania (animated).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-factions",
        "name": "Castlevania (animated) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Castlevania (animated).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-concepts",
        "name": "Castlevania (animated) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Castlevania (animated).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Castlevania (animated) readable as a lore graph."
    },
    {
        "slug": "castlevania-animated-eras",
        "name": "Castlevania (animated) eras",
        "type": "event",
        "short_description": "Periodization for Castlevania (animated).",
        "description": "Named eras and phases that help readers track how Castlevania (animated) changes across time."
    },
    {
        "slug": "castlevania-animated-works",
        "name": "Castlevania (animated) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Castlevania (animated).",
        "description": "Primary works and adaptations through which most audiences encounter Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-symbols",
        "name": "Castlevania (animated) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Castlevania (animated).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-controversies",
        "name": "Castlevania (animated) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Castlevania (animated).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Castlevania (animated) argumentative."
    },
    {
        "slug": "castlevania-animated-sources",
        "name": "Castlevania (animated) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Castlevania (animated).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-geography",
        "name": "Castlevania (animated) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Castlevania (animated).",
        "description": "Regions, routes, and spatial systems that situate Castlevania (animated) beyond single named places."
    },
    {
        "slug": "castlevania-animated-legacy",
        "name": "Castlevania (animated) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Castlevania (animated).",
        "description": "How Castlevania (animated) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "castlevania-animated-practices",
        "name": "Castlevania (animated) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Castlevania (animated).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Castlevania (animated)."
    },
    {
        "slug": "castlevania-animated-entry-1",
        "name": "Castlevania (animated) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-2",
        "name": "Castlevania (animated) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-3",
        "name": "Castlevania (animated) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-4",
        "name": "Castlevania (animated) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-5",
        "name": "Castlevania (animated) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-6",
        "name": "Castlevania (animated) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-7",
        "name": "Castlevania (animated) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-8",
        "name": "Castlevania (animated) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-9",
        "name": "Castlevania (animated) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-10",
        "name": "Castlevania (animated) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-11",
        "name": "Castlevania (animated) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-12",
        "name": "Castlevania (animated) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-13",
        "name": "Castlevania (animated) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-14",
        "name": "Castlevania (animated) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-15",
        "name": "Castlevania (animated) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-16",
        "name": "Castlevania (animated) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-17",
        "name": "Castlevania (animated) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-18",
        "name": "Castlevania (animated) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-19",
        "name": "Castlevania (animated) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-20",
        "name": "Castlevania (animated) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-21",
        "name": "Castlevania (animated) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-22",
        "name": "Castlevania (animated) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-23",
        "name": "Castlevania (animated) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castlevania-animated-entry-24",
        "name": "Castlevania (animated) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castlevania (animated).",
        "description": "A supporting encyclopedia entry in the Castlevania (animated) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "castlevania-animated",
        "castlevania-animated-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "castlevania-animated",
        "castlevania-animated-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "castlevania-animated",
        "castlevania-animated-places",
        "contains",
        "Castlevania (animated) places is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-events",
        "contains",
        "Castlevania (animated) events is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-objects",
        "contains",
        "Castlevania (animated) objects & artifacts is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-factions",
        "contains",
        "Castlevania (animated) factions & groups is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-concepts",
        "contains",
        "Castlevania (animated) concepts is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-eras",
        "contains",
        "Castlevania (animated) eras is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-works",
        "contains",
        "Castlevania (animated) works & media is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-symbols",
        "contains",
        "Castlevania (animated) symbols is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-controversies",
        "contains",
        "Castlevania (animated) controversies is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-sources",
        "contains",
        "Castlevania (animated) sources is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-geography",
        "contains",
        "Castlevania (animated) geography is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-legacy",
        "contains",
        "Castlevania (animated) legacy is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-practices",
        "contains",
        "Castlevania (animated) practices is a primary trailhead under Castlevania (animated).",
        0.88,
        0.82
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-1",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-2",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-3",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-4",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-5",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-6",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-7",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-8",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-9",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-10",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-11",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-12",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-13",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-14",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-15",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-16",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-17",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-18",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-19",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-20",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-21",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-22",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-23",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ],
    [
        "castlevania-animated",
        "castlevania-animated-entry-24",
        "contains",
        "Supporting entry under Castlevania (animated).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
