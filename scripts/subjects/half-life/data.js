/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "half-life",
        "name": "Half-Life",
        "type": "topic",
        "short_description": "Black Mesa, Combine occupation, and the FPS narrative pioneer still awaiting Episode Three lore.",
        "description": "Black Mesa, Combine occupation, and the FPS narrative pioneer still awaiting Episode Three lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Half-Life so readers can follow long-tail connections across video games."
    },
    {
        "slug": "half-life-figures",
        "name": "Half-Life figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Half-Life.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Half-Life."
    },
    {
        "slug": "half-life-world",
        "name": "Half-Life world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Half-Life.",
        "description": "Geography, institutions, and periodization that give Half-Life its encyclopedia shape."
    },
    {
        "slug": "half-life-places",
        "name": "Half-Life places",
        "type": "place",
        "short_description": "Locations and geographies that frame Half-Life.",
        "description": "Places, regions, and built sites that give Half-Life its map — where events and figures concentrate."
    },
    {
        "slug": "half-life-events",
        "name": "Half-Life events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Half-Life.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Half-Life timeline."
    },
    {
        "slug": "half-life-objects",
        "name": "Half-Life objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Half-Life.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Half-Life."
    },
    {
        "slug": "half-life-factions",
        "name": "Half-Life factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Half-Life.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Half-Life."
    },
    {
        "slug": "half-life-concepts",
        "name": "Half-Life concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Half-Life.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Half-Life readable as a lore graph."
    },
    {
        "slug": "half-life-eras",
        "name": "Half-Life eras",
        "type": "event",
        "short_description": "Periodization for Half-Life.",
        "description": "Named eras and phases that help readers track how Half-Life changes across time."
    },
    {
        "slug": "half-life-works",
        "name": "Half-Life works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Half-Life.",
        "description": "Primary works and adaptations through which most audiences encounter Half-Life."
    },
    {
        "slug": "half-life-symbols",
        "name": "Half-Life symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Half-Life.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Half-Life."
    },
    {
        "slug": "half-life-controversies",
        "name": "Half-Life controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Half-Life.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Half-Life argumentative."
    },
    {
        "slug": "half-life-sources",
        "name": "Half-Life sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Half-Life.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Half-Life."
    },
    {
        "slug": "half-life-geography",
        "name": "Half-Life geography",
        "type": "place",
        "short_description": "Broader geographic framing for Half-Life.",
        "description": "Regions, routes, and spatial systems that situate Half-Life beyond single named places."
    },
    {
        "slug": "half-life-legacy",
        "name": "Half-Life legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Half-Life.",
        "description": "How Half-Life continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "half-life-practices",
        "name": "Half-Life practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Half-Life.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Half-Life."
    },
    {
        "slug": "half-life-entry-1",
        "name": "Half-Life entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-2",
        "name": "Half-Life entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-3",
        "name": "Half-Life entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-4",
        "name": "Half-Life entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-5",
        "name": "Half-Life entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-6",
        "name": "Half-Life entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-7",
        "name": "Half-Life entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-8",
        "name": "Half-Life entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-9",
        "name": "Half-Life entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-10",
        "name": "Half-Life entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-11",
        "name": "Half-Life entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-12",
        "name": "Half-Life entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-13",
        "name": "Half-Life entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-14",
        "name": "Half-Life entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-15",
        "name": "Half-Life entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-16",
        "name": "Half-Life entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-17",
        "name": "Half-Life entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-18",
        "name": "Half-Life entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-19",
        "name": "Half-Life entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-20",
        "name": "Half-Life entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-21",
        "name": "Half-Life entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-22",
        "name": "Half-Life entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-23",
        "name": "Half-Life entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "half-life-entry-24",
        "name": "Half-Life entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Half-Life.",
        "description": "A supporting encyclopedia entry in the Half-Life subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "half-life",
        "half-life-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "half-life",
        "half-life-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "half-life",
        "half-life-places",
        "contains",
        "Half-Life places is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-events",
        "contains",
        "Half-Life events is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-objects",
        "contains",
        "Half-Life objects & artifacts is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-factions",
        "contains",
        "Half-Life factions & groups is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-concepts",
        "contains",
        "Half-Life concepts is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-eras",
        "contains",
        "Half-Life eras is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-works",
        "contains",
        "Half-Life works & media is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-symbols",
        "contains",
        "Half-Life symbols is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-controversies",
        "contains",
        "Half-Life controversies is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-sources",
        "contains",
        "Half-Life sources is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-geography",
        "contains",
        "Half-Life geography is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-legacy",
        "contains",
        "Half-Life legacy is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-practices",
        "contains",
        "Half-Life practices is a primary trailhead under Half-Life.",
        0.88,
        0.82
    ],
    [
        "half-life",
        "half-life-entry-1",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-2",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-3",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-4",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-5",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-6",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-7",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-8",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-9",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-10",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-11",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-12",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-13",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-14",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-15",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-16",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-17",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-18",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-19",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-20",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-21",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-22",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-23",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ],
    [
        "half-life",
        "half-life-entry-24",
        "contains",
        "Supporting entry under Half-Life.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
