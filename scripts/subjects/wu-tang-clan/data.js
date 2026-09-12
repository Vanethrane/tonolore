/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wu-tang-clan",
        "name": "Wu-Tang Clan",
        "type": "topic",
        "short_description": "A Staten Island collective whose martial-arts mythology and sprawling solo catalog remapped hip-hop lore.",
        "description": "A Staten Island collective whose martial-arts mythology and sprawling solo catalog remapped hip-hop lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Wu-Tang Clan so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        "slug": "wu-tang-clan-catalog",
        "name": "Wu-Tang Clan catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Wu-Tang Clan.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Wu-Tang Clan in the hip-hop tradition."
    },
    {
        "slug": "wu-tang-clan-era",
        "name": "Wu-Tang Clan eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Wu-Tang Clan story.",
        "description": "Periodization helps encyclopedia readers track how Wu-Tang Clan changed sound, lineup, or public myth across decades of hip-hop history."
    },
    {
        "slug": "wu-tang-clan-figures",
        "name": "Wu-Tang Clan figures",
        "type": "topic",
        "short_description": "People and named forces central to Wu-Tang Clan.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-places",
        "name": "Wu-Tang Clan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wu-Tang Clan.",
        "description": "Places, regions, and built sites that give Wu-Tang Clan its map — where events and figures concentrate."
    },
    {
        "slug": "wu-tang-clan-events",
        "name": "Wu-Tang Clan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wu-Tang Clan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wu-Tang Clan timeline."
    },
    {
        "slug": "wu-tang-clan-objects",
        "name": "Wu-Tang Clan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wu-Tang Clan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-factions",
        "name": "Wu-Tang Clan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wu-Tang Clan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-concepts",
        "name": "Wu-Tang Clan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wu-Tang Clan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wu-Tang Clan readable as a lore graph."
    },
    {
        "slug": "wu-tang-clan-eras",
        "name": "Wu-Tang Clan eras",
        "type": "event",
        "short_description": "Periodization for Wu-Tang Clan.",
        "description": "Named eras and phases that help readers track how Wu-Tang Clan changes across time."
    },
    {
        "slug": "wu-tang-clan-works",
        "name": "Wu-Tang Clan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wu-Tang Clan.",
        "description": "Primary works and adaptations through which most audiences encounter Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-symbols",
        "name": "Wu-Tang Clan symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wu-Tang Clan.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-controversies",
        "name": "Wu-Tang Clan controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wu-Tang Clan.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wu-Tang Clan argumentative."
    },
    {
        "slug": "wu-tang-clan-sources",
        "name": "Wu-Tang Clan sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wu-Tang Clan.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wu-Tang Clan."
    },
    {
        "slug": "wu-tang-clan-geography",
        "name": "Wu-Tang Clan geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wu-Tang Clan.",
        "description": "Regions, routes, and spatial systems that situate Wu-Tang Clan beyond single named places."
    }
];

const relationships = [
    [
        "wu-tang-clan",
        "wu-tang-clan-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-figures",
        "contains",
        "Wu-Tang Clan figures is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-places",
        "contains",
        "Wu-Tang Clan places is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-events",
        "contains",
        "Wu-Tang Clan events is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-objects",
        "contains",
        "Wu-Tang Clan objects & artifacts is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-factions",
        "contains",
        "Wu-Tang Clan factions & groups is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-concepts",
        "contains",
        "Wu-Tang Clan concepts is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-eras",
        "contains",
        "Wu-Tang Clan eras is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-works",
        "contains",
        "Wu-Tang Clan works & media is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-symbols",
        "contains",
        "Wu-Tang Clan symbols is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-controversies",
        "contains",
        "Wu-Tang Clan controversies is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-sources",
        "contains",
        "Wu-Tang Clan sources is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-geography",
        "contains",
        "Wu-Tang Clan geography is a primary trailhead under Wu-Tang Clan.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
