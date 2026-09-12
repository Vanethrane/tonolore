/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "paralympic-games",
        "name": "Paralympic Games",
        "type": "topic",
        "short_description": "Elite Para sport's flagship Games — classifications, sports, and Paralympic movement lore.",
        "description": "Elite Para sport's flagship Games — classifications, sports, and Paralympic movement lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Paralympic Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        "slug": "paralympic-games-figures",
        "name": "Paralympic Games figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Paralympic Games.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Paralympic Games."
    },
    {
        "slug": "paralympic-games-teams",
        "name": "Paralympic Games teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Paralympic Games.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Paralympic Games."
    },
    {
        "slug": "paralympic-games-venues",
        "name": "Paralympic Games venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Paralympic Games.",
        "description": "Places where Paralympic Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "paralympic-games-events",
        "name": "Paralympic Games events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Paralympic Games.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Paralympic Games."
    },
    {
        "slug": "paralympic-games-rules",
        "name": "Paralympic Games rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Paralympic Games.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Paralympic Games legible as a sport."
    },
    {
        "slug": "paralympic-games-places",
        "name": "Paralympic Games places",
        "type": "place",
        "short_description": "Locations and geographies that frame Paralympic Games.",
        "description": "Places, regions, and built sites that give Paralympic Games its map — where events and figures concentrate."
    },
    {
        "slug": "paralympic-games-objects",
        "name": "Paralympic Games objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Paralympic Games.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Paralympic Games."
    },
    {
        "slug": "paralympic-games-factions",
        "name": "Paralympic Games factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Paralympic Games.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Paralympic Games."
    },
    {
        "slug": "paralympic-games-concepts",
        "name": "Paralympic Games concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Paralympic Games.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Paralympic Games readable as a lore graph."
    },
    {
        "slug": "paralympic-games-eras",
        "name": "Paralympic Games eras",
        "type": "event",
        "short_description": "Periodization for Paralympic Games.",
        "description": "Named eras and phases that help readers track how Paralympic Games changes across time."
    },
    {
        "slug": "paralympic-games-works",
        "name": "Paralympic Games works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Paralympic Games.",
        "description": "Primary works and adaptations through which most audiences encounter Paralympic Games."
    },
    {
        "slug": "paralympic-games-symbols",
        "name": "Paralympic Games symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Paralympic Games.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Paralympic Games."
    },
    {
        "slug": "paralympic-games-controversies",
        "name": "Paralympic Games controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Paralympic Games.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Paralympic Games argumentative."
    },
    {
        "slug": "paralympic-games-sources",
        "name": "Paralympic Games sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Paralympic Games.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Paralympic Games."
    }
];

const relationships = [
    [
        "paralympic-games",
        "paralympic-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "paralympic-games",
        "paralympic-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "paralympic-games-figures",
        "paralympic-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "paralympic-games-events",
        "paralympic-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "paralympic-games",
        "paralympic-games-places",
        "contains",
        "Paralympic Games places is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-objects",
        "contains",
        "Paralympic Games objects & artifacts is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-factions",
        "contains",
        "Paralympic Games factions & groups is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-concepts",
        "contains",
        "Paralympic Games concepts is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-eras",
        "contains",
        "Paralympic Games eras is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-works",
        "contains",
        "Paralympic Games works & media is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-symbols",
        "contains",
        "Paralympic Games symbols is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-controversies",
        "contains",
        "Paralympic Games controversies is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ],
    [
        "paralympic-games",
        "paralympic-games-sources",
        "contains",
        "Paralympic Games sources is a primary trailhead under Paralympic Games.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
