/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wonder-woman-comics",
        "name": "Wonder Woman",
        "type": "topic",
        "short_description": "Themyscira, lasso truth, and the Amazonian hero whose page history spans feminism and myth.",
        "description": "Themyscira, lasso truth, and the Amazonian hero whose page history spans feminism and myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wonder Woman so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "wonder-woman-comics-figures",
        "name": "Wonder Woman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wonder Woman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-world",
        "name": "Wonder Woman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wonder Woman.",
        "description": "Geography, institutions, and periodization that give Wonder Woman its encyclopedia shape."
    },
    {
        "slug": "wonder-woman-comics-places",
        "name": "Wonder Woman places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wonder Woman.",
        "description": "Places, regions, and built sites that give Wonder Woman its map — where events and figures concentrate."
    },
    {
        "slug": "wonder-woman-comics-events",
        "name": "Wonder Woman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wonder Woman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wonder Woman timeline."
    },
    {
        "slug": "wonder-woman-comics-objects",
        "name": "Wonder Woman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wonder Woman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-factions",
        "name": "Wonder Woman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wonder Woman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-concepts",
        "name": "Wonder Woman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wonder Woman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wonder Woman readable as a lore graph."
    },
    {
        "slug": "wonder-woman-comics-eras",
        "name": "Wonder Woman eras",
        "type": "event",
        "short_description": "Periodization for Wonder Woman.",
        "description": "Named eras and phases that help readers track how Wonder Woman changes across time."
    },
    {
        "slug": "wonder-woman-comics-works",
        "name": "Wonder Woman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wonder Woman.",
        "description": "Primary works and adaptations through which most audiences encounter Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-symbols",
        "name": "Wonder Woman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wonder Woman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-controversies",
        "name": "Wonder Woman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wonder Woman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wonder Woman argumentative."
    },
    {
        "slug": "wonder-woman-comics-sources",
        "name": "Wonder Woman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wonder Woman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-geography",
        "name": "Wonder Woman geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wonder Woman.",
        "description": "Regions, routes, and spatial systems that situate Wonder Woman beyond single named places."
    },
    {
        "slug": "wonder-woman-comics-legacy",
        "name": "Wonder Woman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wonder Woman.",
        "description": "How Wonder Woman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wonder-woman-comics-practices",
        "name": "Wonder Woman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wonder Woman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wonder Woman."
    },
    {
        "slug": "wonder-woman-comics-entry-1",
        "name": "Wonder Woman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-2",
        "name": "Wonder Woman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-3",
        "name": "Wonder Woman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-4",
        "name": "Wonder Woman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-5",
        "name": "Wonder Woman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-6",
        "name": "Wonder Woman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-7",
        "name": "Wonder Woman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-8",
        "name": "Wonder Woman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-9",
        "name": "Wonder Woman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-10",
        "name": "Wonder Woman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-11",
        "name": "Wonder Woman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-12",
        "name": "Wonder Woman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-13",
        "name": "Wonder Woman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-14",
        "name": "Wonder Woman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-15",
        "name": "Wonder Woman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-16",
        "name": "Wonder Woman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-17",
        "name": "Wonder Woman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-18",
        "name": "Wonder Woman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-19",
        "name": "Wonder Woman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-20",
        "name": "Wonder Woman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-21",
        "name": "Wonder Woman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-22",
        "name": "Wonder Woman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-23",
        "name": "Wonder Woman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wonder-woman-comics-entry-24",
        "name": "Wonder Woman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wonder Woman.",
        "description": "A supporting encyclopedia entry in the Wonder Woman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wonder-woman-comics",
        "wonder-woman-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-places",
        "contains",
        "Wonder Woman places is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-events",
        "contains",
        "Wonder Woman events is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-objects",
        "contains",
        "Wonder Woman objects & artifacts is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-factions",
        "contains",
        "Wonder Woman factions & groups is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-concepts",
        "contains",
        "Wonder Woman concepts is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-eras",
        "contains",
        "Wonder Woman eras is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-works",
        "contains",
        "Wonder Woman works & media is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-symbols",
        "contains",
        "Wonder Woman symbols is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-controversies",
        "contains",
        "Wonder Woman controversies is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-sources",
        "contains",
        "Wonder Woman sources is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-geography",
        "contains",
        "Wonder Woman geography is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-legacy",
        "contains",
        "Wonder Woman legacy is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-practices",
        "contains",
        "Wonder Woman practices is a primary trailhead under Wonder Woman.",
        0.88,
        0.82
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-1",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-2",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-3",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-4",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-5",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-6",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-7",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-8",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-9",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-10",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-11",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-12",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-13",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-14",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-15",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-16",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-17",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-18",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-19",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-20",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-21",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-22",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-23",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ],
    [
        "wonder-woman-comics",
        "wonder-woman-comics-entry-24",
        "contains",
        "Supporting entry under Wonder Woman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
