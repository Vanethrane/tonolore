/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "foundation-series",
        "name": "Foundation",
        "type": "topic",
        "short_description": "Psychohistory, empires, and Asimov's long-arc future history across books and screen.",
        "description": "Psychohistory, empires, and Asimov's long-arc future history across books and screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Foundation so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "foundation-series-figures",
        "name": "Foundation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Foundation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Foundation."
    },
    {
        "slug": "foundation-series-world",
        "name": "Foundation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Foundation.",
        "description": "Geography, institutions, and periodization that give Foundation its encyclopedia shape."
    },
    {
        "slug": "foundation-series-places",
        "name": "Foundation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Foundation.",
        "description": "Places, regions, and built sites that give Foundation its map — where events and figures concentrate."
    },
    {
        "slug": "foundation-series-events",
        "name": "Foundation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Foundation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Foundation timeline."
    },
    {
        "slug": "foundation-series-objects",
        "name": "Foundation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Foundation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Foundation."
    },
    {
        "slug": "foundation-series-factions",
        "name": "Foundation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Foundation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Foundation."
    },
    {
        "slug": "foundation-series-concepts",
        "name": "Foundation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Foundation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Foundation readable as a lore graph."
    },
    {
        "slug": "foundation-series-eras",
        "name": "Foundation eras",
        "type": "event",
        "short_description": "Periodization for Foundation.",
        "description": "Named eras and phases that help readers track how Foundation changes across time."
    },
    {
        "slug": "foundation-series-works",
        "name": "Foundation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Foundation.",
        "description": "Primary works and adaptations through which most audiences encounter Foundation."
    },
    {
        "slug": "foundation-series-symbols",
        "name": "Foundation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Foundation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Foundation."
    },
    {
        "slug": "foundation-series-controversies",
        "name": "Foundation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Foundation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Foundation argumentative."
    },
    {
        "slug": "foundation-series-sources",
        "name": "Foundation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Foundation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Foundation."
    },
    {
        "slug": "foundation-series-geography",
        "name": "Foundation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Foundation.",
        "description": "Regions, routes, and spatial systems that situate Foundation beyond single named places."
    },
    {
        "slug": "foundation-series-legacy",
        "name": "Foundation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Foundation.",
        "description": "How Foundation continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "foundation-series",
        "foundation-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "foundation-series",
        "foundation-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "foundation-series",
        "foundation-series-places",
        "contains",
        "Foundation places is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-events",
        "contains",
        "Foundation events is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-objects",
        "contains",
        "Foundation objects & artifacts is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-factions",
        "contains",
        "Foundation factions & groups is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-concepts",
        "contains",
        "Foundation concepts is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-eras",
        "contains",
        "Foundation eras is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-works",
        "contains",
        "Foundation works & media is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-symbols",
        "contains",
        "Foundation symbols is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-controversies",
        "contains",
        "Foundation controversies is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-sources",
        "contains",
        "Foundation sources is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-geography",
        "contains",
        "Foundation geography is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-legacy",
        "contains",
        "Foundation legacy is a primary trailhead under Foundation.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
