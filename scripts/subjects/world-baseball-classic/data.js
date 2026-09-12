/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-baseball-classic",
        "name": "World Baseball Classic",
        "type": "topic",
        "short_description": "The premier national-team baseball tournament on the modern calendar.",
        "description": "The premier national-team baseball tournament on the modern calendar. This Ton-o-Lore subject maps people, places, events, and ideas tied to World Baseball Classic so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "world-baseball-classic-figures",
        "name": "World Baseball Classic figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to World Baseball Classic.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-teams",
        "name": "World Baseball Classic teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to World Baseball Classic.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-venues",
        "name": "World Baseball Classic venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host World Baseball Classic.",
        "description": "Places where World Baseball Classic is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "world-baseball-classic-events",
        "name": "World Baseball Classic events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in World Baseball Classic.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-rules",
        "name": "World Baseball Classic rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for World Baseball Classic.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make World Baseball Classic legible as a sport."
    },
    {
        "slug": "world-baseball-classic-places",
        "name": "World Baseball Classic places",
        "type": "place",
        "short_description": "Locations and geographies that frame World Baseball Classic.",
        "description": "Places, regions, and built sites that give World Baseball Classic its map — where events and figures concentrate."
    },
    {
        "slug": "world-baseball-classic-objects",
        "name": "World Baseball Classic objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World Baseball Classic.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-factions",
        "name": "World Baseball Classic factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World Baseball Classic.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-concepts",
        "name": "World Baseball Classic concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World Baseball Classic.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World Baseball Classic readable as a lore graph."
    },
    {
        "slug": "world-baseball-classic-eras",
        "name": "World Baseball Classic eras",
        "type": "event",
        "short_description": "Periodization for World Baseball Classic.",
        "description": "Named eras and phases that help readers track how World Baseball Classic changes across time."
    },
    {
        "slug": "world-baseball-classic-works",
        "name": "World Baseball Classic works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World Baseball Classic.",
        "description": "Primary works and adaptations through which most audiences encounter World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-symbols",
        "name": "World Baseball Classic symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World Baseball Classic.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World Baseball Classic."
    },
    {
        "slug": "world-baseball-classic-controversies",
        "name": "World Baseball Classic controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World Baseball Classic.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World Baseball Classic argumentative."
    },
    {
        "slug": "world-baseball-classic-sources",
        "name": "World Baseball Classic sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World Baseball Classic.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World Baseball Classic."
    }
];

const relationships = [
    [
        "world-baseball-classic",
        "world-baseball-classic-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "world-baseball-classic-figures",
        "world-baseball-classic-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "world-baseball-classic-events",
        "world-baseball-classic-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-places",
        "contains",
        "World Baseball Classic places is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-objects",
        "contains",
        "World Baseball Classic objects & artifacts is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-factions",
        "contains",
        "World Baseball Classic factions & groups is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-concepts",
        "contains",
        "World Baseball Classic concepts is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-eras",
        "contains",
        "World Baseball Classic eras is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-works",
        "contains",
        "World Baseball Classic works & media is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-symbols",
        "contains",
        "World Baseball Classic symbols is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-controversies",
        "contains",
        "World Baseball Classic controversies is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-sources",
        "contains",
        "World Baseball Classic sources is a primary trailhead under World Baseball Classic.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
