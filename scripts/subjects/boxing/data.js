/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "boxing",
        "name": "Boxing",
        "type": "topic",
        "short_description": "The sweet science — weight classes, belts, and championship lore across eras.",
        "description": "The sweet science — weight classes, belts, and championship lore across eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to Boxing so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "boxing-figures",
        "name": "Boxing figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Boxing.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Boxing."
    },
    {
        "slug": "boxing-teams",
        "name": "Boxing teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Boxing.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Boxing."
    },
    {
        "slug": "boxing-venues",
        "name": "Boxing venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Boxing.",
        "description": "Places where Boxing is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "boxing-events",
        "name": "Boxing events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Boxing.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Boxing."
    },
    {
        "slug": "boxing-rules",
        "name": "Boxing rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Boxing.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Boxing legible as a sport."
    },
    {
        "slug": "boxing-places",
        "name": "Boxing places",
        "type": "place",
        "short_description": "Locations and geographies that frame Boxing.",
        "description": "Places, regions, and built sites that give Boxing its map — where events and figures concentrate."
    },
    {
        "slug": "boxing-objects",
        "name": "Boxing objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Boxing.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Boxing."
    },
    {
        "slug": "boxing-factions",
        "name": "Boxing factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Boxing.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Boxing."
    },
    {
        "slug": "boxing-concepts",
        "name": "Boxing concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Boxing.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Boxing readable as a lore graph."
    },
    {
        "slug": "boxing-eras",
        "name": "Boxing eras",
        "type": "event",
        "short_description": "Periodization for Boxing.",
        "description": "Named eras and phases that help readers track how Boxing changes across time."
    },
    {
        "slug": "boxing-works",
        "name": "Boxing works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Boxing.",
        "description": "Primary works and adaptations through which most audiences encounter Boxing."
    },
    {
        "slug": "boxing-symbols",
        "name": "Boxing symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Boxing.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Boxing."
    },
    {
        "slug": "boxing-controversies",
        "name": "Boxing controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Boxing.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Boxing argumentative."
    },
    {
        "slug": "boxing-sources",
        "name": "Boxing sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Boxing.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Boxing."
    }
];

const relationships = [
    [
        "boxing",
        "boxing-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "boxing",
        "boxing-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "boxing-figures",
        "boxing-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "boxing-events",
        "boxing-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "boxing",
        "boxing-places",
        "contains",
        "Boxing places is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-objects",
        "contains",
        "Boxing objects & artifacts is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-factions",
        "contains",
        "Boxing factions & groups is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-concepts",
        "contains",
        "Boxing concepts is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-eras",
        "contains",
        "Boxing eras is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-works",
        "contains",
        "Boxing works & media is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-symbols",
        "contains",
        "Boxing symbols is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-controversies",
        "contains",
        "Boxing controversies is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-sources",
        "contains",
        "Boxing sources is a primary trailhead under Boxing.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
