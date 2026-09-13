/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "plantagenet-dynasty",
        "name": "Plantagenet dynasty",
        "type": "topic",
        "short_description": "Angevin empire, Magna Carta, and the long English line before the Wars of the Roses ended it.",
        "description": "Angevin empire, Magna Carta, and the long English line before the Wars of the Roses ended it. This Ton-o-Lore subject maps people, places, events, and ideas tied to Plantagenet dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "plantagenet-dynasty-figures",
        "name": "Plantagenet dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Plantagenet dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-world",
        "name": "Plantagenet dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Plantagenet dynasty.",
        "description": "Geography, institutions, and periodization that give Plantagenet dynasty its encyclopedia shape."
    },
    {
        "slug": "plantagenet-dynasty-places",
        "name": "Plantagenet dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Plantagenet dynasty.",
        "description": "Places, regions, and built sites that give Plantagenet dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "plantagenet-dynasty-events",
        "name": "Plantagenet dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Plantagenet dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Plantagenet dynasty timeline."
    },
    {
        "slug": "plantagenet-dynasty-objects",
        "name": "Plantagenet dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Plantagenet dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-factions",
        "name": "Plantagenet dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Plantagenet dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-concepts",
        "name": "Plantagenet dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Plantagenet dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Plantagenet dynasty readable as a lore graph."
    },
    {
        "slug": "plantagenet-dynasty-eras",
        "name": "Plantagenet dynasty eras",
        "type": "event",
        "short_description": "Periodization for Plantagenet dynasty.",
        "description": "Named eras and phases that help readers track how Plantagenet dynasty changes across time."
    },
    {
        "slug": "plantagenet-dynasty-works",
        "name": "Plantagenet dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Plantagenet dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-symbols",
        "name": "Plantagenet dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Plantagenet dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-controversies",
        "name": "Plantagenet dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Plantagenet dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Plantagenet dynasty argumentative."
    },
    {
        "slug": "plantagenet-dynasty-sources",
        "name": "Plantagenet dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Plantagenet dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-geography",
        "name": "Plantagenet dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Plantagenet dynasty.",
        "description": "Regions, routes, and spatial systems that situate Plantagenet dynasty beyond single named places."
    },
    {
        "slug": "plantagenet-dynasty-legacy",
        "name": "Plantagenet dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Plantagenet dynasty.",
        "description": "How Plantagenet dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "plantagenet-dynasty-practices",
        "name": "Plantagenet dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Plantagenet dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Plantagenet dynasty."
    },
    {
        "slug": "plantagenet-dynasty-entry-1",
        "name": "Plantagenet dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-2",
        "name": "Plantagenet dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-3",
        "name": "Plantagenet dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-4",
        "name": "Plantagenet dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-5",
        "name": "Plantagenet dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-6",
        "name": "Plantagenet dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-7",
        "name": "Plantagenet dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-8",
        "name": "Plantagenet dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-9",
        "name": "Plantagenet dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-10",
        "name": "Plantagenet dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-11",
        "name": "Plantagenet dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-12",
        "name": "Plantagenet dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-13",
        "name": "Plantagenet dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-14",
        "name": "Plantagenet dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-15",
        "name": "Plantagenet dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-16",
        "name": "Plantagenet dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-17",
        "name": "Plantagenet dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-18",
        "name": "Plantagenet dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-19",
        "name": "Plantagenet dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-20",
        "name": "Plantagenet dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-21",
        "name": "Plantagenet dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-22",
        "name": "Plantagenet dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-23",
        "name": "Plantagenet dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plantagenet-dynasty-entry-24",
        "name": "Plantagenet dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plantagenet dynasty.",
        "description": "A supporting encyclopedia entry in the Plantagenet dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-places",
        "contains",
        "Plantagenet dynasty places is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-events",
        "contains",
        "Plantagenet dynasty events is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-objects",
        "contains",
        "Plantagenet dynasty objects & artifacts is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-factions",
        "contains",
        "Plantagenet dynasty factions & groups is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-concepts",
        "contains",
        "Plantagenet dynasty concepts is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-eras",
        "contains",
        "Plantagenet dynasty eras is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-works",
        "contains",
        "Plantagenet dynasty works & media is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-symbols",
        "contains",
        "Plantagenet dynasty symbols is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-controversies",
        "contains",
        "Plantagenet dynasty controversies is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-sources",
        "contains",
        "Plantagenet dynasty sources is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-geography",
        "contains",
        "Plantagenet dynasty geography is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-legacy",
        "contains",
        "Plantagenet dynasty legacy is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-practices",
        "contains",
        "Plantagenet dynasty practices is a primary trailhead under Plantagenet dynasty.",
        0.88,
        0.82
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-1",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-2",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-3",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-4",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-5",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-6",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-7",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-8",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-9",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-10",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-11",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-12",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-13",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-14",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-15",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-16",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-17",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-18",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-19",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-20",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-21",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-22",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-23",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ],
    [
        "plantagenet-dynasty",
        "plantagenet-dynasty-entry-24",
        "contains",
        "Supporting entry under Plantagenet dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
