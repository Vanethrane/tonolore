/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sufism-history",
        "name": "Sufism history",
        "type": "topic",
        "short_description": "Orders, poetry, and the mystical paths within Islamic civilization.",
        "description": "Orders, poetry, and the mystical paths within Islamic civilization. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sufism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "sufism-history-figures",
        "name": "Sufism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sufism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sufism history."
    },
    {
        "slug": "sufism-history-world",
        "name": "Sufism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sufism history.",
        "description": "Geography, institutions, and periodization that give Sufism history its encyclopedia shape."
    },
    {
        "slug": "sufism-history-places",
        "name": "Sufism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sufism history.",
        "description": "Places, regions, and built sites that give Sufism history its map — where events and figures concentrate."
    },
    {
        "slug": "sufism-history-events",
        "name": "Sufism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sufism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sufism history timeline."
    },
    {
        "slug": "sufism-history-objects",
        "name": "Sufism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sufism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sufism history."
    },
    {
        "slug": "sufism-history-factions",
        "name": "Sufism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sufism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sufism history."
    },
    {
        "slug": "sufism-history-concepts",
        "name": "Sufism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sufism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sufism history readable as a lore graph."
    },
    {
        "slug": "sufism-history-eras",
        "name": "Sufism history eras",
        "type": "event",
        "short_description": "Periodization for Sufism history.",
        "description": "Named eras and phases that help readers track how Sufism history changes across time."
    },
    {
        "slug": "sufism-history-works",
        "name": "Sufism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sufism history.",
        "description": "Primary works and adaptations through which most audiences encounter Sufism history."
    },
    {
        "slug": "sufism-history-symbols",
        "name": "Sufism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sufism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sufism history."
    },
    {
        "slug": "sufism-history-controversies",
        "name": "Sufism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sufism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sufism history argumentative."
    },
    {
        "slug": "sufism-history-sources",
        "name": "Sufism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sufism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sufism history."
    },
    {
        "slug": "sufism-history-geography",
        "name": "Sufism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sufism history.",
        "description": "Regions, routes, and spatial systems that situate Sufism history beyond single named places."
    },
    {
        "slug": "sufism-history-legacy",
        "name": "Sufism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sufism history.",
        "description": "How Sufism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sufism-history-practices",
        "name": "Sufism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sufism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sufism history."
    },
    {
        "slug": "sufism-history-entry-1",
        "name": "Sufism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-2",
        "name": "Sufism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-3",
        "name": "Sufism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-4",
        "name": "Sufism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-5",
        "name": "Sufism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-6",
        "name": "Sufism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-7",
        "name": "Sufism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-8",
        "name": "Sufism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-9",
        "name": "Sufism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-10",
        "name": "Sufism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-11",
        "name": "Sufism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-12",
        "name": "Sufism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-13",
        "name": "Sufism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-14",
        "name": "Sufism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-15",
        "name": "Sufism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-16",
        "name": "Sufism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-17",
        "name": "Sufism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-18",
        "name": "Sufism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-19",
        "name": "Sufism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-20",
        "name": "Sufism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-21",
        "name": "Sufism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-22",
        "name": "Sufism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-23",
        "name": "Sufism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sufism-history-entry-24",
        "name": "Sufism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sufism history.",
        "description": "A supporting encyclopedia entry in the Sufism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sufism-history",
        "sufism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sufism-history",
        "sufism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sufism-history",
        "sufism-history-places",
        "contains",
        "Sufism history places is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-events",
        "contains",
        "Sufism history events is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-objects",
        "contains",
        "Sufism history objects & artifacts is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-factions",
        "contains",
        "Sufism history factions & groups is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-concepts",
        "contains",
        "Sufism history concepts is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-eras",
        "contains",
        "Sufism history eras is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-works",
        "contains",
        "Sufism history works & media is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-symbols",
        "contains",
        "Sufism history symbols is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-controversies",
        "contains",
        "Sufism history controversies is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-sources",
        "contains",
        "Sufism history sources is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-geography",
        "contains",
        "Sufism history geography is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-legacy",
        "contains",
        "Sufism history legacy is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-practices",
        "contains",
        "Sufism history practices is a primary trailhead under Sufism history.",
        0.88,
        0.82
    ],
    [
        "sufism-history",
        "sufism-history-entry-1",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-2",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-3",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-4",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-5",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-6",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-7",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-8",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-9",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-10",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-11",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-12",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-13",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-14",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-15",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-16",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-17",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-18",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-19",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-20",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-21",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-22",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-23",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ],
    [
        "sufism-history",
        "sufism-history-entry-24",
        "contains",
        "Supporting entry under Sufism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
