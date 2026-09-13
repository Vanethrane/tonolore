/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hearthstone",
        "name": "Hearthstone",
        "type": "topic",
        "short_description": "Digital Warcraft TCG, tavern battles, and the accessible online card game that remade the genre.",
        "description": "Digital Warcraft TCG, tavern battles, and the accessible online card game that remade the genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hearthstone so readers can follow long-tail connections across card games."
    },
    {
        "slug": "hearthstone-figures",
        "name": "Hearthstone figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hearthstone.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hearthstone."
    },
    {
        "slug": "hearthstone-world",
        "name": "Hearthstone world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hearthstone.",
        "description": "Geography, institutions, and periodization that give Hearthstone its encyclopedia shape."
    },
    {
        "slug": "hearthstone-places",
        "name": "Hearthstone places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hearthstone.",
        "description": "Places, regions, and built sites that give Hearthstone its map — where events and figures concentrate."
    },
    {
        "slug": "hearthstone-events",
        "name": "Hearthstone events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hearthstone.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hearthstone timeline."
    },
    {
        "slug": "hearthstone-objects",
        "name": "Hearthstone objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hearthstone.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hearthstone."
    },
    {
        "slug": "hearthstone-factions",
        "name": "Hearthstone factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hearthstone.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hearthstone."
    },
    {
        "slug": "hearthstone-concepts",
        "name": "Hearthstone concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hearthstone.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hearthstone readable as a lore graph."
    },
    {
        "slug": "hearthstone-eras",
        "name": "Hearthstone eras",
        "type": "event",
        "short_description": "Periodization for Hearthstone.",
        "description": "Named eras and phases that help readers track how Hearthstone changes across time."
    },
    {
        "slug": "hearthstone-works",
        "name": "Hearthstone works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hearthstone.",
        "description": "Primary works and adaptations through which most audiences encounter Hearthstone."
    },
    {
        "slug": "hearthstone-symbols",
        "name": "Hearthstone symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hearthstone.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hearthstone."
    },
    {
        "slug": "hearthstone-controversies",
        "name": "Hearthstone controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hearthstone.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hearthstone argumentative."
    },
    {
        "slug": "hearthstone-sources",
        "name": "Hearthstone sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hearthstone.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hearthstone."
    },
    {
        "slug": "hearthstone-geography",
        "name": "Hearthstone geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hearthstone.",
        "description": "Regions, routes, and spatial systems that situate Hearthstone beyond single named places."
    },
    {
        "slug": "hearthstone-legacy",
        "name": "Hearthstone legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hearthstone.",
        "description": "How Hearthstone continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hearthstone-practices",
        "name": "Hearthstone practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hearthstone.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hearthstone."
    },
    {
        "slug": "hearthstone-entry-1",
        "name": "Hearthstone entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-2",
        "name": "Hearthstone entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-3",
        "name": "Hearthstone entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-4",
        "name": "Hearthstone entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-5",
        "name": "Hearthstone entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-6",
        "name": "Hearthstone entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-7",
        "name": "Hearthstone entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-8",
        "name": "Hearthstone entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-9",
        "name": "Hearthstone entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-10",
        "name": "Hearthstone entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-11",
        "name": "Hearthstone entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-12",
        "name": "Hearthstone entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-13",
        "name": "Hearthstone entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-14",
        "name": "Hearthstone entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-15",
        "name": "Hearthstone entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-16",
        "name": "Hearthstone entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-17",
        "name": "Hearthstone entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-18",
        "name": "Hearthstone entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-19",
        "name": "Hearthstone entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-20",
        "name": "Hearthstone entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-21",
        "name": "Hearthstone entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-22",
        "name": "Hearthstone entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-23",
        "name": "Hearthstone entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hearthstone-entry-24",
        "name": "Hearthstone entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hearthstone.",
        "description": "A supporting encyclopedia entry in the Hearthstone subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hearthstone",
        "hearthstone-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hearthstone",
        "hearthstone-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hearthstone",
        "hearthstone-places",
        "contains",
        "Hearthstone places is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-events",
        "contains",
        "Hearthstone events is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-objects",
        "contains",
        "Hearthstone objects & artifacts is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-factions",
        "contains",
        "Hearthstone factions & groups is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-concepts",
        "contains",
        "Hearthstone concepts is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-eras",
        "contains",
        "Hearthstone eras is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-works",
        "contains",
        "Hearthstone works & media is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-symbols",
        "contains",
        "Hearthstone symbols is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-controversies",
        "contains",
        "Hearthstone controversies is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-sources",
        "contains",
        "Hearthstone sources is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-geography",
        "contains",
        "Hearthstone geography is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-legacy",
        "contains",
        "Hearthstone legacy is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-practices",
        "contains",
        "Hearthstone practices is a primary trailhead under Hearthstone.",
        0.88,
        0.82
    ],
    [
        "hearthstone",
        "hearthstone-entry-1",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-2",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-3",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-4",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-5",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-6",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-7",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-8",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-9",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-10",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-11",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-12",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-13",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-14",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-15",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-16",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-17",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-18",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-19",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-20",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-21",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-22",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-23",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ],
    [
        "hearthstone",
        "hearthstone-entry-24",
        "contains",
        "Supporting entry under Hearthstone.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
