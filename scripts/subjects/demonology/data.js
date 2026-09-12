/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "demonology",
        "name": "Demonology",
        "type": "topic",
        "short_description": "Grimoires, named spirits, classifications, and the scholarly-occult catalogs of demons.",
        "description": "Grimoires, named spirits, classifications, and the scholarly-occult catalogs of demons. This Ton-o-Lore subject maps people, places, events, and ideas tied to Demonology so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "demonology-figures",
        "name": "Demonology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Demonology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Demonology."
    },
    {
        "slug": "demonology-world",
        "name": "Demonology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Demonology.",
        "description": "Geography, institutions, and periodization that give Demonology its encyclopedia shape."
    },
    {
        "slug": "demonology-places",
        "name": "Demonology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Demonology.",
        "description": "Places, regions, and built sites that give Demonology its map — where events and figures concentrate."
    },
    {
        "slug": "demonology-events",
        "name": "Demonology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Demonology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Demonology timeline."
    },
    {
        "slug": "demonology-objects",
        "name": "Demonology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Demonology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Demonology."
    },
    {
        "slug": "demonology-factions",
        "name": "Demonology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Demonology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Demonology."
    },
    {
        "slug": "demonology-concepts",
        "name": "Demonology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Demonology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Demonology readable as a lore graph."
    },
    {
        "slug": "demonology-eras",
        "name": "Demonology eras",
        "type": "event",
        "short_description": "Periodization for Demonology.",
        "description": "Named eras and phases that help readers track how Demonology changes across time."
    },
    {
        "slug": "demonology-works",
        "name": "Demonology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Demonology.",
        "description": "Primary works and adaptations through which most audiences encounter Demonology."
    },
    {
        "slug": "demonology-symbols",
        "name": "Demonology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Demonology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Demonology."
    },
    {
        "slug": "demonology-controversies",
        "name": "Demonology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Demonology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Demonology argumentative."
    },
    {
        "slug": "demonology-sources",
        "name": "Demonology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Demonology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Demonology."
    },
    {
        "slug": "demonology-geography",
        "name": "Demonology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Demonology.",
        "description": "Regions, routes, and spatial systems that situate Demonology beyond single named places."
    },
    {
        "slug": "demonology-legacy",
        "name": "Demonology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Demonology.",
        "description": "How Demonology continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "demonology",
        "demonology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "demonology",
        "demonology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "demonology",
        "demonology-places",
        "contains",
        "Demonology places is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-events",
        "contains",
        "Demonology events is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-objects",
        "contains",
        "Demonology objects & artifacts is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-factions",
        "contains",
        "Demonology factions & groups is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-concepts",
        "contains",
        "Demonology concepts is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-eras",
        "contains",
        "Demonology eras is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-works",
        "contains",
        "Demonology works & media is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-symbols",
        "contains",
        "Demonology symbols is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-controversies",
        "contains",
        "Demonology controversies is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-sources",
        "contains",
        "Demonology sources is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-geography",
        "contains",
        "Demonology geography is a primary trailhead under Demonology.",
        0.88,
        0.82
    ],
    [
        "demonology",
        "demonology-legacy",
        "contains",
        "Demonology legacy is a primary trailhead under Demonology.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
