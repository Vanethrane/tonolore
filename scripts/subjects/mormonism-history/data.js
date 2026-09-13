/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mormonism-history",
        "name": "Latter-day Saint history",
        "type": "topic",
        "short_description": "Joseph Smith, westward trek, and the American-born restorationist tradition.",
        "description": "Joseph Smith, westward trek, and the American-born restorationist tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Latter-day Saint history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "mormonism-history-figures",
        "name": "Latter-day Saint history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Latter-day Saint history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-world",
        "name": "Latter-day Saint history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Latter-day Saint history.",
        "description": "Geography, institutions, and periodization that give Latter-day Saint history its encyclopedia shape."
    },
    {
        "slug": "mormonism-history-places",
        "name": "Latter-day Saint history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Latter-day Saint history.",
        "description": "Places, regions, and built sites that give Latter-day Saint history its map — where events and figures concentrate."
    },
    {
        "slug": "mormonism-history-events",
        "name": "Latter-day Saint history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Latter-day Saint history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Latter-day Saint history timeline."
    },
    {
        "slug": "mormonism-history-objects",
        "name": "Latter-day Saint history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Latter-day Saint history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-factions",
        "name": "Latter-day Saint history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Latter-day Saint history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-concepts",
        "name": "Latter-day Saint history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Latter-day Saint history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Latter-day Saint history readable as a lore graph."
    },
    {
        "slug": "mormonism-history-eras",
        "name": "Latter-day Saint history eras",
        "type": "event",
        "short_description": "Periodization for Latter-day Saint history.",
        "description": "Named eras and phases that help readers track how Latter-day Saint history changes across time."
    },
    {
        "slug": "mormonism-history-works",
        "name": "Latter-day Saint history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Latter-day Saint history.",
        "description": "Primary works and adaptations through which most audiences encounter Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-symbols",
        "name": "Latter-day Saint history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Latter-day Saint history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-controversies",
        "name": "Latter-day Saint history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Latter-day Saint history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Latter-day Saint history argumentative."
    },
    {
        "slug": "mormonism-history-sources",
        "name": "Latter-day Saint history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Latter-day Saint history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-geography",
        "name": "Latter-day Saint history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Latter-day Saint history.",
        "description": "Regions, routes, and spatial systems that situate Latter-day Saint history beyond single named places."
    },
    {
        "slug": "mormonism-history-legacy",
        "name": "Latter-day Saint history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Latter-day Saint history.",
        "description": "How Latter-day Saint history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mormonism-history-practices",
        "name": "Latter-day Saint history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Latter-day Saint history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Latter-day Saint history."
    },
    {
        "slug": "mormonism-history-entry-1",
        "name": "Latter-day Saint history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-2",
        "name": "Latter-day Saint history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-3",
        "name": "Latter-day Saint history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-4",
        "name": "Latter-day Saint history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-5",
        "name": "Latter-day Saint history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-6",
        "name": "Latter-day Saint history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-7",
        "name": "Latter-day Saint history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-8",
        "name": "Latter-day Saint history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-9",
        "name": "Latter-day Saint history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-10",
        "name": "Latter-day Saint history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-11",
        "name": "Latter-day Saint history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-12",
        "name": "Latter-day Saint history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-13",
        "name": "Latter-day Saint history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-14",
        "name": "Latter-day Saint history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-15",
        "name": "Latter-day Saint history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-16",
        "name": "Latter-day Saint history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-17",
        "name": "Latter-day Saint history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-18",
        "name": "Latter-day Saint history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-19",
        "name": "Latter-day Saint history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-20",
        "name": "Latter-day Saint history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-21",
        "name": "Latter-day Saint history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-22",
        "name": "Latter-day Saint history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-23",
        "name": "Latter-day Saint history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mormonism-history-entry-24",
        "name": "Latter-day Saint history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Latter-day Saint history.",
        "description": "A supporting encyclopedia entry in the Latter-day Saint history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mormonism-history",
        "mormonism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mormonism-history",
        "mormonism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mormonism-history",
        "mormonism-history-places",
        "contains",
        "Latter-day Saint history places is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-events",
        "contains",
        "Latter-day Saint history events is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-objects",
        "contains",
        "Latter-day Saint history objects & artifacts is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-factions",
        "contains",
        "Latter-day Saint history factions & groups is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-concepts",
        "contains",
        "Latter-day Saint history concepts is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-eras",
        "contains",
        "Latter-day Saint history eras is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-works",
        "contains",
        "Latter-day Saint history works & media is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-symbols",
        "contains",
        "Latter-day Saint history symbols is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-controversies",
        "contains",
        "Latter-day Saint history controversies is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-sources",
        "contains",
        "Latter-day Saint history sources is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-geography",
        "contains",
        "Latter-day Saint history geography is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-legacy",
        "contains",
        "Latter-day Saint history legacy is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-practices",
        "contains",
        "Latter-day Saint history practices is a primary trailhead under Latter-day Saint history.",
        0.88,
        0.82
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-1",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-2",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-3",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-4",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-5",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-6",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-7",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-8",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-9",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-10",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-11",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-12",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-13",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-14",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-15",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-16",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-17",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-18",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-19",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-20",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-21",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-22",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-23",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ],
    [
        "mormonism-history",
        "mormonism-history-entry-24",
        "contains",
        "Supporting entry under Latter-day Saint history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
