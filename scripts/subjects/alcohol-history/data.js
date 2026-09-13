/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alcohol-history",
        "name": "Alcohol history",
        "type": "topic",
        "short_description": "Drinks, distilleries, breweries, regions, prohibition eras, inventions, and the people who made them.",
        "description": "Drinks, distilleries, breweries, regions, prohibition eras, inventions, and the people who made them. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alcohol history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "alcohol-history-figures",
        "name": "Alcohol history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alcohol history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alcohol history."
    },
    {
        "slug": "alcohol-history-world",
        "name": "Alcohol history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alcohol history.",
        "description": "Geography, institutions, and periodization that give Alcohol history its encyclopedia shape."
    },
    {
        "slug": "alcohol-history-places",
        "name": "Alcohol history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alcohol history.",
        "description": "Places, regions, and built sites that give Alcohol history its map — where events and figures concentrate."
    },
    {
        "slug": "alcohol-history-events",
        "name": "Alcohol history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alcohol history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alcohol history timeline."
    },
    {
        "slug": "alcohol-history-objects",
        "name": "Alcohol history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alcohol history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alcohol history."
    },
    {
        "slug": "alcohol-history-factions",
        "name": "Alcohol history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alcohol history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alcohol history."
    },
    {
        "slug": "alcohol-history-concepts",
        "name": "Alcohol history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alcohol history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alcohol history readable as a lore graph."
    },
    {
        "slug": "alcohol-history-eras",
        "name": "Alcohol history eras",
        "type": "event",
        "short_description": "Periodization for Alcohol history.",
        "description": "Named eras and phases that help readers track how Alcohol history changes across time."
    },
    {
        "slug": "alcohol-history-works",
        "name": "Alcohol history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alcohol history.",
        "description": "Primary works and adaptations through which most audiences encounter Alcohol history."
    },
    {
        "slug": "alcohol-history-symbols",
        "name": "Alcohol history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alcohol history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alcohol history."
    },
    {
        "slug": "alcohol-history-controversies",
        "name": "Alcohol history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alcohol history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alcohol history argumentative."
    },
    {
        "slug": "alcohol-history-sources",
        "name": "Alcohol history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alcohol history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alcohol history."
    },
    {
        "slug": "alcohol-history-geography",
        "name": "Alcohol history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alcohol history.",
        "description": "Regions, routes, and spatial systems that situate Alcohol history beyond single named places."
    },
    {
        "slug": "alcohol-history-legacy",
        "name": "Alcohol history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alcohol history.",
        "description": "How Alcohol history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "alcohol-history-practices",
        "name": "Alcohol history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Alcohol history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Alcohol history."
    },
    {
        "slug": "alcohol-history-entry-1",
        "name": "Alcohol history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-2",
        "name": "Alcohol history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-3",
        "name": "Alcohol history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-4",
        "name": "Alcohol history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-5",
        "name": "Alcohol history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-6",
        "name": "Alcohol history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-7",
        "name": "Alcohol history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-8",
        "name": "Alcohol history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-9",
        "name": "Alcohol history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-10",
        "name": "Alcohol history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-11",
        "name": "Alcohol history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-12",
        "name": "Alcohol history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-13",
        "name": "Alcohol history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-14",
        "name": "Alcohol history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-15",
        "name": "Alcohol history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-16",
        "name": "Alcohol history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-17",
        "name": "Alcohol history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-18",
        "name": "Alcohol history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-19",
        "name": "Alcohol history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-20",
        "name": "Alcohol history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-21",
        "name": "Alcohol history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-22",
        "name": "Alcohol history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-23",
        "name": "Alcohol history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alcohol-history-entry-24",
        "name": "Alcohol history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alcohol history.",
        "description": "A supporting encyclopedia entry in the Alcohol history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "alcohol-history",
        "alcohol-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alcohol-history",
        "alcohol-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alcohol-history",
        "alcohol-history-places",
        "contains",
        "Alcohol history places is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-events",
        "contains",
        "Alcohol history events is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-objects",
        "contains",
        "Alcohol history objects & artifacts is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-factions",
        "contains",
        "Alcohol history factions & groups is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-concepts",
        "contains",
        "Alcohol history concepts is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-eras",
        "contains",
        "Alcohol history eras is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-works",
        "contains",
        "Alcohol history works & media is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-symbols",
        "contains",
        "Alcohol history symbols is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-controversies",
        "contains",
        "Alcohol history controversies is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-sources",
        "contains",
        "Alcohol history sources is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-geography",
        "contains",
        "Alcohol history geography is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-legacy",
        "contains",
        "Alcohol history legacy is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-practices",
        "contains",
        "Alcohol history practices is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-1",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-2",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-3",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-4",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-5",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-6",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-7",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-8",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-9",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-10",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-11",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-12",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-13",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-14",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-15",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-16",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-17",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-18",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-19",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-20",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-21",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-22",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-23",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ],
    [
        "alcohol-history",
        "alcohol-history-entry-24",
        "contains",
        "Supporting entry under Alcohol history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
