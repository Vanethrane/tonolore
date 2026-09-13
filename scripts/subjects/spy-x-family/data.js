/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spy-x-family",
        "name": "Spy x Family",
        "type": "topic",
        "short_description": "Fake family espionage comedy, Anya telepathy, and the breakout hit of cozy-stakes spy craft.",
        "description": "Fake family espionage comedy, Anya telepathy, and the breakout hit of cozy-stakes spy craft. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spy x Family so readers can follow long-tail connections across anime."
    },
    {
        "slug": "spy-x-family-figures",
        "name": "Spy x Family figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spy x Family.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spy x Family."
    },
    {
        "slug": "spy-x-family-world",
        "name": "Spy x Family world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spy x Family.",
        "description": "Geography, institutions, and periodization that give Spy x Family its encyclopedia shape."
    },
    {
        "slug": "spy-x-family-places",
        "name": "Spy x Family places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spy x Family.",
        "description": "Places, regions, and built sites that give Spy x Family its map — where events and figures concentrate."
    },
    {
        "slug": "spy-x-family-events",
        "name": "Spy x Family events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spy x Family.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spy x Family timeline."
    },
    {
        "slug": "spy-x-family-objects",
        "name": "Spy x Family objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spy x Family.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spy x Family."
    },
    {
        "slug": "spy-x-family-factions",
        "name": "Spy x Family factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spy x Family.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spy x Family."
    },
    {
        "slug": "spy-x-family-concepts",
        "name": "Spy x Family concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spy x Family.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spy x Family readable as a lore graph."
    },
    {
        "slug": "spy-x-family-eras",
        "name": "Spy x Family eras",
        "type": "event",
        "short_description": "Periodization for Spy x Family.",
        "description": "Named eras and phases that help readers track how Spy x Family changes across time."
    },
    {
        "slug": "spy-x-family-works",
        "name": "Spy x Family works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spy x Family.",
        "description": "Primary works and adaptations through which most audiences encounter Spy x Family."
    },
    {
        "slug": "spy-x-family-symbols",
        "name": "Spy x Family symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spy x Family.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spy x Family."
    },
    {
        "slug": "spy-x-family-controversies",
        "name": "Spy x Family controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spy x Family.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spy x Family argumentative."
    },
    {
        "slug": "spy-x-family-sources",
        "name": "Spy x Family sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spy x Family.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spy x Family."
    },
    {
        "slug": "spy-x-family-geography",
        "name": "Spy x Family geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spy x Family.",
        "description": "Regions, routes, and spatial systems that situate Spy x Family beyond single named places."
    },
    {
        "slug": "spy-x-family-legacy",
        "name": "Spy x Family legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spy x Family.",
        "description": "How Spy x Family continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spy-x-family-practices",
        "name": "Spy x Family practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spy x Family.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spy x Family."
    },
    {
        "slug": "spy-x-family-entry-1",
        "name": "Spy x Family entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-2",
        "name": "Spy x Family entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-3",
        "name": "Spy x Family entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-4",
        "name": "Spy x Family entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-5",
        "name": "Spy x Family entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-6",
        "name": "Spy x Family entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-7",
        "name": "Spy x Family entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-8",
        "name": "Spy x Family entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-9",
        "name": "Spy x Family entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-10",
        "name": "Spy x Family entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-11",
        "name": "Spy x Family entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-12",
        "name": "Spy x Family entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-13",
        "name": "Spy x Family entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-14",
        "name": "Spy x Family entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-15",
        "name": "Spy x Family entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-16",
        "name": "Spy x Family entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-17",
        "name": "Spy x Family entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-18",
        "name": "Spy x Family entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-19",
        "name": "Spy x Family entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-20",
        "name": "Spy x Family entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-21",
        "name": "Spy x Family entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-22",
        "name": "Spy x Family entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-23",
        "name": "Spy x Family entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spy-x-family-entry-24",
        "name": "Spy x Family entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spy x Family.",
        "description": "A supporting encyclopedia entry in the Spy x Family subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spy-x-family",
        "spy-x-family-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spy-x-family",
        "spy-x-family-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spy-x-family",
        "spy-x-family-places",
        "contains",
        "Spy x Family places is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-events",
        "contains",
        "Spy x Family events is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-objects",
        "contains",
        "Spy x Family objects & artifacts is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-factions",
        "contains",
        "Spy x Family factions & groups is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-concepts",
        "contains",
        "Spy x Family concepts is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-eras",
        "contains",
        "Spy x Family eras is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-works",
        "contains",
        "Spy x Family works & media is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-symbols",
        "contains",
        "Spy x Family symbols is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-controversies",
        "contains",
        "Spy x Family controversies is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-sources",
        "contains",
        "Spy x Family sources is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-geography",
        "contains",
        "Spy x Family geography is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-legacy",
        "contains",
        "Spy x Family legacy is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-practices",
        "contains",
        "Spy x Family practices is a primary trailhead under Spy x Family.",
        0.88,
        0.82
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-1",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-2",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-3",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-4",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-5",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-6",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-7",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-8",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-9",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-10",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-11",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-12",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-13",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-14",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-15",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-16",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-17",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-18",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-19",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-20",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-21",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-22",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-23",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ],
    [
        "spy-x-family",
        "spy-x-family-entry-24",
        "contains",
        "Supporting entry under Spy x Family.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
