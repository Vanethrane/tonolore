/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fairy-tail",
        "name": "Fairy Tail",
        "type": "topic",
        "short_description": "Guild bonds, dragon slayers, and the friendship-powered fantasy of Fiore.",
        "description": "Guild bonds, dragon slayers, and the friendship-powered fantasy of Fiore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fairy Tail so readers can follow long-tail connections across anime."
    },
    {
        "slug": "fairy-tail-figures",
        "name": "Fairy Tail figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fairy Tail.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fairy Tail."
    },
    {
        "slug": "fairy-tail-world",
        "name": "Fairy Tail world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fairy Tail.",
        "description": "Geography, institutions, and periodization that give Fairy Tail its encyclopedia shape."
    },
    {
        "slug": "fairy-tail-places",
        "name": "Fairy Tail places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fairy Tail.",
        "description": "Places, regions, and built sites that give Fairy Tail its map — where events and figures concentrate."
    },
    {
        "slug": "fairy-tail-events",
        "name": "Fairy Tail events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fairy Tail.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fairy Tail timeline."
    },
    {
        "slug": "fairy-tail-objects",
        "name": "Fairy Tail objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fairy Tail.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fairy Tail."
    },
    {
        "slug": "fairy-tail-factions",
        "name": "Fairy Tail factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fairy Tail.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fairy Tail."
    },
    {
        "slug": "fairy-tail-concepts",
        "name": "Fairy Tail concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fairy Tail.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fairy Tail readable as a lore graph."
    },
    {
        "slug": "fairy-tail-eras",
        "name": "Fairy Tail eras",
        "type": "event",
        "short_description": "Periodization for Fairy Tail.",
        "description": "Named eras and phases that help readers track how Fairy Tail changes across time."
    },
    {
        "slug": "fairy-tail-works",
        "name": "Fairy Tail works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fairy Tail.",
        "description": "Primary works and adaptations through which most audiences encounter Fairy Tail."
    },
    {
        "slug": "fairy-tail-symbols",
        "name": "Fairy Tail symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fairy Tail.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fairy Tail."
    },
    {
        "slug": "fairy-tail-controversies",
        "name": "Fairy Tail controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fairy Tail.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fairy Tail argumentative."
    },
    {
        "slug": "fairy-tail-sources",
        "name": "Fairy Tail sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fairy Tail.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fairy Tail."
    },
    {
        "slug": "fairy-tail-geography",
        "name": "Fairy Tail geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fairy Tail.",
        "description": "Regions, routes, and spatial systems that situate Fairy Tail beyond single named places."
    },
    {
        "slug": "fairy-tail-legacy",
        "name": "Fairy Tail legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fairy Tail.",
        "description": "How Fairy Tail continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fairy-tail-practices",
        "name": "Fairy Tail practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fairy Tail.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fairy Tail."
    },
    {
        "slug": "fairy-tail-entry-1",
        "name": "Fairy Tail entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-2",
        "name": "Fairy Tail entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-3",
        "name": "Fairy Tail entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-4",
        "name": "Fairy Tail entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-5",
        "name": "Fairy Tail entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-6",
        "name": "Fairy Tail entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-7",
        "name": "Fairy Tail entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-8",
        "name": "Fairy Tail entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-9",
        "name": "Fairy Tail entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-10",
        "name": "Fairy Tail entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-11",
        "name": "Fairy Tail entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-12",
        "name": "Fairy Tail entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-13",
        "name": "Fairy Tail entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-14",
        "name": "Fairy Tail entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-15",
        "name": "Fairy Tail entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-16",
        "name": "Fairy Tail entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-17",
        "name": "Fairy Tail entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-18",
        "name": "Fairy Tail entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-19",
        "name": "Fairy Tail entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-20",
        "name": "Fairy Tail entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-21",
        "name": "Fairy Tail entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-22",
        "name": "Fairy Tail entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-23",
        "name": "Fairy Tail entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fairy-tail-entry-24",
        "name": "Fairy Tail entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fairy Tail.",
        "description": "A supporting encyclopedia entry in the Fairy Tail subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fairy-tail",
        "fairy-tail-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fairy-tail",
        "fairy-tail-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fairy-tail",
        "fairy-tail-places",
        "contains",
        "Fairy Tail places is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-events",
        "contains",
        "Fairy Tail events is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-objects",
        "contains",
        "Fairy Tail objects & artifacts is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-factions",
        "contains",
        "Fairy Tail factions & groups is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-concepts",
        "contains",
        "Fairy Tail concepts is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-eras",
        "contains",
        "Fairy Tail eras is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-works",
        "contains",
        "Fairy Tail works & media is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-symbols",
        "contains",
        "Fairy Tail symbols is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-controversies",
        "contains",
        "Fairy Tail controversies is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-sources",
        "contains",
        "Fairy Tail sources is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-geography",
        "contains",
        "Fairy Tail geography is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-legacy",
        "contains",
        "Fairy Tail legacy is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-practices",
        "contains",
        "Fairy Tail practices is a primary trailhead under Fairy Tail.",
        0.88,
        0.82
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-1",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-2",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-3",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-4",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-5",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-6",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-7",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-8",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-9",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-10",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-11",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-12",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-13",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-14",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-15",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-16",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-17",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-18",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-19",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-20",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-21",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-22",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-23",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ],
    [
        "fairy-tail",
        "fairy-tail-entry-24",
        "contains",
        "Supporting entry under Fairy Tail.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
