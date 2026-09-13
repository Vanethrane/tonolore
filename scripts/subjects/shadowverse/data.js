/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shadowverse",
        "name": "Shadowverse",
        "type": "topic",
        "short_description": "Anime digital CCG, class crafts, and the Japanese online card battler with dense lore.",
        "description": "Anime digital CCG, class crafts, and the Japanese online card battler with dense lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shadowverse so readers can follow long-tail connections across card games."
    },
    {
        "slug": "shadowverse-figures",
        "name": "Shadowverse figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shadowverse.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shadowverse."
    },
    {
        "slug": "shadowverse-world",
        "name": "Shadowverse world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shadowverse.",
        "description": "Geography, institutions, and periodization that give Shadowverse its encyclopedia shape."
    },
    {
        "slug": "shadowverse-places",
        "name": "Shadowverse places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shadowverse.",
        "description": "Places, regions, and built sites that give Shadowverse its map — where events and figures concentrate."
    },
    {
        "slug": "shadowverse-events",
        "name": "Shadowverse events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shadowverse.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shadowverse timeline."
    },
    {
        "slug": "shadowverse-objects",
        "name": "Shadowverse objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shadowverse.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shadowverse."
    },
    {
        "slug": "shadowverse-factions",
        "name": "Shadowverse factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shadowverse.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shadowverse."
    },
    {
        "slug": "shadowverse-concepts",
        "name": "Shadowverse concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shadowverse.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shadowverse readable as a lore graph."
    },
    {
        "slug": "shadowverse-eras",
        "name": "Shadowverse eras",
        "type": "event",
        "short_description": "Periodization for Shadowverse.",
        "description": "Named eras and phases that help readers track how Shadowverse changes across time."
    },
    {
        "slug": "shadowverse-works",
        "name": "Shadowverse works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shadowverse.",
        "description": "Primary works and adaptations through which most audiences encounter Shadowverse."
    },
    {
        "slug": "shadowverse-symbols",
        "name": "Shadowverse symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shadowverse.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shadowverse."
    },
    {
        "slug": "shadowverse-controversies",
        "name": "Shadowverse controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shadowverse.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shadowverse argumentative."
    },
    {
        "slug": "shadowverse-sources",
        "name": "Shadowverse sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shadowverse.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shadowverse."
    },
    {
        "slug": "shadowverse-geography",
        "name": "Shadowverse geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shadowverse.",
        "description": "Regions, routes, and spatial systems that situate Shadowverse beyond single named places."
    },
    {
        "slug": "shadowverse-legacy",
        "name": "Shadowverse legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shadowverse.",
        "description": "How Shadowverse continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "shadowverse-practices",
        "name": "Shadowverse practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Shadowverse.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Shadowverse."
    },
    {
        "slug": "shadowverse-entry-1",
        "name": "Shadowverse entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-2",
        "name": "Shadowverse entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-3",
        "name": "Shadowverse entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-4",
        "name": "Shadowverse entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-5",
        "name": "Shadowverse entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-6",
        "name": "Shadowverse entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-7",
        "name": "Shadowverse entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-8",
        "name": "Shadowverse entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-9",
        "name": "Shadowverse entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-10",
        "name": "Shadowverse entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-11",
        "name": "Shadowverse entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-12",
        "name": "Shadowverse entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-13",
        "name": "Shadowverse entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-14",
        "name": "Shadowverse entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-15",
        "name": "Shadowverse entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-16",
        "name": "Shadowverse entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-17",
        "name": "Shadowverse entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-18",
        "name": "Shadowverse entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-19",
        "name": "Shadowverse entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-20",
        "name": "Shadowverse entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-21",
        "name": "Shadowverse entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-22",
        "name": "Shadowverse entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-23",
        "name": "Shadowverse entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowverse-entry-24",
        "name": "Shadowverse entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowverse.",
        "description": "A supporting encyclopedia entry in the Shadowverse subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "shadowverse",
        "shadowverse-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shadowverse",
        "shadowverse-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shadowverse",
        "shadowverse-places",
        "contains",
        "Shadowverse places is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-events",
        "contains",
        "Shadowverse events is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-objects",
        "contains",
        "Shadowverse objects & artifacts is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-factions",
        "contains",
        "Shadowverse factions & groups is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-concepts",
        "contains",
        "Shadowverse concepts is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-eras",
        "contains",
        "Shadowverse eras is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-works",
        "contains",
        "Shadowverse works & media is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-symbols",
        "contains",
        "Shadowverse symbols is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-controversies",
        "contains",
        "Shadowverse controversies is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-sources",
        "contains",
        "Shadowverse sources is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-geography",
        "contains",
        "Shadowverse geography is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-legacy",
        "contains",
        "Shadowverse legacy is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-practices",
        "contains",
        "Shadowverse practices is a primary trailhead under Shadowverse.",
        0.88,
        0.82
    ],
    [
        "shadowverse",
        "shadowverse-entry-1",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-2",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-3",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-4",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-5",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-6",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-7",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-8",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-9",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-10",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-11",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-12",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-13",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-14",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-15",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-16",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-17",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-18",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-19",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-20",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-21",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-22",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-23",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ],
    [
        "shadowverse",
        "shadowverse-entry-24",
        "contains",
        "Supporting entry under Shadowverse.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
