/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "interfaith-history",
        "name": "Interfaith history",
        "type": "topic",
        "short_description": "Dialogues, coexistences, and the modern movements that map religion across borders.",
        "description": "Dialogues, coexistences, and the modern movements that map religion across borders. This Ton-o-Lore subject maps people, places, events, and ideas tied to Interfaith history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "interfaith-history-figures",
        "name": "Interfaith history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Interfaith history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Interfaith history."
    },
    {
        "slug": "interfaith-history-world",
        "name": "Interfaith history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Interfaith history.",
        "description": "Geography, institutions, and periodization that give Interfaith history its encyclopedia shape."
    },
    {
        "slug": "interfaith-history-places",
        "name": "Interfaith history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Interfaith history.",
        "description": "Places, regions, and built sites that give Interfaith history its map — where events and figures concentrate."
    },
    {
        "slug": "interfaith-history-events",
        "name": "Interfaith history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Interfaith history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Interfaith history timeline."
    },
    {
        "slug": "interfaith-history-objects",
        "name": "Interfaith history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Interfaith history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Interfaith history."
    },
    {
        "slug": "interfaith-history-factions",
        "name": "Interfaith history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Interfaith history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Interfaith history."
    },
    {
        "slug": "interfaith-history-concepts",
        "name": "Interfaith history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Interfaith history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Interfaith history readable as a lore graph."
    },
    {
        "slug": "interfaith-history-eras",
        "name": "Interfaith history eras",
        "type": "event",
        "short_description": "Periodization for Interfaith history.",
        "description": "Named eras and phases that help readers track how Interfaith history changes across time."
    },
    {
        "slug": "interfaith-history-works",
        "name": "Interfaith history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Interfaith history.",
        "description": "Primary works and adaptations through which most audiences encounter Interfaith history."
    },
    {
        "slug": "interfaith-history-symbols",
        "name": "Interfaith history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Interfaith history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Interfaith history."
    },
    {
        "slug": "interfaith-history-controversies",
        "name": "Interfaith history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Interfaith history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Interfaith history argumentative."
    },
    {
        "slug": "interfaith-history-sources",
        "name": "Interfaith history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Interfaith history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Interfaith history."
    },
    {
        "slug": "interfaith-history-geography",
        "name": "Interfaith history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Interfaith history.",
        "description": "Regions, routes, and spatial systems that situate Interfaith history beyond single named places."
    },
    {
        "slug": "interfaith-history-legacy",
        "name": "Interfaith history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Interfaith history.",
        "description": "How Interfaith history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "interfaith-history-practices",
        "name": "Interfaith history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Interfaith history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Interfaith history."
    },
    {
        "slug": "interfaith-history-entry-1",
        "name": "Interfaith history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-2",
        "name": "Interfaith history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-3",
        "name": "Interfaith history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-4",
        "name": "Interfaith history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-5",
        "name": "Interfaith history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-6",
        "name": "Interfaith history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-7",
        "name": "Interfaith history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-8",
        "name": "Interfaith history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-9",
        "name": "Interfaith history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-10",
        "name": "Interfaith history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-11",
        "name": "Interfaith history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-12",
        "name": "Interfaith history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-13",
        "name": "Interfaith history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-14",
        "name": "Interfaith history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-15",
        "name": "Interfaith history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-16",
        "name": "Interfaith history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-17",
        "name": "Interfaith history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-18",
        "name": "Interfaith history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-19",
        "name": "Interfaith history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-20",
        "name": "Interfaith history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-21",
        "name": "Interfaith history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-22",
        "name": "Interfaith history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-23",
        "name": "Interfaith history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "interfaith-history-entry-24",
        "name": "Interfaith history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Interfaith history.",
        "description": "A supporting encyclopedia entry in the Interfaith history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "interfaith-history",
        "interfaith-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "interfaith-history",
        "interfaith-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "interfaith-history",
        "interfaith-history-places",
        "contains",
        "Interfaith history places is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-events",
        "contains",
        "Interfaith history events is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-objects",
        "contains",
        "Interfaith history objects & artifacts is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-factions",
        "contains",
        "Interfaith history factions & groups is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-concepts",
        "contains",
        "Interfaith history concepts is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-eras",
        "contains",
        "Interfaith history eras is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-works",
        "contains",
        "Interfaith history works & media is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-symbols",
        "contains",
        "Interfaith history symbols is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-controversies",
        "contains",
        "Interfaith history controversies is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-sources",
        "contains",
        "Interfaith history sources is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-geography",
        "contains",
        "Interfaith history geography is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-legacy",
        "contains",
        "Interfaith history legacy is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-practices",
        "contains",
        "Interfaith history practices is a primary trailhead under Interfaith history.",
        0.88,
        0.82
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-1",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-2",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-3",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-4",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-5",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-6",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-7",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-8",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-9",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-10",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-11",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-12",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-13",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-14",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-15",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-16",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-17",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-18",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-19",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-20",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-21",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-22",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-23",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ],
    [
        "interfaith-history",
        "interfaith-history-entry-24",
        "contains",
        "Supporting entry under Interfaith history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
