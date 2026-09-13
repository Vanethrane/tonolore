/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ring-franchise",
        "name": "The Ring / Ringu",
        "type": "topic",
        "short_description": "Cursed videotape, Sadako/Samara, and the J-horror contagion that crossed the Pacific.",
        "description": "Cursed videotape, Sadako/Samara, and the J-horror contagion that crossed the Pacific. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Ring / Ringu so readers can follow long-tail connections across horror."
    },
    {
        "slug": "ring-franchise-figures",
        "name": "The Ring / Ringu figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Ring / Ringu.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-world",
        "name": "The Ring / Ringu world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Ring / Ringu.",
        "description": "Geography, institutions, and periodization that give The Ring / Ringu its encyclopedia shape."
    },
    {
        "slug": "ring-franchise-places",
        "name": "The Ring / Ringu places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Ring / Ringu.",
        "description": "Places, regions, and built sites that give The Ring / Ringu its map — where events and figures concentrate."
    },
    {
        "slug": "ring-franchise-events",
        "name": "The Ring / Ringu events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Ring / Ringu.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Ring / Ringu timeline."
    },
    {
        "slug": "ring-franchise-objects",
        "name": "The Ring / Ringu objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Ring / Ringu.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-factions",
        "name": "The Ring / Ringu factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Ring / Ringu.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-concepts",
        "name": "The Ring / Ringu concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Ring / Ringu.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Ring / Ringu readable as a lore graph."
    },
    {
        "slug": "ring-franchise-eras",
        "name": "The Ring / Ringu eras",
        "type": "event",
        "short_description": "Periodization for The Ring / Ringu.",
        "description": "Named eras and phases that help readers track how The Ring / Ringu changes across time."
    },
    {
        "slug": "ring-franchise-works",
        "name": "The Ring / Ringu works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Ring / Ringu.",
        "description": "Primary works and adaptations through which most audiences encounter The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-symbols",
        "name": "The Ring / Ringu symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Ring / Ringu.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-controversies",
        "name": "The Ring / Ringu controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Ring / Ringu.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Ring / Ringu argumentative."
    },
    {
        "slug": "ring-franchise-sources",
        "name": "The Ring / Ringu sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Ring / Ringu.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-geography",
        "name": "The Ring / Ringu geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Ring / Ringu.",
        "description": "Regions, routes, and spatial systems that situate The Ring / Ringu beyond single named places."
    },
    {
        "slug": "ring-franchise-legacy",
        "name": "The Ring / Ringu legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Ring / Ringu.",
        "description": "How The Ring / Ringu continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ring-franchise-practices",
        "name": "The Ring / Ringu practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Ring / Ringu.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Ring / Ringu."
    },
    {
        "slug": "ring-franchise-entry-1",
        "name": "The Ring / Ringu entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-2",
        "name": "The Ring / Ringu entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-3",
        "name": "The Ring / Ringu entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-4",
        "name": "The Ring / Ringu entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-5",
        "name": "The Ring / Ringu entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-6",
        "name": "The Ring / Ringu entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-7",
        "name": "The Ring / Ringu entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-8",
        "name": "The Ring / Ringu entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-9",
        "name": "The Ring / Ringu entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-10",
        "name": "The Ring / Ringu entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-11",
        "name": "The Ring / Ringu entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-12",
        "name": "The Ring / Ringu entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-13",
        "name": "The Ring / Ringu entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-14",
        "name": "The Ring / Ringu entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-15",
        "name": "The Ring / Ringu entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-16",
        "name": "The Ring / Ringu entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-17",
        "name": "The Ring / Ringu entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-18",
        "name": "The Ring / Ringu entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-19",
        "name": "The Ring / Ringu entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-20",
        "name": "The Ring / Ringu entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-21",
        "name": "The Ring / Ringu entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-22",
        "name": "The Ring / Ringu entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-23",
        "name": "The Ring / Ringu entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ring-franchise-entry-24",
        "name": "The Ring / Ringu entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Ring / Ringu.",
        "description": "A supporting encyclopedia entry in the The Ring / Ringu subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ring-franchise",
        "ring-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ring-franchise",
        "ring-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ring-franchise",
        "ring-franchise-places",
        "contains",
        "The Ring / Ringu places is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-events",
        "contains",
        "The Ring / Ringu events is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-objects",
        "contains",
        "The Ring / Ringu objects & artifacts is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-factions",
        "contains",
        "The Ring / Ringu factions & groups is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-concepts",
        "contains",
        "The Ring / Ringu concepts is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-eras",
        "contains",
        "The Ring / Ringu eras is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-works",
        "contains",
        "The Ring / Ringu works & media is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-symbols",
        "contains",
        "The Ring / Ringu symbols is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-controversies",
        "contains",
        "The Ring / Ringu controversies is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-sources",
        "contains",
        "The Ring / Ringu sources is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-geography",
        "contains",
        "The Ring / Ringu geography is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-legacy",
        "contains",
        "The Ring / Ringu legacy is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-practices",
        "contains",
        "The Ring / Ringu practices is a primary trailhead under The Ring / Ringu.",
        0.88,
        0.82
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-1",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-2",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-3",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-4",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-5",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-6",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-7",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-8",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-9",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-10",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-11",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-12",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-13",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-14",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-15",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-16",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-17",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-18",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-19",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-20",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-21",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-22",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-23",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ],
    [
        "ring-franchise",
        "ring-franchise-entry-24",
        "contains",
        "Supporting entry under The Ring / Ringu.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
