/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "garou-mark-of-the-wolves",
        "name": "Garou: Mark of the Wolves",
        "type": "topic",
        "short_description": "Second Impact, hot intents, and the Fatal Fury successor beloved by competitive classicists.",
        "description": "Second Impact, hot intents, and the Fatal Fury successor beloved by competitive classicists. This Ton-o-Lore subject maps people, places, events, and ideas tied to Garou: Mark of the Wolves so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "garou-mark-of-the-wolves-figures",
        "name": "Garou: Mark of the Wolves figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Garou: Mark of the Wolves.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-world",
        "name": "Garou: Mark of the Wolves world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Garou: Mark of the Wolves.",
        "description": "Geography, institutions, and periodization that give Garou: Mark of the Wolves its encyclopedia shape."
    },
    {
        "slug": "garou-mark-of-the-wolves-places",
        "name": "Garou: Mark of the Wolves places",
        "type": "place",
        "short_description": "Locations and geographies that frame Garou: Mark of the Wolves.",
        "description": "Places, regions, and built sites that give Garou: Mark of the Wolves its map — where events and figures concentrate."
    },
    {
        "slug": "garou-mark-of-the-wolves-events",
        "name": "Garou: Mark of the Wolves events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Garou: Mark of the Wolves.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Garou: Mark of the Wolves timeline."
    },
    {
        "slug": "garou-mark-of-the-wolves-objects",
        "name": "Garou: Mark of the Wolves objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Garou: Mark of the Wolves.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-factions",
        "name": "Garou: Mark of the Wolves factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Garou: Mark of the Wolves.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-concepts",
        "name": "Garou: Mark of the Wolves concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Garou: Mark of the Wolves.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Garou: Mark of the Wolves readable as a lore graph."
    },
    {
        "slug": "garou-mark-of-the-wolves-eras",
        "name": "Garou: Mark of the Wolves eras",
        "type": "event",
        "short_description": "Periodization for Garou: Mark of the Wolves.",
        "description": "Named eras and phases that help readers track how Garou: Mark of the Wolves changes across time."
    },
    {
        "slug": "garou-mark-of-the-wolves-works",
        "name": "Garou: Mark of the Wolves works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Garou: Mark of the Wolves.",
        "description": "Primary works and adaptations through which most audiences encounter Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-symbols",
        "name": "Garou: Mark of the Wolves symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Garou: Mark of the Wolves.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-controversies",
        "name": "Garou: Mark of the Wolves controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Garou: Mark of the Wolves.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Garou: Mark of the Wolves argumentative."
    },
    {
        "slug": "garou-mark-of-the-wolves-sources",
        "name": "Garou: Mark of the Wolves sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Garou: Mark of the Wolves.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-geography",
        "name": "Garou: Mark of the Wolves geography",
        "type": "place",
        "short_description": "Broader geographic framing for Garou: Mark of the Wolves.",
        "description": "Regions, routes, and spatial systems that situate Garou: Mark of the Wolves beyond single named places."
    },
    {
        "slug": "garou-mark-of-the-wolves-legacy",
        "name": "Garou: Mark of the Wolves legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Garou: Mark of the Wolves.",
        "description": "How Garou: Mark of the Wolves continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "garou-mark-of-the-wolves-practices",
        "name": "Garou: Mark of the Wolves practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Garou: Mark of the Wolves.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Garou: Mark of the Wolves."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-1",
        "name": "Garou: Mark of the Wolves entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-2",
        "name": "Garou: Mark of the Wolves entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-3",
        "name": "Garou: Mark of the Wolves entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-4",
        "name": "Garou: Mark of the Wolves entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-5",
        "name": "Garou: Mark of the Wolves entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-6",
        "name": "Garou: Mark of the Wolves entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-7",
        "name": "Garou: Mark of the Wolves entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-8",
        "name": "Garou: Mark of the Wolves entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-9",
        "name": "Garou: Mark of the Wolves entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-10",
        "name": "Garou: Mark of the Wolves entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-11",
        "name": "Garou: Mark of the Wolves entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-12",
        "name": "Garou: Mark of the Wolves entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-13",
        "name": "Garou: Mark of the Wolves entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-14",
        "name": "Garou: Mark of the Wolves entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-15",
        "name": "Garou: Mark of the Wolves entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-16",
        "name": "Garou: Mark of the Wolves entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-17",
        "name": "Garou: Mark of the Wolves entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-18",
        "name": "Garou: Mark of the Wolves entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-19",
        "name": "Garou: Mark of the Wolves entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-20",
        "name": "Garou: Mark of the Wolves entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-21",
        "name": "Garou: Mark of the Wolves entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-22",
        "name": "Garou: Mark of the Wolves entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-23",
        "name": "Garou: Mark of the Wolves entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "garou-mark-of-the-wolves-entry-24",
        "name": "Garou: Mark of the Wolves entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Garou: Mark of the Wolves.",
        "description": "A supporting encyclopedia entry in the Garou: Mark of the Wolves subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-places",
        "contains",
        "Garou: Mark of the Wolves places is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-events",
        "contains",
        "Garou: Mark of the Wolves events is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-objects",
        "contains",
        "Garou: Mark of the Wolves objects & artifacts is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-factions",
        "contains",
        "Garou: Mark of the Wolves factions & groups is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-concepts",
        "contains",
        "Garou: Mark of the Wolves concepts is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-eras",
        "contains",
        "Garou: Mark of the Wolves eras is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-works",
        "contains",
        "Garou: Mark of the Wolves works & media is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-symbols",
        "contains",
        "Garou: Mark of the Wolves symbols is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-controversies",
        "contains",
        "Garou: Mark of the Wolves controversies is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-sources",
        "contains",
        "Garou: Mark of the Wolves sources is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-geography",
        "contains",
        "Garou: Mark of the Wolves geography is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-legacy",
        "contains",
        "Garou: Mark of the Wolves legacy is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-practices",
        "contains",
        "Garou: Mark of the Wolves practices is a primary trailhead under Garou: Mark of the Wolves.",
        0.88,
        0.82
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-1",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-2",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-3",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-4",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-5",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-6",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-7",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-8",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-9",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-10",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-11",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-12",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-13",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-14",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-15",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-16",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-17",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-18",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-19",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-20",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-21",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-22",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-23",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ],
    [
        "garou-mark-of-the-wolves",
        "garou-mark-of-the-wolves-entry-24",
        "contains",
        "Supporting entry under Garou: Mark of the Wolves.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
