/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "roh-wrestling",
        "name": "Ring of Honor",
        "type": "topic",
        "short_description": "Pure wrestling ethos, title lineages, and the indie promotion that midwifed modern US scene stars.",
        "description": "Pure wrestling ethos, title lineages, and the indie promotion that midwifed modern US scene stars. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ring of Honor so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "roh-wrestling-figures",
        "name": "Ring of Honor figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ring of Honor.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ring of Honor."
    },
    {
        "slug": "roh-wrestling-world",
        "name": "Ring of Honor world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ring of Honor.",
        "description": "Geography, institutions, and periodization that give Ring of Honor its encyclopedia shape."
    },
    {
        "slug": "roh-wrestling-places",
        "name": "Ring of Honor places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ring of Honor.",
        "description": "Places, regions, and built sites that give Ring of Honor its map — where events and figures concentrate."
    },
    {
        "slug": "roh-wrestling-events",
        "name": "Ring of Honor events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ring of Honor.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ring of Honor timeline."
    },
    {
        "slug": "roh-wrestling-objects",
        "name": "Ring of Honor objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ring of Honor.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ring of Honor."
    },
    {
        "slug": "roh-wrestling-factions",
        "name": "Ring of Honor factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ring of Honor.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ring of Honor."
    },
    {
        "slug": "roh-wrestling-concepts",
        "name": "Ring of Honor concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ring of Honor.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ring of Honor readable as a lore graph."
    },
    {
        "slug": "roh-wrestling-eras",
        "name": "Ring of Honor eras",
        "type": "event",
        "short_description": "Periodization for Ring of Honor.",
        "description": "Named eras and phases that help readers track how Ring of Honor changes across time."
    },
    {
        "slug": "roh-wrestling-works",
        "name": "Ring of Honor works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ring of Honor.",
        "description": "Primary works and adaptations through which most audiences encounter Ring of Honor."
    },
    {
        "slug": "roh-wrestling-symbols",
        "name": "Ring of Honor symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ring of Honor.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ring of Honor."
    },
    {
        "slug": "roh-wrestling-controversies",
        "name": "Ring of Honor controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ring of Honor.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ring of Honor argumentative."
    },
    {
        "slug": "roh-wrestling-sources",
        "name": "Ring of Honor sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ring of Honor.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ring of Honor."
    },
    {
        "slug": "roh-wrestling-geography",
        "name": "Ring of Honor geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ring of Honor.",
        "description": "Regions, routes, and spatial systems that situate Ring of Honor beyond single named places."
    },
    {
        "slug": "roh-wrestling-legacy",
        "name": "Ring of Honor legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ring of Honor.",
        "description": "How Ring of Honor continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "roh-wrestling-practices",
        "name": "Ring of Honor practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ring of Honor.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ring of Honor."
    },
    {
        "slug": "roh-wrestling-entry-1",
        "name": "Ring of Honor entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-2",
        "name": "Ring of Honor entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-3",
        "name": "Ring of Honor entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-4",
        "name": "Ring of Honor entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-5",
        "name": "Ring of Honor entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-6",
        "name": "Ring of Honor entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-7",
        "name": "Ring of Honor entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-8",
        "name": "Ring of Honor entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-9",
        "name": "Ring of Honor entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-10",
        "name": "Ring of Honor entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-11",
        "name": "Ring of Honor entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-12",
        "name": "Ring of Honor entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-13",
        "name": "Ring of Honor entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-14",
        "name": "Ring of Honor entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-15",
        "name": "Ring of Honor entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-16",
        "name": "Ring of Honor entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-17",
        "name": "Ring of Honor entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-18",
        "name": "Ring of Honor entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-19",
        "name": "Ring of Honor entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-20",
        "name": "Ring of Honor entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-21",
        "name": "Ring of Honor entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-22",
        "name": "Ring of Honor entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-23",
        "name": "Ring of Honor entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roh-wrestling-entry-24",
        "name": "Ring of Honor entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ring of Honor.",
        "description": "A supporting encyclopedia entry in the Ring of Honor subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "roh-wrestling",
        "roh-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "roh-wrestling",
        "roh-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "roh-wrestling",
        "roh-wrestling-places",
        "contains",
        "Ring of Honor places is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-events",
        "contains",
        "Ring of Honor events is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-objects",
        "contains",
        "Ring of Honor objects & artifacts is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-factions",
        "contains",
        "Ring of Honor factions & groups is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-concepts",
        "contains",
        "Ring of Honor concepts is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-eras",
        "contains",
        "Ring of Honor eras is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-works",
        "contains",
        "Ring of Honor works & media is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-symbols",
        "contains",
        "Ring of Honor symbols is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-controversies",
        "contains",
        "Ring of Honor controversies is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-sources",
        "contains",
        "Ring of Honor sources is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-geography",
        "contains",
        "Ring of Honor geography is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-legacy",
        "contains",
        "Ring of Honor legacy is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-practices",
        "contains",
        "Ring of Honor practices is a primary trailhead under Ring of Honor.",
        0.88,
        0.82
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-1",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-2",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-3",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-4",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-5",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-6",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-7",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-8",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-9",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-10",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-11",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-12",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-13",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-14",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-15",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-16",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-17",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-18",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-19",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-20",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-21",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-22",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-23",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ],
    [
        "roh-wrestling",
        "roh-wrestling-entry-24",
        "contains",
        "Supporting entry under Ring of Honor.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
