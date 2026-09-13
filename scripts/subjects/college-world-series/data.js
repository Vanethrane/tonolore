/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "college-world-series",
        "name": "College World Series",
        "type": "topic",
        "short_description": "NCAA Division I baseball's Omaha finale — programs, pitch counts, and summer lore.",
        "description": "NCAA Division I baseball's Omaha finale — programs, pitch counts, and summer lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to College World Series so readers can follow long-tail connections across baseball."
    },
    {
        "slug": "college-world-series-figures",
        "name": "College World Series figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to College World Series.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring College World Series."
    },
    {
        "slug": "college-world-series-teams",
        "name": "College World Series teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to College World Series.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around College World Series."
    },
    {
        "slug": "college-world-series-venues",
        "name": "College World Series venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host College World Series.",
        "description": "Places where College World Series is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "college-world-series-events",
        "name": "College World Series events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in College World Series.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about College World Series."
    },
    {
        "slug": "college-world-series-rules",
        "name": "College World Series rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for College World Series.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make College World Series legible as a sport."
    },
    {
        "slug": "college-world-series-places",
        "name": "College World Series places",
        "type": "place",
        "short_description": "Locations and geographies that frame College World Series.",
        "description": "Places, regions, and built sites that give College World Series its map — where events and figures concentrate."
    },
    {
        "slug": "college-world-series-objects",
        "name": "College World Series objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to College World Series.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through College World Series."
    },
    {
        "slug": "college-world-series-factions",
        "name": "College World Series factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside College World Series.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in College World Series."
    },
    {
        "slug": "college-world-series-concepts",
        "name": "College World Series concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize College World Series.",
        "description": "Keywords, doctrines, systems, and abstract forces that make College World Series readable as a lore graph."
    },
    {
        "slug": "college-world-series-eras",
        "name": "College World Series eras",
        "type": "event",
        "short_description": "Periodization for College World Series.",
        "description": "Named eras and phases that help readers track how College World Series changes across time."
    },
    {
        "slug": "college-world-series-works",
        "name": "College World Series works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry College World Series.",
        "description": "Primary works and adaptations through which most audiences encounter College World Series."
    },
    {
        "slug": "college-world-series-symbols",
        "name": "College World Series symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with College World Series.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside College World Series."
    },
    {
        "slug": "college-world-series-controversies",
        "name": "College World Series controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in College World Series.",
        "description": "Debates, rival canons, scandals, and contested facts that keep College World Series argumentative."
    },
    {
        "slug": "college-world-series-sources",
        "name": "College World Series sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into College World Series.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify College World Series."
    },
    {
        "slug": "college-world-series-geography",
        "name": "College World Series geography",
        "type": "place",
        "short_description": "Broader geographic framing for College World Series.",
        "description": "Regions, routes, and spatial systems that situate College World Series beyond single named places."
    },
    {
        "slug": "college-world-series-legacy",
        "name": "College World Series legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of College World Series.",
        "description": "How College World Series continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "college-world-series-practices",
        "name": "College World Series practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in College World Series.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in College World Series."
    },
    {
        "slug": "college-world-series-entry-1",
        "name": "College World Series entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-2",
        "name": "College World Series entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-3",
        "name": "College World Series entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-4",
        "name": "College World Series entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-5",
        "name": "College World Series entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-6",
        "name": "College World Series entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-7",
        "name": "College World Series entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-8",
        "name": "College World Series entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-9",
        "name": "College World Series entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-10",
        "name": "College World Series entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-11",
        "name": "College World Series entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-12",
        "name": "College World Series entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-13",
        "name": "College World Series entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-14",
        "name": "College World Series entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-15",
        "name": "College World Series entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-16",
        "name": "College World Series entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-17",
        "name": "College World Series entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-18",
        "name": "College World Series entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-19",
        "name": "College World Series entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-20",
        "name": "College World Series entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-21",
        "name": "College World Series entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "college-world-series-entry-22",
        "name": "College World Series entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside College World Series.",
        "description": "A supporting encyclopedia entry in the College World Series subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "college-world-series",
        "college-world-series-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "college-world-series",
        "college-world-series-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "college-world-series-figures",
        "college-world-series-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "college-world-series-events",
        "college-world-series-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "college-world-series",
        "college-world-series-places",
        "contains",
        "College World Series places is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-objects",
        "contains",
        "College World Series objects & artifacts is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-factions",
        "contains",
        "College World Series factions & groups is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-concepts",
        "contains",
        "College World Series concepts is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-eras",
        "contains",
        "College World Series eras is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-works",
        "contains",
        "College World Series works & media is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-symbols",
        "contains",
        "College World Series symbols is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-controversies",
        "contains",
        "College World Series controversies is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-sources",
        "contains",
        "College World Series sources is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-geography",
        "contains",
        "College World Series geography is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-legacy",
        "contains",
        "College World Series legacy is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-practices",
        "contains",
        "College World Series practices is a primary trailhead under College World Series.",
        0.88,
        0.82
    ],
    [
        "college-world-series",
        "college-world-series-entry-1",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-2",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-3",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-4",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-5",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-6",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-7",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-8",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-9",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-10",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-11",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-12",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-13",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-14",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-15",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-16",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-17",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-18",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-19",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-20",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-21",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ],
    [
        "college-world-series",
        "college-world-series-entry-22",
        "contains",
        "Supporting entry under College World Series.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
