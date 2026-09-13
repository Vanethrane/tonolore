/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "runes-divination",
        "name": "Runes & divination",
        "type": "topic",
        "short_description": "Futhark symbols, casting practices, and the Norse-letter occult revival.",
        "description": "Futhark symbols, casting practices, and the Norse-letter occult revival. This Ton-o-Lore subject maps people, places, events, and ideas tied to Runes & divination so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "runes-divination-figures",
        "name": "Runes & divination figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Runes & divination.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Runes & divination."
    },
    {
        "slug": "runes-divination-world",
        "name": "Runes & divination world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Runes & divination.",
        "description": "Geography, institutions, and periodization that give Runes & divination its encyclopedia shape."
    },
    {
        "slug": "runes-divination-places",
        "name": "Runes & divination places",
        "type": "place",
        "short_description": "Locations and geographies that frame Runes & divination.",
        "description": "Places, regions, and built sites that give Runes & divination its map — where events and figures concentrate."
    },
    {
        "slug": "runes-divination-events",
        "name": "Runes & divination events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Runes & divination.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Runes & divination timeline."
    },
    {
        "slug": "runes-divination-objects",
        "name": "Runes & divination objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Runes & divination.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Runes & divination."
    },
    {
        "slug": "runes-divination-factions",
        "name": "Runes & divination factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Runes & divination.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Runes & divination."
    },
    {
        "slug": "runes-divination-concepts",
        "name": "Runes & divination concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Runes & divination.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Runes & divination readable as a lore graph."
    },
    {
        "slug": "runes-divination-eras",
        "name": "Runes & divination eras",
        "type": "event",
        "short_description": "Periodization for Runes & divination.",
        "description": "Named eras and phases that help readers track how Runes & divination changes across time."
    },
    {
        "slug": "runes-divination-works",
        "name": "Runes & divination works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Runes & divination.",
        "description": "Primary works and adaptations through which most audiences encounter Runes & divination."
    },
    {
        "slug": "runes-divination-symbols",
        "name": "Runes & divination symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Runes & divination.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Runes & divination."
    },
    {
        "slug": "runes-divination-controversies",
        "name": "Runes & divination controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Runes & divination.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Runes & divination argumentative."
    },
    {
        "slug": "runes-divination-sources",
        "name": "Runes & divination sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Runes & divination.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Runes & divination."
    },
    {
        "slug": "runes-divination-geography",
        "name": "Runes & divination geography",
        "type": "place",
        "short_description": "Broader geographic framing for Runes & divination.",
        "description": "Regions, routes, and spatial systems that situate Runes & divination beyond single named places."
    },
    {
        "slug": "runes-divination-legacy",
        "name": "Runes & divination legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Runes & divination.",
        "description": "How Runes & divination continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "runes-divination-practices",
        "name": "Runes & divination practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Runes & divination.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Runes & divination."
    },
    {
        "slug": "runes-divination-entry-1",
        "name": "Runes & divination entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-2",
        "name": "Runes & divination entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-3",
        "name": "Runes & divination entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-4",
        "name": "Runes & divination entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-5",
        "name": "Runes & divination entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-6",
        "name": "Runes & divination entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-7",
        "name": "Runes & divination entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-8",
        "name": "Runes & divination entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-9",
        "name": "Runes & divination entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-10",
        "name": "Runes & divination entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-11",
        "name": "Runes & divination entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-12",
        "name": "Runes & divination entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-13",
        "name": "Runes & divination entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-14",
        "name": "Runes & divination entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-15",
        "name": "Runes & divination entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-16",
        "name": "Runes & divination entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-17",
        "name": "Runes & divination entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-18",
        "name": "Runes & divination entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-19",
        "name": "Runes & divination entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-20",
        "name": "Runes & divination entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-21",
        "name": "Runes & divination entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-22",
        "name": "Runes & divination entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-23",
        "name": "Runes & divination entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runes-divination-entry-24",
        "name": "Runes & divination entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Runes & divination.",
        "description": "A supporting encyclopedia entry in the Runes & divination subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "runes-divination",
        "runes-divination-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "runes-divination",
        "runes-divination-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "runes-divination",
        "runes-divination-places",
        "contains",
        "Runes & divination places is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-events",
        "contains",
        "Runes & divination events is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-objects",
        "contains",
        "Runes & divination objects & artifacts is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-factions",
        "contains",
        "Runes & divination factions & groups is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-concepts",
        "contains",
        "Runes & divination concepts is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-eras",
        "contains",
        "Runes & divination eras is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-works",
        "contains",
        "Runes & divination works & media is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-symbols",
        "contains",
        "Runes & divination symbols is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-controversies",
        "contains",
        "Runes & divination controversies is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-sources",
        "contains",
        "Runes & divination sources is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-geography",
        "contains",
        "Runes & divination geography is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-legacy",
        "contains",
        "Runes & divination legacy is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-practices",
        "contains",
        "Runes & divination practices is a primary trailhead under Runes & divination.",
        0.88,
        0.82
    ],
    [
        "runes-divination",
        "runes-divination-entry-1",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-2",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-3",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-4",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-5",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-6",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-7",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-8",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-9",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-10",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-11",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-12",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-13",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-14",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-15",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-16",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-17",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-18",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-19",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-20",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-21",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-22",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-23",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ],
    [
        "runes-divination",
        "runes-divination-entry-24",
        "contains",
        "Supporting entry under Runes & divination.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
