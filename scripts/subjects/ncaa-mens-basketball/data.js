/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ncaa-mens-basketball",
        "name": "NCAA men's basketball",
        "type": "topic",
        "short_description": "March Madness and college basketball — programs, brackets, and campus dynasties.",
        "description": "March Madness and college basketball — programs, brackets, and campus dynasties. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA men's basketball so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "ncaa-mens-basketball-figures",
        "name": "NCAA men's basketball figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NCAA men's basketball.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-teams",
        "name": "NCAA men's basketball teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NCAA men's basketball.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-venues",
        "name": "NCAA men's basketball venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NCAA men's basketball.",
        "description": "Places where NCAA men's basketball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ncaa-mens-basketball-events",
        "name": "NCAA men's basketball events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NCAA men's basketball.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-rules",
        "name": "NCAA men's basketball rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NCAA men's basketball.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA men's basketball legible as a sport."
    },
    {
        "slug": "ncaa-mens-basketball-places",
        "name": "NCAA men's basketball places",
        "type": "place",
        "short_description": "Locations and geographies that frame NCAA men's basketball.",
        "description": "Places, regions, and built sites that give NCAA men's basketball its map — where events and figures concentrate."
    },
    {
        "slug": "ncaa-mens-basketball-objects",
        "name": "NCAA men's basketball objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NCAA men's basketball.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-factions",
        "name": "NCAA men's basketball factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NCAA men's basketball.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-concepts",
        "name": "NCAA men's basketball concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NCAA men's basketball.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NCAA men's basketball readable as a lore graph."
    },
    {
        "slug": "ncaa-mens-basketball-eras",
        "name": "NCAA men's basketball eras",
        "type": "event",
        "short_description": "Periodization for NCAA men's basketball.",
        "description": "Named eras and phases that help readers track how NCAA men's basketball changes across time."
    },
    {
        "slug": "ncaa-mens-basketball-works",
        "name": "NCAA men's basketball works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NCAA men's basketball.",
        "description": "Primary works and adaptations through which most audiences encounter NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-symbols",
        "name": "NCAA men's basketball symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NCAA men's basketball.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-controversies",
        "name": "NCAA men's basketball controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NCAA men's basketball.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NCAA men's basketball argumentative."
    },
    {
        "slug": "ncaa-mens-basketball-sources",
        "name": "NCAA men's basketball sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NCAA men's basketball.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NCAA men's basketball."
    }
];

const relationships = [
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball-figures",
        "ncaa-mens-basketball-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-mens-basketball-events",
        "ncaa-mens-basketball-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-places",
        "contains",
        "NCAA men's basketball places is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-objects",
        "contains",
        "NCAA men's basketball objects & artifacts is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-factions",
        "contains",
        "NCAA men's basketball factions & groups is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-concepts",
        "contains",
        "NCAA men's basketball concepts is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-eras",
        "contains",
        "NCAA men's basketball eras is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-works",
        "contains",
        "NCAA men's basketball works & media is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-symbols",
        "contains",
        "NCAA men's basketball symbols is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-controversies",
        "contains",
        "NCAA men's basketball controversies is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-sources",
        "contains",
        "NCAA men's basketball sources is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
