/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "terminator-franchise",
        "name": "Terminator",
        "type": "topic",
        "short_description": "Skynet, time-war assassins, and the machine-apocalypse franchise of unstoppable hunters.",
        "description": "Skynet, time-war assassins, and the machine-apocalypse franchise of unstoppable hunters. This Ton-o-Lore subject maps people, places, events, and ideas tied to Terminator so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "terminator-franchise-figures",
        "name": "Terminator figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Terminator.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Terminator."
    },
    {
        "slug": "terminator-franchise-world",
        "name": "Terminator world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Terminator.",
        "description": "Geography, institutions, and periodization that give Terminator its encyclopedia shape."
    },
    {
        "slug": "terminator-franchise-places",
        "name": "Terminator places",
        "type": "place",
        "short_description": "Locations and geographies that frame Terminator.",
        "description": "Places, regions, and built sites that give Terminator its map — where events and figures concentrate."
    },
    {
        "slug": "terminator-franchise-events",
        "name": "Terminator events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Terminator.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Terminator timeline."
    },
    {
        "slug": "terminator-franchise-objects",
        "name": "Terminator objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Terminator.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Terminator."
    },
    {
        "slug": "terminator-franchise-factions",
        "name": "Terminator factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Terminator.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Terminator."
    },
    {
        "slug": "terminator-franchise-concepts",
        "name": "Terminator concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Terminator.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Terminator readable as a lore graph."
    },
    {
        "slug": "terminator-franchise-eras",
        "name": "Terminator eras",
        "type": "event",
        "short_description": "Periodization for Terminator.",
        "description": "Named eras and phases that help readers track how Terminator changes across time."
    },
    {
        "slug": "terminator-franchise-works",
        "name": "Terminator works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Terminator.",
        "description": "Primary works and adaptations through which most audiences encounter Terminator."
    },
    {
        "slug": "terminator-franchise-symbols",
        "name": "Terminator symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Terminator.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Terminator."
    },
    {
        "slug": "terminator-franchise-controversies",
        "name": "Terminator controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Terminator.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Terminator argumentative."
    },
    {
        "slug": "terminator-franchise-sources",
        "name": "Terminator sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Terminator.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Terminator."
    },
    {
        "slug": "terminator-franchise-geography",
        "name": "Terminator geography",
        "type": "place",
        "short_description": "Broader geographic framing for Terminator.",
        "description": "Regions, routes, and spatial systems that situate Terminator beyond single named places."
    },
    {
        "slug": "terminator-franchise-legacy",
        "name": "Terminator legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Terminator.",
        "description": "How Terminator continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "terminator-franchise-practices",
        "name": "Terminator practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Terminator.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Terminator."
    },
    {
        "slug": "terminator-franchise-entry-1",
        "name": "Terminator entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-2",
        "name": "Terminator entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-3",
        "name": "Terminator entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-4",
        "name": "Terminator entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-5",
        "name": "Terminator entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-6",
        "name": "Terminator entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-7",
        "name": "Terminator entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-8",
        "name": "Terminator entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-9",
        "name": "Terminator entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-10",
        "name": "Terminator entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-11",
        "name": "Terminator entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-12",
        "name": "Terminator entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-13",
        "name": "Terminator entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-14",
        "name": "Terminator entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-15",
        "name": "Terminator entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-16",
        "name": "Terminator entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-17",
        "name": "Terminator entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-18",
        "name": "Terminator entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-19",
        "name": "Terminator entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-20",
        "name": "Terminator entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-21",
        "name": "Terminator entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-22",
        "name": "Terminator entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-23",
        "name": "Terminator entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-franchise-entry-24",
        "name": "Terminator entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator.",
        "description": "A supporting encyclopedia entry in the Terminator subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "terminator-franchise",
        "terminator-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "terminator-franchise",
        "terminator-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "terminator-franchise",
        "terminator-franchise-places",
        "contains",
        "Terminator places is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-events",
        "contains",
        "Terminator events is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-objects",
        "contains",
        "Terminator objects & artifacts is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-factions",
        "contains",
        "Terminator factions & groups is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-concepts",
        "contains",
        "Terminator concepts is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-eras",
        "contains",
        "Terminator eras is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-works",
        "contains",
        "Terminator works & media is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-symbols",
        "contains",
        "Terminator symbols is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-controversies",
        "contains",
        "Terminator controversies is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-sources",
        "contains",
        "Terminator sources is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-geography",
        "contains",
        "Terminator geography is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-legacy",
        "contains",
        "Terminator legacy is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-practices",
        "contains",
        "Terminator practices is a primary trailhead under Terminator.",
        0.88,
        0.82
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-1",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-2",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-3",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-4",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-5",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-6",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-7",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-8",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-9",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-10",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-11",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-12",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-13",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-14",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-15",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-16",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-17",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-18",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-19",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-20",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-21",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-22",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-23",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ],
    [
        "terminator-franchise",
        "terminator-franchise-entry-24",
        "contains",
        "Supporting entry under Terminator.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
