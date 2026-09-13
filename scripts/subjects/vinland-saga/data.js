/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vinland-saga",
        "name": "Vinland Saga",
        "type": "topic",
        "short_description": "Viking revenge to pacifism, Thorfinn’s arc, and historical seinen at epic scale.",
        "description": "Viking revenge to pacifism, Thorfinn’s arc, and historical seinen at epic scale. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vinland Saga so readers can follow long-tail connections across anime."
    },
    {
        "slug": "vinland-saga-figures",
        "name": "Vinland Saga figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vinland Saga.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vinland Saga."
    },
    {
        "slug": "vinland-saga-world",
        "name": "Vinland Saga world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vinland Saga.",
        "description": "Geography, institutions, and periodization that give Vinland Saga its encyclopedia shape."
    },
    {
        "slug": "vinland-saga-places",
        "name": "Vinland Saga places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vinland Saga.",
        "description": "Places, regions, and built sites that give Vinland Saga its map — where events and figures concentrate."
    },
    {
        "slug": "vinland-saga-events",
        "name": "Vinland Saga events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vinland Saga.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vinland Saga timeline."
    },
    {
        "slug": "vinland-saga-objects",
        "name": "Vinland Saga objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vinland Saga.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vinland Saga."
    },
    {
        "slug": "vinland-saga-factions",
        "name": "Vinland Saga factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vinland Saga.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vinland Saga."
    },
    {
        "slug": "vinland-saga-concepts",
        "name": "Vinland Saga concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vinland Saga.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vinland Saga readable as a lore graph."
    },
    {
        "slug": "vinland-saga-eras",
        "name": "Vinland Saga eras",
        "type": "event",
        "short_description": "Periodization for Vinland Saga.",
        "description": "Named eras and phases that help readers track how Vinland Saga changes across time."
    },
    {
        "slug": "vinland-saga-works",
        "name": "Vinland Saga works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vinland Saga.",
        "description": "Primary works and adaptations through which most audiences encounter Vinland Saga."
    },
    {
        "slug": "vinland-saga-symbols",
        "name": "Vinland Saga symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vinland Saga.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vinland Saga."
    },
    {
        "slug": "vinland-saga-controversies",
        "name": "Vinland Saga controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vinland Saga.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vinland Saga argumentative."
    },
    {
        "slug": "vinland-saga-sources",
        "name": "Vinland Saga sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vinland Saga.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vinland Saga."
    },
    {
        "slug": "vinland-saga-geography",
        "name": "Vinland Saga geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vinland Saga.",
        "description": "Regions, routes, and spatial systems that situate Vinland Saga beyond single named places."
    },
    {
        "slug": "vinland-saga-legacy",
        "name": "Vinland Saga legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vinland Saga.",
        "description": "How Vinland Saga continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "vinland-saga-practices",
        "name": "Vinland Saga practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Vinland Saga.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Vinland Saga."
    },
    {
        "slug": "vinland-saga-entry-1",
        "name": "Vinland Saga entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-2",
        "name": "Vinland Saga entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-3",
        "name": "Vinland Saga entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-4",
        "name": "Vinland Saga entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-5",
        "name": "Vinland Saga entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-6",
        "name": "Vinland Saga entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-7",
        "name": "Vinland Saga entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-8",
        "name": "Vinland Saga entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-9",
        "name": "Vinland Saga entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-10",
        "name": "Vinland Saga entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-11",
        "name": "Vinland Saga entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-12",
        "name": "Vinland Saga entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-13",
        "name": "Vinland Saga entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-14",
        "name": "Vinland Saga entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-15",
        "name": "Vinland Saga entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-16",
        "name": "Vinland Saga entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-17",
        "name": "Vinland Saga entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-18",
        "name": "Vinland Saga entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-19",
        "name": "Vinland Saga entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-20",
        "name": "Vinland Saga entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-21",
        "name": "Vinland Saga entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-22",
        "name": "Vinland Saga entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-23",
        "name": "Vinland Saga entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vinland-saga-entry-24",
        "name": "Vinland Saga entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vinland Saga.",
        "description": "A supporting encyclopedia entry in the Vinland Saga subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "vinland-saga",
        "vinland-saga-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vinland-saga",
        "vinland-saga-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vinland-saga",
        "vinland-saga-places",
        "contains",
        "Vinland Saga places is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-events",
        "contains",
        "Vinland Saga events is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-objects",
        "contains",
        "Vinland Saga objects & artifacts is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-factions",
        "contains",
        "Vinland Saga factions & groups is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-concepts",
        "contains",
        "Vinland Saga concepts is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-eras",
        "contains",
        "Vinland Saga eras is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-works",
        "contains",
        "Vinland Saga works & media is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-symbols",
        "contains",
        "Vinland Saga symbols is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-controversies",
        "contains",
        "Vinland Saga controversies is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-sources",
        "contains",
        "Vinland Saga sources is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-geography",
        "contains",
        "Vinland Saga geography is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-legacy",
        "contains",
        "Vinland Saga legacy is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-practices",
        "contains",
        "Vinland Saga practices is a primary trailhead under Vinland Saga.",
        0.88,
        0.82
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-1",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-2",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-3",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-4",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-5",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-6",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-7",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-8",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-9",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-10",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-11",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-12",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-13",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-14",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-15",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-16",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-17",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-18",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-19",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-20",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-21",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-22",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-23",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ],
    [
        "vinland-saga",
        "vinland-saga-entry-24",
        "contains",
        "Supporting entry under Vinland Saga.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
