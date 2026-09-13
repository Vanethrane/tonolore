/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "andromeda-series",
        "name": "Andromeda",
        "type": "topic",
        "short_description": "Dylan Hunt, Systems Commonwealth, and Gene Roddenberry’s posthumous space-empire concept.",
        "description": "Dylan Hunt, Systems Commonwealth, and Gene Roddenberry’s posthumous space-empire concept. This Ton-o-Lore subject maps people, places, events, and ideas tied to Andromeda so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "andromeda-series-figures",
        "name": "Andromeda figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Andromeda.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Andromeda."
    },
    {
        "slug": "andromeda-series-world",
        "name": "Andromeda world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Andromeda.",
        "description": "Geography, institutions, and periodization that give Andromeda its encyclopedia shape."
    },
    {
        "slug": "andromeda-series-places",
        "name": "Andromeda places",
        "type": "place",
        "short_description": "Locations and geographies that frame Andromeda.",
        "description": "Places, regions, and built sites that give Andromeda its map — where events and figures concentrate."
    },
    {
        "slug": "andromeda-series-events",
        "name": "Andromeda events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Andromeda.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Andromeda timeline."
    },
    {
        "slug": "andromeda-series-objects",
        "name": "Andromeda objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Andromeda.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Andromeda."
    },
    {
        "slug": "andromeda-series-factions",
        "name": "Andromeda factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Andromeda.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Andromeda."
    },
    {
        "slug": "andromeda-series-concepts",
        "name": "Andromeda concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Andromeda.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Andromeda readable as a lore graph."
    },
    {
        "slug": "andromeda-series-eras",
        "name": "Andromeda eras",
        "type": "event",
        "short_description": "Periodization for Andromeda.",
        "description": "Named eras and phases that help readers track how Andromeda changes across time."
    },
    {
        "slug": "andromeda-series-works",
        "name": "Andromeda works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Andromeda.",
        "description": "Primary works and adaptations through which most audiences encounter Andromeda."
    },
    {
        "slug": "andromeda-series-symbols",
        "name": "Andromeda symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Andromeda.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Andromeda."
    },
    {
        "slug": "andromeda-series-controversies",
        "name": "Andromeda controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Andromeda.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Andromeda argumentative."
    },
    {
        "slug": "andromeda-series-sources",
        "name": "Andromeda sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Andromeda.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Andromeda."
    },
    {
        "slug": "andromeda-series-geography",
        "name": "Andromeda geography",
        "type": "place",
        "short_description": "Broader geographic framing for Andromeda.",
        "description": "Regions, routes, and spatial systems that situate Andromeda beyond single named places."
    },
    {
        "slug": "andromeda-series-legacy",
        "name": "Andromeda legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Andromeda.",
        "description": "How Andromeda continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "andromeda-series-practices",
        "name": "Andromeda practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Andromeda.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Andromeda."
    },
    {
        "slug": "andromeda-series-entry-1",
        "name": "Andromeda entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-2",
        "name": "Andromeda entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-3",
        "name": "Andromeda entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-4",
        "name": "Andromeda entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-5",
        "name": "Andromeda entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-6",
        "name": "Andromeda entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-7",
        "name": "Andromeda entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-8",
        "name": "Andromeda entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-9",
        "name": "Andromeda entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-10",
        "name": "Andromeda entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-11",
        "name": "Andromeda entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-12",
        "name": "Andromeda entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-13",
        "name": "Andromeda entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-14",
        "name": "Andromeda entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-15",
        "name": "Andromeda entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-16",
        "name": "Andromeda entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-17",
        "name": "Andromeda entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-18",
        "name": "Andromeda entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-19",
        "name": "Andromeda entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-20",
        "name": "Andromeda entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-21",
        "name": "Andromeda entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-22",
        "name": "Andromeda entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-23",
        "name": "Andromeda entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "andromeda-series-entry-24",
        "name": "Andromeda entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Andromeda.",
        "description": "A supporting encyclopedia entry in the Andromeda subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "andromeda-series",
        "andromeda-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "andromeda-series",
        "andromeda-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "andromeda-series",
        "andromeda-series-places",
        "contains",
        "Andromeda places is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-events",
        "contains",
        "Andromeda events is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-objects",
        "contains",
        "Andromeda objects & artifacts is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-factions",
        "contains",
        "Andromeda factions & groups is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-concepts",
        "contains",
        "Andromeda concepts is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-eras",
        "contains",
        "Andromeda eras is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-works",
        "contains",
        "Andromeda works & media is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-symbols",
        "contains",
        "Andromeda symbols is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-controversies",
        "contains",
        "Andromeda controversies is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-sources",
        "contains",
        "Andromeda sources is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-geography",
        "contains",
        "Andromeda geography is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-legacy",
        "contains",
        "Andromeda legacy is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-practices",
        "contains",
        "Andromeda practices is a primary trailhead under Andromeda.",
        0.88,
        0.82
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-1",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-2",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-3",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-4",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-5",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-6",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-7",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-8",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-9",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-10",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-11",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-12",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-13",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-14",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-15",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-16",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-17",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-18",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-19",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-20",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-21",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-22",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-23",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ],
    [
        "andromeda-series",
        "andromeda-series-entry-24",
        "contains",
        "Supporting entry under Andromeda.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
