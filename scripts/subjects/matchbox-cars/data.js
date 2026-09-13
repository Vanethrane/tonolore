/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "matchbox-cars",
        "name": "Matchbox",
        "type": "topic",
        "short_description": "Die-cast miniatures, series numbering, and the rival brand history beside Hot Wheels.",
        "description": "Die-cast miniatures, series numbering, and the rival brand history beside Hot Wheels. This Ton-o-Lore subject maps people, places, events, and ideas tied to Matchbox so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "matchbox-cars-figures",
        "name": "Matchbox figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Matchbox.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Matchbox."
    },
    {
        "slug": "matchbox-cars-world",
        "name": "Matchbox world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Matchbox.",
        "description": "Geography, institutions, and periodization that give Matchbox its encyclopedia shape."
    },
    {
        "slug": "matchbox-cars-places",
        "name": "Matchbox places",
        "type": "place",
        "short_description": "Locations and geographies that frame Matchbox.",
        "description": "Places, regions, and built sites that give Matchbox its map — where events and figures concentrate."
    },
    {
        "slug": "matchbox-cars-events",
        "name": "Matchbox events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Matchbox.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Matchbox timeline."
    },
    {
        "slug": "matchbox-cars-objects",
        "name": "Matchbox objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Matchbox.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Matchbox."
    },
    {
        "slug": "matchbox-cars-factions",
        "name": "Matchbox factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Matchbox.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Matchbox."
    },
    {
        "slug": "matchbox-cars-concepts",
        "name": "Matchbox concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Matchbox.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Matchbox readable as a lore graph."
    },
    {
        "slug": "matchbox-cars-eras",
        "name": "Matchbox eras",
        "type": "event",
        "short_description": "Periodization for Matchbox.",
        "description": "Named eras and phases that help readers track how Matchbox changes across time."
    },
    {
        "slug": "matchbox-cars-works",
        "name": "Matchbox works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Matchbox.",
        "description": "Primary works and adaptations through which most audiences encounter Matchbox."
    },
    {
        "slug": "matchbox-cars-symbols",
        "name": "Matchbox symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Matchbox.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Matchbox."
    },
    {
        "slug": "matchbox-cars-controversies",
        "name": "Matchbox controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Matchbox.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Matchbox argumentative."
    },
    {
        "slug": "matchbox-cars-sources",
        "name": "Matchbox sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Matchbox.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Matchbox."
    },
    {
        "slug": "matchbox-cars-geography",
        "name": "Matchbox geography",
        "type": "place",
        "short_description": "Broader geographic framing for Matchbox.",
        "description": "Regions, routes, and spatial systems that situate Matchbox beyond single named places."
    },
    {
        "slug": "matchbox-cars-legacy",
        "name": "Matchbox legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Matchbox.",
        "description": "How Matchbox continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "matchbox-cars-practices",
        "name": "Matchbox practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Matchbox.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Matchbox."
    },
    {
        "slug": "matchbox-cars-entry-1",
        "name": "Matchbox entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-2",
        "name": "Matchbox entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-3",
        "name": "Matchbox entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-4",
        "name": "Matchbox entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-5",
        "name": "Matchbox entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-6",
        "name": "Matchbox entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-7",
        "name": "Matchbox entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-8",
        "name": "Matchbox entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-9",
        "name": "Matchbox entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-10",
        "name": "Matchbox entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-11",
        "name": "Matchbox entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-12",
        "name": "Matchbox entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-13",
        "name": "Matchbox entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-14",
        "name": "Matchbox entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-15",
        "name": "Matchbox entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-16",
        "name": "Matchbox entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-17",
        "name": "Matchbox entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-18",
        "name": "Matchbox entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-19",
        "name": "Matchbox entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-20",
        "name": "Matchbox entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-21",
        "name": "Matchbox entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-22",
        "name": "Matchbox entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-23",
        "name": "Matchbox entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matchbox-cars-entry-24",
        "name": "Matchbox entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Matchbox.",
        "description": "A supporting encyclopedia entry in the Matchbox subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "matchbox-cars",
        "matchbox-cars-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "matchbox-cars",
        "matchbox-cars-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "matchbox-cars",
        "matchbox-cars-places",
        "contains",
        "Matchbox places is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-events",
        "contains",
        "Matchbox events is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-objects",
        "contains",
        "Matchbox objects & artifacts is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-factions",
        "contains",
        "Matchbox factions & groups is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-concepts",
        "contains",
        "Matchbox concepts is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-eras",
        "contains",
        "Matchbox eras is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-works",
        "contains",
        "Matchbox works & media is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-symbols",
        "contains",
        "Matchbox symbols is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-controversies",
        "contains",
        "Matchbox controversies is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-sources",
        "contains",
        "Matchbox sources is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-geography",
        "contains",
        "Matchbox geography is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-legacy",
        "contains",
        "Matchbox legacy is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-practices",
        "contains",
        "Matchbox practices is a primary trailhead under Matchbox.",
        0.88,
        0.82
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-1",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-2",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-3",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-4",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-5",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-6",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-7",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-8",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-9",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-10",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-11",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-12",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-13",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-14",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-15",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-16",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-17",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-18",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-19",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-20",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-21",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-22",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-23",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ],
    [
        "matchbox-cars",
        "matchbox-cars-entry-24",
        "contains",
        "Supporting entry under Matchbox.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
