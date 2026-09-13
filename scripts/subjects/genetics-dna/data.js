/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "genetics-dna",
        "name": "Genetics & DNA",
        "type": "topic",
        "short_description": "Double helix, inheritance, CRISPR, and the code that structures modern biology.",
        "description": "Double helix, inheritance, CRISPR, and the code that structures modern biology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Genetics & DNA so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "genetics-dna-figures",
        "name": "Genetics & DNA figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Genetics & DNA.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Genetics & DNA."
    },
    {
        "slug": "genetics-dna-world",
        "name": "Genetics & DNA world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Genetics & DNA.",
        "description": "Geography, institutions, and periodization that give Genetics & DNA its encyclopedia shape."
    },
    {
        "slug": "genetics-dna-places",
        "name": "Genetics & DNA places",
        "type": "place",
        "short_description": "Locations and geographies that frame Genetics & DNA.",
        "description": "Places, regions, and built sites that give Genetics & DNA its map — where events and figures concentrate."
    },
    {
        "slug": "genetics-dna-events",
        "name": "Genetics & DNA events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Genetics & DNA.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Genetics & DNA timeline."
    },
    {
        "slug": "genetics-dna-objects",
        "name": "Genetics & DNA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Genetics & DNA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Genetics & DNA."
    },
    {
        "slug": "genetics-dna-factions",
        "name": "Genetics & DNA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Genetics & DNA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Genetics & DNA."
    },
    {
        "slug": "genetics-dna-concepts",
        "name": "Genetics & DNA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Genetics & DNA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Genetics & DNA readable as a lore graph."
    },
    {
        "slug": "genetics-dna-eras",
        "name": "Genetics & DNA eras",
        "type": "event",
        "short_description": "Periodization for Genetics & DNA.",
        "description": "Named eras and phases that help readers track how Genetics & DNA changes across time."
    },
    {
        "slug": "genetics-dna-works",
        "name": "Genetics & DNA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Genetics & DNA.",
        "description": "Primary works and adaptations through which most audiences encounter Genetics & DNA."
    },
    {
        "slug": "genetics-dna-symbols",
        "name": "Genetics & DNA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Genetics & DNA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Genetics & DNA."
    },
    {
        "slug": "genetics-dna-controversies",
        "name": "Genetics & DNA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Genetics & DNA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Genetics & DNA argumentative."
    },
    {
        "slug": "genetics-dna-sources",
        "name": "Genetics & DNA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Genetics & DNA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Genetics & DNA."
    },
    {
        "slug": "genetics-dna-geography",
        "name": "Genetics & DNA geography",
        "type": "place",
        "short_description": "Broader geographic framing for Genetics & DNA.",
        "description": "Regions, routes, and spatial systems that situate Genetics & DNA beyond single named places."
    },
    {
        "slug": "genetics-dna-legacy",
        "name": "Genetics & DNA legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Genetics & DNA.",
        "description": "How Genetics & DNA continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "genetics-dna-practices",
        "name": "Genetics & DNA practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Genetics & DNA.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Genetics & DNA."
    },
    {
        "slug": "genetics-dna-entry-1",
        "name": "Genetics & DNA entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-2",
        "name": "Genetics & DNA entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-3",
        "name": "Genetics & DNA entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-4",
        "name": "Genetics & DNA entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-5",
        "name": "Genetics & DNA entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-6",
        "name": "Genetics & DNA entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-7",
        "name": "Genetics & DNA entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-8",
        "name": "Genetics & DNA entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-9",
        "name": "Genetics & DNA entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-10",
        "name": "Genetics & DNA entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-11",
        "name": "Genetics & DNA entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-12",
        "name": "Genetics & DNA entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-13",
        "name": "Genetics & DNA entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-14",
        "name": "Genetics & DNA entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-15",
        "name": "Genetics & DNA entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-16",
        "name": "Genetics & DNA entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-17",
        "name": "Genetics & DNA entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-18",
        "name": "Genetics & DNA entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-19",
        "name": "Genetics & DNA entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-20",
        "name": "Genetics & DNA entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-21",
        "name": "Genetics & DNA entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-22",
        "name": "Genetics & DNA entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-23",
        "name": "Genetics & DNA entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "genetics-dna-entry-24",
        "name": "Genetics & DNA entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Genetics & DNA.",
        "description": "A supporting encyclopedia entry in the Genetics & DNA subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "genetics-dna",
        "genetics-dna-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "genetics-dna",
        "genetics-dna-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "genetics-dna",
        "genetics-dna-places",
        "contains",
        "Genetics & DNA places is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-events",
        "contains",
        "Genetics & DNA events is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-objects",
        "contains",
        "Genetics & DNA objects & artifacts is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-factions",
        "contains",
        "Genetics & DNA factions & groups is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-concepts",
        "contains",
        "Genetics & DNA concepts is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-eras",
        "contains",
        "Genetics & DNA eras is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-works",
        "contains",
        "Genetics & DNA works & media is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-symbols",
        "contains",
        "Genetics & DNA symbols is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-controversies",
        "contains",
        "Genetics & DNA controversies is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-sources",
        "contains",
        "Genetics & DNA sources is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-geography",
        "contains",
        "Genetics & DNA geography is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-legacy",
        "contains",
        "Genetics & DNA legacy is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-practices",
        "contains",
        "Genetics & DNA practices is a primary trailhead under Genetics & DNA.",
        0.88,
        0.82
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-1",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-2",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-3",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-4",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-5",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-6",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-7",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-8",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-9",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-10",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-11",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-12",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-13",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-14",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-15",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-16",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-17",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-18",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-19",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-20",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-21",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-22",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-23",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ],
    [
        "genetics-dna",
        "genetics-dna-entry-24",
        "contains",
        "Supporting entry under Genetics & DNA.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
