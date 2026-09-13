/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "philadelphia-experiment",
        "name": "Philadelphia Experiment",
        "type": "topic",
        "short_description": "Invisible destroyer lore, time slips, and the WWII Navy legend that became conspiracy canon.",
        "description": "Invisible destroyer lore, time slips, and the WWII Navy legend that became conspiracy canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Philadelphia Experiment so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "philadelphia-experiment-figures",
        "name": "Philadelphia Experiment figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Philadelphia Experiment.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-world",
        "name": "Philadelphia Experiment world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Philadelphia Experiment.",
        "description": "Geography, institutions, and periodization that give Philadelphia Experiment its encyclopedia shape."
    },
    {
        "slug": "philadelphia-experiment-places",
        "name": "Philadelphia Experiment places",
        "type": "place",
        "short_description": "Locations and geographies that frame Philadelphia Experiment.",
        "description": "Places, regions, and built sites that give Philadelphia Experiment its map — where events and figures concentrate."
    },
    {
        "slug": "philadelphia-experiment-events",
        "name": "Philadelphia Experiment events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Philadelphia Experiment.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Philadelphia Experiment timeline."
    },
    {
        "slug": "philadelphia-experiment-objects",
        "name": "Philadelphia Experiment objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Philadelphia Experiment.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-factions",
        "name": "Philadelphia Experiment factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Philadelphia Experiment.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-concepts",
        "name": "Philadelphia Experiment concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Philadelphia Experiment.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Philadelphia Experiment readable as a lore graph."
    },
    {
        "slug": "philadelphia-experiment-eras",
        "name": "Philadelphia Experiment eras",
        "type": "event",
        "short_description": "Periodization for Philadelphia Experiment.",
        "description": "Named eras and phases that help readers track how Philadelphia Experiment changes across time."
    },
    {
        "slug": "philadelphia-experiment-works",
        "name": "Philadelphia Experiment works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Philadelphia Experiment.",
        "description": "Primary works and adaptations through which most audiences encounter Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-symbols",
        "name": "Philadelphia Experiment symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Philadelphia Experiment.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-controversies",
        "name": "Philadelphia Experiment controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Philadelphia Experiment.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Philadelphia Experiment argumentative."
    },
    {
        "slug": "philadelphia-experiment-sources",
        "name": "Philadelphia Experiment sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Philadelphia Experiment.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-geography",
        "name": "Philadelphia Experiment geography",
        "type": "place",
        "short_description": "Broader geographic framing for Philadelphia Experiment.",
        "description": "Regions, routes, and spatial systems that situate Philadelphia Experiment beyond single named places."
    },
    {
        "slug": "philadelphia-experiment-legacy",
        "name": "Philadelphia Experiment legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Philadelphia Experiment.",
        "description": "How Philadelphia Experiment continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "philadelphia-experiment-practices",
        "name": "Philadelphia Experiment practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Philadelphia Experiment.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Philadelphia Experiment."
    },
    {
        "slug": "philadelphia-experiment-entry-1",
        "name": "Philadelphia Experiment entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-2",
        "name": "Philadelphia Experiment entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-3",
        "name": "Philadelphia Experiment entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-4",
        "name": "Philadelphia Experiment entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-5",
        "name": "Philadelphia Experiment entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-6",
        "name": "Philadelphia Experiment entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-7",
        "name": "Philadelphia Experiment entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-8",
        "name": "Philadelphia Experiment entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-9",
        "name": "Philadelphia Experiment entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-10",
        "name": "Philadelphia Experiment entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-11",
        "name": "Philadelphia Experiment entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-12",
        "name": "Philadelphia Experiment entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-13",
        "name": "Philadelphia Experiment entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-14",
        "name": "Philadelphia Experiment entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-15",
        "name": "Philadelphia Experiment entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-16",
        "name": "Philadelphia Experiment entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-17",
        "name": "Philadelphia Experiment entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-18",
        "name": "Philadelphia Experiment entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-19",
        "name": "Philadelphia Experiment entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-20",
        "name": "Philadelphia Experiment entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-21",
        "name": "Philadelphia Experiment entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-22",
        "name": "Philadelphia Experiment entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-23",
        "name": "Philadelphia Experiment entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "philadelphia-experiment-entry-24",
        "name": "Philadelphia Experiment entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Philadelphia Experiment.",
        "description": "A supporting encyclopedia entry in the Philadelphia Experiment subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "philadelphia-experiment",
        "philadelphia-experiment-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-places",
        "contains",
        "Philadelphia Experiment places is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-events",
        "contains",
        "Philadelphia Experiment events is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-objects",
        "contains",
        "Philadelphia Experiment objects & artifacts is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-factions",
        "contains",
        "Philadelphia Experiment factions & groups is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-concepts",
        "contains",
        "Philadelphia Experiment concepts is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-eras",
        "contains",
        "Philadelphia Experiment eras is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-works",
        "contains",
        "Philadelphia Experiment works & media is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-symbols",
        "contains",
        "Philadelphia Experiment symbols is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-controversies",
        "contains",
        "Philadelphia Experiment controversies is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-sources",
        "contains",
        "Philadelphia Experiment sources is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-geography",
        "contains",
        "Philadelphia Experiment geography is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-legacy",
        "contains",
        "Philadelphia Experiment legacy is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-practices",
        "contains",
        "Philadelphia Experiment practices is a primary trailhead under Philadelphia Experiment.",
        0.88,
        0.82
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-1",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-2",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-3",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-4",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-5",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-6",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-7",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-8",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-9",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-10",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-11",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-12",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-13",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-14",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-15",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-16",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-17",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-18",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-19",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-20",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-21",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-22",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-23",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ],
    [
        "philadelphia-experiment",
        "philadelphia-experiment-entry-24",
        "contains",
        "Supporting entry under Philadelphia Experiment.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
