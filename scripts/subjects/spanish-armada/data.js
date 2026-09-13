/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spanish-armada",
        "name": "Spanish Armada",
        "type": "topic",
        "short_description": "1588 fleet, English fireships, and the failed invasion that became Protestant legend.",
        "description": "1588 fleet, English fireships, and the failed invasion that became Protestant legend. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spanish Armada so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "spanish-armada-figures",
        "name": "Spanish Armada figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spanish Armada.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spanish Armada."
    },
    {
        "slug": "spanish-armada-world",
        "name": "Spanish Armada world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spanish Armada.",
        "description": "Geography, institutions, and periodization that give Spanish Armada its encyclopedia shape."
    },
    {
        "slug": "spanish-armada-places",
        "name": "Spanish Armada places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spanish Armada.",
        "description": "Places, regions, and built sites that give Spanish Armada its map — where events and figures concentrate."
    },
    {
        "slug": "spanish-armada-events",
        "name": "Spanish Armada events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spanish Armada.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spanish Armada timeline."
    },
    {
        "slug": "spanish-armada-objects",
        "name": "Spanish Armada objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spanish Armada.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spanish Armada."
    },
    {
        "slug": "spanish-armada-factions",
        "name": "Spanish Armada factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spanish Armada.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spanish Armada."
    },
    {
        "slug": "spanish-armada-concepts",
        "name": "Spanish Armada concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spanish Armada.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spanish Armada readable as a lore graph."
    },
    {
        "slug": "spanish-armada-eras",
        "name": "Spanish Armada eras",
        "type": "event",
        "short_description": "Periodization for Spanish Armada.",
        "description": "Named eras and phases that help readers track how Spanish Armada changes across time."
    },
    {
        "slug": "spanish-armada-works",
        "name": "Spanish Armada works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spanish Armada.",
        "description": "Primary works and adaptations through which most audiences encounter Spanish Armada."
    },
    {
        "slug": "spanish-armada-symbols",
        "name": "Spanish Armada symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spanish Armada.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spanish Armada."
    },
    {
        "slug": "spanish-armada-controversies",
        "name": "Spanish Armada controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spanish Armada.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spanish Armada argumentative."
    },
    {
        "slug": "spanish-armada-sources",
        "name": "Spanish Armada sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spanish Armada.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spanish Armada."
    },
    {
        "slug": "spanish-armada-geography",
        "name": "Spanish Armada geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spanish Armada.",
        "description": "Regions, routes, and spatial systems that situate Spanish Armada beyond single named places."
    },
    {
        "slug": "spanish-armada-legacy",
        "name": "Spanish Armada legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spanish Armada.",
        "description": "How Spanish Armada continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spanish-armada-practices",
        "name": "Spanish Armada practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spanish Armada.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spanish Armada."
    },
    {
        "slug": "spanish-armada-entry-1",
        "name": "Spanish Armada entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-2",
        "name": "Spanish Armada entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-3",
        "name": "Spanish Armada entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-4",
        "name": "Spanish Armada entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-5",
        "name": "Spanish Armada entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-6",
        "name": "Spanish Armada entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-7",
        "name": "Spanish Armada entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-8",
        "name": "Spanish Armada entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-9",
        "name": "Spanish Armada entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-10",
        "name": "Spanish Armada entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-11",
        "name": "Spanish Armada entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-12",
        "name": "Spanish Armada entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-13",
        "name": "Spanish Armada entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-14",
        "name": "Spanish Armada entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-15",
        "name": "Spanish Armada entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-16",
        "name": "Spanish Armada entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-17",
        "name": "Spanish Armada entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-18",
        "name": "Spanish Armada entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-19",
        "name": "Spanish Armada entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-20",
        "name": "Spanish Armada entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-21",
        "name": "Spanish Armada entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-22",
        "name": "Spanish Armada entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-23",
        "name": "Spanish Armada entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-armada-entry-24",
        "name": "Spanish Armada entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Armada.",
        "description": "A supporting encyclopedia entry in the Spanish Armada subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spanish-armada",
        "spanish-armada-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spanish-armada",
        "spanish-armada-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spanish-armada",
        "spanish-armada-places",
        "contains",
        "Spanish Armada places is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-events",
        "contains",
        "Spanish Armada events is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-objects",
        "contains",
        "Spanish Armada objects & artifacts is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-factions",
        "contains",
        "Spanish Armada factions & groups is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-concepts",
        "contains",
        "Spanish Armada concepts is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-eras",
        "contains",
        "Spanish Armada eras is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-works",
        "contains",
        "Spanish Armada works & media is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-symbols",
        "contains",
        "Spanish Armada symbols is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-controversies",
        "contains",
        "Spanish Armada controversies is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-sources",
        "contains",
        "Spanish Armada sources is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-geography",
        "contains",
        "Spanish Armada geography is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-legacy",
        "contains",
        "Spanish Armada legacy is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-practices",
        "contains",
        "Spanish Armada practices is a primary trailhead under Spanish Armada.",
        0.88,
        0.82
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-1",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-2",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-3",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-4",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-5",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-6",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-7",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-8",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-9",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-10",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-11",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-12",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-13",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-14",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-15",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-16",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-17",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-18",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-19",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-20",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-21",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-22",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-23",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ],
    [
        "spanish-armada",
        "spanish-armada-entry-24",
        "contains",
        "Supporting entry under Spanish Armada.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
