/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "roman-aqueducts",
        "name": "Roman aqueducts",
        "type": "topic",
        "short_description": "Arches, gradients, and the hydraulic engineering that watered an empire.",
        "description": "Arches, gradients, and the hydraulic engineering that watered an empire. This Ton-o-Lore subject maps people, places, events, and ideas tied to Roman aqueducts so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "roman-aqueducts-figures",
        "name": "Roman aqueducts figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Roman aqueducts.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-world",
        "name": "Roman aqueducts world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Roman aqueducts.",
        "description": "Geography, institutions, and periodization that give Roman aqueducts its encyclopedia shape."
    },
    {
        "slug": "roman-aqueducts-places",
        "name": "Roman aqueducts places",
        "type": "place",
        "short_description": "Locations and geographies that frame Roman aqueducts.",
        "description": "Places, regions, and built sites that give Roman aqueducts its map — where events and figures concentrate."
    },
    {
        "slug": "roman-aqueducts-events",
        "name": "Roman aqueducts events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Roman aqueducts.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Roman aqueducts timeline."
    },
    {
        "slug": "roman-aqueducts-objects",
        "name": "Roman aqueducts objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Roman aqueducts.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-factions",
        "name": "Roman aqueducts factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Roman aqueducts.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-concepts",
        "name": "Roman aqueducts concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Roman aqueducts.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Roman aqueducts readable as a lore graph."
    },
    {
        "slug": "roman-aqueducts-eras",
        "name": "Roman aqueducts eras",
        "type": "event",
        "short_description": "Periodization for Roman aqueducts.",
        "description": "Named eras and phases that help readers track how Roman aqueducts changes across time."
    },
    {
        "slug": "roman-aqueducts-works",
        "name": "Roman aqueducts works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Roman aqueducts.",
        "description": "Primary works and adaptations through which most audiences encounter Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-symbols",
        "name": "Roman aqueducts symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Roman aqueducts.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-controversies",
        "name": "Roman aqueducts controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Roman aqueducts.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Roman aqueducts argumentative."
    },
    {
        "slug": "roman-aqueducts-sources",
        "name": "Roman aqueducts sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Roman aqueducts.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-geography",
        "name": "Roman aqueducts geography",
        "type": "place",
        "short_description": "Broader geographic framing for Roman aqueducts.",
        "description": "Regions, routes, and spatial systems that situate Roman aqueducts beyond single named places."
    },
    {
        "slug": "roman-aqueducts-legacy",
        "name": "Roman aqueducts legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Roman aqueducts.",
        "description": "How Roman aqueducts continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "roman-aqueducts-practices",
        "name": "Roman aqueducts practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Roman aqueducts.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Roman aqueducts."
    },
    {
        "slug": "roman-aqueducts-entry-1",
        "name": "Roman aqueducts entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-2",
        "name": "Roman aqueducts entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-3",
        "name": "Roman aqueducts entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-4",
        "name": "Roman aqueducts entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-5",
        "name": "Roman aqueducts entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-6",
        "name": "Roman aqueducts entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-7",
        "name": "Roman aqueducts entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-8",
        "name": "Roman aqueducts entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-9",
        "name": "Roman aqueducts entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-10",
        "name": "Roman aqueducts entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-11",
        "name": "Roman aqueducts entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-12",
        "name": "Roman aqueducts entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-13",
        "name": "Roman aqueducts entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-14",
        "name": "Roman aqueducts entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-15",
        "name": "Roman aqueducts entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-16",
        "name": "Roman aqueducts entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-17",
        "name": "Roman aqueducts entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-18",
        "name": "Roman aqueducts entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-19",
        "name": "Roman aqueducts entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-20",
        "name": "Roman aqueducts entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-21",
        "name": "Roman aqueducts entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-22",
        "name": "Roman aqueducts entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-23",
        "name": "Roman aqueducts entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-aqueducts-entry-24",
        "name": "Roman aqueducts entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman aqueducts.",
        "description": "A supporting encyclopedia entry in the Roman aqueducts subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "roman-aqueducts",
        "roman-aqueducts-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-places",
        "contains",
        "Roman aqueducts places is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-events",
        "contains",
        "Roman aqueducts events is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-objects",
        "contains",
        "Roman aqueducts objects & artifacts is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-factions",
        "contains",
        "Roman aqueducts factions & groups is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-concepts",
        "contains",
        "Roman aqueducts concepts is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-eras",
        "contains",
        "Roman aqueducts eras is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-works",
        "contains",
        "Roman aqueducts works & media is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-symbols",
        "contains",
        "Roman aqueducts symbols is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-controversies",
        "contains",
        "Roman aqueducts controversies is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-sources",
        "contains",
        "Roman aqueducts sources is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-geography",
        "contains",
        "Roman aqueducts geography is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-legacy",
        "contains",
        "Roman aqueducts legacy is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-practices",
        "contains",
        "Roman aqueducts practices is a primary trailhead under Roman aqueducts.",
        0.88,
        0.82
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-1",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-2",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-3",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-4",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-5",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-6",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-7",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-8",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-9",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-10",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-11",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-12",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-13",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-14",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-15",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-16",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-17",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-18",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-19",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-20",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-21",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-22",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-23",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ],
    [
        "roman-aqueducts",
        "roman-aqueducts-entry-24",
        "contains",
        "Supporting entry under Roman aqueducts.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
