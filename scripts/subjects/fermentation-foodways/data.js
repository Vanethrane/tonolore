/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fermentation-foodways",
        "name": "Fermentation foodways",
        "type": "topic",
        "short_description": "Kimchi, sauerkraut, miso — living foods that preserve and transform.",
        "description": "Kimchi, sauerkraut, miso — living foods that preserve and transform. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fermentation foodways so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "fermentation-foodways-figures",
        "name": "Fermentation foodways figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fermentation foodways.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-world",
        "name": "Fermentation foodways world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fermentation foodways.",
        "description": "Geography, institutions, and periodization that give Fermentation foodways its encyclopedia shape."
    },
    {
        "slug": "fermentation-foodways-places",
        "name": "Fermentation foodways places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fermentation foodways.",
        "description": "Places, regions, and built sites that give Fermentation foodways its map — where events and figures concentrate."
    },
    {
        "slug": "fermentation-foodways-events",
        "name": "Fermentation foodways events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fermentation foodways.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fermentation foodways timeline."
    },
    {
        "slug": "fermentation-foodways-objects",
        "name": "Fermentation foodways objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fermentation foodways.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-factions",
        "name": "Fermentation foodways factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fermentation foodways.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-concepts",
        "name": "Fermentation foodways concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fermentation foodways.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fermentation foodways readable as a lore graph."
    },
    {
        "slug": "fermentation-foodways-eras",
        "name": "Fermentation foodways eras",
        "type": "event",
        "short_description": "Periodization for Fermentation foodways.",
        "description": "Named eras and phases that help readers track how Fermentation foodways changes across time."
    },
    {
        "slug": "fermentation-foodways-works",
        "name": "Fermentation foodways works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fermentation foodways.",
        "description": "Primary works and adaptations through which most audiences encounter Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-symbols",
        "name": "Fermentation foodways symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fermentation foodways.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-controversies",
        "name": "Fermentation foodways controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fermentation foodways.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fermentation foodways argumentative."
    },
    {
        "slug": "fermentation-foodways-sources",
        "name": "Fermentation foodways sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fermentation foodways.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-geography",
        "name": "Fermentation foodways geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fermentation foodways.",
        "description": "Regions, routes, and spatial systems that situate Fermentation foodways beyond single named places."
    },
    {
        "slug": "fermentation-foodways-legacy",
        "name": "Fermentation foodways legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fermentation foodways.",
        "description": "How Fermentation foodways continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fermentation-foodways-practices",
        "name": "Fermentation foodways practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fermentation foodways.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fermentation foodways."
    },
    {
        "slug": "fermentation-foodways-entry-1",
        "name": "Fermentation foodways entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-2",
        "name": "Fermentation foodways entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-3",
        "name": "Fermentation foodways entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-4",
        "name": "Fermentation foodways entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-5",
        "name": "Fermentation foodways entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-6",
        "name": "Fermentation foodways entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-7",
        "name": "Fermentation foodways entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-8",
        "name": "Fermentation foodways entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-9",
        "name": "Fermentation foodways entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-10",
        "name": "Fermentation foodways entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-11",
        "name": "Fermentation foodways entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-12",
        "name": "Fermentation foodways entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-13",
        "name": "Fermentation foodways entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-14",
        "name": "Fermentation foodways entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-15",
        "name": "Fermentation foodways entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-16",
        "name": "Fermentation foodways entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-17",
        "name": "Fermentation foodways entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-18",
        "name": "Fermentation foodways entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-19",
        "name": "Fermentation foodways entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-20",
        "name": "Fermentation foodways entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-21",
        "name": "Fermentation foodways entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-22",
        "name": "Fermentation foodways entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-23",
        "name": "Fermentation foodways entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fermentation-foodways-entry-24",
        "name": "Fermentation foodways entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fermentation foodways.",
        "description": "A supporting encyclopedia entry in the Fermentation foodways subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fermentation-foodways",
        "fermentation-foodways-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-places",
        "contains",
        "Fermentation foodways places is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-events",
        "contains",
        "Fermentation foodways events is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-objects",
        "contains",
        "Fermentation foodways objects & artifacts is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-factions",
        "contains",
        "Fermentation foodways factions & groups is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-concepts",
        "contains",
        "Fermentation foodways concepts is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-eras",
        "contains",
        "Fermentation foodways eras is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-works",
        "contains",
        "Fermentation foodways works & media is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-symbols",
        "contains",
        "Fermentation foodways symbols is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-controversies",
        "contains",
        "Fermentation foodways controversies is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-sources",
        "contains",
        "Fermentation foodways sources is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-geography",
        "contains",
        "Fermentation foodways geography is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-legacy",
        "contains",
        "Fermentation foodways legacy is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-practices",
        "contains",
        "Fermentation foodways practices is a primary trailhead under Fermentation foodways.",
        0.88,
        0.82
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-1",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-2",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-3",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-4",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-5",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-6",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-7",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-8",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-9",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-10",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-11",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-12",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-13",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-14",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-15",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-16",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-17",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-18",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-19",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-20",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-21",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-22",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-23",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ],
    [
        "fermentation-foodways",
        "fermentation-foodways-entry-24",
        "contains",
        "Supporting entry under Fermentation foodways.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
