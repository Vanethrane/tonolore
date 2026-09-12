/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-beatles",
        "name": "The Beatles",
        "type": "topic",
        "short_description": "The Liverpool band whose songbook and studio experiments became a global popular-music grammar.",
        "description": "The Liverpool band whose songbook and studio experiments became a global popular-music grammar. This Ton-o-Lore subject maps people, works, places, and ideas tied to The Beatles so readers can follow long-tail connections across the rock tradition."
    },
    {
        "slug": "the-beatles-catalog",
        "name": "The Beatles catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with The Beatles.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter The Beatles in the rock tradition."
    },
    {
        "slug": "the-beatles-era",
        "name": "The Beatles eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the The Beatles story.",
        "description": "Periodization helps encyclopedia readers track how The Beatles changed sound, lineup, or public myth across decades of rock history."
    },
    {
        "slug": "the-beatles-figures",
        "name": "The Beatles figures",
        "type": "topic",
        "short_description": "People and named forces central to The Beatles.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Beatles."
    },
    {
        "slug": "the-beatles-places",
        "name": "The Beatles places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Beatles.",
        "description": "Places, regions, and built sites that give The Beatles its map — where events and figures concentrate."
    },
    {
        "slug": "the-beatles-events",
        "name": "The Beatles events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Beatles.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Beatles timeline."
    },
    {
        "slug": "the-beatles-objects",
        "name": "The Beatles objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Beatles.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Beatles."
    },
    {
        "slug": "the-beatles-factions",
        "name": "The Beatles factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Beatles.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Beatles."
    },
    {
        "slug": "the-beatles-concepts",
        "name": "The Beatles concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Beatles.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Beatles readable as a lore graph."
    },
    {
        "slug": "the-beatles-eras",
        "name": "The Beatles eras",
        "type": "event",
        "short_description": "Periodization for The Beatles.",
        "description": "Named eras and phases that help readers track how The Beatles changes across time."
    },
    {
        "slug": "the-beatles-works",
        "name": "The Beatles works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Beatles.",
        "description": "Primary works and adaptations through which most audiences encounter The Beatles."
    },
    {
        "slug": "the-beatles-symbols",
        "name": "The Beatles symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Beatles.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Beatles."
    },
    {
        "slug": "the-beatles-controversies",
        "name": "The Beatles controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Beatles.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Beatles argumentative."
    },
    {
        "slug": "the-beatles-sources",
        "name": "The Beatles sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Beatles.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Beatles."
    },
    {
        "slug": "the-beatles-geography",
        "name": "The Beatles geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Beatles.",
        "description": "Regions, routes, and spatial systems that situate The Beatles beyond single named places."
    }
];

const relationships = [
    [
        "the-beatles",
        "the-beatles-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "the-beatles",
        "the-beatles-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "the-beatles",
        "the-beatles-figures",
        "contains",
        "The Beatles figures is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-places",
        "contains",
        "The Beatles places is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-events",
        "contains",
        "The Beatles events is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-objects",
        "contains",
        "The Beatles objects & artifacts is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-factions",
        "contains",
        "The Beatles factions & groups is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-concepts",
        "contains",
        "The Beatles concepts is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-eras",
        "contains",
        "The Beatles eras is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-works",
        "contains",
        "The Beatles works & media is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-symbols",
        "contains",
        "The Beatles symbols is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-controversies",
        "contains",
        "The Beatles controversies is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-sources",
        "contains",
        "The Beatles sources is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ],
    [
        "the-beatles",
        "the-beatles-geography",
        "contains",
        "The Beatles geography is a primary trailhead under The Beatles.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
