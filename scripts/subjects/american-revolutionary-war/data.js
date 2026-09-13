/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-revolutionary-war",
        "name": "American Revolutionary War",
        "type": "topic",
        "short_description": "Militia, Continental Army, and the war that created the United States.",
        "description": "Militia, Continental Army, and the war that created the United States. This Ton-o-Lore subject maps people, places, events, and ideas tied to American Revolutionary War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "american-revolutionary-war-figures",
        "name": "American Revolutionary War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to American Revolutionary War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-world",
        "name": "American Revolutionary War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame American Revolutionary War.",
        "description": "Geography, institutions, and periodization that give American Revolutionary War its encyclopedia shape."
    },
    {
        "slug": "american-revolutionary-war-places",
        "name": "American Revolutionary War places",
        "type": "place",
        "short_description": "Locations and geographies that frame American Revolutionary War.",
        "description": "Places, regions, and built sites that give American Revolutionary War its map — where events and figures concentrate."
    },
    {
        "slug": "american-revolutionary-war-events",
        "name": "American Revolutionary War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in American Revolutionary War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the American Revolutionary War timeline."
    },
    {
        "slug": "american-revolutionary-war-objects",
        "name": "American Revolutionary War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to American Revolutionary War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-factions",
        "name": "American Revolutionary War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside American Revolutionary War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-concepts",
        "name": "American Revolutionary War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize American Revolutionary War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make American Revolutionary War readable as a lore graph."
    },
    {
        "slug": "american-revolutionary-war-eras",
        "name": "American Revolutionary War eras",
        "type": "event",
        "short_description": "Periodization for American Revolutionary War.",
        "description": "Named eras and phases that help readers track how American Revolutionary War changes across time."
    },
    {
        "slug": "american-revolutionary-war-works",
        "name": "American Revolutionary War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry American Revolutionary War.",
        "description": "Primary works and adaptations through which most audiences encounter American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-symbols",
        "name": "American Revolutionary War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with American Revolutionary War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-controversies",
        "name": "American Revolutionary War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in American Revolutionary War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep American Revolutionary War argumentative."
    },
    {
        "slug": "american-revolutionary-war-sources",
        "name": "American Revolutionary War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into American Revolutionary War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-geography",
        "name": "American Revolutionary War geography",
        "type": "place",
        "short_description": "Broader geographic framing for American Revolutionary War.",
        "description": "Regions, routes, and spatial systems that situate American Revolutionary War beyond single named places."
    },
    {
        "slug": "american-revolutionary-war-legacy",
        "name": "American Revolutionary War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of American Revolutionary War.",
        "description": "How American Revolutionary War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-revolutionary-war-practices",
        "name": "American Revolutionary War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in American Revolutionary War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in American Revolutionary War."
    },
    {
        "slug": "american-revolutionary-war-entry-1",
        "name": "American Revolutionary War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-2",
        "name": "American Revolutionary War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-3",
        "name": "American Revolutionary War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-4",
        "name": "American Revolutionary War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-5",
        "name": "American Revolutionary War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-6",
        "name": "American Revolutionary War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-7",
        "name": "American Revolutionary War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-8",
        "name": "American Revolutionary War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-9",
        "name": "American Revolutionary War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-10",
        "name": "American Revolutionary War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-11",
        "name": "American Revolutionary War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-12",
        "name": "American Revolutionary War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-13",
        "name": "American Revolutionary War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-14",
        "name": "American Revolutionary War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-15",
        "name": "American Revolutionary War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-16",
        "name": "American Revolutionary War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-17",
        "name": "American Revolutionary War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-18",
        "name": "American Revolutionary War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-19",
        "name": "American Revolutionary War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-20",
        "name": "American Revolutionary War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-21",
        "name": "American Revolutionary War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-22",
        "name": "American Revolutionary War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-23",
        "name": "American Revolutionary War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-revolutionary-war-entry-24",
        "name": "American Revolutionary War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Revolutionary War.",
        "description": "A supporting encyclopedia entry in the American Revolutionary War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-revolutionary-war",
        "american-revolutionary-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-places",
        "contains",
        "American Revolutionary War places is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-events",
        "contains",
        "American Revolutionary War events is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-objects",
        "contains",
        "American Revolutionary War objects & artifacts is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-factions",
        "contains",
        "American Revolutionary War factions & groups is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-concepts",
        "contains",
        "American Revolutionary War concepts is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-eras",
        "contains",
        "American Revolutionary War eras is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-works",
        "contains",
        "American Revolutionary War works & media is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-symbols",
        "contains",
        "American Revolutionary War symbols is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-controversies",
        "contains",
        "American Revolutionary War controversies is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-sources",
        "contains",
        "American Revolutionary War sources is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-geography",
        "contains",
        "American Revolutionary War geography is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-legacy",
        "contains",
        "American Revolutionary War legacy is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-practices",
        "contains",
        "American Revolutionary War practices is a primary trailhead under American Revolutionary War.",
        0.88,
        0.82
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-1",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-2",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-3",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-4",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-5",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-6",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-7",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-8",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-9",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-10",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-11",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-12",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-13",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-14",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-15",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-16",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-17",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-18",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-19",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-20",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-21",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-22",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-23",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ],
    [
        "american-revolutionary-war",
        "american-revolutionary-war-entry-24",
        "contains",
        "Supporting entry under American Revolutionary War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
