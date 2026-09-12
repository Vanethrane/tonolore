/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "barbie",
        "name": "Barbie",
        "type": "topic",
        "short_description": "Doll lines, careers, media worlds, and the fashion-toy mythology Mattel keeps expanding.",
        "description": "Doll lines, careers, media worlds, and the fashion-toy mythology Mattel keeps expanding. This Ton-o-Lore subject maps people, places, events, and ideas tied to Barbie so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "barbie-figures",
        "name": "Barbie figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Barbie.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Barbie."
    },
    {
        "slug": "barbie-world",
        "name": "Barbie world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Barbie.",
        "description": "Geography, institutions, and periodization that give Barbie its encyclopedia shape."
    },
    {
        "slug": "barbie-places",
        "name": "Barbie places",
        "type": "place",
        "short_description": "Locations and geographies that frame Barbie.",
        "description": "Places, regions, and built sites that give Barbie its map — where events and figures concentrate."
    },
    {
        "slug": "barbie-events",
        "name": "Barbie events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Barbie.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Barbie timeline."
    },
    {
        "slug": "barbie-objects",
        "name": "Barbie objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Barbie.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Barbie."
    },
    {
        "slug": "barbie-factions",
        "name": "Barbie factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Barbie.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Barbie."
    },
    {
        "slug": "barbie-concepts",
        "name": "Barbie concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Barbie.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Barbie readable as a lore graph."
    },
    {
        "slug": "barbie-eras",
        "name": "Barbie eras",
        "type": "event",
        "short_description": "Periodization for Barbie.",
        "description": "Named eras and phases that help readers track how Barbie changes across time."
    },
    {
        "slug": "barbie-works",
        "name": "Barbie works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Barbie.",
        "description": "Primary works and adaptations through which most audiences encounter Barbie."
    },
    {
        "slug": "barbie-symbols",
        "name": "Barbie symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Barbie.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Barbie."
    },
    {
        "slug": "barbie-controversies",
        "name": "Barbie controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Barbie.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Barbie argumentative."
    },
    {
        "slug": "barbie-sources",
        "name": "Barbie sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Barbie.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Barbie."
    },
    {
        "slug": "barbie-geography",
        "name": "Barbie geography",
        "type": "place",
        "short_description": "Broader geographic framing for Barbie.",
        "description": "Regions, routes, and spatial systems that situate Barbie beyond single named places."
    },
    {
        "slug": "barbie-legacy",
        "name": "Barbie legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Barbie.",
        "description": "How Barbie continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "barbie",
        "barbie-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "barbie",
        "barbie-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "barbie",
        "barbie-places",
        "contains",
        "Barbie places is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-events",
        "contains",
        "Barbie events is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-objects",
        "contains",
        "Barbie objects & artifacts is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-factions",
        "contains",
        "Barbie factions & groups is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-concepts",
        "contains",
        "Barbie concepts is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-eras",
        "contains",
        "Barbie eras is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-works",
        "contains",
        "Barbie works & media is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-symbols",
        "contains",
        "Barbie symbols is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-controversies",
        "contains",
        "Barbie controversies is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-sources",
        "contains",
        "Barbie sources is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-geography",
        "contains",
        "Barbie geography is a primary trailhead under Barbie.",
        0.88,
        0.82
    ],
    [
        "barbie",
        "barbie-legacy",
        "contains",
        "Barbie legacy is a primary trailhead under Barbie.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
