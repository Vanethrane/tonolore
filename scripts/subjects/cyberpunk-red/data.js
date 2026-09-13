/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cyberpunk-red",
        "name": "Cyberpunk Red / Cyberpunk RPG",
        "type": "topic",
        "short_description": "Night City tabletop roots that fed the video game — chrome, edgerunners, and corpo wars.",
        "description": "Night City tabletop roots that fed the video game — chrome, edgerunners, and corpo wars. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cyberpunk Red / Cyberpunk RPG so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "cyberpunk-red-figures",
        "name": "Cyberpunk Red / Cyberpunk RPG figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cyberpunk Red / Cyberpunk RPG.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-world",
        "name": "Cyberpunk Red / Cyberpunk RPG world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cyberpunk Red / Cyberpunk RPG.",
        "description": "Geography, institutions, and periodization that give Cyberpunk Red / Cyberpunk RPG its encyclopedia shape."
    },
    {
        "slug": "cyberpunk-red-places",
        "name": "Cyberpunk Red / Cyberpunk RPG places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cyberpunk Red / Cyberpunk RPG.",
        "description": "Places, regions, and built sites that give Cyberpunk Red / Cyberpunk RPG its map — where events and figures concentrate."
    },
    {
        "slug": "cyberpunk-red-events",
        "name": "Cyberpunk Red / Cyberpunk RPG events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cyberpunk Red / Cyberpunk RPG.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cyberpunk Red / Cyberpunk RPG timeline."
    },
    {
        "slug": "cyberpunk-red-objects",
        "name": "Cyberpunk Red / Cyberpunk RPG objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cyberpunk Red / Cyberpunk RPG.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-factions",
        "name": "Cyberpunk Red / Cyberpunk RPG factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-concepts",
        "name": "Cyberpunk Red / Cyberpunk RPG concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cyberpunk Red / Cyberpunk RPG.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cyberpunk Red / Cyberpunk RPG readable as a lore graph."
    },
    {
        "slug": "cyberpunk-red-eras",
        "name": "Cyberpunk Red / Cyberpunk RPG eras",
        "type": "event",
        "short_description": "Periodization for Cyberpunk Red / Cyberpunk RPG.",
        "description": "Named eras and phases that help readers track how Cyberpunk Red / Cyberpunk RPG changes across time."
    },
    {
        "slug": "cyberpunk-red-works",
        "name": "Cyberpunk Red / Cyberpunk RPG works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cyberpunk Red / Cyberpunk RPG.",
        "description": "Primary works and adaptations through which most audiences encounter Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-symbols",
        "name": "Cyberpunk Red / Cyberpunk RPG symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cyberpunk Red / Cyberpunk RPG.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-controversies",
        "name": "Cyberpunk Red / Cyberpunk RPG controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cyberpunk Red / Cyberpunk RPG.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cyberpunk Red / Cyberpunk RPG argumentative."
    },
    {
        "slug": "cyberpunk-red-sources",
        "name": "Cyberpunk Red / Cyberpunk RPG sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cyberpunk Red / Cyberpunk RPG.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-geography",
        "name": "Cyberpunk Red / Cyberpunk RPG geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cyberpunk Red / Cyberpunk RPG.",
        "description": "Regions, routes, and spatial systems that situate Cyberpunk Red / Cyberpunk RPG beyond single named places."
    },
    {
        "slug": "cyberpunk-red-legacy",
        "name": "Cyberpunk Red / Cyberpunk RPG legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cyberpunk Red / Cyberpunk RPG.",
        "description": "How Cyberpunk Red / Cyberpunk RPG continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cyberpunk-red-practices",
        "name": "Cyberpunk Red / Cyberpunk RPG practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cyberpunk Red / Cyberpunk RPG.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cyberpunk Red / Cyberpunk RPG."
    },
    {
        "slug": "cyberpunk-red-entry-1",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-2",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-3",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-4",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-5",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-6",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-7",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-8",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-9",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-10",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-11",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-12",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-13",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-14",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-15",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-16",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-17",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-18",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-19",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-20",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-21",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-22",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-23",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cyberpunk-red-entry-24",
        "name": "Cyberpunk Red / Cyberpunk RPG entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cyberpunk Red / Cyberpunk RPG.",
        "description": "A supporting encyclopedia entry in the Cyberpunk Red / Cyberpunk RPG subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cyberpunk-red",
        "cyberpunk-red-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-places",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG places is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-events",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG events is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-objects",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG objects & artifacts is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-factions",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG factions & groups is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-concepts",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG concepts is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-eras",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG eras is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-works",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG works & media is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-symbols",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG symbols is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-controversies",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG controversies is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-sources",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG sources is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-geography",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG geography is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-legacy",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG legacy is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-practices",
        "contains",
        "Cyberpunk Red / Cyberpunk RPG practices is a primary trailhead under Cyberpunk Red / Cyberpunk RPG.",
        0.88,
        0.82
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-1",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-2",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-3",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-4",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-5",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-6",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-7",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-8",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-9",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-10",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-11",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-12",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-13",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-14",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-15",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-16",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-17",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-18",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-19",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-20",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-21",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-22",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-23",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ],
    [
        "cyberpunk-red",
        "cyberpunk-red-entry-24",
        "contains",
        "Supporting entry under Cyberpunk Red / Cyberpunk RPG.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
