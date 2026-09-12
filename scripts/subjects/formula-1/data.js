/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "formula-1",
        "name": "Formula 1",
        "type": "topic",
        "short_description": "Grand Prix racing — constructors, circuits, and technical eras at the limit.",
        "description": "Grand Prix racing — constructors, circuits, and technical eras at the limit. This Ton-o-Lore subject maps people, places, events, and ideas tied to Formula 1 so readers can follow long-tail connections across motorsport."
    },
    {
        "slug": "formula-1-figures",
        "name": "Formula 1 figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Formula 1.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Formula 1."
    },
    {
        "slug": "formula-1-teams",
        "name": "Formula 1 teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Formula 1.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Formula 1."
    },
    {
        "slug": "formula-1-venues",
        "name": "Formula 1 venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Formula 1.",
        "description": "Places where Formula 1 is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "formula-1-events",
        "name": "Formula 1 events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Formula 1.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Formula 1."
    },
    {
        "slug": "formula-1-rules",
        "name": "Formula 1 rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Formula 1.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Formula 1 legible as a sport."
    },
    {
        "slug": "formula-1-places",
        "name": "Formula 1 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Formula 1.",
        "description": "Places, regions, and built sites that give Formula 1 its map — where events and figures concentrate."
    },
    {
        "slug": "formula-1-objects",
        "name": "Formula 1 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Formula 1.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Formula 1."
    },
    {
        "slug": "formula-1-factions",
        "name": "Formula 1 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Formula 1.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Formula 1."
    },
    {
        "slug": "formula-1-concepts",
        "name": "Formula 1 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Formula 1.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Formula 1 readable as a lore graph."
    },
    {
        "slug": "formula-1-eras",
        "name": "Formula 1 eras",
        "type": "event",
        "short_description": "Periodization for Formula 1.",
        "description": "Named eras and phases that help readers track how Formula 1 changes across time."
    },
    {
        "slug": "formula-1-works",
        "name": "Formula 1 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Formula 1.",
        "description": "Primary works and adaptations through which most audiences encounter Formula 1."
    },
    {
        "slug": "formula-1-symbols",
        "name": "Formula 1 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Formula 1.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Formula 1."
    },
    {
        "slug": "formula-1-controversies",
        "name": "Formula 1 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Formula 1.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Formula 1 argumentative."
    },
    {
        "slug": "formula-1-sources",
        "name": "Formula 1 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Formula 1.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Formula 1."
    }
];

const relationships = [
    [
        "formula-1",
        "formula-1-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "formula-1",
        "formula-1-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "formula-1-figures",
        "formula-1-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "formula-1-events",
        "formula-1-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "formula-1",
        "formula-1-places",
        "contains",
        "Formula 1 places is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-objects",
        "contains",
        "Formula 1 objects & artifacts is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-factions",
        "contains",
        "Formula 1 factions & groups is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-concepts",
        "contains",
        "Formula 1 concepts is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-eras",
        "contains",
        "Formula 1 eras is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-works",
        "contains",
        "Formula 1 works & media is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-symbols",
        "contains",
        "Formula 1 symbols is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-controversies",
        "contains",
        "Formula 1 controversies is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ],
    [
        "formula-1",
        "formula-1-sources",
        "contains",
        "Formula 1 sources is a primary trailhead under Formula 1.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
