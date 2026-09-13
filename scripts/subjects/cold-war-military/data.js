/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cold-war-military",
        "name": "Cold War military history",
        "type": "topic",
        "short_description": "Proxy wars, alliances, and the armed standoff that never quite went hot.",
        "description": "Proxy wars, alliances, and the armed standoff that never quite went hot. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cold War military history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "cold-war-military-figures",
        "name": "Cold War military history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cold War military history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cold War military history."
    },
    {
        "slug": "cold-war-military-world",
        "name": "Cold War military history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cold War military history.",
        "description": "Geography, institutions, and periodization that give Cold War military history its encyclopedia shape."
    },
    {
        "slug": "cold-war-military-places",
        "name": "Cold War military history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cold War military history.",
        "description": "Places, regions, and built sites that give Cold War military history its map — where events and figures concentrate."
    },
    {
        "slug": "cold-war-military-events",
        "name": "Cold War military history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cold War military history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cold War military history timeline."
    },
    {
        "slug": "cold-war-military-objects",
        "name": "Cold War military history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cold War military history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cold War military history."
    },
    {
        "slug": "cold-war-military-factions",
        "name": "Cold War military history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cold War military history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cold War military history."
    },
    {
        "slug": "cold-war-military-concepts",
        "name": "Cold War military history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cold War military history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cold War military history readable as a lore graph."
    },
    {
        "slug": "cold-war-military-eras",
        "name": "Cold War military history eras",
        "type": "event",
        "short_description": "Periodization for Cold War military history.",
        "description": "Named eras and phases that help readers track how Cold War military history changes across time."
    },
    {
        "slug": "cold-war-military-works",
        "name": "Cold War military history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cold War military history.",
        "description": "Primary works and adaptations through which most audiences encounter Cold War military history."
    },
    {
        "slug": "cold-war-military-symbols",
        "name": "Cold War military history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cold War military history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cold War military history."
    },
    {
        "slug": "cold-war-military-controversies",
        "name": "Cold War military history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cold War military history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cold War military history argumentative."
    },
    {
        "slug": "cold-war-military-sources",
        "name": "Cold War military history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cold War military history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cold War military history."
    },
    {
        "slug": "cold-war-military-geography",
        "name": "Cold War military history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cold War military history.",
        "description": "Regions, routes, and spatial systems that situate Cold War military history beyond single named places."
    },
    {
        "slug": "cold-war-military-legacy",
        "name": "Cold War military history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cold War military history.",
        "description": "How Cold War military history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cold-war-military-practices",
        "name": "Cold War military history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cold War military history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cold War military history."
    },
    {
        "slug": "cold-war-military-entry-1",
        "name": "Cold War military history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-2",
        "name": "Cold War military history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-3",
        "name": "Cold War military history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-4",
        "name": "Cold War military history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-5",
        "name": "Cold War military history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-6",
        "name": "Cold War military history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-7",
        "name": "Cold War military history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-8",
        "name": "Cold War military history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-9",
        "name": "Cold War military history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-10",
        "name": "Cold War military history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-11",
        "name": "Cold War military history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-12",
        "name": "Cold War military history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-13",
        "name": "Cold War military history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-14",
        "name": "Cold War military history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-15",
        "name": "Cold War military history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-16",
        "name": "Cold War military history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-17",
        "name": "Cold War military history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-18",
        "name": "Cold War military history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-19",
        "name": "Cold War military history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-20",
        "name": "Cold War military history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-21",
        "name": "Cold War military history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-22",
        "name": "Cold War military history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-23",
        "name": "Cold War military history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cold-war-military-entry-24",
        "name": "Cold War military history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cold War military history.",
        "description": "A supporting encyclopedia entry in the Cold War military history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cold-war-military",
        "cold-war-military-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cold-war-military",
        "cold-war-military-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cold-war-military",
        "cold-war-military-places",
        "contains",
        "Cold War military history places is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-events",
        "contains",
        "Cold War military history events is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-objects",
        "contains",
        "Cold War military history objects & artifacts is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-factions",
        "contains",
        "Cold War military history factions & groups is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-concepts",
        "contains",
        "Cold War military history concepts is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-eras",
        "contains",
        "Cold War military history eras is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-works",
        "contains",
        "Cold War military history works & media is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-symbols",
        "contains",
        "Cold War military history symbols is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-controversies",
        "contains",
        "Cold War military history controversies is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-sources",
        "contains",
        "Cold War military history sources is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-geography",
        "contains",
        "Cold War military history geography is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-legacy",
        "contains",
        "Cold War military history legacy is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-practices",
        "contains",
        "Cold War military history practices is a primary trailhead under Cold War military history.",
        0.88,
        0.82
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-1",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-2",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-3",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-4",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-5",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-6",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-7",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-8",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-9",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-10",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-11",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-12",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-13",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-14",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-15",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-16",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-17",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-18",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-19",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-20",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-21",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-22",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-23",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ],
    [
        "cold-war-military",
        "cold-war-military-entry-24",
        "contains",
        "Supporting entry under Cold War military history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
