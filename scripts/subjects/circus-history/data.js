/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "circus-history",
        "name": "Circus history",
        "type": "topic",
        "short_description": "Rings, touring shows, and the spectacle tradition from Astley to modern cirque.",
        "description": "Rings, touring shows, and the spectacle tradition from Astley to modern cirque. This Ton-o-Lore subject maps people, places, events, and ideas tied to Circus history so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "circus-history-figures",
        "name": "Circus history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Circus history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Circus history."
    },
    {
        "slug": "circus-history-world",
        "name": "Circus history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Circus history.",
        "description": "Geography, institutions, and periodization that give Circus history its encyclopedia shape."
    },
    {
        "slug": "circus-history-places",
        "name": "Circus history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Circus history.",
        "description": "Places, regions, and built sites that give Circus history its map — where events and figures concentrate."
    },
    {
        "slug": "circus-history-events",
        "name": "Circus history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Circus history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Circus history timeline."
    },
    {
        "slug": "circus-history-objects",
        "name": "Circus history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Circus history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Circus history."
    },
    {
        "slug": "circus-history-factions",
        "name": "Circus history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Circus history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Circus history."
    },
    {
        "slug": "circus-history-concepts",
        "name": "Circus history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Circus history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Circus history readable as a lore graph."
    },
    {
        "slug": "circus-history-eras",
        "name": "Circus history eras",
        "type": "event",
        "short_description": "Periodization for Circus history.",
        "description": "Named eras and phases that help readers track how Circus history changes across time."
    },
    {
        "slug": "circus-history-works",
        "name": "Circus history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Circus history.",
        "description": "Primary works and adaptations through which most audiences encounter Circus history."
    },
    {
        "slug": "circus-history-symbols",
        "name": "Circus history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Circus history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Circus history."
    },
    {
        "slug": "circus-history-controversies",
        "name": "Circus history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Circus history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Circus history argumentative."
    },
    {
        "slug": "circus-history-sources",
        "name": "Circus history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Circus history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Circus history."
    },
    {
        "slug": "circus-history-geography",
        "name": "Circus history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Circus history.",
        "description": "Regions, routes, and spatial systems that situate Circus history beyond single named places."
    },
    {
        "slug": "circus-history-legacy",
        "name": "Circus history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Circus history.",
        "description": "How Circus history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "circus-history-practices",
        "name": "Circus history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Circus history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Circus history."
    },
    {
        "slug": "circus-history-entry-1",
        "name": "Circus history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-2",
        "name": "Circus history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-3",
        "name": "Circus history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-4",
        "name": "Circus history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-5",
        "name": "Circus history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-6",
        "name": "Circus history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-7",
        "name": "Circus history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-8",
        "name": "Circus history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-9",
        "name": "Circus history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-10",
        "name": "Circus history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-11",
        "name": "Circus history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-12",
        "name": "Circus history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-13",
        "name": "Circus history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-14",
        "name": "Circus history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-15",
        "name": "Circus history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-16",
        "name": "Circus history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-17",
        "name": "Circus history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-18",
        "name": "Circus history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-19",
        "name": "Circus history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-20",
        "name": "Circus history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-21",
        "name": "Circus history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-22",
        "name": "Circus history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-23",
        "name": "Circus history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "circus-history-entry-24",
        "name": "Circus history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Circus history.",
        "description": "A supporting encyclopedia entry in the Circus history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "circus-history",
        "circus-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "circus-history",
        "circus-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "circus-history",
        "circus-history-places",
        "contains",
        "Circus history places is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-events",
        "contains",
        "Circus history events is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-objects",
        "contains",
        "Circus history objects & artifacts is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-factions",
        "contains",
        "Circus history factions & groups is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-concepts",
        "contains",
        "Circus history concepts is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-eras",
        "contains",
        "Circus history eras is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-works",
        "contains",
        "Circus history works & media is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-symbols",
        "contains",
        "Circus history symbols is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-controversies",
        "contains",
        "Circus history controversies is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-sources",
        "contains",
        "Circus history sources is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-geography",
        "contains",
        "Circus history geography is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-legacy",
        "contains",
        "Circus history legacy is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-practices",
        "contains",
        "Circus history practices is a primary trailhead under Circus history.",
        0.88,
        0.82
    ],
    [
        "circus-history",
        "circus-history-entry-1",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-2",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-3",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-4",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-5",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-6",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-7",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-8",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-9",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-10",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-11",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-12",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-13",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-14",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-15",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-16",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-17",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-18",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-19",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-20",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-21",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-22",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-23",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ],
    [
        "circus-history",
        "circus-history-entry-24",
        "contains",
        "Supporting entry under Circus history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
