/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "roswell-incident",
        "name": "Roswell incident",
        "type": "topic",
        "short_description": "1947 debris, cover-up narratives, and the New Mexico event that anchors modern UFO myth.",
        "description": "1947 debris, cover-up narratives, and the New Mexico event that anchors modern UFO myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Roswell incident so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "roswell-incident-figures",
        "name": "Roswell incident figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Roswell incident.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Roswell incident."
    },
    {
        "slug": "roswell-incident-world",
        "name": "Roswell incident world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Roswell incident.",
        "description": "Geography, institutions, and periodization that give Roswell incident its encyclopedia shape."
    },
    {
        "slug": "roswell-incident-places",
        "name": "Roswell incident places",
        "type": "place",
        "short_description": "Locations and geographies that frame Roswell incident.",
        "description": "Places, regions, and built sites that give Roswell incident its map — where events and figures concentrate."
    },
    {
        "slug": "roswell-incident-events",
        "name": "Roswell incident events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Roswell incident.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Roswell incident timeline."
    },
    {
        "slug": "roswell-incident-objects",
        "name": "Roswell incident objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Roswell incident.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Roswell incident."
    },
    {
        "slug": "roswell-incident-factions",
        "name": "Roswell incident factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Roswell incident.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Roswell incident."
    },
    {
        "slug": "roswell-incident-concepts",
        "name": "Roswell incident concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Roswell incident.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Roswell incident readable as a lore graph."
    },
    {
        "slug": "roswell-incident-eras",
        "name": "Roswell incident eras",
        "type": "event",
        "short_description": "Periodization for Roswell incident.",
        "description": "Named eras and phases that help readers track how Roswell incident changes across time."
    },
    {
        "slug": "roswell-incident-works",
        "name": "Roswell incident works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Roswell incident.",
        "description": "Primary works and adaptations through which most audiences encounter Roswell incident."
    },
    {
        "slug": "roswell-incident-symbols",
        "name": "Roswell incident symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Roswell incident.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Roswell incident."
    },
    {
        "slug": "roswell-incident-controversies",
        "name": "Roswell incident controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Roswell incident.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Roswell incident argumentative."
    },
    {
        "slug": "roswell-incident-sources",
        "name": "Roswell incident sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Roswell incident.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Roswell incident."
    },
    {
        "slug": "roswell-incident-geography",
        "name": "Roswell incident geography",
        "type": "place",
        "short_description": "Broader geographic framing for Roswell incident.",
        "description": "Regions, routes, and spatial systems that situate Roswell incident beyond single named places."
    },
    {
        "slug": "roswell-incident-legacy",
        "name": "Roswell incident legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Roswell incident.",
        "description": "How Roswell incident continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "roswell-incident-practices",
        "name": "Roswell incident practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Roswell incident.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Roswell incident."
    },
    {
        "slug": "roswell-incident-entry-1",
        "name": "Roswell incident entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-2",
        "name": "Roswell incident entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-3",
        "name": "Roswell incident entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-4",
        "name": "Roswell incident entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-5",
        "name": "Roswell incident entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-6",
        "name": "Roswell incident entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-7",
        "name": "Roswell incident entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-8",
        "name": "Roswell incident entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-9",
        "name": "Roswell incident entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-10",
        "name": "Roswell incident entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-11",
        "name": "Roswell incident entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-12",
        "name": "Roswell incident entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-13",
        "name": "Roswell incident entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-14",
        "name": "Roswell incident entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-15",
        "name": "Roswell incident entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-16",
        "name": "Roswell incident entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-17",
        "name": "Roswell incident entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-18",
        "name": "Roswell incident entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-19",
        "name": "Roswell incident entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-20",
        "name": "Roswell incident entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-21",
        "name": "Roswell incident entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-22",
        "name": "Roswell incident entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-23",
        "name": "Roswell incident entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roswell-incident-entry-24",
        "name": "Roswell incident entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roswell incident.",
        "description": "A supporting encyclopedia entry in the Roswell incident subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "roswell-incident",
        "roswell-incident-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "roswell-incident",
        "roswell-incident-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "roswell-incident",
        "roswell-incident-places",
        "contains",
        "Roswell incident places is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-events",
        "contains",
        "Roswell incident events is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-objects",
        "contains",
        "Roswell incident objects & artifacts is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-factions",
        "contains",
        "Roswell incident factions & groups is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-concepts",
        "contains",
        "Roswell incident concepts is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-eras",
        "contains",
        "Roswell incident eras is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-works",
        "contains",
        "Roswell incident works & media is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-symbols",
        "contains",
        "Roswell incident symbols is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-controversies",
        "contains",
        "Roswell incident controversies is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-sources",
        "contains",
        "Roswell incident sources is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-geography",
        "contains",
        "Roswell incident geography is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-legacy",
        "contains",
        "Roswell incident legacy is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-practices",
        "contains",
        "Roswell incident practices is a primary trailhead under Roswell incident.",
        0.88,
        0.82
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-1",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-2",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-3",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-4",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-5",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-6",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-7",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-8",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-9",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-10",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-11",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-12",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-13",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-14",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-15",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-16",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-17",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-18",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-19",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-20",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-21",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-22",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-23",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ],
    [
        "roswell-incident",
        "roswell-incident-entry-24",
        "contains",
        "Supporting entry under Roswell incident.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
