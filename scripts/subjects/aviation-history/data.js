/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aviation-history",
        "name": "Aviation history",
        "type": "topic",
        "short_description": "Aircraft, pilots, manufacturers, crashes, wars, records, airports, and the inventions that conquered the sky.",
        "description": "Aircraft, pilots, manufacturers, crashes, wars, records, airports, and the inventions that conquered the sky. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aviation history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "aviation-history-figures",
        "name": "Aviation history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aviation history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aviation history."
    },
    {
        "slug": "aviation-history-world",
        "name": "Aviation history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aviation history.",
        "description": "Geography, institutions, and periodization that give Aviation history its encyclopedia shape."
    },
    {
        "slug": "aviation-history-places",
        "name": "Aviation history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aviation history.",
        "description": "Places, regions, and built sites that give Aviation history its map — where events and figures concentrate."
    },
    {
        "slug": "aviation-history-events",
        "name": "Aviation history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aviation history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aviation history timeline."
    },
    {
        "slug": "aviation-history-objects",
        "name": "Aviation history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aviation history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aviation history."
    },
    {
        "slug": "aviation-history-factions",
        "name": "Aviation history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aviation history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aviation history."
    },
    {
        "slug": "aviation-history-concepts",
        "name": "Aviation history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aviation history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aviation history readable as a lore graph."
    },
    {
        "slug": "aviation-history-eras",
        "name": "Aviation history eras",
        "type": "event",
        "short_description": "Periodization for Aviation history.",
        "description": "Named eras and phases that help readers track how Aviation history changes across time."
    },
    {
        "slug": "aviation-history-works",
        "name": "Aviation history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aviation history.",
        "description": "Primary works and adaptations through which most audiences encounter Aviation history."
    },
    {
        "slug": "aviation-history-symbols",
        "name": "Aviation history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aviation history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aviation history."
    },
    {
        "slug": "aviation-history-controversies",
        "name": "Aviation history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aviation history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aviation history argumentative."
    },
    {
        "slug": "aviation-history-sources",
        "name": "Aviation history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aviation history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aviation history."
    },
    {
        "slug": "aviation-history-geography",
        "name": "Aviation history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aviation history.",
        "description": "Regions, routes, and spatial systems that situate Aviation history beyond single named places."
    },
    {
        "slug": "aviation-history-legacy",
        "name": "Aviation history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aviation history.",
        "description": "How Aviation history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aviation-history-practices",
        "name": "Aviation history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aviation history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aviation history."
    },
    {
        "slug": "aviation-history-entry-1",
        "name": "Aviation history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-2",
        "name": "Aviation history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-3",
        "name": "Aviation history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-4",
        "name": "Aviation history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-5",
        "name": "Aviation history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-6",
        "name": "Aviation history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-7",
        "name": "Aviation history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-8",
        "name": "Aviation history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-9",
        "name": "Aviation history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-10",
        "name": "Aviation history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-11",
        "name": "Aviation history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-12",
        "name": "Aviation history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-13",
        "name": "Aviation history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-14",
        "name": "Aviation history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-15",
        "name": "Aviation history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-16",
        "name": "Aviation history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-17",
        "name": "Aviation history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-18",
        "name": "Aviation history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-19",
        "name": "Aviation history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-20",
        "name": "Aviation history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-21",
        "name": "Aviation history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-22",
        "name": "Aviation history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-23",
        "name": "Aviation history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aviation-history-entry-24",
        "name": "Aviation history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aviation history.",
        "description": "A supporting encyclopedia entry in the Aviation history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aviation-history",
        "aviation-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aviation-history",
        "aviation-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aviation-history",
        "aviation-history-places",
        "contains",
        "Aviation history places is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-events",
        "contains",
        "Aviation history events is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-objects",
        "contains",
        "Aviation history objects & artifacts is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-factions",
        "contains",
        "Aviation history factions & groups is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-concepts",
        "contains",
        "Aviation history concepts is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-eras",
        "contains",
        "Aviation history eras is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-works",
        "contains",
        "Aviation history works & media is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-symbols",
        "contains",
        "Aviation history symbols is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-controversies",
        "contains",
        "Aviation history controversies is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-sources",
        "contains",
        "Aviation history sources is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-geography",
        "contains",
        "Aviation history geography is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-legacy",
        "contains",
        "Aviation history legacy is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-practices",
        "contains",
        "Aviation history practices is a primary trailhead under Aviation history.",
        0.88,
        0.82
    ],
    [
        "aviation-history",
        "aviation-history-entry-1",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-2",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-3",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-4",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-5",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-6",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-7",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-8",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-9",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-10",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-11",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-12",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-13",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-14",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-15",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-16",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-17",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-18",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-19",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-20",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-21",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-22",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-23",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ],
    [
        "aviation-history",
        "aviation-history-entry-24",
        "contains",
        "Supporting entry under Aviation history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
