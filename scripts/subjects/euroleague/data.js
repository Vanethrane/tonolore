/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "euroleague",
        "name": "EuroLeague",
        "type": "topic",
        "short_description": "Europe's top club basketball competition — Final Four lore and continental rivalries.",
        "description": "Europe's top club basketball competition — Final Four lore and continental rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to EuroLeague so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "euroleague-figures",
        "name": "EuroLeague figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to EuroLeague.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring EuroLeague."
    },
    {
        "slug": "euroleague-teams",
        "name": "EuroLeague teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to EuroLeague.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around EuroLeague."
    },
    {
        "slug": "euroleague-venues",
        "name": "EuroLeague venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host EuroLeague.",
        "description": "Places where EuroLeague is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "euroleague-events",
        "name": "EuroLeague events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in EuroLeague.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about EuroLeague."
    },
    {
        "slug": "euroleague-rules",
        "name": "EuroLeague rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for EuroLeague.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make EuroLeague legible as a sport."
    },
    {
        "slug": "euroleague-places",
        "name": "EuroLeague places",
        "type": "place",
        "short_description": "Locations and geographies that frame EuroLeague.",
        "description": "Places, regions, and built sites that give EuroLeague its map — where events and figures concentrate."
    },
    {
        "slug": "euroleague-objects",
        "name": "EuroLeague objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to EuroLeague.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through EuroLeague."
    },
    {
        "slug": "euroleague-factions",
        "name": "EuroLeague factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside EuroLeague.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in EuroLeague."
    },
    {
        "slug": "euroleague-concepts",
        "name": "EuroLeague concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize EuroLeague.",
        "description": "Keywords, doctrines, systems, and abstract forces that make EuroLeague readable as a lore graph."
    },
    {
        "slug": "euroleague-eras",
        "name": "EuroLeague eras",
        "type": "event",
        "short_description": "Periodization for EuroLeague.",
        "description": "Named eras and phases that help readers track how EuroLeague changes across time."
    },
    {
        "slug": "euroleague-works",
        "name": "EuroLeague works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry EuroLeague.",
        "description": "Primary works and adaptations through which most audiences encounter EuroLeague."
    },
    {
        "slug": "euroleague-symbols",
        "name": "EuroLeague symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with EuroLeague.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside EuroLeague."
    },
    {
        "slug": "euroleague-controversies",
        "name": "EuroLeague controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in EuroLeague.",
        "description": "Debates, rival canons, scandals, and contested facts that keep EuroLeague argumentative."
    },
    {
        "slug": "euroleague-sources",
        "name": "EuroLeague sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into EuroLeague.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify EuroLeague."
    }
];

const relationships = [
    [
        "euroleague",
        "euroleague-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "euroleague",
        "euroleague-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "euroleague-figures",
        "euroleague-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "euroleague-events",
        "euroleague-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "euroleague",
        "euroleague-places",
        "contains",
        "EuroLeague places is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-objects",
        "contains",
        "EuroLeague objects & artifacts is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-factions",
        "contains",
        "EuroLeague factions & groups is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-concepts",
        "contains",
        "EuroLeague concepts is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-eras",
        "contains",
        "EuroLeague eras is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-works",
        "contains",
        "EuroLeague works & media is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-symbols",
        "contains",
        "EuroLeague symbols is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-controversies",
        "contains",
        "EuroLeague controversies is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ],
    [
        "euroleague",
        "euroleague-sources",
        "contains",
        "EuroLeague sources is a primary trailhead under EuroLeague.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
