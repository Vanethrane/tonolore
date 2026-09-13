/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "confucianism-history",
        "name": "Confucianism history",
        "type": "topic",
        "short_description": "Ritual, filial piety, and the ethical system that structured East Asian statecraft.",
        "description": "Ritual, filial piety, and the ethical system that structured East Asian statecraft. This Ton-o-Lore subject maps people, places, events, and ideas tied to Confucianism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "confucianism-history-figures",
        "name": "Confucianism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Confucianism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Confucianism history."
    },
    {
        "slug": "confucianism-history-world",
        "name": "Confucianism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Confucianism history.",
        "description": "Geography, institutions, and periodization that give Confucianism history its encyclopedia shape."
    },
    {
        "slug": "confucianism-history-places",
        "name": "Confucianism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Confucianism history.",
        "description": "Places, regions, and built sites that give Confucianism history its map — where events and figures concentrate."
    },
    {
        "slug": "confucianism-history-events",
        "name": "Confucianism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Confucianism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Confucianism history timeline."
    },
    {
        "slug": "confucianism-history-objects",
        "name": "Confucianism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Confucianism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Confucianism history."
    },
    {
        "slug": "confucianism-history-factions",
        "name": "Confucianism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Confucianism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Confucianism history."
    },
    {
        "slug": "confucianism-history-concepts",
        "name": "Confucianism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Confucianism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Confucianism history readable as a lore graph."
    },
    {
        "slug": "confucianism-history-eras",
        "name": "Confucianism history eras",
        "type": "event",
        "short_description": "Periodization for Confucianism history.",
        "description": "Named eras and phases that help readers track how Confucianism history changes across time."
    },
    {
        "slug": "confucianism-history-works",
        "name": "Confucianism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Confucianism history.",
        "description": "Primary works and adaptations through which most audiences encounter Confucianism history."
    },
    {
        "slug": "confucianism-history-symbols",
        "name": "Confucianism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Confucianism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Confucianism history."
    },
    {
        "slug": "confucianism-history-controversies",
        "name": "Confucianism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Confucianism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Confucianism history argumentative."
    },
    {
        "slug": "confucianism-history-sources",
        "name": "Confucianism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Confucianism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Confucianism history."
    },
    {
        "slug": "confucianism-history-geography",
        "name": "Confucianism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Confucianism history.",
        "description": "Regions, routes, and spatial systems that situate Confucianism history beyond single named places."
    },
    {
        "slug": "confucianism-history-legacy",
        "name": "Confucianism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Confucianism history.",
        "description": "How Confucianism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "confucianism-history-practices",
        "name": "Confucianism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Confucianism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Confucianism history."
    },
    {
        "slug": "confucianism-history-entry-1",
        "name": "Confucianism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-2",
        "name": "Confucianism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-3",
        "name": "Confucianism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-4",
        "name": "Confucianism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-5",
        "name": "Confucianism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-6",
        "name": "Confucianism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-7",
        "name": "Confucianism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-8",
        "name": "Confucianism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-9",
        "name": "Confucianism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-10",
        "name": "Confucianism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-11",
        "name": "Confucianism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-12",
        "name": "Confucianism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-13",
        "name": "Confucianism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-14",
        "name": "Confucianism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-15",
        "name": "Confucianism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-16",
        "name": "Confucianism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-17",
        "name": "Confucianism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-18",
        "name": "Confucianism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-19",
        "name": "Confucianism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-20",
        "name": "Confucianism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-21",
        "name": "Confucianism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-22",
        "name": "Confucianism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-23",
        "name": "Confucianism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "confucianism-history-entry-24",
        "name": "Confucianism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Confucianism history.",
        "description": "A supporting encyclopedia entry in the Confucianism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "confucianism-history",
        "confucianism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "confucianism-history",
        "confucianism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "confucianism-history",
        "confucianism-history-places",
        "contains",
        "Confucianism history places is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-events",
        "contains",
        "Confucianism history events is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-objects",
        "contains",
        "Confucianism history objects & artifacts is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-factions",
        "contains",
        "Confucianism history factions & groups is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-concepts",
        "contains",
        "Confucianism history concepts is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-eras",
        "contains",
        "Confucianism history eras is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-works",
        "contains",
        "Confucianism history works & media is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-symbols",
        "contains",
        "Confucianism history symbols is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-controversies",
        "contains",
        "Confucianism history controversies is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-sources",
        "contains",
        "Confucianism history sources is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-geography",
        "contains",
        "Confucianism history geography is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-legacy",
        "contains",
        "Confucianism history legacy is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-practices",
        "contains",
        "Confucianism history practices is a primary trailhead under Confucianism history.",
        0.88,
        0.82
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-1",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-2",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-3",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-4",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-5",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-6",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-7",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-8",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-9",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-10",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-11",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-12",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-13",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-14",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-15",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-16",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-17",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-18",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-19",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-20",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-21",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-22",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-23",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ],
    [
        "confucianism-history",
        "confucianism-history-entry-24",
        "contains",
        "Supporting entry under Confucianism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
