/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "smuggling-history",
        "name": "Smuggling history",
        "type": "topic",
        "short_description": "Contraband routes, customs wars, and the shadow economies of borders.",
        "description": "Contraband routes, customs wars, and the shadow economies of borders. This Ton-o-Lore subject maps people, places, events, and ideas tied to Smuggling history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "smuggling-history-figures",
        "name": "Smuggling history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Smuggling history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Smuggling history."
    },
    {
        "slug": "smuggling-history-world",
        "name": "Smuggling history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Smuggling history.",
        "description": "Geography, institutions, and periodization that give Smuggling history its encyclopedia shape."
    },
    {
        "slug": "smuggling-history-places",
        "name": "Smuggling history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Smuggling history.",
        "description": "Places, regions, and built sites that give Smuggling history its map — where events and figures concentrate."
    },
    {
        "slug": "smuggling-history-events",
        "name": "Smuggling history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Smuggling history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Smuggling history timeline."
    },
    {
        "slug": "smuggling-history-objects",
        "name": "Smuggling history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Smuggling history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Smuggling history."
    },
    {
        "slug": "smuggling-history-factions",
        "name": "Smuggling history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Smuggling history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Smuggling history."
    },
    {
        "slug": "smuggling-history-concepts",
        "name": "Smuggling history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Smuggling history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Smuggling history readable as a lore graph."
    },
    {
        "slug": "smuggling-history-eras",
        "name": "Smuggling history eras",
        "type": "event",
        "short_description": "Periodization for Smuggling history.",
        "description": "Named eras and phases that help readers track how Smuggling history changes across time."
    },
    {
        "slug": "smuggling-history-works",
        "name": "Smuggling history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Smuggling history.",
        "description": "Primary works and adaptations through which most audiences encounter Smuggling history."
    },
    {
        "slug": "smuggling-history-symbols",
        "name": "Smuggling history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Smuggling history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Smuggling history."
    },
    {
        "slug": "smuggling-history-controversies",
        "name": "Smuggling history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Smuggling history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Smuggling history argumentative."
    },
    {
        "slug": "smuggling-history-sources",
        "name": "Smuggling history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Smuggling history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Smuggling history."
    },
    {
        "slug": "smuggling-history-geography",
        "name": "Smuggling history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Smuggling history.",
        "description": "Regions, routes, and spatial systems that situate Smuggling history beyond single named places."
    },
    {
        "slug": "smuggling-history-legacy",
        "name": "Smuggling history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Smuggling history.",
        "description": "How Smuggling history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "smuggling-history-practices",
        "name": "Smuggling history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Smuggling history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Smuggling history."
    },
    {
        "slug": "smuggling-history-entry-1",
        "name": "Smuggling history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-2",
        "name": "Smuggling history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-3",
        "name": "Smuggling history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-4",
        "name": "Smuggling history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-5",
        "name": "Smuggling history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-6",
        "name": "Smuggling history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-7",
        "name": "Smuggling history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-8",
        "name": "Smuggling history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-9",
        "name": "Smuggling history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-10",
        "name": "Smuggling history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-11",
        "name": "Smuggling history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-12",
        "name": "Smuggling history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-13",
        "name": "Smuggling history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-14",
        "name": "Smuggling history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-15",
        "name": "Smuggling history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-16",
        "name": "Smuggling history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-17",
        "name": "Smuggling history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-18",
        "name": "Smuggling history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-19",
        "name": "Smuggling history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-20",
        "name": "Smuggling history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-21",
        "name": "Smuggling history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-22",
        "name": "Smuggling history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-23",
        "name": "Smuggling history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smuggling-history-entry-24",
        "name": "Smuggling history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smuggling history.",
        "description": "A supporting encyclopedia entry in the Smuggling history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "smuggling-history",
        "smuggling-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "smuggling-history",
        "smuggling-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "smuggling-history",
        "smuggling-history-places",
        "contains",
        "Smuggling history places is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-events",
        "contains",
        "Smuggling history events is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-objects",
        "contains",
        "Smuggling history objects & artifacts is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-factions",
        "contains",
        "Smuggling history factions & groups is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-concepts",
        "contains",
        "Smuggling history concepts is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-eras",
        "contains",
        "Smuggling history eras is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-works",
        "contains",
        "Smuggling history works & media is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-symbols",
        "contains",
        "Smuggling history symbols is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-controversies",
        "contains",
        "Smuggling history controversies is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-sources",
        "contains",
        "Smuggling history sources is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-geography",
        "contains",
        "Smuggling history geography is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-legacy",
        "contains",
        "Smuggling history legacy is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-practices",
        "contains",
        "Smuggling history practices is a primary trailhead under Smuggling history.",
        0.88,
        0.82
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-1",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-2",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-3",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-4",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-5",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-6",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-7",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-8",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-9",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-10",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-11",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-12",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-13",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-14",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-15",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-16",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-17",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-18",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-19",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-20",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-21",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-22",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-23",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ],
    [
        "smuggling-history",
        "smuggling-history-entry-24",
        "contains",
        "Supporting entry under Smuggling history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
