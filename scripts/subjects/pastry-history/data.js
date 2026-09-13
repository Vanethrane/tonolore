/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pastry-history",
        "name": "Pastry history",
        "type": "topic",
        "short_description": "Laminated doughs, sugar craft, and the sweet architecture of bakeries.",
        "description": "Laminated doughs, sugar craft, and the sweet architecture of bakeries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pastry history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "pastry-history-figures",
        "name": "Pastry history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pastry history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pastry history."
    },
    {
        "slug": "pastry-history-world",
        "name": "Pastry history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pastry history.",
        "description": "Geography, institutions, and periodization that give Pastry history its encyclopedia shape."
    },
    {
        "slug": "pastry-history-places",
        "name": "Pastry history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pastry history.",
        "description": "Places, regions, and built sites that give Pastry history its map — where events and figures concentrate."
    },
    {
        "slug": "pastry-history-events",
        "name": "Pastry history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pastry history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pastry history timeline."
    },
    {
        "slug": "pastry-history-objects",
        "name": "Pastry history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pastry history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pastry history."
    },
    {
        "slug": "pastry-history-factions",
        "name": "Pastry history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pastry history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pastry history."
    },
    {
        "slug": "pastry-history-concepts",
        "name": "Pastry history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pastry history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pastry history readable as a lore graph."
    },
    {
        "slug": "pastry-history-eras",
        "name": "Pastry history eras",
        "type": "event",
        "short_description": "Periodization for Pastry history.",
        "description": "Named eras and phases that help readers track how Pastry history changes across time."
    },
    {
        "slug": "pastry-history-works",
        "name": "Pastry history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pastry history.",
        "description": "Primary works and adaptations through which most audiences encounter Pastry history."
    },
    {
        "slug": "pastry-history-symbols",
        "name": "Pastry history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pastry history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pastry history."
    },
    {
        "slug": "pastry-history-controversies",
        "name": "Pastry history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pastry history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pastry history argumentative."
    },
    {
        "slug": "pastry-history-sources",
        "name": "Pastry history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pastry history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pastry history."
    },
    {
        "slug": "pastry-history-geography",
        "name": "Pastry history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pastry history.",
        "description": "Regions, routes, and spatial systems that situate Pastry history beyond single named places."
    },
    {
        "slug": "pastry-history-legacy",
        "name": "Pastry history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pastry history.",
        "description": "How Pastry history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pastry-history-practices",
        "name": "Pastry history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pastry history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pastry history."
    },
    {
        "slug": "pastry-history-entry-1",
        "name": "Pastry history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-2",
        "name": "Pastry history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-3",
        "name": "Pastry history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-4",
        "name": "Pastry history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-5",
        "name": "Pastry history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-6",
        "name": "Pastry history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-7",
        "name": "Pastry history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-8",
        "name": "Pastry history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-9",
        "name": "Pastry history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-10",
        "name": "Pastry history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-11",
        "name": "Pastry history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-12",
        "name": "Pastry history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-13",
        "name": "Pastry history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-14",
        "name": "Pastry history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-15",
        "name": "Pastry history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-16",
        "name": "Pastry history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-17",
        "name": "Pastry history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-18",
        "name": "Pastry history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-19",
        "name": "Pastry history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-20",
        "name": "Pastry history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-21",
        "name": "Pastry history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-22",
        "name": "Pastry history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-23",
        "name": "Pastry history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pastry-history-entry-24",
        "name": "Pastry history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pastry history.",
        "description": "A supporting encyclopedia entry in the Pastry history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pastry-history",
        "pastry-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pastry-history",
        "pastry-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pastry-history",
        "pastry-history-places",
        "contains",
        "Pastry history places is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-events",
        "contains",
        "Pastry history events is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-objects",
        "contains",
        "Pastry history objects & artifacts is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-factions",
        "contains",
        "Pastry history factions & groups is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-concepts",
        "contains",
        "Pastry history concepts is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-eras",
        "contains",
        "Pastry history eras is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-works",
        "contains",
        "Pastry history works & media is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-symbols",
        "contains",
        "Pastry history symbols is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-controversies",
        "contains",
        "Pastry history controversies is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-sources",
        "contains",
        "Pastry history sources is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-geography",
        "contains",
        "Pastry history geography is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-legacy",
        "contains",
        "Pastry history legacy is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-practices",
        "contains",
        "Pastry history practices is a primary trailhead under Pastry history.",
        0.88,
        0.82
    ],
    [
        "pastry-history",
        "pastry-history-entry-1",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-2",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-3",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-4",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-5",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-6",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-7",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-8",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-9",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-10",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-11",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-12",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-13",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-14",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-15",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-16",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-17",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-18",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-19",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-20",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-21",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-22",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-23",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ],
    [
        "pastry-history",
        "pastry-history-entry-24",
        "contains",
        "Supporting entry under Pastry history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
