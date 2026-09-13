/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "king-midas",
        "name": "King Midas",
        "type": "topic",
        "short_description": "Golden touch, tragic wish, and the Phrygian king whose greed became proverb.",
        "description": "Golden touch, tragic wish, and the Phrygian king whose greed became proverb. This Ton-o-Lore subject maps people, places, events, and ideas tied to King Midas so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "king-midas-figures",
        "name": "King Midas figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to King Midas.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring King Midas."
    },
    {
        "slug": "king-midas-world",
        "name": "King Midas world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame King Midas.",
        "description": "Geography, institutions, and periodization that give King Midas its encyclopedia shape."
    },
    {
        "slug": "king-midas-places",
        "name": "King Midas places",
        "type": "place",
        "short_description": "Locations and geographies that frame King Midas.",
        "description": "Places, regions, and built sites that give King Midas its map — where events and figures concentrate."
    },
    {
        "slug": "king-midas-events",
        "name": "King Midas events",
        "type": "event",
        "short_description": "Turning points and dated episodes in King Midas.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the King Midas timeline."
    },
    {
        "slug": "king-midas-objects",
        "name": "King Midas objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to King Midas.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through King Midas."
    },
    {
        "slug": "king-midas-factions",
        "name": "King Midas factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside King Midas.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in King Midas."
    },
    {
        "slug": "king-midas-concepts",
        "name": "King Midas concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize King Midas.",
        "description": "Keywords, doctrines, systems, and abstract forces that make King Midas readable as a lore graph."
    },
    {
        "slug": "king-midas-eras",
        "name": "King Midas eras",
        "type": "event",
        "short_description": "Periodization for King Midas.",
        "description": "Named eras and phases that help readers track how King Midas changes across time."
    },
    {
        "slug": "king-midas-works",
        "name": "King Midas works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry King Midas.",
        "description": "Primary works and adaptations through which most audiences encounter King Midas."
    },
    {
        "slug": "king-midas-symbols",
        "name": "King Midas symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with King Midas.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside King Midas."
    },
    {
        "slug": "king-midas-controversies",
        "name": "King Midas controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in King Midas.",
        "description": "Debates, rival canons, scandals, and contested facts that keep King Midas argumentative."
    },
    {
        "slug": "king-midas-sources",
        "name": "King Midas sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into King Midas.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify King Midas."
    },
    {
        "slug": "king-midas-geography",
        "name": "King Midas geography",
        "type": "place",
        "short_description": "Broader geographic framing for King Midas.",
        "description": "Regions, routes, and spatial systems that situate King Midas beyond single named places."
    },
    {
        "slug": "king-midas-legacy",
        "name": "King Midas legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of King Midas.",
        "description": "How King Midas continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "king-midas-practices",
        "name": "King Midas practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in King Midas.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in King Midas."
    },
    {
        "slug": "king-midas-entry-1",
        "name": "King Midas entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-2",
        "name": "King Midas entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-3",
        "name": "King Midas entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-4",
        "name": "King Midas entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-5",
        "name": "King Midas entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-6",
        "name": "King Midas entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-7",
        "name": "King Midas entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-8",
        "name": "King Midas entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-9",
        "name": "King Midas entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-10",
        "name": "King Midas entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-11",
        "name": "King Midas entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-12",
        "name": "King Midas entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-13",
        "name": "King Midas entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-14",
        "name": "King Midas entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-15",
        "name": "King Midas entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-16",
        "name": "King Midas entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-17",
        "name": "King Midas entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-18",
        "name": "King Midas entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-19",
        "name": "King Midas entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-20",
        "name": "King Midas entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-21",
        "name": "King Midas entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-22",
        "name": "King Midas entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-23",
        "name": "King Midas entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-midas-entry-24",
        "name": "King Midas entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside King Midas.",
        "description": "A supporting encyclopedia entry in the King Midas subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "king-midas",
        "king-midas-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "king-midas",
        "king-midas-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "king-midas",
        "king-midas-places",
        "contains",
        "King Midas places is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-events",
        "contains",
        "King Midas events is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-objects",
        "contains",
        "King Midas objects & artifacts is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-factions",
        "contains",
        "King Midas factions & groups is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-concepts",
        "contains",
        "King Midas concepts is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-eras",
        "contains",
        "King Midas eras is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-works",
        "contains",
        "King Midas works & media is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-symbols",
        "contains",
        "King Midas symbols is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-controversies",
        "contains",
        "King Midas controversies is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-sources",
        "contains",
        "King Midas sources is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-geography",
        "contains",
        "King Midas geography is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-legacy",
        "contains",
        "King Midas legacy is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-practices",
        "contains",
        "King Midas practices is a primary trailhead under King Midas.",
        0.88,
        0.82
    ],
    [
        "king-midas",
        "king-midas-entry-1",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-2",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-3",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-4",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-5",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-6",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-7",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-8",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-9",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-10",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-11",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-12",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-13",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-14",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-15",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-16",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-17",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-18",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-19",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-20",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-21",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-22",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-23",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ],
    [
        "king-midas",
        "king-midas-entry-24",
        "contains",
        "Supporting entry under King Midas.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
