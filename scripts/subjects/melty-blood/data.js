/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "melty-blood",
        "name": "Melty Blood",
        "type": "topic",
        "short_description": "Tsukihime cast, moonlit battles, and the foundational anime fighter of the Type-Moon continuum.",
        "description": "Tsukihime cast, moonlit battles, and the foundational anime fighter of the Type-Moon continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Melty Blood so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "melty-blood-figures",
        "name": "Melty Blood figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Melty Blood.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Melty Blood."
    },
    {
        "slug": "melty-blood-world",
        "name": "Melty Blood world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Melty Blood.",
        "description": "Geography, institutions, and periodization that give Melty Blood its encyclopedia shape."
    },
    {
        "slug": "melty-blood-places",
        "name": "Melty Blood places",
        "type": "place",
        "short_description": "Locations and geographies that frame Melty Blood.",
        "description": "Places, regions, and built sites that give Melty Blood its map — where events and figures concentrate."
    },
    {
        "slug": "melty-blood-events",
        "name": "Melty Blood events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Melty Blood.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Melty Blood timeline."
    },
    {
        "slug": "melty-blood-objects",
        "name": "Melty Blood objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Melty Blood.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Melty Blood."
    },
    {
        "slug": "melty-blood-factions",
        "name": "Melty Blood factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Melty Blood.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Melty Blood."
    },
    {
        "slug": "melty-blood-concepts",
        "name": "Melty Blood concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Melty Blood.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Melty Blood readable as a lore graph."
    },
    {
        "slug": "melty-blood-eras",
        "name": "Melty Blood eras",
        "type": "event",
        "short_description": "Periodization for Melty Blood.",
        "description": "Named eras and phases that help readers track how Melty Blood changes across time."
    },
    {
        "slug": "melty-blood-works",
        "name": "Melty Blood works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Melty Blood.",
        "description": "Primary works and adaptations through which most audiences encounter Melty Blood."
    },
    {
        "slug": "melty-blood-symbols",
        "name": "Melty Blood symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Melty Blood.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Melty Blood."
    },
    {
        "slug": "melty-blood-controversies",
        "name": "Melty Blood controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Melty Blood.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Melty Blood argumentative."
    },
    {
        "slug": "melty-blood-sources",
        "name": "Melty Blood sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Melty Blood.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Melty Blood."
    },
    {
        "slug": "melty-blood-geography",
        "name": "Melty Blood geography",
        "type": "place",
        "short_description": "Broader geographic framing for Melty Blood.",
        "description": "Regions, routes, and spatial systems that situate Melty Blood beyond single named places."
    },
    {
        "slug": "melty-blood-legacy",
        "name": "Melty Blood legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Melty Blood.",
        "description": "How Melty Blood continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "melty-blood-practices",
        "name": "Melty Blood practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Melty Blood.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Melty Blood."
    },
    {
        "slug": "melty-blood-entry-1",
        "name": "Melty Blood entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-2",
        "name": "Melty Blood entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-3",
        "name": "Melty Blood entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-4",
        "name": "Melty Blood entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-5",
        "name": "Melty Blood entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-6",
        "name": "Melty Blood entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-7",
        "name": "Melty Blood entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-8",
        "name": "Melty Blood entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-9",
        "name": "Melty Blood entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-10",
        "name": "Melty Blood entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-11",
        "name": "Melty Blood entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-12",
        "name": "Melty Blood entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-13",
        "name": "Melty Blood entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-14",
        "name": "Melty Blood entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-15",
        "name": "Melty Blood entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-16",
        "name": "Melty Blood entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-17",
        "name": "Melty Blood entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-18",
        "name": "Melty Blood entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-19",
        "name": "Melty Blood entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-20",
        "name": "Melty Blood entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-21",
        "name": "Melty Blood entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-22",
        "name": "Melty Blood entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-23",
        "name": "Melty Blood entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "melty-blood-entry-24",
        "name": "Melty Blood entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Melty Blood.",
        "description": "A supporting encyclopedia entry in the Melty Blood subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "melty-blood",
        "melty-blood-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "melty-blood",
        "melty-blood-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "melty-blood",
        "melty-blood-places",
        "contains",
        "Melty Blood places is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-events",
        "contains",
        "Melty Blood events is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-objects",
        "contains",
        "Melty Blood objects & artifacts is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-factions",
        "contains",
        "Melty Blood factions & groups is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-concepts",
        "contains",
        "Melty Blood concepts is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-eras",
        "contains",
        "Melty Blood eras is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-works",
        "contains",
        "Melty Blood works & media is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-symbols",
        "contains",
        "Melty Blood symbols is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-controversies",
        "contains",
        "Melty Blood controversies is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-sources",
        "contains",
        "Melty Blood sources is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-geography",
        "contains",
        "Melty Blood geography is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-legacy",
        "contains",
        "Melty Blood legacy is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-practices",
        "contains",
        "Melty Blood practices is a primary trailhead under Melty Blood.",
        0.88,
        0.82
    ],
    [
        "melty-blood",
        "melty-blood-entry-1",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-2",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-3",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-4",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-5",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-6",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-7",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-8",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-9",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-10",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-11",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-12",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-13",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-14",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-15",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-16",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-17",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-18",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-19",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-20",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-21",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-22",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-23",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ],
    [
        "melty-blood",
        "melty-blood-entry-24",
        "contains",
        "Supporting entry under Melty Blood.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
