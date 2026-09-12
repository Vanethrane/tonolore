/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "24-hours-of-le-mans",
        "name": "24 Hours of Le Mans",
        "type": "topic",
        "short_description": "The legendary endurance race on the Circuit de la Sarthe.",
        "description": "The legendary endurance race on the Circuit de la Sarthe. This Ton-o-Lore subject maps people, places, events, and ideas tied to 24 Hours of Le Mans so readers can follow long-tail connections across motorsport."
    },
    {
        "slug": "24-hours-of-le-mans-figures",
        "name": "24 Hours of Le Mans figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to 24 Hours of Le Mans.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-teams",
        "name": "24 Hours of Le Mans teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to 24 Hours of Le Mans.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-venues",
        "name": "24 Hours of Le Mans venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host 24 Hours of Le Mans.",
        "description": "Places where 24 Hours of Le Mans is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "24-hours-of-le-mans-events",
        "name": "24 Hours of Le Mans events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in 24 Hours of Le Mans.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-rules",
        "name": "24 Hours of Le Mans rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for 24 Hours of Le Mans.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make 24 Hours of Le Mans legible as a sport."
    },
    {
        "slug": "24-hours-of-le-mans-places",
        "name": "24 Hours of Le Mans places",
        "type": "place",
        "short_description": "Locations and geographies that frame 24 Hours of Le Mans.",
        "description": "Places, regions, and built sites that give 24 Hours of Le Mans its map — where events and figures concentrate."
    },
    {
        "slug": "24-hours-of-le-mans-objects",
        "name": "24 Hours of Le Mans objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 24 Hours of Le Mans.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-factions",
        "name": "24 Hours of Le Mans factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 24 Hours of Le Mans.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-concepts",
        "name": "24 Hours of Le Mans concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 24 Hours of Le Mans.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 24 Hours of Le Mans readable as a lore graph."
    },
    {
        "slug": "24-hours-of-le-mans-eras",
        "name": "24 Hours of Le Mans eras",
        "type": "event",
        "short_description": "Periodization for 24 Hours of Le Mans.",
        "description": "Named eras and phases that help readers track how 24 Hours of Le Mans changes across time."
    },
    {
        "slug": "24-hours-of-le-mans-works",
        "name": "24 Hours of Le Mans works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 24 Hours of Le Mans.",
        "description": "Primary works and adaptations through which most audiences encounter 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-symbols",
        "name": "24 Hours of Le Mans symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 24 Hours of Le Mans.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 24 Hours of Le Mans."
    },
    {
        "slug": "24-hours-of-le-mans-controversies",
        "name": "24 Hours of Le Mans controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 24 Hours of Le Mans.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 24 Hours of Le Mans argumentative."
    },
    {
        "slug": "24-hours-of-le-mans-sources",
        "name": "24 Hours of Le Mans sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 24 Hours of Le Mans.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 24 Hours of Le Mans."
    }
];

const relationships = [
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "24-hours-of-le-mans-figures",
        "24-hours-of-le-mans-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "24-hours-of-le-mans-events",
        "24-hours-of-le-mans-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-places",
        "contains",
        "24 Hours of Le Mans places is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-objects",
        "contains",
        "24 Hours of Le Mans objects & artifacts is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-factions",
        "contains",
        "24 Hours of Le Mans factions & groups is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-concepts",
        "contains",
        "24 Hours of Le Mans concepts is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-eras",
        "contains",
        "24 Hours of Le Mans eras is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-works",
        "contains",
        "24 Hours of Le Mans works & media is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-symbols",
        "contains",
        "24 Hours of Le Mans symbols is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-controversies",
        "contains",
        "24 Hours of Le Mans controversies is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-sources",
        "contains",
        "24 Hours of Le Mans sources is a primary trailhead under 24 Hours of Le Mans.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
