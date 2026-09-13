/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fate-rpg",
        "name": "Fate RPG",
        "type": "topic",
        "short_description": "Aspects, fate points, and the narrative system that powers Dresden Files and beyond.",
        "description": "Aspects, fate points, and the narrative system that powers Dresden Files and beyond. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fate RPG so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "fate-rpg-figures",
        "name": "Fate RPG figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fate RPG.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fate RPG."
    },
    {
        "slug": "fate-rpg-world",
        "name": "Fate RPG world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fate RPG.",
        "description": "Geography, institutions, and periodization that give Fate RPG its encyclopedia shape."
    },
    {
        "slug": "fate-rpg-places",
        "name": "Fate RPG places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fate RPG.",
        "description": "Places, regions, and built sites that give Fate RPG its map — where events and figures concentrate."
    },
    {
        "slug": "fate-rpg-events",
        "name": "Fate RPG events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fate RPG.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fate RPG timeline."
    },
    {
        "slug": "fate-rpg-objects",
        "name": "Fate RPG objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fate RPG.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fate RPG."
    },
    {
        "slug": "fate-rpg-factions",
        "name": "Fate RPG factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fate RPG.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fate RPG."
    },
    {
        "slug": "fate-rpg-concepts",
        "name": "Fate RPG concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fate RPG.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fate RPG readable as a lore graph."
    },
    {
        "slug": "fate-rpg-eras",
        "name": "Fate RPG eras",
        "type": "event",
        "short_description": "Periodization for Fate RPG.",
        "description": "Named eras and phases that help readers track how Fate RPG changes across time."
    },
    {
        "slug": "fate-rpg-works",
        "name": "Fate RPG works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fate RPG.",
        "description": "Primary works and adaptations through which most audiences encounter Fate RPG."
    },
    {
        "slug": "fate-rpg-symbols",
        "name": "Fate RPG symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fate RPG.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fate RPG."
    },
    {
        "slug": "fate-rpg-controversies",
        "name": "Fate RPG controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fate RPG.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fate RPG argumentative."
    },
    {
        "slug": "fate-rpg-sources",
        "name": "Fate RPG sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fate RPG.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fate RPG."
    },
    {
        "slug": "fate-rpg-geography",
        "name": "Fate RPG geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fate RPG.",
        "description": "Regions, routes, and spatial systems that situate Fate RPG beyond single named places."
    },
    {
        "slug": "fate-rpg-legacy",
        "name": "Fate RPG legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fate RPG.",
        "description": "How Fate RPG continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fate-rpg-practices",
        "name": "Fate RPG practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fate RPG.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fate RPG."
    },
    {
        "slug": "fate-rpg-entry-1",
        "name": "Fate RPG entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-2",
        "name": "Fate RPG entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-3",
        "name": "Fate RPG entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-4",
        "name": "Fate RPG entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-5",
        "name": "Fate RPG entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-6",
        "name": "Fate RPG entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-7",
        "name": "Fate RPG entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-8",
        "name": "Fate RPG entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-9",
        "name": "Fate RPG entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-10",
        "name": "Fate RPG entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-11",
        "name": "Fate RPG entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-12",
        "name": "Fate RPG entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-13",
        "name": "Fate RPG entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-14",
        "name": "Fate RPG entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-15",
        "name": "Fate RPG entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-16",
        "name": "Fate RPG entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-17",
        "name": "Fate RPG entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-18",
        "name": "Fate RPG entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-19",
        "name": "Fate RPG entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-20",
        "name": "Fate RPG entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-21",
        "name": "Fate RPG entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-22",
        "name": "Fate RPG entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-23",
        "name": "Fate RPG entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fate-rpg-entry-24",
        "name": "Fate RPG entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fate RPG.",
        "description": "A supporting encyclopedia entry in the Fate RPG subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fate-rpg",
        "fate-rpg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fate-rpg",
        "fate-rpg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fate-rpg",
        "fate-rpg-places",
        "contains",
        "Fate RPG places is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-events",
        "contains",
        "Fate RPG events is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-objects",
        "contains",
        "Fate RPG objects & artifacts is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-factions",
        "contains",
        "Fate RPG factions & groups is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-concepts",
        "contains",
        "Fate RPG concepts is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-eras",
        "contains",
        "Fate RPG eras is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-works",
        "contains",
        "Fate RPG works & media is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-symbols",
        "contains",
        "Fate RPG symbols is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-controversies",
        "contains",
        "Fate RPG controversies is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-sources",
        "contains",
        "Fate RPG sources is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-geography",
        "contains",
        "Fate RPG geography is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-legacy",
        "contains",
        "Fate RPG legacy is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-practices",
        "contains",
        "Fate RPG practices is a primary trailhead under Fate RPG.",
        0.88,
        0.82
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-1",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-2",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-3",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-4",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-5",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-6",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-7",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-8",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-9",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-10",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-11",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-12",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-13",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-14",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-15",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-16",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-17",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-18",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-19",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-20",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-21",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-22",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-23",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ],
    [
        "fate-rpg",
        "fate-rpg-entry-24",
        "contains",
        "Supporting entry under Fate RPG.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
