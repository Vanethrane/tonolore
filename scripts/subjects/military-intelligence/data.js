/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "military-intelligence",
        "name": "Military intelligence history",
        "type": "topic",
        "short_description": "Codes, spies, and the information wars that decide battles before they start.",
        "description": "Codes, spies, and the information wars that decide battles before they start. This Ton-o-Lore subject maps people, places, events, and ideas tied to Military intelligence history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "military-intelligence-figures",
        "name": "Military intelligence history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Military intelligence history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Military intelligence history."
    },
    {
        "slug": "military-intelligence-world",
        "name": "Military intelligence history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Military intelligence history.",
        "description": "Geography, institutions, and periodization that give Military intelligence history its encyclopedia shape."
    },
    {
        "slug": "military-intelligence-places",
        "name": "Military intelligence history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Military intelligence history.",
        "description": "Places, regions, and built sites that give Military intelligence history its map — where events and figures concentrate."
    },
    {
        "slug": "military-intelligence-events",
        "name": "Military intelligence history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Military intelligence history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Military intelligence history timeline."
    },
    {
        "slug": "military-intelligence-objects",
        "name": "Military intelligence history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Military intelligence history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Military intelligence history."
    },
    {
        "slug": "military-intelligence-factions",
        "name": "Military intelligence history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Military intelligence history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Military intelligence history."
    },
    {
        "slug": "military-intelligence-concepts",
        "name": "Military intelligence history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Military intelligence history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Military intelligence history readable as a lore graph."
    },
    {
        "slug": "military-intelligence-eras",
        "name": "Military intelligence history eras",
        "type": "event",
        "short_description": "Periodization for Military intelligence history.",
        "description": "Named eras and phases that help readers track how Military intelligence history changes across time."
    },
    {
        "slug": "military-intelligence-works",
        "name": "Military intelligence history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Military intelligence history.",
        "description": "Primary works and adaptations through which most audiences encounter Military intelligence history."
    },
    {
        "slug": "military-intelligence-symbols",
        "name": "Military intelligence history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Military intelligence history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Military intelligence history."
    },
    {
        "slug": "military-intelligence-controversies",
        "name": "Military intelligence history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Military intelligence history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Military intelligence history argumentative."
    },
    {
        "slug": "military-intelligence-sources",
        "name": "Military intelligence history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Military intelligence history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Military intelligence history."
    },
    {
        "slug": "military-intelligence-geography",
        "name": "Military intelligence history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Military intelligence history.",
        "description": "Regions, routes, and spatial systems that situate Military intelligence history beyond single named places."
    },
    {
        "slug": "military-intelligence-legacy",
        "name": "Military intelligence history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Military intelligence history.",
        "description": "How Military intelligence history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "military-intelligence-practices",
        "name": "Military intelligence history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Military intelligence history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Military intelligence history."
    },
    {
        "slug": "military-intelligence-entry-1",
        "name": "Military intelligence history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-2",
        "name": "Military intelligence history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-3",
        "name": "Military intelligence history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-4",
        "name": "Military intelligence history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-5",
        "name": "Military intelligence history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-6",
        "name": "Military intelligence history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-7",
        "name": "Military intelligence history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-8",
        "name": "Military intelligence history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-9",
        "name": "Military intelligence history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-10",
        "name": "Military intelligence history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-11",
        "name": "Military intelligence history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-12",
        "name": "Military intelligence history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-13",
        "name": "Military intelligence history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-14",
        "name": "Military intelligence history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-15",
        "name": "Military intelligence history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-16",
        "name": "Military intelligence history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-17",
        "name": "Military intelligence history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-18",
        "name": "Military intelligence history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-19",
        "name": "Military intelligence history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-20",
        "name": "Military intelligence history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-21",
        "name": "Military intelligence history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-22",
        "name": "Military intelligence history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-23",
        "name": "Military intelligence history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "military-intelligence-entry-24",
        "name": "Military intelligence history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Military intelligence history.",
        "description": "A supporting encyclopedia entry in the Military intelligence history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "military-intelligence",
        "military-intelligence-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "military-intelligence",
        "military-intelligence-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "military-intelligence",
        "military-intelligence-places",
        "contains",
        "Military intelligence history places is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-events",
        "contains",
        "Military intelligence history events is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-objects",
        "contains",
        "Military intelligence history objects & artifacts is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-factions",
        "contains",
        "Military intelligence history factions & groups is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-concepts",
        "contains",
        "Military intelligence history concepts is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-eras",
        "contains",
        "Military intelligence history eras is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-works",
        "contains",
        "Military intelligence history works & media is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-symbols",
        "contains",
        "Military intelligence history symbols is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-controversies",
        "contains",
        "Military intelligence history controversies is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-sources",
        "contains",
        "Military intelligence history sources is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-geography",
        "contains",
        "Military intelligence history geography is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-legacy",
        "contains",
        "Military intelligence history legacy is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-practices",
        "contains",
        "Military intelligence history practices is a primary trailhead under Military intelligence history.",
        0.88,
        0.82
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-1",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-2",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-3",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-4",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-5",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-6",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-7",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-8",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-9",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-10",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-11",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-12",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-13",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-14",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-15",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-16",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-17",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-18",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-19",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-20",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-21",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-22",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-23",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ],
    [
        "military-intelligence",
        "military-intelligence-entry-24",
        "contains",
        "Supporting entry under Military intelligence history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
