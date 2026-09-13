/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "palmistry-history",
        "name": "Palmistry history",
        "type": "topic",
        "short_description": "Chiromancy, hand lines, and the fortune-telling craft that crossed courts and carnivals.",
        "description": "Chiromancy, hand lines, and the fortune-telling craft that crossed courts and carnivals. This Ton-o-Lore subject maps people, places, events, and ideas tied to Palmistry history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "palmistry-history-figures",
        "name": "Palmistry history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Palmistry history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Palmistry history."
    },
    {
        "slug": "palmistry-history-world",
        "name": "Palmistry history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Palmistry history.",
        "description": "Geography, institutions, and periodization that give Palmistry history its encyclopedia shape."
    },
    {
        "slug": "palmistry-history-places",
        "name": "Palmistry history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Palmistry history.",
        "description": "Places, regions, and built sites that give Palmistry history its map — where events and figures concentrate."
    },
    {
        "slug": "palmistry-history-events",
        "name": "Palmistry history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Palmistry history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Palmistry history timeline."
    },
    {
        "slug": "palmistry-history-objects",
        "name": "Palmistry history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Palmistry history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Palmistry history."
    },
    {
        "slug": "palmistry-history-factions",
        "name": "Palmistry history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Palmistry history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Palmistry history."
    },
    {
        "slug": "palmistry-history-concepts",
        "name": "Palmistry history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Palmistry history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Palmistry history readable as a lore graph."
    },
    {
        "slug": "palmistry-history-eras",
        "name": "Palmistry history eras",
        "type": "event",
        "short_description": "Periodization for Palmistry history.",
        "description": "Named eras and phases that help readers track how Palmistry history changes across time."
    },
    {
        "slug": "palmistry-history-works",
        "name": "Palmistry history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Palmistry history.",
        "description": "Primary works and adaptations through which most audiences encounter Palmistry history."
    },
    {
        "slug": "palmistry-history-symbols",
        "name": "Palmistry history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Palmistry history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Palmistry history."
    },
    {
        "slug": "palmistry-history-controversies",
        "name": "Palmistry history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Palmistry history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Palmistry history argumentative."
    },
    {
        "slug": "palmistry-history-sources",
        "name": "Palmistry history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Palmistry history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Palmistry history."
    },
    {
        "slug": "palmistry-history-geography",
        "name": "Palmistry history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Palmistry history.",
        "description": "Regions, routes, and spatial systems that situate Palmistry history beyond single named places."
    },
    {
        "slug": "palmistry-history-legacy",
        "name": "Palmistry history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Palmistry history.",
        "description": "How Palmistry history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "palmistry-history-practices",
        "name": "Palmistry history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Palmistry history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Palmistry history."
    },
    {
        "slug": "palmistry-history-entry-1",
        "name": "Palmistry history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-2",
        "name": "Palmistry history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-3",
        "name": "Palmistry history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-4",
        "name": "Palmistry history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-5",
        "name": "Palmistry history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-6",
        "name": "Palmistry history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-7",
        "name": "Palmistry history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-8",
        "name": "Palmistry history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-9",
        "name": "Palmistry history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-10",
        "name": "Palmistry history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-11",
        "name": "Palmistry history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-12",
        "name": "Palmistry history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-13",
        "name": "Palmistry history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-14",
        "name": "Palmistry history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-15",
        "name": "Palmistry history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-16",
        "name": "Palmistry history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-17",
        "name": "Palmistry history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-18",
        "name": "Palmistry history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-19",
        "name": "Palmistry history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-20",
        "name": "Palmistry history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-21",
        "name": "Palmistry history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-22",
        "name": "Palmistry history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-23",
        "name": "Palmistry history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "palmistry-history-entry-24",
        "name": "Palmistry history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Palmistry history.",
        "description": "A supporting encyclopedia entry in the Palmistry history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "palmistry-history",
        "palmistry-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "palmistry-history",
        "palmistry-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "palmistry-history",
        "palmistry-history-places",
        "contains",
        "Palmistry history places is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-events",
        "contains",
        "Palmistry history events is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-objects",
        "contains",
        "Palmistry history objects & artifacts is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-factions",
        "contains",
        "Palmistry history factions & groups is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-concepts",
        "contains",
        "Palmistry history concepts is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-eras",
        "contains",
        "Palmistry history eras is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-works",
        "contains",
        "Palmistry history works & media is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-symbols",
        "contains",
        "Palmistry history symbols is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-controversies",
        "contains",
        "Palmistry history controversies is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-sources",
        "contains",
        "Palmistry history sources is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-geography",
        "contains",
        "Palmistry history geography is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-legacy",
        "contains",
        "Palmistry history legacy is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-practices",
        "contains",
        "Palmistry history practices is a primary trailhead under Palmistry history.",
        0.88,
        0.82
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-1",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-2",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-3",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-4",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-5",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-6",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-7",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-8",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-9",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-10",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-11",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-12",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-13",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-14",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-15",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-16",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-17",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-18",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-19",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-20",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-21",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-22",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-23",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ],
    [
        "palmistry-history",
        "palmistry-history-entry-24",
        "contains",
        "Supporting entry under Palmistry history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
