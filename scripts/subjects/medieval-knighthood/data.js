/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "medieval-knighthood",
        "name": "Medieval knighthood",
        "type": "topic",
        "short_description": "Armor, tournaments, and the mounted warrior class of European feudal war.",
        "description": "Armor, tournaments, and the mounted warrior class of European feudal war. This Ton-o-Lore subject maps people, places, events, and ideas tied to Medieval knighthood so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "medieval-knighthood-figures",
        "name": "Medieval knighthood figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Medieval knighthood.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-world",
        "name": "Medieval knighthood world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Medieval knighthood.",
        "description": "Geography, institutions, and periodization that give Medieval knighthood its encyclopedia shape."
    },
    {
        "slug": "medieval-knighthood-places",
        "name": "Medieval knighthood places",
        "type": "place",
        "short_description": "Locations and geographies that frame Medieval knighthood.",
        "description": "Places, regions, and built sites that give Medieval knighthood its map — where events and figures concentrate."
    },
    {
        "slug": "medieval-knighthood-events",
        "name": "Medieval knighthood events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Medieval knighthood.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Medieval knighthood timeline."
    },
    {
        "slug": "medieval-knighthood-objects",
        "name": "Medieval knighthood objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Medieval knighthood.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-factions",
        "name": "Medieval knighthood factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Medieval knighthood.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-concepts",
        "name": "Medieval knighthood concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Medieval knighthood.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Medieval knighthood readable as a lore graph."
    },
    {
        "slug": "medieval-knighthood-eras",
        "name": "Medieval knighthood eras",
        "type": "event",
        "short_description": "Periodization for Medieval knighthood.",
        "description": "Named eras and phases that help readers track how Medieval knighthood changes across time."
    },
    {
        "slug": "medieval-knighthood-works",
        "name": "Medieval knighthood works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Medieval knighthood.",
        "description": "Primary works and adaptations through which most audiences encounter Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-symbols",
        "name": "Medieval knighthood symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Medieval knighthood.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-controversies",
        "name": "Medieval knighthood controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Medieval knighthood.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Medieval knighthood argumentative."
    },
    {
        "slug": "medieval-knighthood-sources",
        "name": "Medieval knighthood sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Medieval knighthood.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-geography",
        "name": "Medieval knighthood geography",
        "type": "place",
        "short_description": "Broader geographic framing for Medieval knighthood.",
        "description": "Regions, routes, and spatial systems that situate Medieval knighthood beyond single named places."
    },
    {
        "slug": "medieval-knighthood-legacy",
        "name": "Medieval knighthood legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Medieval knighthood.",
        "description": "How Medieval knighthood continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "medieval-knighthood-practices",
        "name": "Medieval knighthood practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Medieval knighthood.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Medieval knighthood."
    },
    {
        "slug": "medieval-knighthood-entry-1",
        "name": "Medieval knighthood entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-2",
        "name": "Medieval knighthood entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-3",
        "name": "Medieval knighthood entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-4",
        "name": "Medieval knighthood entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-5",
        "name": "Medieval knighthood entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-6",
        "name": "Medieval knighthood entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-7",
        "name": "Medieval knighthood entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-8",
        "name": "Medieval knighthood entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-9",
        "name": "Medieval knighthood entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-10",
        "name": "Medieval knighthood entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-11",
        "name": "Medieval knighthood entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-12",
        "name": "Medieval knighthood entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-13",
        "name": "Medieval knighthood entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-14",
        "name": "Medieval knighthood entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-15",
        "name": "Medieval knighthood entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-16",
        "name": "Medieval knighthood entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-17",
        "name": "Medieval knighthood entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-18",
        "name": "Medieval knighthood entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-19",
        "name": "Medieval knighthood entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-20",
        "name": "Medieval knighthood entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-21",
        "name": "Medieval knighthood entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-22",
        "name": "Medieval knighthood entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-23",
        "name": "Medieval knighthood entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "medieval-knighthood-entry-24",
        "name": "Medieval knighthood entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Medieval knighthood.",
        "description": "A supporting encyclopedia entry in the Medieval knighthood subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "medieval-knighthood",
        "medieval-knighthood-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-places",
        "contains",
        "Medieval knighthood places is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-events",
        "contains",
        "Medieval knighthood events is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-objects",
        "contains",
        "Medieval knighthood objects & artifacts is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-factions",
        "contains",
        "Medieval knighthood factions & groups is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-concepts",
        "contains",
        "Medieval knighthood concepts is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-eras",
        "contains",
        "Medieval knighthood eras is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-works",
        "contains",
        "Medieval knighthood works & media is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-symbols",
        "contains",
        "Medieval knighthood symbols is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-controversies",
        "contains",
        "Medieval knighthood controversies is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-sources",
        "contains",
        "Medieval knighthood sources is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-geography",
        "contains",
        "Medieval knighthood geography is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-legacy",
        "contains",
        "Medieval knighthood legacy is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-practices",
        "contains",
        "Medieval knighthood practices is a primary trailhead under Medieval knighthood.",
        0.88,
        0.82
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-1",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-2",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-3",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-4",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-5",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-6",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-7",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-8",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-9",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-10",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-11",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-12",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-13",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-14",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-15",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-16",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-17",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-18",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-19",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-20",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-21",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-22",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-23",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ],
    [
        "medieval-knighthood",
        "medieval-knighthood-entry-24",
        "contains",
        "Supporting entry under Medieval knighthood.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
