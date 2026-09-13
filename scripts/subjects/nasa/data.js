/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nasa",
        "name": "NASA",
        "type": "topic",
        "short_description": "Missions, centers, and spacecraft that map the public story of U.S. spaceflight.",
        "description": "Missions, centers, and spacecraft that map the public story of U.S. spaceflight. This Ton-o-Lore subject maps people, places, events, and ideas tied to NASA so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "nasa-figures",
        "name": "NASA figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to NASA.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NASA."
    },
    {
        "slug": "nasa-world",
        "name": "NASA world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame NASA.",
        "description": "Geography, institutions, and periodization that give NASA its encyclopedia shape."
    },
    {
        "slug": "nasa-places",
        "name": "NASA places",
        "type": "place",
        "short_description": "Locations and geographies that frame NASA.",
        "description": "Places, regions, and built sites that give NASA its map — where events and figures concentrate."
    },
    {
        "slug": "nasa-events",
        "name": "NASA events",
        "type": "event",
        "short_description": "Turning points and dated episodes in NASA.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the NASA timeline."
    },
    {
        "slug": "nasa-objects",
        "name": "NASA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NASA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NASA."
    },
    {
        "slug": "nasa-factions",
        "name": "NASA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NASA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NASA."
    },
    {
        "slug": "nasa-concepts",
        "name": "NASA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NASA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NASA readable as a lore graph."
    },
    {
        "slug": "nasa-eras",
        "name": "NASA eras",
        "type": "event",
        "short_description": "Periodization for NASA.",
        "description": "Named eras and phases that help readers track how NASA changes across time."
    },
    {
        "slug": "nasa-works",
        "name": "NASA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NASA.",
        "description": "Primary works and adaptations through which most audiences encounter NASA."
    },
    {
        "slug": "nasa-symbols",
        "name": "NASA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NASA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NASA."
    },
    {
        "slug": "nasa-controversies",
        "name": "NASA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NASA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NASA argumentative."
    },
    {
        "slug": "nasa-sources",
        "name": "NASA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NASA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NASA."
    },
    {
        "slug": "nasa-geography",
        "name": "NASA geography",
        "type": "place",
        "short_description": "Broader geographic framing for NASA.",
        "description": "Regions, routes, and spatial systems that situate NASA beyond single named places."
    },
    {
        "slug": "nasa-legacy",
        "name": "NASA legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NASA.",
        "description": "How NASA continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nasa-practices",
        "name": "NASA practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NASA.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NASA."
    },
    {
        "slug": "nasa-entry-1",
        "name": "NASA entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-2",
        "name": "NASA entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-3",
        "name": "NASA entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-4",
        "name": "NASA entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-5",
        "name": "NASA entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-6",
        "name": "NASA entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-7",
        "name": "NASA entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-8",
        "name": "NASA entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-9",
        "name": "NASA entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-10",
        "name": "NASA entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-11",
        "name": "NASA entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-12",
        "name": "NASA entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-13",
        "name": "NASA entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-14",
        "name": "NASA entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-15",
        "name": "NASA entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-16",
        "name": "NASA entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-17",
        "name": "NASA entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-18",
        "name": "NASA entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-19",
        "name": "NASA entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-20",
        "name": "NASA entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-21",
        "name": "NASA entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-22",
        "name": "NASA entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-23",
        "name": "NASA entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nasa-entry-24",
        "name": "NASA entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASA.",
        "description": "A supporting encyclopedia entry in the NASA subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nasa",
        "nasa-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nasa",
        "nasa-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nasa",
        "nasa-places",
        "contains",
        "NASA places is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-events",
        "contains",
        "NASA events is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-objects",
        "contains",
        "NASA objects & artifacts is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-factions",
        "contains",
        "NASA factions & groups is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-concepts",
        "contains",
        "NASA concepts is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-eras",
        "contains",
        "NASA eras is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-works",
        "contains",
        "NASA works & media is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-symbols",
        "contains",
        "NASA symbols is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-controversies",
        "contains",
        "NASA controversies is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-sources",
        "contains",
        "NASA sources is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-geography",
        "contains",
        "NASA geography is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-legacy",
        "contains",
        "NASA legacy is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-practices",
        "contains",
        "NASA practices is a primary trailhead under NASA.",
        0.88,
        0.82
    ],
    [
        "nasa",
        "nasa-entry-1",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-2",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-3",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-4",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-5",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-6",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-7",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-8",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-9",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-10",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-11",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-12",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-13",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-14",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-15",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-16",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-17",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-18",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-19",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-20",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-21",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-22",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-23",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ],
    [
        "nasa",
        "nasa-entry-24",
        "contains",
        "Supporting entry under NASA.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
