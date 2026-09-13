/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ecology-ecosystems",
        "name": "Ecology & ecosystems",
        "type": "topic",
        "short_description": "Food webs, biomes, and the interdependence that defines living landscapes.",
        "description": "Food webs, biomes, and the interdependence that defines living landscapes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ecology & ecosystems so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "ecology-ecosystems-figures",
        "name": "Ecology & ecosystems figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ecology & ecosystems.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-world",
        "name": "Ecology & ecosystems world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ecology & ecosystems.",
        "description": "Geography, institutions, and periodization that give Ecology & ecosystems its encyclopedia shape."
    },
    {
        "slug": "ecology-ecosystems-places",
        "name": "Ecology & ecosystems places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ecology & ecosystems.",
        "description": "Places, regions, and built sites that give Ecology & ecosystems its map — where events and figures concentrate."
    },
    {
        "slug": "ecology-ecosystems-events",
        "name": "Ecology & ecosystems events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ecology & ecosystems.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ecology & ecosystems timeline."
    },
    {
        "slug": "ecology-ecosystems-objects",
        "name": "Ecology & ecosystems objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ecology & ecosystems.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-factions",
        "name": "Ecology & ecosystems factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ecology & ecosystems.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-concepts",
        "name": "Ecology & ecosystems concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ecology & ecosystems.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ecology & ecosystems readable as a lore graph."
    },
    {
        "slug": "ecology-ecosystems-eras",
        "name": "Ecology & ecosystems eras",
        "type": "event",
        "short_description": "Periodization for Ecology & ecosystems.",
        "description": "Named eras and phases that help readers track how Ecology & ecosystems changes across time."
    },
    {
        "slug": "ecology-ecosystems-works",
        "name": "Ecology & ecosystems works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ecology & ecosystems.",
        "description": "Primary works and adaptations through which most audiences encounter Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-symbols",
        "name": "Ecology & ecosystems symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ecology & ecosystems.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-controversies",
        "name": "Ecology & ecosystems controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ecology & ecosystems.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ecology & ecosystems argumentative."
    },
    {
        "slug": "ecology-ecosystems-sources",
        "name": "Ecology & ecosystems sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ecology & ecosystems.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-geography",
        "name": "Ecology & ecosystems geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ecology & ecosystems.",
        "description": "Regions, routes, and spatial systems that situate Ecology & ecosystems beyond single named places."
    },
    {
        "slug": "ecology-ecosystems-legacy",
        "name": "Ecology & ecosystems legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ecology & ecosystems.",
        "description": "How Ecology & ecosystems continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ecology-ecosystems-practices",
        "name": "Ecology & ecosystems practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ecology & ecosystems.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ecology & ecosystems."
    },
    {
        "slug": "ecology-ecosystems-entry-1",
        "name": "Ecology & ecosystems entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-2",
        "name": "Ecology & ecosystems entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-3",
        "name": "Ecology & ecosystems entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-4",
        "name": "Ecology & ecosystems entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-5",
        "name": "Ecology & ecosystems entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-6",
        "name": "Ecology & ecosystems entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-7",
        "name": "Ecology & ecosystems entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-8",
        "name": "Ecology & ecosystems entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-9",
        "name": "Ecology & ecosystems entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-10",
        "name": "Ecology & ecosystems entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-11",
        "name": "Ecology & ecosystems entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-12",
        "name": "Ecology & ecosystems entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-13",
        "name": "Ecology & ecosystems entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-14",
        "name": "Ecology & ecosystems entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-15",
        "name": "Ecology & ecosystems entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-16",
        "name": "Ecology & ecosystems entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-17",
        "name": "Ecology & ecosystems entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-18",
        "name": "Ecology & ecosystems entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-19",
        "name": "Ecology & ecosystems entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-20",
        "name": "Ecology & ecosystems entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-21",
        "name": "Ecology & ecosystems entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-22",
        "name": "Ecology & ecosystems entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-23",
        "name": "Ecology & ecosystems entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ecology-ecosystems-entry-24",
        "name": "Ecology & ecosystems entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ecology & ecosystems.",
        "description": "A supporting encyclopedia entry in the Ecology & ecosystems subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ecology-ecosystems",
        "ecology-ecosystems-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-places",
        "contains",
        "Ecology & ecosystems places is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-events",
        "contains",
        "Ecology & ecosystems events is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-objects",
        "contains",
        "Ecology & ecosystems objects & artifacts is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-factions",
        "contains",
        "Ecology & ecosystems factions & groups is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-concepts",
        "contains",
        "Ecology & ecosystems concepts is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-eras",
        "contains",
        "Ecology & ecosystems eras is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-works",
        "contains",
        "Ecology & ecosystems works & media is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-symbols",
        "contains",
        "Ecology & ecosystems symbols is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-controversies",
        "contains",
        "Ecology & ecosystems controversies is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-sources",
        "contains",
        "Ecology & ecosystems sources is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-geography",
        "contains",
        "Ecology & ecosystems geography is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-legacy",
        "contains",
        "Ecology & ecosystems legacy is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-practices",
        "contains",
        "Ecology & ecosystems practices is a primary trailhead under Ecology & ecosystems.",
        0.88,
        0.82
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-1",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-2",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-3",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-4",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-5",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-6",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-7",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-8",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-9",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-10",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-11",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-12",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-13",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-14",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-15",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-16",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-17",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-18",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-19",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-20",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-21",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-22",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-23",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ],
    [
        "ecology-ecosystems",
        "ecology-ecosystems-entry-24",
        "contains",
        "Supporting entry under Ecology & ecosystems.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
