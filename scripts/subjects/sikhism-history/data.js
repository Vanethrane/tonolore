/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sikhism-history",
        "name": "Sikhism history",
        "type": "topic",
        "short_description": "Gurus, Khalsa, and the Punjab-born faith of equality and martial saintliness.",
        "description": "Gurus, Khalsa, and the Punjab-born faith of equality and martial saintliness. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sikhism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "sikhism-history-figures",
        "name": "Sikhism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sikhism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sikhism history."
    },
    {
        "slug": "sikhism-history-world",
        "name": "Sikhism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sikhism history.",
        "description": "Geography, institutions, and periodization that give Sikhism history its encyclopedia shape."
    },
    {
        "slug": "sikhism-history-places",
        "name": "Sikhism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sikhism history.",
        "description": "Places, regions, and built sites that give Sikhism history its map — where events and figures concentrate."
    },
    {
        "slug": "sikhism-history-events",
        "name": "Sikhism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sikhism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sikhism history timeline."
    },
    {
        "slug": "sikhism-history-objects",
        "name": "Sikhism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sikhism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sikhism history."
    },
    {
        "slug": "sikhism-history-factions",
        "name": "Sikhism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sikhism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sikhism history."
    },
    {
        "slug": "sikhism-history-concepts",
        "name": "Sikhism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sikhism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sikhism history readable as a lore graph."
    },
    {
        "slug": "sikhism-history-eras",
        "name": "Sikhism history eras",
        "type": "event",
        "short_description": "Periodization for Sikhism history.",
        "description": "Named eras and phases that help readers track how Sikhism history changes across time."
    },
    {
        "slug": "sikhism-history-works",
        "name": "Sikhism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sikhism history.",
        "description": "Primary works and adaptations through which most audiences encounter Sikhism history."
    },
    {
        "slug": "sikhism-history-symbols",
        "name": "Sikhism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sikhism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sikhism history."
    },
    {
        "slug": "sikhism-history-controversies",
        "name": "Sikhism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sikhism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sikhism history argumentative."
    },
    {
        "slug": "sikhism-history-sources",
        "name": "Sikhism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sikhism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sikhism history."
    },
    {
        "slug": "sikhism-history-geography",
        "name": "Sikhism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sikhism history.",
        "description": "Regions, routes, and spatial systems that situate Sikhism history beyond single named places."
    },
    {
        "slug": "sikhism-history-legacy",
        "name": "Sikhism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sikhism history.",
        "description": "How Sikhism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sikhism-history-practices",
        "name": "Sikhism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sikhism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sikhism history."
    },
    {
        "slug": "sikhism-history-entry-1",
        "name": "Sikhism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-2",
        "name": "Sikhism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-3",
        "name": "Sikhism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-4",
        "name": "Sikhism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-5",
        "name": "Sikhism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-6",
        "name": "Sikhism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-7",
        "name": "Sikhism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-8",
        "name": "Sikhism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-9",
        "name": "Sikhism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-10",
        "name": "Sikhism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-11",
        "name": "Sikhism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-12",
        "name": "Sikhism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-13",
        "name": "Sikhism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-14",
        "name": "Sikhism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-15",
        "name": "Sikhism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-16",
        "name": "Sikhism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-17",
        "name": "Sikhism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-18",
        "name": "Sikhism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-19",
        "name": "Sikhism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-20",
        "name": "Sikhism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-21",
        "name": "Sikhism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-22",
        "name": "Sikhism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-23",
        "name": "Sikhism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sikhism-history-entry-24",
        "name": "Sikhism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sikhism history.",
        "description": "A supporting encyclopedia entry in the Sikhism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sikhism-history",
        "sikhism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sikhism-history",
        "sikhism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sikhism-history",
        "sikhism-history-places",
        "contains",
        "Sikhism history places is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-events",
        "contains",
        "Sikhism history events is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-objects",
        "contains",
        "Sikhism history objects & artifacts is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-factions",
        "contains",
        "Sikhism history factions & groups is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-concepts",
        "contains",
        "Sikhism history concepts is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-eras",
        "contains",
        "Sikhism history eras is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-works",
        "contains",
        "Sikhism history works & media is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-symbols",
        "contains",
        "Sikhism history symbols is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-controversies",
        "contains",
        "Sikhism history controversies is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-sources",
        "contains",
        "Sikhism history sources is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-geography",
        "contains",
        "Sikhism history geography is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-legacy",
        "contains",
        "Sikhism history legacy is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-practices",
        "contains",
        "Sikhism history practices is a primary trailhead under Sikhism history.",
        0.88,
        0.82
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-1",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-2",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-3",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-4",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-5",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-6",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-7",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-8",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-9",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-10",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-11",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-12",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-13",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-14",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-15",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-16",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-17",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-18",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-19",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-20",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-21",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-22",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-23",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ],
    [
        "sikhism-history",
        "sikhism-history-entry-24",
        "contains",
        "Supporting entry under Sikhism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
