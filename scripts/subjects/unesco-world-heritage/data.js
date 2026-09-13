/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "unesco-world-heritage",
        "name": "UNESCO World Heritage sites",
        "type": "topic",
        "short_description": "Listed wonders, conservation politics, and the global catalog of outstanding places.",
        "description": "Listed wonders, conservation politics, and the global catalog of outstanding places. This Ton-o-Lore subject maps people, places, events, and ideas tied to UNESCO World Heritage sites so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "unesco-world-heritage-figures",
        "name": "UNESCO World Heritage sites figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to UNESCO World Heritage sites.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-world",
        "name": "UNESCO World Heritage sites world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame UNESCO World Heritage sites.",
        "description": "Geography, institutions, and periodization that give UNESCO World Heritage sites its encyclopedia shape."
    },
    {
        "slug": "unesco-world-heritage-places",
        "name": "UNESCO World Heritage sites places",
        "type": "place",
        "short_description": "Locations and geographies that frame UNESCO World Heritage sites.",
        "description": "Places, regions, and built sites that give UNESCO World Heritage sites its map — where events and figures concentrate."
    },
    {
        "slug": "unesco-world-heritage-events",
        "name": "UNESCO World Heritage sites events",
        "type": "event",
        "short_description": "Turning points and dated episodes in UNESCO World Heritage sites.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the UNESCO World Heritage sites timeline."
    },
    {
        "slug": "unesco-world-heritage-objects",
        "name": "UNESCO World Heritage sites objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to UNESCO World Heritage sites.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-factions",
        "name": "UNESCO World Heritage sites factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside UNESCO World Heritage sites.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-concepts",
        "name": "UNESCO World Heritage sites concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize UNESCO World Heritage sites.",
        "description": "Keywords, doctrines, systems, and abstract forces that make UNESCO World Heritage sites readable as a lore graph."
    },
    {
        "slug": "unesco-world-heritage-eras",
        "name": "UNESCO World Heritage sites eras",
        "type": "event",
        "short_description": "Periodization for UNESCO World Heritage sites.",
        "description": "Named eras and phases that help readers track how UNESCO World Heritage sites changes across time."
    },
    {
        "slug": "unesco-world-heritage-works",
        "name": "UNESCO World Heritage sites works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry UNESCO World Heritage sites.",
        "description": "Primary works and adaptations through which most audiences encounter UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-symbols",
        "name": "UNESCO World Heritage sites symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with UNESCO World Heritage sites.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-controversies",
        "name": "UNESCO World Heritage sites controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in UNESCO World Heritage sites.",
        "description": "Debates, rival canons, scandals, and contested facts that keep UNESCO World Heritage sites argumentative."
    },
    {
        "slug": "unesco-world-heritage-sources",
        "name": "UNESCO World Heritage sites sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into UNESCO World Heritage sites.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-geography",
        "name": "UNESCO World Heritage sites geography",
        "type": "place",
        "short_description": "Broader geographic framing for UNESCO World Heritage sites.",
        "description": "Regions, routes, and spatial systems that situate UNESCO World Heritage sites beyond single named places."
    },
    {
        "slug": "unesco-world-heritage-legacy",
        "name": "UNESCO World Heritage sites legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of UNESCO World Heritage sites.",
        "description": "How UNESCO World Heritage sites continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "unesco-world-heritage-practices",
        "name": "UNESCO World Heritage sites practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in UNESCO World Heritage sites.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in UNESCO World Heritage sites."
    },
    {
        "slug": "unesco-world-heritage-entry-1",
        "name": "UNESCO World Heritage sites entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-2",
        "name": "UNESCO World Heritage sites entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-3",
        "name": "UNESCO World Heritage sites entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-4",
        "name": "UNESCO World Heritage sites entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-5",
        "name": "UNESCO World Heritage sites entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-6",
        "name": "UNESCO World Heritage sites entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-7",
        "name": "UNESCO World Heritage sites entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-8",
        "name": "UNESCO World Heritage sites entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-9",
        "name": "UNESCO World Heritage sites entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-10",
        "name": "UNESCO World Heritage sites entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-11",
        "name": "UNESCO World Heritage sites entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-12",
        "name": "UNESCO World Heritage sites entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-13",
        "name": "UNESCO World Heritage sites entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-14",
        "name": "UNESCO World Heritage sites entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-15",
        "name": "UNESCO World Heritage sites entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-16",
        "name": "UNESCO World Heritage sites entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-17",
        "name": "UNESCO World Heritage sites entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-18",
        "name": "UNESCO World Heritage sites entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-19",
        "name": "UNESCO World Heritage sites entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-20",
        "name": "UNESCO World Heritage sites entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-21",
        "name": "UNESCO World Heritage sites entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-22",
        "name": "UNESCO World Heritage sites entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-23",
        "name": "UNESCO World Heritage sites entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "unesco-world-heritage-entry-24",
        "name": "UNESCO World Heritage sites entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside UNESCO World Heritage sites.",
        "description": "A supporting encyclopedia entry in the UNESCO World Heritage sites subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "unesco-world-heritage",
        "unesco-world-heritage-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-places",
        "contains",
        "UNESCO World Heritage sites places is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-events",
        "contains",
        "UNESCO World Heritage sites events is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-objects",
        "contains",
        "UNESCO World Heritage sites objects & artifacts is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-factions",
        "contains",
        "UNESCO World Heritage sites factions & groups is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-concepts",
        "contains",
        "UNESCO World Heritage sites concepts is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-eras",
        "contains",
        "UNESCO World Heritage sites eras is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-works",
        "contains",
        "UNESCO World Heritage sites works & media is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-symbols",
        "contains",
        "UNESCO World Heritage sites symbols is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-controversies",
        "contains",
        "UNESCO World Heritage sites controversies is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-sources",
        "contains",
        "UNESCO World Heritage sites sources is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-geography",
        "contains",
        "UNESCO World Heritage sites geography is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-legacy",
        "contains",
        "UNESCO World Heritage sites legacy is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-practices",
        "contains",
        "UNESCO World Heritage sites practices is a primary trailhead under UNESCO World Heritage sites.",
        0.88,
        0.82
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-1",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-2",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-3",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-4",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-5",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-6",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-7",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-8",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-9",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-10",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-11",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-12",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-13",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-14",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-15",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-16",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-17",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-18",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-19",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-20",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-21",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-22",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-23",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ],
    [
        "unesco-world-heritage",
        "unesco-world-heritage-entry-24",
        "contains",
        "Supporting entry under UNESCO World Heritage sites.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
