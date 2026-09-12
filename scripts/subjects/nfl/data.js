/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nfl",
        "name": "NFL",
        "type": "topic",
        "short_description": "The National Football League — franchises, Super Bowls, and Sunday mythology.",
        "description": "The National Football League — franchises, Super Bowls, and Sunday mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to NFL so readers can follow long-tail connections across american football."
    },
    {
        "slug": "nfl-figures",
        "name": "NFL figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NFL.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NFL."
    },
    {
        "slug": "nfl-teams",
        "name": "NFL teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NFL.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NFL."
    },
    {
        "slug": "nfl-venues",
        "name": "NFL venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NFL.",
        "description": "Places where NFL is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "nfl-events",
        "name": "NFL events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NFL.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NFL."
    },
    {
        "slug": "nfl-rules",
        "name": "NFL rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NFL.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NFL legible as a sport."
    },
    {
        "slug": "nfl-places",
        "name": "NFL places",
        "type": "place",
        "short_description": "Locations and geographies that frame NFL.",
        "description": "Places, regions, and built sites that give NFL its map — where events and figures concentrate."
    },
    {
        "slug": "nfl-objects",
        "name": "NFL objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NFL.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NFL."
    },
    {
        "slug": "nfl-factions",
        "name": "NFL factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NFL.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NFL."
    },
    {
        "slug": "nfl-concepts",
        "name": "NFL concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NFL.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NFL readable as a lore graph."
    },
    {
        "slug": "nfl-eras",
        "name": "NFL eras",
        "type": "event",
        "short_description": "Periodization for NFL.",
        "description": "Named eras and phases that help readers track how NFL changes across time."
    },
    {
        "slug": "nfl-works",
        "name": "NFL works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NFL.",
        "description": "Primary works and adaptations through which most audiences encounter NFL."
    },
    {
        "slug": "nfl-symbols",
        "name": "NFL symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NFL.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NFL."
    },
    {
        "slug": "nfl-controversies",
        "name": "NFL controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NFL.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NFL argumentative."
    },
    {
        "slug": "nfl-sources",
        "name": "NFL sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NFL.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NFL."
    }
];

const relationships = [
    [
        "nfl",
        "nfl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nfl",
        "nfl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nfl-figures",
        "nfl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nfl-events",
        "nfl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "nfl",
        "nfl-places",
        "contains",
        "NFL places is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-objects",
        "contains",
        "NFL objects & artifacts is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-factions",
        "contains",
        "NFL factions & groups is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-concepts",
        "contains",
        "NFL concepts is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-eras",
        "contains",
        "NFL eras is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-works",
        "contains",
        "NFL works & media is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-symbols",
        "contains",
        "NFL symbols is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-controversies",
        "contains",
        "NFL controversies is a primary trailhead under NFL.",
        0.88,
        0.82
    ],
    [
        "nfl",
        "nfl-sources",
        "contains",
        "NFL sources is a primary trailhead under NFL.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
