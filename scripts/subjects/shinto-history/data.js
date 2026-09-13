/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shinto-history",
        "name": "Shinto history",
        "type": "topic",
        "short_description": "Kami, shrines, and Japan’s indigenous sacred tradition beside Buddhism.",
        "description": "Kami, shrines, and Japan’s indigenous sacred tradition beside Buddhism. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shinto history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "shinto-history-figures",
        "name": "Shinto history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shinto history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shinto history."
    },
    {
        "slug": "shinto-history-world",
        "name": "Shinto history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shinto history.",
        "description": "Geography, institutions, and periodization that give Shinto history its encyclopedia shape."
    },
    {
        "slug": "shinto-history-places",
        "name": "Shinto history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shinto history.",
        "description": "Places, regions, and built sites that give Shinto history its map — where events and figures concentrate."
    },
    {
        "slug": "shinto-history-events",
        "name": "Shinto history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shinto history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shinto history timeline."
    },
    {
        "slug": "shinto-history-objects",
        "name": "Shinto history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shinto history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shinto history."
    },
    {
        "slug": "shinto-history-factions",
        "name": "Shinto history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shinto history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shinto history."
    },
    {
        "slug": "shinto-history-concepts",
        "name": "Shinto history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shinto history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shinto history readable as a lore graph."
    },
    {
        "slug": "shinto-history-eras",
        "name": "Shinto history eras",
        "type": "event",
        "short_description": "Periodization for Shinto history.",
        "description": "Named eras and phases that help readers track how Shinto history changes across time."
    },
    {
        "slug": "shinto-history-works",
        "name": "Shinto history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shinto history.",
        "description": "Primary works and adaptations through which most audiences encounter Shinto history."
    },
    {
        "slug": "shinto-history-symbols",
        "name": "Shinto history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shinto history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shinto history."
    },
    {
        "slug": "shinto-history-controversies",
        "name": "Shinto history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shinto history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shinto history argumentative."
    },
    {
        "slug": "shinto-history-sources",
        "name": "Shinto history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shinto history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shinto history."
    },
    {
        "slug": "shinto-history-geography",
        "name": "Shinto history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shinto history.",
        "description": "Regions, routes, and spatial systems that situate Shinto history beyond single named places."
    },
    {
        "slug": "shinto-history-legacy",
        "name": "Shinto history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shinto history.",
        "description": "How Shinto history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "shinto-history-practices",
        "name": "Shinto history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Shinto history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Shinto history."
    },
    {
        "slug": "shinto-history-entry-1",
        "name": "Shinto history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-2",
        "name": "Shinto history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-3",
        "name": "Shinto history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-4",
        "name": "Shinto history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-5",
        "name": "Shinto history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-6",
        "name": "Shinto history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-7",
        "name": "Shinto history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-8",
        "name": "Shinto history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-9",
        "name": "Shinto history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-10",
        "name": "Shinto history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-11",
        "name": "Shinto history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-12",
        "name": "Shinto history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-13",
        "name": "Shinto history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-14",
        "name": "Shinto history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-15",
        "name": "Shinto history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-16",
        "name": "Shinto history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-17",
        "name": "Shinto history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-18",
        "name": "Shinto history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-19",
        "name": "Shinto history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-20",
        "name": "Shinto history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-21",
        "name": "Shinto history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-22",
        "name": "Shinto history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-23",
        "name": "Shinto history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shinto-history-entry-24",
        "name": "Shinto history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shinto history.",
        "description": "A supporting encyclopedia entry in the Shinto history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "shinto-history",
        "shinto-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shinto-history",
        "shinto-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shinto-history",
        "shinto-history-places",
        "contains",
        "Shinto history places is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-events",
        "contains",
        "Shinto history events is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-objects",
        "contains",
        "Shinto history objects & artifacts is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-factions",
        "contains",
        "Shinto history factions & groups is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-concepts",
        "contains",
        "Shinto history concepts is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-eras",
        "contains",
        "Shinto history eras is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-works",
        "contains",
        "Shinto history works & media is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-symbols",
        "contains",
        "Shinto history symbols is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-controversies",
        "contains",
        "Shinto history controversies is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-sources",
        "contains",
        "Shinto history sources is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-geography",
        "contains",
        "Shinto history geography is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-legacy",
        "contains",
        "Shinto history legacy is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-practices",
        "contains",
        "Shinto history practices is a primary trailhead under Shinto history.",
        0.88,
        0.82
    ],
    [
        "shinto-history",
        "shinto-history-entry-1",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-2",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-3",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-4",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-5",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-6",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-7",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-8",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-9",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-10",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-11",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-12",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-13",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-14",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-15",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-16",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-17",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-18",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-19",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-20",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-21",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-22",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-23",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ],
    [
        "shinto-history",
        "shinto-history-entry-24",
        "contains",
        "Supporting entry under Shinto history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
