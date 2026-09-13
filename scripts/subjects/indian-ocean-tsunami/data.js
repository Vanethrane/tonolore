/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "indian-ocean-tsunami",
        "name": "2004 Indian Ocean tsunami",
        "type": "topic",
        "short_description": "Boxing Day waves, Aceh to Africa, and the megathrust disaster that remade warning systems.",
        "description": "Boxing Day waves, Aceh to Africa, and the megathrust disaster that remade warning systems. This Ton-o-Lore subject maps people, places, events, and ideas tied to 2004 Indian Ocean tsunami so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "indian-ocean-tsunami-figures",
        "name": "2004 Indian Ocean tsunami figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 2004 Indian Ocean tsunami.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-world",
        "name": "2004 Indian Ocean tsunami world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 2004 Indian Ocean tsunami.",
        "description": "Geography, institutions, and periodization that give 2004 Indian Ocean tsunami its encyclopedia shape."
    },
    {
        "slug": "indian-ocean-tsunami-places",
        "name": "2004 Indian Ocean tsunami places",
        "type": "place",
        "short_description": "Locations and geographies that frame 2004 Indian Ocean tsunami.",
        "description": "Places, regions, and built sites that give 2004 Indian Ocean tsunami its map — where events and figures concentrate."
    },
    {
        "slug": "indian-ocean-tsunami-events",
        "name": "2004 Indian Ocean tsunami events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 2004 Indian Ocean tsunami.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 2004 Indian Ocean tsunami timeline."
    },
    {
        "slug": "indian-ocean-tsunami-objects",
        "name": "2004 Indian Ocean tsunami objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 2004 Indian Ocean tsunami.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-factions",
        "name": "2004 Indian Ocean tsunami factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 2004 Indian Ocean tsunami.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-concepts",
        "name": "2004 Indian Ocean tsunami concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 2004 Indian Ocean tsunami.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 2004 Indian Ocean tsunami readable as a lore graph."
    },
    {
        "slug": "indian-ocean-tsunami-eras",
        "name": "2004 Indian Ocean tsunami eras",
        "type": "event",
        "short_description": "Periodization for 2004 Indian Ocean tsunami.",
        "description": "Named eras and phases that help readers track how 2004 Indian Ocean tsunami changes across time."
    },
    {
        "slug": "indian-ocean-tsunami-works",
        "name": "2004 Indian Ocean tsunami works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 2004 Indian Ocean tsunami.",
        "description": "Primary works and adaptations through which most audiences encounter 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-symbols",
        "name": "2004 Indian Ocean tsunami symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 2004 Indian Ocean tsunami.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-controversies",
        "name": "2004 Indian Ocean tsunami controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 2004 Indian Ocean tsunami.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 2004 Indian Ocean tsunami argumentative."
    },
    {
        "slug": "indian-ocean-tsunami-sources",
        "name": "2004 Indian Ocean tsunami sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 2004 Indian Ocean tsunami.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-geography",
        "name": "2004 Indian Ocean tsunami geography",
        "type": "place",
        "short_description": "Broader geographic framing for 2004 Indian Ocean tsunami.",
        "description": "Regions, routes, and spatial systems that situate 2004 Indian Ocean tsunami beyond single named places."
    },
    {
        "slug": "indian-ocean-tsunami-legacy",
        "name": "2004 Indian Ocean tsunami legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 2004 Indian Ocean tsunami.",
        "description": "How 2004 Indian Ocean tsunami continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "indian-ocean-tsunami-practices",
        "name": "2004 Indian Ocean tsunami practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 2004 Indian Ocean tsunami.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 2004 Indian Ocean tsunami."
    },
    {
        "slug": "indian-ocean-tsunami-entry-1",
        "name": "2004 Indian Ocean tsunami entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-2",
        "name": "2004 Indian Ocean tsunami entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-3",
        "name": "2004 Indian Ocean tsunami entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-4",
        "name": "2004 Indian Ocean tsunami entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-5",
        "name": "2004 Indian Ocean tsunami entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-6",
        "name": "2004 Indian Ocean tsunami entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-7",
        "name": "2004 Indian Ocean tsunami entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-8",
        "name": "2004 Indian Ocean tsunami entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-9",
        "name": "2004 Indian Ocean tsunami entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-10",
        "name": "2004 Indian Ocean tsunami entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-11",
        "name": "2004 Indian Ocean tsunami entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-12",
        "name": "2004 Indian Ocean tsunami entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-13",
        "name": "2004 Indian Ocean tsunami entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-14",
        "name": "2004 Indian Ocean tsunami entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-15",
        "name": "2004 Indian Ocean tsunami entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-16",
        "name": "2004 Indian Ocean tsunami entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-17",
        "name": "2004 Indian Ocean tsunami entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-18",
        "name": "2004 Indian Ocean tsunami entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-19",
        "name": "2004 Indian Ocean tsunami entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-20",
        "name": "2004 Indian Ocean tsunami entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-21",
        "name": "2004 Indian Ocean tsunami entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-22",
        "name": "2004 Indian Ocean tsunami entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-23",
        "name": "2004 Indian Ocean tsunami entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-ocean-tsunami-entry-24",
        "name": "2004 Indian Ocean tsunami entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 2004 Indian Ocean tsunami.",
        "description": "A supporting encyclopedia entry in the 2004 Indian Ocean tsunami subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-places",
        "contains",
        "2004 Indian Ocean tsunami places is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-events",
        "contains",
        "2004 Indian Ocean tsunami events is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-objects",
        "contains",
        "2004 Indian Ocean tsunami objects & artifacts is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-factions",
        "contains",
        "2004 Indian Ocean tsunami factions & groups is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-concepts",
        "contains",
        "2004 Indian Ocean tsunami concepts is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-eras",
        "contains",
        "2004 Indian Ocean tsunami eras is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-works",
        "contains",
        "2004 Indian Ocean tsunami works & media is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-symbols",
        "contains",
        "2004 Indian Ocean tsunami symbols is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-controversies",
        "contains",
        "2004 Indian Ocean tsunami controversies is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-sources",
        "contains",
        "2004 Indian Ocean tsunami sources is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-geography",
        "contains",
        "2004 Indian Ocean tsunami geography is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-legacy",
        "contains",
        "2004 Indian Ocean tsunami legacy is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-practices",
        "contains",
        "2004 Indian Ocean tsunami practices is a primary trailhead under 2004 Indian Ocean tsunami.",
        0.88,
        0.82
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-1",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-2",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-3",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-4",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-5",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-6",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-7",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-8",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-9",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-10",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-11",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-12",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-13",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-14",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-15",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-16",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-17",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-18",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-19",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-20",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-21",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-22",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-23",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ],
    [
        "indian-ocean-tsunami",
        "indian-ocean-tsunami-entry-24",
        "contains",
        "Supporting entry under 2004 Indian Ocean tsunami.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
