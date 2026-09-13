/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wine",
        "name": "Wine",
        "type": "topic",
        "short_description": "Terroir, appellations, and tasting cultures that organize wine as living geography.",
        "description": "Terroir, appellations, and tasting cultures that organize wine as living geography. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wine so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "wine-figures",
        "name": "Wine figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wine.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wine."
    },
    {
        "slug": "wine-world",
        "name": "Wine world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wine.",
        "description": "Geography, institutions, and periodization that give Wine its encyclopedia shape."
    },
    {
        "slug": "wine-places",
        "name": "Wine places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wine.",
        "description": "Places, regions, and built sites that give Wine its map — where events and figures concentrate."
    },
    {
        "slug": "wine-events",
        "name": "Wine events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wine.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wine timeline."
    },
    {
        "slug": "wine-objects",
        "name": "Wine objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wine.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wine."
    },
    {
        "slug": "wine-factions",
        "name": "Wine factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wine.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wine."
    },
    {
        "slug": "wine-concepts",
        "name": "Wine concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wine.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wine readable as a lore graph."
    },
    {
        "slug": "wine-eras",
        "name": "Wine eras",
        "type": "event",
        "short_description": "Periodization for Wine.",
        "description": "Named eras and phases that help readers track how Wine changes across time."
    },
    {
        "slug": "wine-works",
        "name": "Wine works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wine.",
        "description": "Primary works and adaptations through which most audiences encounter Wine."
    },
    {
        "slug": "wine-symbols",
        "name": "Wine symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wine.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wine."
    },
    {
        "slug": "wine-controversies",
        "name": "Wine controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wine.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wine argumentative."
    },
    {
        "slug": "wine-sources",
        "name": "Wine sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wine.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wine."
    },
    {
        "slug": "wine-geography",
        "name": "Wine geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wine.",
        "description": "Regions, routes, and spatial systems that situate Wine beyond single named places."
    },
    {
        "slug": "wine-legacy",
        "name": "Wine legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wine.",
        "description": "How Wine continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wine-practices",
        "name": "Wine practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wine.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wine."
    },
    {
        "slug": "wine-entry-1",
        "name": "Wine entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-2",
        "name": "Wine entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-3",
        "name": "Wine entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-4",
        "name": "Wine entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-5",
        "name": "Wine entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-6",
        "name": "Wine entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-7",
        "name": "Wine entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-8",
        "name": "Wine entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-9",
        "name": "Wine entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-10",
        "name": "Wine entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-11",
        "name": "Wine entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-12",
        "name": "Wine entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-13",
        "name": "Wine entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-14",
        "name": "Wine entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-15",
        "name": "Wine entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-16",
        "name": "Wine entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-17",
        "name": "Wine entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-18",
        "name": "Wine entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-19",
        "name": "Wine entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-20",
        "name": "Wine entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-21",
        "name": "Wine entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-22",
        "name": "Wine entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-23",
        "name": "Wine entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wine-entry-24",
        "name": "Wine entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wine.",
        "description": "A supporting encyclopedia entry in the Wine subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wine",
        "wine-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wine",
        "wine-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wine",
        "wine-places",
        "contains",
        "Wine places is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-events",
        "contains",
        "Wine events is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-objects",
        "contains",
        "Wine objects & artifacts is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-factions",
        "contains",
        "Wine factions & groups is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-concepts",
        "contains",
        "Wine concepts is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-eras",
        "contains",
        "Wine eras is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-works",
        "contains",
        "Wine works & media is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-symbols",
        "contains",
        "Wine symbols is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-controversies",
        "contains",
        "Wine controversies is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-sources",
        "contains",
        "Wine sources is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-geography",
        "contains",
        "Wine geography is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-legacy",
        "contains",
        "Wine legacy is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-practices",
        "contains",
        "Wine practices is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-entry-1",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-2",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-3",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-4",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-5",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-6",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-7",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-8",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-9",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-10",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-11",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-12",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-13",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-14",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-15",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-16",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-17",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-18",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-19",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-20",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-21",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-22",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-23",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ],
    [
        "wine",
        "wine-entry-24",
        "contains",
        "Supporting entry under Wine.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
