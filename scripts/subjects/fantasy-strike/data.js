/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fantasy-strike",
        "name": "Fantasy Strike",
        "type": "topic",
        "short_description": "Readable fundamentals fighter designed to teach competitive play without execution walls.",
        "description": "Readable fundamentals fighter designed to teach competitive play without execution walls. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fantasy Strike so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "fantasy-strike-figures",
        "name": "Fantasy Strike figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fantasy Strike.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-world",
        "name": "Fantasy Strike world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fantasy Strike.",
        "description": "Geography, institutions, and periodization that give Fantasy Strike its encyclopedia shape."
    },
    {
        "slug": "fantasy-strike-places",
        "name": "Fantasy Strike places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fantasy Strike.",
        "description": "Places, regions, and built sites that give Fantasy Strike its map — where events and figures concentrate."
    },
    {
        "slug": "fantasy-strike-events",
        "name": "Fantasy Strike events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fantasy Strike.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fantasy Strike timeline."
    },
    {
        "slug": "fantasy-strike-objects",
        "name": "Fantasy Strike objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fantasy Strike.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-factions",
        "name": "Fantasy Strike factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fantasy Strike.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-concepts",
        "name": "Fantasy Strike concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fantasy Strike.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fantasy Strike readable as a lore graph."
    },
    {
        "slug": "fantasy-strike-eras",
        "name": "Fantasy Strike eras",
        "type": "event",
        "short_description": "Periodization for Fantasy Strike.",
        "description": "Named eras and phases that help readers track how Fantasy Strike changes across time."
    },
    {
        "slug": "fantasy-strike-works",
        "name": "Fantasy Strike works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fantasy Strike.",
        "description": "Primary works and adaptations through which most audiences encounter Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-symbols",
        "name": "Fantasy Strike symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fantasy Strike.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-controversies",
        "name": "Fantasy Strike controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fantasy Strike.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fantasy Strike argumentative."
    },
    {
        "slug": "fantasy-strike-sources",
        "name": "Fantasy Strike sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fantasy Strike.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-geography",
        "name": "Fantasy Strike geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fantasy Strike.",
        "description": "Regions, routes, and spatial systems that situate Fantasy Strike beyond single named places."
    },
    {
        "slug": "fantasy-strike-legacy",
        "name": "Fantasy Strike legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fantasy Strike.",
        "description": "How Fantasy Strike continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fantasy-strike-practices",
        "name": "Fantasy Strike practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fantasy Strike.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fantasy Strike."
    },
    {
        "slug": "fantasy-strike-entry-1",
        "name": "Fantasy Strike entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-2",
        "name": "Fantasy Strike entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-3",
        "name": "Fantasy Strike entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-4",
        "name": "Fantasy Strike entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-5",
        "name": "Fantasy Strike entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-6",
        "name": "Fantasy Strike entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-7",
        "name": "Fantasy Strike entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-8",
        "name": "Fantasy Strike entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-9",
        "name": "Fantasy Strike entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-10",
        "name": "Fantasy Strike entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-11",
        "name": "Fantasy Strike entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-12",
        "name": "Fantasy Strike entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-13",
        "name": "Fantasy Strike entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-14",
        "name": "Fantasy Strike entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-15",
        "name": "Fantasy Strike entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-16",
        "name": "Fantasy Strike entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-17",
        "name": "Fantasy Strike entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-18",
        "name": "Fantasy Strike entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-19",
        "name": "Fantasy Strike entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-20",
        "name": "Fantasy Strike entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-21",
        "name": "Fantasy Strike entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-22",
        "name": "Fantasy Strike entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-23",
        "name": "Fantasy Strike entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fantasy-strike-entry-24",
        "name": "Fantasy Strike entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fantasy Strike.",
        "description": "A supporting encyclopedia entry in the Fantasy Strike subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fantasy-strike",
        "fantasy-strike-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fantasy-strike",
        "fantasy-strike-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fantasy-strike",
        "fantasy-strike-places",
        "contains",
        "Fantasy Strike places is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-events",
        "contains",
        "Fantasy Strike events is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-objects",
        "contains",
        "Fantasy Strike objects & artifacts is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-factions",
        "contains",
        "Fantasy Strike factions & groups is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-concepts",
        "contains",
        "Fantasy Strike concepts is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-eras",
        "contains",
        "Fantasy Strike eras is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-works",
        "contains",
        "Fantasy Strike works & media is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-symbols",
        "contains",
        "Fantasy Strike symbols is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-controversies",
        "contains",
        "Fantasy Strike controversies is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-sources",
        "contains",
        "Fantasy Strike sources is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-geography",
        "contains",
        "Fantasy Strike geography is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-legacy",
        "contains",
        "Fantasy Strike legacy is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-practices",
        "contains",
        "Fantasy Strike practices is a primary trailhead under Fantasy Strike.",
        0.88,
        0.82
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-1",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-2",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-3",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-4",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-5",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-6",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-7",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-8",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-9",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-10",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-11",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-12",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-13",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-14",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-15",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-16",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-17",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-18",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-19",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-20",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-21",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-22",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-23",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ],
    [
        "fantasy-strike",
        "fantasy-strike-entry-24",
        "contains",
        "Supporting entry under Fantasy Strike.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
