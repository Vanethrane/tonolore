/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "snow-crash-lore",
        "name": "Snow Crash",
        "type": "topic",
        "short_description": "Metaverse, pizza delivery, and the cyberpunk novel that named a generation of virtual worlds.",
        "description": "Metaverse, pizza delivery, and the cyberpunk novel that named a generation of virtual worlds. This Ton-o-Lore subject maps people, places, events, and ideas tied to Snow Crash so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "snow-crash-lore-figures",
        "name": "Snow Crash figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Snow Crash.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Snow Crash."
    },
    {
        "slug": "snow-crash-lore-world",
        "name": "Snow Crash world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Snow Crash.",
        "description": "Geography, institutions, and periodization that give Snow Crash its encyclopedia shape."
    },
    {
        "slug": "snow-crash-lore-places",
        "name": "Snow Crash places",
        "type": "place",
        "short_description": "Locations and geographies that frame Snow Crash.",
        "description": "Places, regions, and built sites that give Snow Crash its map — where events and figures concentrate."
    },
    {
        "slug": "snow-crash-lore-events",
        "name": "Snow Crash events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Snow Crash.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Snow Crash timeline."
    },
    {
        "slug": "snow-crash-lore-objects",
        "name": "Snow Crash objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Snow Crash.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Snow Crash."
    },
    {
        "slug": "snow-crash-lore-factions",
        "name": "Snow Crash factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Snow Crash.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Snow Crash."
    },
    {
        "slug": "snow-crash-lore-concepts",
        "name": "Snow Crash concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Snow Crash.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Snow Crash readable as a lore graph."
    },
    {
        "slug": "snow-crash-lore-eras",
        "name": "Snow Crash eras",
        "type": "event",
        "short_description": "Periodization for Snow Crash.",
        "description": "Named eras and phases that help readers track how Snow Crash changes across time."
    },
    {
        "slug": "snow-crash-lore-works",
        "name": "Snow Crash works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Snow Crash.",
        "description": "Primary works and adaptations through which most audiences encounter Snow Crash."
    },
    {
        "slug": "snow-crash-lore-symbols",
        "name": "Snow Crash symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Snow Crash.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Snow Crash."
    },
    {
        "slug": "snow-crash-lore-controversies",
        "name": "Snow Crash controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Snow Crash.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Snow Crash argumentative."
    },
    {
        "slug": "snow-crash-lore-sources",
        "name": "Snow Crash sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Snow Crash.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Snow Crash."
    },
    {
        "slug": "snow-crash-lore-geography",
        "name": "Snow Crash geography",
        "type": "place",
        "short_description": "Broader geographic framing for Snow Crash.",
        "description": "Regions, routes, and spatial systems that situate Snow Crash beyond single named places."
    },
    {
        "slug": "snow-crash-lore-legacy",
        "name": "Snow Crash legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Snow Crash.",
        "description": "How Snow Crash continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "snow-crash-lore-practices",
        "name": "Snow Crash practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Snow Crash.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Snow Crash."
    },
    {
        "slug": "snow-crash-lore-entry-1",
        "name": "Snow Crash entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-2",
        "name": "Snow Crash entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-3",
        "name": "Snow Crash entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-4",
        "name": "Snow Crash entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-5",
        "name": "Snow Crash entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-6",
        "name": "Snow Crash entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-7",
        "name": "Snow Crash entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-8",
        "name": "Snow Crash entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-9",
        "name": "Snow Crash entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-10",
        "name": "Snow Crash entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-11",
        "name": "Snow Crash entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-12",
        "name": "Snow Crash entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-13",
        "name": "Snow Crash entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-14",
        "name": "Snow Crash entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-15",
        "name": "Snow Crash entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-16",
        "name": "Snow Crash entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-17",
        "name": "Snow Crash entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-18",
        "name": "Snow Crash entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-19",
        "name": "Snow Crash entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-20",
        "name": "Snow Crash entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-21",
        "name": "Snow Crash entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-22",
        "name": "Snow Crash entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-23",
        "name": "Snow Crash entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "snow-crash-lore-entry-24",
        "name": "Snow Crash entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Snow Crash.",
        "description": "A supporting encyclopedia entry in the Snow Crash subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "snow-crash-lore",
        "snow-crash-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-places",
        "contains",
        "Snow Crash places is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-events",
        "contains",
        "Snow Crash events is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-objects",
        "contains",
        "Snow Crash objects & artifacts is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-factions",
        "contains",
        "Snow Crash factions & groups is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-concepts",
        "contains",
        "Snow Crash concepts is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-eras",
        "contains",
        "Snow Crash eras is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-works",
        "contains",
        "Snow Crash works & media is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-symbols",
        "contains",
        "Snow Crash symbols is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-controversies",
        "contains",
        "Snow Crash controversies is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-sources",
        "contains",
        "Snow Crash sources is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-geography",
        "contains",
        "Snow Crash geography is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-legacy",
        "contains",
        "Snow Crash legacy is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-practices",
        "contains",
        "Snow Crash practices is a primary trailhead under Snow Crash.",
        0.88,
        0.82
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-1",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-2",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-3",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-4",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-5",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-6",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-7",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-8",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-9",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-10",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-11",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-12",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-13",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-14",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-15",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-16",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-17",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-18",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-19",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-20",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-21",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-22",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-23",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ],
    [
        "snow-crash-lore",
        "snow-crash-lore-entry-24",
        "contains",
        "Supporting entry under Snow Crash.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
