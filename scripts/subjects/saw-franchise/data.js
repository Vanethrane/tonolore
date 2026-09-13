/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "saw-franchise",
        "name": "Saw",
        "type": "topic",
        "short_description": "Jigsaw traps, moral tests, and the torture-puzzle mythology of modern horror cinema.",
        "description": "Jigsaw traps, moral tests, and the torture-puzzle mythology of modern horror cinema. This Ton-o-Lore subject maps people, places, events, and ideas tied to Saw so readers can follow long-tail connections across horror."
    },
    {
        "slug": "saw-franchise-figures",
        "name": "Saw figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Saw.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Saw."
    },
    {
        "slug": "saw-franchise-world",
        "name": "Saw world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Saw.",
        "description": "Geography, institutions, and periodization that give Saw its encyclopedia shape."
    },
    {
        "slug": "saw-franchise-places",
        "name": "Saw places",
        "type": "place",
        "short_description": "Locations and geographies that frame Saw.",
        "description": "Places, regions, and built sites that give Saw its map — where events and figures concentrate."
    },
    {
        "slug": "saw-franchise-events",
        "name": "Saw events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Saw.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Saw timeline."
    },
    {
        "slug": "saw-franchise-objects",
        "name": "Saw objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Saw.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Saw."
    },
    {
        "slug": "saw-franchise-factions",
        "name": "Saw factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Saw.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Saw."
    },
    {
        "slug": "saw-franchise-concepts",
        "name": "Saw concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Saw.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Saw readable as a lore graph."
    },
    {
        "slug": "saw-franchise-eras",
        "name": "Saw eras",
        "type": "event",
        "short_description": "Periodization for Saw.",
        "description": "Named eras and phases that help readers track how Saw changes across time."
    },
    {
        "slug": "saw-franchise-works",
        "name": "Saw works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Saw.",
        "description": "Primary works and adaptations through which most audiences encounter Saw."
    },
    {
        "slug": "saw-franchise-symbols",
        "name": "Saw symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Saw.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Saw."
    },
    {
        "slug": "saw-franchise-controversies",
        "name": "Saw controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Saw.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Saw argumentative."
    },
    {
        "slug": "saw-franchise-sources",
        "name": "Saw sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Saw.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Saw."
    },
    {
        "slug": "saw-franchise-geography",
        "name": "Saw geography",
        "type": "place",
        "short_description": "Broader geographic framing for Saw.",
        "description": "Regions, routes, and spatial systems that situate Saw beyond single named places."
    },
    {
        "slug": "saw-franchise-legacy",
        "name": "Saw legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Saw.",
        "description": "How Saw continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "saw-franchise-practices",
        "name": "Saw practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Saw.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Saw."
    },
    {
        "slug": "saw-franchise-entry-1",
        "name": "Saw entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-2",
        "name": "Saw entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-3",
        "name": "Saw entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-4",
        "name": "Saw entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-5",
        "name": "Saw entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-6",
        "name": "Saw entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-7",
        "name": "Saw entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-8",
        "name": "Saw entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-9",
        "name": "Saw entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-10",
        "name": "Saw entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-11",
        "name": "Saw entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-12",
        "name": "Saw entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-13",
        "name": "Saw entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-14",
        "name": "Saw entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-15",
        "name": "Saw entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-16",
        "name": "Saw entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-17",
        "name": "Saw entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-18",
        "name": "Saw entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-19",
        "name": "Saw entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-20",
        "name": "Saw entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-21",
        "name": "Saw entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-22",
        "name": "Saw entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-23",
        "name": "Saw entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saw-franchise-entry-24",
        "name": "Saw entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saw.",
        "description": "A supporting encyclopedia entry in the Saw subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "saw-franchise",
        "saw-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "saw-franchise",
        "saw-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "saw-franchise",
        "saw-franchise-places",
        "contains",
        "Saw places is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-events",
        "contains",
        "Saw events is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-objects",
        "contains",
        "Saw objects & artifacts is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-factions",
        "contains",
        "Saw factions & groups is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-concepts",
        "contains",
        "Saw concepts is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-eras",
        "contains",
        "Saw eras is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-works",
        "contains",
        "Saw works & media is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-symbols",
        "contains",
        "Saw symbols is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-controversies",
        "contains",
        "Saw controversies is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-sources",
        "contains",
        "Saw sources is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-geography",
        "contains",
        "Saw geography is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-legacy",
        "contains",
        "Saw legacy is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-practices",
        "contains",
        "Saw practices is a primary trailhead under Saw.",
        0.88,
        0.82
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-1",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-2",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-3",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-4",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-5",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-6",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-7",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-8",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-9",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-10",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-11",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-12",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-13",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-14",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-15",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-16",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-17",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-18",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-19",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-20",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-21",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-22",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-23",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ],
    [
        "saw-franchise",
        "saw-franchise-entry-24",
        "contains",
        "Supporting entry under Saw.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
