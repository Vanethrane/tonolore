/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "naval-warfare-history",
        "name": "Naval warfare history",
        "type": "topic",
        "short_description": "Fleets, blockades, and the ocean contests that made and unmade empires.",
        "description": "Fleets, blockades, and the ocean contests that made and unmade empires. This Ton-o-Lore subject maps people, places, events, and ideas tied to Naval warfare history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "naval-warfare-history-figures",
        "name": "Naval warfare history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Naval warfare history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-world",
        "name": "Naval warfare history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Naval warfare history.",
        "description": "Geography, institutions, and periodization that give Naval warfare history its encyclopedia shape."
    },
    {
        "slug": "naval-warfare-history-places",
        "name": "Naval warfare history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Naval warfare history.",
        "description": "Places, regions, and built sites that give Naval warfare history its map — where events and figures concentrate."
    },
    {
        "slug": "naval-warfare-history-events",
        "name": "Naval warfare history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Naval warfare history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Naval warfare history timeline."
    },
    {
        "slug": "naval-warfare-history-objects",
        "name": "Naval warfare history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Naval warfare history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-factions",
        "name": "Naval warfare history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Naval warfare history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-concepts",
        "name": "Naval warfare history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Naval warfare history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Naval warfare history readable as a lore graph."
    },
    {
        "slug": "naval-warfare-history-eras",
        "name": "Naval warfare history eras",
        "type": "event",
        "short_description": "Periodization for Naval warfare history.",
        "description": "Named eras and phases that help readers track how Naval warfare history changes across time."
    },
    {
        "slug": "naval-warfare-history-works",
        "name": "Naval warfare history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Naval warfare history.",
        "description": "Primary works and adaptations through which most audiences encounter Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-symbols",
        "name": "Naval warfare history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Naval warfare history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-controversies",
        "name": "Naval warfare history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Naval warfare history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Naval warfare history argumentative."
    },
    {
        "slug": "naval-warfare-history-sources",
        "name": "Naval warfare history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Naval warfare history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-geography",
        "name": "Naval warfare history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Naval warfare history.",
        "description": "Regions, routes, and spatial systems that situate Naval warfare history beyond single named places."
    },
    {
        "slug": "naval-warfare-history-legacy",
        "name": "Naval warfare history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Naval warfare history.",
        "description": "How Naval warfare history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "naval-warfare-history-practices",
        "name": "Naval warfare history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Naval warfare history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Naval warfare history."
    },
    {
        "slug": "naval-warfare-history-entry-1",
        "name": "Naval warfare history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-2",
        "name": "Naval warfare history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-3",
        "name": "Naval warfare history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-4",
        "name": "Naval warfare history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-5",
        "name": "Naval warfare history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-6",
        "name": "Naval warfare history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-7",
        "name": "Naval warfare history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-8",
        "name": "Naval warfare history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-9",
        "name": "Naval warfare history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-10",
        "name": "Naval warfare history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-11",
        "name": "Naval warfare history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-12",
        "name": "Naval warfare history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-13",
        "name": "Naval warfare history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-14",
        "name": "Naval warfare history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-15",
        "name": "Naval warfare history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-16",
        "name": "Naval warfare history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-17",
        "name": "Naval warfare history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-18",
        "name": "Naval warfare history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-19",
        "name": "Naval warfare history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-20",
        "name": "Naval warfare history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-21",
        "name": "Naval warfare history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-22",
        "name": "Naval warfare history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-23",
        "name": "Naval warfare history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-warfare-history-entry-24",
        "name": "Naval warfare history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval warfare history.",
        "description": "A supporting encyclopedia entry in the Naval warfare history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "naval-warfare-history",
        "naval-warfare-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-places",
        "contains",
        "Naval warfare history places is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-events",
        "contains",
        "Naval warfare history events is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-objects",
        "contains",
        "Naval warfare history objects & artifacts is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-factions",
        "contains",
        "Naval warfare history factions & groups is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-concepts",
        "contains",
        "Naval warfare history concepts is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-eras",
        "contains",
        "Naval warfare history eras is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-works",
        "contains",
        "Naval warfare history works & media is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-symbols",
        "contains",
        "Naval warfare history symbols is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-controversies",
        "contains",
        "Naval warfare history controversies is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-sources",
        "contains",
        "Naval warfare history sources is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-geography",
        "contains",
        "Naval warfare history geography is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-legacy",
        "contains",
        "Naval warfare history legacy is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-practices",
        "contains",
        "Naval warfare history practices is a primary trailhead under Naval warfare history.",
        0.88,
        0.82
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-1",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-2",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-3",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-4",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-5",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-6",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-7",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-8",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-9",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-10",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-11",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-12",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-13",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-14",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-15",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-16",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-17",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-18",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-19",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-20",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-21",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-22",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-23",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ],
    [
        "naval-warfare-history",
        "naval-warfare-history-entry-24",
        "contains",
        "Supporting entry under Naval warfare history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
