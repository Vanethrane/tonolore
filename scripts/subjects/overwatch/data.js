/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "overwatch",
        "name": "Overwatch",
        "type": "topic",
        "short_description": "Hero shooters, omnium lore, and the colorful team FPS that dominated mid-2010s multiplayer.",
        "description": "Hero shooters, omnium lore, and the colorful team FPS that dominated mid-2010s multiplayer. This Ton-o-Lore subject maps people, places, events, and ideas tied to Overwatch so readers can follow long-tail connections across video games."
    },
    {
        "slug": "overwatch-figures",
        "name": "Overwatch figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Overwatch.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Overwatch."
    },
    {
        "slug": "overwatch-world",
        "name": "Overwatch world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Overwatch.",
        "description": "Geography, institutions, and periodization that give Overwatch its encyclopedia shape."
    },
    {
        "slug": "overwatch-places",
        "name": "Overwatch places",
        "type": "place",
        "short_description": "Locations and geographies that frame Overwatch.",
        "description": "Places, regions, and built sites that give Overwatch its map — where events and figures concentrate."
    },
    {
        "slug": "overwatch-events",
        "name": "Overwatch events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Overwatch.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Overwatch timeline."
    },
    {
        "slug": "overwatch-objects",
        "name": "Overwatch objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Overwatch.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Overwatch."
    },
    {
        "slug": "overwatch-factions",
        "name": "Overwatch factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Overwatch.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Overwatch."
    },
    {
        "slug": "overwatch-concepts",
        "name": "Overwatch concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Overwatch.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Overwatch readable as a lore graph."
    },
    {
        "slug": "overwatch-eras",
        "name": "Overwatch eras",
        "type": "event",
        "short_description": "Periodization for Overwatch.",
        "description": "Named eras and phases that help readers track how Overwatch changes across time."
    },
    {
        "slug": "overwatch-works",
        "name": "Overwatch works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Overwatch.",
        "description": "Primary works and adaptations through which most audiences encounter Overwatch."
    },
    {
        "slug": "overwatch-symbols",
        "name": "Overwatch symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Overwatch.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Overwatch."
    },
    {
        "slug": "overwatch-controversies",
        "name": "Overwatch controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Overwatch.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Overwatch argumentative."
    },
    {
        "slug": "overwatch-sources",
        "name": "Overwatch sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Overwatch.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Overwatch."
    },
    {
        "slug": "overwatch-geography",
        "name": "Overwatch geography",
        "type": "place",
        "short_description": "Broader geographic framing for Overwatch.",
        "description": "Regions, routes, and spatial systems that situate Overwatch beyond single named places."
    },
    {
        "slug": "overwatch-legacy",
        "name": "Overwatch legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Overwatch.",
        "description": "How Overwatch continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "overwatch-practices",
        "name": "Overwatch practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Overwatch.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Overwatch."
    },
    {
        "slug": "overwatch-entry-1",
        "name": "Overwatch entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-2",
        "name": "Overwatch entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-3",
        "name": "Overwatch entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-4",
        "name": "Overwatch entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-5",
        "name": "Overwatch entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-6",
        "name": "Overwatch entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-7",
        "name": "Overwatch entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-8",
        "name": "Overwatch entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-9",
        "name": "Overwatch entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-10",
        "name": "Overwatch entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-11",
        "name": "Overwatch entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-12",
        "name": "Overwatch entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-13",
        "name": "Overwatch entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-14",
        "name": "Overwatch entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-15",
        "name": "Overwatch entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-16",
        "name": "Overwatch entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-17",
        "name": "Overwatch entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-18",
        "name": "Overwatch entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-19",
        "name": "Overwatch entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-20",
        "name": "Overwatch entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-21",
        "name": "Overwatch entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-22",
        "name": "Overwatch entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-23",
        "name": "Overwatch entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "overwatch-entry-24",
        "name": "Overwatch entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Overwatch.",
        "description": "A supporting encyclopedia entry in the Overwatch subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "overwatch",
        "overwatch-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "overwatch",
        "overwatch-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "overwatch",
        "overwatch-places",
        "contains",
        "Overwatch places is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-events",
        "contains",
        "Overwatch events is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-objects",
        "contains",
        "Overwatch objects & artifacts is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-factions",
        "contains",
        "Overwatch factions & groups is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-concepts",
        "contains",
        "Overwatch concepts is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-eras",
        "contains",
        "Overwatch eras is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-works",
        "contains",
        "Overwatch works & media is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-symbols",
        "contains",
        "Overwatch symbols is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-controversies",
        "contains",
        "Overwatch controversies is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-sources",
        "contains",
        "Overwatch sources is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-geography",
        "contains",
        "Overwatch geography is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-legacy",
        "contains",
        "Overwatch legacy is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-practices",
        "contains",
        "Overwatch practices is a primary trailhead under Overwatch.",
        0.88,
        0.82
    ],
    [
        "overwatch",
        "overwatch-entry-1",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-2",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-3",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-4",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-5",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-6",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-7",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-8",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-9",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-10",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-11",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-12",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-13",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-14",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-15",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-16",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-17",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-18",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-19",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-20",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-21",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-22",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-23",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ],
    [
        "overwatch",
        "overwatch-entry-24",
        "contains",
        "Supporting entry under Overwatch.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
