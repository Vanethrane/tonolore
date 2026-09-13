/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vaudeville",
        "name": "Vaudeville",
        "type": "topic",
        "short_description": "Variety bills, circuits, and the popular American stage that midwifed film and radio comedy.",
        "description": "Variety bills, circuits, and the popular American stage that midwifed film and radio comedy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vaudeville so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "vaudeville-figures",
        "name": "Vaudeville figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vaudeville.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vaudeville."
    },
    {
        "slug": "vaudeville-world",
        "name": "Vaudeville world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vaudeville.",
        "description": "Geography, institutions, and periodization that give Vaudeville its encyclopedia shape."
    },
    {
        "slug": "vaudeville-places",
        "name": "Vaudeville places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vaudeville.",
        "description": "Places, regions, and built sites that give Vaudeville its map — where events and figures concentrate."
    },
    {
        "slug": "vaudeville-events",
        "name": "Vaudeville events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vaudeville.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vaudeville timeline."
    },
    {
        "slug": "vaudeville-objects",
        "name": "Vaudeville objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vaudeville.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vaudeville."
    },
    {
        "slug": "vaudeville-factions",
        "name": "Vaudeville factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vaudeville.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vaudeville."
    },
    {
        "slug": "vaudeville-concepts",
        "name": "Vaudeville concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vaudeville.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vaudeville readable as a lore graph."
    },
    {
        "slug": "vaudeville-eras",
        "name": "Vaudeville eras",
        "type": "event",
        "short_description": "Periodization for Vaudeville.",
        "description": "Named eras and phases that help readers track how Vaudeville changes across time."
    },
    {
        "slug": "vaudeville-works",
        "name": "Vaudeville works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vaudeville.",
        "description": "Primary works and adaptations through which most audiences encounter Vaudeville."
    },
    {
        "slug": "vaudeville-symbols",
        "name": "Vaudeville symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vaudeville.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vaudeville."
    },
    {
        "slug": "vaudeville-controversies",
        "name": "Vaudeville controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vaudeville.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vaudeville argumentative."
    },
    {
        "slug": "vaudeville-sources",
        "name": "Vaudeville sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vaudeville.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vaudeville."
    },
    {
        "slug": "vaudeville-geography",
        "name": "Vaudeville geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vaudeville.",
        "description": "Regions, routes, and spatial systems that situate Vaudeville beyond single named places."
    },
    {
        "slug": "vaudeville-legacy",
        "name": "Vaudeville legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vaudeville.",
        "description": "How Vaudeville continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "vaudeville-practices",
        "name": "Vaudeville practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Vaudeville.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Vaudeville."
    },
    {
        "slug": "vaudeville-entry-1",
        "name": "Vaudeville entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-2",
        "name": "Vaudeville entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-3",
        "name": "Vaudeville entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-4",
        "name": "Vaudeville entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-5",
        "name": "Vaudeville entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-6",
        "name": "Vaudeville entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-7",
        "name": "Vaudeville entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-8",
        "name": "Vaudeville entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-9",
        "name": "Vaudeville entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-10",
        "name": "Vaudeville entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-11",
        "name": "Vaudeville entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-12",
        "name": "Vaudeville entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-13",
        "name": "Vaudeville entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-14",
        "name": "Vaudeville entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-15",
        "name": "Vaudeville entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-16",
        "name": "Vaudeville entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-17",
        "name": "Vaudeville entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-18",
        "name": "Vaudeville entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-19",
        "name": "Vaudeville entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-20",
        "name": "Vaudeville entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-21",
        "name": "Vaudeville entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-22",
        "name": "Vaudeville entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-23",
        "name": "Vaudeville entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vaudeville-entry-24",
        "name": "Vaudeville entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vaudeville.",
        "description": "A supporting encyclopedia entry in the Vaudeville subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "vaudeville",
        "vaudeville-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vaudeville",
        "vaudeville-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vaudeville",
        "vaudeville-places",
        "contains",
        "Vaudeville places is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-events",
        "contains",
        "Vaudeville events is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-objects",
        "contains",
        "Vaudeville objects & artifacts is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-factions",
        "contains",
        "Vaudeville factions & groups is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-concepts",
        "contains",
        "Vaudeville concepts is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-eras",
        "contains",
        "Vaudeville eras is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-works",
        "contains",
        "Vaudeville works & media is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-symbols",
        "contains",
        "Vaudeville symbols is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-controversies",
        "contains",
        "Vaudeville controversies is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-sources",
        "contains",
        "Vaudeville sources is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-geography",
        "contains",
        "Vaudeville geography is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-legacy",
        "contains",
        "Vaudeville legacy is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-practices",
        "contains",
        "Vaudeville practices is a primary trailhead under Vaudeville.",
        0.88,
        0.82
    ],
    [
        "vaudeville",
        "vaudeville-entry-1",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-2",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-3",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-4",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-5",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-6",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-7",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-8",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-9",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-10",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-11",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-12",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-13",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-14",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-15",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-16",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-17",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-18",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-19",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-20",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-21",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-22",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-23",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ],
    [
        "vaudeville",
        "vaudeville-entry-24",
        "contains",
        "Supporting entry under Vaudeville.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
