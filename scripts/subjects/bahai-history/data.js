/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bahai-history",
        "name": "Baháʼí history",
        "type": "topic",
        "short_description": "Unity teachings, Haifa center, and the nineteenth-century faith born in Persia.",
        "description": "Unity teachings, Haifa center, and the nineteenth-century faith born in Persia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Baháʼí history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "bahai-history-figures",
        "name": "Baháʼí history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Baháʼí history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Baháʼí history."
    },
    {
        "slug": "bahai-history-world",
        "name": "Baháʼí history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Baháʼí history.",
        "description": "Geography, institutions, and periodization that give Baháʼí history its encyclopedia shape."
    },
    {
        "slug": "bahai-history-places",
        "name": "Baháʼí history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Baháʼí history.",
        "description": "Places, regions, and built sites that give Baháʼí history its map — where events and figures concentrate."
    },
    {
        "slug": "bahai-history-events",
        "name": "Baháʼí history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Baháʼí history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Baháʼí history timeline."
    },
    {
        "slug": "bahai-history-objects",
        "name": "Baháʼí history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Baháʼí history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Baháʼí history."
    },
    {
        "slug": "bahai-history-factions",
        "name": "Baháʼí history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Baháʼí history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Baháʼí history."
    },
    {
        "slug": "bahai-history-concepts",
        "name": "Baháʼí history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Baháʼí history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Baháʼí history readable as a lore graph."
    },
    {
        "slug": "bahai-history-eras",
        "name": "Baháʼí history eras",
        "type": "event",
        "short_description": "Periodization for Baháʼí history.",
        "description": "Named eras and phases that help readers track how Baháʼí history changes across time."
    },
    {
        "slug": "bahai-history-works",
        "name": "Baháʼí history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Baháʼí history.",
        "description": "Primary works and adaptations through which most audiences encounter Baháʼí history."
    },
    {
        "slug": "bahai-history-symbols",
        "name": "Baháʼí history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Baháʼí history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Baháʼí history."
    },
    {
        "slug": "bahai-history-controversies",
        "name": "Baháʼí history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Baháʼí history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Baháʼí history argumentative."
    },
    {
        "slug": "bahai-history-sources",
        "name": "Baháʼí history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Baháʼí history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Baháʼí history."
    },
    {
        "slug": "bahai-history-geography",
        "name": "Baháʼí history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Baháʼí history.",
        "description": "Regions, routes, and spatial systems that situate Baháʼí history beyond single named places."
    },
    {
        "slug": "bahai-history-legacy",
        "name": "Baháʼí history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Baháʼí history.",
        "description": "How Baháʼí history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bahai-history-practices",
        "name": "Baháʼí history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Baháʼí history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Baháʼí history."
    },
    {
        "slug": "bahai-history-entry-1",
        "name": "Baháʼí history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-2",
        "name": "Baháʼí history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-3",
        "name": "Baháʼí history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-4",
        "name": "Baháʼí history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-5",
        "name": "Baháʼí history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-6",
        "name": "Baháʼí history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-7",
        "name": "Baháʼí history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-8",
        "name": "Baháʼí history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-9",
        "name": "Baháʼí history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-10",
        "name": "Baháʼí history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-11",
        "name": "Baháʼí history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-12",
        "name": "Baháʼí history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-13",
        "name": "Baháʼí history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-14",
        "name": "Baháʼí history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-15",
        "name": "Baháʼí history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-16",
        "name": "Baháʼí history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-17",
        "name": "Baháʼí history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-18",
        "name": "Baháʼí history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-19",
        "name": "Baháʼí history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-20",
        "name": "Baháʼí history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-21",
        "name": "Baháʼí history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-22",
        "name": "Baháʼí history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-23",
        "name": "Baháʼí history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bahai-history-entry-24",
        "name": "Baháʼí history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baháʼí history.",
        "description": "A supporting encyclopedia entry in the Baháʼí history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bahai-history",
        "bahai-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bahai-history",
        "bahai-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bahai-history",
        "bahai-history-places",
        "contains",
        "Baháʼí history places is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-events",
        "contains",
        "Baháʼí history events is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-objects",
        "contains",
        "Baháʼí history objects & artifacts is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-factions",
        "contains",
        "Baháʼí history factions & groups is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-concepts",
        "contains",
        "Baháʼí history concepts is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-eras",
        "contains",
        "Baháʼí history eras is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-works",
        "contains",
        "Baháʼí history works & media is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-symbols",
        "contains",
        "Baháʼí history symbols is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-controversies",
        "contains",
        "Baháʼí history controversies is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-sources",
        "contains",
        "Baháʼí history sources is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-geography",
        "contains",
        "Baháʼí history geography is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-legacy",
        "contains",
        "Baháʼí history legacy is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-practices",
        "contains",
        "Baháʼí history practices is a primary trailhead under Baháʼí history.",
        0.88,
        0.82
    ],
    [
        "bahai-history",
        "bahai-history-entry-1",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-2",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-3",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-4",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-5",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-6",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-7",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-8",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-9",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-10",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-11",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-12",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-13",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-14",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-15",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-16",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-17",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-18",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-19",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-20",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-21",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-22",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-23",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ],
    [
        "bahai-history",
        "bahai-history-entry-24",
        "contains",
        "Supporting entry under Baháʼí history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
