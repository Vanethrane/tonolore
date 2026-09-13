/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stranger-things-horror",
        "name": "Stranger Things",
        "type": "topic",
        "short_description": "Upside Down, Hawkins labs, and the 1980s kids-vs-monsters continuum of streaming horror.",
        "description": "Upside Down, Hawkins labs, and the 1980s kids-vs-monsters continuum of streaming horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stranger Things so readers can follow long-tail connections across horror."
    },
    {
        "slug": "stranger-things-horror-figures",
        "name": "Stranger Things figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stranger Things.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stranger Things."
    },
    {
        "slug": "stranger-things-horror-world",
        "name": "Stranger Things world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stranger Things.",
        "description": "Geography, institutions, and periodization that give Stranger Things its encyclopedia shape."
    },
    {
        "slug": "stranger-things-horror-places",
        "name": "Stranger Things places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stranger Things.",
        "description": "Places, regions, and built sites that give Stranger Things its map — where events and figures concentrate."
    },
    {
        "slug": "stranger-things-horror-events",
        "name": "Stranger Things events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stranger Things.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stranger Things timeline."
    },
    {
        "slug": "stranger-things-horror-objects",
        "name": "Stranger Things objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stranger Things.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stranger Things."
    },
    {
        "slug": "stranger-things-horror-factions",
        "name": "Stranger Things factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stranger Things.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stranger Things."
    },
    {
        "slug": "stranger-things-horror-concepts",
        "name": "Stranger Things concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stranger Things.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stranger Things readable as a lore graph."
    },
    {
        "slug": "stranger-things-horror-eras",
        "name": "Stranger Things eras",
        "type": "event",
        "short_description": "Periodization for Stranger Things.",
        "description": "Named eras and phases that help readers track how Stranger Things changes across time."
    },
    {
        "slug": "stranger-things-horror-works",
        "name": "Stranger Things works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stranger Things.",
        "description": "Primary works and adaptations through which most audiences encounter Stranger Things."
    },
    {
        "slug": "stranger-things-horror-symbols",
        "name": "Stranger Things symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stranger Things.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stranger Things."
    },
    {
        "slug": "stranger-things-horror-controversies",
        "name": "Stranger Things controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stranger Things.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stranger Things argumentative."
    },
    {
        "slug": "stranger-things-horror-sources",
        "name": "Stranger Things sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stranger Things.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stranger Things."
    },
    {
        "slug": "stranger-things-horror-geography",
        "name": "Stranger Things geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stranger Things.",
        "description": "Regions, routes, and spatial systems that situate Stranger Things beyond single named places."
    },
    {
        "slug": "stranger-things-horror-legacy",
        "name": "Stranger Things legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stranger Things.",
        "description": "How Stranger Things continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stranger-things-horror-practices",
        "name": "Stranger Things practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stranger Things.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stranger Things."
    },
    {
        "slug": "stranger-things-horror-entry-1",
        "name": "Stranger Things entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-2",
        "name": "Stranger Things entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-3",
        "name": "Stranger Things entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-4",
        "name": "Stranger Things entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-5",
        "name": "Stranger Things entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-6",
        "name": "Stranger Things entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-7",
        "name": "Stranger Things entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-8",
        "name": "Stranger Things entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-9",
        "name": "Stranger Things entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-10",
        "name": "Stranger Things entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-11",
        "name": "Stranger Things entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-12",
        "name": "Stranger Things entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-13",
        "name": "Stranger Things entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-14",
        "name": "Stranger Things entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-15",
        "name": "Stranger Things entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-16",
        "name": "Stranger Things entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-17",
        "name": "Stranger Things entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-18",
        "name": "Stranger Things entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-19",
        "name": "Stranger Things entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-20",
        "name": "Stranger Things entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-21",
        "name": "Stranger Things entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-22",
        "name": "Stranger Things entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-23",
        "name": "Stranger Things entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stranger-things-horror-entry-24",
        "name": "Stranger Things entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stranger Things.",
        "description": "A supporting encyclopedia entry in the Stranger Things subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stranger-things-horror",
        "stranger-things-horror-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-places",
        "contains",
        "Stranger Things places is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-events",
        "contains",
        "Stranger Things events is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-objects",
        "contains",
        "Stranger Things objects & artifacts is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-factions",
        "contains",
        "Stranger Things factions & groups is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-concepts",
        "contains",
        "Stranger Things concepts is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-eras",
        "contains",
        "Stranger Things eras is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-works",
        "contains",
        "Stranger Things works & media is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-symbols",
        "contains",
        "Stranger Things symbols is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-controversies",
        "contains",
        "Stranger Things controversies is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-sources",
        "contains",
        "Stranger Things sources is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-geography",
        "contains",
        "Stranger Things geography is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-legacy",
        "contains",
        "Stranger Things legacy is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-practices",
        "contains",
        "Stranger Things practices is a primary trailhead under Stranger Things.",
        0.88,
        0.82
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-1",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-2",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-3",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-4",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-5",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-6",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-7",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-8",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-9",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-10",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-11",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-12",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-13",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-14",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-15",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-16",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-17",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-18",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-19",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-20",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-21",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-22",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-23",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ],
    [
        "stranger-things-horror",
        "stranger-things-horror-entry-24",
        "contains",
        "Supporting entry under Stranger Things.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
