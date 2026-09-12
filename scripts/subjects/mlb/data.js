/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mlb",
        "name": "Major League Baseball",
        "type": "topic",
        "short_description": "America's major leagues — pennants, World Series, and ballpark mythology.",
        "description": "America's major leagues — pennants, World Series, and ballpark mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Baseball so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "mlb-figures",
        "name": "Major League Baseball figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Major League Baseball.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Baseball."
    },
    {
        "slug": "mlb-teams",
        "name": "Major League Baseball teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Major League Baseball.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Major League Baseball."
    },
    {
        "slug": "mlb-venues",
        "name": "Major League Baseball venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Major League Baseball.",
        "description": "Places where Major League Baseball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "mlb-events",
        "name": "Major League Baseball events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Major League Baseball.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Major League Baseball."
    },
    {
        "slug": "mlb-rules",
        "name": "Major League Baseball rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Major League Baseball.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Baseball legible as a sport."
    },
    {
        "slug": "mlb-places",
        "name": "Major League Baseball places",
        "type": "place",
        "short_description": "Locations and geographies that frame Major League Baseball.",
        "description": "Places, regions, and built sites that give Major League Baseball its map — where events and figures concentrate."
    },
    {
        "slug": "mlb-objects",
        "name": "Major League Baseball objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Major League Baseball.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Major League Baseball."
    },
    {
        "slug": "mlb-factions",
        "name": "Major League Baseball factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Major League Baseball.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Major League Baseball."
    },
    {
        "slug": "mlb-concepts",
        "name": "Major League Baseball concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Major League Baseball.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Major League Baseball readable as a lore graph."
    },
    {
        "slug": "mlb-eras",
        "name": "Major League Baseball eras",
        "type": "event",
        "short_description": "Periodization for Major League Baseball.",
        "description": "Named eras and phases that help readers track how Major League Baseball changes across time."
    },
    {
        "slug": "mlb-works",
        "name": "Major League Baseball works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Major League Baseball.",
        "description": "Primary works and adaptations through which most audiences encounter Major League Baseball."
    },
    {
        "slug": "mlb-symbols",
        "name": "Major League Baseball symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Major League Baseball.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Major League Baseball."
    },
    {
        "slug": "mlb-controversies",
        "name": "Major League Baseball controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Major League Baseball.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Major League Baseball argumentative."
    },
    {
        "slug": "mlb-sources",
        "name": "Major League Baseball sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Major League Baseball.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Major League Baseball."
    }
];

const relationships = [
    [
        "mlb",
        "mlb-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mlb",
        "mlb-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mlb-figures",
        "mlb-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mlb-events",
        "mlb-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "mlb",
        "mlb-places",
        "contains",
        "Major League Baseball places is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-objects",
        "contains",
        "Major League Baseball objects & artifacts is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-factions",
        "contains",
        "Major League Baseball factions & groups is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-concepts",
        "contains",
        "Major League Baseball concepts is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-eras",
        "contains",
        "Major League Baseball eras is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-works",
        "contains",
        "Major League Baseball works & media is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-symbols",
        "contains",
        "Major League Baseball symbols is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-controversies",
        "contains",
        "Major League Baseball controversies is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-sources",
        "contains",
        "Major League Baseball sources is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
