/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "geology-minerals",
        "name": "Geology & minerals",
        "type": "topic",
        "short_description": "Rocks, crystals, deep Earth processes, and the material history underfoot.",
        "description": "Rocks, crystals, deep Earth processes, and the material history underfoot. This Ton-o-Lore subject maps people, places, events, and ideas tied to Geology & minerals so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "geology-minerals-figures",
        "name": "Geology & minerals figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Geology & minerals.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Geology & minerals."
    },
    {
        "slug": "geology-minerals-world",
        "name": "Geology & minerals world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Geology & minerals.",
        "description": "Geography, institutions, and periodization that give Geology & minerals its encyclopedia shape."
    },
    {
        "slug": "geology-minerals-places",
        "name": "Geology & minerals places",
        "type": "place",
        "short_description": "Locations and geographies that frame Geology & minerals.",
        "description": "Places, regions, and built sites that give Geology & minerals its map — where events and figures concentrate."
    },
    {
        "slug": "geology-minerals-events",
        "name": "Geology & minerals events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Geology & minerals.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Geology & minerals timeline."
    },
    {
        "slug": "geology-minerals-objects",
        "name": "Geology & minerals objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Geology & minerals.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Geology & minerals."
    },
    {
        "slug": "geology-minerals-factions",
        "name": "Geology & minerals factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Geology & minerals.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Geology & minerals."
    },
    {
        "slug": "geology-minerals-concepts",
        "name": "Geology & minerals concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Geology & minerals.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Geology & minerals readable as a lore graph."
    },
    {
        "slug": "geology-minerals-eras",
        "name": "Geology & minerals eras",
        "type": "event",
        "short_description": "Periodization for Geology & minerals.",
        "description": "Named eras and phases that help readers track how Geology & minerals changes across time."
    },
    {
        "slug": "geology-minerals-works",
        "name": "Geology & minerals works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Geology & minerals.",
        "description": "Primary works and adaptations through which most audiences encounter Geology & minerals."
    },
    {
        "slug": "geology-minerals-symbols",
        "name": "Geology & minerals symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Geology & minerals.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Geology & minerals."
    },
    {
        "slug": "geology-minerals-controversies",
        "name": "Geology & minerals controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Geology & minerals.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Geology & minerals argumentative."
    },
    {
        "slug": "geology-minerals-sources",
        "name": "Geology & minerals sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Geology & minerals.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Geology & minerals."
    },
    {
        "slug": "geology-minerals-geography",
        "name": "Geology & minerals geography",
        "type": "place",
        "short_description": "Broader geographic framing for Geology & minerals.",
        "description": "Regions, routes, and spatial systems that situate Geology & minerals beyond single named places."
    },
    {
        "slug": "geology-minerals-legacy",
        "name": "Geology & minerals legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Geology & minerals.",
        "description": "How Geology & minerals continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "geology-minerals-practices",
        "name": "Geology & minerals practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Geology & minerals.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Geology & minerals."
    },
    {
        "slug": "geology-minerals-entry-1",
        "name": "Geology & minerals entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-2",
        "name": "Geology & minerals entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-3",
        "name": "Geology & minerals entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-4",
        "name": "Geology & minerals entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-5",
        "name": "Geology & minerals entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-6",
        "name": "Geology & minerals entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-7",
        "name": "Geology & minerals entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-8",
        "name": "Geology & minerals entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-9",
        "name": "Geology & minerals entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-10",
        "name": "Geology & minerals entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-11",
        "name": "Geology & minerals entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-12",
        "name": "Geology & minerals entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-13",
        "name": "Geology & minerals entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-14",
        "name": "Geology & minerals entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-15",
        "name": "Geology & minerals entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-16",
        "name": "Geology & minerals entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-17",
        "name": "Geology & minerals entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-18",
        "name": "Geology & minerals entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-19",
        "name": "Geology & minerals entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-20",
        "name": "Geology & minerals entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-21",
        "name": "Geology & minerals entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-22",
        "name": "Geology & minerals entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-23",
        "name": "Geology & minerals entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "geology-minerals-entry-24",
        "name": "Geology & minerals entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Geology & minerals.",
        "description": "A supporting encyclopedia entry in the Geology & minerals subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "geology-minerals",
        "geology-minerals-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "geology-minerals",
        "geology-minerals-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "geology-minerals",
        "geology-minerals-places",
        "contains",
        "Geology & minerals places is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-events",
        "contains",
        "Geology & minerals events is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-objects",
        "contains",
        "Geology & minerals objects & artifacts is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-factions",
        "contains",
        "Geology & minerals factions & groups is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-concepts",
        "contains",
        "Geology & minerals concepts is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-eras",
        "contains",
        "Geology & minerals eras is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-works",
        "contains",
        "Geology & minerals works & media is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-symbols",
        "contains",
        "Geology & minerals symbols is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-controversies",
        "contains",
        "Geology & minerals controversies is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-sources",
        "contains",
        "Geology & minerals sources is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-geography",
        "contains",
        "Geology & minerals geography is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-legacy",
        "contains",
        "Geology & minerals legacy is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-practices",
        "contains",
        "Geology & minerals practices is a primary trailhead under Geology & minerals.",
        0.88,
        0.82
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-1",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-2",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-3",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-4",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-5",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-6",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-7",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-8",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-9",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-10",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-11",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-12",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-13",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-14",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-15",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-16",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-17",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-18",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-19",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-20",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-21",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-22",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-23",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ],
    [
        "geology-minerals",
        "geology-minerals-entry-24",
        "contains",
        "Supporting entry under Geology & minerals.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
