/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "urban-planning-history",
        "name": "Urban planning history",
        "type": "topic",
        "short_description": "Grids, zoning, and the disciplines that try to design how cities grow.",
        "description": "Grids, zoning, and the disciplines that try to design how cities grow. This Ton-o-Lore subject maps people, places, events, and ideas tied to Urban planning history so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "urban-planning-history-figures",
        "name": "Urban planning history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Urban planning history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Urban planning history."
    },
    {
        "slug": "urban-planning-history-world",
        "name": "Urban planning history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Urban planning history.",
        "description": "Geography, institutions, and periodization that give Urban planning history its encyclopedia shape."
    },
    {
        "slug": "urban-planning-history-places",
        "name": "Urban planning history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Urban planning history.",
        "description": "Places, regions, and built sites that give Urban planning history its map — where events and figures concentrate."
    },
    {
        "slug": "urban-planning-history-events",
        "name": "Urban planning history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Urban planning history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Urban planning history timeline."
    },
    {
        "slug": "urban-planning-history-objects",
        "name": "Urban planning history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Urban planning history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Urban planning history."
    },
    {
        "slug": "urban-planning-history-factions",
        "name": "Urban planning history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Urban planning history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Urban planning history."
    },
    {
        "slug": "urban-planning-history-concepts",
        "name": "Urban planning history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Urban planning history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Urban planning history readable as a lore graph."
    },
    {
        "slug": "urban-planning-history-eras",
        "name": "Urban planning history eras",
        "type": "event",
        "short_description": "Periodization for Urban planning history.",
        "description": "Named eras and phases that help readers track how Urban planning history changes across time."
    },
    {
        "slug": "urban-planning-history-works",
        "name": "Urban planning history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Urban planning history.",
        "description": "Primary works and adaptations through which most audiences encounter Urban planning history."
    },
    {
        "slug": "urban-planning-history-symbols",
        "name": "Urban planning history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Urban planning history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Urban planning history."
    },
    {
        "slug": "urban-planning-history-controversies",
        "name": "Urban planning history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Urban planning history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Urban planning history argumentative."
    },
    {
        "slug": "urban-planning-history-sources",
        "name": "Urban planning history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Urban planning history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Urban planning history."
    },
    {
        "slug": "urban-planning-history-geography",
        "name": "Urban planning history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Urban planning history.",
        "description": "Regions, routes, and spatial systems that situate Urban planning history beyond single named places."
    },
    {
        "slug": "urban-planning-history-legacy",
        "name": "Urban planning history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Urban planning history.",
        "description": "How Urban planning history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "urban-planning-history-practices",
        "name": "Urban planning history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Urban planning history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Urban planning history."
    },
    {
        "slug": "urban-planning-history-entry-1",
        "name": "Urban planning history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-2",
        "name": "Urban planning history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-3",
        "name": "Urban planning history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-4",
        "name": "Urban planning history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-5",
        "name": "Urban planning history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-6",
        "name": "Urban planning history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-7",
        "name": "Urban planning history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-8",
        "name": "Urban planning history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-9",
        "name": "Urban planning history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-10",
        "name": "Urban planning history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-11",
        "name": "Urban planning history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-12",
        "name": "Urban planning history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-13",
        "name": "Urban planning history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-14",
        "name": "Urban planning history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-15",
        "name": "Urban planning history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-16",
        "name": "Urban planning history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-17",
        "name": "Urban planning history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-18",
        "name": "Urban planning history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-19",
        "name": "Urban planning history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-20",
        "name": "Urban planning history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-21",
        "name": "Urban planning history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-22",
        "name": "Urban planning history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-23",
        "name": "Urban planning history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "urban-planning-history-entry-24",
        "name": "Urban planning history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Urban planning history.",
        "description": "A supporting encyclopedia entry in the Urban planning history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "urban-planning-history",
        "urban-planning-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "urban-planning-history",
        "urban-planning-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "urban-planning-history",
        "urban-planning-history-places",
        "contains",
        "Urban planning history places is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-events",
        "contains",
        "Urban planning history events is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-objects",
        "contains",
        "Urban planning history objects & artifacts is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-factions",
        "contains",
        "Urban planning history factions & groups is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-concepts",
        "contains",
        "Urban planning history concepts is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-eras",
        "contains",
        "Urban planning history eras is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-works",
        "contains",
        "Urban planning history works & media is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-symbols",
        "contains",
        "Urban planning history symbols is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-controversies",
        "contains",
        "Urban planning history controversies is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-sources",
        "contains",
        "Urban planning history sources is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-geography",
        "contains",
        "Urban planning history geography is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-legacy",
        "contains",
        "Urban planning history legacy is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-practices",
        "contains",
        "Urban planning history practices is a primary trailhead under Urban planning history.",
        0.88,
        0.82
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-1",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-2",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-3",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-4",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-5",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-6",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-7",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-8",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-9",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-10",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-11",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-12",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-13",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-14",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-15",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-16",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-17",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-18",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-19",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-20",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-21",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-22",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-23",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ],
    [
        "urban-planning-history",
        "urban-planning-history-entry-24",
        "contains",
        "Supporting entry under Urban planning history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
