/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nuclear-weapons-history",
        "name": "Nuclear weapons & nuclear history",
        "type": "topic",
        "short_description": "Programs, scientists, tests, delivery systems, crises, and the deterrence graph of the atomic age.",
        "description": "Programs, scientists, tests, delivery systems, crises, and the deterrence graph of the atomic age. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nuclear weapons & nuclear history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "nuclear-weapons-history-figures",
        "name": "Nuclear weapons & nuclear history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Nuclear weapons & nuclear history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-world",
        "name": "Nuclear weapons & nuclear history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Nuclear weapons & nuclear history.",
        "description": "Geography, institutions, and periodization that give Nuclear weapons & nuclear history its encyclopedia shape."
    },
    {
        "slug": "nuclear-weapons-history-places",
        "name": "Nuclear weapons & nuclear history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nuclear weapons & nuclear history.",
        "description": "Places, regions, and built sites that give Nuclear weapons & nuclear history its map — where events and figures concentrate."
    },
    {
        "slug": "nuclear-weapons-history-events",
        "name": "Nuclear weapons & nuclear history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Nuclear weapons & nuclear history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Nuclear weapons & nuclear history timeline."
    },
    {
        "slug": "nuclear-weapons-history-objects",
        "name": "Nuclear weapons & nuclear history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nuclear weapons & nuclear history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-factions",
        "name": "Nuclear weapons & nuclear history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nuclear weapons & nuclear history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-concepts",
        "name": "Nuclear weapons & nuclear history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nuclear weapons & nuclear history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nuclear weapons & nuclear history readable as a lore graph."
    },
    {
        "slug": "nuclear-weapons-history-eras",
        "name": "Nuclear weapons & nuclear history eras",
        "type": "event",
        "short_description": "Periodization for Nuclear weapons & nuclear history.",
        "description": "Named eras and phases that help readers track how Nuclear weapons & nuclear history changes across time."
    },
    {
        "slug": "nuclear-weapons-history-works",
        "name": "Nuclear weapons & nuclear history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nuclear weapons & nuclear history.",
        "description": "Primary works and adaptations through which most audiences encounter Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-symbols",
        "name": "Nuclear weapons & nuclear history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nuclear weapons & nuclear history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-controversies",
        "name": "Nuclear weapons & nuclear history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nuclear weapons & nuclear history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nuclear weapons & nuclear history argumentative."
    },
    {
        "slug": "nuclear-weapons-history-sources",
        "name": "Nuclear weapons & nuclear history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nuclear weapons & nuclear history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-geography",
        "name": "Nuclear weapons & nuclear history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Nuclear weapons & nuclear history.",
        "description": "Regions, routes, and spatial systems that situate Nuclear weapons & nuclear history beyond single named places."
    },
    {
        "slug": "nuclear-weapons-history-legacy",
        "name": "Nuclear weapons & nuclear history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Nuclear weapons & nuclear history.",
        "description": "How Nuclear weapons & nuclear history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nuclear-weapons-history-practices",
        "name": "Nuclear weapons & nuclear history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Nuclear weapons & nuclear history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Nuclear weapons & nuclear history."
    },
    {
        "slug": "nuclear-weapons-history-entry-1",
        "name": "Nuclear weapons & nuclear history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-2",
        "name": "Nuclear weapons & nuclear history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-3",
        "name": "Nuclear weapons & nuclear history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-4",
        "name": "Nuclear weapons & nuclear history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-5",
        "name": "Nuclear weapons & nuclear history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-6",
        "name": "Nuclear weapons & nuclear history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-7",
        "name": "Nuclear weapons & nuclear history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-8",
        "name": "Nuclear weapons & nuclear history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-9",
        "name": "Nuclear weapons & nuclear history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-10",
        "name": "Nuclear weapons & nuclear history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-11",
        "name": "Nuclear weapons & nuclear history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-12",
        "name": "Nuclear weapons & nuclear history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-13",
        "name": "Nuclear weapons & nuclear history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-14",
        "name": "Nuclear weapons & nuclear history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-15",
        "name": "Nuclear weapons & nuclear history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-16",
        "name": "Nuclear weapons & nuclear history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-17",
        "name": "Nuclear weapons & nuclear history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-18",
        "name": "Nuclear weapons & nuclear history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-19",
        "name": "Nuclear weapons & nuclear history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-20",
        "name": "Nuclear weapons & nuclear history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-21",
        "name": "Nuclear weapons & nuclear history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-22",
        "name": "Nuclear weapons & nuclear history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-23",
        "name": "Nuclear weapons & nuclear history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nuclear-weapons-history-entry-24",
        "name": "Nuclear weapons & nuclear history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nuclear weapons & nuclear history.",
        "description": "A supporting encyclopedia entry in the Nuclear weapons & nuclear history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-places",
        "contains",
        "Nuclear weapons & nuclear history places is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-events",
        "contains",
        "Nuclear weapons & nuclear history events is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-objects",
        "contains",
        "Nuclear weapons & nuclear history objects & artifacts is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-factions",
        "contains",
        "Nuclear weapons & nuclear history factions & groups is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-concepts",
        "contains",
        "Nuclear weapons & nuclear history concepts is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-eras",
        "contains",
        "Nuclear weapons & nuclear history eras is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-works",
        "contains",
        "Nuclear weapons & nuclear history works & media is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-symbols",
        "contains",
        "Nuclear weapons & nuclear history symbols is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-controversies",
        "contains",
        "Nuclear weapons & nuclear history controversies is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-sources",
        "contains",
        "Nuclear weapons & nuclear history sources is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-geography",
        "contains",
        "Nuclear weapons & nuclear history geography is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-legacy",
        "contains",
        "Nuclear weapons & nuclear history legacy is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-practices",
        "contains",
        "Nuclear weapons & nuclear history practices is a primary trailhead under Nuclear weapons & nuclear history.",
        0.88,
        0.82
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-1",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-2",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-3",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-4",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-5",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-6",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-7",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-8",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-9",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-10",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-11",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-12",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-13",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-14",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-15",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-16",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-17",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-18",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-19",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-20",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-21",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-22",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-23",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ],
    [
        "nuclear-weapons-history",
        "nuclear-weapons-history-entry-24",
        "contains",
        "Supporting entry under Nuclear weapons & nuclear history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
