/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "god-of-war",
        "name": "God of War",
        "type": "topic",
        "short_description": "Kratos, pantheon wars, and the mythic action franchise reborn in Norse saga form.",
        "description": "Kratos, pantheon wars, and the mythic action franchise reborn in Norse saga form. This Ton-o-Lore subject maps people, places, events, and ideas tied to God of War so readers can follow long-tail connections across video games."
    },
    {
        "slug": "god-of-war-figures",
        "name": "God of War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to God of War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring God of War."
    },
    {
        "slug": "god-of-war-world",
        "name": "God of War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame God of War.",
        "description": "Geography, institutions, and periodization that give God of War its encyclopedia shape."
    },
    {
        "slug": "god-of-war-places",
        "name": "God of War places",
        "type": "place",
        "short_description": "Locations and geographies that frame God of War.",
        "description": "Places, regions, and built sites that give God of War its map — where events and figures concentrate."
    },
    {
        "slug": "god-of-war-events",
        "name": "God of War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in God of War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the God of War timeline."
    },
    {
        "slug": "god-of-war-objects",
        "name": "God of War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to God of War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through God of War."
    },
    {
        "slug": "god-of-war-factions",
        "name": "God of War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside God of War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in God of War."
    },
    {
        "slug": "god-of-war-concepts",
        "name": "God of War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize God of War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make God of War readable as a lore graph."
    },
    {
        "slug": "god-of-war-eras",
        "name": "God of War eras",
        "type": "event",
        "short_description": "Periodization for God of War.",
        "description": "Named eras and phases that help readers track how God of War changes across time."
    },
    {
        "slug": "god-of-war-works",
        "name": "God of War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry God of War.",
        "description": "Primary works and adaptations through which most audiences encounter God of War."
    },
    {
        "slug": "god-of-war-symbols",
        "name": "God of War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with God of War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside God of War."
    },
    {
        "slug": "god-of-war-controversies",
        "name": "God of War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in God of War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep God of War argumentative."
    },
    {
        "slug": "god-of-war-sources",
        "name": "God of War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into God of War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify God of War."
    },
    {
        "slug": "god-of-war-geography",
        "name": "God of War geography",
        "type": "place",
        "short_description": "Broader geographic framing for God of War.",
        "description": "Regions, routes, and spatial systems that situate God of War beyond single named places."
    },
    {
        "slug": "god-of-war-legacy",
        "name": "God of War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of God of War.",
        "description": "How God of War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "god-of-war-practices",
        "name": "God of War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in God of War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in God of War."
    },
    {
        "slug": "god-of-war-entry-1",
        "name": "God of War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-2",
        "name": "God of War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-3",
        "name": "God of War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-4",
        "name": "God of War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-5",
        "name": "God of War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-6",
        "name": "God of War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-7",
        "name": "God of War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-8",
        "name": "God of War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-9",
        "name": "God of War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-10",
        "name": "God of War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-11",
        "name": "God of War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-12",
        "name": "God of War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-13",
        "name": "God of War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-14",
        "name": "God of War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-15",
        "name": "God of War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-16",
        "name": "God of War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-17",
        "name": "God of War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-18",
        "name": "God of War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-19",
        "name": "God of War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-20",
        "name": "God of War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-21",
        "name": "God of War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-22",
        "name": "God of War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-23",
        "name": "God of War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "god-of-war-entry-24",
        "name": "God of War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside God of War.",
        "description": "A supporting encyclopedia entry in the God of War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "god-of-war",
        "god-of-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "god-of-war",
        "god-of-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "god-of-war",
        "god-of-war-places",
        "contains",
        "God of War places is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-events",
        "contains",
        "God of War events is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-objects",
        "contains",
        "God of War objects & artifacts is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-factions",
        "contains",
        "God of War factions & groups is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-concepts",
        "contains",
        "God of War concepts is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-eras",
        "contains",
        "God of War eras is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-works",
        "contains",
        "God of War works & media is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-symbols",
        "contains",
        "God of War symbols is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-controversies",
        "contains",
        "God of War controversies is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-sources",
        "contains",
        "God of War sources is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-geography",
        "contains",
        "God of War geography is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-legacy",
        "contains",
        "God of War legacy is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-practices",
        "contains",
        "God of War practices is a primary trailhead under God of War.",
        0.88,
        0.82
    ],
    [
        "god-of-war",
        "god-of-war-entry-1",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-2",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-3",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-4",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-5",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-6",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-7",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-8",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-9",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-10",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-11",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-12",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-13",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-14",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-15",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-16",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-17",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-18",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-19",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-20",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-21",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-22",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-23",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ],
    [
        "god-of-war",
        "god-of-war-entry-24",
        "contains",
        "Supporting entry under God of War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
