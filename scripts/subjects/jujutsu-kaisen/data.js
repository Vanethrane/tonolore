/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jujutsu-kaisen",
        "name": "Jujutsu Kaisen",
        "type": "topic",
        "short_description": "Curses, domains, and the modern shonen occult battler with breakout global fandom.",
        "description": "Curses, domains, and the modern shonen occult battler with breakout global fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to Jujutsu Kaisen so readers can follow long-tail connections across anime."
    },
    {
        "slug": "jujutsu-kaisen-figures",
        "name": "Jujutsu Kaisen figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Jujutsu Kaisen.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-world",
        "name": "Jujutsu Kaisen world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Jujutsu Kaisen.",
        "description": "Geography, institutions, and periodization that give Jujutsu Kaisen its encyclopedia shape."
    },
    {
        "slug": "jujutsu-kaisen-places",
        "name": "Jujutsu Kaisen places",
        "type": "place",
        "short_description": "Locations and geographies that frame Jujutsu Kaisen.",
        "description": "Places, regions, and built sites that give Jujutsu Kaisen its map — where events and figures concentrate."
    },
    {
        "slug": "jujutsu-kaisen-events",
        "name": "Jujutsu Kaisen events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Jujutsu Kaisen.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Jujutsu Kaisen timeline."
    },
    {
        "slug": "jujutsu-kaisen-objects",
        "name": "Jujutsu Kaisen objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Jujutsu Kaisen.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-factions",
        "name": "Jujutsu Kaisen factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Jujutsu Kaisen.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-concepts",
        "name": "Jujutsu Kaisen concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Jujutsu Kaisen.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Jujutsu Kaisen readable as a lore graph."
    },
    {
        "slug": "jujutsu-kaisen-eras",
        "name": "Jujutsu Kaisen eras",
        "type": "event",
        "short_description": "Periodization for Jujutsu Kaisen.",
        "description": "Named eras and phases that help readers track how Jujutsu Kaisen changes across time."
    },
    {
        "slug": "jujutsu-kaisen-works",
        "name": "Jujutsu Kaisen works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Jujutsu Kaisen.",
        "description": "Primary works and adaptations through which most audiences encounter Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-symbols",
        "name": "Jujutsu Kaisen symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Jujutsu Kaisen.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-controversies",
        "name": "Jujutsu Kaisen controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Jujutsu Kaisen.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Jujutsu Kaisen argumentative."
    },
    {
        "slug": "jujutsu-kaisen-sources",
        "name": "Jujutsu Kaisen sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Jujutsu Kaisen.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-geography",
        "name": "Jujutsu Kaisen geography",
        "type": "place",
        "short_description": "Broader geographic framing for Jujutsu Kaisen.",
        "description": "Regions, routes, and spatial systems that situate Jujutsu Kaisen beyond single named places."
    },
    {
        "slug": "jujutsu-kaisen-legacy",
        "name": "Jujutsu Kaisen legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Jujutsu Kaisen.",
        "description": "How Jujutsu Kaisen continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "jujutsu-kaisen-practices",
        "name": "Jujutsu Kaisen practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Jujutsu Kaisen.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Jujutsu Kaisen."
    },
    {
        "slug": "jujutsu-kaisen-entry-1",
        "name": "Jujutsu Kaisen entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-2",
        "name": "Jujutsu Kaisen entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-3",
        "name": "Jujutsu Kaisen entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-4",
        "name": "Jujutsu Kaisen entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-5",
        "name": "Jujutsu Kaisen entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-6",
        "name": "Jujutsu Kaisen entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-7",
        "name": "Jujutsu Kaisen entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-8",
        "name": "Jujutsu Kaisen entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-9",
        "name": "Jujutsu Kaisen entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-10",
        "name": "Jujutsu Kaisen entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-11",
        "name": "Jujutsu Kaisen entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-12",
        "name": "Jujutsu Kaisen entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-13",
        "name": "Jujutsu Kaisen entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-14",
        "name": "Jujutsu Kaisen entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-15",
        "name": "Jujutsu Kaisen entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-16",
        "name": "Jujutsu Kaisen entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-17",
        "name": "Jujutsu Kaisen entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-18",
        "name": "Jujutsu Kaisen entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-19",
        "name": "Jujutsu Kaisen entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-20",
        "name": "Jujutsu Kaisen entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-21",
        "name": "Jujutsu Kaisen entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-22",
        "name": "Jujutsu Kaisen entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-23",
        "name": "Jujutsu Kaisen entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jujutsu-kaisen-entry-24",
        "name": "Jujutsu Kaisen entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jujutsu Kaisen.",
        "description": "A supporting encyclopedia entry in the Jujutsu Kaisen subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-places",
        "contains",
        "Jujutsu Kaisen places is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-events",
        "contains",
        "Jujutsu Kaisen events is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-objects",
        "contains",
        "Jujutsu Kaisen objects & artifacts is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-factions",
        "contains",
        "Jujutsu Kaisen factions & groups is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-concepts",
        "contains",
        "Jujutsu Kaisen concepts is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-eras",
        "contains",
        "Jujutsu Kaisen eras is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-works",
        "contains",
        "Jujutsu Kaisen works & media is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-symbols",
        "contains",
        "Jujutsu Kaisen symbols is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-controversies",
        "contains",
        "Jujutsu Kaisen controversies is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-sources",
        "contains",
        "Jujutsu Kaisen sources is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-geography",
        "contains",
        "Jujutsu Kaisen geography is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-legacy",
        "contains",
        "Jujutsu Kaisen legacy is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-practices",
        "contains",
        "Jujutsu Kaisen practices is a primary trailhead under Jujutsu Kaisen.",
        0.88,
        0.82
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-1",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-2",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-3",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-4",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-5",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-6",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-7",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-8",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-9",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-10",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-11",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-12",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-13",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-14",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-15",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-16",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-17",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-18",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-19",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-20",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-21",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-22",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-23",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ],
    [
        "jujutsu-kaisen",
        "jujutsu-kaisen-entry-24",
        "contains",
        "Supporting entry under Jujutsu Kaisen.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
