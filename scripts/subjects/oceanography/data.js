/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "oceanography",
        "name": "Oceanography",
        "type": "topic",
        "short_description": "Currents, trenches, and vessels that chart the planet's connected seas.",
        "description": "Currents, trenches, and vessels that chart the planet's connected seas. This Ton-o-Lore subject maps people, places, events, and ideas tied to Oceanography so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "oceanography-figures",
        "name": "Oceanography figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Oceanography.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Oceanography."
    },
    {
        "slug": "oceanography-world",
        "name": "Oceanography world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Oceanography.",
        "description": "Geography, institutions, and periodization that give Oceanography its encyclopedia shape."
    },
    {
        "slug": "oceanography-places",
        "name": "Oceanography places",
        "type": "place",
        "short_description": "Locations and geographies that frame Oceanography.",
        "description": "Places, regions, and built sites that give Oceanography its map — where events and figures concentrate."
    },
    {
        "slug": "oceanography-events",
        "name": "Oceanography events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Oceanography.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Oceanography timeline."
    },
    {
        "slug": "oceanography-objects",
        "name": "Oceanography objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Oceanography.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Oceanography."
    },
    {
        "slug": "oceanography-factions",
        "name": "Oceanography factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Oceanography.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Oceanography."
    },
    {
        "slug": "oceanography-concepts",
        "name": "Oceanography concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Oceanography.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Oceanography readable as a lore graph."
    },
    {
        "slug": "oceanography-eras",
        "name": "Oceanography eras",
        "type": "event",
        "short_description": "Periodization for Oceanography.",
        "description": "Named eras and phases that help readers track how Oceanography changes across time."
    },
    {
        "slug": "oceanography-works",
        "name": "Oceanography works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Oceanography.",
        "description": "Primary works and adaptations through which most audiences encounter Oceanography."
    },
    {
        "slug": "oceanography-symbols",
        "name": "Oceanography symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Oceanography.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Oceanography."
    },
    {
        "slug": "oceanography-controversies",
        "name": "Oceanography controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Oceanography.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Oceanography argumentative."
    },
    {
        "slug": "oceanography-sources",
        "name": "Oceanography sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Oceanography.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Oceanography."
    },
    {
        "slug": "oceanography-geography",
        "name": "Oceanography geography",
        "type": "place",
        "short_description": "Broader geographic framing for Oceanography.",
        "description": "Regions, routes, and spatial systems that situate Oceanography beyond single named places."
    },
    {
        "slug": "oceanography-legacy",
        "name": "Oceanography legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Oceanography.",
        "description": "How Oceanography continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "oceanography",
        "oceanography-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "oceanography",
        "oceanography-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "oceanography",
        "oceanography-places",
        "contains",
        "Oceanography places is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-events",
        "contains",
        "Oceanography events is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-objects",
        "contains",
        "Oceanography objects & artifacts is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-factions",
        "contains",
        "Oceanography factions & groups is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-concepts",
        "contains",
        "Oceanography concepts is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-eras",
        "contains",
        "Oceanography eras is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-works",
        "contains",
        "Oceanography works & media is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-symbols",
        "contains",
        "Oceanography symbols is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-controversies",
        "contains",
        "Oceanography controversies is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-sources",
        "contains",
        "Oceanography sources is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-geography",
        "contains",
        "Oceanography geography is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ],
    [
        "oceanography",
        "oceanography-legacy",
        "contains",
        "Oceanography legacy is a primary trailhead under Oceanography.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
