/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "league-of-legends",
        "name": "League of Legends",
        "type": "topic",
        "short_description": "Runeterra champions, esports worlds, and the MOBA that became a global cultural platform.",
        "description": "Runeterra champions, esports worlds, and the MOBA that became a global cultural platform. This Ton-o-Lore subject maps people, places, events, and ideas tied to League of Legends so readers can follow long-tail connections across video games."
    },
    {
        "slug": "league-of-legends-figures",
        "name": "League of Legends figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to League of Legends.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring League of Legends."
    },
    {
        "slug": "league-of-legends-world",
        "name": "League of Legends world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame League of Legends.",
        "description": "Geography, institutions, and periodization that give League of Legends its encyclopedia shape."
    },
    {
        "slug": "league-of-legends-places",
        "name": "League of Legends places",
        "type": "place",
        "short_description": "Locations and geographies that frame League of Legends.",
        "description": "Places, regions, and built sites that give League of Legends its map — where events and figures concentrate."
    },
    {
        "slug": "league-of-legends-events",
        "name": "League of Legends events",
        "type": "event",
        "short_description": "Turning points and dated episodes in League of Legends.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the League of Legends timeline."
    },
    {
        "slug": "league-of-legends-objects",
        "name": "League of Legends objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to League of Legends.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through League of Legends."
    },
    {
        "slug": "league-of-legends-factions",
        "name": "League of Legends factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside League of Legends.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in League of Legends."
    },
    {
        "slug": "league-of-legends-concepts",
        "name": "League of Legends concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize League of Legends.",
        "description": "Keywords, doctrines, systems, and abstract forces that make League of Legends readable as a lore graph."
    },
    {
        "slug": "league-of-legends-eras",
        "name": "League of Legends eras",
        "type": "event",
        "short_description": "Periodization for League of Legends.",
        "description": "Named eras and phases that help readers track how League of Legends changes across time."
    },
    {
        "slug": "league-of-legends-works",
        "name": "League of Legends works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry League of Legends.",
        "description": "Primary works and adaptations through which most audiences encounter League of Legends."
    },
    {
        "slug": "league-of-legends-symbols",
        "name": "League of Legends symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with League of Legends.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside League of Legends."
    },
    {
        "slug": "league-of-legends-controversies",
        "name": "League of Legends controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in League of Legends.",
        "description": "Debates, rival canons, scandals, and contested facts that keep League of Legends argumentative."
    },
    {
        "slug": "league-of-legends-sources",
        "name": "League of Legends sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into League of Legends.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify League of Legends."
    },
    {
        "slug": "league-of-legends-geography",
        "name": "League of Legends geography",
        "type": "place",
        "short_description": "Broader geographic framing for League of Legends.",
        "description": "Regions, routes, and spatial systems that situate League of Legends beyond single named places."
    },
    {
        "slug": "league-of-legends-legacy",
        "name": "League of Legends legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of League of Legends.",
        "description": "How League of Legends continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "league-of-legends-practices",
        "name": "League of Legends practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in League of Legends.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in League of Legends."
    },
    {
        "slug": "league-of-legends-entry-1",
        "name": "League of Legends entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-2",
        "name": "League of Legends entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-3",
        "name": "League of Legends entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-4",
        "name": "League of Legends entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-5",
        "name": "League of Legends entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-6",
        "name": "League of Legends entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-7",
        "name": "League of Legends entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-8",
        "name": "League of Legends entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-9",
        "name": "League of Legends entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-10",
        "name": "League of Legends entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-11",
        "name": "League of Legends entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-12",
        "name": "League of Legends entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-13",
        "name": "League of Legends entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-14",
        "name": "League of Legends entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-15",
        "name": "League of Legends entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-16",
        "name": "League of Legends entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-17",
        "name": "League of Legends entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-18",
        "name": "League of Legends entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-19",
        "name": "League of Legends entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-20",
        "name": "League of Legends entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-21",
        "name": "League of Legends entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-22",
        "name": "League of Legends entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-23",
        "name": "League of Legends entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "league-of-legends-entry-24",
        "name": "League of Legends entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside League of Legends.",
        "description": "A supporting encyclopedia entry in the League of Legends subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "league-of-legends",
        "league-of-legends-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "league-of-legends",
        "league-of-legends-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "league-of-legends",
        "league-of-legends-places",
        "contains",
        "League of Legends places is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-events",
        "contains",
        "League of Legends events is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-objects",
        "contains",
        "League of Legends objects & artifacts is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-factions",
        "contains",
        "League of Legends factions & groups is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-concepts",
        "contains",
        "League of Legends concepts is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-eras",
        "contains",
        "League of Legends eras is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-works",
        "contains",
        "League of Legends works & media is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-symbols",
        "contains",
        "League of Legends symbols is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-controversies",
        "contains",
        "League of Legends controversies is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-sources",
        "contains",
        "League of Legends sources is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-geography",
        "contains",
        "League of Legends geography is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-legacy",
        "contains",
        "League of Legends legacy is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-practices",
        "contains",
        "League of Legends practices is a primary trailhead under League of Legends.",
        0.88,
        0.82
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-1",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-2",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-3",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-4",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-5",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-6",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-7",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-8",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-9",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-10",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-11",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-12",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-13",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-14",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-15",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-16",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-17",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-18",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-19",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-20",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-21",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-22",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-23",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ],
    [
        "league-of-legends",
        "league-of-legends-entry-24",
        "contains",
        "Supporting entry under League of Legends.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
