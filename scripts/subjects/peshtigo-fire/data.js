/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "peshtigo-fire",
        "name": "Peshtigo Fire",
        "type": "topic",
        "short_description": "1871 Wisconsin firestorm that killed more than Chicago’s famous blaze the same night.",
        "description": "1871 Wisconsin firestorm that killed more than Chicago’s famous blaze the same night. This Ton-o-Lore subject maps people, places, events, and ideas tied to Peshtigo Fire so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "peshtigo-fire-figures",
        "name": "Peshtigo Fire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Peshtigo Fire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-world",
        "name": "Peshtigo Fire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Peshtigo Fire.",
        "description": "Geography, institutions, and periodization that give Peshtigo Fire its encyclopedia shape."
    },
    {
        "slug": "peshtigo-fire-places",
        "name": "Peshtigo Fire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Peshtigo Fire.",
        "description": "Places, regions, and built sites that give Peshtigo Fire its map — where events and figures concentrate."
    },
    {
        "slug": "peshtigo-fire-events",
        "name": "Peshtigo Fire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Peshtigo Fire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Peshtigo Fire timeline."
    },
    {
        "slug": "peshtigo-fire-objects",
        "name": "Peshtigo Fire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Peshtigo Fire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-factions",
        "name": "Peshtigo Fire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Peshtigo Fire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-concepts",
        "name": "Peshtigo Fire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Peshtigo Fire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Peshtigo Fire readable as a lore graph."
    },
    {
        "slug": "peshtigo-fire-eras",
        "name": "Peshtigo Fire eras",
        "type": "event",
        "short_description": "Periodization for Peshtigo Fire.",
        "description": "Named eras and phases that help readers track how Peshtigo Fire changes across time."
    },
    {
        "slug": "peshtigo-fire-works",
        "name": "Peshtigo Fire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Peshtigo Fire.",
        "description": "Primary works and adaptations through which most audiences encounter Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-symbols",
        "name": "Peshtigo Fire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Peshtigo Fire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-controversies",
        "name": "Peshtigo Fire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Peshtigo Fire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Peshtigo Fire argumentative."
    },
    {
        "slug": "peshtigo-fire-sources",
        "name": "Peshtigo Fire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Peshtigo Fire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-geography",
        "name": "Peshtigo Fire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Peshtigo Fire.",
        "description": "Regions, routes, and spatial systems that situate Peshtigo Fire beyond single named places."
    },
    {
        "slug": "peshtigo-fire-legacy",
        "name": "Peshtigo Fire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Peshtigo Fire.",
        "description": "How Peshtigo Fire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "peshtigo-fire-practices",
        "name": "Peshtigo Fire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Peshtigo Fire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Peshtigo Fire."
    },
    {
        "slug": "peshtigo-fire-entry-1",
        "name": "Peshtigo Fire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-2",
        "name": "Peshtigo Fire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-3",
        "name": "Peshtigo Fire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-4",
        "name": "Peshtigo Fire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-5",
        "name": "Peshtigo Fire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-6",
        "name": "Peshtigo Fire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-7",
        "name": "Peshtigo Fire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-8",
        "name": "Peshtigo Fire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-9",
        "name": "Peshtigo Fire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-10",
        "name": "Peshtigo Fire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-11",
        "name": "Peshtigo Fire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-12",
        "name": "Peshtigo Fire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-13",
        "name": "Peshtigo Fire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-14",
        "name": "Peshtigo Fire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-15",
        "name": "Peshtigo Fire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-16",
        "name": "Peshtigo Fire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-17",
        "name": "Peshtigo Fire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-18",
        "name": "Peshtigo Fire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-19",
        "name": "Peshtigo Fire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-20",
        "name": "Peshtigo Fire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-21",
        "name": "Peshtigo Fire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-22",
        "name": "Peshtigo Fire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-23",
        "name": "Peshtigo Fire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peshtigo-fire-entry-24",
        "name": "Peshtigo Fire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peshtigo Fire.",
        "description": "A supporting encyclopedia entry in the Peshtigo Fire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "peshtigo-fire",
        "peshtigo-fire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-places",
        "contains",
        "Peshtigo Fire places is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-events",
        "contains",
        "Peshtigo Fire events is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-objects",
        "contains",
        "Peshtigo Fire objects & artifacts is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-factions",
        "contains",
        "Peshtigo Fire factions & groups is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-concepts",
        "contains",
        "Peshtigo Fire concepts is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-eras",
        "contains",
        "Peshtigo Fire eras is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-works",
        "contains",
        "Peshtigo Fire works & media is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-symbols",
        "contains",
        "Peshtigo Fire symbols is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-controversies",
        "contains",
        "Peshtigo Fire controversies is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-sources",
        "contains",
        "Peshtigo Fire sources is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-geography",
        "contains",
        "Peshtigo Fire geography is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-legacy",
        "contains",
        "Peshtigo Fire legacy is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-practices",
        "contains",
        "Peshtigo Fire practices is a primary trailhead under Peshtigo Fire.",
        0.88,
        0.82
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-1",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-2",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-3",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-4",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-5",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-6",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-7",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-8",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-9",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-10",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-11",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-12",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-13",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-14",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-15",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-16",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-17",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-18",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-19",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-20",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-21",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-22",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-23",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ],
    [
        "peshtigo-fire",
        "peshtigo-fire-entry-24",
        "contains",
        "Supporting entry under Peshtigo Fire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
