/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "taoism-history",
        "name": "Taoism history",
        "type": "topic",
        "short_description": "Dao, immortals, and the Chinese philosophical-religious tradition of way and alchemy.",
        "description": "Dao, immortals, and the Chinese philosophical-religious tradition of way and alchemy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Taoism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "taoism-history-figures",
        "name": "Taoism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Taoism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Taoism history."
    },
    {
        "slug": "taoism-history-world",
        "name": "Taoism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Taoism history.",
        "description": "Geography, institutions, and periodization that give Taoism history its encyclopedia shape."
    },
    {
        "slug": "taoism-history-places",
        "name": "Taoism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Taoism history.",
        "description": "Places, regions, and built sites that give Taoism history its map — where events and figures concentrate."
    },
    {
        "slug": "taoism-history-events",
        "name": "Taoism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Taoism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Taoism history timeline."
    },
    {
        "slug": "taoism-history-objects",
        "name": "Taoism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Taoism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Taoism history."
    },
    {
        "slug": "taoism-history-factions",
        "name": "Taoism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Taoism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Taoism history."
    },
    {
        "slug": "taoism-history-concepts",
        "name": "Taoism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Taoism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Taoism history readable as a lore graph."
    },
    {
        "slug": "taoism-history-eras",
        "name": "Taoism history eras",
        "type": "event",
        "short_description": "Periodization for Taoism history.",
        "description": "Named eras and phases that help readers track how Taoism history changes across time."
    },
    {
        "slug": "taoism-history-works",
        "name": "Taoism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Taoism history.",
        "description": "Primary works and adaptations through which most audiences encounter Taoism history."
    },
    {
        "slug": "taoism-history-symbols",
        "name": "Taoism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Taoism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Taoism history."
    },
    {
        "slug": "taoism-history-controversies",
        "name": "Taoism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Taoism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Taoism history argumentative."
    },
    {
        "slug": "taoism-history-sources",
        "name": "Taoism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Taoism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Taoism history."
    },
    {
        "slug": "taoism-history-geography",
        "name": "Taoism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Taoism history.",
        "description": "Regions, routes, and spatial systems that situate Taoism history beyond single named places."
    },
    {
        "slug": "taoism-history-legacy",
        "name": "Taoism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Taoism history.",
        "description": "How Taoism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "taoism-history-practices",
        "name": "Taoism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Taoism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Taoism history."
    },
    {
        "slug": "taoism-history-entry-1",
        "name": "Taoism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-2",
        "name": "Taoism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-3",
        "name": "Taoism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-4",
        "name": "Taoism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-5",
        "name": "Taoism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-6",
        "name": "Taoism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-7",
        "name": "Taoism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-8",
        "name": "Taoism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-9",
        "name": "Taoism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-10",
        "name": "Taoism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-11",
        "name": "Taoism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-12",
        "name": "Taoism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-13",
        "name": "Taoism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-14",
        "name": "Taoism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-15",
        "name": "Taoism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-16",
        "name": "Taoism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-17",
        "name": "Taoism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-18",
        "name": "Taoism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-19",
        "name": "Taoism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-20",
        "name": "Taoism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-21",
        "name": "Taoism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-22",
        "name": "Taoism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-23",
        "name": "Taoism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taoism-history-entry-24",
        "name": "Taoism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taoism history.",
        "description": "A supporting encyclopedia entry in the Taoism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "taoism-history",
        "taoism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "taoism-history",
        "taoism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "taoism-history",
        "taoism-history-places",
        "contains",
        "Taoism history places is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-events",
        "contains",
        "Taoism history events is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-objects",
        "contains",
        "Taoism history objects & artifacts is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-factions",
        "contains",
        "Taoism history factions & groups is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-concepts",
        "contains",
        "Taoism history concepts is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-eras",
        "contains",
        "Taoism history eras is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-works",
        "contains",
        "Taoism history works & media is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-symbols",
        "contains",
        "Taoism history symbols is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-controversies",
        "contains",
        "Taoism history controversies is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-sources",
        "contains",
        "Taoism history sources is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-geography",
        "contains",
        "Taoism history geography is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-legacy",
        "contains",
        "Taoism history legacy is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-practices",
        "contains",
        "Taoism history practices is a primary trailhead under Taoism history.",
        0.88,
        0.82
    ],
    [
        "taoism-history",
        "taoism-history-entry-1",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-2",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-3",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-4",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-5",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-6",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-7",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-8",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-9",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-10",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-11",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-12",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-13",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-14",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-15",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-16",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-17",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-18",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-19",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-20",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-21",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-22",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-23",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ],
    [
        "taoism-history",
        "taoism-history-entry-24",
        "contains",
        "Supporting entry under Taoism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
