/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "freemasonry-esoteric",
        "name": "Freemasonry (esoteric)",
        "type": "topic",
        "short_description": "Lodges, degrees, and the fraternal symbolism that conspiracy and occult study both obsess over.",
        "description": "Lodges, degrees, and the fraternal symbolism that conspiracy and occult study both obsess over. This Ton-o-Lore subject maps people, places, events, and ideas tied to Freemasonry (esoteric) so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "freemasonry-esoteric-figures",
        "name": "Freemasonry (esoteric) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Freemasonry (esoteric).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-world",
        "name": "Freemasonry (esoteric) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Freemasonry (esoteric).",
        "description": "Geography, institutions, and periodization that give Freemasonry (esoteric) its encyclopedia shape."
    },
    {
        "slug": "freemasonry-esoteric-places",
        "name": "Freemasonry (esoteric) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Freemasonry (esoteric).",
        "description": "Places, regions, and built sites that give Freemasonry (esoteric) its map — where events and figures concentrate."
    },
    {
        "slug": "freemasonry-esoteric-events",
        "name": "Freemasonry (esoteric) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Freemasonry (esoteric).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Freemasonry (esoteric) timeline."
    },
    {
        "slug": "freemasonry-esoteric-objects",
        "name": "Freemasonry (esoteric) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Freemasonry (esoteric).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-factions",
        "name": "Freemasonry (esoteric) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Freemasonry (esoteric).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-concepts",
        "name": "Freemasonry (esoteric) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Freemasonry (esoteric).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Freemasonry (esoteric) readable as a lore graph."
    },
    {
        "slug": "freemasonry-esoteric-eras",
        "name": "Freemasonry (esoteric) eras",
        "type": "event",
        "short_description": "Periodization for Freemasonry (esoteric).",
        "description": "Named eras and phases that help readers track how Freemasonry (esoteric) changes across time."
    },
    {
        "slug": "freemasonry-esoteric-works",
        "name": "Freemasonry (esoteric) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Freemasonry (esoteric).",
        "description": "Primary works and adaptations through which most audiences encounter Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-symbols",
        "name": "Freemasonry (esoteric) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Freemasonry (esoteric).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-controversies",
        "name": "Freemasonry (esoteric) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Freemasonry (esoteric).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Freemasonry (esoteric) argumentative."
    },
    {
        "slug": "freemasonry-esoteric-sources",
        "name": "Freemasonry (esoteric) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Freemasonry (esoteric).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-geography",
        "name": "Freemasonry (esoteric) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Freemasonry (esoteric).",
        "description": "Regions, routes, and spatial systems that situate Freemasonry (esoteric) beyond single named places."
    },
    {
        "slug": "freemasonry-esoteric-legacy",
        "name": "Freemasonry (esoteric) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Freemasonry (esoteric).",
        "description": "How Freemasonry (esoteric) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "freemasonry-esoteric-practices",
        "name": "Freemasonry (esoteric) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Freemasonry (esoteric).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Freemasonry (esoteric)."
    },
    {
        "slug": "freemasonry-esoteric-entry-1",
        "name": "Freemasonry (esoteric) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-2",
        "name": "Freemasonry (esoteric) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-3",
        "name": "Freemasonry (esoteric) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-4",
        "name": "Freemasonry (esoteric) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-5",
        "name": "Freemasonry (esoteric) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-6",
        "name": "Freemasonry (esoteric) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-7",
        "name": "Freemasonry (esoteric) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-8",
        "name": "Freemasonry (esoteric) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-9",
        "name": "Freemasonry (esoteric) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-10",
        "name": "Freemasonry (esoteric) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-11",
        "name": "Freemasonry (esoteric) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-12",
        "name": "Freemasonry (esoteric) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-13",
        "name": "Freemasonry (esoteric) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-14",
        "name": "Freemasonry (esoteric) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-15",
        "name": "Freemasonry (esoteric) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-16",
        "name": "Freemasonry (esoteric) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-17",
        "name": "Freemasonry (esoteric) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-18",
        "name": "Freemasonry (esoteric) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-19",
        "name": "Freemasonry (esoteric) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-20",
        "name": "Freemasonry (esoteric) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-21",
        "name": "Freemasonry (esoteric) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-22",
        "name": "Freemasonry (esoteric) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-23",
        "name": "Freemasonry (esoteric) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "freemasonry-esoteric-entry-24",
        "name": "Freemasonry (esoteric) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Freemasonry (esoteric).",
        "description": "A supporting encyclopedia entry in the Freemasonry (esoteric) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-places",
        "contains",
        "Freemasonry (esoteric) places is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-events",
        "contains",
        "Freemasonry (esoteric) events is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-objects",
        "contains",
        "Freemasonry (esoteric) objects & artifacts is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-factions",
        "contains",
        "Freemasonry (esoteric) factions & groups is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-concepts",
        "contains",
        "Freemasonry (esoteric) concepts is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-eras",
        "contains",
        "Freemasonry (esoteric) eras is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-works",
        "contains",
        "Freemasonry (esoteric) works & media is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-symbols",
        "contains",
        "Freemasonry (esoteric) symbols is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-controversies",
        "contains",
        "Freemasonry (esoteric) controversies is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-sources",
        "contains",
        "Freemasonry (esoteric) sources is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-geography",
        "contains",
        "Freemasonry (esoteric) geography is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-legacy",
        "contains",
        "Freemasonry (esoteric) legacy is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-practices",
        "contains",
        "Freemasonry (esoteric) practices is a primary trailhead under Freemasonry (esoteric).",
        0.88,
        0.82
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-1",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-2",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-3",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-4",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-5",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-6",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-7",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-8",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-9",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-10",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-11",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-12",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-13",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-14",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-15",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-16",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-17",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-18",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-19",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-20",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-21",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-22",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-23",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ],
    [
        "freemasonry-esoteric",
        "freemasonry-esoteric-entry-24",
        "contains",
        "Supporting entry under Freemasonry (esoteric).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
