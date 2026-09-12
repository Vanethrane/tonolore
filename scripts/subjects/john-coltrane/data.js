/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "john-coltrane",
        "name": "John Coltrane",
        "type": "topic",
        "short_description": "Saxophonist whose sheets of sound and spiritual late work remain a center of jazz study.",
        "description": "Saxophonist whose sheets of sound and spiritual late work remain a center of jazz study. This Ton-o-Lore subject maps people, works, places, and ideas tied to John Coltrane so readers can follow long-tail connections across the jazz tradition."
    },
    {
        "slug": "john-coltrane-catalog",
        "name": "John Coltrane catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with John Coltrane.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter John Coltrane in the jazz tradition."
    },
    {
        "slug": "john-coltrane-era",
        "name": "John Coltrane eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the John Coltrane story.",
        "description": "Periodization helps encyclopedia readers track how John Coltrane changed sound, lineup, or public myth across decades of jazz history."
    },
    {
        "slug": "john-coltrane-figures",
        "name": "John Coltrane figures",
        "type": "topic",
        "short_description": "People and named forces central to John Coltrane.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring John Coltrane."
    },
    {
        "slug": "john-coltrane-places",
        "name": "John Coltrane places",
        "type": "place",
        "short_description": "Locations and geographies that frame John Coltrane.",
        "description": "Places, regions, and built sites that give John Coltrane its map — where events and figures concentrate."
    },
    {
        "slug": "john-coltrane-events",
        "name": "John Coltrane events",
        "type": "event",
        "short_description": "Turning points and dated episodes in John Coltrane.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the John Coltrane timeline."
    },
    {
        "slug": "john-coltrane-objects",
        "name": "John Coltrane objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to John Coltrane.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through John Coltrane."
    },
    {
        "slug": "john-coltrane-factions",
        "name": "John Coltrane factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside John Coltrane.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in John Coltrane."
    },
    {
        "slug": "john-coltrane-concepts",
        "name": "John Coltrane concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize John Coltrane.",
        "description": "Keywords, doctrines, systems, and abstract forces that make John Coltrane readable as a lore graph."
    },
    {
        "slug": "john-coltrane-eras",
        "name": "John Coltrane eras",
        "type": "event",
        "short_description": "Periodization for John Coltrane.",
        "description": "Named eras and phases that help readers track how John Coltrane changes across time."
    },
    {
        "slug": "john-coltrane-works",
        "name": "John Coltrane works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry John Coltrane.",
        "description": "Primary works and adaptations through which most audiences encounter John Coltrane."
    },
    {
        "slug": "john-coltrane-symbols",
        "name": "John Coltrane symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with John Coltrane.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside John Coltrane."
    },
    {
        "slug": "john-coltrane-controversies",
        "name": "John Coltrane controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in John Coltrane.",
        "description": "Debates, rival canons, scandals, and contested facts that keep John Coltrane argumentative."
    },
    {
        "slug": "john-coltrane-sources",
        "name": "John Coltrane sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into John Coltrane.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify John Coltrane."
    },
    {
        "slug": "john-coltrane-geography",
        "name": "John Coltrane geography",
        "type": "place",
        "short_description": "Broader geographic framing for John Coltrane.",
        "description": "Regions, routes, and spatial systems that situate John Coltrane beyond single named places."
    }
];

const relationships = [
    [
        "john-coltrane",
        "john-coltrane-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "john-coltrane",
        "john-coltrane-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "john-coltrane",
        "john-coltrane-figures",
        "contains",
        "John Coltrane figures is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-places",
        "contains",
        "John Coltrane places is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-events",
        "contains",
        "John Coltrane events is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-objects",
        "contains",
        "John Coltrane objects & artifacts is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-factions",
        "contains",
        "John Coltrane factions & groups is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-concepts",
        "contains",
        "John Coltrane concepts is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-eras",
        "contains",
        "John Coltrane eras is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-works",
        "contains",
        "John Coltrane works & media is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-symbols",
        "contains",
        "John Coltrane symbols is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-controversies",
        "contains",
        "John Coltrane controversies is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-sources",
        "contains",
        "John Coltrane sources is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ],
    [
        "john-coltrane",
        "john-coltrane-geography",
        "contains",
        "John Coltrane geography is a primary trailhead under John Coltrane.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
