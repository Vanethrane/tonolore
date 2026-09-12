/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "daft-punk",
        "name": "Daft Punk",
        "type": "topic",
        "short_description": "Helmeted duo whose house, disco, and robot mythos crossed club culture into mainstream lore.",
        "description": "Helmeted duo whose house, disco, and robot mythos crossed club culture into mainstream lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Daft Punk so readers can follow long-tail connections across the electronic tradition."
    },
    {
        "slug": "daft-punk-catalog",
        "name": "Daft Punk catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Daft Punk.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Daft Punk in the electronic tradition."
    },
    {
        "slug": "daft-punk-era",
        "name": "Daft Punk eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Daft Punk story.",
        "description": "Periodization helps encyclopedia readers track how Daft Punk changed sound, lineup, or public myth across decades of electronic history."
    },
    {
        "slug": "daft-punk-figures",
        "name": "Daft Punk figures",
        "type": "topic",
        "short_description": "People and named forces central to Daft Punk.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Daft Punk."
    },
    {
        "slug": "daft-punk-places",
        "name": "Daft Punk places",
        "type": "place",
        "short_description": "Locations and geographies that frame Daft Punk.",
        "description": "Places, regions, and built sites that give Daft Punk its map — where events and figures concentrate."
    },
    {
        "slug": "daft-punk-events",
        "name": "Daft Punk events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Daft Punk.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Daft Punk timeline."
    },
    {
        "slug": "daft-punk-objects",
        "name": "Daft Punk objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Daft Punk.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Daft Punk."
    },
    {
        "slug": "daft-punk-factions",
        "name": "Daft Punk factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Daft Punk.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Daft Punk."
    },
    {
        "slug": "daft-punk-concepts",
        "name": "Daft Punk concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Daft Punk.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Daft Punk readable as a lore graph."
    },
    {
        "slug": "daft-punk-eras",
        "name": "Daft Punk eras",
        "type": "event",
        "short_description": "Periodization for Daft Punk.",
        "description": "Named eras and phases that help readers track how Daft Punk changes across time."
    },
    {
        "slug": "daft-punk-works",
        "name": "Daft Punk works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Daft Punk.",
        "description": "Primary works and adaptations through which most audiences encounter Daft Punk."
    },
    {
        "slug": "daft-punk-symbols",
        "name": "Daft Punk symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Daft Punk.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Daft Punk."
    },
    {
        "slug": "daft-punk-controversies",
        "name": "Daft Punk controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Daft Punk.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Daft Punk argumentative."
    },
    {
        "slug": "daft-punk-sources",
        "name": "Daft Punk sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Daft Punk.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Daft Punk."
    },
    {
        "slug": "daft-punk-geography",
        "name": "Daft Punk geography",
        "type": "place",
        "short_description": "Broader geographic framing for Daft Punk.",
        "description": "Regions, routes, and spatial systems that situate Daft Punk beyond single named places."
    }
];

const relationships = [
    [
        "daft-punk",
        "daft-punk-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "daft-punk",
        "daft-punk-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "daft-punk",
        "daft-punk-figures",
        "contains",
        "Daft Punk figures is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-places",
        "contains",
        "Daft Punk places is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-events",
        "contains",
        "Daft Punk events is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-objects",
        "contains",
        "Daft Punk objects & artifacts is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-factions",
        "contains",
        "Daft Punk factions & groups is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-concepts",
        "contains",
        "Daft Punk concepts is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-eras",
        "contains",
        "Daft Punk eras is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-works",
        "contains",
        "Daft Punk works & media is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-symbols",
        "contains",
        "Daft Punk symbols is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-controversies",
        "contains",
        "Daft Punk controversies is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-sources",
        "contains",
        "Daft Punk sources is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ],
    [
        "daft-punk",
        "daft-punk-geography",
        "contains",
        "Daft Punk geography is a primary trailhead under Daft Punk.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
