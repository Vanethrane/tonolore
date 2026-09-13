/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "neon-genesis-evangelion",
        "name": "Neon Genesis Evangelion",
        "type": "topic",
        "short_description": "EVA units, Instrumentality, and the mecha deconstruction that remade anime psychology.",
        "description": "EVA units, Instrumentality, and the mecha deconstruction that remade anime psychology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Neon Genesis Evangelion so readers can follow long-tail connections across anime."
    },
    {
        "slug": "neon-genesis-evangelion-figures",
        "name": "Neon Genesis Evangelion figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Neon Genesis Evangelion.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-world",
        "name": "Neon Genesis Evangelion world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Neon Genesis Evangelion.",
        "description": "Geography, institutions, and periodization that give Neon Genesis Evangelion its encyclopedia shape."
    },
    {
        "slug": "neon-genesis-evangelion-places",
        "name": "Neon Genesis Evangelion places",
        "type": "place",
        "short_description": "Locations and geographies that frame Neon Genesis Evangelion.",
        "description": "Places, regions, and built sites that give Neon Genesis Evangelion its map — where events and figures concentrate."
    },
    {
        "slug": "neon-genesis-evangelion-events",
        "name": "Neon Genesis Evangelion events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Neon Genesis Evangelion.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Neon Genesis Evangelion timeline."
    },
    {
        "slug": "neon-genesis-evangelion-objects",
        "name": "Neon Genesis Evangelion objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Neon Genesis Evangelion.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-factions",
        "name": "Neon Genesis Evangelion factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Neon Genesis Evangelion.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-concepts",
        "name": "Neon Genesis Evangelion concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Neon Genesis Evangelion.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Neon Genesis Evangelion readable as a lore graph."
    },
    {
        "slug": "neon-genesis-evangelion-eras",
        "name": "Neon Genesis Evangelion eras",
        "type": "event",
        "short_description": "Periodization for Neon Genesis Evangelion.",
        "description": "Named eras and phases that help readers track how Neon Genesis Evangelion changes across time."
    },
    {
        "slug": "neon-genesis-evangelion-works",
        "name": "Neon Genesis Evangelion works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Neon Genesis Evangelion.",
        "description": "Primary works and adaptations through which most audiences encounter Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-symbols",
        "name": "Neon Genesis Evangelion symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Neon Genesis Evangelion.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-controversies",
        "name": "Neon Genesis Evangelion controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Neon Genesis Evangelion.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Neon Genesis Evangelion argumentative."
    },
    {
        "slug": "neon-genesis-evangelion-sources",
        "name": "Neon Genesis Evangelion sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Neon Genesis Evangelion.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-geography",
        "name": "Neon Genesis Evangelion geography",
        "type": "place",
        "short_description": "Broader geographic framing for Neon Genesis Evangelion.",
        "description": "Regions, routes, and spatial systems that situate Neon Genesis Evangelion beyond single named places."
    },
    {
        "slug": "neon-genesis-evangelion-legacy",
        "name": "Neon Genesis Evangelion legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Neon Genesis Evangelion.",
        "description": "How Neon Genesis Evangelion continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "neon-genesis-evangelion-practices",
        "name": "Neon Genesis Evangelion practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Neon Genesis Evangelion.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Neon Genesis Evangelion."
    },
    {
        "slug": "neon-genesis-evangelion-entry-1",
        "name": "Neon Genesis Evangelion entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-2",
        "name": "Neon Genesis Evangelion entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-3",
        "name": "Neon Genesis Evangelion entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-4",
        "name": "Neon Genesis Evangelion entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-5",
        "name": "Neon Genesis Evangelion entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-6",
        "name": "Neon Genesis Evangelion entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-7",
        "name": "Neon Genesis Evangelion entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-8",
        "name": "Neon Genesis Evangelion entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-9",
        "name": "Neon Genesis Evangelion entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-10",
        "name": "Neon Genesis Evangelion entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-11",
        "name": "Neon Genesis Evangelion entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-12",
        "name": "Neon Genesis Evangelion entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-13",
        "name": "Neon Genesis Evangelion entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-14",
        "name": "Neon Genesis Evangelion entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-15",
        "name": "Neon Genesis Evangelion entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-16",
        "name": "Neon Genesis Evangelion entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-17",
        "name": "Neon Genesis Evangelion entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-18",
        "name": "Neon Genesis Evangelion entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-19",
        "name": "Neon Genesis Evangelion entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-20",
        "name": "Neon Genesis Evangelion entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-21",
        "name": "Neon Genesis Evangelion entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-22",
        "name": "Neon Genesis Evangelion entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-23",
        "name": "Neon Genesis Evangelion entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neon-genesis-evangelion-entry-24",
        "name": "Neon Genesis Evangelion entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neon Genesis Evangelion.",
        "description": "A supporting encyclopedia entry in the Neon Genesis Evangelion subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-places",
        "contains",
        "Neon Genesis Evangelion places is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-events",
        "contains",
        "Neon Genesis Evangelion events is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-objects",
        "contains",
        "Neon Genesis Evangelion objects & artifacts is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-factions",
        "contains",
        "Neon Genesis Evangelion factions & groups is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-concepts",
        "contains",
        "Neon Genesis Evangelion concepts is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-eras",
        "contains",
        "Neon Genesis Evangelion eras is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-works",
        "contains",
        "Neon Genesis Evangelion works & media is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-symbols",
        "contains",
        "Neon Genesis Evangelion symbols is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-controversies",
        "contains",
        "Neon Genesis Evangelion controversies is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-sources",
        "contains",
        "Neon Genesis Evangelion sources is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-geography",
        "contains",
        "Neon Genesis Evangelion geography is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-legacy",
        "contains",
        "Neon Genesis Evangelion legacy is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-practices",
        "contains",
        "Neon Genesis Evangelion practices is a primary trailhead under Neon Genesis Evangelion.",
        0.88,
        0.82
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-1",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-2",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-3",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-4",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-5",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-6",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-7",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-8",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-9",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-10",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-11",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-12",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-13",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-14",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-15",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-16",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-17",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-18",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-19",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-20",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-21",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-22",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-23",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ],
    [
        "neon-genesis-evangelion",
        "neon-genesis-evangelion-entry-24",
        "contains",
        "Supporting entry under Neon Genesis Evangelion.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
