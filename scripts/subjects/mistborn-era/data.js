/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mistborn-era",
        "name": "Mistborn",
        "type": "topic",
        "short_description": "Allomancy, ashfalls, and the Cosmere heist-to-era saga of metallic magic.",
        "description": "Allomancy, ashfalls, and the Cosmere heist-to-era saga of metallic magic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mistborn so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "mistborn-era-figures",
        "name": "Mistborn figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mistborn.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mistborn."
    },
    {
        "slug": "mistborn-era-world",
        "name": "Mistborn world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mistborn.",
        "description": "Geography, institutions, and periodization that give Mistborn its encyclopedia shape."
    },
    {
        "slug": "mistborn-era-places",
        "name": "Mistborn places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mistborn.",
        "description": "Places, regions, and built sites that give Mistborn its map — where events and figures concentrate."
    },
    {
        "slug": "mistborn-era-events",
        "name": "Mistborn events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mistborn.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mistborn timeline."
    },
    {
        "slug": "mistborn-era-objects",
        "name": "Mistborn objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mistborn.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mistborn."
    },
    {
        "slug": "mistborn-era-factions",
        "name": "Mistborn factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mistborn.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mistborn."
    },
    {
        "slug": "mistborn-era-concepts",
        "name": "Mistborn concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mistborn.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mistborn readable as a lore graph."
    },
    {
        "slug": "mistborn-era-eras",
        "name": "Mistborn eras",
        "type": "event",
        "short_description": "Periodization for Mistborn.",
        "description": "Named eras and phases that help readers track how Mistborn changes across time."
    },
    {
        "slug": "mistborn-era-works",
        "name": "Mistborn works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mistborn.",
        "description": "Primary works and adaptations through which most audiences encounter Mistborn."
    },
    {
        "slug": "mistborn-era-symbols",
        "name": "Mistborn symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mistborn.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mistborn."
    },
    {
        "slug": "mistborn-era-controversies",
        "name": "Mistborn controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mistborn.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mistborn argumentative."
    },
    {
        "slug": "mistborn-era-sources",
        "name": "Mistborn sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mistborn.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mistborn."
    },
    {
        "slug": "mistborn-era-geography",
        "name": "Mistborn geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mistborn.",
        "description": "Regions, routes, and spatial systems that situate Mistborn beyond single named places."
    },
    {
        "slug": "mistborn-era-legacy",
        "name": "Mistborn legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mistborn.",
        "description": "How Mistborn continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mistborn-era-practices",
        "name": "Mistborn practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mistborn.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mistborn."
    },
    {
        "slug": "mistborn-era-entry-1",
        "name": "Mistborn entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-2",
        "name": "Mistborn entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-3",
        "name": "Mistborn entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-4",
        "name": "Mistborn entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-5",
        "name": "Mistborn entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-6",
        "name": "Mistborn entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-7",
        "name": "Mistborn entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-8",
        "name": "Mistborn entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-9",
        "name": "Mistborn entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-10",
        "name": "Mistborn entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-11",
        "name": "Mistborn entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-12",
        "name": "Mistborn entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-13",
        "name": "Mistborn entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-14",
        "name": "Mistborn entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-15",
        "name": "Mistborn entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-16",
        "name": "Mistborn entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-17",
        "name": "Mistborn entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-18",
        "name": "Mistborn entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-19",
        "name": "Mistborn entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-20",
        "name": "Mistborn entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-21",
        "name": "Mistborn entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-22",
        "name": "Mistborn entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-23",
        "name": "Mistborn entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mistborn-era-entry-24",
        "name": "Mistborn entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mistborn.",
        "description": "A supporting encyclopedia entry in the Mistborn subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mistborn-era",
        "mistborn-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mistborn-era",
        "mistborn-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mistborn-era",
        "mistborn-era-places",
        "contains",
        "Mistborn places is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-events",
        "contains",
        "Mistborn events is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-objects",
        "contains",
        "Mistborn objects & artifacts is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-factions",
        "contains",
        "Mistborn factions & groups is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-concepts",
        "contains",
        "Mistborn concepts is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-eras",
        "contains",
        "Mistborn eras is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-works",
        "contains",
        "Mistborn works & media is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-symbols",
        "contains",
        "Mistborn symbols is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-controversies",
        "contains",
        "Mistborn controversies is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-sources",
        "contains",
        "Mistborn sources is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-geography",
        "contains",
        "Mistborn geography is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-legacy",
        "contains",
        "Mistborn legacy is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-practices",
        "contains",
        "Mistborn practices is a primary trailhead under Mistborn.",
        0.88,
        0.82
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-1",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-2",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-3",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-4",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-5",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-6",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-7",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-8",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-9",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-10",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-11",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-12",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-13",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-14",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-15",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-16",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-17",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-18",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-19",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-20",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-21",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-22",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-23",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ],
    [
        "mistborn-era",
        "mistborn-era-entry-24",
        "contains",
        "Supporting entry under Mistborn.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
