/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "enders-game-saga",
        "name": "Ender's Game saga",
        "type": "topic",
        "short_description": "Battle School, Formics, and the controversial military SF sequence that dominated YA shelves.",
        "description": "Battle School, Formics, and the controversial military SF sequence that dominated YA shelves. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ender's Game saga so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "enders-game-saga-figures",
        "name": "Ender's Game saga figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ender's Game saga.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-world",
        "name": "Ender's Game saga world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ender's Game saga.",
        "description": "Geography, institutions, and periodization that give Ender's Game saga its encyclopedia shape."
    },
    {
        "slug": "enders-game-saga-places",
        "name": "Ender's Game saga places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ender's Game saga.",
        "description": "Places, regions, and built sites that give Ender's Game saga its map — where events and figures concentrate."
    },
    {
        "slug": "enders-game-saga-events",
        "name": "Ender's Game saga events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ender's Game saga.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ender's Game saga timeline."
    },
    {
        "slug": "enders-game-saga-objects",
        "name": "Ender's Game saga objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ender's Game saga.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-factions",
        "name": "Ender's Game saga factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ender's Game saga.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-concepts",
        "name": "Ender's Game saga concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ender's Game saga.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ender's Game saga readable as a lore graph."
    },
    {
        "slug": "enders-game-saga-eras",
        "name": "Ender's Game saga eras",
        "type": "event",
        "short_description": "Periodization for Ender's Game saga.",
        "description": "Named eras and phases that help readers track how Ender's Game saga changes across time."
    },
    {
        "slug": "enders-game-saga-works",
        "name": "Ender's Game saga works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ender's Game saga.",
        "description": "Primary works and adaptations through which most audiences encounter Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-symbols",
        "name": "Ender's Game saga symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ender's Game saga.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-controversies",
        "name": "Ender's Game saga controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ender's Game saga.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ender's Game saga argumentative."
    },
    {
        "slug": "enders-game-saga-sources",
        "name": "Ender's Game saga sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ender's Game saga.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-geography",
        "name": "Ender's Game saga geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ender's Game saga.",
        "description": "Regions, routes, and spatial systems that situate Ender's Game saga beyond single named places."
    },
    {
        "slug": "enders-game-saga-legacy",
        "name": "Ender's Game saga legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ender's Game saga.",
        "description": "How Ender's Game saga continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "enders-game-saga-practices",
        "name": "Ender's Game saga practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ender's Game saga.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ender's Game saga."
    },
    {
        "slug": "enders-game-saga-entry-1",
        "name": "Ender's Game saga entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-2",
        "name": "Ender's Game saga entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-3",
        "name": "Ender's Game saga entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-4",
        "name": "Ender's Game saga entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-5",
        "name": "Ender's Game saga entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-6",
        "name": "Ender's Game saga entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-7",
        "name": "Ender's Game saga entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-8",
        "name": "Ender's Game saga entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-9",
        "name": "Ender's Game saga entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-10",
        "name": "Ender's Game saga entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-11",
        "name": "Ender's Game saga entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-12",
        "name": "Ender's Game saga entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-13",
        "name": "Ender's Game saga entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-14",
        "name": "Ender's Game saga entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-15",
        "name": "Ender's Game saga entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-16",
        "name": "Ender's Game saga entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-17",
        "name": "Ender's Game saga entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-18",
        "name": "Ender's Game saga entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-19",
        "name": "Ender's Game saga entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-20",
        "name": "Ender's Game saga entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-21",
        "name": "Ender's Game saga entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-22",
        "name": "Ender's Game saga entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-23",
        "name": "Ender's Game saga entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enders-game-saga-entry-24",
        "name": "Ender's Game saga entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ender's Game saga.",
        "description": "A supporting encyclopedia entry in the Ender's Game saga subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "enders-game-saga",
        "enders-game-saga-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "enders-game-saga",
        "enders-game-saga-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "enders-game-saga",
        "enders-game-saga-places",
        "contains",
        "Ender's Game saga places is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-events",
        "contains",
        "Ender's Game saga events is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-objects",
        "contains",
        "Ender's Game saga objects & artifacts is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-factions",
        "contains",
        "Ender's Game saga factions & groups is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-concepts",
        "contains",
        "Ender's Game saga concepts is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-eras",
        "contains",
        "Ender's Game saga eras is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-works",
        "contains",
        "Ender's Game saga works & media is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-symbols",
        "contains",
        "Ender's Game saga symbols is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-controversies",
        "contains",
        "Ender's Game saga controversies is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-sources",
        "contains",
        "Ender's Game saga sources is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-geography",
        "contains",
        "Ender's Game saga geography is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-legacy",
        "contains",
        "Ender's Game saga legacy is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-practices",
        "contains",
        "Ender's Game saga practices is a primary trailhead under Ender's Game saga.",
        0.88,
        0.82
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-1",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-2",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-3",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-4",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-5",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-6",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-7",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-8",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-9",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-10",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-11",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-12",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-13",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-14",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-15",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-16",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-17",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-18",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-19",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-20",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-21",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-22",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-23",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ],
    [
        "enders-game-saga",
        "enders-game-saga-entry-24",
        "contains",
        "Supporting entry under Ender's Game saga.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
