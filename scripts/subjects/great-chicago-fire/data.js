/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "great-chicago-fire",
        "name": "Great Chicago Fire",
        "type": "topic",
        "short_description": "1871 blaze, rebuilding myth, and the urban fire that became American civic legend.",
        "description": "1871 blaze, rebuilding myth, and the urban fire that became American civic legend. This Ton-o-Lore subject maps people, places, events, and ideas tied to Great Chicago Fire so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "great-chicago-fire-figures",
        "name": "Great Chicago Fire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Great Chicago Fire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-world",
        "name": "Great Chicago Fire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Great Chicago Fire.",
        "description": "Geography, institutions, and periodization that give Great Chicago Fire its encyclopedia shape."
    },
    {
        "slug": "great-chicago-fire-places",
        "name": "Great Chicago Fire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Great Chicago Fire.",
        "description": "Places, regions, and built sites that give Great Chicago Fire its map — where events and figures concentrate."
    },
    {
        "slug": "great-chicago-fire-events",
        "name": "Great Chicago Fire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Great Chicago Fire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Great Chicago Fire timeline."
    },
    {
        "slug": "great-chicago-fire-objects",
        "name": "Great Chicago Fire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Great Chicago Fire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-factions",
        "name": "Great Chicago Fire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Great Chicago Fire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-concepts",
        "name": "Great Chicago Fire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Great Chicago Fire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Great Chicago Fire readable as a lore graph."
    },
    {
        "slug": "great-chicago-fire-eras",
        "name": "Great Chicago Fire eras",
        "type": "event",
        "short_description": "Periodization for Great Chicago Fire.",
        "description": "Named eras and phases that help readers track how Great Chicago Fire changes across time."
    },
    {
        "slug": "great-chicago-fire-works",
        "name": "Great Chicago Fire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Great Chicago Fire.",
        "description": "Primary works and adaptations through which most audiences encounter Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-symbols",
        "name": "Great Chicago Fire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Great Chicago Fire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-controversies",
        "name": "Great Chicago Fire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Great Chicago Fire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Great Chicago Fire argumentative."
    },
    {
        "slug": "great-chicago-fire-sources",
        "name": "Great Chicago Fire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Great Chicago Fire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-geography",
        "name": "Great Chicago Fire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Great Chicago Fire.",
        "description": "Regions, routes, and spatial systems that situate Great Chicago Fire beyond single named places."
    },
    {
        "slug": "great-chicago-fire-legacy",
        "name": "Great Chicago Fire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Great Chicago Fire.",
        "description": "How Great Chicago Fire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "great-chicago-fire-practices",
        "name": "Great Chicago Fire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Great Chicago Fire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Great Chicago Fire."
    },
    {
        "slug": "great-chicago-fire-entry-1",
        "name": "Great Chicago Fire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-2",
        "name": "Great Chicago Fire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-3",
        "name": "Great Chicago Fire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-4",
        "name": "Great Chicago Fire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-5",
        "name": "Great Chicago Fire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-6",
        "name": "Great Chicago Fire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-7",
        "name": "Great Chicago Fire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-8",
        "name": "Great Chicago Fire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-9",
        "name": "Great Chicago Fire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-10",
        "name": "Great Chicago Fire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-11",
        "name": "Great Chicago Fire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-12",
        "name": "Great Chicago Fire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-13",
        "name": "Great Chicago Fire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-14",
        "name": "Great Chicago Fire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-15",
        "name": "Great Chicago Fire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-16",
        "name": "Great Chicago Fire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-17",
        "name": "Great Chicago Fire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-18",
        "name": "Great Chicago Fire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-19",
        "name": "Great Chicago Fire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-20",
        "name": "Great Chicago Fire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-21",
        "name": "Great Chicago Fire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-22",
        "name": "Great Chicago Fire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-23",
        "name": "Great Chicago Fire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-chicago-fire-entry-24",
        "name": "Great Chicago Fire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Chicago Fire.",
        "description": "A supporting encyclopedia entry in the Great Chicago Fire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "great-chicago-fire",
        "great-chicago-fire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-places",
        "contains",
        "Great Chicago Fire places is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-events",
        "contains",
        "Great Chicago Fire events is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-objects",
        "contains",
        "Great Chicago Fire objects & artifacts is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-factions",
        "contains",
        "Great Chicago Fire factions & groups is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-concepts",
        "contains",
        "Great Chicago Fire concepts is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-eras",
        "contains",
        "Great Chicago Fire eras is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-works",
        "contains",
        "Great Chicago Fire works & media is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-symbols",
        "contains",
        "Great Chicago Fire symbols is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-controversies",
        "contains",
        "Great Chicago Fire controversies is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-sources",
        "contains",
        "Great Chicago Fire sources is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-geography",
        "contains",
        "Great Chicago Fire geography is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-legacy",
        "contains",
        "Great Chicago Fire legacy is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-practices",
        "contains",
        "Great Chicago Fire practices is a primary trailhead under Great Chicago Fire.",
        0.88,
        0.82
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-1",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-2",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-3",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-4",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-5",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-6",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-7",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-8",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-9",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-10",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-11",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-12",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-13",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-14",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-15",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-16",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-17",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-18",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-19",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-20",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-21",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-22",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-23",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ],
    [
        "great-chicago-fire",
        "great-chicago-fire-entry-24",
        "contains",
        "Supporting entry under Great Chicago Fire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
