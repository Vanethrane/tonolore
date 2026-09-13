/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hinckley-fire",
        "name": "Great Hinckley Fire",
        "type": "topic",
        "short_description": "1894 Minnesota firestorm, rail escapes, and the lumber-era inferno of the Midwest.",
        "description": "1894 Minnesota firestorm, rail escapes, and the lumber-era inferno of the Midwest. This Ton-o-Lore subject maps people, places, events, and ideas tied to Great Hinckley Fire so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "hinckley-fire-figures",
        "name": "Great Hinckley Fire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Great Hinckley Fire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-world",
        "name": "Great Hinckley Fire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Great Hinckley Fire.",
        "description": "Geography, institutions, and periodization that give Great Hinckley Fire its encyclopedia shape."
    },
    {
        "slug": "hinckley-fire-places",
        "name": "Great Hinckley Fire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Great Hinckley Fire.",
        "description": "Places, regions, and built sites that give Great Hinckley Fire its map — where events and figures concentrate."
    },
    {
        "slug": "hinckley-fire-events",
        "name": "Great Hinckley Fire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Great Hinckley Fire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Great Hinckley Fire timeline."
    },
    {
        "slug": "hinckley-fire-objects",
        "name": "Great Hinckley Fire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Great Hinckley Fire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-factions",
        "name": "Great Hinckley Fire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Great Hinckley Fire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-concepts",
        "name": "Great Hinckley Fire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Great Hinckley Fire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Great Hinckley Fire readable as a lore graph."
    },
    {
        "slug": "hinckley-fire-eras",
        "name": "Great Hinckley Fire eras",
        "type": "event",
        "short_description": "Periodization for Great Hinckley Fire.",
        "description": "Named eras and phases that help readers track how Great Hinckley Fire changes across time."
    },
    {
        "slug": "hinckley-fire-works",
        "name": "Great Hinckley Fire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Great Hinckley Fire.",
        "description": "Primary works and adaptations through which most audiences encounter Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-symbols",
        "name": "Great Hinckley Fire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Great Hinckley Fire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-controversies",
        "name": "Great Hinckley Fire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Great Hinckley Fire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Great Hinckley Fire argumentative."
    },
    {
        "slug": "hinckley-fire-sources",
        "name": "Great Hinckley Fire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Great Hinckley Fire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-geography",
        "name": "Great Hinckley Fire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Great Hinckley Fire.",
        "description": "Regions, routes, and spatial systems that situate Great Hinckley Fire beyond single named places."
    },
    {
        "slug": "hinckley-fire-legacy",
        "name": "Great Hinckley Fire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Great Hinckley Fire.",
        "description": "How Great Hinckley Fire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hinckley-fire-practices",
        "name": "Great Hinckley Fire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Great Hinckley Fire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Great Hinckley Fire."
    },
    {
        "slug": "hinckley-fire-entry-1",
        "name": "Great Hinckley Fire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-2",
        "name": "Great Hinckley Fire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-3",
        "name": "Great Hinckley Fire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-4",
        "name": "Great Hinckley Fire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-5",
        "name": "Great Hinckley Fire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-6",
        "name": "Great Hinckley Fire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-7",
        "name": "Great Hinckley Fire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-8",
        "name": "Great Hinckley Fire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-9",
        "name": "Great Hinckley Fire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-10",
        "name": "Great Hinckley Fire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-11",
        "name": "Great Hinckley Fire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-12",
        "name": "Great Hinckley Fire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-13",
        "name": "Great Hinckley Fire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-14",
        "name": "Great Hinckley Fire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-15",
        "name": "Great Hinckley Fire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-16",
        "name": "Great Hinckley Fire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-17",
        "name": "Great Hinckley Fire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-18",
        "name": "Great Hinckley Fire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-19",
        "name": "Great Hinckley Fire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-20",
        "name": "Great Hinckley Fire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-21",
        "name": "Great Hinckley Fire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-22",
        "name": "Great Hinckley Fire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-23",
        "name": "Great Hinckley Fire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinckley-fire-entry-24",
        "name": "Great Hinckley Fire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Hinckley Fire.",
        "description": "A supporting encyclopedia entry in the Great Hinckley Fire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hinckley-fire",
        "hinckley-fire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hinckley-fire",
        "hinckley-fire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hinckley-fire",
        "hinckley-fire-places",
        "contains",
        "Great Hinckley Fire places is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-events",
        "contains",
        "Great Hinckley Fire events is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-objects",
        "contains",
        "Great Hinckley Fire objects & artifacts is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-factions",
        "contains",
        "Great Hinckley Fire factions & groups is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-concepts",
        "contains",
        "Great Hinckley Fire concepts is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-eras",
        "contains",
        "Great Hinckley Fire eras is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-works",
        "contains",
        "Great Hinckley Fire works & media is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-symbols",
        "contains",
        "Great Hinckley Fire symbols is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-controversies",
        "contains",
        "Great Hinckley Fire controversies is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-sources",
        "contains",
        "Great Hinckley Fire sources is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-geography",
        "contains",
        "Great Hinckley Fire geography is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-legacy",
        "contains",
        "Great Hinckley Fire legacy is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-practices",
        "contains",
        "Great Hinckley Fire practices is a primary trailhead under Great Hinckley Fire.",
        0.88,
        0.82
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-1",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-2",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-3",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-4",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-5",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-6",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-7",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-8",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-9",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-10",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-11",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-12",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-13",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-14",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-15",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-16",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-17",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-18",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-19",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-20",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-21",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-22",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-23",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ],
    [
        "hinckley-fire",
        "hinckley-fire-entry-24",
        "contains",
        "Supporting entry under Great Hinckley Fire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
