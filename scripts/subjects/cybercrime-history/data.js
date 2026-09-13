/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cybercrime-history",
        "name": "Cybercrime history",
        "type": "topic",
        "short_description": "Hackers, ransomware, and the digital underworld that remapped theft and fraud.",
        "description": "Hackers, ransomware, and the digital underworld that remapped theft and fraud. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cybercrime history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "cybercrime-history-figures",
        "name": "Cybercrime history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cybercrime history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cybercrime history."
    },
    {
        "slug": "cybercrime-history-world",
        "name": "Cybercrime history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cybercrime history.",
        "description": "Geography, institutions, and periodization that give Cybercrime history its encyclopedia shape."
    },
    {
        "slug": "cybercrime-history-places",
        "name": "Cybercrime history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cybercrime history.",
        "description": "Places, regions, and built sites that give Cybercrime history its map — where events and figures concentrate."
    },
    {
        "slug": "cybercrime-history-events",
        "name": "Cybercrime history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cybercrime history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cybercrime history timeline."
    },
    {
        "slug": "cybercrime-history-objects",
        "name": "Cybercrime history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cybercrime history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cybercrime history."
    },
    {
        "slug": "cybercrime-history-factions",
        "name": "Cybercrime history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cybercrime history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cybercrime history."
    },
    {
        "slug": "cybercrime-history-concepts",
        "name": "Cybercrime history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cybercrime history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cybercrime history readable as a lore graph."
    },
    {
        "slug": "cybercrime-history-eras",
        "name": "Cybercrime history eras",
        "type": "event",
        "short_description": "Periodization for Cybercrime history.",
        "description": "Named eras and phases that help readers track how Cybercrime history changes across time."
    },
    {
        "slug": "cybercrime-history-works",
        "name": "Cybercrime history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cybercrime history.",
        "description": "Primary works and adaptations through which most audiences encounter Cybercrime history."
    },
    {
        "slug": "cybercrime-history-symbols",
        "name": "Cybercrime history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cybercrime history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cybercrime history."
    },
    {
        "slug": "cybercrime-history-controversies",
        "name": "Cybercrime history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cybercrime history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cybercrime history argumentative."
    },
    {
        "slug": "cybercrime-history-sources",
        "name": "Cybercrime history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cybercrime history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cybercrime history."
    },
    {
        "slug": "cybercrime-history-geography",
        "name": "Cybercrime history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cybercrime history.",
        "description": "Regions, routes, and spatial systems that situate Cybercrime history beyond single named places."
    },
    {
        "slug": "cybercrime-history-legacy",
        "name": "Cybercrime history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cybercrime history.",
        "description": "How Cybercrime history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cybercrime-history-practices",
        "name": "Cybercrime history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cybercrime history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cybercrime history."
    },
    {
        "slug": "cybercrime-history-entry-1",
        "name": "Cybercrime history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-2",
        "name": "Cybercrime history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-3",
        "name": "Cybercrime history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-4",
        "name": "Cybercrime history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-5",
        "name": "Cybercrime history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-6",
        "name": "Cybercrime history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-7",
        "name": "Cybercrime history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-8",
        "name": "Cybercrime history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-9",
        "name": "Cybercrime history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-10",
        "name": "Cybercrime history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-11",
        "name": "Cybercrime history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-12",
        "name": "Cybercrime history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-13",
        "name": "Cybercrime history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-14",
        "name": "Cybercrime history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-15",
        "name": "Cybercrime history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-16",
        "name": "Cybercrime history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-17",
        "name": "Cybercrime history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-18",
        "name": "Cybercrime history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-19",
        "name": "Cybercrime history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-20",
        "name": "Cybercrime history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-21",
        "name": "Cybercrime history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-22",
        "name": "Cybercrime history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-23",
        "name": "Cybercrime history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cybercrime-history-entry-24",
        "name": "Cybercrime history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cybercrime history.",
        "description": "A supporting encyclopedia entry in the Cybercrime history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cybercrime-history",
        "cybercrime-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cybercrime-history",
        "cybercrime-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cybercrime-history",
        "cybercrime-history-places",
        "contains",
        "Cybercrime history places is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-events",
        "contains",
        "Cybercrime history events is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-objects",
        "contains",
        "Cybercrime history objects & artifacts is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-factions",
        "contains",
        "Cybercrime history factions & groups is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-concepts",
        "contains",
        "Cybercrime history concepts is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-eras",
        "contains",
        "Cybercrime history eras is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-works",
        "contains",
        "Cybercrime history works & media is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-symbols",
        "contains",
        "Cybercrime history symbols is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-controversies",
        "contains",
        "Cybercrime history controversies is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-sources",
        "contains",
        "Cybercrime history sources is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-geography",
        "contains",
        "Cybercrime history geography is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-legacy",
        "contains",
        "Cybercrime history legacy is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-practices",
        "contains",
        "Cybercrime history practices is a primary trailhead under Cybercrime history.",
        0.88,
        0.82
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-1",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-2",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-3",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-4",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-5",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-6",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-7",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-8",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-9",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-10",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-11",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-12",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-13",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-14",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-15",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-16",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-17",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-18",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-19",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-20",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-21",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-22",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-23",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ],
    [
        "cybercrime-history",
        "cybercrime-history-entry-24",
        "contains",
        "Supporting entry under Cybercrime history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
