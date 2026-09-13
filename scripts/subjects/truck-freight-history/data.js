/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "truck-freight-history",
        "name": "Truck freight history",
        "type": "topic",
        "short_description": "Highways, logistics, and the diesel fleets that move modern economies.",
        "description": "Highways, logistics, and the diesel fleets that move modern economies. This Ton-o-Lore subject maps people, places, events, and ideas tied to Truck freight history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "truck-freight-history-figures",
        "name": "Truck freight history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Truck freight history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Truck freight history."
    },
    {
        "slug": "truck-freight-history-world",
        "name": "Truck freight history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Truck freight history.",
        "description": "Geography, institutions, and periodization that give Truck freight history its encyclopedia shape."
    },
    {
        "slug": "truck-freight-history-places",
        "name": "Truck freight history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Truck freight history.",
        "description": "Places, regions, and built sites that give Truck freight history its map — where events and figures concentrate."
    },
    {
        "slug": "truck-freight-history-events",
        "name": "Truck freight history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Truck freight history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Truck freight history timeline."
    },
    {
        "slug": "truck-freight-history-objects",
        "name": "Truck freight history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Truck freight history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Truck freight history."
    },
    {
        "slug": "truck-freight-history-factions",
        "name": "Truck freight history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Truck freight history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Truck freight history."
    },
    {
        "slug": "truck-freight-history-concepts",
        "name": "Truck freight history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Truck freight history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Truck freight history readable as a lore graph."
    },
    {
        "slug": "truck-freight-history-eras",
        "name": "Truck freight history eras",
        "type": "event",
        "short_description": "Periodization for Truck freight history.",
        "description": "Named eras and phases that help readers track how Truck freight history changes across time."
    },
    {
        "slug": "truck-freight-history-works",
        "name": "Truck freight history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Truck freight history.",
        "description": "Primary works and adaptations through which most audiences encounter Truck freight history."
    },
    {
        "slug": "truck-freight-history-symbols",
        "name": "Truck freight history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Truck freight history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Truck freight history."
    },
    {
        "slug": "truck-freight-history-controversies",
        "name": "Truck freight history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Truck freight history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Truck freight history argumentative."
    },
    {
        "slug": "truck-freight-history-sources",
        "name": "Truck freight history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Truck freight history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Truck freight history."
    },
    {
        "slug": "truck-freight-history-geography",
        "name": "Truck freight history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Truck freight history.",
        "description": "Regions, routes, and spatial systems that situate Truck freight history beyond single named places."
    },
    {
        "slug": "truck-freight-history-legacy",
        "name": "Truck freight history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Truck freight history.",
        "description": "How Truck freight history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "truck-freight-history-practices",
        "name": "Truck freight history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Truck freight history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Truck freight history."
    },
    {
        "slug": "truck-freight-history-entry-1",
        "name": "Truck freight history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-2",
        "name": "Truck freight history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-3",
        "name": "Truck freight history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-4",
        "name": "Truck freight history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-5",
        "name": "Truck freight history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-6",
        "name": "Truck freight history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-7",
        "name": "Truck freight history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-8",
        "name": "Truck freight history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-9",
        "name": "Truck freight history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-10",
        "name": "Truck freight history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-11",
        "name": "Truck freight history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-12",
        "name": "Truck freight history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-13",
        "name": "Truck freight history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-14",
        "name": "Truck freight history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-15",
        "name": "Truck freight history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-16",
        "name": "Truck freight history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-17",
        "name": "Truck freight history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-18",
        "name": "Truck freight history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-19",
        "name": "Truck freight history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-20",
        "name": "Truck freight history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-21",
        "name": "Truck freight history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-22",
        "name": "Truck freight history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-23",
        "name": "Truck freight history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "truck-freight-history-entry-24",
        "name": "Truck freight history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Truck freight history.",
        "description": "A supporting encyclopedia entry in the Truck freight history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "truck-freight-history",
        "truck-freight-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "truck-freight-history",
        "truck-freight-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "truck-freight-history",
        "truck-freight-history-places",
        "contains",
        "Truck freight history places is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-events",
        "contains",
        "Truck freight history events is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-objects",
        "contains",
        "Truck freight history objects & artifacts is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-factions",
        "contains",
        "Truck freight history factions & groups is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-concepts",
        "contains",
        "Truck freight history concepts is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-eras",
        "contains",
        "Truck freight history eras is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-works",
        "contains",
        "Truck freight history works & media is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-symbols",
        "contains",
        "Truck freight history symbols is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-controversies",
        "contains",
        "Truck freight history controversies is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-sources",
        "contains",
        "Truck freight history sources is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-geography",
        "contains",
        "Truck freight history geography is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-legacy",
        "contains",
        "Truck freight history legacy is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-practices",
        "contains",
        "Truck freight history practices is a primary trailhead under Truck freight history.",
        0.88,
        0.82
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-1",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-2",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-3",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-4",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-5",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-6",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-7",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-8",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-9",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-10",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-11",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-12",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-13",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-14",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-15",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-16",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-17",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-18",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-19",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-20",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-21",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-22",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-23",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ],
    [
        "truck-freight-history",
        "truck-freight-history-entry-24",
        "contains",
        "Supporting entry under Truck freight history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
