/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hinduism-history",
        "name": "Hinduism history",
        "type": "topic",
        "short_description": "Vedas to bhakti, temples, and the plural traditions of the Indian subcontinent.",
        "description": "Vedas to bhakti, temples, and the plural traditions of the Indian subcontinent. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hinduism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "hinduism-history-figures",
        "name": "Hinduism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hinduism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hinduism history."
    },
    {
        "slug": "hinduism-history-world",
        "name": "Hinduism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hinduism history.",
        "description": "Geography, institutions, and periodization that give Hinduism history its encyclopedia shape."
    },
    {
        "slug": "hinduism-history-places",
        "name": "Hinduism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hinduism history.",
        "description": "Places, regions, and built sites that give Hinduism history its map — where events and figures concentrate."
    },
    {
        "slug": "hinduism-history-events",
        "name": "Hinduism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hinduism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hinduism history timeline."
    },
    {
        "slug": "hinduism-history-objects",
        "name": "Hinduism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hinduism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hinduism history."
    },
    {
        "slug": "hinduism-history-factions",
        "name": "Hinduism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hinduism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hinduism history."
    },
    {
        "slug": "hinduism-history-concepts",
        "name": "Hinduism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hinduism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hinduism history readable as a lore graph."
    },
    {
        "slug": "hinduism-history-eras",
        "name": "Hinduism history eras",
        "type": "event",
        "short_description": "Periodization for Hinduism history.",
        "description": "Named eras and phases that help readers track how Hinduism history changes across time."
    },
    {
        "slug": "hinduism-history-works",
        "name": "Hinduism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hinduism history.",
        "description": "Primary works and adaptations through which most audiences encounter Hinduism history."
    },
    {
        "slug": "hinduism-history-symbols",
        "name": "Hinduism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hinduism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hinduism history."
    },
    {
        "slug": "hinduism-history-controversies",
        "name": "Hinduism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hinduism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hinduism history argumentative."
    },
    {
        "slug": "hinduism-history-sources",
        "name": "Hinduism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hinduism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hinduism history."
    },
    {
        "slug": "hinduism-history-geography",
        "name": "Hinduism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hinduism history.",
        "description": "Regions, routes, and spatial systems that situate Hinduism history beyond single named places."
    },
    {
        "slug": "hinduism-history-legacy",
        "name": "Hinduism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hinduism history.",
        "description": "How Hinduism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hinduism-history-practices",
        "name": "Hinduism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hinduism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hinduism history."
    },
    {
        "slug": "hinduism-history-entry-1",
        "name": "Hinduism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-2",
        "name": "Hinduism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-3",
        "name": "Hinduism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-4",
        "name": "Hinduism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-5",
        "name": "Hinduism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-6",
        "name": "Hinduism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-7",
        "name": "Hinduism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-8",
        "name": "Hinduism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-9",
        "name": "Hinduism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-10",
        "name": "Hinduism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-11",
        "name": "Hinduism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-12",
        "name": "Hinduism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-13",
        "name": "Hinduism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-14",
        "name": "Hinduism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-15",
        "name": "Hinduism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-16",
        "name": "Hinduism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-17",
        "name": "Hinduism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-18",
        "name": "Hinduism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-19",
        "name": "Hinduism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-20",
        "name": "Hinduism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-21",
        "name": "Hinduism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-22",
        "name": "Hinduism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-23",
        "name": "Hinduism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hinduism-history-entry-24",
        "name": "Hinduism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hinduism history.",
        "description": "A supporting encyclopedia entry in the Hinduism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hinduism-history",
        "hinduism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hinduism-history",
        "hinduism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hinduism-history",
        "hinduism-history-places",
        "contains",
        "Hinduism history places is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-events",
        "contains",
        "Hinduism history events is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-objects",
        "contains",
        "Hinduism history objects & artifacts is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-factions",
        "contains",
        "Hinduism history factions & groups is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-concepts",
        "contains",
        "Hinduism history concepts is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-eras",
        "contains",
        "Hinduism history eras is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-works",
        "contains",
        "Hinduism history works & media is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-symbols",
        "contains",
        "Hinduism history symbols is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-controversies",
        "contains",
        "Hinduism history controversies is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-sources",
        "contains",
        "Hinduism history sources is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-geography",
        "contains",
        "Hinduism history geography is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-legacy",
        "contains",
        "Hinduism history legacy is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-practices",
        "contains",
        "Hinduism history practices is a primary trailhead under Hinduism history.",
        0.88,
        0.82
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-1",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-2",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-3",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-4",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-5",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-6",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-7",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-8",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-9",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-10",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-11",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-12",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-13",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-14",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-15",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-16",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-17",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-18",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-19",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-20",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-21",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-22",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-23",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ],
    [
        "hinduism-history",
        "hinduism-history-entry-24",
        "contains",
        "Supporting entry under Hinduism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
