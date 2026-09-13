/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "skullgirls",
        "name": "Skullgirls",
        "type": "topic",
        "short_description": "Trio assists, art-deco nightmare world, and the indie 2D fighter with lush animation.",
        "description": "Trio assists, art-deco nightmare world, and the indie 2D fighter with lush animation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Skullgirls so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "skullgirls-figures",
        "name": "Skullgirls figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Skullgirls.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Skullgirls."
    },
    {
        "slug": "skullgirls-world",
        "name": "Skullgirls world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Skullgirls.",
        "description": "Geography, institutions, and periodization that give Skullgirls its encyclopedia shape."
    },
    {
        "slug": "skullgirls-places",
        "name": "Skullgirls places",
        "type": "place",
        "short_description": "Locations and geographies that frame Skullgirls.",
        "description": "Places, regions, and built sites that give Skullgirls its map — where events and figures concentrate."
    },
    {
        "slug": "skullgirls-events",
        "name": "Skullgirls events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Skullgirls.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Skullgirls timeline."
    },
    {
        "slug": "skullgirls-objects",
        "name": "Skullgirls objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Skullgirls.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Skullgirls."
    },
    {
        "slug": "skullgirls-factions",
        "name": "Skullgirls factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Skullgirls.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Skullgirls."
    },
    {
        "slug": "skullgirls-concepts",
        "name": "Skullgirls concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Skullgirls.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Skullgirls readable as a lore graph."
    },
    {
        "slug": "skullgirls-eras",
        "name": "Skullgirls eras",
        "type": "event",
        "short_description": "Periodization for Skullgirls.",
        "description": "Named eras and phases that help readers track how Skullgirls changes across time."
    },
    {
        "slug": "skullgirls-works",
        "name": "Skullgirls works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Skullgirls.",
        "description": "Primary works and adaptations through which most audiences encounter Skullgirls."
    },
    {
        "slug": "skullgirls-symbols",
        "name": "Skullgirls symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Skullgirls.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Skullgirls."
    },
    {
        "slug": "skullgirls-controversies",
        "name": "Skullgirls controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Skullgirls.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Skullgirls argumentative."
    },
    {
        "slug": "skullgirls-sources",
        "name": "Skullgirls sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Skullgirls.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Skullgirls."
    },
    {
        "slug": "skullgirls-geography",
        "name": "Skullgirls geography",
        "type": "place",
        "short_description": "Broader geographic framing for Skullgirls.",
        "description": "Regions, routes, and spatial systems that situate Skullgirls beyond single named places."
    },
    {
        "slug": "skullgirls-legacy",
        "name": "Skullgirls legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Skullgirls.",
        "description": "How Skullgirls continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "skullgirls-practices",
        "name": "Skullgirls practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Skullgirls.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Skullgirls."
    },
    {
        "slug": "skullgirls-entry-1",
        "name": "Skullgirls entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-2",
        "name": "Skullgirls entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-3",
        "name": "Skullgirls entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-4",
        "name": "Skullgirls entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-5",
        "name": "Skullgirls entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-6",
        "name": "Skullgirls entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-7",
        "name": "Skullgirls entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-8",
        "name": "Skullgirls entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-9",
        "name": "Skullgirls entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-10",
        "name": "Skullgirls entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-11",
        "name": "Skullgirls entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-12",
        "name": "Skullgirls entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-13",
        "name": "Skullgirls entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-14",
        "name": "Skullgirls entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-15",
        "name": "Skullgirls entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-16",
        "name": "Skullgirls entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-17",
        "name": "Skullgirls entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-18",
        "name": "Skullgirls entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-19",
        "name": "Skullgirls entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-20",
        "name": "Skullgirls entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-21",
        "name": "Skullgirls entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-22",
        "name": "Skullgirls entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-23",
        "name": "Skullgirls entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skullgirls-entry-24",
        "name": "Skullgirls entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skullgirls.",
        "description": "A supporting encyclopedia entry in the Skullgirls subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "skullgirls",
        "skullgirls-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "skullgirls",
        "skullgirls-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "skullgirls",
        "skullgirls-places",
        "contains",
        "Skullgirls places is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-events",
        "contains",
        "Skullgirls events is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-objects",
        "contains",
        "Skullgirls objects & artifacts is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-factions",
        "contains",
        "Skullgirls factions & groups is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-concepts",
        "contains",
        "Skullgirls concepts is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-eras",
        "contains",
        "Skullgirls eras is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-works",
        "contains",
        "Skullgirls works & media is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-symbols",
        "contains",
        "Skullgirls symbols is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-controversies",
        "contains",
        "Skullgirls controversies is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-sources",
        "contains",
        "Skullgirls sources is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-geography",
        "contains",
        "Skullgirls geography is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-legacy",
        "contains",
        "Skullgirls legacy is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-practices",
        "contains",
        "Skullgirls practices is a primary trailhead under Skullgirls.",
        0.88,
        0.82
    ],
    [
        "skullgirls",
        "skullgirls-entry-1",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-2",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-3",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-4",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-5",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-6",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-7",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-8",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-9",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-10",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-11",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-12",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-13",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-14",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-15",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-16",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-17",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-18",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-19",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-20",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-21",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-22",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-23",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ],
    [
        "skullgirls",
        "skullgirls-entry-24",
        "contains",
        "Supporting entry under Skullgirls.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
