/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "frankenstein-novel",
        "name": "Frankenstein",
        "type": "topic",
        "short_description": "Creature, creator, Arctic frame, and Shelley’s foundational science-horror novel.",
        "description": "Creature, creator, Arctic frame, and Shelley’s foundational science-horror novel. This Ton-o-Lore subject maps people, places, events, and ideas tied to Frankenstein so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "frankenstein-novel-figures",
        "name": "Frankenstein figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Frankenstein.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Frankenstein."
    },
    {
        "slug": "frankenstein-novel-world",
        "name": "Frankenstein world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Frankenstein.",
        "description": "Geography, institutions, and periodization that give Frankenstein its encyclopedia shape."
    },
    {
        "slug": "frankenstein-novel-places",
        "name": "Frankenstein places",
        "type": "place",
        "short_description": "Locations and geographies that frame Frankenstein.",
        "description": "Places, regions, and built sites that give Frankenstein its map — where events and figures concentrate."
    },
    {
        "slug": "frankenstein-novel-events",
        "name": "Frankenstein events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Frankenstein.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Frankenstein timeline."
    },
    {
        "slug": "frankenstein-novel-objects",
        "name": "Frankenstein objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Frankenstein.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Frankenstein."
    },
    {
        "slug": "frankenstein-novel-factions",
        "name": "Frankenstein factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Frankenstein.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Frankenstein."
    },
    {
        "slug": "frankenstein-novel-concepts",
        "name": "Frankenstein concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Frankenstein.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Frankenstein readable as a lore graph."
    },
    {
        "slug": "frankenstein-novel-eras",
        "name": "Frankenstein eras",
        "type": "event",
        "short_description": "Periodization for Frankenstein.",
        "description": "Named eras and phases that help readers track how Frankenstein changes across time."
    },
    {
        "slug": "frankenstein-novel-works",
        "name": "Frankenstein works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Frankenstein.",
        "description": "Primary works and adaptations through which most audiences encounter Frankenstein."
    },
    {
        "slug": "frankenstein-novel-symbols",
        "name": "Frankenstein symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Frankenstein.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Frankenstein."
    },
    {
        "slug": "frankenstein-novel-controversies",
        "name": "Frankenstein controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Frankenstein.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Frankenstein argumentative."
    },
    {
        "slug": "frankenstein-novel-sources",
        "name": "Frankenstein sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Frankenstein.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Frankenstein."
    },
    {
        "slug": "frankenstein-novel-geography",
        "name": "Frankenstein geography",
        "type": "place",
        "short_description": "Broader geographic framing for Frankenstein.",
        "description": "Regions, routes, and spatial systems that situate Frankenstein beyond single named places."
    },
    {
        "slug": "frankenstein-novel-legacy",
        "name": "Frankenstein legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Frankenstein.",
        "description": "How Frankenstein continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "frankenstein-novel-practices",
        "name": "Frankenstein practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Frankenstein.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Frankenstein."
    },
    {
        "slug": "frankenstein-novel-entry-1",
        "name": "Frankenstein entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-2",
        "name": "Frankenstein entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-3",
        "name": "Frankenstein entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-4",
        "name": "Frankenstein entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-5",
        "name": "Frankenstein entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-6",
        "name": "Frankenstein entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-7",
        "name": "Frankenstein entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-8",
        "name": "Frankenstein entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-9",
        "name": "Frankenstein entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-10",
        "name": "Frankenstein entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-11",
        "name": "Frankenstein entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-12",
        "name": "Frankenstein entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-13",
        "name": "Frankenstein entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-14",
        "name": "Frankenstein entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-15",
        "name": "Frankenstein entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-16",
        "name": "Frankenstein entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-17",
        "name": "Frankenstein entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-18",
        "name": "Frankenstein entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-19",
        "name": "Frankenstein entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-20",
        "name": "Frankenstein entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-21",
        "name": "Frankenstein entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-22",
        "name": "Frankenstein entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-23",
        "name": "Frankenstein entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "frankenstein-novel-entry-24",
        "name": "Frankenstein entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Frankenstein.",
        "description": "A supporting encyclopedia entry in the Frankenstein subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "frankenstein-novel",
        "frankenstein-novel-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-places",
        "contains",
        "Frankenstein places is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-events",
        "contains",
        "Frankenstein events is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-objects",
        "contains",
        "Frankenstein objects & artifacts is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-factions",
        "contains",
        "Frankenstein factions & groups is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-concepts",
        "contains",
        "Frankenstein concepts is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-eras",
        "contains",
        "Frankenstein eras is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-works",
        "contains",
        "Frankenstein works & media is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-symbols",
        "contains",
        "Frankenstein symbols is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-controversies",
        "contains",
        "Frankenstein controversies is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-sources",
        "contains",
        "Frankenstein sources is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-geography",
        "contains",
        "Frankenstein geography is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-legacy",
        "contains",
        "Frankenstein legacy is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-practices",
        "contains",
        "Frankenstein practices is a primary trailhead under Frankenstein.",
        0.88,
        0.82
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-1",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-2",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-3",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-4",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-5",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-6",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-7",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-8",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-9",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-10",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-11",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-12",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-13",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-14",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-15",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-16",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-17",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-18",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-19",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-20",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-21",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-22",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-23",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ],
    [
        "frankenstein-novel",
        "frankenstein-novel-entry-24",
        "contains",
        "Supporting entry under Frankenstein.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
