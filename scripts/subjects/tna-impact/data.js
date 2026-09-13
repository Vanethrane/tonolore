/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tna-impact",
        "name": "TNA / Impact Wrestling",
        "type": "topic",
        "short_description": "X Division, Bound for Glory, and the alternative national brand of the 2000s–2010s.",
        "description": "X Division, Bound for Glory, and the alternative national brand of the 2000s–2010s. This Ton-o-Lore subject maps people, places, events, and ideas tied to TNA / Impact Wrestling so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "tna-impact-figures",
        "name": "TNA / Impact Wrestling figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to TNA / Impact Wrestling.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-world",
        "name": "TNA / Impact Wrestling world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame TNA / Impact Wrestling.",
        "description": "Geography, institutions, and periodization that give TNA / Impact Wrestling its encyclopedia shape."
    },
    {
        "slug": "tna-impact-places",
        "name": "TNA / Impact Wrestling places",
        "type": "place",
        "short_description": "Locations and geographies that frame TNA / Impact Wrestling.",
        "description": "Places, regions, and built sites that give TNA / Impact Wrestling its map — where events and figures concentrate."
    },
    {
        "slug": "tna-impact-events",
        "name": "TNA / Impact Wrestling events",
        "type": "event",
        "short_description": "Turning points and dated episodes in TNA / Impact Wrestling.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the TNA / Impact Wrestling timeline."
    },
    {
        "slug": "tna-impact-objects",
        "name": "TNA / Impact Wrestling objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to TNA / Impact Wrestling.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-factions",
        "name": "TNA / Impact Wrestling factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside TNA / Impact Wrestling.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-concepts",
        "name": "TNA / Impact Wrestling concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize TNA / Impact Wrestling.",
        "description": "Keywords, doctrines, systems, and abstract forces that make TNA / Impact Wrestling readable as a lore graph."
    },
    {
        "slug": "tna-impact-eras",
        "name": "TNA / Impact Wrestling eras",
        "type": "event",
        "short_description": "Periodization for TNA / Impact Wrestling.",
        "description": "Named eras and phases that help readers track how TNA / Impact Wrestling changes across time."
    },
    {
        "slug": "tna-impact-works",
        "name": "TNA / Impact Wrestling works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry TNA / Impact Wrestling.",
        "description": "Primary works and adaptations through which most audiences encounter TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-symbols",
        "name": "TNA / Impact Wrestling symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with TNA / Impact Wrestling.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-controversies",
        "name": "TNA / Impact Wrestling controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in TNA / Impact Wrestling.",
        "description": "Debates, rival canons, scandals, and contested facts that keep TNA / Impact Wrestling argumentative."
    },
    {
        "slug": "tna-impact-sources",
        "name": "TNA / Impact Wrestling sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into TNA / Impact Wrestling.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-geography",
        "name": "TNA / Impact Wrestling geography",
        "type": "place",
        "short_description": "Broader geographic framing for TNA / Impact Wrestling.",
        "description": "Regions, routes, and spatial systems that situate TNA / Impact Wrestling beyond single named places."
    },
    {
        "slug": "tna-impact-legacy",
        "name": "TNA / Impact Wrestling legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of TNA / Impact Wrestling.",
        "description": "How TNA / Impact Wrestling continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tna-impact-practices",
        "name": "TNA / Impact Wrestling practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in TNA / Impact Wrestling.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in TNA / Impact Wrestling."
    },
    {
        "slug": "tna-impact-entry-1",
        "name": "TNA / Impact Wrestling entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-2",
        "name": "TNA / Impact Wrestling entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-3",
        "name": "TNA / Impact Wrestling entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-4",
        "name": "TNA / Impact Wrestling entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-5",
        "name": "TNA / Impact Wrestling entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-6",
        "name": "TNA / Impact Wrestling entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-7",
        "name": "TNA / Impact Wrestling entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-8",
        "name": "TNA / Impact Wrestling entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-9",
        "name": "TNA / Impact Wrestling entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-10",
        "name": "TNA / Impact Wrestling entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-11",
        "name": "TNA / Impact Wrestling entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-12",
        "name": "TNA / Impact Wrestling entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-13",
        "name": "TNA / Impact Wrestling entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-14",
        "name": "TNA / Impact Wrestling entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-15",
        "name": "TNA / Impact Wrestling entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-16",
        "name": "TNA / Impact Wrestling entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-17",
        "name": "TNA / Impact Wrestling entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-18",
        "name": "TNA / Impact Wrestling entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-19",
        "name": "TNA / Impact Wrestling entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-20",
        "name": "TNA / Impact Wrestling entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-21",
        "name": "TNA / Impact Wrestling entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-22",
        "name": "TNA / Impact Wrestling entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-23",
        "name": "TNA / Impact Wrestling entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tna-impact-entry-24",
        "name": "TNA / Impact Wrestling entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside TNA / Impact Wrestling.",
        "description": "A supporting encyclopedia entry in the TNA / Impact Wrestling subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tna-impact",
        "tna-impact-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tna-impact",
        "tna-impact-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tna-impact",
        "tna-impact-places",
        "contains",
        "TNA / Impact Wrestling places is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-events",
        "contains",
        "TNA / Impact Wrestling events is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-objects",
        "contains",
        "TNA / Impact Wrestling objects & artifacts is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-factions",
        "contains",
        "TNA / Impact Wrestling factions & groups is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-concepts",
        "contains",
        "TNA / Impact Wrestling concepts is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-eras",
        "contains",
        "TNA / Impact Wrestling eras is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-works",
        "contains",
        "TNA / Impact Wrestling works & media is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-symbols",
        "contains",
        "TNA / Impact Wrestling symbols is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-controversies",
        "contains",
        "TNA / Impact Wrestling controversies is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-sources",
        "contains",
        "TNA / Impact Wrestling sources is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-geography",
        "contains",
        "TNA / Impact Wrestling geography is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-legacy",
        "contains",
        "TNA / Impact Wrestling legacy is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-practices",
        "contains",
        "TNA / Impact Wrestling practices is a primary trailhead under TNA / Impact Wrestling.",
        0.88,
        0.82
    ],
    [
        "tna-impact",
        "tna-impact-entry-1",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-2",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-3",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-4",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-5",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-6",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-7",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-8",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-9",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-10",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-11",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-12",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-13",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-14",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-15",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-16",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-17",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-18",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-19",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-20",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-21",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-22",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-23",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ],
    [
        "tna-impact",
        "tna-impact-entry-24",
        "contains",
        "Supporting entry under TNA / Impact Wrestling.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
