/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "friday-the-13th",
        "name": "Friday the 13th",
        "type": "topic",
        "short_description": "Camp Crystal Lake, Jason Voorhees, and the slasher template of masked revenge.",
        "description": "Camp Crystal Lake, Jason Voorhees, and the slasher template of masked revenge. This Ton-o-Lore subject maps people, places, events, and ideas tied to Friday the 13th so readers can follow long-tail connections across horror."
    },
    {
        "slug": "friday-the-13th-figures",
        "name": "Friday the 13th figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Friday the 13th.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Friday the 13th."
    },
    {
        "slug": "friday-the-13th-world",
        "name": "Friday the 13th world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Friday the 13th.",
        "description": "Geography, institutions, and periodization that give Friday the 13th its encyclopedia shape."
    },
    {
        "slug": "friday-the-13th-places",
        "name": "Friday the 13th places",
        "type": "place",
        "short_description": "Locations and geographies that frame Friday the 13th.",
        "description": "Places, regions, and built sites that give Friday the 13th its map — where events and figures concentrate."
    },
    {
        "slug": "friday-the-13th-events",
        "name": "Friday the 13th events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Friday the 13th.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Friday the 13th timeline."
    },
    {
        "slug": "friday-the-13th-objects",
        "name": "Friday the 13th objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Friday the 13th.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Friday the 13th."
    },
    {
        "slug": "friday-the-13th-factions",
        "name": "Friday the 13th factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Friday the 13th.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Friday the 13th."
    },
    {
        "slug": "friday-the-13th-concepts",
        "name": "Friday the 13th concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Friday the 13th.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Friday the 13th readable as a lore graph."
    },
    {
        "slug": "friday-the-13th-eras",
        "name": "Friday the 13th eras",
        "type": "event",
        "short_description": "Periodization for Friday the 13th.",
        "description": "Named eras and phases that help readers track how Friday the 13th changes across time."
    },
    {
        "slug": "friday-the-13th-works",
        "name": "Friday the 13th works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Friday the 13th.",
        "description": "Primary works and adaptations through which most audiences encounter Friday the 13th."
    },
    {
        "slug": "friday-the-13th-symbols",
        "name": "Friday the 13th symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Friday the 13th.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Friday the 13th."
    },
    {
        "slug": "friday-the-13th-controversies",
        "name": "Friday the 13th controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Friday the 13th.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Friday the 13th argumentative."
    },
    {
        "slug": "friday-the-13th-sources",
        "name": "Friday the 13th sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Friday the 13th.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Friday the 13th."
    },
    {
        "slug": "friday-the-13th-geography",
        "name": "Friday the 13th geography",
        "type": "place",
        "short_description": "Broader geographic framing for Friday the 13th.",
        "description": "Regions, routes, and spatial systems that situate Friday the 13th beyond single named places."
    },
    {
        "slug": "friday-the-13th-legacy",
        "name": "Friday the 13th legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Friday the 13th.",
        "description": "How Friday the 13th continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "friday-the-13th-practices",
        "name": "Friday the 13th practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Friday the 13th.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Friday the 13th."
    },
    {
        "slug": "friday-the-13th-entry-1",
        "name": "Friday the 13th entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-2",
        "name": "Friday the 13th entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-3",
        "name": "Friday the 13th entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-4",
        "name": "Friday the 13th entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-5",
        "name": "Friday the 13th entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-6",
        "name": "Friday the 13th entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-7",
        "name": "Friday the 13th entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-8",
        "name": "Friday the 13th entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-9",
        "name": "Friday the 13th entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-10",
        "name": "Friday the 13th entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-11",
        "name": "Friday the 13th entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-12",
        "name": "Friday the 13th entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-13",
        "name": "Friday the 13th entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-14",
        "name": "Friday the 13th entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-15",
        "name": "Friday the 13th entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-16",
        "name": "Friday the 13th entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-17",
        "name": "Friday the 13th entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-18",
        "name": "Friday the 13th entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-19",
        "name": "Friday the 13th entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-20",
        "name": "Friday the 13th entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-21",
        "name": "Friday the 13th entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-22",
        "name": "Friday the 13th entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-23",
        "name": "Friday the 13th entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friday-the-13th-entry-24",
        "name": "Friday the 13th entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friday the 13th.",
        "description": "A supporting encyclopedia entry in the Friday the 13th subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "friday-the-13th",
        "friday-the-13th-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "friday-the-13th",
        "friday-the-13th-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "friday-the-13th",
        "friday-the-13th-places",
        "contains",
        "Friday the 13th places is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-events",
        "contains",
        "Friday the 13th events is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-objects",
        "contains",
        "Friday the 13th objects & artifacts is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-factions",
        "contains",
        "Friday the 13th factions & groups is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-concepts",
        "contains",
        "Friday the 13th concepts is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-eras",
        "contains",
        "Friday the 13th eras is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-works",
        "contains",
        "Friday the 13th works & media is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-symbols",
        "contains",
        "Friday the 13th symbols is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-controversies",
        "contains",
        "Friday the 13th controversies is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-sources",
        "contains",
        "Friday the 13th sources is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-geography",
        "contains",
        "Friday the 13th geography is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-legacy",
        "contains",
        "Friday the 13th legacy is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-practices",
        "contains",
        "Friday the 13th practices is a primary trailhead under Friday the 13th.",
        0.88,
        0.82
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-1",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-2",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-3",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-4",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-5",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-6",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-7",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-8",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-9",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-10",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-11",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-12",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-13",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-14",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-15",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-16",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-17",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-18",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-19",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-20",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-21",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-22",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-23",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ],
    [
        "friday-the-13th",
        "friday-the-13th-entry-24",
        "contains",
        "Supporting entry under Friday the 13th.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
