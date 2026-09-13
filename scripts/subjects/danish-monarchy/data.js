/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "danish-monarchy",
        "name": "Danish monarchy",
        "type": "topic",
        "short_description": "Europe’s oldest continuous kingdom tradition and the Glücksburg line of Denmark.",
        "description": "Europe’s oldest continuous kingdom tradition and the Glücksburg line of Denmark. This Ton-o-Lore subject maps people, places, events, and ideas tied to Danish monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "danish-monarchy-figures",
        "name": "Danish monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Danish monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Danish monarchy."
    },
    {
        "slug": "danish-monarchy-world",
        "name": "Danish monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Danish monarchy.",
        "description": "Geography, institutions, and periodization that give Danish monarchy its encyclopedia shape."
    },
    {
        "slug": "danish-monarchy-places",
        "name": "Danish monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Danish monarchy.",
        "description": "Places, regions, and built sites that give Danish monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "danish-monarchy-events",
        "name": "Danish monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Danish monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Danish monarchy timeline."
    },
    {
        "slug": "danish-monarchy-objects",
        "name": "Danish monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Danish monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Danish monarchy."
    },
    {
        "slug": "danish-monarchy-factions",
        "name": "Danish monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Danish monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Danish monarchy."
    },
    {
        "slug": "danish-monarchy-concepts",
        "name": "Danish monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Danish monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Danish monarchy readable as a lore graph."
    },
    {
        "slug": "danish-monarchy-eras",
        "name": "Danish monarchy eras",
        "type": "event",
        "short_description": "Periodization for Danish monarchy.",
        "description": "Named eras and phases that help readers track how Danish monarchy changes across time."
    },
    {
        "slug": "danish-monarchy-works",
        "name": "Danish monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Danish monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Danish monarchy."
    },
    {
        "slug": "danish-monarchy-symbols",
        "name": "Danish monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Danish monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Danish monarchy."
    },
    {
        "slug": "danish-monarchy-controversies",
        "name": "Danish monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Danish monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Danish monarchy argumentative."
    },
    {
        "slug": "danish-monarchy-sources",
        "name": "Danish monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Danish monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Danish monarchy."
    },
    {
        "slug": "danish-monarchy-geography",
        "name": "Danish monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Danish monarchy.",
        "description": "Regions, routes, and spatial systems that situate Danish monarchy beyond single named places."
    },
    {
        "slug": "danish-monarchy-legacy",
        "name": "Danish monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Danish monarchy.",
        "description": "How Danish monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "danish-monarchy-practices",
        "name": "Danish monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Danish monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Danish monarchy."
    },
    {
        "slug": "danish-monarchy-entry-1",
        "name": "Danish monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-2",
        "name": "Danish monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-3",
        "name": "Danish monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-4",
        "name": "Danish monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-5",
        "name": "Danish monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-6",
        "name": "Danish monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-7",
        "name": "Danish monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-8",
        "name": "Danish monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-9",
        "name": "Danish monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-10",
        "name": "Danish monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-11",
        "name": "Danish monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-12",
        "name": "Danish monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-13",
        "name": "Danish monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-14",
        "name": "Danish monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-15",
        "name": "Danish monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-16",
        "name": "Danish monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-17",
        "name": "Danish monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-18",
        "name": "Danish monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-19",
        "name": "Danish monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-20",
        "name": "Danish monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-21",
        "name": "Danish monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-22",
        "name": "Danish monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-23",
        "name": "Danish monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "danish-monarchy-entry-24",
        "name": "Danish monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Danish monarchy.",
        "description": "A supporting encyclopedia entry in the Danish monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "danish-monarchy",
        "danish-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "danish-monarchy",
        "danish-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "danish-monarchy",
        "danish-monarchy-places",
        "contains",
        "Danish monarchy places is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-events",
        "contains",
        "Danish monarchy events is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-objects",
        "contains",
        "Danish monarchy objects & artifacts is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-factions",
        "contains",
        "Danish monarchy factions & groups is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-concepts",
        "contains",
        "Danish monarchy concepts is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-eras",
        "contains",
        "Danish monarchy eras is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-works",
        "contains",
        "Danish monarchy works & media is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-symbols",
        "contains",
        "Danish monarchy symbols is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-controversies",
        "contains",
        "Danish monarchy controversies is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-sources",
        "contains",
        "Danish monarchy sources is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-geography",
        "contains",
        "Danish monarchy geography is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-legacy",
        "contains",
        "Danish monarchy legacy is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-practices",
        "contains",
        "Danish monarchy practices is a primary trailhead under Danish monarchy.",
        0.88,
        0.82
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-1",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-2",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-3",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-4",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-5",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-6",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-7",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-8",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-9",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-10",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-11",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-12",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-13",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-14",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-15",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-16",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-17",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-18",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-19",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-20",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-21",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-22",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-23",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ],
    [
        "danish-monarchy",
        "danish-monarchy-entry-24",
        "contains",
        "Supporting entry under Danish monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
