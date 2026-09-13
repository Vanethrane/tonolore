/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wednesday-series",
        "name": "Wednesday",
        "type": "topic",
        "short_description": "Addams daughter detective vibes, Nevermore Academy, and the goth teen hit of streaming.",
        "description": "Addams daughter detective vibes, Nevermore Academy, and the goth teen hit of streaming. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wednesday so readers can follow long-tail connections across television."
    },
    {
        "slug": "wednesday-series-figures",
        "name": "Wednesday figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wednesday.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wednesday."
    },
    {
        "slug": "wednesday-series-world",
        "name": "Wednesday world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wednesday.",
        "description": "Geography, institutions, and periodization that give Wednesday its encyclopedia shape."
    },
    {
        "slug": "wednesday-series-places",
        "name": "Wednesday places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wednesday.",
        "description": "Places, regions, and built sites that give Wednesday its map — where events and figures concentrate."
    },
    {
        "slug": "wednesday-series-events",
        "name": "Wednesday events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wednesday.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wednesday timeline."
    },
    {
        "slug": "wednesday-series-objects",
        "name": "Wednesday objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wednesday.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wednesday."
    },
    {
        "slug": "wednesday-series-factions",
        "name": "Wednesday factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wednesday.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wednesday."
    },
    {
        "slug": "wednesday-series-concepts",
        "name": "Wednesday concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wednesday.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wednesday readable as a lore graph."
    },
    {
        "slug": "wednesday-series-eras",
        "name": "Wednesday eras",
        "type": "event",
        "short_description": "Periodization for Wednesday.",
        "description": "Named eras and phases that help readers track how Wednesday changes across time."
    },
    {
        "slug": "wednesday-series-works",
        "name": "Wednesday works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wednesday.",
        "description": "Primary works and adaptations through which most audiences encounter Wednesday."
    },
    {
        "slug": "wednesday-series-symbols",
        "name": "Wednesday symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wednesday.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wednesday."
    },
    {
        "slug": "wednesday-series-controversies",
        "name": "Wednesday controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wednesday.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wednesday argumentative."
    },
    {
        "slug": "wednesday-series-sources",
        "name": "Wednesday sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wednesday.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wednesday."
    },
    {
        "slug": "wednesday-series-geography",
        "name": "Wednesday geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wednesday.",
        "description": "Regions, routes, and spatial systems that situate Wednesday beyond single named places."
    },
    {
        "slug": "wednesday-series-legacy",
        "name": "Wednesday legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wednesday.",
        "description": "How Wednesday continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wednesday-series-practices",
        "name": "Wednesday practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wednesday.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wednesday."
    },
    {
        "slug": "wednesday-series-entry-1",
        "name": "Wednesday entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-2",
        "name": "Wednesday entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-3",
        "name": "Wednesday entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-4",
        "name": "Wednesday entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-5",
        "name": "Wednesday entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-6",
        "name": "Wednesday entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-7",
        "name": "Wednesday entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-8",
        "name": "Wednesday entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-9",
        "name": "Wednesday entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-10",
        "name": "Wednesday entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-11",
        "name": "Wednesday entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-12",
        "name": "Wednesday entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-13",
        "name": "Wednesday entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-14",
        "name": "Wednesday entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-15",
        "name": "Wednesday entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-16",
        "name": "Wednesday entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-17",
        "name": "Wednesday entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-18",
        "name": "Wednesday entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-19",
        "name": "Wednesday entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-20",
        "name": "Wednesday entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-21",
        "name": "Wednesday entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-22",
        "name": "Wednesday entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-23",
        "name": "Wednesday entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wednesday-series-entry-24",
        "name": "Wednesday entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wednesday.",
        "description": "A supporting encyclopedia entry in the Wednesday subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wednesday-series",
        "wednesday-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wednesday-series",
        "wednesday-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wednesday-series",
        "wednesday-series-places",
        "contains",
        "Wednesday places is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-events",
        "contains",
        "Wednesday events is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-objects",
        "contains",
        "Wednesday objects & artifacts is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-factions",
        "contains",
        "Wednesday factions & groups is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-concepts",
        "contains",
        "Wednesday concepts is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-eras",
        "contains",
        "Wednesday eras is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-works",
        "contains",
        "Wednesday works & media is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-symbols",
        "contains",
        "Wednesday symbols is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-controversies",
        "contains",
        "Wednesday controversies is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-sources",
        "contains",
        "Wednesday sources is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-geography",
        "contains",
        "Wednesday geography is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-legacy",
        "contains",
        "Wednesday legacy is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-practices",
        "contains",
        "Wednesday practices is a primary trailhead under Wednesday.",
        0.88,
        0.82
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-1",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-2",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-3",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-4",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-5",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-6",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-7",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-8",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-9",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-10",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-11",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-12",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-13",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-14",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-15",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-16",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-17",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-18",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-19",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-20",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-21",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-22",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-23",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ],
    [
        "wednesday-series",
        "wednesday-series-entry-24",
        "contains",
        "Supporting entry under Wednesday.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
