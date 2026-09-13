/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "diving-history",
        "name": "Diving history",
        "type": "topic",
        "short_description": "Bells, scuba, wreck work, and the human push into underwater space.",
        "description": "Bells, scuba, wreck work, and the human push into underwater space. This Ton-o-Lore subject maps people, places, events, and ideas tied to Diving history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "diving-history-figures",
        "name": "Diving history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Diving history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Diving history."
    },
    {
        "slug": "diving-history-world",
        "name": "Diving history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Diving history.",
        "description": "Geography, institutions, and periodization that give Diving history its encyclopedia shape."
    },
    {
        "slug": "diving-history-places",
        "name": "Diving history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Diving history.",
        "description": "Places, regions, and built sites that give Diving history its map — where events and figures concentrate."
    },
    {
        "slug": "diving-history-events",
        "name": "Diving history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Diving history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Diving history timeline."
    },
    {
        "slug": "diving-history-objects",
        "name": "Diving history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Diving history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Diving history."
    },
    {
        "slug": "diving-history-factions",
        "name": "Diving history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Diving history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Diving history."
    },
    {
        "slug": "diving-history-concepts",
        "name": "Diving history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Diving history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Diving history readable as a lore graph."
    },
    {
        "slug": "diving-history-eras",
        "name": "Diving history eras",
        "type": "event",
        "short_description": "Periodization for Diving history.",
        "description": "Named eras and phases that help readers track how Diving history changes across time."
    },
    {
        "slug": "diving-history-works",
        "name": "Diving history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Diving history.",
        "description": "Primary works and adaptations through which most audiences encounter Diving history."
    },
    {
        "slug": "diving-history-symbols",
        "name": "Diving history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Diving history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Diving history."
    },
    {
        "slug": "diving-history-controversies",
        "name": "Diving history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Diving history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Diving history argumentative."
    },
    {
        "slug": "diving-history-sources",
        "name": "Diving history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Diving history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Diving history."
    },
    {
        "slug": "diving-history-geography",
        "name": "Diving history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Diving history.",
        "description": "Regions, routes, and spatial systems that situate Diving history beyond single named places."
    },
    {
        "slug": "diving-history-legacy",
        "name": "Diving history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Diving history.",
        "description": "How Diving history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "diving-history-practices",
        "name": "Diving history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Diving history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Diving history."
    },
    {
        "slug": "diving-history-entry-1",
        "name": "Diving history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-2",
        "name": "Diving history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-3",
        "name": "Diving history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-4",
        "name": "Diving history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-5",
        "name": "Diving history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-6",
        "name": "Diving history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-7",
        "name": "Diving history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-8",
        "name": "Diving history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-9",
        "name": "Diving history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-10",
        "name": "Diving history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-11",
        "name": "Diving history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-12",
        "name": "Diving history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-13",
        "name": "Diving history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-14",
        "name": "Diving history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-15",
        "name": "Diving history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-16",
        "name": "Diving history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-17",
        "name": "Diving history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-18",
        "name": "Diving history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-19",
        "name": "Diving history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-20",
        "name": "Diving history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-21",
        "name": "Diving history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-22",
        "name": "Diving history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-23",
        "name": "Diving history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diving-history-entry-24",
        "name": "Diving history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diving history.",
        "description": "A supporting encyclopedia entry in the Diving history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "diving-history",
        "diving-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "diving-history",
        "diving-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "diving-history",
        "diving-history-places",
        "contains",
        "Diving history places is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-events",
        "contains",
        "Diving history events is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-objects",
        "contains",
        "Diving history objects & artifacts is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-factions",
        "contains",
        "Diving history factions & groups is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-concepts",
        "contains",
        "Diving history concepts is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-eras",
        "contains",
        "Diving history eras is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-works",
        "contains",
        "Diving history works & media is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-symbols",
        "contains",
        "Diving history symbols is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-controversies",
        "contains",
        "Diving history controversies is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-sources",
        "contains",
        "Diving history sources is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-geography",
        "contains",
        "Diving history geography is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-legacy",
        "contains",
        "Diving history legacy is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-practices",
        "contains",
        "Diving history practices is a primary trailhead under Diving history.",
        0.88,
        0.82
    ],
    [
        "diving-history",
        "diving-history-entry-1",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-2",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-3",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-4",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-5",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-6",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-7",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-8",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-9",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-10",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-11",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-12",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-13",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-14",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-15",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-16",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-17",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-18",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-19",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-20",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-21",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-22",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-23",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ],
    [
        "diving-history",
        "diving-history-entry-24",
        "contains",
        "Supporting entry under Diving history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
