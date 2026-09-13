/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "android-netrunner-lcg",
        "name": "Netrunner LCG cycles",
        "type": "topic",
        "short_description": "Data packs, banlists, and the living-card era that expanded Netrunner’s megacorp war.",
        "description": "Data packs, banlists, and the living-card era that expanded Netrunner’s megacorp war. This Ton-o-Lore subject maps people, places, events, and ideas tied to Netrunner LCG cycles so readers can follow long-tail connections across card games."
    },
    {
        "slug": "android-netrunner-lcg-figures",
        "name": "Netrunner LCG cycles figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Netrunner LCG cycles.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-world",
        "name": "Netrunner LCG cycles world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Netrunner LCG cycles.",
        "description": "Geography, institutions, and periodization that give Netrunner LCG cycles its encyclopedia shape."
    },
    {
        "slug": "android-netrunner-lcg-places",
        "name": "Netrunner LCG cycles places",
        "type": "place",
        "short_description": "Locations and geographies that frame Netrunner LCG cycles.",
        "description": "Places, regions, and built sites that give Netrunner LCG cycles its map — where events and figures concentrate."
    },
    {
        "slug": "android-netrunner-lcg-events",
        "name": "Netrunner LCG cycles events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Netrunner LCG cycles.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Netrunner LCG cycles timeline."
    },
    {
        "slug": "android-netrunner-lcg-objects",
        "name": "Netrunner LCG cycles objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Netrunner LCG cycles.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-factions",
        "name": "Netrunner LCG cycles factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Netrunner LCG cycles.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-concepts",
        "name": "Netrunner LCG cycles concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Netrunner LCG cycles.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Netrunner LCG cycles readable as a lore graph."
    },
    {
        "slug": "android-netrunner-lcg-eras",
        "name": "Netrunner LCG cycles eras",
        "type": "event",
        "short_description": "Periodization for Netrunner LCG cycles.",
        "description": "Named eras and phases that help readers track how Netrunner LCG cycles changes across time."
    },
    {
        "slug": "android-netrunner-lcg-works",
        "name": "Netrunner LCG cycles works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Netrunner LCG cycles.",
        "description": "Primary works and adaptations through which most audiences encounter Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-symbols",
        "name": "Netrunner LCG cycles symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Netrunner LCG cycles.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-controversies",
        "name": "Netrunner LCG cycles controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Netrunner LCG cycles.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Netrunner LCG cycles argumentative."
    },
    {
        "slug": "android-netrunner-lcg-sources",
        "name": "Netrunner LCG cycles sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Netrunner LCG cycles.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-geography",
        "name": "Netrunner LCG cycles geography",
        "type": "place",
        "short_description": "Broader geographic framing for Netrunner LCG cycles.",
        "description": "Regions, routes, and spatial systems that situate Netrunner LCG cycles beyond single named places."
    },
    {
        "slug": "android-netrunner-lcg-legacy",
        "name": "Netrunner LCG cycles legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Netrunner LCG cycles.",
        "description": "How Netrunner LCG cycles continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "android-netrunner-lcg-practices",
        "name": "Netrunner LCG cycles practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Netrunner LCG cycles.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Netrunner LCG cycles."
    },
    {
        "slug": "android-netrunner-lcg-entry-1",
        "name": "Netrunner LCG cycles entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-2",
        "name": "Netrunner LCG cycles entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-3",
        "name": "Netrunner LCG cycles entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-4",
        "name": "Netrunner LCG cycles entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-5",
        "name": "Netrunner LCG cycles entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-6",
        "name": "Netrunner LCG cycles entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-7",
        "name": "Netrunner LCG cycles entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-8",
        "name": "Netrunner LCG cycles entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-9",
        "name": "Netrunner LCG cycles entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-10",
        "name": "Netrunner LCG cycles entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-11",
        "name": "Netrunner LCG cycles entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-12",
        "name": "Netrunner LCG cycles entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-13",
        "name": "Netrunner LCG cycles entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-14",
        "name": "Netrunner LCG cycles entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-15",
        "name": "Netrunner LCG cycles entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-16",
        "name": "Netrunner LCG cycles entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-17",
        "name": "Netrunner LCG cycles entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-18",
        "name": "Netrunner LCG cycles entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-19",
        "name": "Netrunner LCG cycles entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-20",
        "name": "Netrunner LCG cycles entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-21",
        "name": "Netrunner LCG cycles entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-22",
        "name": "Netrunner LCG cycles entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-23",
        "name": "Netrunner LCG cycles entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "android-netrunner-lcg-entry-24",
        "name": "Netrunner LCG cycles entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Netrunner LCG cycles.",
        "description": "A supporting encyclopedia entry in the Netrunner LCG cycles subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-places",
        "contains",
        "Netrunner LCG cycles places is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-events",
        "contains",
        "Netrunner LCG cycles events is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-objects",
        "contains",
        "Netrunner LCG cycles objects & artifacts is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-factions",
        "contains",
        "Netrunner LCG cycles factions & groups is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-concepts",
        "contains",
        "Netrunner LCG cycles concepts is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-eras",
        "contains",
        "Netrunner LCG cycles eras is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-works",
        "contains",
        "Netrunner LCG cycles works & media is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-symbols",
        "contains",
        "Netrunner LCG cycles symbols is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-controversies",
        "contains",
        "Netrunner LCG cycles controversies is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-sources",
        "contains",
        "Netrunner LCG cycles sources is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-geography",
        "contains",
        "Netrunner LCG cycles geography is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-legacy",
        "contains",
        "Netrunner LCG cycles legacy is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-practices",
        "contains",
        "Netrunner LCG cycles practices is a primary trailhead under Netrunner LCG cycles.",
        0.88,
        0.82
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-1",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-2",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-3",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-4",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-5",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-6",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-7",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-8",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-9",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-10",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-11",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-12",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-13",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-14",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-15",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-16",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-17",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-18",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-19",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-20",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-21",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-22",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-23",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ],
    [
        "android-netrunner-lcg",
        "android-netrunner-lcg-entry-24",
        "contains",
        "Supporting entry under Netrunner LCG cycles.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
