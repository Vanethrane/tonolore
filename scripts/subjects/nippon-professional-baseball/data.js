/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nippon-professional-baseball",
        "name": "Nippon Professional Baseball",
        "type": "topic",
        "short_description": "Japan's top baseball leagues — Central and Pacific, Japan Series, and samurai baseball lore.",
        "description": "Japan's top baseball leagues — Central and Pacific, Japan Series, and samurai baseball lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nippon Professional Baseball so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "nippon-professional-baseball-figures",
        "name": "Nippon Professional Baseball figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Nippon Professional Baseball.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-teams",
        "name": "Nippon Professional Baseball teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Nippon Professional Baseball.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-venues",
        "name": "Nippon Professional Baseball venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Nippon Professional Baseball.",
        "description": "Places where Nippon Professional Baseball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "nippon-professional-baseball-events",
        "name": "Nippon Professional Baseball events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Nippon Professional Baseball.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-rules",
        "name": "Nippon Professional Baseball rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Nippon Professional Baseball.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Nippon Professional Baseball legible as a sport."
    },
    {
        "slug": "nippon-professional-baseball-places",
        "name": "Nippon Professional Baseball places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nippon Professional Baseball.",
        "description": "Places, regions, and built sites that give Nippon Professional Baseball its map — where events and figures concentrate."
    },
    {
        "slug": "nippon-professional-baseball-objects",
        "name": "Nippon Professional Baseball objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nippon Professional Baseball.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-factions",
        "name": "Nippon Professional Baseball factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nippon Professional Baseball.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-concepts",
        "name": "Nippon Professional Baseball concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nippon Professional Baseball.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nippon Professional Baseball readable as a lore graph."
    },
    {
        "slug": "nippon-professional-baseball-eras",
        "name": "Nippon Professional Baseball eras",
        "type": "event",
        "short_description": "Periodization for Nippon Professional Baseball.",
        "description": "Named eras and phases that help readers track how Nippon Professional Baseball changes across time."
    },
    {
        "slug": "nippon-professional-baseball-works",
        "name": "Nippon Professional Baseball works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nippon Professional Baseball.",
        "description": "Primary works and adaptations through which most audiences encounter Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-symbols",
        "name": "Nippon Professional Baseball symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nippon Professional Baseball.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nippon Professional Baseball."
    },
    {
        "slug": "nippon-professional-baseball-controversies",
        "name": "Nippon Professional Baseball controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nippon Professional Baseball.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nippon Professional Baseball argumentative."
    },
    {
        "slug": "nippon-professional-baseball-sources",
        "name": "Nippon Professional Baseball sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nippon Professional Baseball.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nippon Professional Baseball."
    }
];

const relationships = [
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nippon-professional-baseball-figures",
        "nippon-professional-baseball-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nippon-professional-baseball-events",
        "nippon-professional-baseball-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-places",
        "contains",
        "Nippon Professional Baseball places is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-objects",
        "contains",
        "Nippon Professional Baseball objects & artifacts is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-factions",
        "contains",
        "Nippon Professional Baseball factions & groups is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-concepts",
        "contains",
        "Nippon Professional Baseball concepts is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-eras",
        "contains",
        "Nippon Professional Baseball eras is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-works",
        "contains",
        "Nippon Professional Baseball works & media is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-symbols",
        "contains",
        "Nippon Professional Baseball symbols is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-controversies",
        "contains",
        "Nippon Professional Baseball controversies is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-sources",
        "contains",
        "Nippon Professional Baseball sources is a primary trailhead under Nippon Professional Baseball.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
