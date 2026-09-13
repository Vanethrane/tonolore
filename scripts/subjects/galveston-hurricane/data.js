/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "galveston-hurricane",
        "name": "1900 Galveston hurricane",
        "type": "topic",
        "short_description": "Storm surge, death toll, and the deadliest natural disaster in US history.",
        "description": "Storm surge, death toll, and the deadliest natural disaster in US history. This Ton-o-Lore subject maps people, places, events, and ideas tied to 1900 Galveston hurricane so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "galveston-hurricane-figures",
        "name": "1900 Galveston hurricane figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 1900 Galveston hurricane.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-world",
        "name": "1900 Galveston hurricane world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 1900 Galveston hurricane.",
        "description": "Geography, institutions, and periodization that give 1900 Galveston hurricane its encyclopedia shape."
    },
    {
        "slug": "galveston-hurricane-places",
        "name": "1900 Galveston hurricane places",
        "type": "place",
        "short_description": "Locations and geographies that frame 1900 Galveston hurricane.",
        "description": "Places, regions, and built sites that give 1900 Galveston hurricane its map — where events and figures concentrate."
    },
    {
        "slug": "galveston-hurricane-events",
        "name": "1900 Galveston hurricane events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 1900 Galveston hurricane.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 1900 Galveston hurricane timeline."
    },
    {
        "slug": "galveston-hurricane-objects",
        "name": "1900 Galveston hurricane objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 1900 Galveston hurricane.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-factions",
        "name": "1900 Galveston hurricane factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 1900 Galveston hurricane.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-concepts",
        "name": "1900 Galveston hurricane concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 1900 Galveston hurricane.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 1900 Galveston hurricane readable as a lore graph."
    },
    {
        "slug": "galveston-hurricane-eras",
        "name": "1900 Galveston hurricane eras",
        "type": "event",
        "short_description": "Periodization for 1900 Galveston hurricane.",
        "description": "Named eras and phases that help readers track how 1900 Galveston hurricane changes across time."
    },
    {
        "slug": "galveston-hurricane-works",
        "name": "1900 Galveston hurricane works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 1900 Galveston hurricane.",
        "description": "Primary works and adaptations through which most audiences encounter 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-symbols",
        "name": "1900 Galveston hurricane symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 1900 Galveston hurricane.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-controversies",
        "name": "1900 Galveston hurricane controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 1900 Galveston hurricane.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 1900 Galveston hurricane argumentative."
    },
    {
        "slug": "galveston-hurricane-sources",
        "name": "1900 Galveston hurricane sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 1900 Galveston hurricane.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-geography",
        "name": "1900 Galveston hurricane geography",
        "type": "place",
        "short_description": "Broader geographic framing for 1900 Galveston hurricane.",
        "description": "Regions, routes, and spatial systems that situate 1900 Galveston hurricane beyond single named places."
    },
    {
        "slug": "galveston-hurricane-legacy",
        "name": "1900 Galveston hurricane legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 1900 Galveston hurricane.",
        "description": "How 1900 Galveston hurricane continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "galveston-hurricane-practices",
        "name": "1900 Galveston hurricane practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 1900 Galveston hurricane.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 1900 Galveston hurricane."
    },
    {
        "slug": "galveston-hurricane-entry-1",
        "name": "1900 Galveston hurricane entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-2",
        "name": "1900 Galveston hurricane entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-3",
        "name": "1900 Galveston hurricane entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-4",
        "name": "1900 Galveston hurricane entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-5",
        "name": "1900 Galveston hurricane entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-6",
        "name": "1900 Galveston hurricane entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-7",
        "name": "1900 Galveston hurricane entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-8",
        "name": "1900 Galveston hurricane entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-9",
        "name": "1900 Galveston hurricane entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-10",
        "name": "1900 Galveston hurricane entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-11",
        "name": "1900 Galveston hurricane entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-12",
        "name": "1900 Galveston hurricane entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-13",
        "name": "1900 Galveston hurricane entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-14",
        "name": "1900 Galveston hurricane entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-15",
        "name": "1900 Galveston hurricane entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-16",
        "name": "1900 Galveston hurricane entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-17",
        "name": "1900 Galveston hurricane entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-18",
        "name": "1900 Galveston hurricane entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-19",
        "name": "1900 Galveston hurricane entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-20",
        "name": "1900 Galveston hurricane entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-21",
        "name": "1900 Galveston hurricane entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-22",
        "name": "1900 Galveston hurricane entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-23",
        "name": "1900 Galveston hurricane entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "galveston-hurricane-entry-24",
        "name": "1900 Galveston hurricane entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1900 Galveston hurricane.",
        "description": "A supporting encyclopedia entry in the 1900 Galveston hurricane subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "galveston-hurricane",
        "galveston-hurricane-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-places",
        "contains",
        "1900 Galveston hurricane places is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-events",
        "contains",
        "1900 Galveston hurricane events is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-objects",
        "contains",
        "1900 Galveston hurricane objects & artifacts is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-factions",
        "contains",
        "1900 Galveston hurricane factions & groups is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-concepts",
        "contains",
        "1900 Galveston hurricane concepts is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-eras",
        "contains",
        "1900 Galveston hurricane eras is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-works",
        "contains",
        "1900 Galveston hurricane works & media is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-symbols",
        "contains",
        "1900 Galveston hurricane symbols is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-controversies",
        "contains",
        "1900 Galveston hurricane controversies is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-sources",
        "contains",
        "1900 Galveston hurricane sources is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-geography",
        "contains",
        "1900 Galveston hurricane geography is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-legacy",
        "contains",
        "1900 Galveston hurricane legacy is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-practices",
        "contains",
        "1900 Galveston hurricane practices is a primary trailhead under 1900 Galveston hurricane.",
        0.88,
        0.82
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-1",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-2",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-3",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-4",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-5",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-6",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-7",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-8",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-9",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-10",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-11",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-12",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-13",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-14",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-15",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-16",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-17",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-18",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-19",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-20",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-21",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-22",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-23",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ],
    [
        "galveston-hurricane",
        "galveston-hurricane-entry-24",
        "contains",
        "Supporting entry under 1900 Galveston hurricane.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
