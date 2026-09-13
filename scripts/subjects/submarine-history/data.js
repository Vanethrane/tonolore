/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "submarine-history",
        "name": "Submarine history",
        "type": "topic",
        "short_description": "U-boats, nuclear boats, and the undersea craft that remade naval warfare.",
        "description": "U-boats, nuclear boats, and the undersea craft that remade naval warfare. This Ton-o-Lore subject maps people, places, events, and ideas tied to Submarine history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "submarine-history-figures",
        "name": "Submarine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Submarine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Submarine history."
    },
    {
        "slug": "submarine-history-world",
        "name": "Submarine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Submarine history.",
        "description": "Geography, institutions, and periodization that give Submarine history its encyclopedia shape."
    },
    {
        "slug": "submarine-history-places",
        "name": "Submarine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Submarine history.",
        "description": "Places, regions, and built sites that give Submarine history its map — where events and figures concentrate."
    },
    {
        "slug": "submarine-history-events",
        "name": "Submarine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Submarine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Submarine history timeline."
    },
    {
        "slug": "submarine-history-objects",
        "name": "Submarine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Submarine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Submarine history."
    },
    {
        "slug": "submarine-history-factions",
        "name": "Submarine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Submarine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Submarine history."
    },
    {
        "slug": "submarine-history-concepts",
        "name": "Submarine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Submarine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Submarine history readable as a lore graph."
    },
    {
        "slug": "submarine-history-eras",
        "name": "Submarine history eras",
        "type": "event",
        "short_description": "Periodization for Submarine history.",
        "description": "Named eras and phases that help readers track how Submarine history changes across time."
    },
    {
        "slug": "submarine-history-works",
        "name": "Submarine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Submarine history.",
        "description": "Primary works and adaptations through which most audiences encounter Submarine history."
    },
    {
        "slug": "submarine-history-symbols",
        "name": "Submarine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Submarine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Submarine history."
    },
    {
        "slug": "submarine-history-controversies",
        "name": "Submarine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Submarine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Submarine history argumentative."
    },
    {
        "slug": "submarine-history-sources",
        "name": "Submarine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Submarine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Submarine history."
    },
    {
        "slug": "submarine-history-geography",
        "name": "Submarine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Submarine history.",
        "description": "Regions, routes, and spatial systems that situate Submarine history beyond single named places."
    },
    {
        "slug": "submarine-history-legacy",
        "name": "Submarine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Submarine history.",
        "description": "How Submarine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "submarine-history-practices",
        "name": "Submarine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Submarine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Submarine history."
    },
    {
        "slug": "submarine-history-entry-1",
        "name": "Submarine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-2",
        "name": "Submarine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-3",
        "name": "Submarine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-4",
        "name": "Submarine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-5",
        "name": "Submarine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-6",
        "name": "Submarine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-7",
        "name": "Submarine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-8",
        "name": "Submarine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-9",
        "name": "Submarine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-10",
        "name": "Submarine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-11",
        "name": "Submarine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-12",
        "name": "Submarine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-13",
        "name": "Submarine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-14",
        "name": "Submarine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-15",
        "name": "Submarine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-16",
        "name": "Submarine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-17",
        "name": "Submarine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-18",
        "name": "Submarine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-19",
        "name": "Submarine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-20",
        "name": "Submarine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-21",
        "name": "Submarine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-22",
        "name": "Submarine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-23",
        "name": "Submarine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "submarine-history-entry-24",
        "name": "Submarine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Submarine history.",
        "description": "A supporting encyclopedia entry in the Submarine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "submarine-history",
        "submarine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "submarine-history",
        "submarine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "submarine-history",
        "submarine-history-places",
        "contains",
        "Submarine history places is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-events",
        "contains",
        "Submarine history events is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-objects",
        "contains",
        "Submarine history objects & artifacts is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-factions",
        "contains",
        "Submarine history factions & groups is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-concepts",
        "contains",
        "Submarine history concepts is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-eras",
        "contains",
        "Submarine history eras is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-works",
        "contains",
        "Submarine history works & media is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-symbols",
        "contains",
        "Submarine history symbols is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-controversies",
        "contains",
        "Submarine history controversies is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-sources",
        "contains",
        "Submarine history sources is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-geography",
        "contains",
        "Submarine history geography is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-legacy",
        "contains",
        "Submarine history legacy is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-practices",
        "contains",
        "Submarine history practices is a primary trailhead under Submarine history.",
        0.88,
        0.82
    ],
    [
        "submarine-history",
        "submarine-history-entry-1",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-2",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-3",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-4",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-5",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-6",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-7",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-8",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-9",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-10",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-11",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-12",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-13",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-14",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-15",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-16",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-17",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-18",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-19",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-20",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-21",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-22",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-23",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ],
    [
        "submarine-history",
        "submarine-history-entry-24",
        "contains",
        "Supporting entry under Submarine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
