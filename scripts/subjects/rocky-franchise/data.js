/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rocky-franchise",
        "name": "Rocky",
        "type": "topic",
        "short_description": "Philadelphia underdog boxing, training montages, and the Creed-linked sports drama dynasty.",
        "description": "Philadelphia underdog boxing, training montages, and the Creed-linked sports drama dynasty. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rocky so readers can follow long-tail connections across movies."
    },
    {
        "slug": "rocky-franchise-figures",
        "name": "Rocky figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rocky.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rocky."
    },
    {
        "slug": "rocky-franchise-world",
        "name": "Rocky world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rocky.",
        "description": "Geography, institutions, and periodization that give Rocky its encyclopedia shape."
    },
    {
        "slug": "rocky-franchise-places",
        "name": "Rocky places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rocky.",
        "description": "Places, regions, and built sites that give Rocky its map — where events and figures concentrate."
    },
    {
        "slug": "rocky-franchise-events",
        "name": "Rocky events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rocky.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rocky timeline."
    },
    {
        "slug": "rocky-franchise-objects",
        "name": "Rocky objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rocky.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rocky."
    },
    {
        "slug": "rocky-franchise-factions",
        "name": "Rocky factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rocky.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rocky."
    },
    {
        "slug": "rocky-franchise-concepts",
        "name": "Rocky concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rocky.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rocky readable as a lore graph."
    },
    {
        "slug": "rocky-franchise-eras",
        "name": "Rocky eras",
        "type": "event",
        "short_description": "Periodization for Rocky.",
        "description": "Named eras and phases that help readers track how Rocky changes across time."
    },
    {
        "slug": "rocky-franchise-works",
        "name": "Rocky works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rocky.",
        "description": "Primary works and adaptations through which most audiences encounter Rocky."
    },
    {
        "slug": "rocky-franchise-symbols",
        "name": "Rocky symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rocky.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rocky."
    },
    {
        "slug": "rocky-franchise-controversies",
        "name": "Rocky controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rocky.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rocky argumentative."
    },
    {
        "slug": "rocky-franchise-sources",
        "name": "Rocky sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rocky.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rocky."
    },
    {
        "slug": "rocky-franchise-geography",
        "name": "Rocky geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rocky.",
        "description": "Regions, routes, and spatial systems that situate Rocky beyond single named places."
    },
    {
        "slug": "rocky-franchise-legacy",
        "name": "Rocky legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rocky.",
        "description": "How Rocky continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "rocky-franchise-practices",
        "name": "Rocky practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Rocky.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Rocky."
    },
    {
        "slug": "rocky-franchise-entry-1",
        "name": "Rocky entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-2",
        "name": "Rocky entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-3",
        "name": "Rocky entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-4",
        "name": "Rocky entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-5",
        "name": "Rocky entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-6",
        "name": "Rocky entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-7",
        "name": "Rocky entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-8",
        "name": "Rocky entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-9",
        "name": "Rocky entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-10",
        "name": "Rocky entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-11",
        "name": "Rocky entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-12",
        "name": "Rocky entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-13",
        "name": "Rocky entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-14",
        "name": "Rocky entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-15",
        "name": "Rocky entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-16",
        "name": "Rocky entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-17",
        "name": "Rocky entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-18",
        "name": "Rocky entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-19",
        "name": "Rocky entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-20",
        "name": "Rocky entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-21",
        "name": "Rocky entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-22",
        "name": "Rocky entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-23",
        "name": "Rocky entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rocky-franchise-entry-24",
        "name": "Rocky entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rocky.",
        "description": "A supporting encyclopedia entry in the Rocky subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "rocky-franchise",
        "rocky-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rocky-franchise",
        "rocky-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rocky-franchise",
        "rocky-franchise-places",
        "contains",
        "Rocky places is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-events",
        "contains",
        "Rocky events is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-objects",
        "contains",
        "Rocky objects & artifacts is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-factions",
        "contains",
        "Rocky factions & groups is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-concepts",
        "contains",
        "Rocky concepts is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-eras",
        "contains",
        "Rocky eras is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-works",
        "contains",
        "Rocky works & media is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-symbols",
        "contains",
        "Rocky symbols is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-controversies",
        "contains",
        "Rocky controversies is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-sources",
        "contains",
        "Rocky sources is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-geography",
        "contains",
        "Rocky geography is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-legacy",
        "contains",
        "Rocky legacy is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-practices",
        "contains",
        "Rocky practices is a primary trailhead under Rocky.",
        0.88,
        0.82
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-1",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-2",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-3",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-4",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-5",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-6",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-7",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-8",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-9",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-10",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-11",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-12",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-13",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-14",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-15",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-16",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-17",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-18",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-19",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-20",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-21",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-22",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-23",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ],
    [
        "rocky-franchise",
        "rocky-franchise-entry-24",
        "contains",
        "Supporting entry under Rocky.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
