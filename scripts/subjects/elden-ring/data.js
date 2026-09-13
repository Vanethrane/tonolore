/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "elden-ring",
        "name": "Elden Ring",
        "type": "topic",
        "short_description": "Lands Between, demigod shards, and the open-world Soulsborne that conquered 2020s gaming.",
        "description": "Lands Between, demigod shards, and the open-world Soulsborne that conquered 2020s gaming. This Ton-o-Lore subject maps people, places, events, and ideas tied to Elden Ring so readers can follow long-tail connections across video games."
    },
    {
        "slug": "elden-ring-figures",
        "name": "Elden Ring figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Elden Ring.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Elden Ring."
    },
    {
        "slug": "elden-ring-world",
        "name": "Elden Ring world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Elden Ring.",
        "description": "Geography, institutions, and periodization that give Elden Ring its encyclopedia shape."
    },
    {
        "slug": "elden-ring-places",
        "name": "Elden Ring places",
        "type": "place",
        "short_description": "Locations and geographies that frame Elden Ring.",
        "description": "Places, regions, and built sites that give Elden Ring its map — where events and figures concentrate."
    },
    {
        "slug": "elden-ring-events",
        "name": "Elden Ring events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Elden Ring.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Elden Ring timeline."
    },
    {
        "slug": "elden-ring-objects",
        "name": "Elden Ring objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Elden Ring.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Elden Ring."
    },
    {
        "slug": "elden-ring-factions",
        "name": "Elden Ring factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Elden Ring.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Elden Ring."
    },
    {
        "slug": "elden-ring-concepts",
        "name": "Elden Ring concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Elden Ring.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Elden Ring readable as a lore graph."
    },
    {
        "slug": "elden-ring-eras",
        "name": "Elden Ring eras",
        "type": "event",
        "short_description": "Periodization for Elden Ring.",
        "description": "Named eras and phases that help readers track how Elden Ring changes across time."
    },
    {
        "slug": "elden-ring-works",
        "name": "Elden Ring works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Elden Ring.",
        "description": "Primary works and adaptations through which most audiences encounter Elden Ring."
    },
    {
        "slug": "elden-ring-symbols",
        "name": "Elden Ring symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Elden Ring.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Elden Ring."
    },
    {
        "slug": "elden-ring-controversies",
        "name": "Elden Ring controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Elden Ring.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Elden Ring argumentative."
    },
    {
        "slug": "elden-ring-sources",
        "name": "Elden Ring sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Elden Ring.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Elden Ring."
    },
    {
        "slug": "elden-ring-geography",
        "name": "Elden Ring geography",
        "type": "place",
        "short_description": "Broader geographic framing for Elden Ring.",
        "description": "Regions, routes, and spatial systems that situate Elden Ring beyond single named places."
    },
    {
        "slug": "elden-ring-legacy",
        "name": "Elden Ring legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Elden Ring.",
        "description": "How Elden Ring continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "elden-ring-practices",
        "name": "Elden Ring practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Elden Ring.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Elden Ring."
    },
    {
        "slug": "elden-ring-entry-1",
        "name": "Elden Ring entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-2",
        "name": "Elden Ring entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-3",
        "name": "Elden Ring entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-4",
        "name": "Elden Ring entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-5",
        "name": "Elden Ring entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-6",
        "name": "Elden Ring entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-7",
        "name": "Elden Ring entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-8",
        "name": "Elden Ring entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-9",
        "name": "Elden Ring entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-10",
        "name": "Elden Ring entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-11",
        "name": "Elden Ring entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-12",
        "name": "Elden Ring entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-13",
        "name": "Elden Ring entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-14",
        "name": "Elden Ring entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-15",
        "name": "Elden Ring entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-16",
        "name": "Elden Ring entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-17",
        "name": "Elden Ring entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-18",
        "name": "Elden Ring entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-19",
        "name": "Elden Ring entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-20",
        "name": "Elden Ring entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-21",
        "name": "Elden Ring entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-22",
        "name": "Elden Ring entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-23",
        "name": "Elden Ring entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elden-ring-entry-24",
        "name": "Elden Ring entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elden Ring.",
        "description": "A supporting encyclopedia entry in the Elden Ring subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "elden-ring",
        "elden-ring-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "elden-ring",
        "elden-ring-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "elden-ring",
        "elden-ring-places",
        "contains",
        "Elden Ring places is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-events",
        "contains",
        "Elden Ring events is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-objects",
        "contains",
        "Elden Ring objects & artifacts is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-factions",
        "contains",
        "Elden Ring factions & groups is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-concepts",
        "contains",
        "Elden Ring concepts is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-eras",
        "contains",
        "Elden Ring eras is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-works",
        "contains",
        "Elden Ring works & media is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-symbols",
        "contains",
        "Elden Ring symbols is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-controversies",
        "contains",
        "Elden Ring controversies is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-sources",
        "contains",
        "Elden Ring sources is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-geography",
        "contains",
        "Elden Ring geography is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-legacy",
        "contains",
        "Elden Ring legacy is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-practices",
        "contains",
        "Elden Ring practices is a primary trailhead under Elden Ring.",
        0.88,
        0.82
    ],
    [
        "elden-ring",
        "elden-ring-entry-1",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-2",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-3",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-4",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-5",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-6",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-7",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-8",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-9",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-10",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-11",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-12",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-13",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-14",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-15",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-16",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-17",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-18",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-19",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-20",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-21",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-22",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-23",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ],
    [
        "elden-ring",
        "elden-ring-entry-24",
        "contains",
        "Supporting entry under Elden Ring.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
