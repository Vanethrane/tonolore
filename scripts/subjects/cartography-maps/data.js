/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cartography-maps",
        "name": "Cartography & maps",
        "type": "topic",
        "short_description": "Projections, surveys, and the evolving craft of representing Earth on a page.",
        "description": "Projections, surveys, and the evolving craft of representing Earth on a page. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cartography & maps so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "cartography-maps-figures",
        "name": "Cartography & maps figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cartography & maps.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cartography & maps."
    },
    {
        "slug": "cartography-maps-world",
        "name": "Cartography & maps world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cartography & maps.",
        "description": "Geography, institutions, and periodization that give Cartography & maps its encyclopedia shape."
    },
    {
        "slug": "cartography-maps-places",
        "name": "Cartography & maps places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cartography & maps.",
        "description": "Places, regions, and built sites that give Cartography & maps its map — where events and figures concentrate."
    },
    {
        "slug": "cartography-maps-events",
        "name": "Cartography & maps events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cartography & maps.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cartography & maps timeline."
    },
    {
        "slug": "cartography-maps-objects",
        "name": "Cartography & maps objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cartography & maps.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cartography & maps."
    },
    {
        "slug": "cartography-maps-factions",
        "name": "Cartography & maps factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cartography & maps.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cartography & maps."
    },
    {
        "slug": "cartography-maps-concepts",
        "name": "Cartography & maps concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cartography & maps.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cartography & maps readable as a lore graph."
    },
    {
        "slug": "cartography-maps-eras",
        "name": "Cartography & maps eras",
        "type": "event",
        "short_description": "Periodization for Cartography & maps.",
        "description": "Named eras and phases that help readers track how Cartography & maps changes across time."
    },
    {
        "slug": "cartography-maps-works",
        "name": "Cartography & maps works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cartography & maps.",
        "description": "Primary works and adaptations through which most audiences encounter Cartography & maps."
    },
    {
        "slug": "cartography-maps-symbols",
        "name": "Cartography & maps symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cartography & maps.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cartography & maps."
    },
    {
        "slug": "cartography-maps-controversies",
        "name": "Cartography & maps controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cartography & maps.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cartography & maps argumentative."
    },
    {
        "slug": "cartography-maps-sources",
        "name": "Cartography & maps sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cartography & maps.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cartography & maps."
    },
    {
        "slug": "cartography-maps-geography",
        "name": "Cartography & maps geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cartography & maps.",
        "description": "Regions, routes, and spatial systems that situate Cartography & maps beyond single named places."
    },
    {
        "slug": "cartography-maps-legacy",
        "name": "Cartography & maps legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cartography & maps.",
        "description": "How Cartography & maps continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cartography-maps-practices",
        "name": "Cartography & maps practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cartography & maps.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cartography & maps."
    },
    {
        "slug": "cartography-maps-entry-1",
        "name": "Cartography & maps entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-2",
        "name": "Cartography & maps entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-3",
        "name": "Cartography & maps entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-4",
        "name": "Cartography & maps entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-5",
        "name": "Cartography & maps entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-6",
        "name": "Cartography & maps entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-7",
        "name": "Cartography & maps entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-8",
        "name": "Cartography & maps entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-9",
        "name": "Cartography & maps entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-10",
        "name": "Cartography & maps entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-11",
        "name": "Cartography & maps entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-12",
        "name": "Cartography & maps entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-13",
        "name": "Cartography & maps entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-14",
        "name": "Cartography & maps entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-15",
        "name": "Cartography & maps entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-16",
        "name": "Cartography & maps entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-17",
        "name": "Cartography & maps entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-18",
        "name": "Cartography & maps entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-19",
        "name": "Cartography & maps entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-20",
        "name": "Cartography & maps entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-21",
        "name": "Cartography & maps entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-22",
        "name": "Cartography & maps entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-23",
        "name": "Cartography & maps entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartography-maps-entry-24",
        "name": "Cartography & maps entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cartography & maps.",
        "description": "A supporting encyclopedia entry in the Cartography & maps subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cartography-maps",
        "cartography-maps-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cartography-maps",
        "cartography-maps-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cartography-maps",
        "cartography-maps-places",
        "contains",
        "Cartography & maps places is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-events",
        "contains",
        "Cartography & maps events is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-objects",
        "contains",
        "Cartography & maps objects & artifacts is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-factions",
        "contains",
        "Cartography & maps factions & groups is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-concepts",
        "contains",
        "Cartography & maps concepts is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-eras",
        "contains",
        "Cartography & maps eras is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-works",
        "contains",
        "Cartography & maps works & media is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-symbols",
        "contains",
        "Cartography & maps symbols is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-controversies",
        "contains",
        "Cartography & maps controversies is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-sources",
        "contains",
        "Cartography & maps sources is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-geography",
        "contains",
        "Cartography & maps geography is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-legacy",
        "contains",
        "Cartography & maps legacy is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-practices",
        "contains",
        "Cartography & maps practices is a primary trailhead under Cartography & maps.",
        0.88,
        0.82
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-1",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-2",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-3",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-4",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-5",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-6",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-7",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-8",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-9",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-10",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-11",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-12",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-13",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-14",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-15",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-16",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-17",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-18",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-19",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-20",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-21",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-22",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-23",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ],
    [
        "cartography-maps",
        "cartography-maps-entry-24",
        "contains",
        "Supporting entry under Cartography & maps.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
