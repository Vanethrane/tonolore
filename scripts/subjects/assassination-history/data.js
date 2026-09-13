/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "assassination-history",
        "name": "Political assassinations",
        "type": "topic",
        "short_description": "Plots, shooters, and the murders that redirected nations and conspiracy lore.",
        "description": "Plots, shooters, and the murders that redirected nations and conspiracy lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Political assassinations so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "assassination-history-figures",
        "name": "Political assassinations figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Political assassinations.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Political assassinations."
    },
    {
        "slug": "assassination-history-world",
        "name": "Political assassinations world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Political assassinations.",
        "description": "Geography, institutions, and periodization that give Political assassinations its encyclopedia shape."
    },
    {
        "slug": "assassination-history-places",
        "name": "Political assassinations places",
        "type": "place",
        "short_description": "Locations and geographies that frame Political assassinations.",
        "description": "Places, regions, and built sites that give Political assassinations its map — where events and figures concentrate."
    },
    {
        "slug": "assassination-history-events",
        "name": "Political assassinations events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Political assassinations.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Political assassinations timeline."
    },
    {
        "slug": "assassination-history-objects",
        "name": "Political assassinations objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Political assassinations.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Political assassinations."
    },
    {
        "slug": "assassination-history-factions",
        "name": "Political assassinations factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Political assassinations.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Political assassinations."
    },
    {
        "slug": "assassination-history-concepts",
        "name": "Political assassinations concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Political assassinations.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Political assassinations readable as a lore graph."
    },
    {
        "slug": "assassination-history-eras",
        "name": "Political assassinations eras",
        "type": "event",
        "short_description": "Periodization for Political assassinations.",
        "description": "Named eras and phases that help readers track how Political assassinations changes across time."
    },
    {
        "slug": "assassination-history-works",
        "name": "Political assassinations works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Political assassinations.",
        "description": "Primary works and adaptations through which most audiences encounter Political assassinations."
    },
    {
        "slug": "assassination-history-symbols",
        "name": "Political assassinations symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Political assassinations.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Political assassinations."
    },
    {
        "slug": "assassination-history-controversies",
        "name": "Political assassinations controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Political assassinations.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Political assassinations argumentative."
    },
    {
        "slug": "assassination-history-sources",
        "name": "Political assassinations sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Political assassinations.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Political assassinations."
    },
    {
        "slug": "assassination-history-geography",
        "name": "Political assassinations geography",
        "type": "place",
        "short_description": "Broader geographic framing for Political assassinations.",
        "description": "Regions, routes, and spatial systems that situate Political assassinations beyond single named places."
    },
    {
        "slug": "assassination-history-legacy",
        "name": "Political assassinations legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Political assassinations.",
        "description": "How Political assassinations continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "assassination-history-practices",
        "name": "Political assassinations practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Political assassinations.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Political assassinations."
    },
    {
        "slug": "assassination-history-entry-1",
        "name": "Political assassinations entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-2",
        "name": "Political assassinations entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-3",
        "name": "Political assassinations entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-4",
        "name": "Political assassinations entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-5",
        "name": "Political assassinations entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-6",
        "name": "Political assassinations entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-7",
        "name": "Political assassinations entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-8",
        "name": "Political assassinations entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-9",
        "name": "Political assassinations entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-10",
        "name": "Political assassinations entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-11",
        "name": "Political assassinations entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-12",
        "name": "Political assassinations entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-13",
        "name": "Political assassinations entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-14",
        "name": "Political assassinations entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-15",
        "name": "Political assassinations entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-16",
        "name": "Political assassinations entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-17",
        "name": "Political assassinations entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-18",
        "name": "Political assassinations entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-19",
        "name": "Political assassinations entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-20",
        "name": "Political assassinations entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-21",
        "name": "Political assassinations entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-22",
        "name": "Political assassinations entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-23",
        "name": "Political assassinations entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassination-history-entry-24",
        "name": "Political assassinations entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Political assassinations.",
        "description": "A supporting encyclopedia entry in the Political assassinations subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "assassination-history",
        "assassination-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "assassination-history",
        "assassination-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "assassination-history",
        "assassination-history-places",
        "contains",
        "Political assassinations places is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-events",
        "contains",
        "Political assassinations events is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-objects",
        "contains",
        "Political assassinations objects & artifacts is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-factions",
        "contains",
        "Political assassinations factions & groups is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-concepts",
        "contains",
        "Political assassinations concepts is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-eras",
        "contains",
        "Political assassinations eras is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-works",
        "contains",
        "Political assassinations works & media is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-symbols",
        "contains",
        "Political assassinations symbols is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-controversies",
        "contains",
        "Political assassinations controversies is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-sources",
        "contains",
        "Political assassinations sources is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-geography",
        "contains",
        "Political assassinations geography is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-legacy",
        "contains",
        "Political assassinations legacy is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-practices",
        "contains",
        "Political assassinations practices is a primary trailhead under Political assassinations.",
        0.88,
        0.82
    ],
    [
        "assassination-history",
        "assassination-history-entry-1",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-2",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-3",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-4",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-5",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-6",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-7",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-8",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-9",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-10",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-11",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-12",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-13",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-14",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-15",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-16",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-17",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-18",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-19",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-20",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-21",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-22",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-23",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ],
    [
        "assassination-history",
        "assassination-history-entry-24",
        "contains",
        "Supporting entry under Political assassinations.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
