/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hurricane-sandy",
        "name": "Hurricane Sandy",
        "type": "topic",
        "short_description": "2012 Superstorm, NYC subway floods, and the climate-era coastal disaster.",
        "description": "2012 Superstorm, NYC subway floods, and the climate-era coastal disaster. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hurricane Sandy so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "hurricane-sandy-figures",
        "name": "Hurricane Sandy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hurricane Sandy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-world",
        "name": "Hurricane Sandy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hurricane Sandy.",
        "description": "Geography, institutions, and periodization that give Hurricane Sandy its encyclopedia shape."
    },
    {
        "slug": "hurricane-sandy-places",
        "name": "Hurricane Sandy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hurricane Sandy.",
        "description": "Places, regions, and built sites that give Hurricane Sandy its map — where events and figures concentrate."
    },
    {
        "slug": "hurricane-sandy-events",
        "name": "Hurricane Sandy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hurricane Sandy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hurricane Sandy timeline."
    },
    {
        "slug": "hurricane-sandy-objects",
        "name": "Hurricane Sandy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hurricane Sandy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-factions",
        "name": "Hurricane Sandy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hurricane Sandy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-concepts",
        "name": "Hurricane Sandy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hurricane Sandy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hurricane Sandy readable as a lore graph."
    },
    {
        "slug": "hurricane-sandy-eras",
        "name": "Hurricane Sandy eras",
        "type": "event",
        "short_description": "Periodization for Hurricane Sandy.",
        "description": "Named eras and phases that help readers track how Hurricane Sandy changes across time."
    },
    {
        "slug": "hurricane-sandy-works",
        "name": "Hurricane Sandy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hurricane Sandy.",
        "description": "Primary works and adaptations through which most audiences encounter Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-symbols",
        "name": "Hurricane Sandy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hurricane Sandy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-controversies",
        "name": "Hurricane Sandy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hurricane Sandy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hurricane Sandy argumentative."
    },
    {
        "slug": "hurricane-sandy-sources",
        "name": "Hurricane Sandy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hurricane Sandy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-geography",
        "name": "Hurricane Sandy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hurricane Sandy.",
        "description": "Regions, routes, and spatial systems that situate Hurricane Sandy beyond single named places."
    },
    {
        "slug": "hurricane-sandy-legacy",
        "name": "Hurricane Sandy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hurricane Sandy.",
        "description": "How Hurricane Sandy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hurricane-sandy-practices",
        "name": "Hurricane Sandy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hurricane Sandy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hurricane Sandy."
    },
    {
        "slug": "hurricane-sandy-entry-1",
        "name": "Hurricane Sandy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-2",
        "name": "Hurricane Sandy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-3",
        "name": "Hurricane Sandy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-4",
        "name": "Hurricane Sandy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-5",
        "name": "Hurricane Sandy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-6",
        "name": "Hurricane Sandy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-7",
        "name": "Hurricane Sandy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-8",
        "name": "Hurricane Sandy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-9",
        "name": "Hurricane Sandy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-10",
        "name": "Hurricane Sandy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-11",
        "name": "Hurricane Sandy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-12",
        "name": "Hurricane Sandy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-13",
        "name": "Hurricane Sandy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-14",
        "name": "Hurricane Sandy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-15",
        "name": "Hurricane Sandy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-16",
        "name": "Hurricane Sandy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-17",
        "name": "Hurricane Sandy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-18",
        "name": "Hurricane Sandy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-19",
        "name": "Hurricane Sandy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-20",
        "name": "Hurricane Sandy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-21",
        "name": "Hurricane Sandy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-22",
        "name": "Hurricane Sandy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-23",
        "name": "Hurricane Sandy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hurricane-sandy-entry-24",
        "name": "Hurricane Sandy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hurricane Sandy.",
        "description": "A supporting encyclopedia entry in the Hurricane Sandy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hurricane-sandy",
        "hurricane-sandy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-places",
        "contains",
        "Hurricane Sandy places is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-events",
        "contains",
        "Hurricane Sandy events is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-objects",
        "contains",
        "Hurricane Sandy objects & artifacts is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-factions",
        "contains",
        "Hurricane Sandy factions & groups is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-concepts",
        "contains",
        "Hurricane Sandy concepts is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-eras",
        "contains",
        "Hurricane Sandy eras is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-works",
        "contains",
        "Hurricane Sandy works & media is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-symbols",
        "contains",
        "Hurricane Sandy symbols is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-controversies",
        "contains",
        "Hurricane Sandy controversies is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-sources",
        "contains",
        "Hurricane Sandy sources is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-geography",
        "contains",
        "Hurricane Sandy geography is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-legacy",
        "contains",
        "Hurricane Sandy legacy is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-practices",
        "contains",
        "Hurricane Sandy practices is a primary trailhead under Hurricane Sandy.",
        0.88,
        0.82
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-1",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-2",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-3",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-4",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-5",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-6",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-7",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-8",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-9",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-10",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-11",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-12",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-13",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-14",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-15",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-16",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-17",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-18",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-19",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-20",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-21",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-22",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-23",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ],
    [
        "hurricane-sandy",
        "hurricane-sandy-entry-24",
        "contains",
        "Supporting entry under Hurricane Sandy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
