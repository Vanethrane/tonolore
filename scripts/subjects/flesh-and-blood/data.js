/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "flesh-and-blood",
        "name": "Flesh and Blood",
        "type": "topic",
        "short_description": "Hero-class constructed play — Rathe, weapons, and living-card-game style storytelling.",
        "description": "Hero-class constructed play — Rathe, weapons, and living-card-game style storytelling. This Ton-o-Lore subject maps people, places, products, and ideas tied to Flesh and Blood so readers can follow long-tail connections across the card game hobby."
    },
    {
        "slug": "flesh-and-blood-rules",
        "name": "Flesh and Blood rules & formats",
        "type": "topic",
        "short_description": "How Flesh and Blood is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-setting",
        "name": "Flesh and Blood setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Flesh and Blood.",
        "description": "The narrative frame around Flesh and Blood — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "flesh-and-blood-figures",
        "name": "Flesh and Blood figures",
        "type": "topic",
        "short_description": "People and named forces central to Flesh and Blood.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-places",
        "name": "Flesh and Blood places",
        "type": "place",
        "short_description": "Locations and geographies that frame Flesh and Blood.",
        "description": "Places, regions, and built sites that give Flesh and Blood its map — where events and figures concentrate."
    },
    {
        "slug": "flesh-and-blood-events",
        "name": "Flesh and Blood events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Flesh and Blood.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Flesh and Blood timeline."
    },
    {
        "slug": "flesh-and-blood-objects",
        "name": "Flesh and Blood objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Flesh and Blood.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-factions",
        "name": "Flesh and Blood factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Flesh and Blood.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-concepts",
        "name": "Flesh and Blood concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Flesh and Blood.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Flesh and Blood readable as a lore graph."
    },
    {
        "slug": "flesh-and-blood-eras",
        "name": "Flesh and Blood eras",
        "type": "event",
        "short_description": "Periodization for Flesh and Blood.",
        "description": "Named eras and phases that help readers track how Flesh and Blood changes across time."
    },
    {
        "slug": "flesh-and-blood-works",
        "name": "Flesh and Blood works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Flesh and Blood.",
        "description": "Primary works and adaptations through which most audiences encounter Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-symbols",
        "name": "Flesh and Blood symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Flesh and Blood.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-controversies",
        "name": "Flesh and Blood controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Flesh and Blood.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Flesh and Blood argumentative."
    },
    {
        "slug": "flesh-and-blood-sources",
        "name": "Flesh and Blood sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Flesh and Blood.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-geography",
        "name": "Flesh and Blood geography",
        "type": "place",
        "short_description": "Broader geographic framing for Flesh and Blood.",
        "description": "Regions, routes, and spatial systems that situate Flesh and Blood beyond single named places."
    },
    {
        "slug": "flesh-and-blood-legacy",
        "name": "Flesh and Blood legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Flesh and Blood.",
        "description": "How Flesh and Blood continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "flesh-and-blood-practices",
        "name": "Flesh and Blood practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Flesh and Blood.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Flesh and Blood."
    },
    {
        "slug": "flesh-and-blood-entry-1",
        "name": "Flesh and Blood entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-2",
        "name": "Flesh and Blood entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-3",
        "name": "Flesh and Blood entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-4",
        "name": "Flesh and Blood entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-5",
        "name": "Flesh and Blood entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-6",
        "name": "Flesh and Blood entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-7",
        "name": "Flesh and Blood entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-8",
        "name": "Flesh and Blood entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-9",
        "name": "Flesh and Blood entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-10",
        "name": "Flesh and Blood entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-11",
        "name": "Flesh and Blood entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-12",
        "name": "Flesh and Blood entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-13",
        "name": "Flesh and Blood entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-14",
        "name": "Flesh and Blood entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-15",
        "name": "Flesh and Blood entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-16",
        "name": "Flesh and Blood entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-17",
        "name": "Flesh and Blood entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-18",
        "name": "Flesh and Blood entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-19",
        "name": "Flesh and Blood entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-20",
        "name": "Flesh and Blood entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-21",
        "name": "Flesh and Blood entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-22",
        "name": "Flesh and Blood entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flesh-and-blood-entry-23",
        "name": "Flesh and Blood entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flesh and Blood.",
        "description": "A supporting encyclopedia entry in the Flesh and Blood subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "flesh-and-blood",
        "flesh-and-blood-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-figures",
        "contains",
        "Flesh and Blood figures is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-places",
        "contains",
        "Flesh and Blood places is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-events",
        "contains",
        "Flesh and Blood events is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-objects",
        "contains",
        "Flesh and Blood objects & artifacts is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-factions",
        "contains",
        "Flesh and Blood factions & groups is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-concepts",
        "contains",
        "Flesh and Blood concepts is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-eras",
        "contains",
        "Flesh and Blood eras is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-works",
        "contains",
        "Flesh and Blood works & media is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-symbols",
        "contains",
        "Flesh and Blood symbols is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-controversies",
        "contains",
        "Flesh and Blood controversies is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-sources",
        "contains",
        "Flesh and Blood sources is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-geography",
        "contains",
        "Flesh and Blood geography is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-legacy",
        "contains",
        "Flesh and Blood legacy is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-practices",
        "contains",
        "Flesh and Blood practices is a primary trailhead under Flesh and Blood.",
        0.88,
        0.82
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-1",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-2",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-3",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-4",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-5",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-6",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-7",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-8",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-9",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-10",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-11",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-12",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-13",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-14",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-15",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-16",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-17",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-18",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-19",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-20",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-21",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-22",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-entry-23",
        "contains",
        "Supporting entry under Flesh and Blood.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
