/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cfl",
        "name": "Canadian Football League",
        "type": "topic",
        "short_description": "Canada's pro gridiron league — three-downs football, Grey Cup, and northern rivalries.",
        "description": "Canada's pro gridiron league — three-downs football, Grey Cup, and northern rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Canadian Football League so readers can follow long-tail connections across american football."
    },
    {
        "slug": "cfl-figures",
        "name": "Canadian Football League figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Canadian Football League.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Canadian Football League."
    },
    {
        "slug": "cfl-teams",
        "name": "Canadian Football League teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Canadian Football League.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Canadian Football League."
    },
    {
        "slug": "cfl-venues",
        "name": "Canadian Football League venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Canadian Football League.",
        "description": "Places where Canadian Football League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "cfl-events",
        "name": "Canadian Football League events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Canadian Football League.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Canadian Football League."
    },
    {
        "slug": "cfl-rules",
        "name": "Canadian Football League rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Canadian Football League.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Canadian Football League legible as a sport."
    },
    {
        "slug": "cfl-places",
        "name": "Canadian Football League places",
        "type": "place",
        "short_description": "Locations and geographies that frame Canadian Football League.",
        "description": "Places, regions, and built sites that give Canadian Football League its map — where events and figures concentrate."
    },
    {
        "slug": "cfl-objects",
        "name": "Canadian Football League objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Canadian Football League.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Canadian Football League."
    },
    {
        "slug": "cfl-factions",
        "name": "Canadian Football League factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Canadian Football League.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Canadian Football League."
    },
    {
        "slug": "cfl-concepts",
        "name": "Canadian Football League concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Canadian Football League.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Canadian Football League readable as a lore graph."
    },
    {
        "slug": "cfl-eras",
        "name": "Canadian Football League eras",
        "type": "event",
        "short_description": "Periodization for Canadian Football League.",
        "description": "Named eras and phases that help readers track how Canadian Football League changes across time."
    },
    {
        "slug": "cfl-works",
        "name": "Canadian Football League works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Canadian Football League.",
        "description": "Primary works and adaptations through which most audiences encounter Canadian Football League."
    },
    {
        "slug": "cfl-symbols",
        "name": "Canadian Football League symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Canadian Football League.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Canadian Football League."
    },
    {
        "slug": "cfl-controversies",
        "name": "Canadian Football League controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Canadian Football League.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Canadian Football League argumentative."
    },
    {
        "slug": "cfl-sources",
        "name": "Canadian Football League sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Canadian Football League.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Canadian Football League."
    }
];

const relationships = [
    [
        "cfl",
        "cfl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "cfl",
        "cfl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "cfl-figures",
        "cfl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "cfl-events",
        "cfl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "cfl",
        "cfl-places",
        "contains",
        "Canadian Football League places is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-objects",
        "contains",
        "Canadian Football League objects & artifacts is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-factions",
        "contains",
        "Canadian Football League factions & groups is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-concepts",
        "contains",
        "Canadian Football League concepts is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-eras",
        "contains",
        "Canadian Football League eras is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-works",
        "contains",
        "Canadian Football League works & media is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-symbols",
        "contains",
        "Canadian Football League symbols is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-controversies",
        "contains",
        "Canadian Football League controversies is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ],
    [
        "cfl",
        "cfl-sources",
        "contains",
        "Canadian Football League sources is a primary trailhead under Canadian Football League.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
