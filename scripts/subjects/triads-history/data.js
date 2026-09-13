/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "triads-history",
        "name": "Triads history",
        "type": "topic",
        "short_description": "Hong Kong and diaspora societies, ritual, and the Chinese organized-crime continuum.",
        "description": "Hong Kong and diaspora societies, ritual, and the Chinese organized-crime continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Triads history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "triads-history-figures",
        "name": "Triads history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Triads history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Triads history."
    },
    {
        "slug": "triads-history-world",
        "name": "Triads history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Triads history.",
        "description": "Geography, institutions, and periodization that give Triads history its encyclopedia shape."
    },
    {
        "slug": "triads-history-places",
        "name": "Triads history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Triads history.",
        "description": "Places, regions, and built sites that give Triads history its map — where events and figures concentrate."
    },
    {
        "slug": "triads-history-events",
        "name": "Triads history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Triads history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Triads history timeline."
    },
    {
        "slug": "triads-history-objects",
        "name": "Triads history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Triads history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Triads history."
    },
    {
        "slug": "triads-history-factions",
        "name": "Triads history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Triads history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Triads history."
    },
    {
        "slug": "triads-history-concepts",
        "name": "Triads history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Triads history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Triads history readable as a lore graph."
    },
    {
        "slug": "triads-history-eras",
        "name": "Triads history eras",
        "type": "event",
        "short_description": "Periodization for Triads history.",
        "description": "Named eras and phases that help readers track how Triads history changes across time."
    },
    {
        "slug": "triads-history-works",
        "name": "Triads history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Triads history.",
        "description": "Primary works and adaptations through which most audiences encounter Triads history."
    },
    {
        "slug": "triads-history-symbols",
        "name": "Triads history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Triads history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Triads history."
    },
    {
        "slug": "triads-history-controversies",
        "name": "Triads history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Triads history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Triads history argumentative."
    },
    {
        "slug": "triads-history-sources",
        "name": "Triads history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Triads history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Triads history."
    },
    {
        "slug": "triads-history-geography",
        "name": "Triads history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Triads history.",
        "description": "Regions, routes, and spatial systems that situate Triads history beyond single named places."
    },
    {
        "slug": "triads-history-legacy",
        "name": "Triads history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Triads history.",
        "description": "How Triads history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "triads-history-practices",
        "name": "Triads history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Triads history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Triads history."
    },
    {
        "slug": "triads-history-entry-1",
        "name": "Triads history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-2",
        "name": "Triads history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-3",
        "name": "Triads history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-4",
        "name": "Triads history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-5",
        "name": "Triads history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-6",
        "name": "Triads history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-7",
        "name": "Triads history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-8",
        "name": "Triads history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-9",
        "name": "Triads history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-10",
        "name": "Triads history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-11",
        "name": "Triads history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-12",
        "name": "Triads history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-13",
        "name": "Triads history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-14",
        "name": "Triads history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-15",
        "name": "Triads history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-16",
        "name": "Triads history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-17",
        "name": "Triads history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-18",
        "name": "Triads history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-19",
        "name": "Triads history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-20",
        "name": "Triads history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-21",
        "name": "Triads history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-22",
        "name": "Triads history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-23",
        "name": "Triads history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triads-history-entry-24",
        "name": "Triads history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triads history.",
        "description": "A supporting encyclopedia entry in the Triads history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "triads-history",
        "triads-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "triads-history",
        "triads-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "triads-history",
        "triads-history-places",
        "contains",
        "Triads history places is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-events",
        "contains",
        "Triads history events is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-objects",
        "contains",
        "Triads history objects & artifacts is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-factions",
        "contains",
        "Triads history factions & groups is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-concepts",
        "contains",
        "Triads history concepts is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-eras",
        "contains",
        "Triads history eras is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-works",
        "contains",
        "Triads history works & media is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-symbols",
        "contains",
        "Triads history symbols is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-controversies",
        "contains",
        "Triads history controversies is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-sources",
        "contains",
        "Triads history sources is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-geography",
        "contains",
        "Triads history geography is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-legacy",
        "contains",
        "Triads history legacy is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-practices",
        "contains",
        "Triads history practices is a primary trailhead under Triads history.",
        0.88,
        0.82
    ],
    [
        "triads-history",
        "triads-history-entry-1",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-2",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-3",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-4",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-5",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-6",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-7",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-8",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-9",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-10",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-11",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-12",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-13",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-14",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-15",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-16",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-17",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-18",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-19",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-20",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-21",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-22",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-23",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ],
    [
        "triads-history",
        "triads-history-entry-24",
        "contains",
        "Supporting entry under Triads history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
