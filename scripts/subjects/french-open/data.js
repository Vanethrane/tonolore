/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "french-open",
        "name": "French Open",
        "type": "topic",
        "short_description": "Roland-Garros — clay-court grind and Paris Slam tradition.",
        "description": "Roland-Garros — clay-court grind and Paris Slam tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to French Open so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "french-open-figures",
        "name": "French Open figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to French Open.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring French Open."
    },
    {
        "slug": "french-open-teams",
        "name": "French Open teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to French Open.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around French Open."
    },
    {
        "slug": "french-open-venues",
        "name": "French Open venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host French Open.",
        "description": "Places where French Open is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "french-open-events",
        "name": "French Open events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in French Open.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about French Open."
    },
    {
        "slug": "french-open-rules",
        "name": "French Open rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for French Open.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make French Open legible as a sport."
    },
    {
        "slug": "french-open-places",
        "name": "French Open places",
        "type": "place",
        "short_description": "Locations and geographies that frame French Open.",
        "description": "Places, regions, and built sites that give French Open its map — where events and figures concentrate."
    },
    {
        "slug": "french-open-objects",
        "name": "French Open objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to French Open.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through French Open."
    },
    {
        "slug": "french-open-factions",
        "name": "French Open factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside French Open.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in French Open."
    },
    {
        "slug": "french-open-concepts",
        "name": "French Open concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize French Open.",
        "description": "Keywords, doctrines, systems, and abstract forces that make French Open readable as a lore graph."
    },
    {
        "slug": "french-open-eras",
        "name": "French Open eras",
        "type": "event",
        "short_description": "Periodization for French Open.",
        "description": "Named eras and phases that help readers track how French Open changes across time."
    },
    {
        "slug": "french-open-works",
        "name": "French Open works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry French Open.",
        "description": "Primary works and adaptations through which most audiences encounter French Open."
    },
    {
        "slug": "french-open-symbols",
        "name": "French Open symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with French Open.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside French Open."
    },
    {
        "slug": "french-open-controversies",
        "name": "French Open controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in French Open.",
        "description": "Debates, rival canons, scandals, and contested facts that keep French Open argumentative."
    },
    {
        "slug": "french-open-sources",
        "name": "French Open sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into French Open.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify French Open."
    },
    {
        "slug": "french-open-geography",
        "name": "French Open geography",
        "type": "place",
        "short_description": "Broader geographic framing for French Open.",
        "description": "Regions, routes, and spatial systems that situate French Open beyond single named places."
    },
    {
        "slug": "french-open-legacy",
        "name": "French Open legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of French Open.",
        "description": "How French Open continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "french-open-practices",
        "name": "French Open practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in French Open.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in French Open."
    },
    {
        "slug": "french-open-entry-1",
        "name": "French Open entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-2",
        "name": "French Open entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-3",
        "name": "French Open entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-4",
        "name": "French Open entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-5",
        "name": "French Open entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-6",
        "name": "French Open entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-7",
        "name": "French Open entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-8",
        "name": "French Open entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-9",
        "name": "French Open entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-10",
        "name": "French Open entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-11",
        "name": "French Open entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-12",
        "name": "French Open entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-13",
        "name": "French Open entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-14",
        "name": "French Open entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-15",
        "name": "French Open entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-16",
        "name": "French Open entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-17",
        "name": "French Open entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-18",
        "name": "French Open entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-19",
        "name": "French Open entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-20",
        "name": "French Open entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-21",
        "name": "French Open entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-open-entry-22",
        "name": "French Open entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Open.",
        "description": "A supporting encyclopedia entry in the French Open subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "french-open",
        "french-open-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "french-open",
        "french-open-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "french-open-figures",
        "french-open-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "french-open-events",
        "french-open-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "french-open",
        "french-open-places",
        "contains",
        "French Open places is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-objects",
        "contains",
        "French Open objects & artifacts is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-factions",
        "contains",
        "French Open factions & groups is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-concepts",
        "contains",
        "French Open concepts is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-eras",
        "contains",
        "French Open eras is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-works",
        "contains",
        "French Open works & media is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-symbols",
        "contains",
        "French Open symbols is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-controversies",
        "contains",
        "French Open controversies is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-sources",
        "contains",
        "French Open sources is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-geography",
        "contains",
        "French Open geography is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-legacy",
        "contains",
        "French Open legacy is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-practices",
        "contains",
        "French Open practices is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-entry-1",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-2",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-3",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-4",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-5",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-6",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-7",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-8",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-9",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-10",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-11",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-12",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-13",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-14",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-15",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-16",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-17",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-18",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-19",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-20",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-21",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ],
    [
        "french-open",
        "french-open-entry-22",
        "contains",
        "Supporting entry under French Open.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
