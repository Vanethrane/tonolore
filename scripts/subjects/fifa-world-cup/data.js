/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fifa-world-cup",
        "name": "FIFA World Cup",
        "type": "topic",
        "short_description": "The quadrennial football tournament that remaps national sporting identity.",
        "description": "The quadrennial football tournament that remaps national sporting identity. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIFA World Cup so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "fifa-world-cup-figures",
        "name": "FIFA World Cup figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to FIFA World Cup.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-teams",
        "name": "FIFA World Cup teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to FIFA World Cup.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-venues",
        "name": "FIFA World Cup venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host FIFA World Cup.",
        "description": "Places where FIFA World Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "fifa-world-cup-events",
        "name": "FIFA World Cup events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in FIFA World Cup.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-rules",
        "name": "FIFA World Cup rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for FIFA World Cup.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make FIFA World Cup legible as a sport."
    },
    {
        "slug": "fifa-world-cup-places",
        "name": "FIFA World Cup places",
        "type": "place",
        "short_description": "Locations and geographies that frame FIFA World Cup.",
        "description": "Places, regions, and built sites that give FIFA World Cup its map — where events and figures concentrate."
    },
    {
        "slug": "fifa-world-cup-objects",
        "name": "FIFA World Cup objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to FIFA World Cup.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-factions",
        "name": "FIFA World Cup factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside FIFA World Cup.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-concepts",
        "name": "FIFA World Cup concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize FIFA World Cup.",
        "description": "Keywords, doctrines, systems, and abstract forces that make FIFA World Cup readable as a lore graph."
    },
    {
        "slug": "fifa-world-cup-eras",
        "name": "FIFA World Cup eras",
        "type": "event",
        "short_description": "Periodization for FIFA World Cup.",
        "description": "Named eras and phases that help readers track how FIFA World Cup changes across time."
    },
    {
        "slug": "fifa-world-cup-works",
        "name": "FIFA World Cup works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry FIFA World Cup.",
        "description": "Primary works and adaptations through which most audiences encounter FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-symbols",
        "name": "FIFA World Cup symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with FIFA World Cup.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside FIFA World Cup."
    },
    {
        "slug": "fifa-world-cup-controversies",
        "name": "FIFA World Cup controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in FIFA World Cup.",
        "description": "Debates, rival canons, scandals, and contested facts that keep FIFA World Cup argumentative."
    },
    {
        "slug": "fifa-world-cup-sources",
        "name": "FIFA World Cup sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into FIFA World Cup.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify FIFA World Cup."
    }
];

const relationships = [
    [
        "fifa-world-cup",
        "fifa-world-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "fifa-world-cup-figures",
        "fifa-world-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "fifa-world-cup-events",
        "fifa-world-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-places",
        "contains",
        "FIFA World Cup places is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-objects",
        "contains",
        "FIFA World Cup objects & artifacts is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-factions",
        "contains",
        "FIFA World Cup factions & groups is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-concepts",
        "contains",
        "FIFA World Cup concepts is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-eras",
        "contains",
        "FIFA World Cup eras is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-works",
        "contains",
        "FIFA World Cup works & media is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-symbols",
        "contains",
        "FIFA World Cup symbols is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-controversies",
        "contains",
        "FIFA World Cup controversies is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-sources",
        "contains",
        "FIFA World Cup sources is a primary trailhead under FIFA World Cup.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
