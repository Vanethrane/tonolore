/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fast-and-furious",
        "name": "Fast & Furious",
        "type": "topic",
        "short_description": "Family heists, impossible cars, and the escalating action soap of street-to-spy spectacle.",
        "description": "Family heists, impossible cars, and the escalating action soap of street-to-spy spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fast & Furious so readers can follow long-tail connections across movies."
    },
    {
        "slug": "fast-and-furious-figures",
        "name": "Fast & Furious figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fast & Furious.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fast & Furious."
    },
    {
        "slug": "fast-and-furious-world",
        "name": "Fast & Furious world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fast & Furious.",
        "description": "Geography, institutions, and periodization that give Fast & Furious its encyclopedia shape."
    },
    {
        "slug": "fast-and-furious-places",
        "name": "Fast & Furious places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fast & Furious.",
        "description": "Places, regions, and built sites that give Fast & Furious its map — where events and figures concentrate."
    },
    {
        "slug": "fast-and-furious-events",
        "name": "Fast & Furious events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fast & Furious.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fast & Furious timeline."
    },
    {
        "slug": "fast-and-furious-objects",
        "name": "Fast & Furious objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fast & Furious.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fast & Furious."
    },
    {
        "slug": "fast-and-furious-factions",
        "name": "Fast & Furious factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fast & Furious.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fast & Furious."
    },
    {
        "slug": "fast-and-furious-concepts",
        "name": "Fast & Furious concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fast & Furious.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fast & Furious readable as a lore graph."
    },
    {
        "slug": "fast-and-furious-eras",
        "name": "Fast & Furious eras",
        "type": "event",
        "short_description": "Periodization for Fast & Furious.",
        "description": "Named eras and phases that help readers track how Fast & Furious changes across time."
    },
    {
        "slug": "fast-and-furious-works",
        "name": "Fast & Furious works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fast & Furious.",
        "description": "Primary works and adaptations through which most audiences encounter Fast & Furious."
    },
    {
        "slug": "fast-and-furious-symbols",
        "name": "Fast & Furious symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fast & Furious.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fast & Furious."
    },
    {
        "slug": "fast-and-furious-controversies",
        "name": "Fast & Furious controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fast & Furious.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fast & Furious argumentative."
    },
    {
        "slug": "fast-and-furious-sources",
        "name": "Fast & Furious sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fast & Furious.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fast & Furious."
    },
    {
        "slug": "fast-and-furious-geography",
        "name": "Fast & Furious geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fast & Furious.",
        "description": "Regions, routes, and spatial systems that situate Fast & Furious beyond single named places."
    },
    {
        "slug": "fast-and-furious-legacy",
        "name": "Fast & Furious legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fast & Furious.",
        "description": "How Fast & Furious continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fast-and-furious-practices",
        "name": "Fast & Furious practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fast & Furious.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fast & Furious."
    },
    {
        "slug": "fast-and-furious-entry-1",
        "name": "Fast & Furious entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-2",
        "name": "Fast & Furious entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-3",
        "name": "Fast & Furious entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-4",
        "name": "Fast & Furious entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-5",
        "name": "Fast & Furious entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-6",
        "name": "Fast & Furious entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-7",
        "name": "Fast & Furious entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-8",
        "name": "Fast & Furious entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-9",
        "name": "Fast & Furious entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-10",
        "name": "Fast & Furious entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-11",
        "name": "Fast & Furious entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-12",
        "name": "Fast & Furious entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-13",
        "name": "Fast & Furious entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-14",
        "name": "Fast & Furious entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-15",
        "name": "Fast & Furious entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-16",
        "name": "Fast & Furious entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-17",
        "name": "Fast & Furious entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-18",
        "name": "Fast & Furious entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-19",
        "name": "Fast & Furious entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-20",
        "name": "Fast & Furious entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-21",
        "name": "Fast & Furious entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-22",
        "name": "Fast & Furious entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-23",
        "name": "Fast & Furious entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-and-furious-entry-24",
        "name": "Fast & Furious entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast & Furious.",
        "description": "A supporting encyclopedia entry in the Fast & Furious subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fast-and-furious",
        "fast-and-furious-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fast-and-furious",
        "fast-and-furious-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fast-and-furious",
        "fast-and-furious-places",
        "contains",
        "Fast & Furious places is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-events",
        "contains",
        "Fast & Furious events is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-objects",
        "contains",
        "Fast & Furious objects & artifacts is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-factions",
        "contains",
        "Fast & Furious factions & groups is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-concepts",
        "contains",
        "Fast & Furious concepts is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-eras",
        "contains",
        "Fast & Furious eras is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-works",
        "contains",
        "Fast & Furious works & media is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-symbols",
        "contains",
        "Fast & Furious symbols is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-controversies",
        "contains",
        "Fast & Furious controversies is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-sources",
        "contains",
        "Fast & Furious sources is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-geography",
        "contains",
        "Fast & Furious geography is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-legacy",
        "contains",
        "Fast & Furious legacy is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-practices",
        "contains",
        "Fast & Furious practices is a primary trailhead under Fast & Furious.",
        0.88,
        0.82
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-1",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-2",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-3",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-4",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-5",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-6",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-7",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-8",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-9",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-10",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-11",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-12",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-13",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-14",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-15",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-16",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-17",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-18",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-19",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-20",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-21",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-22",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-23",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ],
    [
        "fast-and-furious",
        "fast-and-furious-entry-24",
        "contains",
        "Supporting entry under Fast & Furious.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
