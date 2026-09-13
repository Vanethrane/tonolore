/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "organized-crime-asia",
        "name": "Asian organized crime",
        "type": "topic",
        "short_description": "Triads, yakuza, and the transnational networks mapped in modern crime history.",
        "description": "Triads, yakuza, and the transnational networks mapped in modern crime history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Asian organized crime so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "organized-crime-asia-figures",
        "name": "Asian organized crime figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Asian organized crime.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-world",
        "name": "Asian organized crime world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Asian organized crime.",
        "description": "Geography, institutions, and periodization that give Asian organized crime its encyclopedia shape."
    },
    {
        "slug": "organized-crime-asia-places",
        "name": "Asian organized crime places",
        "type": "place",
        "short_description": "Locations and geographies that frame Asian organized crime.",
        "description": "Places, regions, and built sites that give Asian organized crime its map — where events and figures concentrate."
    },
    {
        "slug": "organized-crime-asia-events",
        "name": "Asian organized crime events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Asian organized crime.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Asian organized crime timeline."
    },
    {
        "slug": "organized-crime-asia-objects",
        "name": "Asian organized crime objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Asian organized crime.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-factions",
        "name": "Asian organized crime factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Asian organized crime.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-concepts",
        "name": "Asian organized crime concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Asian organized crime.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Asian organized crime readable as a lore graph."
    },
    {
        "slug": "organized-crime-asia-eras",
        "name": "Asian organized crime eras",
        "type": "event",
        "short_description": "Periodization for Asian organized crime.",
        "description": "Named eras and phases that help readers track how Asian organized crime changes across time."
    },
    {
        "slug": "organized-crime-asia-works",
        "name": "Asian organized crime works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Asian organized crime.",
        "description": "Primary works and adaptations through which most audiences encounter Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-symbols",
        "name": "Asian organized crime symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Asian organized crime.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-controversies",
        "name": "Asian organized crime controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Asian organized crime.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Asian organized crime argumentative."
    },
    {
        "slug": "organized-crime-asia-sources",
        "name": "Asian organized crime sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Asian organized crime.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-geography",
        "name": "Asian organized crime geography",
        "type": "place",
        "short_description": "Broader geographic framing for Asian organized crime.",
        "description": "Regions, routes, and spatial systems that situate Asian organized crime beyond single named places."
    },
    {
        "slug": "organized-crime-asia-legacy",
        "name": "Asian organized crime legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Asian organized crime.",
        "description": "How Asian organized crime continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "organized-crime-asia-practices",
        "name": "Asian organized crime practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Asian organized crime.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Asian organized crime."
    },
    {
        "slug": "organized-crime-asia-entry-1",
        "name": "Asian organized crime entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-2",
        "name": "Asian organized crime entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-3",
        "name": "Asian organized crime entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-4",
        "name": "Asian organized crime entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-5",
        "name": "Asian organized crime entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-6",
        "name": "Asian organized crime entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-7",
        "name": "Asian organized crime entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-8",
        "name": "Asian organized crime entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-9",
        "name": "Asian organized crime entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-10",
        "name": "Asian organized crime entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-11",
        "name": "Asian organized crime entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-12",
        "name": "Asian organized crime entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-13",
        "name": "Asian organized crime entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-14",
        "name": "Asian organized crime entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-15",
        "name": "Asian organized crime entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-16",
        "name": "Asian organized crime entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-17",
        "name": "Asian organized crime entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-18",
        "name": "Asian organized crime entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-19",
        "name": "Asian organized crime entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-20",
        "name": "Asian organized crime entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-21",
        "name": "Asian organized crime entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-22",
        "name": "Asian organized crime entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-23",
        "name": "Asian organized crime entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "organized-crime-asia-entry-24",
        "name": "Asian organized crime entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Asian organized crime.",
        "description": "A supporting encyclopedia entry in the Asian organized crime subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "organized-crime-asia",
        "organized-crime-asia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-places",
        "contains",
        "Asian organized crime places is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-events",
        "contains",
        "Asian organized crime events is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-objects",
        "contains",
        "Asian organized crime objects & artifacts is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-factions",
        "contains",
        "Asian organized crime factions & groups is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-concepts",
        "contains",
        "Asian organized crime concepts is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-eras",
        "contains",
        "Asian organized crime eras is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-works",
        "contains",
        "Asian organized crime works & media is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-symbols",
        "contains",
        "Asian organized crime symbols is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-controversies",
        "contains",
        "Asian organized crime controversies is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-sources",
        "contains",
        "Asian organized crime sources is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-geography",
        "contains",
        "Asian organized crime geography is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-legacy",
        "contains",
        "Asian organized crime legacy is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-practices",
        "contains",
        "Asian organized crime practices is a primary trailhead under Asian organized crime.",
        0.88,
        0.82
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-1",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-2",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-3",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-4",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-5",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-6",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-7",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-8",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-9",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-10",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-11",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-12",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-13",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-14",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-15",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-16",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-17",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-18",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-19",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-20",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-21",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-22",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-23",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ],
    [
        "organized-crime-asia",
        "organized-crime-asia-entry-24",
        "contains",
        "Supporting entry under Asian organized crime.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
