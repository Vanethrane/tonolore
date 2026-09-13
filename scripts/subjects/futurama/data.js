/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "futurama",
        "name": "Futurama",
        "type": "topic",
        "short_description": "Planet Express crew, sci-fi gags, and Groening’s future that keeps getting revived.",
        "description": "Planet Express crew, sci-fi gags, and Groening’s future that keeps getting revived. This Ton-o-Lore subject maps people, places, events, and ideas tied to Futurama so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "futurama-figures",
        "name": "Futurama figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Futurama.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Futurama."
    },
    {
        "slug": "futurama-world",
        "name": "Futurama world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Futurama.",
        "description": "Geography, institutions, and periodization that give Futurama its encyclopedia shape."
    },
    {
        "slug": "futurama-places",
        "name": "Futurama places",
        "type": "place",
        "short_description": "Locations and geographies that frame Futurama.",
        "description": "Places, regions, and built sites that give Futurama its map — where events and figures concentrate."
    },
    {
        "slug": "futurama-events",
        "name": "Futurama events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Futurama.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Futurama timeline."
    },
    {
        "slug": "futurama-objects",
        "name": "Futurama objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Futurama.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Futurama."
    },
    {
        "slug": "futurama-factions",
        "name": "Futurama factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Futurama.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Futurama."
    },
    {
        "slug": "futurama-concepts",
        "name": "Futurama concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Futurama.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Futurama readable as a lore graph."
    },
    {
        "slug": "futurama-eras",
        "name": "Futurama eras",
        "type": "event",
        "short_description": "Periodization for Futurama.",
        "description": "Named eras and phases that help readers track how Futurama changes across time."
    },
    {
        "slug": "futurama-works",
        "name": "Futurama works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Futurama.",
        "description": "Primary works and adaptations through which most audiences encounter Futurama."
    },
    {
        "slug": "futurama-symbols",
        "name": "Futurama symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Futurama.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Futurama."
    },
    {
        "slug": "futurama-controversies",
        "name": "Futurama controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Futurama.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Futurama argumentative."
    },
    {
        "slug": "futurama-sources",
        "name": "Futurama sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Futurama.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Futurama."
    },
    {
        "slug": "futurama-geography",
        "name": "Futurama geography",
        "type": "place",
        "short_description": "Broader geographic framing for Futurama.",
        "description": "Regions, routes, and spatial systems that situate Futurama beyond single named places."
    },
    {
        "slug": "futurama-legacy",
        "name": "Futurama legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Futurama.",
        "description": "How Futurama continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "futurama-practices",
        "name": "Futurama practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Futurama.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Futurama."
    },
    {
        "slug": "futurama-entry-1",
        "name": "Futurama entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-2",
        "name": "Futurama entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-3",
        "name": "Futurama entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-4",
        "name": "Futurama entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-5",
        "name": "Futurama entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-6",
        "name": "Futurama entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-7",
        "name": "Futurama entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-8",
        "name": "Futurama entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-9",
        "name": "Futurama entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-10",
        "name": "Futurama entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-11",
        "name": "Futurama entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-12",
        "name": "Futurama entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-13",
        "name": "Futurama entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-14",
        "name": "Futurama entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-15",
        "name": "Futurama entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-16",
        "name": "Futurama entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-17",
        "name": "Futurama entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-18",
        "name": "Futurama entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-19",
        "name": "Futurama entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-20",
        "name": "Futurama entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-21",
        "name": "Futurama entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-22",
        "name": "Futurama entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-23",
        "name": "Futurama entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "futurama-entry-24",
        "name": "Futurama entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Futurama.",
        "description": "A supporting encyclopedia entry in the Futurama subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "futurama",
        "futurama-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "futurama",
        "futurama-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "futurama",
        "futurama-places",
        "contains",
        "Futurama places is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-events",
        "contains",
        "Futurama events is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-objects",
        "contains",
        "Futurama objects & artifacts is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-factions",
        "contains",
        "Futurama factions & groups is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-concepts",
        "contains",
        "Futurama concepts is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-eras",
        "contains",
        "Futurama eras is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-works",
        "contains",
        "Futurama works & media is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-symbols",
        "contains",
        "Futurama symbols is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-controversies",
        "contains",
        "Futurama controversies is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-sources",
        "contains",
        "Futurama sources is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-geography",
        "contains",
        "Futurama geography is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-legacy",
        "contains",
        "Futurama legacy is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-practices",
        "contains",
        "Futurama practices is a primary trailhead under Futurama.",
        0.88,
        0.82
    ],
    [
        "futurama",
        "futurama-entry-1",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-2",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-3",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-4",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-5",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-6",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-7",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-8",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-9",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-10",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-11",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-12",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-13",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-14",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-15",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-16",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-17",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-18",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-19",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-20",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-21",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-22",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-23",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ],
    [
        "futurama",
        "futurama-entry-24",
        "contains",
        "Supporting entry under Futurama.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
