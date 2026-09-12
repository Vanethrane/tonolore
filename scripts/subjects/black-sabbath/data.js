/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "black-sabbath",
        "name": "Black Sabbath",
        "type": "topic",
        "short_description": "Birmingham originators whose doom-laden riffs and occult imagery named heavy metal.",
        "description": "Birmingham originators whose doom-laden riffs and occult imagery named heavy metal. This Ton-o-Lore subject maps people, works, places, and ideas tied to Black Sabbath so readers can follow long-tail connections across the metal tradition."
    },
    {
        "slug": "black-sabbath-catalog",
        "name": "Black Sabbath catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Black Sabbath.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Black Sabbath in the metal tradition."
    },
    {
        "slug": "black-sabbath-era",
        "name": "Black Sabbath eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Black Sabbath story.",
        "description": "Periodization helps encyclopedia readers track how Black Sabbath changed sound, lineup, or public myth across decades of metal history."
    },
    {
        "slug": "black-sabbath-figures",
        "name": "Black Sabbath figures",
        "type": "topic",
        "short_description": "People and named forces central to Black Sabbath.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Black Sabbath."
    },
    {
        "slug": "black-sabbath-places",
        "name": "Black Sabbath places",
        "type": "place",
        "short_description": "Locations and geographies that frame Black Sabbath.",
        "description": "Places, regions, and built sites that give Black Sabbath its map — where events and figures concentrate."
    },
    {
        "slug": "black-sabbath-events",
        "name": "Black Sabbath events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Black Sabbath.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Black Sabbath timeline."
    },
    {
        "slug": "black-sabbath-objects",
        "name": "Black Sabbath objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Black Sabbath.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Black Sabbath."
    },
    {
        "slug": "black-sabbath-factions",
        "name": "Black Sabbath factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Black Sabbath.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Black Sabbath."
    },
    {
        "slug": "black-sabbath-concepts",
        "name": "Black Sabbath concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Black Sabbath.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Black Sabbath readable as a lore graph."
    },
    {
        "slug": "black-sabbath-eras",
        "name": "Black Sabbath eras",
        "type": "event",
        "short_description": "Periodization for Black Sabbath.",
        "description": "Named eras and phases that help readers track how Black Sabbath changes across time."
    },
    {
        "slug": "black-sabbath-works",
        "name": "Black Sabbath works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Black Sabbath.",
        "description": "Primary works and adaptations through which most audiences encounter Black Sabbath."
    },
    {
        "slug": "black-sabbath-symbols",
        "name": "Black Sabbath symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Black Sabbath.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Black Sabbath."
    },
    {
        "slug": "black-sabbath-controversies",
        "name": "Black Sabbath controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Black Sabbath.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Black Sabbath argumentative."
    },
    {
        "slug": "black-sabbath-sources",
        "name": "Black Sabbath sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Black Sabbath.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Black Sabbath."
    },
    {
        "slug": "black-sabbath-geography",
        "name": "Black Sabbath geography",
        "type": "place",
        "short_description": "Broader geographic framing for Black Sabbath.",
        "description": "Regions, routes, and spatial systems that situate Black Sabbath beyond single named places."
    }
];

const relationships = [
    [
        "black-sabbath",
        "black-sabbath-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "black-sabbath",
        "black-sabbath-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "black-sabbath",
        "black-sabbath-figures",
        "contains",
        "Black Sabbath figures is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-places",
        "contains",
        "Black Sabbath places is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-events",
        "contains",
        "Black Sabbath events is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-objects",
        "contains",
        "Black Sabbath objects & artifacts is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-factions",
        "contains",
        "Black Sabbath factions & groups is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-concepts",
        "contains",
        "Black Sabbath concepts is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-eras",
        "contains",
        "Black Sabbath eras is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-works",
        "contains",
        "Black Sabbath works & media is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-symbols",
        "contains",
        "Black Sabbath symbols is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-controversies",
        "contains",
        "Black Sabbath controversies is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-sources",
        "contains",
        "Black Sabbath sources is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ],
    [
        "black-sabbath",
        "black-sabbath-geography",
        "contains",
        "Black Sabbath geography is a primary trailhead under Black Sabbath.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
