/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-exorcist",
        "name": "The Exorcist",
        "type": "topic",
        "short_description": "Possession cinema and Catholic dread that still set the possession-horror template.",
        "description": "Possession cinema and Catholic dread that still set the possession-horror template. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Exorcist so readers can follow long-tail connections across horror."
    },
    {
        "slug": "the-exorcist-figures",
        "name": "The Exorcist figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Exorcist.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Exorcist."
    },
    {
        "slug": "the-exorcist-world",
        "name": "The Exorcist world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Exorcist.",
        "description": "Geography, institutions, and periodization that give The Exorcist its encyclopedia shape."
    },
    {
        "slug": "the-exorcist-places",
        "name": "The Exorcist places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Exorcist.",
        "description": "Places, regions, and built sites that give The Exorcist its map — where events and figures concentrate."
    },
    {
        "slug": "the-exorcist-events",
        "name": "The Exorcist events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Exorcist.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Exorcist timeline."
    },
    {
        "slug": "the-exorcist-objects",
        "name": "The Exorcist objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Exorcist.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Exorcist."
    },
    {
        "slug": "the-exorcist-factions",
        "name": "The Exorcist factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Exorcist.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Exorcist."
    },
    {
        "slug": "the-exorcist-concepts",
        "name": "The Exorcist concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Exorcist.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Exorcist readable as a lore graph."
    },
    {
        "slug": "the-exorcist-eras",
        "name": "The Exorcist eras",
        "type": "event",
        "short_description": "Periodization for The Exorcist.",
        "description": "Named eras and phases that help readers track how The Exorcist changes across time."
    },
    {
        "slug": "the-exorcist-works",
        "name": "The Exorcist works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Exorcist.",
        "description": "Primary works and adaptations through which most audiences encounter The Exorcist."
    },
    {
        "slug": "the-exorcist-symbols",
        "name": "The Exorcist symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Exorcist.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Exorcist."
    },
    {
        "slug": "the-exorcist-controversies",
        "name": "The Exorcist controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Exorcist.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Exorcist argumentative."
    },
    {
        "slug": "the-exorcist-sources",
        "name": "The Exorcist sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Exorcist.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Exorcist."
    },
    {
        "slug": "the-exorcist-geography",
        "name": "The Exorcist geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Exorcist.",
        "description": "Regions, routes, and spatial systems that situate The Exorcist beyond single named places."
    },
    {
        "slug": "the-exorcist-legacy",
        "name": "The Exorcist legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Exorcist.",
        "description": "How The Exorcist continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "the-exorcist",
        "the-exorcist-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-exorcist",
        "the-exorcist-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-exorcist",
        "the-exorcist-places",
        "contains",
        "The Exorcist places is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-events",
        "contains",
        "The Exorcist events is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-objects",
        "contains",
        "The Exorcist objects & artifacts is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-factions",
        "contains",
        "The Exorcist factions & groups is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-concepts",
        "contains",
        "The Exorcist concepts is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-eras",
        "contains",
        "The Exorcist eras is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-works",
        "contains",
        "The Exorcist works & media is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-symbols",
        "contains",
        "The Exorcist symbols is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-controversies",
        "contains",
        "The Exorcist controversies is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-sources",
        "contains",
        "The Exorcist sources is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-geography",
        "contains",
        "The Exorcist geography is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ],
    [
        "the-exorcist",
        "the-exorcist-legacy",
        "contains",
        "The Exorcist legacy is a primary trailhead under The Exorcist.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
