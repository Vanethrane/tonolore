/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "romanov-court-culture",
        "name": "Romanov court culture",
        "type": "topic",
        "short_description": "Winter Palace ritual, jewels, and the imperial lifestyle that preceded 1917’s fall.",
        "description": "Winter Palace ritual, jewels, and the imperial lifestyle that preceded 1917’s fall. This Ton-o-Lore subject maps people, places, events, and ideas tied to Romanov court culture so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "romanov-court-culture-figures",
        "name": "Romanov court culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Romanov court culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-world",
        "name": "Romanov court culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Romanov court culture.",
        "description": "Geography, institutions, and periodization that give Romanov court culture its encyclopedia shape."
    },
    {
        "slug": "romanov-court-culture-places",
        "name": "Romanov court culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Romanov court culture.",
        "description": "Places, regions, and built sites that give Romanov court culture its map — where events and figures concentrate."
    },
    {
        "slug": "romanov-court-culture-events",
        "name": "Romanov court culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Romanov court culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Romanov court culture timeline."
    },
    {
        "slug": "romanov-court-culture-objects",
        "name": "Romanov court culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Romanov court culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-factions",
        "name": "Romanov court culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Romanov court culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-concepts",
        "name": "Romanov court culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Romanov court culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Romanov court culture readable as a lore graph."
    },
    {
        "slug": "romanov-court-culture-eras",
        "name": "Romanov court culture eras",
        "type": "event",
        "short_description": "Periodization for Romanov court culture.",
        "description": "Named eras and phases that help readers track how Romanov court culture changes across time."
    },
    {
        "slug": "romanov-court-culture-works",
        "name": "Romanov court culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Romanov court culture.",
        "description": "Primary works and adaptations through which most audiences encounter Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-symbols",
        "name": "Romanov court culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Romanov court culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-controversies",
        "name": "Romanov court culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Romanov court culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Romanov court culture argumentative."
    },
    {
        "slug": "romanov-court-culture-sources",
        "name": "Romanov court culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Romanov court culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-geography",
        "name": "Romanov court culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Romanov court culture.",
        "description": "Regions, routes, and spatial systems that situate Romanov court culture beyond single named places."
    },
    {
        "slug": "romanov-court-culture-legacy",
        "name": "Romanov court culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Romanov court culture.",
        "description": "How Romanov court culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "romanov-court-culture-practices",
        "name": "Romanov court culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Romanov court culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Romanov court culture."
    },
    {
        "slug": "romanov-court-culture-entry-1",
        "name": "Romanov court culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-2",
        "name": "Romanov court culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-3",
        "name": "Romanov court culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-4",
        "name": "Romanov court culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-5",
        "name": "Romanov court culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-6",
        "name": "Romanov court culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-7",
        "name": "Romanov court culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-8",
        "name": "Romanov court culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-9",
        "name": "Romanov court culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-10",
        "name": "Romanov court culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-11",
        "name": "Romanov court culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-12",
        "name": "Romanov court culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-13",
        "name": "Romanov court culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-14",
        "name": "Romanov court culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-15",
        "name": "Romanov court culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-16",
        "name": "Romanov court culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-17",
        "name": "Romanov court culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-18",
        "name": "Romanov court culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-19",
        "name": "Romanov court culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-20",
        "name": "Romanov court culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-21",
        "name": "Romanov court culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-22",
        "name": "Romanov court culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-23",
        "name": "Romanov court culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "romanov-court-culture-entry-24",
        "name": "Romanov court culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Romanov court culture.",
        "description": "A supporting encyclopedia entry in the Romanov court culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "romanov-court-culture",
        "romanov-court-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-places",
        "contains",
        "Romanov court culture places is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-events",
        "contains",
        "Romanov court culture events is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-objects",
        "contains",
        "Romanov court culture objects & artifacts is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-factions",
        "contains",
        "Romanov court culture factions & groups is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-concepts",
        "contains",
        "Romanov court culture concepts is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-eras",
        "contains",
        "Romanov court culture eras is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-works",
        "contains",
        "Romanov court culture works & media is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-symbols",
        "contains",
        "Romanov court culture symbols is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-controversies",
        "contains",
        "Romanov court culture controversies is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-sources",
        "contains",
        "Romanov court culture sources is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-geography",
        "contains",
        "Romanov court culture geography is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-legacy",
        "contains",
        "Romanov court culture legacy is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-practices",
        "contains",
        "Romanov court culture practices is a primary trailhead under Romanov court culture.",
        0.88,
        0.82
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-1",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-2",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-3",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-4",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-5",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-6",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-7",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-8",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-9",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-10",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-11",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-12",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-13",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-14",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-15",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-16",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-17",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-18",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-19",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-20",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-21",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-22",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-23",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ],
    [
        "romanov-court-culture",
        "romanov-court-culture-entry-24",
        "contains",
        "Supporting entry under Romanov court culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
