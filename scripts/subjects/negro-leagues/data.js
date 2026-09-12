/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "negro-leagues",
        "name": "Negro Leagues",
        "type": "topic",
        "short_description": "Black baseball before and beside integration — teams, barnstorming, and Hall of Fame recognition.",
        "description": "Black baseball before and beside integration — teams, barnstorming, and Hall of Fame recognition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Negro Leagues so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "negro-leagues-figures",
        "name": "Negro Leagues figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Negro Leagues.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Negro Leagues."
    },
    {
        "slug": "negro-leagues-teams",
        "name": "Negro Leagues teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Negro Leagues.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Negro Leagues."
    },
    {
        "slug": "negro-leagues-venues",
        "name": "Negro Leagues venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Negro Leagues.",
        "description": "Places where Negro Leagues is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "negro-leagues-events",
        "name": "Negro Leagues events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Negro Leagues.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Negro Leagues."
    },
    {
        "slug": "negro-leagues-rules",
        "name": "Negro Leagues rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Negro Leagues.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Negro Leagues legible as a sport."
    },
    {
        "slug": "negro-leagues-places",
        "name": "Negro Leagues places",
        "type": "place",
        "short_description": "Locations and geographies that frame Negro Leagues.",
        "description": "Places, regions, and built sites that give Negro Leagues its map — where events and figures concentrate."
    },
    {
        "slug": "negro-leagues-objects",
        "name": "Negro Leagues objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Negro Leagues.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Negro Leagues."
    },
    {
        "slug": "negro-leagues-factions",
        "name": "Negro Leagues factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Negro Leagues.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Negro Leagues."
    },
    {
        "slug": "negro-leagues-concepts",
        "name": "Negro Leagues concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Negro Leagues.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Negro Leagues readable as a lore graph."
    },
    {
        "slug": "negro-leagues-eras",
        "name": "Negro Leagues eras",
        "type": "event",
        "short_description": "Periodization for Negro Leagues.",
        "description": "Named eras and phases that help readers track how Negro Leagues changes across time."
    },
    {
        "slug": "negro-leagues-works",
        "name": "Negro Leagues works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Negro Leagues.",
        "description": "Primary works and adaptations through which most audiences encounter Negro Leagues."
    },
    {
        "slug": "negro-leagues-symbols",
        "name": "Negro Leagues symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Negro Leagues.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Negro Leagues."
    },
    {
        "slug": "negro-leagues-controversies",
        "name": "Negro Leagues controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Negro Leagues.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Negro Leagues argumentative."
    },
    {
        "slug": "negro-leagues-sources",
        "name": "Negro Leagues sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Negro Leagues.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Negro Leagues."
    }
];

const relationships = [
    [
        "negro-leagues",
        "negro-leagues-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "negro-leagues",
        "negro-leagues-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "negro-leagues-figures",
        "negro-leagues-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "negro-leagues-events",
        "negro-leagues-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "negro-leagues",
        "negro-leagues-places",
        "contains",
        "Negro Leagues places is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-objects",
        "contains",
        "Negro Leagues objects & artifacts is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-factions",
        "contains",
        "Negro Leagues factions & groups is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-concepts",
        "contains",
        "Negro Leagues concepts is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-eras",
        "contains",
        "Negro Leagues eras is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-works",
        "contains",
        "Negro Leagues works & media is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-symbols",
        "contains",
        "Negro Leagues symbols is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-controversies",
        "contains",
        "Negro Leagues controversies is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ],
    [
        "negro-leagues",
        "negro-leagues-sources",
        "contains",
        "Negro Leagues sources is a primary trailhead under Negro Leagues.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
