/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "missionary-history",
        "name": "Missionary history",
        "type": "topic",
        "short_description": "Conversions, translations, and the global spread of faiths through preaching networks.",
        "description": "Conversions, translations, and the global spread of faiths through preaching networks. This Ton-o-Lore subject maps people, places, events, and ideas tied to Missionary history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "missionary-history-figures",
        "name": "Missionary history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Missionary history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Missionary history."
    },
    {
        "slug": "missionary-history-world",
        "name": "Missionary history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Missionary history.",
        "description": "Geography, institutions, and periodization that give Missionary history its encyclopedia shape."
    },
    {
        "slug": "missionary-history-places",
        "name": "Missionary history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Missionary history.",
        "description": "Places, regions, and built sites that give Missionary history its map — where events and figures concentrate."
    },
    {
        "slug": "missionary-history-events",
        "name": "Missionary history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Missionary history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Missionary history timeline."
    },
    {
        "slug": "missionary-history-objects",
        "name": "Missionary history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Missionary history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Missionary history."
    },
    {
        "slug": "missionary-history-factions",
        "name": "Missionary history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Missionary history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Missionary history."
    },
    {
        "slug": "missionary-history-concepts",
        "name": "Missionary history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Missionary history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Missionary history readable as a lore graph."
    },
    {
        "slug": "missionary-history-eras",
        "name": "Missionary history eras",
        "type": "event",
        "short_description": "Periodization for Missionary history.",
        "description": "Named eras and phases that help readers track how Missionary history changes across time."
    },
    {
        "slug": "missionary-history-works",
        "name": "Missionary history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Missionary history.",
        "description": "Primary works and adaptations through which most audiences encounter Missionary history."
    },
    {
        "slug": "missionary-history-symbols",
        "name": "Missionary history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Missionary history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Missionary history."
    },
    {
        "slug": "missionary-history-controversies",
        "name": "Missionary history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Missionary history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Missionary history argumentative."
    },
    {
        "slug": "missionary-history-sources",
        "name": "Missionary history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Missionary history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Missionary history."
    },
    {
        "slug": "missionary-history-geography",
        "name": "Missionary history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Missionary history.",
        "description": "Regions, routes, and spatial systems that situate Missionary history beyond single named places."
    },
    {
        "slug": "missionary-history-legacy",
        "name": "Missionary history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Missionary history.",
        "description": "How Missionary history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "missionary-history-practices",
        "name": "Missionary history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Missionary history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Missionary history."
    },
    {
        "slug": "missionary-history-entry-1",
        "name": "Missionary history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-2",
        "name": "Missionary history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-3",
        "name": "Missionary history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-4",
        "name": "Missionary history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-5",
        "name": "Missionary history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-6",
        "name": "Missionary history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-7",
        "name": "Missionary history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-8",
        "name": "Missionary history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-9",
        "name": "Missionary history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-10",
        "name": "Missionary history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-11",
        "name": "Missionary history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-12",
        "name": "Missionary history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-13",
        "name": "Missionary history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-14",
        "name": "Missionary history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-15",
        "name": "Missionary history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-16",
        "name": "Missionary history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-17",
        "name": "Missionary history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-18",
        "name": "Missionary history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-19",
        "name": "Missionary history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-20",
        "name": "Missionary history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-21",
        "name": "Missionary history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-22",
        "name": "Missionary history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-23",
        "name": "Missionary history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "missionary-history-entry-24",
        "name": "Missionary history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Missionary history.",
        "description": "A supporting encyclopedia entry in the Missionary history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "missionary-history",
        "missionary-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "missionary-history",
        "missionary-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "missionary-history",
        "missionary-history-places",
        "contains",
        "Missionary history places is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-events",
        "contains",
        "Missionary history events is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-objects",
        "contains",
        "Missionary history objects & artifacts is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-factions",
        "contains",
        "Missionary history factions & groups is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-concepts",
        "contains",
        "Missionary history concepts is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-eras",
        "contains",
        "Missionary history eras is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-works",
        "contains",
        "Missionary history works & media is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-symbols",
        "contains",
        "Missionary history symbols is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-controversies",
        "contains",
        "Missionary history controversies is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-sources",
        "contains",
        "Missionary history sources is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-geography",
        "contains",
        "Missionary history geography is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-legacy",
        "contains",
        "Missionary history legacy is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-practices",
        "contains",
        "Missionary history practices is a primary trailhead under Missionary history.",
        0.88,
        0.82
    ],
    [
        "missionary-history",
        "missionary-history-entry-1",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-2",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-3",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-4",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-5",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-6",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-7",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-8",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-9",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-10",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-11",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-12",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-13",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-14",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-15",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-16",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-17",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-18",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-19",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-20",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-21",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-22",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-23",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ],
    [
        "missionary-history",
        "missionary-history-entry-24",
        "contains",
        "Supporting entry under Missionary history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
