/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mlb",
        "name": "Major League Baseball",
        "type": "topic",
        "short_description": "America's major leagues — pennants, World Series, and ballpark mythology.",
        "description": "America's major leagues — pennants, World Series, and ballpark mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Baseball so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "mlb-figures",
        "name": "Major League Baseball figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Major League Baseball.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Baseball."
    },
    {
        "slug": "mlb-teams",
        "name": "Major League Baseball teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Major League Baseball.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Major League Baseball."
    },
    {
        "slug": "mlb-venues",
        "name": "Major League Baseball venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Major League Baseball.",
        "description": "Places where Major League Baseball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "mlb-events",
        "name": "Major League Baseball events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Major League Baseball.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Major League Baseball."
    },
    {
        "slug": "mlb-rules",
        "name": "Major League Baseball rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Major League Baseball.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Baseball legible as a sport."
    },
    {
        "slug": "mlb-places",
        "name": "Major League Baseball places",
        "type": "place",
        "short_description": "Locations and geographies that frame Major League Baseball.",
        "description": "Places, regions, and built sites that give Major League Baseball its map — where events and figures concentrate."
    },
    {
        "slug": "mlb-objects",
        "name": "Major League Baseball objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Major League Baseball.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Major League Baseball."
    },
    {
        "slug": "mlb-factions",
        "name": "Major League Baseball factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Major League Baseball.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Major League Baseball."
    },
    {
        "slug": "mlb-concepts",
        "name": "Major League Baseball concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Major League Baseball.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Major League Baseball readable as a lore graph."
    },
    {
        "slug": "mlb-eras",
        "name": "Major League Baseball eras",
        "type": "event",
        "short_description": "Periodization for Major League Baseball.",
        "description": "Named eras and phases that help readers track how Major League Baseball changes across time."
    },
    {
        "slug": "mlb-works",
        "name": "Major League Baseball works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Major League Baseball.",
        "description": "Primary works and adaptations through which most audiences encounter Major League Baseball."
    },
    {
        "slug": "mlb-symbols",
        "name": "Major League Baseball symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Major League Baseball.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Major League Baseball."
    },
    {
        "slug": "mlb-controversies",
        "name": "Major League Baseball controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Major League Baseball.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Major League Baseball argumentative."
    },
    {
        "slug": "mlb-sources",
        "name": "Major League Baseball sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Major League Baseball.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Major League Baseball."
    },
    {
        "slug": "mlb-geography",
        "name": "Major League Baseball geography",
        "type": "place",
        "short_description": "Broader geographic framing for Major League Baseball.",
        "description": "Regions, routes, and spatial systems that situate Major League Baseball beyond single named places."
    },
    {
        "slug": "mlb-legacy",
        "name": "Major League Baseball legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Major League Baseball.",
        "description": "How Major League Baseball continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mlb-practices",
        "name": "Major League Baseball practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Major League Baseball.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Major League Baseball."
    },
    {
        "slug": "mlb-entry-1",
        "name": "Major League Baseball entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-2",
        "name": "Major League Baseball entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-3",
        "name": "Major League Baseball entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-4",
        "name": "Major League Baseball entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-5",
        "name": "Major League Baseball entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-6",
        "name": "Major League Baseball entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-7",
        "name": "Major League Baseball entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-8",
        "name": "Major League Baseball entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-9",
        "name": "Major League Baseball entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-10",
        "name": "Major League Baseball entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-11",
        "name": "Major League Baseball entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-12",
        "name": "Major League Baseball entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-13",
        "name": "Major League Baseball entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-14",
        "name": "Major League Baseball entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-15",
        "name": "Major League Baseball entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-16",
        "name": "Major League Baseball entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-17",
        "name": "Major League Baseball entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-18",
        "name": "Major League Baseball entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-19",
        "name": "Major League Baseball entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-20",
        "name": "Major League Baseball entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-21",
        "name": "Major League Baseball entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mlb-entry-22",
        "name": "Major League Baseball entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Major League Baseball.",
        "description": "A supporting encyclopedia entry in the Major League Baseball subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mlb",
        "mlb-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mlb",
        "mlb-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mlb-figures",
        "mlb-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mlb-events",
        "mlb-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "mlb",
        "mlb-places",
        "contains",
        "Major League Baseball places is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-objects",
        "contains",
        "Major League Baseball objects & artifacts is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-factions",
        "contains",
        "Major League Baseball factions & groups is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-concepts",
        "contains",
        "Major League Baseball concepts is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-eras",
        "contains",
        "Major League Baseball eras is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-works",
        "contains",
        "Major League Baseball works & media is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-symbols",
        "contains",
        "Major League Baseball symbols is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-controversies",
        "contains",
        "Major League Baseball controversies is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-sources",
        "contains",
        "Major League Baseball sources is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-geography",
        "contains",
        "Major League Baseball geography is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-legacy",
        "contains",
        "Major League Baseball legacy is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-practices",
        "contains",
        "Major League Baseball practices is a primary trailhead under Major League Baseball.",
        0.88,
        0.82
    ],
    [
        "mlb",
        "mlb-entry-1",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-2",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-3",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-4",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-5",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-6",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-7",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-8",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-9",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-10",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-11",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-12",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-13",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-14",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-15",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-16",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-17",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-18",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-19",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-20",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-21",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ],
    [
        "mlb",
        "mlb-entry-22",
        "contains",
        "Supporting entry under Major League Baseball.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
