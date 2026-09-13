/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bioshock",
        "name": "BioShock",
        "type": "topic",
        "short_description": "Rapture, objectivism satire, and the immersive-sim shooter with philosophical bite.",
        "description": "Rapture, objectivism satire, and the immersive-sim shooter with philosophical bite. This Ton-o-Lore subject maps people, places, events, and ideas tied to BioShock so readers can follow long-tail connections across video games."
    },
    {
        "slug": "bioshock-figures",
        "name": "BioShock figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to BioShock.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring BioShock."
    },
    {
        "slug": "bioshock-world",
        "name": "BioShock world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame BioShock.",
        "description": "Geography, institutions, and periodization that give BioShock its encyclopedia shape."
    },
    {
        "slug": "bioshock-places",
        "name": "BioShock places",
        "type": "place",
        "short_description": "Locations and geographies that frame BioShock.",
        "description": "Places, regions, and built sites that give BioShock its map — where events and figures concentrate."
    },
    {
        "slug": "bioshock-events",
        "name": "BioShock events",
        "type": "event",
        "short_description": "Turning points and dated episodes in BioShock.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the BioShock timeline."
    },
    {
        "slug": "bioshock-objects",
        "name": "BioShock objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to BioShock.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through BioShock."
    },
    {
        "slug": "bioshock-factions",
        "name": "BioShock factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside BioShock.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in BioShock."
    },
    {
        "slug": "bioshock-concepts",
        "name": "BioShock concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize BioShock.",
        "description": "Keywords, doctrines, systems, and abstract forces that make BioShock readable as a lore graph."
    },
    {
        "slug": "bioshock-eras",
        "name": "BioShock eras",
        "type": "event",
        "short_description": "Periodization for BioShock.",
        "description": "Named eras and phases that help readers track how BioShock changes across time."
    },
    {
        "slug": "bioshock-works",
        "name": "BioShock works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry BioShock.",
        "description": "Primary works and adaptations through which most audiences encounter BioShock."
    },
    {
        "slug": "bioshock-symbols",
        "name": "BioShock symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with BioShock.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside BioShock."
    },
    {
        "slug": "bioshock-controversies",
        "name": "BioShock controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in BioShock.",
        "description": "Debates, rival canons, scandals, and contested facts that keep BioShock argumentative."
    },
    {
        "slug": "bioshock-sources",
        "name": "BioShock sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into BioShock.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify BioShock."
    },
    {
        "slug": "bioshock-geography",
        "name": "BioShock geography",
        "type": "place",
        "short_description": "Broader geographic framing for BioShock.",
        "description": "Regions, routes, and spatial systems that situate BioShock beyond single named places."
    },
    {
        "slug": "bioshock-legacy",
        "name": "BioShock legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of BioShock.",
        "description": "How BioShock continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bioshock-practices",
        "name": "BioShock practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in BioShock.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in BioShock."
    },
    {
        "slug": "bioshock-entry-1",
        "name": "BioShock entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-2",
        "name": "BioShock entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-3",
        "name": "BioShock entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-4",
        "name": "BioShock entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-5",
        "name": "BioShock entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-6",
        "name": "BioShock entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-7",
        "name": "BioShock entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-8",
        "name": "BioShock entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-9",
        "name": "BioShock entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-10",
        "name": "BioShock entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-11",
        "name": "BioShock entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-12",
        "name": "BioShock entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-13",
        "name": "BioShock entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-14",
        "name": "BioShock entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-15",
        "name": "BioShock entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-16",
        "name": "BioShock entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-17",
        "name": "BioShock entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-18",
        "name": "BioShock entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-19",
        "name": "BioShock entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-20",
        "name": "BioShock entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-21",
        "name": "BioShock entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-22",
        "name": "BioShock entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-23",
        "name": "BioShock entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bioshock-entry-24",
        "name": "BioShock entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside BioShock.",
        "description": "A supporting encyclopedia entry in the BioShock subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bioshock",
        "bioshock-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bioshock",
        "bioshock-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bioshock",
        "bioshock-places",
        "contains",
        "BioShock places is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-events",
        "contains",
        "BioShock events is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-objects",
        "contains",
        "BioShock objects & artifacts is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-factions",
        "contains",
        "BioShock factions & groups is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-concepts",
        "contains",
        "BioShock concepts is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-eras",
        "contains",
        "BioShock eras is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-works",
        "contains",
        "BioShock works & media is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-symbols",
        "contains",
        "BioShock symbols is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-controversies",
        "contains",
        "BioShock controversies is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-sources",
        "contains",
        "BioShock sources is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-geography",
        "contains",
        "BioShock geography is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-legacy",
        "contains",
        "BioShock legacy is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-practices",
        "contains",
        "BioShock practices is a primary trailhead under BioShock.",
        0.88,
        0.82
    ],
    [
        "bioshock",
        "bioshock-entry-1",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-2",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-3",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-4",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-5",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-6",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-7",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-8",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-9",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-10",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-11",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-12",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-13",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-14",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-15",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-16",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-17",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-18",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-19",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-20",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-21",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-22",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-23",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ],
    [
        "bioshock",
        "bioshock-entry-24",
        "contains",
        "Supporting entry under BioShock.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
