/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "metal-gear-solid",
        "name": "Metal Gear Solid",
        "type": "topic",
        "short_description": "Sneaking, codec lore, and Kojima’s cinematic spy-metal saga.",
        "description": "Sneaking, codec lore, and Kojima’s cinematic spy-metal saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Metal Gear Solid so readers can follow long-tail connections across video games."
    },
    {
        "slug": "metal-gear-solid-figures",
        "name": "Metal Gear Solid figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Metal Gear Solid.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-world",
        "name": "Metal Gear Solid world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Metal Gear Solid.",
        "description": "Geography, institutions, and periodization that give Metal Gear Solid its encyclopedia shape."
    },
    {
        "slug": "metal-gear-solid-places",
        "name": "Metal Gear Solid places",
        "type": "place",
        "short_description": "Locations and geographies that frame Metal Gear Solid.",
        "description": "Places, regions, and built sites that give Metal Gear Solid its map — where events and figures concentrate."
    },
    {
        "slug": "metal-gear-solid-events",
        "name": "Metal Gear Solid events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Metal Gear Solid.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Metal Gear Solid timeline."
    },
    {
        "slug": "metal-gear-solid-objects",
        "name": "Metal Gear Solid objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Metal Gear Solid.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-factions",
        "name": "Metal Gear Solid factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Metal Gear Solid.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-concepts",
        "name": "Metal Gear Solid concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Metal Gear Solid.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Metal Gear Solid readable as a lore graph."
    },
    {
        "slug": "metal-gear-solid-eras",
        "name": "Metal Gear Solid eras",
        "type": "event",
        "short_description": "Periodization for Metal Gear Solid.",
        "description": "Named eras and phases that help readers track how Metal Gear Solid changes across time."
    },
    {
        "slug": "metal-gear-solid-works",
        "name": "Metal Gear Solid works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Metal Gear Solid.",
        "description": "Primary works and adaptations through which most audiences encounter Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-symbols",
        "name": "Metal Gear Solid symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Metal Gear Solid.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-controversies",
        "name": "Metal Gear Solid controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Metal Gear Solid.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Metal Gear Solid argumentative."
    },
    {
        "slug": "metal-gear-solid-sources",
        "name": "Metal Gear Solid sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Metal Gear Solid.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-geography",
        "name": "Metal Gear Solid geography",
        "type": "place",
        "short_description": "Broader geographic framing for Metal Gear Solid.",
        "description": "Regions, routes, and spatial systems that situate Metal Gear Solid beyond single named places."
    },
    {
        "slug": "metal-gear-solid-legacy",
        "name": "Metal Gear Solid legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Metal Gear Solid.",
        "description": "How Metal Gear Solid continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "metal-gear-solid-practices",
        "name": "Metal Gear Solid practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Metal Gear Solid.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Metal Gear Solid."
    },
    {
        "slug": "metal-gear-solid-entry-1",
        "name": "Metal Gear Solid entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-2",
        "name": "Metal Gear Solid entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-3",
        "name": "Metal Gear Solid entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-4",
        "name": "Metal Gear Solid entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-5",
        "name": "Metal Gear Solid entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-6",
        "name": "Metal Gear Solid entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-7",
        "name": "Metal Gear Solid entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-8",
        "name": "Metal Gear Solid entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-9",
        "name": "Metal Gear Solid entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-10",
        "name": "Metal Gear Solid entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-11",
        "name": "Metal Gear Solid entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-12",
        "name": "Metal Gear Solid entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-13",
        "name": "Metal Gear Solid entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-14",
        "name": "Metal Gear Solid entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-15",
        "name": "Metal Gear Solid entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-16",
        "name": "Metal Gear Solid entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-17",
        "name": "Metal Gear Solid entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-18",
        "name": "Metal Gear Solid entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-19",
        "name": "Metal Gear Solid entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-20",
        "name": "Metal Gear Solid entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-21",
        "name": "Metal Gear Solid entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-22",
        "name": "Metal Gear Solid entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-23",
        "name": "Metal Gear Solid entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metal-gear-solid-entry-24",
        "name": "Metal Gear Solid entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metal Gear Solid.",
        "description": "A supporting encyclopedia entry in the Metal Gear Solid subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "metal-gear-solid",
        "metal-gear-solid-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-places",
        "contains",
        "Metal Gear Solid places is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-events",
        "contains",
        "Metal Gear Solid events is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-objects",
        "contains",
        "Metal Gear Solid objects & artifacts is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-factions",
        "contains",
        "Metal Gear Solid factions & groups is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-concepts",
        "contains",
        "Metal Gear Solid concepts is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-eras",
        "contains",
        "Metal Gear Solid eras is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-works",
        "contains",
        "Metal Gear Solid works & media is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-symbols",
        "contains",
        "Metal Gear Solid symbols is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-controversies",
        "contains",
        "Metal Gear Solid controversies is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-sources",
        "contains",
        "Metal Gear Solid sources is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-geography",
        "contains",
        "Metal Gear Solid geography is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-legacy",
        "contains",
        "Metal Gear Solid legacy is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-practices",
        "contains",
        "Metal Gear Solid practices is a primary trailhead under Metal Gear Solid.",
        0.88,
        0.82
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-1",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-2",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-3",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-4",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-5",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-6",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-7",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-8",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-9",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-10",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-11",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-12",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-13",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-14",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-15",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-16",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-17",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-18",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-19",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-20",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-21",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-22",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-23",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ],
    [
        "metal-gear-solid",
        "metal-gear-solid-entry-24",
        "contains",
        "Supporting entry under Metal Gear Solid.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
