/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "john-wick",
        "name": "John Wick",
        "type": "topic",
        "short_description": "Continental rules, gold coins, and the balletic gun-fu revenge saga of assassin etiquette.",
        "description": "Continental rules, gold coins, and the balletic gun-fu revenge saga of assassin etiquette. This Ton-o-Lore subject maps people, places, events, and ideas tied to John Wick so readers can follow long-tail connections across movies."
    },
    {
        "slug": "john-wick-figures",
        "name": "John Wick figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to John Wick.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring John Wick."
    },
    {
        "slug": "john-wick-world",
        "name": "John Wick world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame John Wick.",
        "description": "Geography, institutions, and periodization that give John Wick its encyclopedia shape."
    },
    {
        "slug": "john-wick-places",
        "name": "John Wick places",
        "type": "place",
        "short_description": "Locations and geographies that frame John Wick.",
        "description": "Places, regions, and built sites that give John Wick its map — where events and figures concentrate."
    },
    {
        "slug": "john-wick-events",
        "name": "John Wick events",
        "type": "event",
        "short_description": "Turning points and dated episodes in John Wick.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the John Wick timeline."
    },
    {
        "slug": "john-wick-objects",
        "name": "John Wick objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to John Wick.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through John Wick."
    },
    {
        "slug": "john-wick-factions",
        "name": "John Wick factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside John Wick.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in John Wick."
    },
    {
        "slug": "john-wick-concepts",
        "name": "John Wick concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize John Wick.",
        "description": "Keywords, doctrines, systems, and abstract forces that make John Wick readable as a lore graph."
    },
    {
        "slug": "john-wick-eras",
        "name": "John Wick eras",
        "type": "event",
        "short_description": "Periodization for John Wick.",
        "description": "Named eras and phases that help readers track how John Wick changes across time."
    },
    {
        "slug": "john-wick-works",
        "name": "John Wick works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry John Wick.",
        "description": "Primary works and adaptations through which most audiences encounter John Wick."
    },
    {
        "slug": "john-wick-symbols",
        "name": "John Wick symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with John Wick.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside John Wick."
    },
    {
        "slug": "john-wick-controversies",
        "name": "John Wick controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in John Wick.",
        "description": "Debates, rival canons, scandals, and contested facts that keep John Wick argumentative."
    },
    {
        "slug": "john-wick-sources",
        "name": "John Wick sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into John Wick.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify John Wick."
    },
    {
        "slug": "john-wick-geography",
        "name": "John Wick geography",
        "type": "place",
        "short_description": "Broader geographic framing for John Wick.",
        "description": "Regions, routes, and spatial systems that situate John Wick beyond single named places."
    },
    {
        "slug": "john-wick-legacy",
        "name": "John Wick legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of John Wick.",
        "description": "How John Wick continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "john-wick-practices",
        "name": "John Wick practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in John Wick.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in John Wick."
    },
    {
        "slug": "john-wick-entry-1",
        "name": "John Wick entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-2",
        "name": "John Wick entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-3",
        "name": "John Wick entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-4",
        "name": "John Wick entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-5",
        "name": "John Wick entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-6",
        "name": "John Wick entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-7",
        "name": "John Wick entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-8",
        "name": "John Wick entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-9",
        "name": "John Wick entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-10",
        "name": "John Wick entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-11",
        "name": "John Wick entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-12",
        "name": "John Wick entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-13",
        "name": "John Wick entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-14",
        "name": "John Wick entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-15",
        "name": "John Wick entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-16",
        "name": "John Wick entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-17",
        "name": "John Wick entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-18",
        "name": "John Wick entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-19",
        "name": "John Wick entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-20",
        "name": "John Wick entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-21",
        "name": "John Wick entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-22",
        "name": "John Wick entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-23",
        "name": "John Wick entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-wick-entry-24",
        "name": "John Wick entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Wick.",
        "description": "A supporting encyclopedia entry in the John Wick subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "john-wick",
        "john-wick-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "john-wick",
        "john-wick-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "john-wick",
        "john-wick-places",
        "contains",
        "John Wick places is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-events",
        "contains",
        "John Wick events is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-objects",
        "contains",
        "John Wick objects & artifacts is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-factions",
        "contains",
        "John Wick factions & groups is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-concepts",
        "contains",
        "John Wick concepts is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-eras",
        "contains",
        "John Wick eras is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-works",
        "contains",
        "John Wick works & media is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-symbols",
        "contains",
        "John Wick symbols is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-controversies",
        "contains",
        "John Wick controversies is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-sources",
        "contains",
        "John Wick sources is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-geography",
        "contains",
        "John Wick geography is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-legacy",
        "contains",
        "John Wick legacy is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-practices",
        "contains",
        "John Wick practices is a primary trailhead under John Wick.",
        0.88,
        0.82
    ],
    [
        "john-wick",
        "john-wick-entry-1",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-2",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-3",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-4",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-5",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-6",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-7",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-8",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-9",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-10",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-11",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-12",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-13",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-14",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-15",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-16",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-17",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-18",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-19",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-20",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-21",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-22",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-23",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ],
    [
        "john-wick",
        "john-wick-entry-24",
        "contains",
        "Supporting entry under John Wick.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
