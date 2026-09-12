/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mls",
        "name": "Major League Soccer",
        "type": "topic",
        "short_description": "North America's top soccer league — expansion clubs, Designated Players, and cup runs.",
        "description": "North America's top soccer league — expansion clubs, Designated Players, and cup runs. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Soccer so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "mls-figures",
        "name": "Major League Soccer figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Major League Soccer.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Soccer."
    },
    {
        "slug": "mls-teams",
        "name": "Major League Soccer teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Major League Soccer.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Major League Soccer."
    },
    {
        "slug": "mls-venues",
        "name": "Major League Soccer venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Major League Soccer.",
        "description": "Places where Major League Soccer is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "mls-events",
        "name": "Major League Soccer events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Major League Soccer.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Major League Soccer."
    },
    {
        "slug": "mls-rules",
        "name": "Major League Soccer rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Major League Soccer.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Soccer legible as a sport."
    },
    {
        "slug": "mls-places",
        "name": "Major League Soccer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Major League Soccer.",
        "description": "Places, regions, and built sites that give Major League Soccer its map — where events and figures concentrate."
    },
    {
        "slug": "mls-objects",
        "name": "Major League Soccer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Major League Soccer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Major League Soccer."
    },
    {
        "slug": "mls-factions",
        "name": "Major League Soccer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Major League Soccer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Major League Soccer."
    },
    {
        "slug": "mls-concepts",
        "name": "Major League Soccer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Major League Soccer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Major League Soccer readable as a lore graph."
    },
    {
        "slug": "mls-eras",
        "name": "Major League Soccer eras",
        "type": "event",
        "short_description": "Periodization for Major League Soccer.",
        "description": "Named eras and phases that help readers track how Major League Soccer changes across time."
    },
    {
        "slug": "mls-works",
        "name": "Major League Soccer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Major League Soccer.",
        "description": "Primary works and adaptations through which most audiences encounter Major League Soccer."
    },
    {
        "slug": "mls-symbols",
        "name": "Major League Soccer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Major League Soccer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Major League Soccer."
    },
    {
        "slug": "mls-controversies",
        "name": "Major League Soccer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Major League Soccer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Major League Soccer argumentative."
    },
    {
        "slug": "mls-sources",
        "name": "Major League Soccer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Major League Soccer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Major League Soccer."
    }
];

const relationships = [
    [
        "mls",
        "mls-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mls",
        "mls-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mls-figures",
        "mls-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mls-events",
        "mls-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "mls",
        "mls-places",
        "contains",
        "Major League Soccer places is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-objects",
        "contains",
        "Major League Soccer objects & artifacts is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-factions",
        "contains",
        "Major League Soccer factions & groups is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-concepts",
        "contains",
        "Major League Soccer concepts is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-eras",
        "contains",
        "Major League Soccer eras is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-works",
        "contains",
        "Major League Soccer works & media is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-symbols",
        "contains",
        "Major League Soccer symbols is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-controversies",
        "contains",
        "Major League Soccer controversies is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-sources",
        "contains",
        "Major League Soccer sources is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
