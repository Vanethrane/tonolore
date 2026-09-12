/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ufl",
        "name": "United Football League",
        "type": "topic",
        "short_description": "Spring pro football in the U.S. — merged USFL/XFL lineage and developmental lore.",
        "description": "Spring pro football in the U.S. — merged USFL/XFL lineage and developmental lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to United Football League so readers can follow long-tail connections across american football."
    },
    {
        "slug": "ufl-figures",
        "name": "United Football League figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to United Football League.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring United Football League."
    },
    {
        "slug": "ufl-teams",
        "name": "United Football League teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to United Football League.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around United Football League."
    },
    {
        "slug": "ufl-venues",
        "name": "United Football League venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host United Football League.",
        "description": "Places where United Football League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ufl-events",
        "name": "United Football League events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in United Football League.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about United Football League."
    },
    {
        "slug": "ufl-rules",
        "name": "United Football League rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for United Football League.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make United Football League legible as a sport."
    },
    {
        "slug": "ufl-places",
        "name": "United Football League places",
        "type": "place",
        "short_description": "Locations and geographies that frame United Football League.",
        "description": "Places, regions, and built sites that give United Football League its map — where events and figures concentrate."
    },
    {
        "slug": "ufl-objects",
        "name": "United Football League objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to United Football League.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through United Football League."
    },
    {
        "slug": "ufl-factions",
        "name": "United Football League factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside United Football League.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in United Football League."
    },
    {
        "slug": "ufl-concepts",
        "name": "United Football League concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize United Football League.",
        "description": "Keywords, doctrines, systems, and abstract forces that make United Football League readable as a lore graph."
    },
    {
        "slug": "ufl-eras",
        "name": "United Football League eras",
        "type": "event",
        "short_description": "Periodization for United Football League.",
        "description": "Named eras and phases that help readers track how United Football League changes across time."
    },
    {
        "slug": "ufl-works",
        "name": "United Football League works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry United Football League.",
        "description": "Primary works and adaptations through which most audiences encounter United Football League."
    },
    {
        "slug": "ufl-symbols",
        "name": "United Football League symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with United Football League.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside United Football League."
    },
    {
        "slug": "ufl-controversies",
        "name": "United Football League controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in United Football League.",
        "description": "Debates, rival canons, scandals, and contested facts that keep United Football League argumentative."
    },
    {
        "slug": "ufl-sources",
        "name": "United Football League sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into United Football League.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify United Football League."
    }
];

const relationships = [
    [
        "ufl",
        "ufl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ufl",
        "ufl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ufl-figures",
        "ufl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ufl-events",
        "ufl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ufl",
        "ufl-places",
        "contains",
        "United Football League places is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-objects",
        "contains",
        "United Football League objects & artifacts is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-factions",
        "contains",
        "United Football League factions & groups is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-concepts",
        "contains",
        "United Football League concepts is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-eras",
        "contains",
        "United Football League eras is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-works",
        "contains",
        "United Football League works & media is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-symbols",
        "contains",
        "United Football League symbols is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-controversies",
        "contains",
        "United Football League controversies is a primary trailhead under United Football League.",
        0.88,
        0.82
    ],
    [
        "ufl",
        "ufl-sources",
        "contains",
        "United Football League sources is a primary trailhead under United Football League.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
