/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nascar",
        "name": "NASCAR",
        "type": "topic",
        "short_description": "Stock-car racing's premier series — Daytona, playoffs, and oval-track lore.",
        "description": "Stock-car racing's premier series — Daytona, playoffs, and oval-track lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to NASCAR so readers can follow long-tail connections across motorsport."
    },
    {
        "slug": "nascar-figures",
        "name": "NASCAR figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NASCAR.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NASCAR."
    },
    {
        "slug": "nascar-teams",
        "name": "NASCAR teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NASCAR.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NASCAR."
    },
    {
        "slug": "nascar-venues",
        "name": "NASCAR venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NASCAR.",
        "description": "Places where NASCAR is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "nascar-events",
        "name": "NASCAR events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NASCAR.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NASCAR."
    },
    {
        "slug": "nascar-rules",
        "name": "NASCAR rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NASCAR.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NASCAR legible as a sport."
    },
    {
        "slug": "nascar-places",
        "name": "NASCAR places",
        "type": "place",
        "short_description": "Locations and geographies that frame NASCAR.",
        "description": "Places, regions, and built sites that give NASCAR its map — where events and figures concentrate."
    },
    {
        "slug": "nascar-objects",
        "name": "NASCAR objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NASCAR.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NASCAR."
    },
    {
        "slug": "nascar-factions",
        "name": "NASCAR factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NASCAR.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NASCAR."
    },
    {
        "slug": "nascar-concepts",
        "name": "NASCAR concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NASCAR.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NASCAR readable as a lore graph."
    },
    {
        "slug": "nascar-eras",
        "name": "NASCAR eras",
        "type": "event",
        "short_description": "Periodization for NASCAR.",
        "description": "Named eras and phases that help readers track how NASCAR changes across time."
    },
    {
        "slug": "nascar-works",
        "name": "NASCAR works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NASCAR.",
        "description": "Primary works and adaptations through which most audiences encounter NASCAR."
    },
    {
        "slug": "nascar-symbols",
        "name": "NASCAR symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NASCAR.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NASCAR."
    },
    {
        "slug": "nascar-controversies",
        "name": "NASCAR controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NASCAR.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NASCAR argumentative."
    },
    {
        "slug": "nascar-sources",
        "name": "NASCAR sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NASCAR.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NASCAR."
    },
    {
        "slug": "nascar-geography",
        "name": "NASCAR geography",
        "type": "place",
        "short_description": "Broader geographic framing for NASCAR.",
        "description": "Regions, routes, and spatial systems that situate NASCAR beyond single named places."
    },
    {
        "slug": "nascar-legacy",
        "name": "NASCAR legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NASCAR.",
        "description": "How NASCAR continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nascar-practices",
        "name": "NASCAR practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NASCAR.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NASCAR."
    },
    {
        "slug": "nascar-entry-1",
        "name": "NASCAR entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-2",
        "name": "NASCAR entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-3",
        "name": "NASCAR entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-4",
        "name": "NASCAR entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-5",
        "name": "NASCAR entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-6",
        "name": "NASCAR entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-7",
        "name": "NASCAR entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-8",
        "name": "NASCAR entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-9",
        "name": "NASCAR entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-10",
        "name": "NASCAR entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-11",
        "name": "NASCAR entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-12",
        "name": "NASCAR entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-13",
        "name": "NASCAR entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-14",
        "name": "NASCAR entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-15",
        "name": "NASCAR entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-16",
        "name": "NASCAR entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-17",
        "name": "NASCAR entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-18",
        "name": "NASCAR entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-19",
        "name": "NASCAR entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-20",
        "name": "NASCAR entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-21",
        "name": "NASCAR entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nascar-entry-22",
        "name": "NASCAR entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NASCAR.",
        "description": "A supporting encyclopedia entry in the NASCAR subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nascar",
        "nascar-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nascar",
        "nascar-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nascar-figures",
        "nascar-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nascar-events",
        "nascar-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "nascar",
        "nascar-places",
        "contains",
        "NASCAR places is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-objects",
        "contains",
        "NASCAR objects & artifacts is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-factions",
        "contains",
        "NASCAR factions & groups is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-concepts",
        "contains",
        "NASCAR concepts is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-eras",
        "contains",
        "NASCAR eras is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-works",
        "contains",
        "NASCAR works & media is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-symbols",
        "contains",
        "NASCAR symbols is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-controversies",
        "contains",
        "NASCAR controversies is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-sources",
        "contains",
        "NASCAR sources is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-geography",
        "contains",
        "NASCAR geography is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-legacy",
        "contains",
        "NASCAR legacy is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-practices",
        "contains",
        "NASCAR practices is a primary trailhead under NASCAR.",
        0.88,
        0.82
    ],
    [
        "nascar",
        "nascar-entry-1",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-2",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-3",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-4",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-5",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-6",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-7",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-8",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-9",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-10",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-11",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-12",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-13",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-14",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-15",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-16",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-17",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-18",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-19",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-20",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-21",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ],
    [
        "nascar",
        "nascar-entry-22",
        "contains",
        "Supporting entry under NASCAR.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
