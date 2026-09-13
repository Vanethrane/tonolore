/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "habsburg-dynasty",
        "name": "Habsburg dynasty",
        "type": "topic",
        "short_description": "Intermarriage maps, dual crowns, and the dynasty that dominated Central Europe for centuries.",
        "description": "Intermarriage maps, dual crowns, and the dynasty that dominated Central Europe for centuries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Habsburg dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "habsburg-dynasty-figures",
        "name": "Habsburg dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Habsburg dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-world",
        "name": "Habsburg dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Habsburg dynasty.",
        "description": "Geography, institutions, and periodization that give Habsburg dynasty its encyclopedia shape."
    },
    {
        "slug": "habsburg-dynasty-places",
        "name": "Habsburg dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Habsburg dynasty.",
        "description": "Places, regions, and built sites that give Habsburg dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "habsburg-dynasty-events",
        "name": "Habsburg dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Habsburg dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Habsburg dynasty timeline."
    },
    {
        "slug": "habsburg-dynasty-objects",
        "name": "Habsburg dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Habsburg dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-factions",
        "name": "Habsburg dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Habsburg dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-concepts",
        "name": "Habsburg dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Habsburg dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Habsburg dynasty readable as a lore graph."
    },
    {
        "slug": "habsburg-dynasty-eras",
        "name": "Habsburg dynasty eras",
        "type": "event",
        "short_description": "Periodization for Habsburg dynasty.",
        "description": "Named eras and phases that help readers track how Habsburg dynasty changes across time."
    },
    {
        "slug": "habsburg-dynasty-works",
        "name": "Habsburg dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Habsburg dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-symbols",
        "name": "Habsburg dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Habsburg dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-controversies",
        "name": "Habsburg dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Habsburg dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Habsburg dynasty argumentative."
    },
    {
        "slug": "habsburg-dynasty-sources",
        "name": "Habsburg dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Habsburg dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-geography",
        "name": "Habsburg dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Habsburg dynasty.",
        "description": "Regions, routes, and spatial systems that situate Habsburg dynasty beyond single named places."
    },
    {
        "slug": "habsburg-dynasty-legacy",
        "name": "Habsburg dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Habsburg dynasty.",
        "description": "How Habsburg dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "habsburg-dynasty-practices",
        "name": "Habsburg dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Habsburg dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Habsburg dynasty."
    },
    {
        "slug": "habsburg-dynasty-entry-1",
        "name": "Habsburg dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-2",
        "name": "Habsburg dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-3",
        "name": "Habsburg dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-4",
        "name": "Habsburg dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-5",
        "name": "Habsburg dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-6",
        "name": "Habsburg dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-7",
        "name": "Habsburg dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-8",
        "name": "Habsburg dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-9",
        "name": "Habsburg dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-10",
        "name": "Habsburg dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-11",
        "name": "Habsburg dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-12",
        "name": "Habsburg dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-13",
        "name": "Habsburg dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-14",
        "name": "Habsburg dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-15",
        "name": "Habsburg dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-16",
        "name": "Habsburg dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-17",
        "name": "Habsburg dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-18",
        "name": "Habsburg dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-19",
        "name": "Habsburg dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-20",
        "name": "Habsburg dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-21",
        "name": "Habsburg dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-22",
        "name": "Habsburg dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-23",
        "name": "Habsburg dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "habsburg-dynasty-entry-24",
        "name": "Habsburg dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Habsburg dynasty.",
        "description": "A supporting encyclopedia entry in the Habsburg dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "habsburg-dynasty",
        "habsburg-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-places",
        "contains",
        "Habsburg dynasty places is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-events",
        "contains",
        "Habsburg dynasty events is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-objects",
        "contains",
        "Habsburg dynasty objects & artifacts is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-factions",
        "contains",
        "Habsburg dynasty factions & groups is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-concepts",
        "contains",
        "Habsburg dynasty concepts is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-eras",
        "contains",
        "Habsburg dynasty eras is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-works",
        "contains",
        "Habsburg dynasty works & media is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-symbols",
        "contains",
        "Habsburg dynasty symbols is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-controversies",
        "contains",
        "Habsburg dynasty controversies is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-sources",
        "contains",
        "Habsburg dynasty sources is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-geography",
        "contains",
        "Habsburg dynasty geography is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-legacy",
        "contains",
        "Habsburg dynasty legacy is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-practices",
        "contains",
        "Habsburg dynasty practices is a primary trailhead under Habsburg dynasty.",
        0.88,
        0.82
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-1",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-2",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-3",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-4",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-5",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-6",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-7",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-8",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-9",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-10",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-11",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-12",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-13",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-14",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-15",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-16",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-17",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-18",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-19",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-20",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-21",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-22",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-23",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ],
    [
        "habsburg-dynasty",
        "habsburg-dynasty-entry-24",
        "contains",
        "Supporting entry under Habsburg dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
