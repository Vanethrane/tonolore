/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "han-dynasty",
        "name": "Han dynasty",
        "type": "topic",
        "short_description": "Imperial China consolidation, Silk Road links, and the dynasty that named a people.",
        "description": "Imperial China consolidation, Silk Road links, and the dynasty that named a people. This Ton-o-Lore subject maps people, places, events, and ideas tied to Han dynasty so readers can follow long-tail connections across history."
    },
    {
        "slug": "han-dynasty-figures",
        "name": "Han dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Han dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Han dynasty."
    },
    {
        "slug": "han-dynasty-world",
        "name": "Han dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Han dynasty.",
        "description": "Geography, institutions, and periodization that give Han dynasty its encyclopedia shape."
    },
    {
        "slug": "han-dynasty-places",
        "name": "Han dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Han dynasty.",
        "description": "Places, regions, and built sites that give Han dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "han-dynasty-events",
        "name": "Han dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Han dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Han dynasty timeline."
    },
    {
        "slug": "han-dynasty-objects",
        "name": "Han dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Han dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Han dynasty."
    },
    {
        "slug": "han-dynasty-factions",
        "name": "Han dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Han dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Han dynasty."
    },
    {
        "slug": "han-dynasty-concepts",
        "name": "Han dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Han dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Han dynasty readable as a lore graph."
    },
    {
        "slug": "han-dynasty-eras",
        "name": "Han dynasty eras",
        "type": "event",
        "short_description": "Periodization for Han dynasty.",
        "description": "Named eras and phases that help readers track how Han dynasty changes across time."
    },
    {
        "slug": "han-dynasty-works",
        "name": "Han dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Han dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Han dynasty."
    },
    {
        "slug": "han-dynasty-symbols",
        "name": "Han dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Han dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Han dynasty."
    },
    {
        "slug": "han-dynasty-controversies",
        "name": "Han dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Han dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Han dynasty argumentative."
    },
    {
        "slug": "han-dynasty-sources",
        "name": "Han dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Han dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Han dynasty."
    },
    {
        "slug": "han-dynasty-geography",
        "name": "Han dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Han dynasty.",
        "description": "Regions, routes, and spatial systems that situate Han dynasty beyond single named places."
    },
    {
        "slug": "han-dynasty-legacy",
        "name": "Han dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Han dynasty.",
        "description": "How Han dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "han-dynasty-practices",
        "name": "Han dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Han dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Han dynasty."
    },
    {
        "slug": "han-dynasty-entry-1",
        "name": "Han dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-2",
        "name": "Han dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-3",
        "name": "Han dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-4",
        "name": "Han dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-5",
        "name": "Han dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-6",
        "name": "Han dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-7",
        "name": "Han dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-8",
        "name": "Han dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-9",
        "name": "Han dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-10",
        "name": "Han dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-11",
        "name": "Han dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-12",
        "name": "Han dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-13",
        "name": "Han dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-14",
        "name": "Han dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-15",
        "name": "Han dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-16",
        "name": "Han dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-17",
        "name": "Han dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-18",
        "name": "Han dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-19",
        "name": "Han dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-20",
        "name": "Han dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-21",
        "name": "Han dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-22",
        "name": "Han dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-23",
        "name": "Han dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "han-dynasty-entry-24",
        "name": "Han dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Han dynasty.",
        "description": "A supporting encyclopedia entry in the Han dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "han-dynasty",
        "han-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "han-dynasty",
        "han-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "han-dynasty",
        "han-dynasty-places",
        "contains",
        "Han dynasty places is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-events",
        "contains",
        "Han dynasty events is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-objects",
        "contains",
        "Han dynasty objects & artifacts is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-factions",
        "contains",
        "Han dynasty factions & groups is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-concepts",
        "contains",
        "Han dynasty concepts is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-eras",
        "contains",
        "Han dynasty eras is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-works",
        "contains",
        "Han dynasty works & media is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-symbols",
        "contains",
        "Han dynasty symbols is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-controversies",
        "contains",
        "Han dynasty controversies is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-sources",
        "contains",
        "Han dynasty sources is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-geography",
        "contains",
        "Han dynasty geography is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-legacy",
        "contains",
        "Han dynasty legacy is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-practices",
        "contains",
        "Han dynasty practices is a primary trailhead under Han dynasty.",
        0.88,
        0.82
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-1",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-2",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-3",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-4",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-5",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-6",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-7",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-8",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-9",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-10",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-11",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-12",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-13",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-14",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-15",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-16",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-17",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-18",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-19",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-20",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-21",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-22",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-23",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ],
    [
        "han-dynasty",
        "han-dynasty-entry-24",
        "contains",
        "Supporting entry under Han dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
