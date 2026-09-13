/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jainism-history",
        "name": "Jainism history",
        "type": "topic",
        "short_description": "Ahimsa, tirthankaras, and the ancient Indian path of nonviolence and ascetic rigor.",
        "description": "Ahimsa, tirthankaras, and the ancient Indian path of nonviolence and ascetic rigor. This Ton-o-Lore subject maps people, places, events, and ideas tied to Jainism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "jainism-history-figures",
        "name": "Jainism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Jainism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Jainism history."
    },
    {
        "slug": "jainism-history-world",
        "name": "Jainism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Jainism history.",
        "description": "Geography, institutions, and periodization that give Jainism history its encyclopedia shape."
    },
    {
        "slug": "jainism-history-places",
        "name": "Jainism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Jainism history.",
        "description": "Places, regions, and built sites that give Jainism history its map — where events and figures concentrate."
    },
    {
        "slug": "jainism-history-events",
        "name": "Jainism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Jainism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Jainism history timeline."
    },
    {
        "slug": "jainism-history-objects",
        "name": "Jainism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Jainism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Jainism history."
    },
    {
        "slug": "jainism-history-factions",
        "name": "Jainism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Jainism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Jainism history."
    },
    {
        "slug": "jainism-history-concepts",
        "name": "Jainism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Jainism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Jainism history readable as a lore graph."
    },
    {
        "slug": "jainism-history-eras",
        "name": "Jainism history eras",
        "type": "event",
        "short_description": "Periodization for Jainism history.",
        "description": "Named eras and phases that help readers track how Jainism history changes across time."
    },
    {
        "slug": "jainism-history-works",
        "name": "Jainism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Jainism history.",
        "description": "Primary works and adaptations through which most audiences encounter Jainism history."
    },
    {
        "slug": "jainism-history-symbols",
        "name": "Jainism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Jainism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Jainism history."
    },
    {
        "slug": "jainism-history-controversies",
        "name": "Jainism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Jainism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Jainism history argumentative."
    },
    {
        "slug": "jainism-history-sources",
        "name": "Jainism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Jainism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Jainism history."
    },
    {
        "slug": "jainism-history-geography",
        "name": "Jainism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Jainism history.",
        "description": "Regions, routes, and spatial systems that situate Jainism history beyond single named places."
    },
    {
        "slug": "jainism-history-legacy",
        "name": "Jainism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Jainism history.",
        "description": "How Jainism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "jainism-history-practices",
        "name": "Jainism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Jainism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Jainism history."
    },
    {
        "slug": "jainism-history-entry-1",
        "name": "Jainism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-2",
        "name": "Jainism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-3",
        "name": "Jainism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-4",
        "name": "Jainism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-5",
        "name": "Jainism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-6",
        "name": "Jainism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-7",
        "name": "Jainism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-8",
        "name": "Jainism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-9",
        "name": "Jainism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-10",
        "name": "Jainism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-11",
        "name": "Jainism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-12",
        "name": "Jainism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-13",
        "name": "Jainism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-14",
        "name": "Jainism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-15",
        "name": "Jainism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-16",
        "name": "Jainism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-17",
        "name": "Jainism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-18",
        "name": "Jainism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-19",
        "name": "Jainism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-20",
        "name": "Jainism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-21",
        "name": "Jainism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-22",
        "name": "Jainism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-23",
        "name": "Jainism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jainism-history-entry-24",
        "name": "Jainism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jainism history.",
        "description": "A supporting encyclopedia entry in the Jainism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "jainism-history",
        "jainism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "jainism-history",
        "jainism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "jainism-history",
        "jainism-history-places",
        "contains",
        "Jainism history places is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-events",
        "contains",
        "Jainism history events is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-objects",
        "contains",
        "Jainism history objects & artifacts is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-factions",
        "contains",
        "Jainism history factions & groups is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-concepts",
        "contains",
        "Jainism history concepts is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-eras",
        "contains",
        "Jainism history eras is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-works",
        "contains",
        "Jainism history works & media is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-symbols",
        "contains",
        "Jainism history symbols is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-controversies",
        "contains",
        "Jainism history controversies is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-sources",
        "contains",
        "Jainism history sources is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-geography",
        "contains",
        "Jainism history geography is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-legacy",
        "contains",
        "Jainism history legacy is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-practices",
        "contains",
        "Jainism history practices is a primary trailhead under Jainism history.",
        0.88,
        0.82
    ],
    [
        "jainism-history",
        "jainism-history-entry-1",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-2",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-3",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-4",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-5",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-6",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-7",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-8",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-9",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-10",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-11",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-12",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-13",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-14",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-15",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-16",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-17",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-18",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-19",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-20",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-21",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-22",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-23",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ],
    [
        "jainism-history",
        "jainism-history-entry-24",
        "contains",
        "Supporting entry under Jainism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
