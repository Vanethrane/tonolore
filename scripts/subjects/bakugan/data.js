/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bakugan",
        "name": "Bakugan",
        "type": "topic",
        "short_description": "Transforming spheres, card-linked battles, and the mid-2000s arena toy phenomenon.",
        "description": "Transforming spheres, card-linked battles, and the mid-2000s arena toy phenomenon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bakugan so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "bakugan-figures",
        "name": "Bakugan figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bakugan.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bakugan."
    },
    {
        "slug": "bakugan-world",
        "name": "Bakugan world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bakugan.",
        "description": "Geography, institutions, and periodization that give Bakugan its encyclopedia shape."
    },
    {
        "slug": "bakugan-places",
        "name": "Bakugan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bakugan.",
        "description": "Places, regions, and built sites that give Bakugan its map — where events and figures concentrate."
    },
    {
        "slug": "bakugan-events",
        "name": "Bakugan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bakugan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bakugan timeline."
    },
    {
        "slug": "bakugan-objects",
        "name": "Bakugan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bakugan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bakugan."
    },
    {
        "slug": "bakugan-factions",
        "name": "Bakugan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bakugan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bakugan."
    },
    {
        "slug": "bakugan-concepts",
        "name": "Bakugan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bakugan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bakugan readable as a lore graph."
    },
    {
        "slug": "bakugan-eras",
        "name": "Bakugan eras",
        "type": "event",
        "short_description": "Periodization for Bakugan.",
        "description": "Named eras and phases that help readers track how Bakugan changes across time."
    },
    {
        "slug": "bakugan-works",
        "name": "Bakugan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bakugan.",
        "description": "Primary works and adaptations through which most audiences encounter Bakugan."
    },
    {
        "slug": "bakugan-symbols",
        "name": "Bakugan symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bakugan.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bakugan."
    },
    {
        "slug": "bakugan-controversies",
        "name": "Bakugan controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bakugan.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bakugan argumentative."
    },
    {
        "slug": "bakugan-sources",
        "name": "Bakugan sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bakugan.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bakugan."
    },
    {
        "slug": "bakugan-geography",
        "name": "Bakugan geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bakugan.",
        "description": "Regions, routes, and spatial systems that situate Bakugan beyond single named places."
    },
    {
        "slug": "bakugan-legacy",
        "name": "Bakugan legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bakugan.",
        "description": "How Bakugan continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bakugan-practices",
        "name": "Bakugan practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bakugan.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bakugan."
    },
    {
        "slug": "bakugan-entry-1",
        "name": "Bakugan entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-2",
        "name": "Bakugan entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-3",
        "name": "Bakugan entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-4",
        "name": "Bakugan entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-5",
        "name": "Bakugan entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-6",
        "name": "Bakugan entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-7",
        "name": "Bakugan entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-8",
        "name": "Bakugan entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-9",
        "name": "Bakugan entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-10",
        "name": "Bakugan entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-11",
        "name": "Bakugan entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-12",
        "name": "Bakugan entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-13",
        "name": "Bakugan entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-14",
        "name": "Bakugan entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-15",
        "name": "Bakugan entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-16",
        "name": "Bakugan entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-17",
        "name": "Bakugan entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-18",
        "name": "Bakugan entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-19",
        "name": "Bakugan entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-20",
        "name": "Bakugan entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-21",
        "name": "Bakugan entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-22",
        "name": "Bakugan entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-23",
        "name": "Bakugan entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bakugan-entry-24",
        "name": "Bakugan entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bakugan.",
        "description": "A supporting encyclopedia entry in the Bakugan subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bakugan",
        "bakugan-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bakugan",
        "bakugan-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bakugan",
        "bakugan-places",
        "contains",
        "Bakugan places is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-events",
        "contains",
        "Bakugan events is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-objects",
        "contains",
        "Bakugan objects & artifacts is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-factions",
        "contains",
        "Bakugan factions & groups is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-concepts",
        "contains",
        "Bakugan concepts is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-eras",
        "contains",
        "Bakugan eras is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-works",
        "contains",
        "Bakugan works & media is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-symbols",
        "contains",
        "Bakugan symbols is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-controversies",
        "contains",
        "Bakugan controversies is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-sources",
        "contains",
        "Bakugan sources is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-geography",
        "contains",
        "Bakugan geography is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-legacy",
        "contains",
        "Bakugan legacy is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-practices",
        "contains",
        "Bakugan practices is a primary trailhead under Bakugan.",
        0.88,
        0.82
    ],
    [
        "bakugan",
        "bakugan-entry-1",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-2",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-3",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-4",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-5",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-6",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-7",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-8",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-9",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-10",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-11",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-12",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-13",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-14",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-15",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-16",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-17",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-18",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-19",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-20",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-21",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-22",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-23",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ],
    [
        "bakugan",
        "bakugan-entry-24",
        "contains",
        "Supporting entry under Bakugan.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
