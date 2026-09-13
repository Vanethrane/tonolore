/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ambulance-history",
        "name": "Ambulance history",
        "type": "topic",
        "short_description": "Field litter to EMS, and the emergency vehicles that chase golden hours.",
        "description": "Field litter to EMS, and the emergency vehicles that chase golden hours. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ambulance history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "ambulance-history-figures",
        "name": "Ambulance history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ambulance history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ambulance history."
    },
    {
        "slug": "ambulance-history-world",
        "name": "Ambulance history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ambulance history.",
        "description": "Geography, institutions, and periodization that give Ambulance history its encyclopedia shape."
    },
    {
        "slug": "ambulance-history-places",
        "name": "Ambulance history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ambulance history.",
        "description": "Places, regions, and built sites that give Ambulance history its map — where events and figures concentrate."
    },
    {
        "slug": "ambulance-history-events",
        "name": "Ambulance history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ambulance history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ambulance history timeline."
    },
    {
        "slug": "ambulance-history-objects",
        "name": "Ambulance history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ambulance history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ambulance history."
    },
    {
        "slug": "ambulance-history-factions",
        "name": "Ambulance history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ambulance history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ambulance history."
    },
    {
        "slug": "ambulance-history-concepts",
        "name": "Ambulance history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ambulance history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ambulance history readable as a lore graph."
    },
    {
        "slug": "ambulance-history-eras",
        "name": "Ambulance history eras",
        "type": "event",
        "short_description": "Periodization for Ambulance history.",
        "description": "Named eras and phases that help readers track how Ambulance history changes across time."
    },
    {
        "slug": "ambulance-history-works",
        "name": "Ambulance history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ambulance history.",
        "description": "Primary works and adaptations through which most audiences encounter Ambulance history."
    },
    {
        "slug": "ambulance-history-symbols",
        "name": "Ambulance history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ambulance history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ambulance history."
    },
    {
        "slug": "ambulance-history-controversies",
        "name": "Ambulance history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ambulance history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ambulance history argumentative."
    },
    {
        "slug": "ambulance-history-sources",
        "name": "Ambulance history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ambulance history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ambulance history."
    },
    {
        "slug": "ambulance-history-geography",
        "name": "Ambulance history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ambulance history.",
        "description": "Regions, routes, and spatial systems that situate Ambulance history beyond single named places."
    },
    {
        "slug": "ambulance-history-legacy",
        "name": "Ambulance history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ambulance history.",
        "description": "How Ambulance history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ambulance-history-practices",
        "name": "Ambulance history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ambulance history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ambulance history."
    },
    {
        "slug": "ambulance-history-entry-1",
        "name": "Ambulance history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-2",
        "name": "Ambulance history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-3",
        "name": "Ambulance history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-4",
        "name": "Ambulance history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-5",
        "name": "Ambulance history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-6",
        "name": "Ambulance history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-7",
        "name": "Ambulance history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-8",
        "name": "Ambulance history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-9",
        "name": "Ambulance history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-10",
        "name": "Ambulance history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-11",
        "name": "Ambulance history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-12",
        "name": "Ambulance history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-13",
        "name": "Ambulance history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-14",
        "name": "Ambulance history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-15",
        "name": "Ambulance history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-16",
        "name": "Ambulance history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-17",
        "name": "Ambulance history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-18",
        "name": "Ambulance history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-19",
        "name": "Ambulance history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-20",
        "name": "Ambulance history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-21",
        "name": "Ambulance history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-22",
        "name": "Ambulance history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-23",
        "name": "Ambulance history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ambulance-history-entry-24",
        "name": "Ambulance history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ambulance history.",
        "description": "A supporting encyclopedia entry in the Ambulance history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ambulance-history",
        "ambulance-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ambulance-history",
        "ambulance-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ambulance-history",
        "ambulance-history-places",
        "contains",
        "Ambulance history places is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-events",
        "contains",
        "Ambulance history events is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-objects",
        "contains",
        "Ambulance history objects & artifacts is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-factions",
        "contains",
        "Ambulance history factions & groups is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-concepts",
        "contains",
        "Ambulance history concepts is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-eras",
        "contains",
        "Ambulance history eras is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-works",
        "contains",
        "Ambulance history works & media is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-symbols",
        "contains",
        "Ambulance history symbols is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-controversies",
        "contains",
        "Ambulance history controversies is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-sources",
        "contains",
        "Ambulance history sources is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-geography",
        "contains",
        "Ambulance history geography is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-legacy",
        "contains",
        "Ambulance history legacy is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-practices",
        "contains",
        "Ambulance history practices is a primary trailhead under Ambulance history.",
        0.88,
        0.82
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-1",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-2",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-3",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-4",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-5",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-6",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-7",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-8",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-9",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-10",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-11",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-12",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-13",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-14",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-15",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-16",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-17",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-18",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-19",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-20",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-21",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-22",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-23",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ],
    [
        "ambulance-history",
        "ambulance-history-entry-24",
        "contains",
        "Supporting entry under Ambulance history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
