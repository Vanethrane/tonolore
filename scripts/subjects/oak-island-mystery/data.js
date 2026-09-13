/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "oak-island-mystery",
        "name": "Oak Island mystery",
        "type": "topic",
        "short_description": "Money Pit digs, flood tunnels, and the Nova Scotia treasure hunt spanning centuries.",
        "description": "Money Pit digs, flood tunnels, and the Nova Scotia treasure hunt spanning centuries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Oak Island mystery so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "oak-island-mystery-figures",
        "name": "Oak Island mystery figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Oak Island mystery.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-world",
        "name": "Oak Island mystery world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Oak Island mystery.",
        "description": "Geography, institutions, and periodization that give Oak Island mystery its encyclopedia shape."
    },
    {
        "slug": "oak-island-mystery-places",
        "name": "Oak Island mystery places",
        "type": "place",
        "short_description": "Locations and geographies that frame Oak Island mystery.",
        "description": "Places, regions, and built sites that give Oak Island mystery its map — where events and figures concentrate."
    },
    {
        "slug": "oak-island-mystery-events",
        "name": "Oak Island mystery events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Oak Island mystery.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Oak Island mystery timeline."
    },
    {
        "slug": "oak-island-mystery-objects",
        "name": "Oak Island mystery objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Oak Island mystery.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-factions",
        "name": "Oak Island mystery factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Oak Island mystery.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-concepts",
        "name": "Oak Island mystery concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Oak Island mystery.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Oak Island mystery readable as a lore graph."
    },
    {
        "slug": "oak-island-mystery-eras",
        "name": "Oak Island mystery eras",
        "type": "event",
        "short_description": "Periodization for Oak Island mystery.",
        "description": "Named eras and phases that help readers track how Oak Island mystery changes across time."
    },
    {
        "slug": "oak-island-mystery-works",
        "name": "Oak Island mystery works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Oak Island mystery.",
        "description": "Primary works and adaptations through which most audiences encounter Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-symbols",
        "name": "Oak Island mystery symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Oak Island mystery.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-controversies",
        "name": "Oak Island mystery controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Oak Island mystery.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Oak Island mystery argumentative."
    },
    {
        "slug": "oak-island-mystery-sources",
        "name": "Oak Island mystery sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Oak Island mystery.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-geography",
        "name": "Oak Island mystery geography",
        "type": "place",
        "short_description": "Broader geographic framing for Oak Island mystery.",
        "description": "Regions, routes, and spatial systems that situate Oak Island mystery beyond single named places."
    },
    {
        "slug": "oak-island-mystery-legacy",
        "name": "Oak Island mystery legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Oak Island mystery.",
        "description": "How Oak Island mystery continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "oak-island-mystery-practices",
        "name": "Oak Island mystery practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Oak Island mystery.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Oak Island mystery."
    },
    {
        "slug": "oak-island-mystery-entry-1",
        "name": "Oak Island mystery entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-2",
        "name": "Oak Island mystery entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-3",
        "name": "Oak Island mystery entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-4",
        "name": "Oak Island mystery entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-5",
        "name": "Oak Island mystery entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-6",
        "name": "Oak Island mystery entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-7",
        "name": "Oak Island mystery entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-8",
        "name": "Oak Island mystery entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-9",
        "name": "Oak Island mystery entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-10",
        "name": "Oak Island mystery entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-11",
        "name": "Oak Island mystery entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-12",
        "name": "Oak Island mystery entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-13",
        "name": "Oak Island mystery entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-14",
        "name": "Oak Island mystery entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-15",
        "name": "Oak Island mystery entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-16",
        "name": "Oak Island mystery entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-17",
        "name": "Oak Island mystery entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-18",
        "name": "Oak Island mystery entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-19",
        "name": "Oak Island mystery entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-20",
        "name": "Oak Island mystery entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-21",
        "name": "Oak Island mystery entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-22",
        "name": "Oak Island mystery entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-23",
        "name": "Oak Island mystery entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "oak-island-mystery-entry-24",
        "name": "Oak Island mystery entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Oak Island mystery.",
        "description": "A supporting encyclopedia entry in the Oak Island mystery subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "oak-island-mystery",
        "oak-island-mystery-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-places",
        "contains",
        "Oak Island mystery places is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-events",
        "contains",
        "Oak Island mystery events is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-objects",
        "contains",
        "Oak Island mystery objects & artifacts is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-factions",
        "contains",
        "Oak Island mystery factions & groups is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-concepts",
        "contains",
        "Oak Island mystery concepts is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-eras",
        "contains",
        "Oak Island mystery eras is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-works",
        "contains",
        "Oak Island mystery works & media is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-symbols",
        "contains",
        "Oak Island mystery symbols is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-controversies",
        "contains",
        "Oak Island mystery controversies is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-sources",
        "contains",
        "Oak Island mystery sources is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-geography",
        "contains",
        "Oak Island mystery geography is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-legacy",
        "contains",
        "Oak Island mystery legacy is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-practices",
        "contains",
        "Oak Island mystery practices is a primary trailhead under Oak Island mystery.",
        0.88,
        0.82
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-1",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-2",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-3",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-4",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-5",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-6",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-7",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-8",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-9",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-10",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-11",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-12",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-13",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-14",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-15",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-16",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-17",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-18",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-19",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-20",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-21",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-22",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-23",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ],
    [
        "oak-island-mystery",
        "oak-island-mystery-entry-24",
        "contains",
        "Supporting entry under Oak Island mystery.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
