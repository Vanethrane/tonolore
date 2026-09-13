/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-civil-war",
        "name": "American Civil War",
        "type": "topic",
        "short_description": "Secession, battles, emancipation, and the conflict that redefined the United States.",
        "description": "Secession, battles, emancipation, and the conflict that redefined the United States. This Ton-o-Lore subject maps people, places, events, and ideas tied to American Civil War so readers can follow long-tail connections across history."
    },
    {
        "slug": "american-civil-war-figures",
        "name": "American Civil War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to American Civil War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring American Civil War."
    },
    {
        "slug": "american-civil-war-world",
        "name": "American Civil War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame American Civil War.",
        "description": "Geography, institutions, and periodization that give American Civil War its encyclopedia shape."
    },
    {
        "slug": "american-civil-war-places",
        "name": "American Civil War places",
        "type": "place",
        "short_description": "Locations and geographies that frame American Civil War.",
        "description": "Places, regions, and built sites that give American Civil War its map — where events and figures concentrate."
    },
    {
        "slug": "american-civil-war-events",
        "name": "American Civil War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in American Civil War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the American Civil War timeline."
    },
    {
        "slug": "american-civil-war-objects",
        "name": "American Civil War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to American Civil War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through American Civil War."
    },
    {
        "slug": "american-civil-war-factions",
        "name": "American Civil War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside American Civil War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in American Civil War."
    },
    {
        "slug": "american-civil-war-concepts",
        "name": "American Civil War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize American Civil War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make American Civil War readable as a lore graph."
    },
    {
        "slug": "american-civil-war-eras",
        "name": "American Civil War eras",
        "type": "event",
        "short_description": "Periodization for American Civil War.",
        "description": "Named eras and phases that help readers track how American Civil War changes across time."
    },
    {
        "slug": "american-civil-war-works",
        "name": "American Civil War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry American Civil War.",
        "description": "Primary works and adaptations through which most audiences encounter American Civil War."
    },
    {
        "slug": "american-civil-war-symbols",
        "name": "American Civil War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with American Civil War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside American Civil War."
    },
    {
        "slug": "american-civil-war-controversies",
        "name": "American Civil War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in American Civil War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep American Civil War argumentative."
    },
    {
        "slug": "american-civil-war-sources",
        "name": "American Civil War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into American Civil War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify American Civil War."
    },
    {
        "slug": "american-civil-war-geography",
        "name": "American Civil War geography",
        "type": "place",
        "short_description": "Broader geographic framing for American Civil War.",
        "description": "Regions, routes, and spatial systems that situate American Civil War beyond single named places."
    },
    {
        "slug": "american-civil-war-legacy",
        "name": "American Civil War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of American Civil War.",
        "description": "How American Civil War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-civil-war-practices",
        "name": "American Civil War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in American Civil War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in American Civil War."
    },
    {
        "slug": "american-civil-war-entry-1",
        "name": "American Civil War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-2",
        "name": "American Civil War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-3",
        "name": "American Civil War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-4",
        "name": "American Civil War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-5",
        "name": "American Civil War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-6",
        "name": "American Civil War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-7",
        "name": "American Civil War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-8",
        "name": "American Civil War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-9",
        "name": "American Civil War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-10",
        "name": "American Civil War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-11",
        "name": "American Civil War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-12",
        "name": "American Civil War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-13",
        "name": "American Civil War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-14",
        "name": "American Civil War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-15",
        "name": "American Civil War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-16",
        "name": "American Civil War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-17",
        "name": "American Civil War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-18",
        "name": "American Civil War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-19",
        "name": "American Civil War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-20",
        "name": "American Civil War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-21",
        "name": "American Civil War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-22",
        "name": "American Civil War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-23",
        "name": "American Civil War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-civil-war-entry-24",
        "name": "American Civil War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Civil War.",
        "description": "A supporting encyclopedia entry in the American Civil War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-civil-war",
        "american-civil-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-civil-war",
        "american-civil-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-civil-war",
        "american-civil-war-places",
        "contains",
        "American Civil War places is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-events",
        "contains",
        "American Civil War events is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-objects",
        "contains",
        "American Civil War objects & artifacts is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-factions",
        "contains",
        "American Civil War factions & groups is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-concepts",
        "contains",
        "American Civil War concepts is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-eras",
        "contains",
        "American Civil War eras is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-works",
        "contains",
        "American Civil War works & media is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-symbols",
        "contains",
        "American Civil War symbols is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-controversies",
        "contains",
        "American Civil War controversies is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-sources",
        "contains",
        "American Civil War sources is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-geography",
        "contains",
        "American Civil War geography is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-legacy",
        "contains",
        "American Civil War legacy is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-practices",
        "contains",
        "American Civil War practices is a primary trailhead under American Civil War.",
        0.88,
        0.82
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-1",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-2",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-3",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-4",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-5",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-6",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-7",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-8",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-9",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-10",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-11",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-12",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-13",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-14",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-15",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-16",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-17",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-18",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-19",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-20",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-21",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-22",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-23",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ],
    [
        "american-civil-war",
        "american-civil-war-entry-24",
        "contains",
        "Supporting entry under American Civil War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
