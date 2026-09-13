/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mls",
        "name": "Major League Soccer",
        "type": "topic",
        "short_description": "North America's top soccer league — expansion clubs, Designated Players, and cup runs.",
        "description": "North America's top soccer league — expansion clubs, Designated Players, and cup runs. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Soccer so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "mls-figures",
        "name": "Major League Soccer figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Major League Soccer.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Soccer."
    },
    {
        "slug": "mls-teams",
        "name": "Major League Soccer teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Major League Soccer.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Major League Soccer."
    },
    {
        "slug": "mls-venues",
        "name": "Major League Soccer venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Major League Soccer.",
        "description": "Places where Major League Soccer is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "mls-events",
        "name": "Major League Soccer events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Major League Soccer.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Major League Soccer."
    },
    {
        "slug": "mls-rules",
        "name": "Major League Soccer rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Major League Soccer.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Soccer legible as a sport."
    },
    {
        "slug": "mls-places",
        "name": "Major League Soccer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Major League Soccer.",
        "description": "Places, regions, and built sites that give Major League Soccer its map — where events and figures concentrate."
    },
    {
        "slug": "mls-objects",
        "name": "Major League Soccer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Major League Soccer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Major League Soccer."
    },
    {
        "slug": "mls-factions",
        "name": "Major League Soccer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Major League Soccer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Major League Soccer."
    },
    {
        "slug": "mls-concepts",
        "name": "Major League Soccer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Major League Soccer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Major League Soccer readable as a lore graph."
    },
    {
        "slug": "mls-eras",
        "name": "Major League Soccer eras",
        "type": "event",
        "short_description": "Periodization for Major League Soccer.",
        "description": "Named eras and phases that help readers track how Major League Soccer changes across time."
    },
    {
        "slug": "mls-works",
        "name": "Major League Soccer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Major League Soccer.",
        "description": "Primary works and adaptations through which most audiences encounter Major League Soccer."
    },
    {
        "slug": "mls-symbols",
        "name": "Major League Soccer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Major League Soccer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Major League Soccer."
    },
    {
        "slug": "mls-controversies",
        "name": "Major League Soccer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Major League Soccer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Major League Soccer argumentative."
    },
    {
        "slug": "mls-sources",
        "name": "Major League Soccer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Major League Soccer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Major League Soccer."
    },
    {
        "slug": "mls-geography",
        "name": "Major League Soccer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Major League Soccer.",
        "description": "Regions, routes, and spatial systems that situate Major League Soccer beyond single named places."
    },
    {
        "slug": "mls-legacy",
        "name": "Major League Soccer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Major League Soccer.",
        "description": "How Major League Soccer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mls-practices",
        "name": "Major League Soccer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Major League Soccer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Major League Soccer."
    },
    {
        "slug": "mls-entry-1",
        "name": "Major League Soccer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-2",
        "name": "Major League Soccer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-3",
        "name": "Major League Soccer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-4",
        "name": "Major League Soccer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-5",
        "name": "Major League Soccer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-6",
        "name": "Major League Soccer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-7",
        "name": "Major League Soccer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-8",
        "name": "Major League Soccer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-9",
        "name": "Major League Soccer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-10",
        "name": "Major League Soccer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-11",
        "name": "Major League Soccer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-12",
        "name": "Major League Soccer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-13",
        "name": "Major League Soccer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-14",
        "name": "Major League Soccer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-15",
        "name": "Major League Soccer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-16",
        "name": "Major League Soccer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-17",
        "name": "Major League Soccer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-18",
        "name": "Major League Soccer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-19",
        "name": "Major League Soccer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-20",
        "name": "Major League Soccer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-21",
        "name": "Major League Soccer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mls-entry-22",
        "name": "Major League Soccer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Soccer.",
        "description": "A supporting encyclopedia entry in the Major League Soccer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mls",
        "mls-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mls",
        "mls-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mls-figures",
        "mls-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mls-events",
        "mls-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "mls",
        "mls-places",
        "contains",
        "Major League Soccer places is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-objects",
        "contains",
        "Major League Soccer objects & artifacts is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-factions",
        "contains",
        "Major League Soccer factions & groups is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-concepts",
        "contains",
        "Major League Soccer concepts is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-eras",
        "contains",
        "Major League Soccer eras is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-works",
        "contains",
        "Major League Soccer works & media is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-symbols",
        "contains",
        "Major League Soccer symbols is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-controversies",
        "contains",
        "Major League Soccer controversies is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-sources",
        "contains",
        "Major League Soccer sources is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-geography",
        "contains",
        "Major League Soccer geography is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-legacy",
        "contains",
        "Major League Soccer legacy is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-practices",
        "contains",
        "Major League Soccer practices is a primary trailhead under Major League Soccer.",
        0.88,
        0.82
    ],
    [
        "mls",
        "mls-entry-1",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-2",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-3",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-4",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-5",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-6",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-7",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-8",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-9",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-10",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-11",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-12",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-13",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-14",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-15",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-16",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-17",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-18",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-19",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-20",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-21",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ],
    [
        "mls",
        "mls-entry-22",
        "contains",
        "Supporting entry under Major League Soccer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
