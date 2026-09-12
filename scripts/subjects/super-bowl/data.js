/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "super-bowl",
        "name": "Super Bowl",
        "type": "topic",
        "short_description": "The NFL championship game — Roman numerals, halftime lore, and American spectacle.",
        "description": "The NFL championship game — Roman numerals, halftime lore, and American spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to Super Bowl so readers can follow long-tail connections across american football."
    },
    {
        "slug": "super-bowl-figures",
        "name": "Super Bowl figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Super Bowl.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Super Bowl."
    },
    {
        "slug": "super-bowl-teams",
        "name": "Super Bowl teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Super Bowl.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Super Bowl."
    },
    {
        "slug": "super-bowl-venues",
        "name": "Super Bowl venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Super Bowl.",
        "description": "Places where Super Bowl is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "super-bowl-events",
        "name": "Super Bowl events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Super Bowl.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Super Bowl."
    },
    {
        "slug": "super-bowl-rules",
        "name": "Super Bowl rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Super Bowl.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Super Bowl legible as a sport."
    },
    {
        "slug": "super-bowl-places",
        "name": "Super Bowl places",
        "type": "place",
        "short_description": "Locations and geographies that frame Super Bowl.",
        "description": "Places, regions, and built sites that give Super Bowl its map — where events and figures concentrate."
    },
    {
        "slug": "super-bowl-objects",
        "name": "Super Bowl objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Super Bowl.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Super Bowl."
    },
    {
        "slug": "super-bowl-factions",
        "name": "Super Bowl factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Super Bowl.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Super Bowl."
    },
    {
        "slug": "super-bowl-concepts",
        "name": "Super Bowl concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Super Bowl.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Super Bowl readable as a lore graph."
    },
    {
        "slug": "super-bowl-eras",
        "name": "Super Bowl eras",
        "type": "event",
        "short_description": "Periodization for Super Bowl.",
        "description": "Named eras and phases that help readers track how Super Bowl changes across time."
    },
    {
        "slug": "super-bowl-works",
        "name": "Super Bowl works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Super Bowl.",
        "description": "Primary works and adaptations through which most audiences encounter Super Bowl."
    },
    {
        "slug": "super-bowl-symbols",
        "name": "Super Bowl symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Super Bowl.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Super Bowl."
    },
    {
        "slug": "super-bowl-controversies",
        "name": "Super Bowl controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Super Bowl.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Super Bowl argumentative."
    },
    {
        "slug": "super-bowl-sources",
        "name": "Super Bowl sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Super Bowl.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Super Bowl."
    }
];

const relationships = [
    [
        "super-bowl",
        "super-bowl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "super-bowl",
        "super-bowl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "super-bowl-figures",
        "super-bowl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "super-bowl-events",
        "super-bowl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "super-bowl",
        "super-bowl-places",
        "contains",
        "Super Bowl places is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-objects",
        "contains",
        "Super Bowl objects & artifacts is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-factions",
        "contains",
        "Super Bowl factions & groups is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-concepts",
        "contains",
        "Super Bowl concepts is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-eras",
        "contains",
        "Super Bowl eras is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-works",
        "contains",
        "Super Bowl works & media is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-symbols",
        "contains",
        "Super Bowl symbols is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-controversies",
        "contains",
        "Super Bowl controversies is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-sources",
        "contains",
        "Super Bowl sources is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
