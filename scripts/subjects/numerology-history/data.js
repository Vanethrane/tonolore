/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "numerology-history",
        "name": "Numerology history",
        "type": "topic",
        "short_description": "Number mysticism, name values, and the occult arithmetic of fate.",
        "description": "Number mysticism, name values, and the occult arithmetic of fate. This Ton-o-Lore subject maps people, places, events, and ideas tied to Numerology history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "numerology-history-figures",
        "name": "Numerology history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Numerology history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Numerology history."
    },
    {
        "slug": "numerology-history-world",
        "name": "Numerology history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Numerology history.",
        "description": "Geography, institutions, and periodization that give Numerology history its encyclopedia shape."
    },
    {
        "slug": "numerology-history-places",
        "name": "Numerology history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Numerology history.",
        "description": "Places, regions, and built sites that give Numerology history its map — where events and figures concentrate."
    },
    {
        "slug": "numerology-history-events",
        "name": "Numerology history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Numerology history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Numerology history timeline."
    },
    {
        "slug": "numerology-history-objects",
        "name": "Numerology history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Numerology history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Numerology history."
    },
    {
        "slug": "numerology-history-factions",
        "name": "Numerology history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Numerology history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Numerology history."
    },
    {
        "slug": "numerology-history-concepts",
        "name": "Numerology history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Numerology history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Numerology history readable as a lore graph."
    },
    {
        "slug": "numerology-history-eras",
        "name": "Numerology history eras",
        "type": "event",
        "short_description": "Periodization for Numerology history.",
        "description": "Named eras and phases that help readers track how Numerology history changes across time."
    },
    {
        "slug": "numerology-history-works",
        "name": "Numerology history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Numerology history.",
        "description": "Primary works and adaptations through which most audiences encounter Numerology history."
    },
    {
        "slug": "numerology-history-symbols",
        "name": "Numerology history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Numerology history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Numerology history."
    },
    {
        "slug": "numerology-history-controversies",
        "name": "Numerology history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Numerology history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Numerology history argumentative."
    },
    {
        "slug": "numerology-history-sources",
        "name": "Numerology history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Numerology history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Numerology history."
    },
    {
        "slug": "numerology-history-geography",
        "name": "Numerology history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Numerology history.",
        "description": "Regions, routes, and spatial systems that situate Numerology history beyond single named places."
    },
    {
        "slug": "numerology-history-legacy",
        "name": "Numerology history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Numerology history.",
        "description": "How Numerology history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "numerology-history-practices",
        "name": "Numerology history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Numerology history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Numerology history."
    },
    {
        "slug": "numerology-history-entry-1",
        "name": "Numerology history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-2",
        "name": "Numerology history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-3",
        "name": "Numerology history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-4",
        "name": "Numerology history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-5",
        "name": "Numerology history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-6",
        "name": "Numerology history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-7",
        "name": "Numerology history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-8",
        "name": "Numerology history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-9",
        "name": "Numerology history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-10",
        "name": "Numerology history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-11",
        "name": "Numerology history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-12",
        "name": "Numerology history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-13",
        "name": "Numerology history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-14",
        "name": "Numerology history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-15",
        "name": "Numerology history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-16",
        "name": "Numerology history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-17",
        "name": "Numerology history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-18",
        "name": "Numerology history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-19",
        "name": "Numerology history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-20",
        "name": "Numerology history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-21",
        "name": "Numerology history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-22",
        "name": "Numerology history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-23",
        "name": "Numerology history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numerology-history-entry-24",
        "name": "Numerology history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numerology history.",
        "description": "A supporting encyclopedia entry in the Numerology history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "numerology-history",
        "numerology-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "numerology-history",
        "numerology-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "numerology-history",
        "numerology-history-places",
        "contains",
        "Numerology history places is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-events",
        "contains",
        "Numerology history events is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-objects",
        "contains",
        "Numerology history objects & artifacts is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-factions",
        "contains",
        "Numerology history factions & groups is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-concepts",
        "contains",
        "Numerology history concepts is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-eras",
        "contains",
        "Numerology history eras is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-works",
        "contains",
        "Numerology history works & media is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-symbols",
        "contains",
        "Numerology history symbols is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-controversies",
        "contains",
        "Numerology history controversies is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-sources",
        "contains",
        "Numerology history sources is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-geography",
        "contains",
        "Numerology history geography is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-legacy",
        "contains",
        "Numerology history legacy is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-practices",
        "contains",
        "Numerology history practices is a primary trailhead under Numerology history.",
        0.88,
        0.82
    ],
    [
        "numerology-history",
        "numerology-history-entry-1",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-2",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-3",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-4",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-5",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-6",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-7",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-8",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-9",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-10",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-11",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-12",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-13",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-14",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-15",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-16",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-17",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-18",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-19",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-20",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-21",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-22",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-23",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ],
    [
        "numerology-history",
        "numerology-history-entry-24",
        "contains",
        "Supporting entry under Numerology history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
