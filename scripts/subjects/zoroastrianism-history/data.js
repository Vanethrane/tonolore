/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "zoroastrianism-history",
        "name": "Zoroastrianism history",
        "type": "topic",
        "short_description": "Fire temples, dualism, and the Iranian faith that influenced later Abrahamic ideas.",
        "description": "Fire temples, dualism, and the Iranian faith that influenced later Abrahamic ideas. This Ton-o-Lore subject maps people, places, events, and ideas tied to Zoroastrianism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "zoroastrianism-history-figures",
        "name": "Zoroastrianism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Zoroastrianism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-world",
        "name": "Zoroastrianism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Zoroastrianism history.",
        "description": "Geography, institutions, and periodization that give Zoroastrianism history its encyclopedia shape."
    },
    {
        "slug": "zoroastrianism-history-places",
        "name": "Zoroastrianism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Zoroastrianism history.",
        "description": "Places, regions, and built sites that give Zoroastrianism history its map — where events and figures concentrate."
    },
    {
        "slug": "zoroastrianism-history-events",
        "name": "Zoroastrianism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Zoroastrianism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Zoroastrianism history timeline."
    },
    {
        "slug": "zoroastrianism-history-objects",
        "name": "Zoroastrianism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Zoroastrianism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-factions",
        "name": "Zoroastrianism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Zoroastrianism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-concepts",
        "name": "Zoroastrianism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Zoroastrianism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Zoroastrianism history readable as a lore graph."
    },
    {
        "slug": "zoroastrianism-history-eras",
        "name": "Zoroastrianism history eras",
        "type": "event",
        "short_description": "Periodization for Zoroastrianism history.",
        "description": "Named eras and phases that help readers track how Zoroastrianism history changes across time."
    },
    {
        "slug": "zoroastrianism-history-works",
        "name": "Zoroastrianism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Zoroastrianism history.",
        "description": "Primary works and adaptations through which most audiences encounter Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-symbols",
        "name": "Zoroastrianism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Zoroastrianism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-controversies",
        "name": "Zoroastrianism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Zoroastrianism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Zoroastrianism history argumentative."
    },
    {
        "slug": "zoroastrianism-history-sources",
        "name": "Zoroastrianism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Zoroastrianism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-geography",
        "name": "Zoroastrianism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Zoroastrianism history.",
        "description": "Regions, routes, and spatial systems that situate Zoroastrianism history beyond single named places."
    },
    {
        "slug": "zoroastrianism-history-legacy",
        "name": "Zoroastrianism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Zoroastrianism history.",
        "description": "How Zoroastrianism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "zoroastrianism-history-practices",
        "name": "Zoroastrianism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Zoroastrianism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Zoroastrianism history."
    },
    {
        "slug": "zoroastrianism-history-entry-1",
        "name": "Zoroastrianism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-2",
        "name": "Zoroastrianism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-3",
        "name": "Zoroastrianism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-4",
        "name": "Zoroastrianism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-5",
        "name": "Zoroastrianism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-6",
        "name": "Zoroastrianism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-7",
        "name": "Zoroastrianism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-8",
        "name": "Zoroastrianism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-9",
        "name": "Zoroastrianism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-10",
        "name": "Zoroastrianism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-11",
        "name": "Zoroastrianism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-12",
        "name": "Zoroastrianism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-13",
        "name": "Zoroastrianism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-14",
        "name": "Zoroastrianism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-15",
        "name": "Zoroastrianism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-16",
        "name": "Zoroastrianism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-17",
        "name": "Zoroastrianism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-18",
        "name": "Zoroastrianism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-19",
        "name": "Zoroastrianism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-20",
        "name": "Zoroastrianism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-21",
        "name": "Zoroastrianism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-22",
        "name": "Zoroastrianism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-23",
        "name": "Zoroastrianism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrianism-history-entry-24",
        "name": "Zoroastrianism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrianism history.",
        "description": "A supporting encyclopedia entry in the Zoroastrianism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "zoroastrianism-history",
        "zoroastrianism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-places",
        "contains",
        "Zoroastrianism history places is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-events",
        "contains",
        "Zoroastrianism history events is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-objects",
        "contains",
        "Zoroastrianism history objects & artifacts is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-factions",
        "contains",
        "Zoroastrianism history factions & groups is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-concepts",
        "contains",
        "Zoroastrianism history concepts is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-eras",
        "contains",
        "Zoroastrianism history eras is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-works",
        "contains",
        "Zoroastrianism history works & media is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-symbols",
        "contains",
        "Zoroastrianism history symbols is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-controversies",
        "contains",
        "Zoroastrianism history controversies is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-sources",
        "contains",
        "Zoroastrianism history sources is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-geography",
        "contains",
        "Zoroastrianism history geography is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-legacy",
        "contains",
        "Zoroastrianism history legacy is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-practices",
        "contains",
        "Zoroastrianism history practices is a primary trailhead under Zoroastrianism history.",
        0.88,
        0.82
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-1",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-2",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-3",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-4",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-5",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-6",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-7",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-8",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-9",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-10",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-11",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-12",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-13",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-14",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-15",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-16",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-17",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-18",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-19",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-20",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-21",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-22",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-23",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ],
    [
        "zoroastrianism-history",
        "zoroastrianism-history-entry-24",
        "contains",
        "Supporting entry under Zoroastrianism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
