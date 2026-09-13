/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "famous-bloodlines",
        "name": "Genealogy & famous bloodlines",
        "type": "topic",
        "short_description": "Families, marriages, descendants, monarchs, and the political alliances drawn through bloodlines.",
        "description": "Families, marriages, descendants, monarchs, and the political alliances drawn through bloodlines. This Ton-o-Lore subject maps people, places, events, and ideas tied to Genealogy & famous bloodlines so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "famous-bloodlines-figures",
        "name": "Genealogy & famous bloodlines figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Genealogy & famous bloodlines.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-world",
        "name": "Genealogy & famous bloodlines world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Genealogy & famous bloodlines.",
        "description": "Geography, institutions, and periodization that give Genealogy & famous bloodlines its encyclopedia shape."
    },
    {
        "slug": "famous-bloodlines-places",
        "name": "Genealogy & famous bloodlines places",
        "type": "place",
        "short_description": "Locations and geographies that frame Genealogy & famous bloodlines.",
        "description": "Places, regions, and built sites that give Genealogy & famous bloodlines its map — where events and figures concentrate."
    },
    {
        "slug": "famous-bloodlines-events",
        "name": "Genealogy & famous bloodlines events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Genealogy & famous bloodlines.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Genealogy & famous bloodlines timeline."
    },
    {
        "slug": "famous-bloodlines-objects",
        "name": "Genealogy & famous bloodlines objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Genealogy & famous bloodlines.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-factions",
        "name": "Genealogy & famous bloodlines factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Genealogy & famous bloodlines.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-concepts",
        "name": "Genealogy & famous bloodlines concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Genealogy & famous bloodlines.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Genealogy & famous bloodlines readable as a lore graph."
    },
    {
        "slug": "famous-bloodlines-eras",
        "name": "Genealogy & famous bloodlines eras",
        "type": "event",
        "short_description": "Periodization for Genealogy & famous bloodlines.",
        "description": "Named eras and phases that help readers track how Genealogy & famous bloodlines changes across time."
    },
    {
        "slug": "famous-bloodlines-works",
        "name": "Genealogy & famous bloodlines works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Genealogy & famous bloodlines.",
        "description": "Primary works and adaptations through which most audiences encounter Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-symbols",
        "name": "Genealogy & famous bloodlines symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Genealogy & famous bloodlines.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-controversies",
        "name": "Genealogy & famous bloodlines controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Genealogy & famous bloodlines.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Genealogy & famous bloodlines argumentative."
    },
    {
        "slug": "famous-bloodlines-sources",
        "name": "Genealogy & famous bloodlines sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Genealogy & famous bloodlines.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Genealogy & famous bloodlines."
    },
    {
        "slug": "famous-bloodlines-geography",
        "name": "Genealogy & famous bloodlines geography",
        "type": "place",
        "short_description": "Broader geographic framing for Genealogy & famous bloodlines.",
        "description": "Regions, routes, and spatial systems that situate Genealogy & famous bloodlines beyond single named places."
    },
    {
        "slug": "famous-bloodlines-legacy",
        "name": "Genealogy & famous bloodlines legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Genealogy & famous bloodlines.",
        "description": "How Genealogy & famous bloodlines continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "famous-bloodlines",
        "famous-bloodlines-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-places",
        "contains",
        "Genealogy & famous bloodlines places is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-events",
        "contains",
        "Genealogy & famous bloodlines events is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-objects",
        "contains",
        "Genealogy & famous bloodlines objects & artifacts is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-factions",
        "contains",
        "Genealogy & famous bloodlines factions & groups is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-concepts",
        "contains",
        "Genealogy & famous bloodlines concepts is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-eras",
        "contains",
        "Genealogy & famous bloodlines eras is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-works",
        "contains",
        "Genealogy & famous bloodlines works & media is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-symbols",
        "contains",
        "Genealogy & famous bloodlines symbols is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-controversies",
        "contains",
        "Genealogy & famous bloodlines controversies is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-sources",
        "contains",
        "Genealogy & famous bloodlines sources is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-geography",
        "contains",
        "Genealogy & famous bloodlines geography is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ],
    [
        "famous-bloodlines",
        "famous-bloodlines-legacy",
        "contains",
        "Genealogy & famous bloodlines legacy is a primary trailhead under Genealogy & famous bloodlines.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
