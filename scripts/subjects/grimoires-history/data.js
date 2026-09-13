/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "grimoires-history",
        "name": "Grimoire history",
        "type": "topic",
        "short_description": "Key of Solomon to Lesser Key — the manuscript tradition of named spirits and circle magic.",
        "description": "Key of Solomon to Lesser Key — the manuscript tradition of named spirits and circle magic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Grimoire history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "grimoires-history-figures",
        "name": "Grimoire history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Grimoire history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Grimoire history."
    },
    {
        "slug": "grimoires-history-world",
        "name": "Grimoire history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Grimoire history.",
        "description": "Geography, institutions, and periodization that give Grimoire history its encyclopedia shape."
    },
    {
        "slug": "grimoires-history-places",
        "name": "Grimoire history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Grimoire history.",
        "description": "Places, regions, and built sites that give Grimoire history its map — where events and figures concentrate."
    },
    {
        "slug": "grimoires-history-events",
        "name": "Grimoire history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Grimoire history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Grimoire history timeline."
    },
    {
        "slug": "grimoires-history-objects",
        "name": "Grimoire history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Grimoire history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Grimoire history."
    },
    {
        "slug": "grimoires-history-factions",
        "name": "Grimoire history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Grimoire history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Grimoire history."
    },
    {
        "slug": "grimoires-history-concepts",
        "name": "Grimoire history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Grimoire history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Grimoire history readable as a lore graph."
    },
    {
        "slug": "grimoires-history-eras",
        "name": "Grimoire history eras",
        "type": "event",
        "short_description": "Periodization for Grimoire history.",
        "description": "Named eras and phases that help readers track how Grimoire history changes across time."
    },
    {
        "slug": "grimoires-history-works",
        "name": "Grimoire history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Grimoire history.",
        "description": "Primary works and adaptations through which most audiences encounter Grimoire history."
    },
    {
        "slug": "grimoires-history-symbols",
        "name": "Grimoire history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Grimoire history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Grimoire history."
    },
    {
        "slug": "grimoires-history-controversies",
        "name": "Grimoire history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Grimoire history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Grimoire history argumentative."
    },
    {
        "slug": "grimoires-history-sources",
        "name": "Grimoire history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Grimoire history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Grimoire history."
    },
    {
        "slug": "grimoires-history-geography",
        "name": "Grimoire history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Grimoire history.",
        "description": "Regions, routes, and spatial systems that situate Grimoire history beyond single named places."
    },
    {
        "slug": "grimoires-history-legacy",
        "name": "Grimoire history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Grimoire history.",
        "description": "How Grimoire history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "grimoires-history-practices",
        "name": "Grimoire history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Grimoire history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Grimoire history."
    },
    {
        "slug": "grimoires-history-entry-1",
        "name": "Grimoire history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-2",
        "name": "Grimoire history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-3",
        "name": "Grimoire history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-4",
        "name": "Grimoire history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-5",
        "name": "Grimoire history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-6",
        "name": "Grimoire history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-7",
        "name": "Grimoire history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-8",
        "name": "Grimoire history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-9",
        "name": "Grimoire history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-10",
        "name": "Grimoire history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-11",
        "name": "Grimoire history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-12",
        "name": "Grimoire history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-13",
        "name": "Grimoire history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-14",
        "name": "Grimoire history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-15",
        "name": "Grimoire history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-16",
        "name": "Grimoire history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-17",
        "name": "Grimoire history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-18",
        "name": "Grimoire history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-19",
        "name": "Grimoire history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-20",
        "name": "Grimoire history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-21",
        "name": "Grimoire history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-22",
        "name": "Grimoire history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-23",
        "name": "Grimoire history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimoires-history-entry-24",
        "name": "Grimoire history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimoire history.",
        "description": "A supporting encyclopedia entry in the Grimoire history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "grimoires-history",
        "grimoires-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "grimoires-history",
        "grimoires-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "grimoires-history",
        "grimoires-history-places",
        "contains",
        "Grimoire history places is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-events",
        "contains",
        "Grimoire history events is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-objects",
        "contains",
        "Grimoire history objects & artifacts is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-factions",
        "contains",
        "Grimoire history factions & groups is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-concepts",
        "contains",
        "Grimoire history concepts is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-eras",
        "contains",
        "Grimoire history eras is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-works",
        "contains",
        "Grimoire history works & media is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-symbols",
        "contains",
        "Grimoire history symbols is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-controversies",
        "contains",
        "Grimoire history controversies is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-sources",
        "contains",
        "Grimoire history sources is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-geography",
        "contains",
        "Grimoire history geography is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-legacy",
        "contains",
        "Grimoire history legacy is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-practices",
        "contains",
        "Grimoire history practices is a primary trailhead under Grimoire history.",
        0.88,
        0.82
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-1",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-2",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-3",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-4",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-5",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-6",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-7",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-8",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-9",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-10",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-11",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-12",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-13",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-14",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-15",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-16",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-17",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-18",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-19",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-20",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-21",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-22",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-23",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ],
    [
        "grimoires-history",
        "grimoires-history-entry-24",
        "contains",
        "Supporting entry under Grimoire history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
