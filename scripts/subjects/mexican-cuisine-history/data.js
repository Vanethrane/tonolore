/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mexican-cuisine-history",
        "name": "Mexican cuisine history",
        "type": "topic",
        "short_description": "Maize, moles, and the UNESCO-recognized culinary civilization of Mexico.",
        "description": "Maize, moles, and the UNESCO-recognized culinary civilization of Mexico. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mexican cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "mexican-cuisine-history-figures",
        "name": "Mexican cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mexican cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-world",
        "name": "Mexican cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mexican cuisine history.",
        "description": "Geography, institutions, and periodization that give Mexican cuisine history its encyclopedia shape."
    },
    {
        "slug": "mexican-cuisine-history-places",
        "name": "Mexican cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mexican cuisine history.",
        "description": "Places, regions, and built sites that give Mexican cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "mexican-cuisine-history-events",
        "name": "Mexican cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mexican cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mexican cuisine history timeline."
    },
    {
        "slug": "mexican-cuisine-history-objects",
        "name": "Mexican cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mexican cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-factions",
        "name": "Mexican cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mexican cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-concepts",
        "name": "Mexican cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mexican cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mexican cuisine history readable as a lore graph."
    },
    {
        "slug": "mexican-cuisine-history-eras",
        "name": "Mexican cuisine history eras",
        "type": "event",
        "short_description": "Periodization for Mexican cuisine history.",
        "description": "Named eras and phases that help readers track how Mexican cuisine history changes across time."
    },
    {
        "slug": "mexican-cuisine-history-works",
        "name": "Mexican cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mexican cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-symbols",
        "name": "Mexican cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mexican cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-controversies",
        "name": "Mexican cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mexican cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mexican cuisine history argumentative."
    },
    {
        "slug": "mexican-cuisine-history-sources",
        "name": "Mexican cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mexican cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-geography",
        "name": "Mexican cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mexican cuisine history.",
        "description": "Regions, routes, and spatial systems that situate Mexican cuisine history beyond single named places."
    },
    {
        "slug": "mexican-cuisine-history-legacy",
        "name": "Mexican cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mexican cuisine history.",
        "description": "How Mexican cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mexican-cuisine-history-practices",
        "name": "Mexican cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mexican cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mexican cuisine history."
    },
    {
        "slug": "mexican-cuisine-history-entry-1",
        "name": "Mexican cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-2",
        "name": "Mexican cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-3",
        "name": "Mexican cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-4",
        "name": "Mexican cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-5",
        "name": "Mexican cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-6",
        "name": "Mexican cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-7",
        "name": "Mexican cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-8",
        "name": "Mexican cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-9",
        "name": "Mexican cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-10",
        "name": "Mexican cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-11",
        "name": "Mexican cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-12",
        "name": "Mexican cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-13",
        "name": "Mexican cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-14",
        "name": "Mexican cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-15",
        "name": "Mexican cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-16",
        "name": "Mexican cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-17",
        "name": "Mexican cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-18",
        "name": "Mexican cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-19",
        "name": "Mexican cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-20",
        "name": "Mexican cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-21",
        "name": "Mexican cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-22",
        "name": "Mexican cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-23",
        "name": "Mexican cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mexican-cuisine-history-entry-24",
        "name": "Mexican cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cuisine history.",
        "description": "A supporting encyclopedia entry in the Mexican cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-places",
        "contains",
        "Mexican cuisine history places is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-events",
        "contains",
        "Mexican cuisine history events is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-objects",
        "contains",
        "Mexican cuisine history objects & artifacts is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-factions",
        "contains",
        "Mexican cuisine history factions & groups is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-concepts",
        "contains",
        "Mexican cuisine history concepts is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-eras",
        "contains",
        "Mexican cuisine history eras is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-works",
        "contains",
        "Mexican cuisine history works & media is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-symbols",
        "contains",
        "Mexican cuisine history symbols is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-controversies",
        "contains",
        "Mexican cuisine history controversies is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-sources",
        "contains",
        "Mexican cuisine history sources is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-geography",
        "contains",
        "Mexican cuisine history geography is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-legacy",
        "contains",
        "Mexican cuisine history legacy is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-practices",
        "contains",
        "Mexican cuisine history practices is a primary trailhead under Mexican cuisine history.",
        0.88,
        0.82
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-1",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-2",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-3",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-4",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-5",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-6",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-7",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-8",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-9",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-10",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-11",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-12",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-13",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-14",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-15",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-16",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-17",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-18",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-19",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-20",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-21",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-22",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-23",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ],
    [
        "mexican-cuisine-history",
        "mexican-cuisine-history-entry-24",
        "contains",
        "Supporting entry under Mexican cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
