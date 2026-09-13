/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "phineas-and-ferb",
        "name": "Phineas and Ferb",
        "type": "topic",
        "short_description": "Summer invention gags, Doofenshmirtz schemes, and the musical suburban cartoon machine.",
        "description": "Summer invention gags, Doofenshmirtz schemes, and the musical suburban cartoon machine. This Ton-o-Lore subject maps people, places, events, and ideas tied to Phineas and Ferb so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "phineas-and-ferb-figures",
        "name": "Phineas and Ferb figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Phineas and Ferb.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-world",
        "name": "Phineas and Ferb world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Phineas and Ferb.",
        "description": "Geography, institutions, and periodization that give Phineas and Ferb its encyclopedia shape."
    },
    {
        "slug": "phineas-and-ferb-places",
        "name": "Phineas and Ferb places",
        "type": "place",
        "short_description": "Locations and geographies that frame Phineas and Ferb.",
        "description": "Places, regions, and built sites that give Phineas and Ferb its map — where events and figures concentrate."
    },
    {
        "slug": "phineas-and-ferb-events",
        "name": "Phineas and Ferb events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Phineas and Ferb.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Phineas and Ferb timeline."
    },
    {
        "slug": "phineas-and-ferb-objects",
        "name": "Phineas and Ferb objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Phineas and Ferb.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-factions",
        "name": "Phineas and Ferb factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Phineas and Ferb.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-concepts",
        "name": "Phineas and Ferb concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Phineas and Ferb.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Phineas and Ferb readable as a lore graph."
    },
    {
        "slug": "phineas-and-ferb-eras",
        "name": "Phineas and Ferb eras",
        "type": "event",
        "short_description": "Periodization for Phineas and Ferb.",
        "description": "Named eras and phases that help readers track how Phineas and Ferb changes across time."
    },
    {
        "slug": "phineas-and-ferb-works",
        "name": "Phineas and Ferb works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Phineas and Ferb.",
        "description": "Primary works and adaptations through which most audiences encounter Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-symbols",
        "name": "Phineas and Ferb symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Phineas and Ferb.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-controversies",
        "name": "Phineas and Ferb controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Phineas and Ferb.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Phineas and Ferb argumentative."
    },
    {
        "slug": "phineas-and-ferb-sources",
        "name": "Phineas and Ferb sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Phineas and Ferb.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-geography",
        "name": "Phineas and Ferb geography",
        "type": "place",
        "short_description": "Broader geographic framing for Phineas and Ferb.",
        "description": "Regions, routes, and spatial systems that situate Phineas and Ferb beyond single named places."
    },
    {
        "slug": "phineas-and-ferb-legacy",
        "name": "Phineas and Ferb legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Phineas and Ferb.",
        "description": "How Phineas and Ferb continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "phineas-and-ferb-practices",
        "name": "Phineas and Ferb practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Phineas and Ferb.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Phineas and Ferb."
    },
    {
        "slug": "phineas-and-ferb-entry-1",
        "name": "Phineas and Ferb entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-2",
        "name": "Phineas and Ferb entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-3",
        "name": "Phineas and Ferb entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-4",
        "name": "Phineas and Ferb entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-5",
        "name": "Phineas and Ferb entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-6",
        "name": "Phineas and Ferb entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-7",
        "name": "Phineas and Ferb entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-8",
        "name": "Phineas and Ferb entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-9",
        "name": "Phineas and Ferb entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-10",
        "name": "Phineas and Ferb entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-11",
        "name": "Phineas and Ferb entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-12",
        "name": "Phineas and Ferb entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-13",
        "name": "Phineas and Ferb entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-14",
        "name": "Phineas and Ferb entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-15",
        "name": "Phineas and Ferb entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-16",
        "name": "Phineas and Ferb entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-17",
        "name": "Phineas and Ferb entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-18",
        "name": "Phineas and Ferb entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-19",
        "name": "Phineas and Ferb entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-20",
        "name": "Phineas and Ferb entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-21",
        "name": "Phineas and Ferb entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-22",
        "name": "Phineas and Ferb entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-23",
        "name": "Phineas and Ferb entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phineas-and-ferb-entry-24",
        "name": "Phineas and Ferb entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phineas and Ferb.",
        "description": "A supporting encyclopedia entry in the Phineas and Ferb subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "phineas-and-ferb",
        "phineas-and-ferb-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-places",
        "contains",
        "Phineas and Ferb places is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-events",
        "contains",
        "Phineas and Ferb events is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-objects",
        "contains",
        "Phineas and Ferb objects & artifacts is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-factions",
        "contains",
        "Phineas and Ferb factions & groups is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-concepts",
        "contains",
        "Phineas and Ferb concepts is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-eras",
        "contains",
        "Phineas and Ferb eras is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-works",
        "contains",
        "Phineas and Ferb works & media is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-symbols",
        "contains",
        "Phineas and Ferb symbols is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-controversies",
        "contains",
        "Phineas and Ferb controversies is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-sources",
        "contains",
        "Phineas and Ferb sources is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-geography",
        "contains",
        "Phineas and Ferb geography is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-legacy",
        "contains",
        "Phineas and Ferb legacy is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-practices",
        "contains",
        "Phineas and Ferb practices is a primary trailhead under Phineas and Ferb.",
        0.88,
        0.82
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-1",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-2",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-3",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-4",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-5",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-6",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-7",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-8",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-9",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-10",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-11",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-12",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-13",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-14",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-15",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-16",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-17",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-18",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-19",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-20",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-21",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-22",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-23",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ],
    [
        "phineas-and-ferb",
        "phineas-and-ferb-entry-24",
        "contains",
        "Supporting entry under Phineas and Ferb.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
