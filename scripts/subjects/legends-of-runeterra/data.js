/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "legends-of-runeterra",
        "name": "Legends of Runeterra",
        "type": "topic",
        "short_description": "League regions on cards, landmark mechanics, and Riot’s fairer-economy digital CCG.",
        "description": "League regions on cards, landmark mechanics, and Riot’s fairer-economy digital CCG. This Ton-o-Lore subject maps people, places, events, and ideas tied to Legends of Runeterra so readers can follow long-tail connections across card games."
    },
    {
        "slug": "legends-of-runeterra-figures",
        "name": "Legends of Runeterra figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Legends of Runeterra.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-world",
        "name": "Legends of Runeterra world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Legends of Runeterra.",
        "description": "Geography, institutions, and periodization that give Legends of Runeterra its encyclopedia shape."
    },
    {
        "slug": "legends-of-runeterra-places",
        "name": "Legends of Runeterra places",
        "type": "place",
        "short_description": "Locations and geographies that frame Legends of Runeterra.",
        "description": "Places, regions, and built sites that give Legends of Runeterra its map — where events and figures concentrate."
    },
    {
        "slug": "legends-of-runeterra-events",
        "name": "Legends of Runeterra events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Legends of Runeterra.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Legends of Runeterra timeline."
    },
    {
        "slug": "legends-of-runeterra-objects",
        "name": "Legends of Runeterra objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Legends of Runeterra.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-factions",
        "name": "Legends of Runeterra factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Legends of Runeterra.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-concepts",
        "name": "Legends of Runeterra concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Legends of Runeterra.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Legends of Runeterra readable as a lore graph."
    },
    {
        "slug": "legends-of-runeterra-eras",
        "name": "Legends of Runeterra eras",
        "type": "event",
        "short_description": "Periodization for Legends of Runeterra.",
        "description": "Named eras and phases that help readers track how Legends of Runeterra changes across time."
    },
    {
        "slug": "legends-of-runeterra-works",
        "name": "Legends of Runeterra works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Legends of Runeterra.",
        "description": "Primary works and adaptations through which most audiences encounter Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-symbols",
        "name": "Legends of Runeterra symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Legends of Runeterra.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-controversies",
        "name": "Legends of Runeterra controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Legends of Runeterra.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Legends of Runeterra argumentative."
    },
    {
        "slug": "legends-of-runeterra-sources",
        "name": "Legends of Runeterra sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Legends of Runeterra.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-geography",
        "name": "Legends of Runeterra geography",
        "type": "place",
        "short_description": "Broader geographic framing for Legends of Runeterra.",
        "description": "Regions, routes, and spatial systems that situate Legends of Runeterra beyond single named places."
    },
    {
        "slug": "legends-of-runeterra-legacy",
        "name": "Legends of Runeterra legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Legends of Runeterra.",
        "description": "How Legends of Runeterra continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "legends-of-runeterra-practices",
        "name": "Legends of Runeterra practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Legends of Runeterra.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Legends of Runeterra."
    },
    {
        "slug": "legends-of-runeterra-entry-1",
        "name": "Legends of Runeterra entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-2",
        "name": "Legends of Runeterra entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-3",
        "name": "Legends of Runeterra entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-4",
        "name": "Legends of Runeterra entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-5",
        "name": "Legends of Runeterra entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-6",
        "name": "Legends of Runeterra entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-7",
        "name": "Legends of Runeterra entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-8",
        "name": "Legends of Runeterra entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-9",
        "name": "Legends of Runeterra entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-10",
        "name": "Legends of Runeterra entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-11",
        "name": "Legends of Runeterra entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-12",
        "name": "Legends of Runeterra entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-13",
        "name": "Legends of Runeterra entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-14",
        "name": "Legends of Runeterra entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-15",
        "name": "Legends of Runeterra entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-16",
        "name": "Legends of Runeterra entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-17",
        "name": "Legends of Runeterra entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-18",
        "name": "Legends of Runeterra entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-19",
        "name": "Legends of Runeterra entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-20",
        "name": "Legends of Runeterra entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-21",
        "name": "Legends of Runeterra entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-22",
        "name": "Legends of Runeterra entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-23",
        "name": "Legends of Runeterra entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legends-of-runeterra-entry-24",
        "name": "Legends of Runeterra entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legends of Runeterra.",
        "description": "A supporting encyclopedia entry in the Legends of Runeterra subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "legends-of-runeterra",
        "legends-of-runeterra-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-places",
        "contains",
        "Legends of Runeterra places is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-events",
        "contains",
        "Legends of Runeterra events is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-objects",
        "contains",
        "Legends of Runeterra objects & artifacts is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-factions",
        "contains",
        "Legends of Runeterra factions & groups is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-concepts",
        "contains",
        "Legends of Runeterra concepts is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-eras",
        "contains",
        "Legends of Runeterra eras is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-works",
        "contains",
        "Legends of Runeterra works & media is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-symbols",
        "contains",
        "Legends of Runeterra symbols is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-controversies",
        "contains",
        "Legends of Runeterra controversies is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-sources",
        "contains",
        "Legends of Runeterra sources is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-geography",
        "contains",
        "Legends of Runeterra geography is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-legacy",
        "contains",
        "Legends of Runeterra legacy is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-practices",
        "contains",
        "Legends of Runeterra practices is a primary trailhead under Legends of Runeterra.",
        0.88,
        0.82
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-1",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-2",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-3",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-4",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-5",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-6",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-7",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-8",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-9",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-10",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-11",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-12",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-13",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-14",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-15",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-16",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-17",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-18",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-19",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-20",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-21",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-22",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-23",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ],
    [
        "legends-of-runeterra",
        "legends-of-runeterra-entry-24",
        "contains",
        "Supporting entry under Legends of Runeterra.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
