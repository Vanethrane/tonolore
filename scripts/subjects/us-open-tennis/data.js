/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "us-open-tennis",
        "name": "US Open (tennis)",
        "type": "topic",
        "short_description": "The American Slam at Flushing Meadows — hard courts and night-session lore.",
        "description": "The American Slam at Flushing Meadows — hard courts and night-session lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to US Open (tennis) so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "us-open-tennis-figures",
        "name": "US Open (tennis) figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to US Open (tennis).",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-teams",
        "name": "US Open (tennis) teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to US Open (tennis).",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-venues",
        "name": "US Open (tennis) venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host US Open (tennis).",
        "description": "Places where US Open (tennis) is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "us-open-tennis-events",
        "name": "US Open (tennis) events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in US Open (tennis).",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-rules",
        "name": "US Open (tennis) rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for US Open (tennis).",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make US Open (tennis) legible as a sport."
    },
    {
        "slug": "us-open-tennis-places",
        "name": "US Open (tennis) places",
        "type": "place",
        "short_description": "Locations and geographies that frame US Open (tennis).",
        "description": "Places, regions, and built sites that give US Open (tennis) its map — where events and figures concentrate."
    },
    {
        "slug": "us-open-tennis-objects",
        "name": "US Open (tennis) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to US Open (tennis).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-factions",
        "name": "US Open (tennis) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside US Open (tennis).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-concepts",
        "name": "US Open (tennis) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize US Open (tennis).",
        "description": "Keywords, doctrines, systems, and abstract forces that make US Open (tennis) readable as a lore graph."
    },
    {
        "slug": "us-open-tennis-eras",
        "name": "US Open (tennis) eras",
        "type": "event",
        "short_description": "Periodization for US Open (tennis).",
        "description": "Named eras and phases that help readers track how US Open (tennis) changes across time."
    },
    {
        "slug": "us-open-tennis-works",
        "name": "US Open (tennis) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry US Open (tennis).",
        "description": "Primary works and adaptations through which most audiences encounter US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-symbols",
        "name": "US Open (tennis) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with US Open (tennis).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside US Open (tennis)."
    },
    {
        "slug": "us-open-tennis-controversies",
        "name": "US Open (tennis) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in US Open (tennis).",
        "description": "Debates, rival canons, scandals, and contested facts that keep US Open (tennis) argumentative."
    },
    {
        "slug": "us-open-tennis-sources",
        "name": "US Open (tennis) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into US Open (tennis).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify US Open (tennis)."
    }
];

const relationships = [
    [
        "us-open-tennis",
        "us-open-tennis-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "us-open-tennis",
        "us-open-tennis-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "us-open-tennis",
        "us-open-tennis-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "us-open-tennis",
        "us-open-tennis-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "us-open-tennis",
        "us-open-tennis-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "us-open-tennis-figures",
        "us-open-tennis-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "us-open-tennis-events",
        "us-open-tennis-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "us-open-tennis",
        "us-open-tennis-places",
        "contains",
        "US Open (tennis) places is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-objects",
        "contains",
        "US Open (tennis) objects & artifacts is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-factions",
        "contains",
        "US Open (tennis) factions & groups is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-concepts",
        "contains",
        "US Open (tennis) concepts is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-eras",
        "contains",
        "US Open (tennis) eras is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-works",
        "contains",
        "US Open (tennis) works & media is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-symbols",
        "contains",
        "US Open (tennis) symbols is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-controversies",
        "contains",
        "US Open (tennis) controversies is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ],
    [
        "us-open-tennis",
        "us-open-tennis-sources",
        "contains",
        "US Open (tennis) sources is a primary trailhead under US Open (tennis).",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
