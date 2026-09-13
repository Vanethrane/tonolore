/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spiritualism-history",
        "name": "Spiritualism history",
        "type": "topic",
        "short_description": "Séances, Fox sisters, and the nineteenth-century movement of talking with the dead.",
        "description": "Séances, Fox sisters, and the nineteenth-century movement of talking with the dead. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spiritualism history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "spiritualism-history-figures",
        "name": "Spiritualism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spiritualism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spiritualism history."
    },
    {
        "slug": "spiritualism-history-world",
        "name": "Spiritualism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spiritualism history.",
        "description": "Geography, institutions, and periodization that give Spiritualism history its encyclopedia shape."
    },
    {
        "slug": "spiritualism-history-places",
        "name": "Spiritualism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spiritualism history.",
        "description": "Places, regions, and built sites that give Spiritualism history its map — where events and figures concentrate."
    },
    {
        "slug": "spiritualism-history-events",
        "name": "Spiritualism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spiritualism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spiritualism history timeline."
    },
    {
        "slug": "spiritualism-history-objects",
        "name": "Spiritualism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spiritualism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spiritualism history."
    },
    {
        "slug": "spiritualism-history-factions",
        "name": "Spiritualism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spiritualism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spiritualism history."
    },
    {
        "slug": "spiritualism-history-concepts",
        "name": "Spiritualism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spiritualism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spiritualism history readable as a lore graph."
    },
    {
        "slug": "spiritualism-history-eras",
        "name": "Spiritualism history eras",
        "type": "event",
        "short_description": "Periodization for Spiritualism history.",
        "description": "Named eras and phases that help readers track how Spiritualism history changes across time."
    },
    {
        "slug": "spiritualism-history-works",
        "name": "Spiritualism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spiritualism history.",
        "description": "Primary works and adaptations through which most audiences encounter Spiritualism history."
    },
    {
        "slug": "spiritualism-history-symbols",
        "name": "Spiritualism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spiritualism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spiritualism history."
    },
    {
        "slug": "spiritualism-history-controversies",
        "name": "Spiritualism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spiritualism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spiritualism history argumentative."
    },
    {
        "slug": "spiritualism-history-sources",
        "name": "Spiritualism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spiritualism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spiritualism history."
    },
    {
        "slug": "spiritualism-history-geography",
        "name": "Spiritualism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spiritualism history.",
        "description": "Regions, routes, and spatial systems that situate Spiritualism history beyond single named places."
    },
    {
        "slug": "spiritualism-history-legacy",
        "name": "Spiritualism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spiritualism history.",
        "description": "How Spiritualism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spiritualism-history-practices",
        "name": "Spiritualism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spiritualism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spiritualism history."
    },
    {
        "slug": "spiritualism-history-entry-1",
        "name": "Spiritualism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-2",
        "name": "Spiritualism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-3",
        "name": "Spiritualism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-4",
        "name": "Spiritualism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-5",
        "name": "Spiritualism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-6",
        "name": "Spiritualism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-7",
        "name": "Spiritualism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-8",
        "name": "Spiritualism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-9",
        "name": "Spiritualism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-10",
        "name": "Spiritualism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-11",
        "name": "Spiritualism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-12",
        "name": "Spiritualism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-13",
        "name": "Spiritualism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-14",
        "name": "Spiritualism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-15",
        "name": "Spiritualism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-16",
        "name": "Spiritualism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-17",
        "name": "Spiritualism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-18",
        "name": "Spiritualism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-19",
        "name": "Spiritualism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-20",
        "name": "Spiritualism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-21",
        "name": "Spiritualism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-22",
        "name": "Spiritualism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-23",
        "name": "Spiritualism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spiritualism-history-entry-24",
        "name": "Spiritualism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spiritualism history.",
        "description": "A supporting encyclopedia entry in the Spiritualism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spiritualism-history",
        "spiritualism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spiritualism-history",
        "spiritualism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spiritualism-history",
        "spiritualism-history-places",
        "contains",
        "Spiritualism history places is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-events",
        "contains",
        "Spiritualism history events is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-objects",
        "contains",
        "Spiritualism history objects & artifacts is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-factions",
        "contains",
        "Spiritualism history factions & groups is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-concepts",
        "contains",
        "Spiritualism history concepts is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-eras",
        "contains",
        "Spiritualism history eras is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-works",
        "contains",
        "Spiritualism history works & media is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-symbols",
        "contains",
        "Spiritualism history symbols is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-controversies",
        "contains",
        "Spiritualism history controversies is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-sources",
        "contains",
        "Spiritualism history sources is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-geography",
        "contains",
        "Spiritualism history geography is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-legacy",
        "contains",
        "Spiritualism history legacy is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-practices",
        "contains",
        "Spiritualism history practices is a primary trailhead under Spiritualism history.",
        0.88,
        0.82
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-1",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-2",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-3",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-4",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-5",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-6",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-7",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-8",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-9",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-10",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-11",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-12",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-13",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-14",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-15",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-16",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-17",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-18",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-19",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-20",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-21",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-22",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-23",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ],
    [
        "spiritualism-history",
        "spiritualism-history-entry-24",
        "contains",
        "Supporting entry under Spiritualism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
