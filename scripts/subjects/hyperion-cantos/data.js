/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hyperion-cantos",
        "name": "Hyperion Cantos",
        "type": "topic",
        "short_description": "Shrike, Time Tombs, and the Canterbury-Tales-in-space epic of Simmons’ far future.",
        "description": "Shrike, Time Tombs, and the Canterbury-Tales-in-space epic of Simmons’ far future. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hyperion Cantos so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "hyperion-cantos-figures",
        "name": "Hyperion Cantos figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hyperion Cantos.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-world",
        "name": "Hyperion Cantos world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hyperion Cantos.",
        "description": "Geography, institutions, and periodization that give Hyperion Cantos its encyclopedia shape."
    },
    {
        "slug": "hyperion-cantos-places",
        "name": "Hyperion Cantos places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hyperion Cantos.",
        "description": "Places, regions, and built sites that give Hyperion Cantos its map — where events and figures concentrate."
    },
    {
        "slug": "hyperion-cantos-events",
        "name": "Hyperion Cantos events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hyperion Cantos.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hyperion Cantos timeline."
    },
    {
        "slug": "hyperion-cantos-objects",
        "name": "Hyperion Cantos objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hyperion Cantos.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-factions",
        "name": "Hyperion Cantos factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hyperion Cantos.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-concepts",
        "name": "Hyperion Cantos concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hyperion Cantos.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hyperion Cantos readable as a lore graph."
    },
    {
        "slug": "hyperion-cantos-eras",
        "name": "Hyperion Cantos eras",
        "type": "event",
        "short_description": "Periodization for Hyperion Cantos.",
        "description": "Named eras and phases that help readers track how Hyperion Cantos changes across time."
    },
    {
        "slug": "hyperion-cantos-works",
        "name": "Hyperion Cantos works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hyperion Cantos.",
        "description": "Primary works and adaptations through which most audiences encounter Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-symbols",
        "name": "Hyperion Cantos symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hyperion Cantos.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-controversies",
        "name": "Hyperion Cantos controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hyperion Cantos.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hyperion Cantos argumentative."
    },
    {
        "slug": "hyperion-cantos-sources",
        "name": "Hyperion Cantos sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hyperion Cantos.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-geography",
        "name": "Hyperion Cantos geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hyperion Cantos.",
        "description": "Regions, routes, and spatial systems that situate Hyperion Cantos beyond single named places."
    },
    {
        "slug": "hyperion-cantos-legacy",
        "name": "Hyperion Cantos legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hyperion Cantos.",
        "description": "How Hyperion Cantos continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hyperion-cantos-practices",
        "name": "Hyperion Cantos practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hyperion Cantos.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hyperion Cantos."
    },
    {
        "slug": "hyperion-cantos-entry-1",
        "name": "Hyperion Cantos entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-2",
        "name": "Hyperion Cantos entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-3",
        "name": "Hyperion Cantos entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-4",
        "name": "Hyperion Cantos entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-5",
        "name": "Hyperion Cantos entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-6",
        "name": "Hyperion Cantos entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-7",
        "name": "Hyperion Cantos entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-8",
        "name": "Hyperion Cantos entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-9",
        "name": "Hyperion Cantos entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-10",
        "name": "Hyperion Cantos entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-11",
        "name": "Hyperion Cantos entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-12",
        "name": "Hyperion Cantos entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-13",
        "name": "Hyperion Cantos entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-14",
        "name": "Hyperion Cantos entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-15",
        "name": "Hyperion Cantos entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-16",
        "name": "Hyperion Cantos entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-17",
        "name": "Hyperion Cantos entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-18",
        "name": "Hyperion Cantos entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-19",
        "name": "Hyperion Cantos entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-20",
        "name": "Hyperion Cantos entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-21",
        "name": "Hyperion Cantos entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-22",
        "name": "Hyperion Cantos entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-23",
        "name": "Hyperion Cantos entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperion-cantos-entry-24",
        "name": "Hyperion Cantos entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperion Cantos.",
        "description": "A supporting encyclopedia entry in the Hyperion Cantos subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hyperion-cantos",
        "hyperion-cantos-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-places",
        "contains",
        "Hyperion Cantos places is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-events",
        "contains",
        "Hyperion Cantos events is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-objects",
        "contains",
        "Hyperion Cantos objects & artifacts is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-factions",
        "contains",
        "Hyperion Cantos factions & groups is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-concepts",
        "contains",
        "Hyperion Cantos concepts is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-eras",
        "contains",
        "Hyperion Cantos eras is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-works",
        "contains",
        "Hyperion Cantos works & media is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-symbols",
        "contains",
        "Hyperion Cantos symbols is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-controversies",
        "contains",
        "Hyperion Cantos controversies is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-sources",
        "contains",
        "Hyperion Cantos sources is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-geography",
        "contains",
        "Hyperion Cantos geography is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-legacy",
        "contains",
        "Hyperion Cantos legacy is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-practices",
        "contains",
        "Hyperion Cantos practices is a primary trailhead under Hyperion Cantos.",
        0.88,
        0.82
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-1",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-2",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-3",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-4",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-5",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-6",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-7",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-8",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-9",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-10",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-11",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-12",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-13",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-14",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-15",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-16",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-17",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-18",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-19",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-20",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-21",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-22",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-23",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ],
    [
        "hyperion-cantos",
        "hyperion-cantos-entry-24",
        "contains",
        "Supporting entry under Hyperion Cantos.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
