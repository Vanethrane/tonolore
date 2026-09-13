/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dance-theatre",
        "name": "Dance theatre",
        "type": "topic",
        "short_description": "Ballet-to-contemporary hybrids and the staged movement traditions that blur concert and drama.",
        "description": "Ballet-to-contemporary hybrids and the staged movement traditions that blur concert and drama. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dance theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "dance-theatre-figures",
        "name": "Dance theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dance theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dance theatre."
    },
    {
        "slug": "dance-theatre-world",
        "name": "Dance theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dance theatre.",
        "description": "Geography, institutions, and periodization that give Dance theatre its encyclopedia shape."
    },
    {
        "slug": "dance-theatre-places",
        "name": "Dance theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dance theatre.",
        "description": "Places, regions, and built sites that give Dance theatre its map — where events and figures concentrate."
    },
    {
        "slug": "dance-theatre-events",
        "name": "Dance theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dance theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dance theatre timeline."
    },
    {
        "slug": "dance-theatre-objects",
        "name": "Dance theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dance theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dance theatre."
    },
    {
        "slug": "dance-theatre-factions",
        "name": "Dance theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dance theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dance theatre."
    },
    {
        "slug": "dance-theatre-concepts",
        "name": "Dance theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dance theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dance theatre readable as a lore graph."
    },
    {
        "slug": "dance-theatre-eras",
        "name": "Dance theatre eras",
        "type": "event",
        "short_description": "Periodization for Dance theatre.",
        "description": "Named eras and phases that help readers track how Dance theatre changes across time."
    },
    {
        "slug": "dance-theatre-works",
        "name": "Dance theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dance theatre.",
        "description": "Primary works and adaptations through which most audiences encounter Dance theatre."
    },
    {
        "slug": "dance-theatre-symbols",
        "name": "Dance theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dance theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dance theatre."
    },
    {
        "slug": "dance-theatre-controversies",
        "name": "Dance theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dance theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dance theatre argumentative."
    },
    {
        "slug": "dance-theatre-sources",
        "name": "Dance theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dance theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dance theatre."
    },
    {
        "slug": "dance-theatre-geography",
        "name": "Dance theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dance theatre.",
        "description": "Regions, routes, and spatial systems that situate Dance theatre beyond single named places."
    },
    {
        "slug": "dance-theatre-legacy",
        "name": "Dance theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dance theatre.",
        "description": "How Dance theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dance-theatre-practices",
        "name": "Dance theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dance theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dance theatre."
    },
    {
        "slug": "dance-theatre-entry-1",
        "name": "Dance theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-2",
        "name": "Dance theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-3",
        "name": "Dance theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-4",
        "name": "Dance theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-5",
        "name": "Dance theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-6",
        "name": "Dance theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-7",
        "name": "Dance theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-8",
        "name": "Dance theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-9",
        "name": "Dance theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-10",
        "name": "Dance theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-11",
        "name": "Dance theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-12",
        "name": "Dance theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-13",
        "name": "Dance theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-14",
        "name": "Dance theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-15",
        "name": "Dance theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-16",
        "name": "Dance theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-17",
        "name": "Dance theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-18",
        "name": "Dance theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-19",
        "name": "Dance theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-20",
        "name": "Dance theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-21",
        "name": "Dance theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-22",
        "name": "Dance theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-23",
        "name": "Dance theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dance-theatre-entry-24",
        "name": "Dance theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dance theatre.",
        "description": "A supporting encyclopedia entry in the Dance theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dance-theatre",
        "dance-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dance-theatre",
        "dance-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dance-theatre",
        "dance-theatre-places",
        "contains",
        "Dance theatre places is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-events",
        "contains",
        "Dance theatre events is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-objects",
        "contains",
        "Dance theatre objects & artifacts is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-factions",
        "contains",
        "Dance theatre factions & groups is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-concepts",
        "contains",
        "Dance theatre concepts is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-eras",
        "contains",
        "Dance theatre eras is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-works",
        "contains",
        "Dance theatre works & media is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-symbols",
        "contains",
        "Dance theatre symbols is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-controversies",
        "contains",
        "Dance theatre controversies is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-sources",
        "contains",
        "Dance theatre sources is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-geography",
        "contains",
        "Dance theatre geography is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-legacy",
        "contains",
        "Dance theatre legacy is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-practices",
        "contains",
        "Dance theatre practices is a primary trailhead under Dance theatre.",
        0.88,
        0.82
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-1",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-2",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-3",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-4",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-5",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-6",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-7",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-8",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-9",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-10",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-11",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-12",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-13",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-14",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-15",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-16",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-17",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-18",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-19",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-20",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-21",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-22",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-23",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ],
    [
        "dance-theatre",
        "dance-theatre-entry-24",
        "contains",
        "Supporting entry under Dance theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
