/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "korean-war",
        "name": "Korean War",
        "type": "topic",
        "short_description": "Pusan to armistice, UN forces, and the forgotten war that froze a peninsula.",
        "description": "Pusan to armistice, UN forces, and the forgotten war that froze a peninsula. This Ton-o-Lore subject maps people, places, events, and ideas tied to Korean War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "korean-war-figures",
        "name": "Korean War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Korean War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Korean War."
    },
    {
        "slug": "korean-war-world",
        "name": "Korean War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Korean War.",
        "description": "Geography, institutions, and periodization that give Korean War its encyclopedia shape."
    },
    {
        "slug": "korean-war-places",
        "name": "Korean War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Korean War.",
        "description": "Places, regions, and built sites that give Korean War its map — where events and figures concentrate."
    },
    {
        "slug": "korean-war-events",
        "name": "Korean War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Korean War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Korean War timeline."
    },
    {
        "slug": "korean-war-objects",
        "name": "Korean War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Korean War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Korean War."
    },
    {
        "slug": "korean-war-factions",
        "name": "Korean War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Korean War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Korean War."
    },
    {
        "slug": "korean-war-concepts",
        "name": "Korean War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Korean War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Korean War readable as a lore graph."
    },
    {
        "slug": "korean-war-eras",
        "name": "Korean War eras",
        "type": "event",
        "short_description": "Periodization for Korean War.",
        "description": "Named eras and phases that help readers track how Korean War changes across time."
    },
    {
        "slug": "korean-war-works",
        "name": "Korean War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Korean War.",
        "description": "Primary works and adaptations through which most audiences encounter Korean War."
    },
    {
        "slug": "korean-war-symbols",
        "name": "Korean War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Korean War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Korean War."
    },
    {
        "slug": "korean-war-controversies",
        "name": "Korean War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Korean War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Korean War argumentative."
    },
    {
        "slug": "korean-war-sources",
        "name": "Korean War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Korean War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Korean War."
    },
    {
        "slug": "korean-war-geography",
        "name": "Korean War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Korean War.",
        "description": "Regions, routes, and spatial systems that situate Korean War beyond single named places."
    },
    {
        "slug": "korean-war-legacy",
        "name": "Korean War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Korean War.",
        "description": "How Korean War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "korean-war-practices",
        "name": "Korean War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Korean War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Korean War."
    },
    {
        "slug": "korean-war-entry-1",
        "name": "Korean War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-2",
        "name": "Korean War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-3",
        "name": "Korean War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-4",
        "name": "Korean War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-5",
        "name": "Korean War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-6",
        "name": "Korean War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-7",
        "name": "Korean War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-8",
        "name": "Korean War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-9",
        "name": "Korean War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-10",
        "name": "Korean War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-11",
        "name": "Korean War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-12",
        "name": "Korean War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-13",
        "name": "Korean War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-14",
        "name": "Korean War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-15",
        "name": "Korean War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-16",
        "name": "Korean War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-17",
        "name": "Korean War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-18",
        "name": "Korean War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-19",
        "name": "Korean War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-20",
        "name": "Korean War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-21",
        "name": "Korean War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-22",
        "name": "Korean War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-23",
        "name": "Korean War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-war-entry-24",
        "name": "Korean War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean War.",
        "description": "A supporting encyclopedia entry in the Korean War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "korean-war",
        "korean-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "korean-war",
        "korean-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "korean-war",
        "korean-war-places",
        "contains",
        "Korean War places is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-events",
        "contains",
        "Korean War events is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-objects",
        "contains",
        "Korean War objects & artifacts is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-factions",
        "contains",
        "Korean War factions & groups is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-concepts",
        "contains",
        "Korean War concepts is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-eras",
        "contains",
        "Korean War eras is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-works",
        "contains",
        "Korean War works & media is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-symbols",
        "contains",
        "Korean War symbols is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-controversies",
        "contains",
        "Korean War controversies is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-sources",
        "contains",
        "Korean War sources is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-geography",
        "contains",
        "Korean War geography is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-legacy",
        "contains",
        "Korean War legacy is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-practices",
        "contains",
        "Korean War practices is a primary trailhead under Korean War.",
        0.88,
        0.82
    ],
    [
        "korean-war",
        "korean-war-entry-1",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-2",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-3",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-4",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-5",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-6",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-7",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-8",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-9",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-10",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-11",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-12",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-13",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-14",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-15",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-16",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-17",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-18",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-19",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-20",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-21",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-22",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-23",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ],
    [
        "korean-war",
        "korean-war-entry-24",
        "contains",
        "Supporting entry under Korean War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
