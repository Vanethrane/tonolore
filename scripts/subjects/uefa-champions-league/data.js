/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "uefa-champions-league",
        "name": "UEFA Champions League",
        "type": "topic",
        "short_description": "Europe's elite club competition — anthems, nights in Lisbon and Istanbul, and continental crowns.",
        "description": "Europe's elite club competition — anthems, nights in Lisbon and Istanbul, and continental crowns. This Ton-o-Lore subject maps people, places, events, and ideas tied to UEFA Champions League so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "uefa-champions-league-figures",
        "name": "UEFA Champions League figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to UEFA Champions League.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-teams",
        "name": "UEFA Champions League teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to UEFA Champions League.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-venues",
        "name": "UEFA Champions League venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host UEFA Champions League.",
        "description": "Places where UEFA Champions League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "uefa-champions-league-events",
        "name": "UEFA Champions League events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in UEFA Champions League.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-rules",
        "name": "UEFA Champions League rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for UEFA Champions League.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make UEFA Champions League legible as a sport."
    },
    {
        "slug": "uefa-champions-league-places",
        "name": "UEFA Champions League places",
        "type": "place",
        "short_description": "Locations and geographies that frame UEFA Champions League.",
        "description": "Places, regions, and built sites that give UEFA Champions League its map — where events and figures concentrate."
    },
    {
        "slug": "uefa-champions-league-objects",
        "name": "UEFA Champions League objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to UEFA Champions League.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-factions",
        "name": "UEFA Champions League factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside UEFA Champions League.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-concepts",
        "name": "UEFA Champions League concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize UEFA Champions League.",
        "description": "Keywords, doctrines, systems, and abstract forces that make UEFA Champions League readable as a lore graph."
    },
    {
        "slug": "uefa-champions-league-eras",
        "name": "UEFA Champions League eras",
        "type": "event",
        "short_description": "Periodization for UEFA Champions League.",
        "description": "Named eras and phases that help readers track how UEFA Champions League changes across time."
    },
    {
        "slug": "uefa-champions-league-works",
        "name": "UEFA Champions League works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry UEFA Champions League.",
        "description": "Primary works and adaptations through which most audiences encounter UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-symbols",
        "name": "UEFA Champions League symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with UEFA Champions League.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside UEFA Champions League."
    },
    {
        "slug": "uefa-champions-league-controversies",
        "name": "UEFA Champions League controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in UEFA Champions League.",
        "description": "Debates, rival canons, scandals, and contested facts that keep UEFA Champions League argumentative."
    },
    {
        "slug": "uefa-champions-league-sources",
        "name": "UEFA Champions League sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into UEFA Champions League.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify UEFA Champions League."
    }
];

const relationships = [
    [
        "uefa-champions-league",
        "uefa-champions-league-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "uefa-champions-league-figures",
        "uefa-champions-league-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "uefa-champions-league-events",
        "uefa-champions-league-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-places",
        "contains",
        "UEFA Champions League places is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-objects",
        "contains",
        "UEFA Champions League objects & artifacts is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-factions",
        "contains",
        "UEFA Champions League factions & groups is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-concepts",
        "contains",
        "UEFA Champions League concepts is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-eras",
        "contains",
        "UEFA Champions League eras is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-works",
        "contains",
        "UEFA Champions League works & media is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-symbols",
        "contains",
        "UEFA Champions League symbols is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-controversies",
        "contains",
        "UEFA Champions League controversies is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-sources",
        "contains",
        "UEFA Champions League sources is a primary trailhead under UEFA Champions League.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
