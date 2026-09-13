/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "improvisational-theatre",
        "name": "Improvisational theatre",
        "type": "topic",
        "short_description": "Yes-and rules, Second City lineages, and the unscripted stage craft behind modern comedy.",
        "description": "Yes-and rules, Second City lineages, and the unscripted stage craft behind modern comedy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Improvisational theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "improvisational-theatre-figures",
        "name": "Improvisational theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Improvisational theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-world",
        "name": "Improvisational theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Improvisational theatre.",
        "description": "Geography, institutions, and periodization that give Improvisational theatre its encyclopedia shape."
    },
    {
        "slug": "improvisational-theatre-places",
        "name": "Improvisational theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame Improvisational theatre.",
        "description": "Places, regions, and built sites that give Improvisational theatre its map — where events and figures concentrate."
    },
    {
        "slug": "improvisational-theatre-events",
        "name": "Improvisational theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Improvisational theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Improvisational theatre timeline."
    },
    {
        "slug": "improvisational-theatre-objects",
        "name": "Improvisational theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Improvisational theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-factions",
        "name": "Improvisational theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Improvisational theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-concepts",
        "name": "Improvisational theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Improvisational theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Improvisational theatre readable as a lore graph."
    },
    {
        "slug": "improvisational-theatre-eras",
        "name": "Improvisational theatre eras",
        "type": "event",
        "short_description": "Periodization for Improvisational theatre.",
        "description": "Named eras and phases that help readers track how Improvisational theatre changes across time."
    },
    {
        "slug": "improvisational-theatre-works",
        "name": "Improvisational theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Improvisational theatre.",
        "description": "Primary works and adaptations through which most audiences encounter Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-symbols",
        "name": "Improvisational theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Improvisational theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-controversies",
        "name": "Improvisational theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Improvisational theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Improvisational theatre argumentative."
    },
    {
        "slug": "improvisational-theatre-sources",
        "name": "Improvisational theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Improvisational theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-geography",
        "name": "Improvisational theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for Improvisational theatre.",
        "description": "Regions, routes, and spatial systems that situate Improvisational theatre beyond single named places."
    },
    {
        "slug": "improvisational-theatre-legacy",
        "name": "Improvisational theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Improvisational theatre.",
        "description": "How Improvisational theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "improvisational-theatre-practices",
        "name": "Improvisational theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Improvisational theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Improvisational theatre."
    },
    {
        "slug": "improvisational-theatre-entry-1",
        "name": "Improvisational theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-2",
        "name": "Improvisational theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-3",
        "name": "Improvisational theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-4",
        "name": "Improvisational theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-5",
        "name": "Improvisational theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-6",
        "name": "Improvisational theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-7",
        "name": "Improvisational theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-8",
        "name": "Improvisational theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-9",
        "name": "Improvisational theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-10",
        "name": "Improvisational theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-11",
        "name": "Improvisational theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-12",
        "name": "Improvisational theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-13",
        "name": "Improvisational theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-14",
        "name": "Improvisational theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-15",
        "name": "Improvisational theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-16",
        "name": "Improvisational theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-17",
        "name": "Improvisational theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-18",
        "name": "Improvisational theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-19",
        "name": "Improvisational theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-20",
        "name": "Improvisational theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-21",
        "name": "Improvisational theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-22",
        "name": "Improvisational theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-23",
        "name": "Improvisational theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "improvisational-theatre-entry-24",
        "name": "Improvisational theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Improvisational theatre.",
        "description": "A supporting encyclopedia entry in the Improvisational theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "improvisational-theatre",
        "improvisational-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-places",
        "contains",
        "Improvisational theatre places is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-events",
        "contains",
        "Improvisational theatre events is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-objects",
        "contains",
        "Improvisational theatre objects & artifacts is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-factions",
        "contains",
        "Improvisational theatre factions & groups is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-concepts",
        "contains",
        "Improvisational theatre concepts is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-eras",
        "contains",
        "Improvisational theatre eras is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-works",
        "contains",
        "Improvisational theatre works & media is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-symbols",
        "contains",
        "Improvisational theatre symbols is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-controversies",
        "contains",
        "Improvisational theatre controversies is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-sources",
        "contains",
        "Improvisational theatre sources is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-geography",
        "contains",
        "Improvisational theatre geography is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-legacy",
        "contains",
        "Improvisational theatre legacy is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-practices",
        "contains",
        "Improvisational theatre practices is a primary trailhead under Improvisational theatre.",
        0.88,
        0.82
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-1",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-2",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-3",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-4",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-5",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-6",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-7",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-8",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-9",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-10",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-11",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-12",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-13",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-14",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-15",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-16",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-17",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-18",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-19",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-20",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-21",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-22",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-23",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ],
    [
        "improvisational-theatre",
        "improvisational-theatre-entry-24",
        "contains",
        "Supporting entry under Improvisational theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
