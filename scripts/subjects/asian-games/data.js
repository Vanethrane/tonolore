/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "asian-games",
        "name": "Asian Games",
        "type": "topic",
        "short_description": "Asia's continental multi-sport Games under the Olympic Council of Asia.",
        "description": "Asia's continental multi-sport Games under the Olympic Council of Asia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Asian Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        "slug": "asian-games-figures",
        "name": "Asian Games figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Asian Games.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Asian Games."
    },
    {
        "slug": "asian-games-teams",
        "name": "Asian Games teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Asian Games.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Asian Games."
    },
    {
        "slug": "asian-games-venues",
        "name": "Asian Games venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Asian Games.",
        "description": "Places where Asian Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "asian-games-events",
        "name": "Asian Games events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Asian Games.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Asian Games."
    },
    {
        "slug": "asian-games-rules",
        "name": "Asian Games rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Asian Games.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Asian Games legible as a sport."
    },
    {
        "slug": "asian-games-places",
        "name": "Asian Games places",
        "type": "place",
        "short_description": "Locations and geographies that frame Asian Games.",
        "description": "Places, regions, and built sites that give Asian Games its map — where events and figures concentrate."
    },
    {
        "slug": "asian-games-objects",
        "name": "Asian Games objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Asian Games.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Asian Games."
    },
    {
        "slug": "asian-games-factions",
        "name": "Asian Games factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Asian Games.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Asian Games."
    },
    {
        "slug": "asian-games-concepts",
        "name": "Asian Games concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Asian Games.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Asian Games readable as a lore graph."
    },
    {
        "slug": "asian-games-eras",
        "name": "Asian Games eras",
        "type": "event",
        "short_description": "Periodization for Asian Games.",
        "description": "Named eras and phases that help readers track how Asian Games changes across time."
    },
    {
        "slug": "asian-games-works",
        "name": "Asian Games works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Asian Games.",
        "description": "Primary works and adaptations through which most audiences encounter Asian Games."
    },
    {
        "slug": "asian-games-symbols",
        "name": "Asian Games symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Asian Games.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Asian Games."
    },
    {
        "slug": "asian-games-controversies",
        "name": "Asian Games controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Asian Games.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Asian Games argumentative."
    },
    {
        "slug": "asian-games-sources",
        "name": "Asian Games sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Asian Games.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Asian Games."
    }
];

const relationships = [
    [
        "asian-games",
        "asian-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "asian-games",
        "asian-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "asian-games-figures",
        "asian-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "asian-games-events",
        "asian-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "asian-games",
        "asian-games-places",
        "contains",
        "Asian Games places is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-objects",
        "contains",
        "Asian Games objects & artifacts is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-factions",
        "contains",
        "Asian Games factions & groups is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-concepts",
        "contains",
        "Asian Games concepts is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-eras",
        "contains",
        "Asian Games eras is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-works",
        "contains",
        "Asian Games works & media is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-symbols",
        "contains",
        "Asian Games symbols is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-controversies",
        "contains",
        "Asian Games controversies is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ],
    [
        "asian-games",
        "asian-games-sources",
        "contains",
        "Asian Games sources is a primary trailhead under Asian Games.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
