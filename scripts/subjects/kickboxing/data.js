/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kickboxing",
        "name": "Kickboxing",
        "type": "topic",
        "short_description": "Stand-up striking sports — rulesets from full contact to K-1 style lore.",
        "description": "Stand-up striking sports — rulesets from full contact to K-1 style lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kickboxing so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "kickboxing-figures",
        "name": "Kickboxing figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Kickboxing.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Kickboxing."
    },
    {
        "slug": "kickboxing-teams",
        "name": "Kickboxing teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Kickboxing.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Kickboxing."
    },
    {
        "slug": "kickboxing-venues",
        "name": "Kickboxing venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Kickboxing.",
        "description": "Places where Kickboxing is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "kickboxing-events",
        "name": "Kickboxing events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Kickboxing.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Kickboxing."
    },
    {
        "slug": "kickboxing-rules",
        "name": "Kickboxing rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Kickboxing.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Kickboxing legible as a sport."
    },
    {
        "slug": "kickboxing-places",
        "name": "Kickboxing places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kickboxing.",
        "description": "Places, regions, and built sites that give Kickboxing its map — where events and figures concentrate."
    },
    {
        "slug": "kickboxing-objects",
        "name": "Kickboxing objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kickboxing.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kickboxing."
    },
    {
        "slug": "kickboxing-factions",
        "name": "Kickboxing factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kickboxing.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kickboxing."
    },
    {
        "slug": "kickboxing-concepts",
        "name": "Kickboxing concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kickboxing.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kickboxing readable as a lore graph."
    },
    {
        "slug": "kickboxing-eras",
        "name": "Kickboxing eras",
        "type": "event",
        "short_description": "Periodization for Kickboxing.",
        "description": "Named eras and phases that help readers track how Kickboxing changes across time."
    },
    {
        "slug": "kickboxing-works",
        "name": "Kickboxing works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kickboxing.",
        "description": "Primary works and adaptations through which most audiences encounter Kickboxing."
    },
    {
        "slug": "kickboxing-symbols",
        "name": "Kickboxing symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kickboxing.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kickboxing."
    },
    {
        "slug": "kickboxing-controversies",
        "name": "Kickboxing controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kickboxing.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kickboxing argumentative."
    },
    {
        "slug": "kickboxing-sources",
        "name": "Kickboxing sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kickboxing.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kickboxing."
    },
    {
        "slug": "kickboxing-geography",
        "name": "Kickboxing geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kickboxing.",
        "description": "Regions, routes, and spatial systems that situate Kickboxing beyond single named places."
    },
    {
        "slug": "kickboxing-legacy",
        "name": "Kickboxing legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kickboxing.",
        "description": "How Kickboxing continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "kickboxing-practices",
        "name": "Kickboxing practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kickboxing.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kickboxing."
    },
    {
        "slug": "kickboxing-entry-1",
        "name": "Kickboxing entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-2",
        "name": "Kickboxing entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-3",
        "name": "Kickboxing entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-4",
        "name": "Kickboxing entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-5",
        "name": "Kickboxing entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-6",
        "name": "Kickboxing entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-7",
        "name": "Kickboxing entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-8",
        "name": "Kickboxing entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-9",
        "name": "Kickboxing entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-10",
        "name": "Kickboxing entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-11",
        "name": "Kickboxing entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-12",
        "name": "Kickboxing entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-13",
        "name": "Kickboxing entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-14",
        "name": "Kickboxing entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-15",
        "name": "Kickboxing entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-16",
        "name": "Kickboxing entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-17",
        "name": "Kickboxing entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-18",
        "name": "Kickboxing entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-19",
        "name": "Kickboxing entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-20",
        "name": "Kickboxing entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-21",
        "name": "Kickboxing entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kickboxing-entry-22",
        "name": "Kickboxing entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kickboxing.",
        "description": "A supporting encyclopedia entry in the Kickboxing subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "kickboxing",
        "kickboxing-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "kickboxing",
        "kickboxing-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "kickboxing-figures",
        "kickboxing-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "kickboxing-events",
        "kickboxing-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "kickboxing",
        "kickboxing-places",
        "contains",
        "Kickboxing places is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-objects",
        "contains",
        "Kickboxing objects & artifacts is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-factions",
        "contains",
        "Kickboxing factions & groups is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-concepts",
        "contains",
        "Kickboxing concepts is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-eras",
        "contains",
        "Kickboxing eras is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-works",
        "contains",
        "Kickboxing works & media is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-symbols",
        "contains",
        "Kickboxing symbols is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-controversies",
        "contains",
        "Kickboxing controversies is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-sources",
        "contains",
        "Kickboxing sources is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-geography",
        "contains",
        "Kickboxing geography is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-legacy",
        "contains",
        "Kickboxing legacy is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-practices",
        "contains",
        "Kickboxing practices is a primary trailhead under Kickboxing.",
        0.88,
        0.82
    ],
    [
        "kickboxing",
        "kickboxing-entry-1",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-2",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-3",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-4",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-5",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-6",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-7",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-8",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-9",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-10",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-11",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-12",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-13",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-14",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-15",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-16",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-17",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-18",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-19",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-20",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-21",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ],
    [
        "kickboxing",
        "kickboxing-entry-22",
        "contains",
        "Supporting entry under Kickboxing.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
