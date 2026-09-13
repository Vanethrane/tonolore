/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fiba-basketball-world-cup",
        "name": "FIBA Basketball World Cup",
        "type": "topic",
        "short_description": "The global national-team basketball championship run by FIBA.",
        "description": "The global national-team basketball championship run by FIBA. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIBA Basketball World Cup so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "fiba-basketball-world-cup-figures",
        "name": "FIBA Basketball World Cup figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to FIBA Basketball World Cup.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-teams",
        "name": "FIBA Basketball World Cup teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to FIBA Basketball World Cup.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-venues",
        "name": "FIBA Basketball World Cup venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host FIBA Basketball World Cup.",
        "description": "Places where FIBA Basketball World Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "fiba-basketball-world-cup-events",
        "name": "FIBA Basketball World Cup events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in FIBA Basketball World Cup.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-rules",
        "name": "FIBA Basketball World Cup rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for FIBA Basketball World Cup.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make FIBA Basketball World Cup legible as a sport."
    },
    {
        "slug": "fiba-basketball-world-cup-places",
        "name": "FIBA Basketball World Cup places",
        "type": "place",
        "short_description": "Locations and geographies that frame FIBA Basketball World Cup.",
        "description": "Places, regions, and built sites that give FIBA Basketball World Cup its map — where events and figures concentrate."
    },
    {
        "slug": "fiba-basketball-world-cup-objects",
        "name": "FIBA Basketball World Cup objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to FIBA Basketball World Cup.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-factions",
        "name": "FIBA Basketball World Cup factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside FIBA Basketball World Cup.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-concepts",
        "name": "FIBA Basketball World Cup concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize FIBA Basketball World Cup.",
        "description": "Keywords, doctrines, systems, and abstract forces that make FIBA Basketball World Cup readable as a lore graph."
    },
    {
        "slug": "fiba-basketball-world-cup-eras",
        "name": "FIBA Basketball World Cup eras",
        "type": "event",
        "short_description": "Periodization for FIBA Basketball World Cup.",
        "description": "Named eras and phases that help readers track how FIBA Basketball World Cup changes across time."
    },
    {
        "slug": "fiba-basketball-world-cup-works",
        "name": "FIBA Basketball World Cup works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry FIBA Basketball World Cup.",
        "description": "Primary works and adaptations through which most audiences encounter FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-symbols",
        "name": "FIBA Basketball World Cup symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with FIBA Basketball World Cup.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-controversies",
        "name": "FIBA Basketball World Cup controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in FIBA Basketball World Cup.",
        "description": "Debates, rival canons, scandals, and contested facts that keep FIBA Basketball World Cup argumentative."
    },
    {
        "slug": "fiba-basketball-world-cup-sources",
        "name": "FIBA Basketball World Cup sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into FIBA Basketball World Cup.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-geography",
        "name": "FIBA Basketball World Cup geography",
        "type": "place",
        "short_description": "Broader geographic framing for FIBA Basketball World Cup.",
        "description": "Regions, routes, and spatial systems that situate FIBA Basketball World Cup beyond single named places."
    },
    {
        "slug": "fiba-basketball-world-cup-legacy",
        "name": "FIBA Basketball World Cup legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of FIBA Basketball World Cup.",
        "description": "How FIBA Basketball World Cup continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fiba-basketball-world-cup-practices",
        "name": "FIBA Basketball World Cup practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in FIBA Basketball World Cup.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in FIBA Basketball World Cup."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-1",
        "name": "FIBA Basketball World Cup entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-2",
        "name": "FIBA Basketball World Cup entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-3",
        "name": "FIBA Basketball World Cup entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-4",
        "name": "FIBA Basketball World Cup entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-5",
        "name": "FIBA Basketball World Cup entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-6",
        "name": "FIBA Basketball World Cup entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-7",
        "name": "FIBA Basketball World Cup entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-8",
        "name": "FIBA Basketball World Cup entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-9",
        "name": "FIBA Basketball World Cup entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-10",
        "name": "FIBA Basketball World Cup entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-11",
        "name": "FIBA Basketball World Cup entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-12",
        "name": "FIBA Basketball World Cup entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-13",
        "name": "FIBA Basketball World Cup entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-14",
        "name": "FIBA Basketball World Cup entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-15",
        "name": "FIBA Basketball World Cup entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-16",
        "name": "FIBA Basketball World Cup entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-17",
        "name": "FIBA Basketball World Cup entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-18",
        "name": "FIBA Basketball World Cup entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-19",
        "name": "FIBA Basketball World Cup entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-20",
        "name": "FIBA Basketball World Cup entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-21",
        "name": "FIBA Basketball World Cup entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fiba-basketball-world-cup-entry-22",
        "name": "FIBA Basketball World Cup entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside FIBA Basketball World Cup.",
        "description": "A supporting encyclopedia entry in the FIBA Basketball World Cup subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup-figures",
        "fiba-basketball-world-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "fiba-basketball-world-cup-events",
        "fiba-basketball-world-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-places",
        "contains",
        "FIBA Basketball World Cup places is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-objects",
        "contains",
        "FIBA Basketball World Cup objects & artifacts is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-factions",
        "contains",
        "FIBA Basketball World Cup factions & groups is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-concepts",
        "contains",
        "FIBA Basketball World Cup concepts is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-eras",
        "contains",
        "FIBA Basketball World Cup eras is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-works",
        "contains",
        "FIBA Basketball World Cup works & media is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-symbols",
        "contains",
        "FIBA Basketball World Cup symbols is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-controversies",
        "contains",
        "FIBA Basketball World Cup controversies is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-sources",
        "contains",
        "FIBA Basketball World Cup sources is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-geography",
        "contains",
        "FIBA Basketball World Cup geography is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-legacy",
        "contains",
        "FIBA Basketball World Cup legacy is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-practices",
        "contains",
        "FIBA Basketball World Cup practices is a primary trailhead under FIBA Basketball World Cup.",
        0.88,
        0.82
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-1",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-2",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-3",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-4",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-5",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-6",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-7",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-8",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-9",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-10",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-11",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-12",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-13",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-14",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-15",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-16",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-17",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-18",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-19",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-20",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-21",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-entry-22",
        "contains",
        "Supporting entry under FIBA Basketball World Cup.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
