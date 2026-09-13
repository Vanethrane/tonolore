/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hundred-years-war",
        "name": "Hundred Years' War",
        "type": "topic",
        "short_description": "Crécy to Castillon, longbows, and the dynastic war that remade France and England.",
        "description": "Crécy to Castillon, longbows, and the dynastic war that remade France and England. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hundred Years' War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "hundred-years-war-figures",
        "name": "Hundred Years' War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hundred Years' War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-world",
        "name": "Hundred Years' War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hundred Years' War.",
        "description": "Geography, institutions, and periodization that give Hundred Years' War its encyclopedia shape."
    },
    {
        "slug": "hundred-years-war-places",
        "name": "Hundred Years' War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hundred Years' War.",
        "description": "Places, regions, and built sites that give Hundred Years' War its map — where events and figures concentrate."
    },
    {
        "slug": "hundred-years-war-events",
        "name": "Hundred Years' War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hundred Years' War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hundred Years' War timeline."
    },
    {
        "slug": "hundred-years-war-objects",
        "name": "Hundred Years' War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hundred Years' War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-factions",
        "name": "Hundred Years' War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hundred Years' War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-concepts",
        "name": "Hundred Years' War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hundred Years' War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hundred Years' War readable as a lore graph."
    },
    {
        "slug": "hundred-years-war-eras",
        "name": "Hundred Years' War eras",
        "type": "event",
        "short_description": "Periodization for Hundred Years' War.",
        "description": "Named eras and phases that help readers track how Hundred Years' War changes across time."
    },
    {
        "slug": "hundred-years-war-works",
        "name": "Hundred Years' War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hundred Years' War.",
        "description": "Primary works and adaptations through which most audiences encounter Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-symbols",
        "name": "Hundred Years' War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hundred Years' War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-controversies",
        "name": "Hundred Years' War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hundred Years' War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hundred Years' War argumentative."
    },
    {
        "slug": "hundred-years-war-sources",
        "name": "Hundred Years' War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hundred Years' War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-geography",
        "name": "Hundred Years' War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hundred Years' War.",
        "description": "Regions, routes, and spatial systems that situate Hundred Years' War beyond single named places."
    },
    {
        "slug": "hundred-years-war-legacy",
        "name": "Hundred Years' War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hundred Years' War.",
        "description": "How Hundred Years' War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hundred-years-war-practices",
        "name": "Hundred Years' War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hundred Years' War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hundred Years' War."
    },
    {
        "slug": "hundred-years-war-entry-1",
        "name": "Hundred Years' War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-2",
        "name": "Hundred Years' War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-3",
        "name": "Hundred Years' War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-4",
        "name": "Hundred Years' War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-5",
        "name": "Hundred Years' War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-6",
        "name": "Hundred Years' War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-7",
        "name": "Hundred Years' War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-8",
        "name": "Hundred Years' War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-9",
        "name": "Hundred Years' War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-10",
        "name": "Hundred Years' War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-11",
        "name": "Hundred Years' War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-12",
        "name": "Hundred Years' War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-13",
        "name": "Hundred Years' War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-14",
        "name": "Hundred Years' War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-15",
        "name": "Hundred Years' War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-16",
        "name": "Hundred Years' War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-17",
        "name": "Hundred Years' War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-18",
        "name": "Hundred Years' War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-19",
        "name": "Hundred Years' War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-20",
        "name": "Hundred Years' War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-21",
        "name": "Hundred Years' War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-22",
        "name": "Hundred Years' War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-23",
        "name": "Hundred Years' War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hundred-years-war-entry-24",
        "name": "Hundred Years' War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hundred Years' War.",
        "description": "A supporting encyclopedia entry in the Hundred Years' War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hundred-years-war",
        "hundred-years-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hundred-years-war",
        "hundred-years-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hundred-years-war",
        "hundred-years-war-places",
        "contains",
        "Hundred Years' War places is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-events",
        "contains",
        "Hundred Years' War events is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-objects",
        "contains",
        "Hundred Years' War objects & artifacts is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-factions",
        "contains",
        "Hundred Years' War factions & groups is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-concepts",
        "contains",
        "Hundred Years' War concepts is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-eras",
        "contains",
        "Hundred Years' War eras is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-works",
        "contains",
        "Hundred Years' War works & media is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-symbols",
        "contains",
        "Hundred Years' War symbols is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-controversies",
        "contains",
        "Hundred Years' War controversies is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-sources",
        "contains",
        "Hundred Years' War sources is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-geography",
        "contains",
        "Hundred Years' War geography is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-legacy",
        "contains",
        "Hundred Years' War legacy is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-practices",
        "contains",
        "Hundred Years' War practices is a primary trailhead under Hundred Years' War.",
        0.88,
        0.82
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-1",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-2",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-3",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-4",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-5",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-6",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-7",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-8",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-9",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-10",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-11",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-12",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-13",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-14",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-15",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-16",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-17",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-18",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-19",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-20",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-21",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-22",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-23",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ],
    [
        "hundred-years-war",
        "hundred-years-war-entry-24",
        "contains",
        "Supporting entry under Hundred Years' War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
