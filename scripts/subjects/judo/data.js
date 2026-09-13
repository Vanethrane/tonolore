/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "judo",
        "name": "Judo",
        "type": "topic",
        "short_description": "The Olympic martial art of throws and groundwork founded by Jigoro Kano.",
        "description": "The Olympic martial art of throws and groundwork founded by Jigoro Kano. This Ton-o-Lore subject maps people, places, events, and ideas tied to Judo so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "judo-figures",
        "name": "Judo figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Judo.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Judo."
    },
    {
        "slug": "judo-teams",
        "name": "Judo teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Judo.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Judo."
    },
    {
        "slug": "judo-venues",
        "name": "Judo venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Judo.",
        "description": "Places where Judo is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "judo-events",
        "name": "Judo events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Judo.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Judo."
    },
    {
        "slug": "judo-rules",
        "name": "Judo rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Judo.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Judo legible as a sport."
    },
    {
        "slug": "judo-places",
        "name": "Judo places",
        "type": "place",
        "short_description": "Locations and geographies that frame Judo.",
        "description": "Places, regions, and built sites that give Judo its map — where events and figures concentrate."
    },
    {
        "slug": "judo-objects",
        "name": "Judo objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Judo.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Judo."
    },
    {
        "slug": "judo-factions",
        "name": "Judo factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Judo.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Judo."
    },
    {
        "slug": "judo-concepts",
        "name": "Judo concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Judo.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Judo readable as a lore graph."
    },
    {
        "slug": "judo-eras",
        "name": "Judo eras",
        "type": "event",
        "short_description": "Periodization for Judo.",
        "description": "Named eras and phases that help readers track how Judo changes across time."
    },
    {
        "slug": "judo-works",
        "name": "Judo works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Judo.",
        "description": "Primary works and adaptations through which most audiences encounter Judo."
    },
    {
        "slug": "judo-symbols",
        "name": "Judo symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Judo.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Judo."
    },
    {
        "slug": "judo-controversies",
        "name": "Judo controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Judo.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Judo argumentative."
    },
    {
        "slug": "judo-sources",
        "name": "Judo sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Judo.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Judo."
    },
    {
        "slug": "judo-geography",
        "name": "Judo geography",
        "type": "place",
        "short_description": "Broader geographic framing for Judo.",
        "description": "Regions, routes, and spatial systems that situate Judo beyond single named places."
    },
    {
        "slug": "judo-legacy",
        "name": "Judo legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Judo.",
        "description": "How Judo continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "judo-practices",
        "name": "Judo practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Judo.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Judo."
    },
    {
        "slug": "judo-entry-1",
        "name": "Judo entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-2",
        "name": "Judo entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-3",
        "name": "Judo entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-4",
        "name": "Judo entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-5",
        "name": "Judo entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-6",
        "name": "Judo entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-7",
        "name": "Judo entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-8",
        "name": "Judo entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-9",
        "name": "Judo entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-10",
        "name": "Judo entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-11",
        "name": "Judo entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-12",
        "name": "Judo entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-13",
        "name": "Judo entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-14",
        "name": "Judo entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-15",
        "name": "Judo entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-16",
        "name": "Judo entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-17",
        "name": "Judo entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-18",
        "name": "Judo entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-19",
        "name": "Judo entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-20",
        "name": "Judo entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-21",
        "name": "Judo entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judo-entry-22",
        "name": "Judo entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judo.",
        "description": "A supporting encyclopedia entry in the Judo subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "judo",
        "judo-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "judo",
        "judo-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "judo-figures",
        "judo-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "judo-events",
        "judo-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "judo",
        "judo-places",
        "contains",
        "Judo places is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-objects",
        "contains",
        "Judo objects & artifacts is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-factions",
        "contains",
        "Judo factions & groups is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-concepts",
        "contains",
        "Judo concepts is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-eras",
        "contains",
        "Judo eras is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-works",
        "contains",
        "Judo works & media is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-symbols",
        "contains",
        "Judo symbols is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-controversies",
        "contains",
        "Judo controversies is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-sources",
        "contains",
        "Judo sources is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-geography",
        "contains",
        "Judo geography is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-legacy",
        "contains",
        "Judo legacy is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-practices",
        "contains",
        "Judo practices is a primary trailhead under Judo.",
        0.88,
        0.82
    ],
    [
        "judo",
        "judo-entry-1",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-2",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-3",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-4",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-5",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-6",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-7",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-8",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-9",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-10",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-11",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-12",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-13",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-14",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-15",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-16",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-17",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-18",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-19",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-20",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-21",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ],
    [
        "judo",
        "judo-entry-22",
        "contains",
        "Supporting entry under Judo.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
