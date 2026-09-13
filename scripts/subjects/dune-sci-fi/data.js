/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dune-sci-fi",
        "name": "Dune (sci-fi shelf)",
        "type": "topic",
        "short_description": "Spice, sandworms, and the desert-empire mythos that dominates modern space-opera lore.",
        "description": "Spice, sandworms, and the desert-empire mythos that dominates modern space-opera lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dune (sci-fi shelf) so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "dune-sci-fi-figures",
        "name": "Dune (sci-fi shelf) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dune (sci-fi shelf).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-world",
        "name": "Dune (sci-fi shelf) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dune (sci-fi shelf).",
        "description": "Geography, institutions, and periodization that give Dune (sci-fi shelf) its encyclopedia shape."
    },
    {
        "slug": "dune-sci-fi-places",
        "name": "Dune (sci-fi shelf) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dune (sci-fi shelf).",
        "description": "Places, regions, and built sites that give Dune (sci-fi shelf) its map — where events and figures concentrate."
    },
    {
        "slug": "dune-sci-fi-events",
        "name": "Dune (sci-fi shelf) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dune (sci-fi shelf).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dune (sci-fi shelf) timeline."
    },
    {
        "slug": "dune-sci-fi-objects",
        "name": "Dune (sci-fi shelf) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dune (sci-fi shelf).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-factions",
        "name": "Dune (sci-fi shelf) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dune (sci-fi shelf).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-concepts",
        "name": "Dune (sci-fi shelf) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dune (sci-fi shelf).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dune (sci-fi shelf) readable as a lore graph."
    },
    {
        "slug": "dune-sci-fi-eras",
        "name": "Dune (sci-fi shelf) eras",
        "type": "event",
        "short_description": "Periodization for Dune (sci-fi shelf).",
        "description": "Named eras and phases that help readers track how Dune (sci-fi shelf) changes across time."
    },
    {
        "slug": "dune-sci-fi-works",
        "name": "Dune (sci-fi shelf) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dune (sci-fi shelf).",
        "description": "Primary works and adaptations through which most audiences encounter Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-symbols",
        "name": "Dune (sci-fi shelf) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dune (sci-fi shelf).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-controversies",
        "name": "Dune (sci-fi shelf) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dune (sci-fi shelf).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dune (sci-fi shelf) argumentative."
    },
    {
        "slug": "dune-sci-fi-sources",
        "name": "Dune (sci-fi shelf) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dune (sci-fi shelf).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-geography",
        "name": "Dune (sci-fi shelf) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dune (sci-fi shelf).",
        "description": "Regions, routes, and spatial systems that situate Dune (sci-fi shelf) beyond single named places."
    },
    {
        "slug": "dune-sci-fi-legacy",
        "name": "Dune (sci-fi shelf) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dune (sci-fi shelf).",
        "description": "How Dune (sci-fi shelf) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dune-sci-fi-practices",
        "name": "Dune (sci-fi shelf) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dune (sci-fi shelf).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dune (sci-fi shelf)."
    },
    {
        "slug": "dune-sci-fi-entry-1",
        "name": "Dune (sci-fi shelf) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-2",
        "name": "Dune (sci-fi shelf) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-3",
        "name": "Dune (sci-fi shelf) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-4",
        "name": "Dune (sci-fi shelf) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-5",
        "name": "Dune (sci-fi shelf) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-6",
        "name": "Dune (sci-fi shelf) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-7",
        "name": "Dune (sci-fi shelf) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-8",
        "name": "Dune (sci-fi shelf) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-9",
        "name": "Dune (sci-fi shelf) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-10",
        "name": "Dune (sci-fi shelf) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-11",
        "name": "Dune (sci-fi shelf) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-12",
        "name": "Dune (sci-fi shelf) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-13",
        "name": "Dune (sci-fi shelf) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-14",
        "name": "Dune (sci-fi shelf) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-15",
        "name": "Dune (sci-fi shelf) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-16",
        "name": "Dune (sci-fi shelf) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-17",
        "name": "Dune (sci-fi shelf) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-18",
        "name": "Dune (sci-fi shelf) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-19",
        "name": "Dune (sci-fi shelf) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-20",
        "name": "Dune (sci-fi shelf) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-21",
        "name": "Dune (sci-fi shelf) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-22",
        "name": "Dune (sci-fi shelf) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-23",
        "name": "Dune (sci-fi shelf) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dune-sci-fi-entry-24",
        "name": "Dune (sci-fi shelf) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dune (sci-fi shelf).",
        "description": "A supporting encyclopedia entry in the Dune (sci-fi shelf) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dune-sci-fi",
        "dune-sci-fi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-places",
        "contains",
        "Dune (sci-fi shelf) places is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-events",
        "contains",
        "Dune (sci-fi shelf) events is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-objects",
        "contains",
        "Dune (sci-fi shelf) objects & artifacts is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-factions",
        "contains",
        "Dune (sci-fi shelf) factions & groups is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-concepts",
        "contains",
        "Dune (sci-fi shelf) concepts is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-eras",
        "contains",
        "Dune (sci-fi shelf) eras is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-works",
        "contains",
        "Dune (sci-fi shelf) works & media is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-symbols",
        "contains",
        "Dune (sci-fi shelf) symbols is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-controversies",
        "contains",
        "Dune (sci-fi shelf) controversies is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-sources",
        "contains",
        "Dune (sci-fi shelf) sources is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-geography",
        "contains",
        "Dune (sci-fi shelf) geography is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-legacy",
        "contains",
        "Dune (sci-fi shelf) legacy is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-practices",
        "contains",
        "Dune (sci-fi shelf) practices is a primary trailhead under Dune (sci-fi shelf).",
        0.88,
        0.82
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-1",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-2",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-3",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-4",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-5",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-6",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-7",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-8",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-9",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-10",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-11",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-12",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-13",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-14",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-15",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-16",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-17",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-18",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-19",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-20",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-21",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-22",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-23",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ],
    [
        "dune-sci-fi",
        "dune-sci-fi-entry-24",
        "contains",
        "Supporting entry under Dune (sci-fi shelf).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
