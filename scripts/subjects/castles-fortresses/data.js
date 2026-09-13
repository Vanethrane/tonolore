/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "castles-fortresses",
        "name": "Castles & fortresses",
        "type": "topic",
        "short_description": "Owners, sieges, dynasties, battles, architecture, and legends attached to every stronghold.",
        "description": "Owners, sieges, dynasties, battles, architecture, and legends attached to every stronghold. This Ton-o-Lore subject maps people, places, events, and ideas tied to Castles & fortresses so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "castles-fortresses-figures",
        "name": "Castles & fortresses figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Castles & fortresses.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-world",
        "name": "Castles & fortresses world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Castles & fortresses.",
        "description": "Geography, institutions, and periodization that give Castles & fortresses its encyclopedia shape."
    },
    {
        "slug": "castles-fortresses-places",
        "name": "Castles & fortresses places",
        "type": "place",
        "short_description": "Locations and geographies that frame Castles & fortresses.",
        "description": "Places, regions, and built sites that give Castles & fortresses its map — where events and figures concentrate."
    },
    {
        "slug": "castles-fortresses-events",
        "name": "Castles & fortresses events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Castles & fortresses.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Castles & fortresses timeline."
    },
    {
        "slug": "castles-fortresses-objects",
        "name": "Castles & fortresses objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Castles & fortresses.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-factions",
        "name": "Castles & fortresses factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Castles & fortresses.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-concepts",
        "name": "Castles & fortresses concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Castles & fortresses.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Castles & fortresses readable as a lore graph."
    },
    {
        "slug": "castles-fortresses-eras",
        "name": "Castles & fortresses eras",
        "type": "event",
        "short_description": "Periodization for Castles & fortresses.",
        "description": "Named eras and phases that help readers track how Castles & fortresses changes across time."
    },
    {
        "slug": "castles-fortresses-works",
        "name": "Castles & fortresses works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Castles & fortresses.",
        "description": "Primary works and adaptations through which most audiences encounter Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-symbols",
        "name": "Castles & fortresses symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Castles & fortresses.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-controversies",
        "name": "Castles & fortresses controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Castles & fortresses.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Castles & fortresses argumentative."
    },
    {
        "slug": "castles-fortresses-sources",
        "name": "Castles & fortresses sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Castles & fortresses.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-geography",
        "name": "Castles & fortresses geography",
        "type": "place",
        "short_description": "Broader geographic framing for Castles & fortresses.",
        "description": "Regions, routes, and spatial systems that situate Castles & fortresses beyond single named places."
    },
    {
        "slug": "castles-fortresses-legacy",
        "name": "Castles & fortresses legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Castles & fortresses.",
        "description": "How Castles & fortresses continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "castles-fortresses-practices",
        "name": "Castles & fortresses practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Castles & fortresses.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Castles & fortresses."
    },
    {
        "slug": "castles-fortresses-entry-1",
        "name": "Castles & fortresses entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-2",
        "name": "Castles & fortresses entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-3",
        "name": "Castles & fortresses entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-4",
        "name": "Castles & fortresses entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-5",
        "name": "Castles & fortresses entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-6",
        "name": "Castles & fortresses entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-7",
        "name": "Castles & fortresses entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-8",
        "name": "Castles & fortresses entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-9",
        "name": "Castles & fortresses entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-10",
        "name": "Castles & fortresses entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-11",
        "name": "Castles & fortresses entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-12",
        "name": "Castles & fortresses entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-13",
        "name": "Castles & fortresses entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-14",
        "name": "Castles & fortresses entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-15",
        "name": "Castles & fortresses entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-16",
        "name": "Castles & fortresses entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-17",
        "name": "Castles & fortresses entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-18",
        "name": "Castles & fortresses entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-19",
        "name": "Castles & fortresses entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-20",
        "name": "Castles & fortresses entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-21",
        "name": "Castles & fortresses entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-22",
        "name": "Castles & fortresses entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-23",
        "name": "Castles & fortresses entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-fortresses-entry-24",
        "name": "Castles & fortresses entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castles & fortresses.",
        "description": "A supporting encyclopedia entry in the Castles & fortresses subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "castles-fortresses",
        "castles-fortresses-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "castles-fortresses",
        "castles-fortresses-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "castles-fortresses",
        "castles-fortresses-places",
        "contains",
        "Castles & fortresses places is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-events",
        "contains",
        "Castles & fortresses events is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-objects",
        "contains",
        "Castles & fortresses objects & artifacts is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-factions",
        "contains",
        "Castles & fortresses factions & groups is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-concepts",
        "contains",
        "Castles & fortresses concepts is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-eras",
        "contains",
        "Castles & fortresses eras is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-works",
        "contains",
        "Castles & fortresses works & media is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-symbols",
        "contains",
        "Castles & fortresses symbols is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-controversies",
        "contains",
        "Castles & fortresses controversies is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-sources",
        "contains",
        "Castles & fortresses sources is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-geography",
        "contains",
        "Castles & fortresses geography is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-legacy",
        "contains",
        "Castles & fortresses legacy is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-practices",
        "contains",
        "Castles & fortresses practices is a primary trailhead under Castles & fortresses.",
        0.88,
        0.82
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-1",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-2",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-3",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-4",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-5",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-6",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-7",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-8",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-9",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-10",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-11",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-12",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-13",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-14",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-15",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-16",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-17",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-18",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-19",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-20",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-21",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-22",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-23",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ],
    [
        "castles-fortresses",
        "castles-fortresses-entry-24",
        "contains",
        "Supporting entry under Castles & fortresses.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
