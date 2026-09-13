/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wrestle-kingdom",
        "name": "Wrestle Kingdom",
        "type": "topic",
        "short_description": "Tokyo Dome January tradition, title plate tectonics, and New Japan’s yearly myth-making card.",
        "description": "Tokyo Dome January tradition, title plate tectonics, and New Japan’s yearly myth-making card. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wrestle Kingdom so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wrestle-kingdom-figures",
        "name": "Wrestle Kingdom figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wrestle Kingdom.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-world",
        "name": "Wrestle Kingdom world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wrestle Kingdom.",
        "description": "Geography, institutions, and periodization that give Wrestle Kingdom its encyclopedia shape."
    },
    {
        "slug": "wrestle-kingdom-places",
        "name": "Wrestle Kingdom places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wrestle Kingdom.",
        "description": "Places, regions, and built sites that give Wrestle Kingdom its map — where events and figures concentrate."
    },
    {
        "slug": "wrestle-kingdom-events",
        "name": "Wrestle Kingdom events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wrestle Kingdom.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wrestle Kingdom timeline."
    },
    {
        "slug": "wrestle-kingdom-objects",
        "name": "Wrestle Kingdom objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wrestle Kingdom.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-factions",
        "name": "Wrestle Kingdom factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wrestle Kingdom.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-concepts",
        "name": "Wrestle Kingdom concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wrestle Kingdom.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wrestle Kingdom readable as a lore graph."
    },
    {
        "slug": "wrestle-kingdom-eras",
        "name": "Wrestle Kingdom eras",
        "type": "event",
        "short_description": "Periodization for Wrestle Kingdom.",
        "description": "Named eras and phases that help readers track how Wrestle Kingdom changes across time."
    },
    {
        "slug": "wrestle-kingdom-works",
        "name": "Wrestle Kingdom works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wrestle Kingdom.",
        "description": "Primary works and adaptations through which most audiences encounter Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-symbols",
        "name": "Wrestle Kingdom symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wrestle Kingdom.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-controversies",
        "name": "Wrestle Kingdom controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wrestle Kingdom.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wrestle Kingdom argumentative."
    },
    {
        "slug": "wrestle-kingdom-sources",
        "name": "Wrestle Kingdom sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wrestle Kingdom.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-geography",
        "name": "Wrestle Kingdom geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wrestle Kingdom.",
        "description": "Regions, routes, and spatial systems that situate Wrestle Kingdom beyond single named places."
    },
    {
        "slug": "wrestle-kingdom-legacy",
        "name": "Wrestle Kingdom legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wrestle Kingdom.",
        "description": "How Wrestle Kingdom continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wrestle-kingdom-practices",
        "name": "Wrestle Kingdom practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wrestle Kingdom.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wrestle Kingdom."
    },
    {
        "slug": "wrestle-kingdom-entry-1",
        "name": "Wrestle Kingdom entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-2",
        "name": "Wrestle Kingdom entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-3",
        "name": "Wrestle Kingdom entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-4",
        "name": "Wrestle Kingdom entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-5",
        "name": "Wrestle Kingdom entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-6",
        "name": "Wrestle Kingdom entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-7",
        "name": "Wrestle Kingdom entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-8",
        "name": "Wrestle Kingdom entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-9",
        "name": "Wrestle Kingdom entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-10",
        "name": "Wrestle Kingdom entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-11",
        "name": "Wrestle Kingdom entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-12",
        "name": "Wrestle Kingdom entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-13",
        "name": "Wrestle Kingdom entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-14",
        "name": "Wrestle Kingdom entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-15",
        "name": "Wrestle Kingdom entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-16",
        "name": "Wrestle Kingdom entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-17",
        "name": "Wrestle Kingdom entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-18",
        "name": "Wrestle Kingdom entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-19",
        "name": "Wrestle Kingdom entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-20",
        "name": "Wrestle Kingdom entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-21",
        "name": "Wrestle Kingdom entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-22",
        "name": "Wrestle Kingdom entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-23",
        "name": "Wrestle Kingdom entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestle-kingdom-entry-24",
        "name": "Wrestle Kingdom entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wrestle Kingdom.",
        "description": "A supporting encyclopedia entry in the Wrestle Kingdom subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wrestle-kingdom",
        "wrestle-kingdom-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-places",
        "contains",
        "Wrestle Kingdom places is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-events",
        "contains",
        "Wrestle Kingdom events is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-objects",
        "contains",
        "Wrestle Kingdom objects & artifacts is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-factions",
        "contains",
        "Wrestle Kingdom factions & groups is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-concepts",
        "contains",
        "Wrestle Kingdom concepts is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-eras",
        "contains",
        "Wrestle Kingdom eras is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-works",
        "contains",
        "Wrestle Kingdom works & media is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-symbols",
        "contains",
        "Wrestle Kingdom symbols is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-controversies",
        "contains",
        "Wrestle Kingdom controversies is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-sources",
        "contains",
        "Wrestle Kingdom sources is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-geography",
        "contains",
        "Wrestle Kingdom geography is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-legacy",
        "contains",
        "Wrestle Kingdom legacy is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-practices",
        "contains",
        "Wrestle Kingdom practices is a primary trailhead under Wrestle Kingdom.",
        0.88,
        0.82
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-1",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-2",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-3",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-4",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-5",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-6",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-7",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-8",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-9",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-10",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-11",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-12",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-13",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-14",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-15",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-16",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-17",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-18",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-19",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-20",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-21",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-22",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-23",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ],
    [
        "wrestle-kingdom",
        "wrestle-kingdom-entry-24",
        "contains",
        "Supporting entry under Wrestle Kingdom.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
