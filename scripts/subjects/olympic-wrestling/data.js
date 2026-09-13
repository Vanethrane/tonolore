/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "olympic-wrestling",
        "name": "Olympic wrestling",
        "type": "topic",
        "short_description": "Freestyle and Greco-Roman wrestling on the Olympic and world stage.",
        "description": "Freestyle and Greco-Roman wrestling on the Olympic and world stage. This Ton-o-Lore subject maps people, places, events, and ideas tied to Olympic wrestling so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "olympic-wrestling-figures",
        "name": "Olympic wrestling figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Olympic wrestling.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-teams",
        "name": "Olympic wrestling teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Olympic wrestling.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-venues",
        "name": "Olympic wrestling venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Olympic wrestling.",
        "description": "Places where Olympic wrestling is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "olympic-wrestling-events",
        "name": "Olympic wrestling events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Olympic wrestling.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-rules",
        "name": "Olympic wrestling rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Olympic wrestling.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Olympic wrestling legible as a sport."
    },
    {
        "slug": "olympic-wrestling-places",
        "name": "Olympic wrestling places",
        "type": "place",
        "short_description": "Locations and geographies that frame Olympic wrestling.",
        "description": "Places, regions, and built sites that give Olympic wrestling its map — where events and figures concentrate."
    },
    {
        "slug": "olympic-wrestling-objects",
        "name": "Olympic wrestling objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Olympic wrestling.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-factions",
        "name": "Olympic wrestling factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Olympic wrestling.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-concepts",
        "name": "Olympic wrestling concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Olympic wrestling.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Olympic wrestling readable as a lore graph."
    },
    {
        "slug": "olympic-wrestling-eras",
        "name": "Olympic wrestling eras",
        "type": "event",
        "short_description": "Periodization for Olympic wrestling.",
        "description": "Named eras and phases that help readers track how Olympic wrestling changes across time."
    },
    {
        "slug": "olympic-wrestling-works",
        "name": "Olympic wrestling works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Olympic wrestling.",
        "description": "Primary works and adaptations through which most audiences encounter Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-symbols",
        "name": "Olympic wrestling symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Olympic wrestling.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-controversies",
        "name": "Olympic wrestling controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Olympic wrestling.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Olympic wrestling argumentative."
    },
    {
        "slug": "olympic-wrestling-sources",
        "name": "Olympic wrestling sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Olympic wrestling.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-geography",
        "name": "Olympic wrestling geography",
        "type": "place",
        "short_description": "Broader geographic framing for Olympic wrestling.",
        "description": "Regions, routes, and spatial systems that situate Olympic wrestling beyond single named places."
    },
    {
        "slug": "olympic-wrestling-legacy",
        "name": "Olympic wrestling legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Olympic wrestling.",
        "description": "How Olympic wrestling continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "olympic-wrestling-practices",
        "name": "Olympic wrestling practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Olympic wrestling.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Olympic wrestling."
    },
    {
        "slug": "olympic-wrestling-entry-1",
        "name": "Olympic wrestling entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-2",
        "name": "Olympic wrestling entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-3",
        "name": "Olympic wrestling entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-4",
        "name": "Olympic wrestling entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-5",
        "name": "Olympic wrestling entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-6",
        "name": "Olympic wrestling entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-7",
        "name": "Olympic wrestling entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-8",
        "name": "Olympic wrestling entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-9",
        "name": "Olympic wrestling entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-10",
        "name": "Olympic wrestling entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-11",
        "name": "Olympic wrestling entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-12",
        "name": "Olympic wrestling entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-13",
        "name": "Olympic wrestling entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-14",
        "name": "Olympic wrestling entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-15",
        "name": "Olympic wrestling entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-16",
        "name": "Olympic wrestling entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-17",
        "name": "Olympic wrestling entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-18",
        "name": "Olympic wrestling entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-19",
        "name": "Olympic wrestling entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-20",
        "name": "Olympic wrestling entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-21",
        "name": "Olympic wrestling entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olympic-wrestling-entry-22",
        "name": "Olympic wrestling entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olympic wrestling.",
        "description": "A supporting encyclopedia entry in the Olympic wrestling subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "olympic-wrestling",
        "olympic-wrestling-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "olympic-wrestling-figures",
        "olympic-wrestling-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "olympic-wrestling-events",
        "olympic-wrestling-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-places",
        "contains",
        "Olympic wrestling places is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-objects",
        "contains",
        "Olympic wrestling objects & artifacts is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-factions",
        "contains",
        "Olympic wrestling factions & groups is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-concepts",
        "contains",
        "Olympic wrestling concepts is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-eras",
        "contains",
        "Olympic wrestling eras is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-works",
        "contains",
        "Olympic wrestling works & media is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-symbols",
        "contains",
        "Olympic wrestling symbols is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-controversies",
        "contains",
        "Olympic wrestling controversies is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-sources",
        "contains",
        "Olympic wrestling sources is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-geography",
        "contains",
        "Olympic wrestling geography is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-legacy",
        "contains",
        "Olympic wrestling legacy is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-practices",
        "contains",
        "Olympic wrestling practices is a primary trailhead under Olympic wrestling.",
        0.88,
        0.82
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-1",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-2",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-3",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-4",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-5",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-6",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-7",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-8",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-9",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-10",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-11",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-12",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-13",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-14",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-15",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-16",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-17",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-18",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-19",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-20",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-21",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-entry-22",
        "contains",
        "Supporting entry under Olympic wrestling.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
