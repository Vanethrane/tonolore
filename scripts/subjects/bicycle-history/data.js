/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bicycle-history",
        "name": "Bicycle history",
        "type": "topic",
        "short_description": "Penny-farthings to carbon frames, and the personal machine that remade urban mobility.",
        "description": "Penny-farthings to carbon frames, and the personal machine that remade urban mobility. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bicycle history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "bicycle-history-figures",
        "name": "Bicycle history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bicycle history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bicycle history."
    },
    {
        "slug": "bicycle-history-world",
        "name": "Bicycle history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bicycle history.",
        "description": "Geography, institutions, and periodization that give Bicycle history its encyclopedia shape."
    },
    {
        "slug": "bicycle-history-places",
        "name": "Bicycle history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bicycle history.",
        "description": "Places, regions, and built sites that give Bicycle history its map — where events and figures concentrate."
    },
    {
        "slug": "bicycle-history-events",
        "name": "Bicycle history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bicycle history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bicycle history timeline."
    },
    {
        "slug": "bicycle-history-objects",
        "name": "Bicycle history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bicycle history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bicycle history."
    },
    {
        "slug": "bicycle-history-factions",
        "name": "Bicycle history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bicycle history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bicycle history."
    },
    {
        "slug": "bicycle-history-concepts",
        "name": "Bicycle history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bicycle history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bicycle history readable as a lore graph."
    },
    {
        "slug": "bicycle-history-eras",
        "name": "Bicycle history eras",
        "type": "event",
        "short_description": "Periodization for Bicycle history.",
        "description": "Named eras and phases that help readers track how Bicycle history changes across time."
    },
    {
        "slug": "bicycle-history-works",
        "name": "Bicycle history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bicycle history.",
        "description": "Primary works and adaptations through which most audiences encounter Bicycle history."
    },
    {
        "slug": "bicycle-history-symbols",
        "name": "Bicycle history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bicycle history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bicycle history."
    },
    {
        "slug": "bicycle-history-controversies",
        "name": "Bicycle history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bicycle history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bicycle history argumentative."
    },
    {
        "slug": "bicycle-history-sources",
        "name": "Bicycle history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bicycle history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bicycle history."
    },
    {
        "slug": "bicycle-history-geography",
        "name": "Bicycle history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bicycle history.",
        "description": "Regions, routes, and spatial systems that situate Bicycle history beyond single named places."
    },
    {
        "slug": "bicycle-history-legacy",
        "name": "Bicycle history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bicycle history.",
        "description": "How Bicycle history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bicycle-history-practices",
        "name": "Bicycle history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bicycle history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bicycle history."
    },
    {
        "slug": "bicycle-history-entry-1",
        "name": "Bicycle history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-2",
        "name": "Bicycle history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-3",
        "name": "Bicycle history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-4",
        "name": "Bicycle history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-5",
        "name": "Bicycle history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-6",
        "name": "Bicycle history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-7",
        "name": "Bicycle history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-8",
        "name": "Bicycle history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-9",
        "name": "Bicycle history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-10",
        "name": "Bicycle history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-11",
        "name": "Bicycle history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-12",
        "name": "Bicycle history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-13",
        "name": "Bicycle history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-14",
        "name": "Bicycle history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-15",
        "name": "Bicycle history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-16",
        "name": "Bicycle history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-17",
        "name": "Bicycle history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-18",
        "name": "Bicycle history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-19",
        "name": "Bicycle history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-20",
        "name": "Bicycle history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-21",
        "name": "Bicycle history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-22",
        "name": "Bicycle history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-23",
        "name": "Bicycle history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bicycle-history-entry-24",
        "name": "Bicycle history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bicycle history.",
        "description": "A supporting encyclopedia entry in the Bicycle history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bicycle-history",
        "bicycle-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bicycle-history",
        "bicycle-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bicycle-history",
        "bicycle-history-places",
        "contains",
        "Bicycle history places is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-events",
        "contains",
        "Bicycle history events is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-objects",
        "contains",
        "Bicycle history objects & artifacts is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-factions",
        "contains",
        "Bicycle history factions & groups is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-concepts",
        "contains",
        "Bicycle history concepts is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-eras",
        "contains",
        "Bicycle history eras is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-works",
        "contains",
        "Bicycle history works & media is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-symbols",
        "contains",
        "Bicycle history symbols is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-controversies",
        "contains",
        "Bicycle history controversies is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-sources",
        "contains",
        "Bicycle history sources is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-geography",
        "contains",
        "Bicycle history geography is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-legacy",
        "contains",
        "Bicycle history legacy is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-practices",
        "contains",
        "Bicycle history practices is a primary trailhead under Bicycle history.",
        0.88,
        0.82
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-1",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-2",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-3",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-4",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-5",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-6",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-7",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-8",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-9",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-10",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-11",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-12",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-13",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-14",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-15",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-16",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-17",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-18",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-19",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-20",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-21",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-22",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-23",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ],
    [
        "bicycle-history",
        "bicycle-history-entry-24",
        "contains",
        "Supporting entry under Bicycle history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
