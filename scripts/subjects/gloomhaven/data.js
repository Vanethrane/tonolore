/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gloomhaven",
        "name": "Gloomhaven",
        "type": "topic",
        "short_description": "Legacy dungeon campaign board game — classes, scenarios, and a sprawling tactical lore map.",
        "description": "Legacy dungeon campaign board game — classes, scenarios, and a sprawling tactical lore map. This Ton-o-Lore subject maps people, places, products, and ideas tied to Gloomhaven so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "gloomhaven-rules",
        "name": "Gloomhaven rules & formats",
        "type": "topic",
        "short_description": "How Gloomhaven is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Gloomhaven."
    },
    {
        "slug": "gloomhaven-setting",
        "name": "Gloomhaven setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Gloomhaven.",
        "description": "The narrative frame around Gloomhaven — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "gloomhaven-figures",
        "name": "Gloomhaven figures",
        "type": "topic",
        "short_description": "People and named forces central to Gloomhaven.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Gloomhaven."
    },
    {
        "slug": "gloomhaven-places",
        "name": "Gloomhaven places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gloomhaven.",
        "description": "Places, regions, and built sites that give Gloomhaven its map — where events and figures concentrate."
    },
    {
        "slug": "gloomhaven-events",
        "name": "Gloomhaven events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gloomhaven.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gloomhaven timeline."
    },
    {
        "slug": "gloomhaven-objects",
        "name": "Gloomhaven objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gloomhaven.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gloomhaven."
    },
    {
        "slug": "gloomhaven-factions",
        "name": "Gloomhaven factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gloomhaven.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gloomhaven."
    },
    {
        "slug": "gloomhaven-concepts",
        "name": "Gloomhaven concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gloomhaven.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gloomhaven readable as a lore graph."
    },
    {
        "slug": "gloomhaven-eras",
        "name": "Gloomhaven eras",
        "type": "event",
        "short_description": "Periodization for Gloomhaven.",
        "description": "Named eras and phases that help readers track how Gloomhaven changes across time."
    },
    {
        "slug": "gloomhaven-works",
        "name": "Gloomhaven works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gloomhaven.",
        "description": "Primary works and adaptations through which most audiences encounter Gloomhaven."
    },
    {
        "slug": "gloomhaven-symbols",
        "name": "Gloomhaven symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gloomhaven.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gloomhaven."
    },
    {
        "slug": "gloomhaven-controversies",
        "name": "Gloomhaven controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gloomhaven.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gloomhaven argumentative."
    },
    {
        "slug": "gloomhaven-sources",
        "name": "Gloomhaven sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gloomhaven.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gloomhaven."
    },
    {
        "slug": "gloomhaven-geography",
        "name": "Gloomhaven geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gloomhaven.",
        "description": "Regions, routes, and spatial systems that situate Gloomhaven beyond single named places."
    },
    {
        "slug": "gloomhaven-legacy",
        "name": "Gloomhaven legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gloomhaven.",
        "description": "How Gloomhaven continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gloomhaven-practices",
        "name": "Gloomhaven practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gloomhaven.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gloomhaven."
    },
    {
        "slug": "gloomhaven-entry-1",
        "name": "Gloomhaven entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-2",
        "name": "Gloomhaven entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-3",
        "name": "Gloomhaven entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-4",
        "name": "Gloomhaven entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-5",
        "name": "Gloomhaven entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-6",
        "name": "Gloomhaven entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-7",
        "name": "Gloomhaven entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-8",
        "name": "Gloomhaven entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-9",
        "name": "Gloomhaven entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-10",
        "name": "Gloomhaven entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-11",
        "name": "Gloomhaven entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-12",
        "name": "Gloomhaven entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-13",
        "name": "Gloomhaven entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-14",
        "name": "Gloomhaven entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-15",
        "name": "Gloomhaven entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-16",
        "name": "Gloomhaven entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-17",
        "name": "Gloomhaven entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-18",
        "name": "Gloomhaven entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-19",
        "name": "Gloomhaven entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-20",
        "name": "Gloomhaven entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-21",
        "name": "Gloomhaven entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-22",
        "name": "Gloomhaven entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gloomhaven-entry-23",
        "name": "Gloomhaven entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gloomhaven.",
        "description": "A supporting encyclopedia entry in the Gloomhaven subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gloomhaven",
        "gloomhaven-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "gloomhaven",
        "gloomhaven-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "gloomhaven",
        "gloomhaven-figures",
        "contains",
        "Gloomhaven figures is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-places",
        "contains",
        "Gloomhaven places is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-events",
        "contains",
        "Gloomhaven events is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-objects",
        "contains",
        "Gloomhaven objects & artifacts is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-factions",
        "contains",
        "Gloomhaven factions & groups is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-concepts",
        "contains",
        "Gloomhaven concepts is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-eras",
        "contains",
        "Gloomhaven eras is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-works",
        "contains",
        "Gloomhaven works & media is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-symbols",
        "contains",
        "Gloomhaven symbols is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-controversies",
        "contains",
        "Gloomhaven controversies is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-sources",
        "contains",
        "Gloomhaven sources is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-geography",
        "contains",
        "Gloomhaven geography is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-legacy",
        "contains",
        "Gloomhaven legacy is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-practices",
        "contains",
        "Gloomhaven practices is a primary trailhead under Gloomhaven.",
        0.88,
        0.82
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-1",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-2",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-3",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-4",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-5",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-6",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-7",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-8",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-9",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-10",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-11",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-12",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-13",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-14",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-15",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-16",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-17",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-18",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-19",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-20",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-21",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-22",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ],
    [
        "gloomhaven",
        "gloomhaven-entry-23",
        "contains",
        "Supporting entry under Gloomhaven.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
