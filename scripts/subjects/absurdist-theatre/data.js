/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "absurdist-theatre",
        "name": "Absurdist theatre",
        "type": "topic",
        "short_description": "Beckett, Ionesco, and the mid-century stage language of meaninglessness and ritual.",
        "description": "Beckett, Ionesco, and the mid-century stage language of meaninglessness and ritual. This Ton-o-Lore subject maps people, places, events, and ideas tied to Absurdist theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "absurdist-theatre-figures",
        "name": "Absurdist theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Absurdist theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-world",
        "name": "Absurdist theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Absurdist theatre.",
        "description": "Geography, institutions, and periodization that give Absurdist theatre its encyclopedia shape."
    },
    {
        "slug": "absurdist-theatre-places",
        "name": "Absurdist theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame Absurdist theatre.",
        "description": "Places, regions, and built sites that give Absurdist theatre its map — where events and figures concentrate."
    },
    {
        "slug": "absurdist-theatre-events",
        "name": "Absurdist theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Absurdist theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Absurdist theatre timeline."
    },
    {
        "slug": "absurdist-theatre-objects",
        "name": "Absurdist theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Absurdist theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-factions",
        "name": "Absurdist theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Absurdist theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-concepts",
        "name": "Absurdist theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Absurdist theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Absurdist theatre readable as a lore graph."
    },
    {
        "slug": "absurdist-theatre-eras",
        "name": "Absurdist theatre eras",
        "type": "event",
        "short_description": "Periodization for Absurdist theatre.",
        "description": "Named eras and phases that help readers track how Absurdist theatre changes across time."
    },
    {
        "slug": "absurdist-theatre-works",
        "name": "Absurdist theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Absurdist theatre.",
        "description": "Primary works and adaptations through which most audiences encounter Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-symbols",
        "name": "Absurdist theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Absurdist theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-controversies",
        "name": "Absurdist theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Absurdist theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Absurdist theatre argumentative."
    },
    {
        "slug": "absurdist-theatre-sources",
        "name": "Absurdist theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Absurdist theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-geography",
        "name": "Absurdist theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for Absurdist theatre.",
        "description": "Regions, routes, and spatial systems that situate Absurdist theatre beyond single named places."
    },
    {
        "slug": "absurdist-theatre-legacy",
        "name": "Absurdist theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Absurdist theatre.",
        "description": "How Absurdist theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "absurdist-theatre-practices",
        "name": "Absurdist theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Absurdist theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Absurdist theatre."
    },
    {
        "slug": "absurdist-theatre-entry-1",
        "name": "Absurdist theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-2",
        "name": "Absurdist theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-3",
        "name": "Absurdist theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-4",
        "name": "Absurdist theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-5",
        "name": "Absurdist theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-6",
        "name": "Absurdist theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-7",
        "name": "Absurdist theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-8",
        "name": "Absurdist theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-9",
        "name": "Absurdist theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-10",
        "name": "Absurdist theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-11",
        "name": "Absurdist theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-12",
        "name": "Absurdist theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-13",
        "name": "Absurdist theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-14",
        "name": "Absurdist theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-15",
        "name": "Absurdist theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-16",
        "name": "Absurdist theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-17",
        "name": "Absurdist theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-18",
        "name": "Absurdist theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-19",
        "name": "Absurdist theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-20",
        "name": "Absurdist theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-21",
        "name": "Absurdist theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-22",
        "name": "Absurdist theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-23",
        "name": "Absurdist theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "absurdist-theatre-entry-24",
        "name": "Absurdist theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Absurdist theatre.",
        "description": "A supporting encyclopedia entry in the Absurdist theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "absurdist-theatre",
        "absurdist-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-places",
        "contains",
        "Absurdist theatre places is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-events",
        "contains",
        "Absurdist theatre events is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-objects",
        "contains",
        "Absurdist theatre objects & artifacts is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-factions",
        "contains",
        "Absurdist theatre factions & groups is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-concepts",
        "contains",
        "Absurdist theatre concepts is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-eras",
        "contains",
        "Absurdist theatre eras is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-works",
        "contains",
        "Absurdist theatre works & media is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-symbols",
        "contains",
        "Absurdist theatre symbols is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-controversies",
        "contains",
        "Absurdist theatre controversies is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-sources",
        "contains",
        "Absurdist theatre sources is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-geography",
        "contains",
        "Absurdist theatre geography is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-legacy",
        "contains",
        "Absurdist theatre legacy is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-practices",
        "contains",
        "Absurdist theatre practices is a primary trailhead under Absurdist theatre.",
        0.88,
        0.82
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-1",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-2",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-3",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-4",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-5",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-6",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-7",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-8",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-9",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-10",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-11",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-12",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-13",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-14",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-15",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-16",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-17",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-18",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-19",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-20",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-21",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-22",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-23",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ],
    [
        "absurdist-theatre",
        "absurdist-theatre-entry-24",
        "contains",
        "Supporting entry under Absurdist theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
