/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fiba-basketball-world-cup",
        "name": "FIBA Basketball World Cup",
        "type": "topic",
        "short_description": "The global national-team basketball championship run by FIBA.",
        "description": "The global national-team basketball championship run by FIBA. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIBA Basketball World Cup so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "fiba-basketball-world-cup-figures",
        "name": "FIBA Basketball World Cup figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to FIBA Basketball World Cup.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-teams",
        "name": "FIBA Basketball World Cup teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to FIBA Basketball World Cup.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-venues",
        "name": "FIBA Basketball World Cup venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host FIBA Basketball World Cup.",
        "description": "Places where FIBA Basketball World Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "fiba-basketball-world-cup-events",
        "name": "FIBA Basketball World Cup events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in FIBA Basketball World Cup.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-rules",
        "name": "FIBA Basketball World Cup rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for FIBA Basketball World Cup.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make FIBA Basketball World Cup legible as a sport."
    },
    {
        "slug": "fiba-basketball-world-cup-places",
        "name": "FIBA Basketball World Cup places",
        "type": "place",
        "short_description": "Locations and geographies that frame FIBA Basketball World Cup.",
        "description": "Places, regions, and built sites that give FIBA Basketball World Cup its map — where events and figures concentrate."
    },
    {
        "slug": "fiba-basketball-world-cup-objects",
        "name": "FIBA Basketball World Cup objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to FIBA Basketball World Cup.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-factions",
        "name": "FIBA Basketball World Cup factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside FIBA Basketball World Cup.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-concepts",
        "name": "FIBA Basketball World Cup concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize FIBA Basketball World Cup.",
        "description": "Keywords, doctrines, systems, and abstract forces that make FIBA Basketball World Cup readable as a lore graph."
    },
    {
        "slug": "fiba-basketball-world-cup-eras",
        "name": "FIBA Basketball World Cup eras",
        "type": "event",
        "short_description": "Periodization for FIBA Basketball World Cup.",
        "description": "Named eras and phases that help readers track how FIBA Basketball World Cup changes across time."
    },
    {
        "slug": "fiba-basketball-world-cup-works",
        "name": "FIBA Basketball World Cup works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry FIBA Basketball World Cup.",
        "description": "Primary works and adaptations through which most audiences encounter FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-symbols",
        "name": "FIBA Basketball World Cup symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with FIBA Basketball World Cup.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-controversies",
        "name": "FIBA Basketball World Cup controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in FIBA Basketball World Cup.",
        "description": "Debates, rival canons, scandals, and contested facts that keep FIBA Basketball World Cup argumentative."
    },
    {
        "slug": "fiba-basketball-world-cup-sources",
        "name": "FIBA Basketball World Cup sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into FIBA Basketball World Cup.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify FIBA Basketball World Cup."
    }
];

const relationships = [
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup-figures",
        "fiba-basketball-world-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "fiba-basketball-world-cup-events",
        "fiba-basketball-world-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-places",
        "contains",
        "FIBA Basketball World Cup places is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-objects",
        "contains",
        "FIBA Basketball World Cup objects & artifacts is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-factions",
        "contains",
        "FIBA Basketball World Cup factions & groups is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-concepts",
        "contains",
        "FIBA Basketball World Cup concepts is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-eras",
        "contains",
        "FIBA Basketball World Cup eras is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-works",
        "contains",
        "FIBA Basketball World Cup works & media is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-symbols",
        "contains",
        "FIBA Basketball World Cup symbols is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-controversies",
        "contains",
        "FIBA Basketball World Cup controversies is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-sources",
        "contains",
        "FIBA Basketball World Cup sources is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
