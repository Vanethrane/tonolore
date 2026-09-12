/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wnba",
        "name": "WNBA",
        "type": "topic",
        "short_description": "The Women's National Basketball Association — stars, rivalries, and expanding league lore.",
        "description": "The Women's National Basketball Association — stars, rivalries, and expanding league lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to WNBA so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "wnba-figures",
        "name": "WNBA figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to WNBA.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring WNBA."
    },
    {
        "slug": "wnba-teams",
        "name": "WNBA teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to WNBA.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around WNBA."
    },
    {
        "slug": "wnba-venues",
        "name": "WNBA venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host WNBA.",
        "description": "Places where WNBA is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "wnba-events",
        "name": "WNBA events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in WNBA.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about WNBA."
    },
    {
        "slug": "wnba-rules",
        "name": "WNBA rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for WNBA.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make WNBA legible as a sport."
    },
    {
        "slug": "wnba-places",
        "name": "WNBA places",
        "type": "place",
        "short_description": "Locations and geographies that frame WNBA.",
        "description": "Places, regions, and built sites that give WNBA its map — where events and figures concentrate."
    },
    {
        "slug": "wnba-objects",
        "name": "WNBA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WNBA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WNBA."
    },
    {
        "slug": "wnba-factions",
        "name": "WNBA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WNBA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WNBA."
    },
    {
        "slug": "wnba-concepts",
        "name": "WNBA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WNBA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WNBA readable as a lore graph."
    },
    {
        "slug": "wnba-eras",
        "name": "WNBA eras",
        "type": "event",
        "short_description": "Periodization for WNBA.",
        "description": "Named eras and phases that help readers track how WNBA changes across time."
    },
    {
        "slug": "wnba-works",
        "name": "WNBA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WNBA.",
        "description": "Primary works and adaptations through which most audiences encounter WNBA."
    },
    {
        "slug": "wnba-symbols",
        "name": "WNBA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WNBA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WNBA."
    },
    {
        "slug": "wnba-controversies",
        "name": "WNBA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WNBA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WNBA argumentative."
    },
    {
        "slug": "wnba-sources",
        "name": "WNBA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WNBA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WNBA."
    }
];

const relationships = [
    [
        "wnba",
        "wnba-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "wnba",
        "wnba-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "wnba-figures",
        "wnba-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "wnba-events",
        "wnba-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "wnba",
        "wnba-places",
        "contains",
        "WNBA places is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-objects",
        "contains",
        "WNBA objects & artifacts is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-factions",
        "contains",
        "WNBA factions & groups is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-concepts",
        "contains",
        "WNBA concepts is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-eras",
        "contains",
        "WNBA eras is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-works",
        "contains",
        "WNBA works & media is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-symbols",
        "contains",
        "WNBA symbols is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-controversies",
        "contains",
        "WNBA controversies is a primary trailhead under WNBA.",
        0.88,
        0.82
    ],
    [
        "wnba",
        "wnba-sources",
        "contains",
        "WNBA sources is a primary trailhead under WNBA.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
