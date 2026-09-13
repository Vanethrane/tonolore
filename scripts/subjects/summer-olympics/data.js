/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "summer-olympics",
        "name": "Summer Olympics",
        "type": "topic",
        "short_description": "The Summer Olympic Games — host cities, sports programs, and ceremonial tradition.",
        "description": "The Summer Olympic Games — host cities, sports programs, and ceremonial tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Summer Olympics so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        "slug": "summer-olympics-figures",
        "name": "Summer Olympics figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Summer Olympics.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Summer Olympics."
    },
    {
        "slug": "summer-olympics-teams",
        "name": "Summer Olympics teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Summer Olympics.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Summer Olympics."
    },
    {
        "slug": "summer-olympics-venues",
        "name": "Summer Olympics venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Summer Olympics.",
        "description": "Places where Summer Olympics is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "summer-olympics-events",
        "name": "Summer Olympics events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Summer Olympics.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Summer Olympics."
    },
    {
        "slug": "summer-olympics-rules",
        "name": "Summer Olympics rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Summer Olympics.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Summer Olympics legible as a sport."
    },
    {
        "slug": "summer-olympics-places",
        "name": "Summer Olympics places",
        "type": "place",
        "short_description": "Locations and geographies that frame Summer Olympics.",
        "description": "Places, regions, and built sites that give Summer Olympics its map — where events and figures concentrate."
    },
    {
        "slug": "summer-olympics-objects",
        "name": "Summer Olympics objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Summer Olympics.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Summer Olympics."
    },
    {
        "slug": "summer-olympics-factions",
        "name": "Summer Olympics factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Summer Olympics.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Summer Olympics."
    },
    {
        "slug": "summer-olympics-concepts",
        "name": "Summer Olympics concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Summer Olympics.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Summer Olympics readable as a lore graph."
    },
    {
        "slug": "summer-olympics-eras",
        "name": "Summer Olympics eras",
        "type": "event",
        "short_description": "Periodization for Summer Olympics.",
        "description": "Named eras and phases that help readers track how Summer Olympics changes across time."
    },
    {
        "slug": "summer-olympics-works",
        "name": "Summer Olympics works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Summer Olympics.",
        "description": "Primary works and adaptations through which most audiences encounter Summer Olympics."
    },
    {
        "slug": "summer-olympics-symbols",
        "name": "Summer Olympics symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Summer Olympics.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Summer Olympics."
    },
    {
        "slug": "summer-olympics-controversies",
        "name": "Summer Olympics controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Summer Olympics.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Summer Olympics argumentative."
    },
    {
        "slug": "summer-olympics-sources",
        "name": "Summer Olympics sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Summer Olympics.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Summer Olympics."
    },
    {
        "slug": "summer-olympics-geography",
        "name": "Summer Olympics geography",
        "type": "place",
        "short_description": "Broader geographic framing for Summer Olympics.",
        "description": "Regions, routes, and spatial systems that situate Summer Olympics beyond single named places."
    },
    {
        "slug": "summer-olympics-legacy",
        "name": "Summer Olympics legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Summer Olympics.",
        "description": "How Summer Olympics continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "summer-olympics-practices",
        "name": "Summer Olympics practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Summer Olympics.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Summer Olympics."
    },
    {
        "slug": "summer-olympics-entry-1",
        "name": "Summer Olympics entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-2",
        "name": "Summer Olympics entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-3",
        "name": "Summer Olympics entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-4",
        "name": "Summer Olympics entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-5",
        "name": "Summer Olympics entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-6",
        "name": "Summer Olympics entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-7",
        "name": "Summer Olympics entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-8",
        "name": "Summer Olympics entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-9",
        "name": "Summer Olympics entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-10",
        "name": "Summer Olympics entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-11",
        "name": "Summer Olympics entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-12",
        "name": "Summer Olympics entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-13",
        "name": "Summer Olympics entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-14",
        "name": "Summer Olympics entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-15",
        "name": "Summer Olympics entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-16",
        "name": "Summer Olympics entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-17",
        "name": "Summer Olympics entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-18",
        "name": "Summer Olympics entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-19",
        "name": "Summer Olympics entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-20",
        "name": "Summer Olympics entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-21",
        "name": "Summer Olympics entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "summer-olympics-entry-22",
        "name": "Summer Olympics entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Summer Olympics.",
        "description": "A supporting encyclopedia entry in the Summer Olympics subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "summer-olympics",
        "summer-olympics-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "summer-olympics",
        "summer-olympics-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "summer-olympics-figures",
        "summer-olympics-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "summer-olympics-events",
        "summer-olympics-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "summer-olympics",
        "summer-olympics-places",
        "contains",
        "Summer Olympics places is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-objects",
        "contains",
        "Summer Olympics objects & artifacts is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-factions",
        "contains",
        "Summer Olympics factions & groups is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-concepts",
        "contains",
        "Summer Olympics concepts is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-eras",
        "contains",
        "Summer Olympics eras is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-works",
        "contains",
        "Summer Olympics works & media is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-symbols",
        "contains",
        "Summer Olympics symbols is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-controversies",
        "contains",
        "Summer Olympics controversies is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-sources",
        "contains",
        "Summer Olympics sources is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-geography",
        "contains",
        "Summer Olympics geography is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-legacy",
        "contains",
        "Summer Olympics legacy is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-practices",
        "contains",
        "Summer Olympics practices is a primary trailhead under Summer Olympics.",
        0.88,
        0.82
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-1",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-2",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-3",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-4",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-5",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-6",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-7",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-8",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-9",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-10",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-11",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-12",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-13",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-14",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-15",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-16",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-17",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-18",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-19",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-20",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-21",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ],
    [
        "summer-olympics",
        "summer-olympics-entry-22",
        "contains",
        "Supporting entry under Summer Olympics.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
