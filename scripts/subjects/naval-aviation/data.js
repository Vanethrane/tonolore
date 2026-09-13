/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "naval-aviation",
        "name": "Naval aviation",
        "type": "topic",
        "short_description": "Carriers, flight decks, and the air power that remade twentieth-century sea control.",
        "description": "Carriers, flight decks, and the air power that remade twentieth-century sea control. This Ton-o-Lore subject maps people, places, events, and ideas tied to Naval aviation so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "naval-aviation-figures",
        "name": "Naval aviation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Naval aviation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Naval aviation."
    },
    {
        "slug": "naval-aviation-world",
        "name": "Naval aviation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Naval aviation.",
        "description": "Geography, institutions, and periodization that give Naval aviation its encyclopedia shape."
    },
    {
        "slug": "naval-aviation-places",
        "name": "Naval aviation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Naval aviation.",
        "description": "Places, regions, and built sites that give Naval aviation its map — where events and figures concentrate."
    },
    {
        "slug": "naval-aviation-events",
        "name": "Naval aviation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Naval aviation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Naval aviation timeline."
    },
    {
        "slug": "naval-aviation-objects",
        "name": "Naval aviation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Naval aviation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Naval aviation."
    },
    {
        "slug": "naval-aviation-factions",
        "name": "Naval aviation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Naval aviation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Naval aviation."
    },
    {
        "slug": "naval-aviation-concepts",
        "name": "Naval aviation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Naval aviation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Naval aviation readable as a lore graph."
    },
    {
        "slug": "naval-aviation-eras",
        "name": "Naval aviation eras",
        "type": "event",
        "short_description": "Periodization for Naval aviation.",
        "description": "Named eras and phases that help readers track how Naval aviation changes across time."
    },
    {
        "slug": "naval-aviation-works",
        "name": "Naval aviation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Naval aviation.",
        "description": "Primary works and adaptations through which most audiences encounter Naval aviation."
    },
    {
        "slug": "naval-aviation-symbols",
        "name": "Naval aviation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Naval aviation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Naval aviation."
    },
    {
        "slug": "naval-aviation-controversies",
        "name": "Naval aviation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Naval aviation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Naval aviation argumentative."
    },
    {
        "slug": "naval-aviation-sources",
        "name": "Naval aviation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Naval aviation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Naval aviation."
    },
    {
        "slug": "naval-aviation-geography",
        "name": "Naval aviation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Naval aviation.",
        "description": "Regions, routes, and spatial systems that situate Naval aviation beyond single named places."
    },
    {
        "slug": "naval-aviation-legacy",
        "name": "Naval aviation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Naval aviation.",
        "description": "How Naval aviation continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "naval-aviation-practices",
        "name": "Naval aviation practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Naval aviation.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Naval aviation."
    },
    {
        "slug": "naval-aviation-entry-1",
        "name": "Naval aviation entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-2",
        "name": "Naval aviation entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-3",
        "name": "Naval aviation entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-4",
        "name": "Naval aviation entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-5",
        "name": "Naval aviation entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-6",
        "name": "Naval aviation entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-7",
        "name": "Naval aviation entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-8",
        "name": "Naval aviation entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-9",
        "name": "Naval aviation entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-10",
        "name": "Naval aviation entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-11",
        "name": "Naval aviation entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-12",
        "name": "Naval aviation entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-13",
        "name": "Naval aviation entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-14",
        "name": "Naval aviation entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-15",
        "name": "Naval aviation entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-16",
        "name": "Naval aviation entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-17",
        "name": "Naval aviation entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-18",
        "name": "Naval aviation entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-19",
        "name": "Naval aviation entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-20",
        "name": "Naval aviation entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-21",
        "name": "Naval aviation entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-22",
        "name": "Naval aviation entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-23",
        "name": "Naval aviation entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-aviation-entry-24",
        "name": "Naval aviation entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Naval aviation.",
        "description": "A supporting encyclopedia entry in the Naval aviation subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "naval-aviation",
        "naval-aviation-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "naval-aviation",
        "naval-aviation-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "naval-aviation",
        "naval-aviation-places",
        "contains",
        "Naval aviation places is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-events",
        "contains",
        "Naval aviation events is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-objects",
        "contains",
        "Naval aviation objects & artifacts is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-factions",
        "contains",
        "Naval aviation factions & groups is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-concepts",
        "contains",
        "Naval aviation concepts is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-eras",
        "contains",
        "Naval aviation eras is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-works",
        "contains",
        "Naval aviation works & media is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-symbols",
        "contains",
        "Naval aviation symbols is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-controversies",
        "contains",
        "Naval aviation controversies is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-sources",
        "contains",
        "Naval aviation sources is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-geography",
        "contains",
        "Naval aviation geography is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-legacy",
        "contains",
        "Naval aviation legacy is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-practices",
        "contains",
        "Naval aviation practices is a primary trailhead under Naval aviation.",
        0.88,
        0.82
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-1",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-2",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-3",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-4",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-5",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-6",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-7",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-8",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-9",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-10",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-11",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-12",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-13",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-14",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-15",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-16",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-17",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-18",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-19",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-20",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-21",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-22",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-23",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ],
    [
        "naval-aviation",
        "naval-aviation-entry-24",
        "contains",
        "Supporting entry under Naval aviation.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
