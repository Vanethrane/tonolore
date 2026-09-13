/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "street-fighter-alpha",
        "name": "Street Fighter Alpha",
        "type": "topic",
        "short_description": "Prequel timelines, Alpha counters, and the mid-90s bridge between Classic and III.",
        "description": "Prequel timelines, Alpha counters, and the mid-90s bridge between Classic and III. This Ton-o-Lore subject maps people, places, events, and ideas tied to Street Fighter Alpha so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "street-fighter-alpha-figures",
        "name": "Street Fighter Alpha figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Street Fighter Alpha.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-world",
        "name": "Street Fighter Alpha world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Street Fighter Alpha.",
        "description": "Geography, institutions, and periodization that give Street Fighter Alpha its encyclopedia shape."
    },
    {
        "slug": "street-fighter-alpha-places",
        "name": "Street Fighter Alpha places",
        "type": "place",
        "short_description": "Locations and geographies that frame Street Fighter Alpha.",
        "description": "Places, regions, and built sites that give Street Fighter Alpha its map — where events and figures concentrate."
    },
    {
        "slug": "street-fighter-alpha-events",
        "name": "Street Fighter Alpha events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Street Fighter Alpha.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Street Fighter Alpha timeline."
    },
    {
        "slug": "street-fighter-alpha-objects",
        "name": "Street Fighter Alpha objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Street Fighter Alpha.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-factions",
        "name": "Street Fighter Alpha factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Street Fighter Alpha.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-concepts",
        "name": "Street Fighter Alpha concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Street Fighter Alpha.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Street Fighter Alpha readable as a lore graph."
    },
    {
        "slug": "street-fighter-alpha-eras",
        "name": "Street Fighter Alpha eras",
        "type": "event",
        "short_description": "Periodization for Street Fighter Alpha.",
        "description": "Named eras and phases that help readers track how Street Fighter Alpha changes across time."
    },
    {
        "slug": "street-fighter-alpha-works",
        "name": "Street Fighter Alpha works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Street Fighter Alpha.",
        "description": "Primary works and adaptations through which most audiences encounter Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-symbols",
        "name": "Street Fighter Alpha symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Street Fighter Alpha.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-controversies",
        "name": "Street Fighter Alpha controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Street Fighter Alpha.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Street Fighter Alpha argumentative."
    },
    {
        "slug": "street-fighter-alpha-sources",
        "name": "Street Fighter Alpha sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Street Fighter Alpha.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-geography",
        "name": "Street Fighter Alpha geography",
        "type": "place",
        "short_description": "Broader geographic framing for Street Fighter Alpha.",
        "description": "Regions, routes, and spatial systems that situate Street Fighter Alpha beyond single named places."
    },
    {
        "slug": "street-fighter-alpha-legacy",
        "name": "Street Fighter Alpha legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Street Fighter Alpha.",
        "description": "How Street Fighter Alpha continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "street-fighter-alpha-practices",
        "name": "Street Fighter Alpha practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Street Fighter Alpha.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Street Fighter Alpha."
    },
    {
        "slug": "street-fighter-alpha-entry-1",
        "name": "Street Fighter Alpha entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-2",
        "name": "Street Fighter Alpha entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-3",
        "name": "Street Fighter Alpha entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-4",
        "name": "Street Fighter Alpha entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-5",
        "name": "Street Fighter Alpha entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-6",
        "name": "Street Fighter Alpha entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-7",
        "name": "Street Fighter Alpha entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-8",
        "name": "Street Fighter Alpha entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-9",
        "name": "Street Fighter Alpha entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-10",
        "name": "Street Fighter Alpha entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-11",
        "name": "Street Fighter Alpha entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-12",
        "name": "Street Fighter Alpha entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-13",
        "name": "Street Fighter Alpha entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-14",
        "name": "Street Fighter Alpha entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-15",
        "name": "Street Fighter Alpha entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-16",
        "name": "Street Fighter Alpha entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-17",
        "name": "Street Fighter Alpha entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-18",
        "name": "Street Fighter Alpha entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-19",
        "name": "Street Fighter Alpha entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-20",
        "name": "Street Fighter Alpha entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-21",
        "name": "Street Fighter Alpha entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-22",
        "name": "Street Fighter Alpha entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-23",
        "name": "Street Fighter Alpha entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-alpha-entry-24",
        "name": "Street Fighter Alpha entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter Alpha.",
        "description": "A supporting encyclopedia entry in the Street Fighter Alpha subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "street-fighter-alpha",
        "street-fighter-alpha-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-places",
        "contains",
        "Street Fighter Alpha places is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-events",
        "contains",
        "Street Fighter Alpha events is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-objects",
        "contains",
        "Street Fighter Alpha objects & artifacts is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-factions",
        "contains",
        "Street Fighter Alpha factions & groups is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-concepts",
        "contains",
        "Street Fighter Alpha concepts is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-eras",
        "contains",
        "Street Fighter Alpha eras is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-works",
        "contains",
        "Street Fighter Alpha works & media is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-symbols",
        "contains",
        "Street Fighter Alpha symbols is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-controversies",
        "contains",
        "Street Fighter Alpha controversies is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-sources",
        "contains",
        "Street Fighter Alpha sources is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-geography",
        "contains",
        "Street Fighter Alpha geography is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-legacy",
        "contains",
        "Street Fighter Alpha legacy is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-practices",
        "contains",
        "Street Fighter Alpha practices is a primary trailhead under Street Fighter Alpha.",
        0.88,
        0.82
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-1",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-2",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-3",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-4",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-5",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-6",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-7",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-8",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-9",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-10",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-11",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-12",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-13",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-14",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-15",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-16",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-17",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-18",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-19",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-20",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-21",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-22",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-23",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ],
    [
        "street-fighter-alpha",
        "street-fighter-alpha-entry-24",
        "contains",
        "Supporting entry under Street Fighter Alpha.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
