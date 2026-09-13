/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gulf-war",
        "name": "Gulf War",
        "type": "topic",
        "short_description": "Desert Shield/Storm, coalition air power, and the 1991 conflict that remade Middle East maps.",
        "description": "Desert Shield/Storm, coalition air power, and the 1991 conflict that remade Middle East maps. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gulf War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "gulf-war-figures",
        "name": "Gulf War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gulf War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gulf War."
    },
    {
        "slug": "gulf-war-world",
        "name": "Gulf War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gulf War.",
        "description": "Geography, institutions, and periodization that give Gulf War its encyclopedia shape."
    },
    {
        "slug": "gulf-war-places",
        "name": "Gulf War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gulf War.",
        "description": "Places, regions, and built sites that give Gulf War its map — where events and figures concentrate."
    },
    {
        "slug": "gulf-war-events",
        "name": "Gulf War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gulf War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gulf War timeline."
    },
    {
        "slug": "gulf-war-objects",
        "name": "Gulf War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gulf War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gulf War."
    },
    {
        "slug": "gulf-war-factions",
        "name": "Gulf War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gulf War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gulf War."
    },
    {
        "slug": "gulf-war-concepts",
        "name": "Gulf War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gulf War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gulf War readable as a lore graph."
    },
    {
        "slug": "gulf-war-eras",
        "name": "Gulf War eras",
        "type": "event",
        "short_description": "Periodization for Gulf War.",
        "description": "Named eras and phases that help readers track how Gulf War changes across time."
    },
    {
        "slug": "gulf-war-works",
        "name": "Gulf War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gulf War.",
        "description": "Primary works and adaptations through which most audiences encounter Gulf War."
    },
    {
        "slug": "gulf-war-symbols",
        "name": "Gulf War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gulf War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gulf War."
    },
    {
        "slug": "gulf-war-controversies",
        "name": "Gulf War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gulf War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gulf War argumentative."
    },
    {
        "slug": "gulf-war-sources",
        "name": "Gulf War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gulf War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gulf War."
    },
    {
        "slug": "gulf-war-geography",
        "name": "Gulf War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gulf War.",
        "description": "Regions, routes, and spatial systems that situate Gulf War beyond single named places."
    },
    {
        "slug": "gulf-war-legacy",
        "name": "Gulf War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gulf War.",
        "description": "How Gulf War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gulf-war-practices",
        "name": "Gulf War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gulf War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gulf War."
    },
    {
        "slug": "gulf-war-entry-1",
        "name": "Gulf War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-2",
        "name": "Gulf War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-3",
        "name": "Gulf War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-4",
        "name": "Gulf War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-5",
        "name": "Gulf War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-6",
        "name": "Gulf War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-7",
        "name": "Gulf War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-8",
        "name": "Gulf War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-9",
        "name": "Gulf War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-10",
        "name": "Gulf War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-11",
        "name": "Gulf War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-12",
        "name": "Gulf War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-13",
        "name": "Gulf War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-14",
        "name": "Gulf War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-15",
        "name": "Gulf War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-16",
        "name": "Gulf War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-17",
        "name": "Gulf War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-18",
        "name": "Gulf War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-19",
        "name": "Gulf War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-20",
        "name": "Gulf War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-21",
        "name": "Gulf War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-22",
        "name": "Gulf War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-23",
        "name": "Gulf War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gulf-war-entry-24",
        "name": "Gulf War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gulf War.",
        "description": "A supporting encyclopedia entry in the Gulf War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gulf-war",
        "gulf-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gulf-war",
        "gulf-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gulf-war",
        "gulf-war-places",
        "contains",
        "Gulf War places is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-events",
        "contains",
        "Gulf War events is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-objects",
        "contains",
        "Gulf War objects & artifacts is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-factions",
        "contains",
        "Gulf War factions & groups is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-concepts",
        "contains",
        "Gulf War concepts is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-eras",
        "contains",
        "Gulf War eras is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-works",
        "contains",
        "Gulf War works & media is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-symbols",
        "contains",
        "Gulf War symbols is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-controversies",
        "contains",
        "Gulf War controversies is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-sources",
        "contains",
        "Gulf War sources is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-geography",
        "contains",
        "Gulf War geography is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-legacy",
        "contains",
        "Gulf War legacy is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-practices",
        "contains",
        "Gulf War practices is a primary trailhead under Gulf War.",
        0.88,
        0.82
    ],
    [
        "gulf-war",
        "gulf-war-entry-1",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-2",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-3",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-4",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-5",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-6",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-7",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-8",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-9",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-10",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-11",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-12",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-13",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-14",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-15",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-16",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-17",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-18",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-19",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-20",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-21",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-22",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-23",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ],
    [
        "gulf-war",
        "gulf-war-entry-24",
        "contains",
        "Supporting entry under Gulf War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
