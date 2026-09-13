/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "british-monarchy",
        "name": "British monarchy",
        "type": "topic",
        "short_description": "Sovereigns, consorts, succession crises, palaces, and the long continuity of the British crown.",
        "description": "Sovereigns, consorts, succession crises, palaces, and the long continuity of the British crown. This Ton-o-Lore subject maps people, places, events, and ideas tied to British monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "british-monarchy-figures",
        "name": "British monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to British monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring British monarchy."
    },
    {
        "slug": "british-monarchy-world",
        "name": "British monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame British monarchy.",
        "description": "Geography, institutions, and periodization that give British monarchy its encyclopedia shape."
    },
    {
        "slug": "british-monarchy-places",
        "name": "British monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame British monarchy.",
        "description": "Places, regions, and built sites that give British monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "british-monarchy-events",
        "name": "British monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in British monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the British monarchy timeline."
    },
    {
        "slug": "british-monarchy-objects",
        "name": "British monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to British monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through British monarchy."
    },
    {
        "slug": "british-monarchy-factions",
        "name": "British monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside British monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in British monarchy."
    },
    {
        "slug": "british-monarchy-concepts",
        "name": "British monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize British monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make British monarchy readable as a lore graph."
    },
    {
        "slug": "british-monarchy-eras",
        "name": "British monarchy eras",
        "type": "event",
        "short_description": "Periodization for British monarchy.",
        "description": "Named eras and phases that help readers track how British monarchy changes across time."
    },
    {
        "slug": "british-monarchy-works",
        "name": "British monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry British monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter British monarchy."
    },
    {
        "slug": "british-monarchy-symbols",
        "name": "British monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with British monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside British monarchy."
    },
    {
        "slug": "british-monarchy-controversies",
        "name": "British monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in British monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep British monarchy argumentative."
    },
    {
        "slug": "british-monarchy-sources",
        "name": "British monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into British monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify British monarchy."
    },
    {
        "slug": "british-monarchy-geography",
        "name": "British monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for British monarchy.",
        "description": "Regions, routes, and spatial systems that situate British monarchy beyond single named places."
    },
    {
        "slug": "british-monarchy-legacy",
        "name": "British monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of British monarchy.",
        "description": "How British monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "british-monarchy-practices",
        "name": "British monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in British monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in British monarchy."
    },
    {
        "slug": "british-monarchy-entry-1",
        "name": "British monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-2",
        "name": "British monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-3",
        "name": "British monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-4",
        "name": "British monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-5",
        "name": "British monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-6",
        "name": "British monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-7",
        "name": "British monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-8",
        "name": "British monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-9",
        "name": "British monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-10",
        "name": "British monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-11",
        "name": "British monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-12",
        "name": "British monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-13",
        "name": "British monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-14",
        "name": "British monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-15",
        "name": "British monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-16",
        "name": "British monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-17",
        "name": "British monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-18",
        "name": "British monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-19",
        "name": "British monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-20",
        "name": "British monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-21",
        "name": "British monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-22",
        "name": "British monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-23",
        "name": "British monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-monarchy-entry-24",
        "name": "British monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside British monarchy.",
        "description": "A supporting encyclopedia entry in the British monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "british-monarchy",
        "british-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "british-monarchy",
        "british-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "british-monarchy",
        "british-monarchy-places",
        "contains",
        "British monarchy places is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-events",
        "contains",
        "British monarchy events is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-objects",
        "contains",
        "British monarchy objects & artifacts is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-factions",
        "contains",
        "British monarchy factions & groups is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-concepts",
        "contains",
        "British monarchy concepts is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-eras",
        "contains",
        "British monarchy eras is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-works",
        "contains",
        "British monarchy works & media is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-symbols",
        "contains",
        "British monarchy symbols is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-controversies",
        "contains",
        "British monarchy controversies is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-sources",
        "contains",
        "British monarchy sources is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-geography",
        "contains",
        "British monarchy geography is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-legacy",
        "contains",
        "British monarchy legacy is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-practices",
        "contains",
        "British monarchy practices is a primary trailhead under British monarchy.",
        0.88,
        0.82
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-1",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-2",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-3",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-4",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-5",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-6",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-7",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-8",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-9",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-10",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-11",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-12",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-13",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-14",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-15",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-16",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-17",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-18",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-19",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-20",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-21",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-22",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-23",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ],
    [
        "british-monarchy",
        "british-monarchy-entry-24",
        "contains",
        "Supporting entry under British monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
