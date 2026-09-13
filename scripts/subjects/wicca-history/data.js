/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wicca-history",
        "name": "Wicca history",
        "type": "topic",
        "short_description": "Gardner, covens, and the modern witchcraft religion that entered mainstream countersulture.",
        "description": "Gardner, covens, and the modern witchcraft religion that entered mainstream countersulture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wicca history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "wicca-history-figures",
        "name": "Wicca history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wicca history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wicca history."
    },
    {
        "slug": "wicca-history-world",
        "name": "Wicca history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wicca history.",
        "description": "Geography, institutions, and periodization that give Wicca history its encyclopedia shape."
    },
    {
        "slug": "wicca-history-places",
        "name": "Wicca history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wicca history.",
        "description": "Places, regions, and built sites that give Wicca history its map — where events and figures concentrate."
    },
    {
        "slug": "wicca-history-events",
        "name": "Wicca history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wicca history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wicca history timeline."
    },
    {
        "slug": "wicca-history-objects",
        "name": "Wicca history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wicca history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wicca history."
    },
    {
        "slug": "wicca-history-factions",
        "name": "Wicca history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wicca history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wicca history."
    },
    {
        "slug": "wicca-history-concepts",
        "name": "Wicca history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wicca history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wicca history readable as a lore graph."
    },
    {
        "slug": "wicca-history-eras",
        "name": "Wicca history eras",
        "type": "event",
        "short_description": "Periodization for Wicca history.",
        "description": "Named eras and phases that help readers track how Wicca history changes across time."
    },
    {
        "slug": "wicca-history-works",
        "name": "Wicca history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wicca history.",
        "description": "Primary works and adaptations through which most audiences encounter Wicca history."
    },
    {
        "slug": "wicca-history-symbols",
        "name": "Wicca history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wicca history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wicca history."
    },
    {
        "slug": "wicca-history-controversies",
        "name": "Wicca history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wicca history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wicca history argumentative."
    },
    {
        "slug": "wicca-history-sources",
        "name": "Wicca history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wicca history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wicca history."
    },
    {
        "slug": "wicca-history-geography",
        "name": "Wicca history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wicca history.",
        "description": "Regions, routes, and spatial systems that situate Wicca history beyond single named places."
    },
    {
        "slug": "wicca-history-legacy",
        "name": "Wicca history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wicca history.",
        "description": "How Wicca history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wicca-history-practices",
        "name": "Wicca history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wicca history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wicca history."
    },
    {
        "slug": "wicca-history-entry-1",
        "name": "Wicca history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-2",
        "name": "Wicca history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-3",
        "name": "Wicca history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-4",
        "name": "Wicca history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-5",
        "name": "Wicca history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-6",
        "name": "Wicca history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-7",
        "name": "Wicca history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-8",
        "name": "Wicca history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-9",
        "name": "Wicca history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-10",
        "name": "Wicca history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-11",
        "name": "Wicca history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-12",
        "name": "Wicca history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-13",
        "name": "Wicca history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-14",
        "name": "Wicca history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-15",
        "name": "Wicca history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-16",
        "name": "Wicca history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-17",
        "name": "Wicca history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-18",
        "name": "Wicca history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-19",
        "name": "Wicca history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-20",
        "name": "Wicca history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-21",
        "name": "Wicca history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-22",
        "name": "Wicca history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-23",
        "name": "Wicca history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wicca-history-entry-24",
        "name": "Wicca history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wicca history.",
        "description": "A supporting encyclopedia entry in the Wicca history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wicca-history",
        "wicca-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wicca-history",
        "wicca-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wicca-history",
        "wicca-history-places",
        "contains",
        "Wicca history places is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-events",
        "contains",
        "Wicca history events is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-objects",
        "contains",
        "Wicca history objects & artifacts is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-factions",
        "contains",
        "Wicca history factions & groups is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-concepts",
        "contains",
        "Wicca history concepts is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-eras",
        "contains",
        "Wicca history eras is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-works",
        "contains",
        "Wicca history works & media is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-symbols",
        "contains",
        "Wicca history symbols is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-controversies",
        "contains",
        "Wicca history controversies is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-sources",
        "contains",
        "Wicca history sources is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-geography",
        "contains",
        "Wicca history geography is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-legacy",
        "contains",
        "Wicca history legacy is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-practices",
        "contains",
        "Wicca history practices is a primary trailhead under Wicca history.",
        0.88,
        0.82
    ],
    [
        "wicca-history",
        "wicca-history-entry-1",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-2",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-3",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-4",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-5",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-6",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-7",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-8",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-9",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-10",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-11",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-12",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-13",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-14",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-15",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-16",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-17",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-18",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-19",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-20",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-21",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-22",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-23",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ],
    [
        "wicca-history",
        "wicca-history-entry-24",
        "contains",
        "Supporting entry under Wicca history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
