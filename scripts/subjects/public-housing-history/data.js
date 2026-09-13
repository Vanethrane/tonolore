/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "public-housing-history",
        "name": "Public housing history",
        "type": "topic",
        "short_description": "Estates, towers, and the state-built homes that remade working-class cities.",
        "description": "Estates, towers, and the state-built homes that remade working-class cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Public housing history so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "public-housing-history-figures",
        "name": "Public housing history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Public housing history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Public housing history."
    },
    {
        "slug": "public-housing-history-world",
        "name": "Public housing history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Public housing history.",
        "description": "Geography, institutions, and periodization that give Public housing history its encyclopedia shape."
    },
    {
        "slug": "public-housing-history-places",
        "name": "Public housing history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Public housing history.",
        "description": "Places, regions, and built sites that give Public housing history its map — where events and figures concentrate."
    },
    {
        "slug": "public-housing-history-events",
        "name": "Public housing history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Public housing history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Public housing history timeline."
    },
    {
        "slug": "public-housing-history-objects",
        "name": "Public housing history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Public housing history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Public housing history."
    },
    {
        "slug": "public-housing-history-factions",
        "name": "Public housing history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Public housing history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Public housing history."
    },
    {
        "slug": "public-housing-history-concepts",
        "name": "Public housing history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Public housing history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Public housing history readable as a lore graph."
    },
    {
        "slug": "public-housing-history-eras",
        "name": "Public housing history eras",
        "type": "event",
        "short_description": "Periodization for Public housing history.",
        "description": "Named eras and phases that help readers track how Public housing history changes across time."
    },
    {
        "slug": "public-housing-history-works",
        "name": "Public housing history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Public housing history.",
        "description": "Primary works and adaptations through which most audiences encounter Public housing history."
    },
    {
        "slug": "public-housing-history-symbols",
        "name": "Public housing history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Public housing history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Public housing history."
    },
    {
        "slug": "public-housing-history-controversies",
        "name": "Public housing history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Public housing history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Public housing history argumentative."
    },
    {
        "slug": "public-housing-history-sources",
        "name": "Public housing history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Public housing history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Public housing history."
    },
    {
        "slug": "public-housing-history-geography",
        "name": "Public housing history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Public housing history.",
        "description": "Regions, routes, and spatial systems that situate Public housing history beyond single named places."
    },
    {
        "slug": "public-housing-history-legacy",
        "name": "Public housing history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Public housing history.",
        "description": "How Public housing history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "public-housing-history-practices",
        "name": "Public housing history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Public housing history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Public housing history."
    },
    {
        "slug": "public-housing-history-entry-1",
        "name": "Public housing history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-2",
        "name": "Public housing history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-3",
        "name": "Public housing history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-4",
        "name": "Public housing history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-5",
        "name": "Public housing history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-6",
        "name": "Public housing history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-7",
        "name": "Public housing history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-8",
        "name": "Public housing history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-9",
        "name": "Public housing history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-10",
        "name": "Public housing history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-11",
        "name": "Public housing history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-12",
        "name": "Public housing history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-13",
        "name": "Public housing history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-14",
        "name": "Public housing history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-15",
        "name": "Public housing history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-16",
        "name": "Public housing history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-17",
        "name": "Public housing history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-18",
        "name": "Public housing history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-19",
        "name": "Public housing history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-20",
        "name": "Public housing history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-21",
        "name": "Public housing history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-22",
        "name": "Public housing history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-23",
        "name": "Public housing history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-housing-history-entry-24",
        "name": "Public housing history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public housing history.",
        "description": "A supporting encyclopedia entry in the Public housing history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "public-housing-history",
        "public-housing-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "public-housing-history",
        "public-housing-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "public-housing-history",
        "public-housing-history-places",
        "contains",
        "Public housing history places is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-events",
        "contains",
        "Public housing history events is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-objects",
        "contains",
        "Public housing history objects & artifacts is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-factions",
        "contains",
        "Public housing history factions & groups is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-concepts",
        "contains",
        "Public housing history concepts is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-eras",
        "contains",
        "Public housing history eras is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-works",
        "contains",
        "Public housing history works & media is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-symbols",
        "contains",
        "Public housing history symbols is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-controversies",
        "contains",
        "Public housing history controversies is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-sources",
        "contains",
        "Public housing history sources is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-geography",
        "contains",
        "Public housing history geography is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-legacy",
        "contains",
        "Public housing history legacy is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-practices",
        "contains",
        "Public housing history practices is a primary trailhead under Public housing history.",
        0.88,
        0.82
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-1",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-2",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-3",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-4",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-5",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-6",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-7",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-8",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-9",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-10",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-11",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-12",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-13",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-14",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-15",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-16",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-17",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-18",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-19",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-20",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-21",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-22",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-23",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ],
    [
        "public-housing-history",
        "public-housing-history-entry-24",
        "contains",
        "Supporting entry under Public housing history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
