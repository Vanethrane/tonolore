/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "crop-circles",
        "name": "Crop circles",
        "type": "topic",
        "short_description": "Night formations, hoax craft, and the cereal-field art that fueled 1990s mystery media.",
        "description": "Night formations, hoax craft, and the cereal-field art that fueled 1990s mystery media. This Ton-o-Lore subject maps people, places, events, and ideas tied to Crop circles so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "crop-circles-figures",
        "name": "Crop circles figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Crop circles.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Crop circles."
    },
    {
        "slug": "crop-circles-world",
        "name": "Crop circles world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Crop circles.",
        "description": "Geography, institutions, and periodization that give Crop circles its encyclopedia shape."
    },
    {
        "slug": "crop-circles-places",
        "name": "Crop circles places",
        "type": "place",
        "short_description": "Locations and geographies that frame Crop circles.",
        "description": "Places, regions, and built sites that give Crop circles its map — where events and figures concentrate."
    },
    {
        "slug": "crop-circles-events",
        "name": "Crop circles events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Crop circles.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Crop circles timeline."
    },
    {
        "slug": "crop-circles-objects",
        "name": "Crop circles objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Crop circles.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Crop circles."
    },
    {
        "slug": "crop-circles-factions",
        "name": "Crop circles factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Crop circles.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Crop circles."
    },
    {
        "slug": "crop-circles-concepts",
        "name": "Crop circles concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Crop circles.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Crop circles readable as a lore graph."
    },
    {
        "slug": "crop-circles-eras",
        "name": "Crop circles eras",
        "type": "event",
        "short_description": "Periodization for Crop circles.",
        "description": "Named eras and phases that help readers track how Crop circles changes across time."
    },
    {
        "slug": "crop-circles-works",
        "name": "Crop circles works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Crop circles.",
        "description": "Primary works and adaptations through which most audiences encounter Crop circles."
    },
    {
        "slug": "crop-circles-symbols",
        "name": "Crop circles symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Crop circles.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Crop circles."
    },
    {
        "slug": "crop-circles-controversies",
        "name": "Crop circles controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Crop circles.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Crop circles argumentative."
    },
    {
        "slug": "crop-circles-sources",
        "name": "Crop circles sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Crop circles.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Crop circles."
    },
    {
        "slug": "crop-circles-geography",
        "name": "Crop circles geography",
        "type": "place",
        "short_description": "Broader geographic framing for Crop circles.",
        "description": "Regions, routes, and spatial systems that situate Crop circles beyond single named places."
    },
    {
        "slug": "crop-circles-legacy",
        "name": "Crop circles legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Crop circles.",
        "description": "How Crop circles continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "crop-circles-practices",
        "name": "Crop circles practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Crop circles.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Crop circles."
    },
    {
        "slug": "crop-circles-entry-1",
        "name": "Crop circles entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-2",
        "name": "Crop circles entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-3",
        "name": "Crop circles entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-4",
        "name": "Crop circles entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-5",
        "name": "Crop circles entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-6",
        "name": "Crop circles entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-7",
        "name": "Crop circles entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-8",
        "name": "Crop circles entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-9",
        "name": "Crop circles entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-10",
        "name": "Crop circles entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-11",
        "name": "Crop circles entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-12",
        "name": "Crop circles entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-13",
        "name": "Crop circles entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-14",
        "name": "Crop circles entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-15",
        "name": "Crop circles entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-16",
        "name": "Crop circles entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-17",
        "name": "Crop circles entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-18",
        "name": "Crop circles entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-19",
        "name": "Crop circles entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-20",
        "name": "Crop circles entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-21",
        "name": "Crop circles entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-22",
        "name": "Crop circles entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-23",
        "name": "Crop circles entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crop-circles-entry-24",
        "name": "Crop circles entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crop circles.",
        "description": "A supporting encyclopedia entry in the Crop circles subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "crop-circles",
        "crop-circles-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "crop-circles",
        "crop-circles-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "crop-circles",
        "crop-circles-places",
        "contains",
        "Crop circles places is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-events",
        "contains",
        "Crop circles events is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-objects",
        "contains",
        "Crop circles objects & artifacts is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-factions",
        "contains",
        "Crop circles factions & groups is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-concepts",
        "contains",
        "Crop circles concepts is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-eras",
        "contains",
        "Crop circles eras is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-works",
        "contains",
        "Crop circles works & media is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-symbols",
        "contains",
        "Crop circles symbols is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-controversies",
        "contains",
        "Crop circles controversies is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-sources",
        "contains",
        "Crop circles sources is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-geography",
        "contains",
        "Crop circles geography is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-legacy",
        "contains",
        "Crop circles legacy is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-practices",
        "contains",
        "Crop circles practices is a primary trailhead under Crop circles.",
        0.88,
        0.82
    ],
    [
        "crop-circles",
        "crop-circles-entry-1",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-2",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-3",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-4",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-5",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-6",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-7",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-8",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-9",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-10",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-11",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-12",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-13",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-14",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-15",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-16",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-17",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-18",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-19",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-20",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-21",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-22",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-23",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ],
    [
        "crop-circles",
        "crop-circles-entry-24",
        "contains",
        "Supporting entry under Crop circles.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
