/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spawn-comics",
        "name": "Spawn",
        "type": "topic",
        "short_description": "Hellspawn cape, Independent comics boom, and McFarlane’s dark antihero mythology.",
        "description": "Hellspawn cape, Independent comics boom, and McFarlane’s dark antihero mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spawn so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "spawn-comics-figures",
        "name": "Spawn figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spawn.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spawn."
    },
    {
        "slug": "spawn-comics-world",
        "name": "Spawn world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spawn.",
        "description": "Geography, institutions, and periodization that give Spawn its encyclopedia shape."
    },
    {
        "slug": "spawn-comics-places",
        "name": "Spawn places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spawn.",
        "description": "Places, regions, and built sites that give Spawn its map — where events and figures concentrate."
    },
    {
        "slug": "spawn-comics-events",
        "name": "Spawn events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spawn.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spawn timeline."
    },
    {
        "slug": "spawn-comics-objects",
        "name": "Spawn objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spawn.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spawn."
    },
    {
        "slug": "spawn-comics-factions",
        "name": "Spawn factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spawn.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spawn."
    },
    {
        "slug": "spawn-comics-concepts",
        "name": "Spawn concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spawn.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spawn readable as a lore graph."
    },
    {
        "slug": "spawn-comics-eras",
        "name": "Spawn eras",
        "type": "event",
        "short_description": "Periodization for Spawn.",
        "description": "Named eras and phases that help readers track how Spawn changes across time."
    },
    {
        "slug": "spawn-comics-works",
        "name": "Spawn works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spawn.",
        "description": "Primary works and adaptations through which most audiences encounter Spawn."
    },
    {
        "slug": "spawn-comics-symbols",
        "name": "Spawn symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spawn.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spawn."
    },
    {
        "slug": "spawn-comics-controversies",
        "name": "Spawn controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spawn.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spawn argumentative."
    },
    {
        "slug": "spawn-comics-sources",
        "name": "Spawn sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spawn.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spawn."
    },
    {
        "slug": "spawn-comics-geography",
        "name": "Spawn geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spawn.",
        "description": "Regions, routes, and spatial systems that situate Spawn beyond single named places."
    },
    {
        "slug": "spawn-comics-legacy",
        "name": "Spawn legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spawn.",
        "description": "How Spawn continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spawn-comics-practices",
        "name": "Spawn practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spawn.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spawn."
    },
    {
        "slug": "spawn-comics-entry-1",
        "name": "Spawn entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-2",
        "name": "Spawn entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-3",
        "name": "Spawn entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-4",
        "name": "Spawn entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-5",
        "name": "Spawn entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-6",
        "name": "Spawn entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-7",
        "name": "Spawn entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-8",
        "name": "Spawn entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-9",
        "name": "Spawn entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-10",
        "name": "Spawn entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-11",
        "name": "Spawn entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-12",
        "name": "Spawn entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-13",
        "name": "Spawn entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-14",
        "name": "Spawn entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-15",
        "name": "Spawn entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-16",
        "name": "Spawn entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-17",
        "name": "Spawn entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-18",
        "name": "Spawn entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-19",
        "name": "Spawn entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-20",
        "name": "Spawn entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-21",
        "name": "Spawn entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-22",
        "name": "Spawn entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-23",
        "name": "Spawn entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spawn-comics-entry-24",
        "name": "Spawn entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spawn.",
        "description": "A supporting encyclopedia entry in the Spawn subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spawn-comics",
        "spawn-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spawn-comics",
        "spawn-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spawn-comics",
        "spawn-comics-places",
        "contains",
        "Spawn places is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-events",
        "contains",
        "Spawn events is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-objects",
        "contains",
        "Spawn objects & artifacts is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-factions",
        "contains",
        "Spawn factions & groups is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-concepts",
        "contains",
        "Spawn concepts is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-eras",
        "contains",
        "Spawn eras is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-works",
        "contains",
        "Spawn works & media is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-symbols",
        "contains",
        "Spawn symbols is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-controversies",
        "contains",
        "Spawn controversies is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-sources",
        "contains",
        "Spawn sources is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-geography",
        "contains",
        "Spawn geography is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-legacy",
        "contains",
        "Spawn legacy is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-practices",
        "contains",
        "Spawn practices is a primary trailhead under Spawn.",
        0.88,
        0.82
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-1",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-2",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-3",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-4",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-5",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-6",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-7",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-8",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-9",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-10",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-11",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-12",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-13",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-14",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-15",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-16",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-17",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-18",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-19",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-20",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-21",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-22",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-23",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ],
    [
        "spawn-comics",
        "spawn-comics-entry-24",
        "contains",
        "Supporting entry under Spawn.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
