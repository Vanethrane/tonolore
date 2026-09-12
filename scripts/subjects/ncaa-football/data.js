/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ncaa-football",
        "name": "NCAA football",
        "type": "topic",
        "short_description": "College football — conferences, rivalries, and the road to national titles.",
        "description": "College football — conferences, rivalries, and the road to national titles. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA football so readers can follow long-tail connections across american football."
    },
    {
        "slug": "ncaa-football-figures",
        "name": "NCAA football figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NCAA football.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA football."
    },
    {
        "slug": "ncaa-football-teams",
        "name": "NCAA football teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NCAA football.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NCAA football."
    },
    {
        "slug": "ncaa-football-venues",
        "name": "NCAA football venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NCAA football.",
        "description": "Places where NCAA football is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ncaa-football-events",
        "name": "NCAA football events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NCAA football.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NCAA football."
    },
    {
        "slug": "ncaa-football-rules",
        "name": "NCAA football rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NCAA football.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA football legible as a sport."
    },
    {
        "slug": "ncaa-football-places",
        "name": "NCAA football places",
        "type": "place",
        "short_description": "Locations and geographies that frame NCAA football.",
        "description": "Places, regions, and built sites that give NCAA football its map — where events and figures concentrate."
    },
    {
        "slug": "ncaa-football-objects",
        "name": "NCAA football objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NCAA football.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NCAA football."
    },
    {
        "slug": "ncaa-football-factions",
        "name": "NCAA football factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NCAA football.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NCAA football."
    },
    {
        "slug": "ncaa-football-concepts",
        "name": "NCAA football concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NCAA football.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NCAA football readable as a lore graph."
    },
    {
        "slug": "ncaa-football-eras",
        "name": "NCAA football eras",
        "type": "event",
        "short_description": "Periodization for NCAA football.",
        "description": "Named eras and phases that help readers track how NCAA football changes across time."
    },
    {
        "slug": "ncaa-football-works",
        "name": "NCAA football works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NCAA football.",
        "description": "Primary works and adaptations through which most audiences encounter NCAA football."
    },
    {
        "slug": "ncaa-football-symbols",
        "name": "NCAA football symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NCAA football.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NCAA football."
    },
    {
        "slug": "ncaa-football-controversies",
        "name": "NCAA football controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NCAA football.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NCAA football argumentative."
    },
    {
        "slug": "ncaa-football-sources",
        "name": "NCAA football sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NCAA football.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NCAA football."
    }
];

const relationships = [
    [
        "ncaa-football",
        "ncaa-football-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-football",
        "ncaa-football-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-football-figures",
        "ncaa-football-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-football-events",
        "ncaa-football-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ncaa-football",
        "ncaa-football-places",
        "contains",
        "NCAA football places is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-objects",
        "contains",
        "NCAA football objects & artifacts is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-factions",
        "contains",
        "NCAA football factions & groups is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-concepts",
        "contains",
        "NCAA football concepts is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-eras",
        "contains",
        "NCAA football eras is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-works",
        "contains",
        "NCAA football works & media is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-symbols",
        "contains",
        "NCAA football symbols is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-controversies",
        "contains",
        "NCAA football controversies is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-sources",
        "contains",
        "NCAA football sources is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
