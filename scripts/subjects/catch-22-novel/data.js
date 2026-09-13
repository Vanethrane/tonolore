/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "catch-22-novel",
        "name": "Catch-22",
        "type": "topic",
        "short_description": "Bureaucratic paradox, WWII satire, and the novel that named a no-win rule.",
        "description": "Bureaucratic paradox, WWII satire, and the novel that named a no-win rule. This Ton-o-Lore subject maps people, places, events, and ideas tied to Catch-22 so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "catch-22-novel-figures",
        "name": "Catch-22 figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Catch-22.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Catch-22."
    },
    {
        "slug": "catch-22-novel-world",
        "name": "Catch-22 world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Catch-22.",
        "description": "Geography, institutions, and periodization that give Catch-22 its encyclopedia shape."
    },
    {
        "slug": "catch-22-novel-places",
        "name": "Catch-22 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Catch-22.",
        "description": "Places, regions, and built sites that give Catch-22 its map — where events and figures concentrate."
    },
    {
        "slug": "catch-22-novel-events",
        "name": "Catch-22 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Catch-22.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Catch-22 timeline."
    },
    {
        "slug": "catch-22-novel-objects",
        "name": "Catch-22 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Catch-22.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Catch-22."
    },
    {
        "slug": "catch-22-novel-factions",
        "name": "Catch-22 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Catch-22.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Catch-22."
    },
    {
        "slug": "catch-22-novel-concepts",
        "name": "Catch-22 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Catch-22.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Catch-22 readable as a lore graph."
    },
    {
        "slug": "catch-22-novel-eras",
        "name": "Catch-22 eras",
        "type": "event",
        "short_description": "Periodization for Catch-22.",
        "description": "Named eras and phases that help readers track how Catch-22 changes across time."
    },
    {
        "slug": "catch-22-novel-works",
        "name": "Catch-22 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Catch-22.",
        "description": "Primary works and adaptations through which most audiences encounter Catch-22."
    },
    {
        "slug": "catch-22-novel-symbols",
        "name": "Catch-22 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Catch-22.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Catch-22."
    },
    {
        "slug": "catch-22-novel-controversies",
        "name": "Catch-22 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Catch-22.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Catch-22 argumentative."
    },
    {
        "slug": "catch-22-novel-sources",
        "name": "Catch-22 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Catch-22.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Catch-22."
    },
    {
        "slug": "catch-22-novel-geography",
        "name": "Catch-22 geography",
        "type": "place",
        "short_description": "Broader geographic framing for Catch-22.",
        "description": "Regions, routes, and spatial systems that situate Catch-22 beyond single named places."
    },
    {
        "slug": "catch-22-novel-legacy",
        "name": "Catch-22 legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Catch-22.",
        "description": "How Catch-22 continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "catch-22-novel-practices",
        "name": "Catch-22 practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Catch-22.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Catch-22."
    },
    {
        "slug": "catch-22-novel-entry-1",
        "name": "Catch-22 entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-2",
        "name": "Catch-22 entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-3",
        "name": "Catch-22 entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-4",
        "name": "Catch-22 entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-5",
        "name": "Catch-22 entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-6",
        "name": "Catch-22 entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-7",
        "name": "Catch-22 entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-8",
        "name": "Catch-22 entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-9",
        "name": "Catch-22 entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-10",
        "name": "Catch-22 entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-11",
        "name": "Catch-22 entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-12",
        "name": "Catch-22 entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-13",
        "name": "Catch-22 entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-14",
        "name": "Catch-22 entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-15",
        "name": "Catch-22 entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-16",
        "name": "Catch-22 entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-17",
        "name": "Catch-22 entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-18",
        "name": "Catch-22 entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-19",
        "name": "Catch-22 entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-20",
        "name": "Catch-22 entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-21",
        "name": "Catch-22 entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-22",
        "name": "Catch-22 entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-23",
        "name": "Catch-22 entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catch-22-novel-entry-24",
        "name": "Catch-22 entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catch-22.",
        "description": "A supporting encyclopedia entry in the Catch-22 subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "catch-22-novel",
        "catch-22-novel-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "catch-22-novel",
        "catch-22-novel-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "catch-22-novel",
        "catch-22-novel-places",
        "contains",
        "Catch-22 places is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-events",
        "contains",
        "Catch-22 events is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-objects",
        "contains",
        "Catch-22 objects & artifacts is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-factions",
        "contains",
        "Catch-22 factions & groups is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-concepts",
        "contains",
        "Catch-22 concepts is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-eras",
        "contains",
        "Catch-22 eras is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-works",
        "contains",
        "Catch-22 works & media is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-symbols",
        "contains",
        "Catch-22 symbols is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-controversies",
        "contains",
        "Catch-22 controversies is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-sources",
        "contains",
        "Catch-22 sources is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-geography",
        "contains",
        "Catch-22 geography is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-legacy",
        "contains",
        "Catch-22 legacy is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-practices",
        "contains",
        "Catch-22 practices is a primary trailhead under Catch-22.",
        0.88,
        0.82
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-1",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-2",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-3",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-4",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-5",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-6",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-7",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-8",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-9",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-10",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-11",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-12",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-13",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-14",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-15",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-16",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-17",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-18",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-19",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-20",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-21",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-22",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-23",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ],
    [
        "catch-22-novel",
        "catch-22-novel-entry-24",
        "contains",
        "Supporting entry under Catch-22.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
