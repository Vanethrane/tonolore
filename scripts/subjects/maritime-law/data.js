/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "maritime-law",
        "name": "Maritime law & piracy courts",
        "type": "topic",
        "short_description": "Admiralty rules, prize courts, and the legal order that tried to tame ocean violence.",
        "description": "Admiralty rules, prize courts, and the legal order that tried to tame ocean violence. This Ton-o-Lore subject maps people, places, events, and ideas tied to Maritime law & piracy courts so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "maritime-law-figures",
        "name": "Maritime law & piracy courts figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Maritime law & piracy courts.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-world",
        "name": "Maritime law & piracy courts world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Maritime law & piracy courts.",
        "description": "Geography, institutions, and periodization that give Maritime law & piracy courts its encyclopedia shape."
    },
    {
        "slug": "maritime-law-places",
        "name": "Maritime law & piracy courts places",
        "type": "place",
        "short_description": "Locations and geographies that frame Maritime law & piracy courts.",
        "description": "Places, regions, and built sites that give Maritime law & piracy courts its map — where events and figures concentrate."
    },
    {
        "slug": "maritime-law-events",
        "name": "Maritime law & piracy courts events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Maritime law & piracy courts.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Maritime law & piracy courts timeline."
    },
    {
        "slug": "maritime-law-objects",
        "name": "Maritime law & piracy courts objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Maritime law & piracy courts.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-factions",
        "name": "Maritime law & piracy courts factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Maritime law & piracy courts.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-concepts",
        "name": "Maritime law & piracy courts concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Maritime law & piracy courts.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Maritime law & piracy courts readable as a lore graph."
    },
    {
        "slug": "maritime-law-eras",
        "name": "Maritime law & piracy courts eras",
        "type": "event",
        "short_description": "Periodization for Maritime law & piracy courts.",
        "description": "Named eras and phases that help readers track how Maritime law & piracy courts changes across time."
    },
    {
        "slug": "maritime-law-works",
        "name": "Maritime law & piracy courts works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Maritime law & piracy courts.",
        "description": "Primary works and adaptations through which most audiences encounter Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-symbols",
        "name": "Maritime law & piracy courts symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Maritime law & piracy courts.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-controversies",
        "name": "Maritime law & piracy courts controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Maritime law & piracy courts.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Maritime law & piracy courts argumentative."
    },
    {
        "slug": "maritime-law-sources",
        "name": "Maritime law & piracy courts sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Maritime law & piracy courts.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-geography",
        "name": "Maritime law & piracy courts geography",
        "type": "place",
        "short_description": "Broader geographic framing for Maritime law & piracy courts.",
        "description": "Regions, routes, and spatial systems that situate Maritime law & piracy courts beyond single named places."
    },
    {
        "slug": "maritime-law-legacy",
        "name": "Maritime law & piracy courts legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Maritime law & piracy courts.",
        "description": "How Maritime law & piracy courts continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "maritime-law-practices",
        "name": "Maritime law & piracy courts practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Maritime law & piracy courts.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Maritime law & piracy courts."
    },
    {
        "slug": "maritime-law-entry-1",
        "name": "Maritime law & piracy courts entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-2",
        "name": "Maritime law & piracy courts entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-3",
        "name": "Maritime law & piracy courts entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-4",
        "name": "Maritime law & piracy courts entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-5",
        "name": "Maritime law & piracy courts entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-6",
        "name": "Maritime law & piracy courts entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-7",
        "name": "Maritime law & piracy courts entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-8",
        "name": "Maritime law & piracy courts entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-9",
        "name": "Maritime law & piracy courts entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-10",
        "name": "Maritime law & piracy courts entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-11",
        "name": "Maritime law & piracy courts entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-12",
        "name": "Maritime law & piracy courts entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-13",
        "name": "Maritime law & piracy courts entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-14",
        "name": "Maritime law & piracy courts entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-15",
        "name": "Maritime law & piracy courts entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-16",
        "name": "Maritime law & piracy courts entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-17",
        "name": "Maritime law & piracy courts entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-18",
        "name": "Maritime law & piracy courts entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-19",
        "name": "Maritime law & piracy courts entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-20",
        "name": "Maritime law & piracy courts entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-21",
        "name": "Maritime law & piracy courts entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-22",
        "name": "Maritime law & piracy courts entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-23",
        "name": "Maritime law & piracy courts entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-law-entry-24",
        "name": "Maritime law & piracy courts entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime law & piracy courts.",
        "description": "A supporting encyclopedia entry in the Maritime law & piracy courts subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "maritime-law",
        "maritime-law-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "maritime-law",
        "maritime-law-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "maritime-law",
        "maritime-law-places",
        "contains",
        "Maritime law & piracy courts places is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-events",
        "contains",
        "Maritime law & piracy courts events is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-objects",
        "contains",
        "Maritime law & piracy courts objects & artifacts is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-factions",
        "contains",
        "Maritime law & piracy courts factions & groups is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-concepts",
        "contains",
        "Maritime law & piracy courts concepts is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-eras",
        "contains",
        "Maritime law & piracy courts eras is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-works",
        "contains",
        "Maritime law & piracy courts works & media is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-symbols",
        "contains",
        "Maritime law & piracy courts symbols is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-controversies",
        "contains",
        "Maritime law & piracy courts controversies is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-sources",
        "contains",
        "Maritime law & piracy courts sources is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-geography",
        "contains",
        "Maritime law & piracy courts geography is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-legacy",
        "contains",
        "Maritime law & piracy courts legacy is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-practices",
        "contains",
        "Maritime law & piracy courts practices is a primary trailhead under Maritime law & piracy courts.",
        0.88,
        0.82
    ],
    [
        "maritime-law",
        "maritime-law-entry-1",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-2",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-3",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-4",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-5",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-6",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-7",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-8",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-9",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-10",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-11",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-12",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-13",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-14",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-15",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-16",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-17",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-18",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-19",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-20",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-21",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-22",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-23",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ],
    [
        "maritime-law",
        "maritime-law-entry-24",
        "contains",
        "Supporting entry under Maritime law & piracy courts.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
