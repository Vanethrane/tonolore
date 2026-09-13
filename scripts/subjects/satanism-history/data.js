/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "satanism-history",
        "name": "Satanism history",
        "type": "topic",
        "short_description": "From literary devil-worship panics to LaVeyan and theistic currents in modern culture.",
        "description": "From literary devil-worship panics to LaVeyan and theistic currents in modern culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Satanism history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "satanism-history-figures",
        "name": "Satanism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Satanism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Satanism history."
    },
    {
        "slug": "satanism-history-world",
        "name": "Satanism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Satanism history.",
        "description": "Geography, institutions, and periodization that give Satanism history its encyclopedia shape."
    },
    {
        "slug": "satanism-history-places",
        "name": "Satanism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Satanism history.",
        "description": "Places, regions, and built sites that give Satanism history its map — where events and figures concentrate."
    },
    {
        "slug": "satanism-history-events",
        "name": "Satanism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Satanism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Satanism history timeline."
    },
    {
        "slug": "satanism-history-objects",
        "name": "Satanism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Satanism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Satanism history."
    },
    {
        "slug": "satanism-history-factions",
        "name": "Satanism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Satanism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Satanism history."
    },
    {
        "slug": "satanism-history-concepts",
        "name": "Satanism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Satanism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Satanism history readable as a lore graph."
    },
    {
        "slug": "satanism-history-eras",
        "name": "Satanism history eras",
        "type": "event",
        "short_description": "Periodization for Satanism history.",
        "description": "Named eras and phases that help readers track how Satanism history changes across time."
    },
    {
        "slug": "satanism-history-works",
        "name": "Satanism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Satanism history.",
        "description": "Primary works and adaptations through which most audiences encounter Satanism history."
    },
    {
        "slug": "satanism-history-symbols",
        "name": "Satanism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Satanism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Satanism history."
    },
    {
        "slug": "satanism-history-controversies",
        "name": "Satanism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Satanism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Satanism history argumentative."
    },
    {
        "slug": "satanism-history-sources",
        "name": "Satanism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Satanism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Satanism history."
    },
    {
        "slug": "satanism-history-geography",
        "name": "Satanism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Satanism history.",
        "description": "Regions, routes, and spatial systems that situate Satanism history beyond single named places."
    },
    {
        "slug": "satanism-history-legacy",
        "name": "Satanism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Satanism history.",
        "description": "How Satanism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "satanism-history-practices",
        "name": "Satanism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Satanism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Satanism history."
    },
    {
        "slug": "satanism-history-entry-1",
        "name": "Satanism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-2",
        "name": "Satanism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-3",
        "name": "Satanism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-4",
        "name": "Satanism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-5",
        "name": "Satanism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-6",
        "name": "Satanism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-7",
        "name": "Satanism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-8",
        "name": "Satanism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-9",
        "name": "Satanism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-10",
        "name": "Satanism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-11",
        "name": "Satanism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-12",
        "name": "Satanism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-13",
        "name": "Satanism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-14",
        "name": "Satanism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-15",
        "name": "Satanism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-16",
        "name": "Satanism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-17",
        "name": "Satanism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-18",
        "name": "Satanism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-19",
        "name": "Satanism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-20",
        "name": "Satanism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-21",
        "name": "Satanism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-22",
        "name": "Satanism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-23",
        "name": "Satanism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "satanism-history-entry-24",
        "name": "Satanism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Satanism history.",
        "description": "A supporting encyclopedia entry in the Satanism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "satanism-history",
        "satanism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "satanism-history",
        "satanism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "satanism-history",
        "satanism-history-places",
        "contains",
        "Satanism history places is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-events",
        "contains",
        "Satanism history events is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-objects",
        "contains",
        "Satanism history objects & artifacts is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-factions",
        "contains",
        "Satanism history factions & groups is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-concepts",
        "contains",
        "Satanism history concepts is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-eras",
        "contains",
        "Satanism history eras is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-works",
        "contains",
        "Satanism history works & media is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-symbols",
        "contains",
        "Satanism history symbols is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-controversies",
        "contains",
        "Satanism history controversies is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-sources",
        "contains",
        "Satanism history sources is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-geography",
        "contains",
        "Satanism history geography is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-legacy",
        "contains",
        "Satanism history legacy is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-practices",
        "contains",
        "Satanism history practices is a primary trailhead under Satanism history.",
        0.88,
        0.82
    ],
    [
        "satanism-history",
        "satanism-history-entry-1",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-2",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-3",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-4",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-5",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-6",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-7",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-8",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-9",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-10",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-11",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-12",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-13",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-14",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-15",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-16",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-17",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-18",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-19",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-20",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-21",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-22",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-23",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ],
    [
        "satanism-history",
        "satanism-history-entry-24",
        "contains",
        "Supporting entry under Satanism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
