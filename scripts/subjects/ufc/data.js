/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ufc",
        "name": "UFC",
        "type": "topic",
        "short_description": "Ultimate Fighting Championship — octagon eras, title lineages, and MMA's mainstream face.",
        "description": "Ultimate Fighting Championship — octagon eras, title lineages, and MMA's mainstream face. This Ton-o-Lore subject maps people, places, events, and ideas tied to UFC so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "ufc-figures",
        "name": "UFC figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to UFC.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring UFC."
    },
    {
        "slug": "ufc-teams",
        "name": "UFC teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to UFC.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around UFC."
    },
    {
        "slug": "ufc-venues",
        "name": "UFC venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host UFC.",
        "description": "Places where UFC is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ufc-events",
        "name": "UFC events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in UFC.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about UFC."
    },
    {
        "slug": "ufc-rules",
        "name": "UFC rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for UFC.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make UFC legible as a sport."
    },
    {
        "slug": "ufc-places",
        "name": "UFC places",
        "type": "place",
        "short_description": "Locations and geographies that frame UFC.",
        "description": "Places, regions, and built sites that give UFC its map — where events and figures concentrate."
    },
    {
        "slug": "ufc-objects",
        "name": "UFC objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to UFC.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through UFC."
    },
    {
        "slug": "ufc-factions",
        "name": "UFC factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside UFC.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in UFC."
    },
    {
        "slug": "ufc-concepts",
        "name": "UFC concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize UFC.",
        "description": "Keywords, doctrines, systems, and abstract forces that make UFC readable as a lore graph."
    },
    {
        "slug": "ufc-eras",
        "name": "UFC eras",
        "type": "event",
        "short_description": "Periodization for UFC.",
        "description": "Named eras and phases that help readers track how UFC changes across time."
    },
    {
        "slug": "ufc-works",
        "name": "UFC works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry UFC.",
        "description": "Primary works and adaptations through which most audiences encounter UFC."
    },
    {
        "slug": "ufc-symbols",
        "name": "UFC symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with UFC.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside UFC."
    },
    {
        "slug": "ufc-controversies",
        "name": "UFC controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in UFC.",
        "description": "Debates, rival canons, scandals, and contested facts that keep UFC argumentative."
    },
    {
        "slug": "ufc-sources",
        "name": "UFC sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into UFC.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify UFC."
    }
];

const relationships = [
    [
        "ufc",
        "ufc-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ufc",
        "ufc-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ufc-figures",
        "ufc-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ufc-events",
        "ufc-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ufc",
        "ufc-places",
        "contains",
        "UFC places is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-objects",
        "contains",
        "UFC objects & artifacts is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-factions",
        "contains",
        "UFC factions & groups is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-concepts",
        "contains",
        "UFC concepts is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-eras",
        "contains",
        "UFC eras is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-works",
        "contains",
        "UFC works & media is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-symbols",
        "contains",
        "UFC symbols is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-controversies",
        "contains",
        "UFC controversies is a primary trailhead under UFC.",
        0.88,
        0.82
    ],
    [
        "ufc",
        "ufc-sources",
        "contains",
        "UFC sources is a primary trailhead under UFC.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
