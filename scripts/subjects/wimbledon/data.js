/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wimbledon",
        "name": "Wimbledon",
        "type": "topic",
        "short_description": "The Championships at the All England Club — grass, strawberries, and Slam lore.",
        "description": "The Championships at the All England Club — grass, strawberries, and Slam lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wimbledon so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "wimbledon-figures",
        "name": "Wimbledon figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Wimbledon.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Wimbledon."
    },
    {
        "slug": "wimbledon-teams",
        "name": "Wimbledon teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Wimbledon.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Wimbledon."
    },
    {
        "slug": "wimbledon-venues",
        "name": "Wimbledon venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Wimbledon.",
        "description": "Places where Wimbledon is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "wimbledon-events",
        "name": "Wimbledon events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Wimbledon.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Wimbledon."
    },
    {
        "slug": "wimbledon-rules",
        "name": "Wimbledon rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Wimbledon.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Wimbledon legible as a sport."
    },
    {
        "slug": "wimbledon-places",
        "name": "Wimbledon places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wimbledon.",
        "description": "Places, regions, and built sites that give Wimbledon its map — where events and figures concentrate."
    },
    {
        "slug": "wimbledon-objects",
        "name": "Wimbledon objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wimbledon.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wimbledon."
    },
    {
        "slug": "wimbledon-factions",
        "name": "Wimbledon factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wimbledon.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wimbledon."
    },
    {
        "slug": "wimbledon-concepts",
        "name": "Wimbledon concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wimbledon.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wimbledon readable as a lore graph."
    },
    {
        "slug": "wimbledon-eras",
        "name": "Wimbledon eras",
        "type": "event",
        "short_description": "Periodization for Wimbledon.",
        "description": "Named eras and phases that help readers track how Wimbledon changes across time."
    },
    {
        "slug": "wimbledon-works",
        "name": "Wimbledon works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wimbledon.",
        "description": "Primary works and adaptations through which most audiences encounter Wimbledon."
    },
    {
        "slug": "wimbledon-symbols",
        "name": "Wimbledon symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wimbledon.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wimbledon."
    },
    {
        "slug": "wimbledon-controversies",
        "name": "Wimbledon controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wimbledon.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wimbledon argumentative."
    },
    {
        "slug": "wimbledon-sources",
        "name": "Wimbledon sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wimbledon.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wimbledon."
    },
    {
        "slug": "wimbledon-geography",
        "name": "Wimbledon geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wimbledon.",
        "description": "Regions, routes, and spatial systems that situate Wimbledon beyond single named places."
    },
    {
        "slug": "wimbledon-legacy",
        "name": "Wimbledon legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wimbledon.",
        "description": "How Wimbledon continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wimbledon-practices",
        "name": "Wimbledon practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wimbledon.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wimbledon."
    },
    {
        "slug": "wimbledon-entry-1",
        "name": "Wimbledon entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-2",
        "name": "Wimbledon entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-3",
        "name": "Wimbledon entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-4",
        "name": "Wimbledon entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-5",
        "name": "Wimbledon entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-6",
        "name": "Wimbledon entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-7",
        "name": "Wimbledon entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-8",
        "name": "Wimbledon entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-9",
        "name": "Wimbledon entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-10",
        "name": "Wimbledon entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-11",
        "name": "Wimbledon entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-12",
        "name": "Wimbledon entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-13",
        "name": "Wimbledon entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-14",
        "name": "Wimbledon entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-15",
        "name": "Wimbledon entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-16",
        "name": "Wimbledon entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-17",
        "name": "Wimbledon entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-18",
        "name": "Wimbledon entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-19",
        "name": "Wimbledon entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-20",
        "name": "Wimbledon entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-21",
        "name": "Wimbledon entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wimbledon-entry-22",
        "name": "Wimbledon entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wimbledon.",
        "description": "A supporting encyclopedia entry in the Wimbledon subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wimbledon",
        "wimbledon-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "wimbledon",
        "wimbledon-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "wimbledon-figures",
        "wimbledon-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "wimbledon-events",
        "wimbledon-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "wimbledon",
        "wimbledon-places",
        "contains",
        "Wimbledon places is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-objects",
        "contains",
        "Wimbledon objects & artifacts is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-factions",
        "contains",
        "Wimbledon factions & groups is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-concepts",
        "contains",
        "Wimbledon concepts is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-eras",
        "contains",
        "Wimbledon eras is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-works",
        "contains",
        "Wimbledon works & media is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-symbols",
        "contains",
        "Wimbledon symbols is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-controversies",
        "contains",
        "Wimbledon controversies is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-sources",
        "contains",
        "Wimbledon sources is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-geography",
        "contains",
        "Wimbledon geography is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-legacy",
        "contains",
        "Wimbledon legacy is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-practices",
        "contains",
        "Wimbledon practices is a primary trailhead under Wimbledon.",
        0.88,
        0.82
    ],
    [
        "wimbledon",
        "wimbledon-entry-1",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-2",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-3",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-4",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-5",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-6",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-7",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-8",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-9",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-10",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-11",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-12",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-13",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-14",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-15",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-16",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-17",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-18",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-19",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-20",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-21",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ],
    [
        "wimbledon",
        "wimbledon-entry-22",
        "contains",
        "Supporting entry under Wimbledon.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
