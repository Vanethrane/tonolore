/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spanish-civil-war",
        "name": "Spanish Civil War",
        "type": "topic",
        "short_description": "Republicans, Nationalists, international brigades, and the prelude conflict of WWII Europe.",
        "description": "Republicans, Nationalists, international brigades, and the prelude conflict of WWII Europe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spanish Civil War so readers can follow long-tail connections across history."
    },
    {
        "slug": "spanish-civil-war-figures",
        "name": "Spanish Civil War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spanish Civil War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-world",
        "name": "Spanish Civil War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spanish Civil War.",
        "description": "Geography, institutions, and periodization that give Spanish Civil War its encyclopedia shape."
    },
    {
        "slug": "spanish-civil-war-places",
        "name": "Spanish Civil War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spanish Civil War.",
        "description": "Places, regions, and built sites that give Spanish Civil War its map — where events and figures concentrate."
    },
    {
        "slug": "spanish-civil-war-events",
        "name": "Spanish Civil War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spanish Civil War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spanish Civil War timeline."
    },
    {
        "slug": "spanish-civil-war-objects",
        "name": "Spanish Civil War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spanish Civil War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-factions",
        "name": "Spanish Civil War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spanish Civil War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-concepts",
        "name": "Spanish Civil War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spanish Civil War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spanish Civil War readable as a lore graph."
    },
    {
        "slug": "spanish-civil-war-eras",
        "name": "Spanish Civil War eras",
        "type": "event",
        "short_description": "Periodization for Spanish Civil War.",
        "description": "Named eras and phases that help readers track how Spanish Civil War changes across time."
    },
    {
        "slug": "spanish-civil-war-works",
        "name": "Spanish Civil War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spanish Civil War.",
        "description": "Primary works and adaptations through which most audiences encounter Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-symbols",
        "name": "Spanish Civil War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spanish Civil War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-controversies",
        "name": "Spanish Civil War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spanish Civil War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spanish Civil War argumentative."
    },
    {
        "slug": "spanish-civil-war-sources",
        "name": "Spanish Civil War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spanish Civil War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-geography",
        "name": "Spanish Civil War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spanish Civil War.",
        "description": "Regions, routes, and spatial systems that situate Spanish Civil War beyond single named places."
    },
    {
        "slug": "spanish-civil-war-legacy",
        "name": "Spanish Civil War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spanish Civil War.",
        "description": "How Spanish Civil War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spanish-civil-war-practices",
        "name": "Spanish Civil War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spanish Civil War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spanish Civil War."
    },
    {
        "slug": "spanish-civil-war-entry-1",
        "name": "Spanish Civil War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-2",
        "name": "Spanish Civil War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-3",
        "name": "Spanish Civil War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-4",
        "name": "Spanish Civil War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-5",
        "name": "Spanish Civil War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-6",
        "name": "Spanish Civil War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-7",
        "name": "Spanish Civil War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-8",
        "name": "Spanish Civil War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-9",
        "name": "Spanish Civil War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-10",
        "name": "Spanish Civil War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-11",
        "name": "Spanish Civil War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-12",
        "name": "Spanish Civil War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-13",
        "name": "Spanish Civil War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-14",
        "name": "Spanish Civil War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-15",
        "name": "Spanish Civil War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-16",
        "name": "Spanish Civil War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-17",
        "name": "Spanish Civil War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-18",
        "name": "Spanish Civil War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-19",
        "name": "Spanish Civil War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-20",
        "name": "Spanish Civil War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-21",
        "name": "Spanish Civil War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-22",
        "name": "Spanish Civil War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-23",
        "name": "Spanish Civil War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-civil-war-entry-24",
        "name": "Spanish Civil War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish Civil War.",
        "description": "A supporting encyclopedia entry in the Spanish Civil War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spanish-civil-war",
        "spanish-civil-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-places",
        "contains",
        "Spanish Civil War places is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-events",
        "contains",
        "Spanish Civil War events is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-objects",
        "contains",
        "Spanish Civil War objects & artifacts is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-factions",
        "contains",
        "Spanish Civil War factions & groups is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-concepts",
        "contains",
        "Spanish Civil War concepts is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-eras",
        "contains",
        "Spanish Civil War eras is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-works",
        "contains",
        "Spanish Civil War works & media is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-symbols",
        "contains",
        "Spanish Civil War symbols is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-controversies",
        "contains",
        "Spanish Civil War controversies is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-sources",
        "contains",
        "Spanish Civil War sources is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-geography",
        "contains",
        "Spanish Civil War geography is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-legacy",
        "contains",
        "Spanish Civil War legacy is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-practices",
        "contains",
        "Spanish Civil War practices is a primary trailhead under Spanish Civil War.",
        0.88,
        0.82
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-1",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-2",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-3",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-4",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-5",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-6",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-7",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-8",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-9",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-10",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-11",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-12",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-13",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-14",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-15",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-16",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-17",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-18",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-19",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-20",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-21",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-22",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-23",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ],
    [
        "spanish-civil-war",
        "spanish-civil-war-entry-24",
        "contains",
        "Supporting entry under Spanish Civil War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
