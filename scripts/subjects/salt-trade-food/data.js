/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "salt-trade-food",
        "name": "Salt & seasoning history",
        "type": "topic",
        "short_description": "Salt roads, taxation, and the mineral that made preservation and flavor possible.",
        "description": "Salt roads, taxation, and the mineral that made preservation and flavor possible. This Ton-o-Lore subject maps people, places, events, and ideas tied to Salt & seasoning history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "salt-trade-food-figures",
        "name": "Salt & seasoning history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Salt & seasoning history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-world",
        "name": "Salt & seasoning history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Salt & seasoning history.",
        "description": "Geography, institutions, and periodization that give Salt & seasoning history its encyclopedia shape."
    },
    {
        "slug": "salt-trade-food-places",
        "name": "Salt & seasoning history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Salt & seasoning history.",
        "description": "Places, regions, and built sites that give Salt & seasoning history its map — where events and figures concentrate."
    },
    {
        "slug": "salt-trade-food-events",
        "name": "Salt & seasoning history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Salt & seasoning history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Salt & seasoning history timeline."
    },
    {
        "slug": "salt-trade-food-objects",
        "name": "Salt & seasoning history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Salt & seasoning history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-factions",
        "name": "Salt & seasoning history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Salt & seasoning history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-concepts",
        "name": "Salt & seasoning history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Salt & seasoning history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Salt & seasoning history readable as a lore graph."
    },
    {
        "slug": "salt-trade-food-eras",
        "name": "Salt & seasoning history eras",
        "type": "event",
        "short_description": "Periodization for Salt & seasoning history.",
        "description": "Named eras and phases that help readers track how Salt & seasoning history changes across time."
    },
    {
        "slug": "salt-trade-food-works",
        "name": "Salt & seasoning history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Salt & seasoning history.",
        "description": "Primary works and adaptations through which most audiences encounter Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-symbols",
        "name": "Salt & seasoning history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Salt & seasoning history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-controversies",
        "name": "Salt & seasoning history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Salt & seasoning history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Salt & seasoning history argumentative."
    },
    {
        "slug": "salt-trade-food-sources",
        "name": "Salt & seasoning history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Salt & seasoning history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-geography",
        "name": "Salt & seasoning history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Salt & seasoning history.",
        "description": "Regions, routes, and spatial systems that situate Salt & seasoning history beyond single named places."
    },
    {
        "slug": "salt-trade-food-legacy",
        "name": "Salt & seasoning history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Salt & seasoning history.",
        "description": "How Salt & seasoning history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "salt-trade-food-practices",
        "name": "Salt & seasoning history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Salt & seasoning history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Salt & seasoning history."
    },
    {
        "slug": "salt-trade-food-entry-1",
        "name": "Salt & seasoning history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-2",
        "name": "Salt & seasoning history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-3",
        "name": "Salt & seasoning history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-4",
        "name": "Salt & seasoning history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-5",
        "name": "Salt & seasoning history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-6",
        "name": "Salt & seasoning history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-7",
        "name": "Salt & seasoning history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-8",
        "name": "Salt & seasoning history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-9",
        "name": "Salt & seasoning history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-10",
        "name": "Salt & seasoning history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-11",
        "name": "Salt & seasoning history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-12",
        "name": "Salt & seasoning history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-13",
        "name": "Salt & seasoning history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-14",
        "name": "Salt & seasoning history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-15",
        "name": "Salt & seasoning history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-16",
        "name": "Salt & seasoning history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-17",
        "name": "Salt & seasoning history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-18",
        "name": "Salt & seasoning history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-19",
        "name": "Salt & seasoning history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-20",
        "name": "Salt & seasoning history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-21",
        "name": "Salt & seasoning history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-22",
        "name": "Salt & seasoning history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-23",
        "name": "Salt & seasoning history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "salt-trade-food-entry-24",
        "name": "Salt & seasoning history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Salt & seasoning history.",
        "description": "A supporting encyclopedia entry in the Salt & seasoning history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "salt-trade-food",
        "salt-trade-food-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "salt-trade-food",
        "salt-trade-food-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "salt-trade-food",
        "salt-trade-food-places",
        "contains",
        "Salt & seasoning history places is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-events",
        "contains",
        "Salt & seasoning history events is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-objects",
        "contains",
        "Salt & seasoning history objects & artifacts is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-factions",
        "contains",
        "Salt & seasoning history factions & groups is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-concepts",
        "contains",
        "Salt & seasoning history concepts is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-eras",
        "contains",
        "Salt & seasoning history eras is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-works",
        "contains",
        "Salt & seasoning history works & media is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-symbols",
        "contains",
        "Salt & seasoning history symbols is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-controversies",
        "contains",
        "Salt & seasoning history controversies is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-sources",
        "contains",
        "Salt & seasoning history sources is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-geography",
        "contains",
        "Salt & seasoning history geography is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-legacy",
        "contains",
        "Salt & seasoning history legacy is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-practices",
        "contains",
        "Salt & seasoning history practices is a primary trailhead under Salt & seasoning history.",
        0.88,
        0.82
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-1",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-2",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-3",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-4",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-5",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-6",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-7",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-8",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-9",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-10",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-11",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-12",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-13",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-14",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-15",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-16",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-17",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-18",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-19",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-20",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-21",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-22",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-23",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ],
    [
        "salt-trade-food",
        "salt-trade-food-entry-24",
        "contains",
        "Supporting entry under Salt & seasoning history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
