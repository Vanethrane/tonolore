/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ocean-liners",
        "name": "Ocean liners",
        "type": "topic",
        "short_description": "Floating palaces, immigrant crossings, and the steam-to-diesel age of passenger ships.",
        "description": "Floating palaces, immigrant crossings, and the steam-to-diesel age of passenger ships. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ocean liners so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "ocean-liners-figures",
        "name": "Ocean liners figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ocean liners.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ocean liners."
    },
    {
        "slug": "ocean-liners-world",
        "name": "Ocean liners world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ocean liners.",
        "description": "Geography, institutions, and periodization that give Ocean liners its encyclopedia shape."
    },
    {
        "slug": "ocean-liners-places",
        "name": "Ocean liners places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ocean liners.",
        "description": "Places, regions, and built sites that give Ocean liners its map — where events and figures concentrate."
    },
    {
        "slug": "ocean-liners-events",
        "name": "Ocean liners events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ocean liners.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ocean liners timeline."
    },
    {
        "slug": "ocean-liners-objects",
        "name": "Ocean liners objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ocean liners.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ocean liners."
    },
    {
        "slug": "ocean-liners-factions",
        "name": "Ocean liners factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ocean liners.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ocean liners."
    },
    {
        "slug": "ocean-liners-concepts",
        "name": "Ocean liners concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ocean liners.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ocean liners readable as a lore graph."
    },
    {
        "slug": "ocean-liners-eras",
        "name": "Ocean liners eras",
        "type": "event",
        "short_description": "Periodization for Ocean liners.",
        "description": "Named eras and phases that help readers track how Ocean liners changes across time."
    },
    {
        "slug": "ocean-liners-works",
        "name": "Ocean liners works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ocean liners.",
        "description": "Primary works and adaptations through which most audiences encounter Ocean liners."
    },
    {
        "slug": "ocean-liners-symbols",
        "name": "Ocean liners symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ocean liners.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ocean liners."
    },
    {
        "slug": "ocean-liners-controversies",
        "name": "Ocean liners controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ocean liners.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ocean liners argumentative."
    },
    {
        "slug": "ocean-liners-sources",
        "name": "Ocean liners sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ocean liners.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ocean liners."
    },
    {
        "slug": "ocean-liners-geography",
        "name": "Ocean liners geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ocean liners.",
        "description": "Regions, routes, and spatial systems that situate Ocean liners beyond single named places."
    },
    {
        "slug": "ocean-liners-legacy",
        "name": "Ocean liners legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ocean liners.",
        "description": "How Ocean liners continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ocean-liners-practices",
        "name": "Ocean liners practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ocean liners.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ocean liners."
    },
    {
        "slug": "ocean-liners-entry-1",
        "name": "Ocean liners entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-2",
        "name": "Ocean liners entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-3",
        "name": "Ocean liners entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-4",
        "name": "Ocean liners entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-5",
        "name": "Ocean liners entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-6",
        "name": "Ocean liners entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-7",
        "name": "Ocean liners entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-8",
        "name": "Ocean liners entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-9",
        "name": "Ocean liners entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-10",
        "name": "Ocean liners entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-11",
        "name": "Ocean liners entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-12",
        "name": "Ocean liners entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-13",
        "name": "Ocean liners entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-14",
        "name": "Ocean liners entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-15",
        "name": "Ocean liners entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-16",
        "name": "Ocean liners entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-17",
        "name": "Ocean liners entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-18",
        "name": "Ocean liners entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-19",
        "name": "Ocean liners entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-20",
        "name": "Ocean liners entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-21",
        "name": "Ocean liners entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-22",
        "name": "Ocean liners entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-23",
        "name": "Ocean liners entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ocean-liners-entry-24",
        "name": "Ocean liners entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ocean liners.",
        "description": "A supporting encyclopedia entry in the Ocean liners subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ocean-liners",
        "ocean-liners-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ocean-liners",
        "ocean-liners-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ocean-liners",
        "ocean-liners-places",
        "contains",
        "Ocean liners places is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-events",
        "contains",
        "Ocean liners events is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-objects",
        "contains",
        "Ocean liners objects & artifacts is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-factions",
        "contains",
        "Ocean liners factions & groups is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-concepts",
        "contains",
        "Ocean liners concepts is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-eras",
        "contains",
        "Ocean liners eras is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-works",
        "contains",
        "Ocean liners works & media is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-symbols",
        "contains",
        "Ocean liners symbols is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-controversies",
        "contains",
        "Ocean liners controversies is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-sources",
        "contains",
        "Ocean liners sources is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-geography",
        "contains",
        "Ocean liners geography is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-legacy",
        "contains",
        "Ocean liners legacy is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-practices",
        "contains",
        "Ocean liners practices is a primary trailhead under Ocean liners.",
        0.88,
        0.82
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-1",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-2",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-3",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-4",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-5",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-6",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-7",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-8",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-9",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-10",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-11",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-12",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-13",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-14",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-15",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-16",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-17",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-18",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-19",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-20",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-21",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-22",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-23",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ],
    [
        "ocean-liners",
        "ocean-liners-entry-24",
        "contains",
        "Supporting entry under Ocean liners.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
