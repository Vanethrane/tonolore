/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wikipedia",
        "name": "Wikipedia",
        "type": "topic",
        "short_description": "The collaborative encyclopedia — policies, projects, and knowledge-graph culture.",
        "description": "The collaborative encyclopedia — policies, projects, and knowledge-graph culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wikipedia so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "wikipedia-figures",
        "name": "Wikipedia figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wikipedia.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wikipedia."
    },
    {
        "slug": "wikipedia-world",
        "name": "Wikipedia world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wikipedia.",
        "description": "Geography, institutions, and periodization that give Wikipedia its encyclopedia shape."
    },
    {
        "slug": "wikipedia-places",
        "name": "Wikipedia places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wikipedia.",
        "description": "Places, regions, and built sites that give Wikipedia its map — where events and figures concentrate."
    },
    {
        "slug": "wikipedia-events",
        "name": "Wikipedia events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wikipedia.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wikipedia timeline."
    },
    {
        "slug": "wikipedia-objects",
        "name": "Wikipedia objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wikipedia.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wikipedia."
    },
    {
        "slug": "wikipedia-factions",
        "name": "Wikipedia factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wikipedia.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wikipedia."
    },
    {
        "slug": "wikipedia-concepts",
        "name": "Wikipedia concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wikipedia.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wikipedia readable as a lore graph."
    },
    {
        "slug": "wikipedia-eras",
        "name": "Wikipedia eras",
        "type": "event",
        "short_description": "Periodization for Wikipedia.",
        "description": "Named eras and phases that help readers track how Wikipedia changes across time."
    },
    {
        "slug": "wikipedia-works",
        "name": "Wikipedia works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wikipedia.",
        "description": "Primary works and adaptations through which most audiences encounter Wikipedia."
    },
    {
        "slug": "wikipedia-symbols",
        "name": "Wikipedia symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wikipedia.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wikipedia."
    },
    {
        "slug": "wikipedia-controversies",
        "name": "Wikipedia controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wikipedia.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wikipedia argumentative."
    },
    {
        "slug": "wikipedia-sources",
        "name": "Wikipedia sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wikipedia.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wikipedia."
    },
    {
        "slug": "wikipedia-geography",
        "name": "Wikipedia geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wikipedia.",
        "description": "Regions, routes, and spatial systems that situate Wikipedia beyond single named places."
    },
    {
        "slug": "wikipedia-legacy",
        "name": "Wikipedia legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wikipedia.",
        "description": "How Wikipedia continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "wikipedia",
        "wikipedia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wikipedia",
        "wikipedia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wikipedia",
        "wikipedia-places",
        "contains",
        "Wikipedia places is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-events",
        "contains",
        "Wikipedia events is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-objects",
        "contains",
        "Wikipedia objects & artifacts is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-factions",
        "contains",
        "Wikipedia factions & groups is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-concepts",
        "contains",
        "Wikipedia concepts is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-eras",
        "contains",
        "Wikipedia eras is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-works",
        "contains",
        "Wikipedia works & media is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-symbols",
        "contains",
        "Wikipedia symbols is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-controversies",
        "contains",
        "Wikipedia controversies is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-sources",
        "contains",
        "Wikipedia sources is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-geography",
        "contains",
        "Wikipedia geography is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ],
    [
        "wikipedia",
        "wikipedia-legacy",
        "contains",
        "Wikipedia legacy is a primary trailhead under Wikipedia.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
