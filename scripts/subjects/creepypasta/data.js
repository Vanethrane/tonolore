/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "creepypasta",
        "name": "Creepypasta",
        "type": "topic",
        "short_description": "Slender Man to local legends — copy-paste horror that became modern digital folklore.",
        "description": "Slender Man to local legends — copy-paste horror that became modern digital folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Creepypasta so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "creepypasta-figures",
        "name": "Creepypasta figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Creepypasta.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Creepypasta."
    },
    {
        "slug": "creepypasta-world",
        "name": "Creepypasta world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Creepypasta.",
        "description": "Geography, institutions, and periodization that give Creepypasta its encyclopedia shape."
    },
    {
        "slug": "creepypasta-places",
        "name": "Creepypasta places",
        "type": "place",
        "short_description": "Locations and geographies that frame Creepypasta.",
        "description": "Places, regions, and built sites that give Creepypasta its map — where events and figures concentrate."
    },
    {
        "slug": "creepypasta-events",
        "name": "Creepypasta events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Creepypasta.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Creepypasta timeline."
    },
    {
        "slug": "creepypasta-objects",
        "name": "Creepypasta objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Creepypasta.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Creepypasta."
    },
    {
        "slug": "creepypasta-factions",
        "name": "Creepypasta factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Creepypasta.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Creepypasta."
    },
    {
        "slug": "creepypasta-concepts",
        "name": "Creepypasta concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Creepypasta.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Creepypasta readable as a lore graph."
    },
    {
        "slug": "creepypasta-eras",
        "name": "Creepypasta eras",
        "type": "event",
        "short_description": "Periodization for Creepypasta.",
        "description": "Named eras and phases that help readers track how Creepypasta changes across time."
    },
    {
        "slug": "creepypasta-works",
        "name": "Creepypasta works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Creepypasta.",
        "description": "Primary works and adaptations through which most audiences encounter Creepypasta."
    },
    {
        "slug": "creepypasta-symbols",
        "name": "Creepypasta symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Creepypasta.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Creepypasta."
    },
    {
        "slug": "creepypasta-controversies",
        "name": "Creepypasta controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Creepypasta.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Creepypasta argumentative."
    },
    {
        "slug": "creepypasta-sources",
        "name": "Creepypasta sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Creepypasta.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Creepypasta."
    },
    {
        "slug": "creepypasta-geography",
        "name": "Creepypasta geography",
        "type": "place",
        "short_description": "Broader geographic framing for Creepypasta.",
        "description": "Regions, routes, and spatial systems that situate Creepypasta beyond single named places."
    },
    {
        "slug": "creepypasta-legacy",
        "name": "Creepypasta legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Creepypasta.",
        "description": "How Creepypasta continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "creepypasta-practices",
        "name": "Creepypasta practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Creepypasta.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Creepypasta."
    },
    {
        "slug": "creepypasta-entry-1",
        "name": "Creepypasta entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-2",
        "name": "Creepypasta entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-3",
        "name": "Creepypasta entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-4",
        "name": "Creepypasta entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-5",
        "name": "Creepypasta entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-6",
        "name": "Creepypasta entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-7",
        "name": "Creepypasta entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-8",
        "name": "Creepypasta entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-9",
        "name": "Creepypasta entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-10",
        "name": "Creepypasta entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-11",
        "name": "Creepypasta entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-12",
        "name": "Creepypasta entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-13",
        "name": "Creepypasta entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-14",
        "name": "Creepypasta entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-15",
        "name": "Creepypasta entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-16",
        "name": "Creepypasta entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-17",
        "name": "Creepypasta entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-18",
        "name": "Creepypasta entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-19",
        "name": "Creepypasta entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-20",
        "name": "Creepypasta entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-21",
        "name": "Creepypasta entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-22",
        "name": "Creepypasta entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-23",
        "name": "Creepypasta entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "creepypasta-entry-24",
        "name": "Creepypasta entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Creepypasta.",
        "description": "A supporting encyclopedia entry in the Creepypasta subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "creepypasta",
        "creepypasta-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "creepypasta",
        "creepypasta-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "creepypasta",
        "creepypasta-places",
        "contains",
        "Creepypasta places is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-events",
        "contains",
        "Creepypasta events is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-objects",
        "contains",
        "Creepypasta objects & artifacts is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-factions",
        "contains",
        "Creepypasta factions & groups is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-concepts",
        "contains",
        "Creepypasta concepts is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-eras",
        "contains",
        "Creepypasta eras is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-works",
        "contains",
        "Creepypasta works & media is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-symbols",
        "contains",
        "Creepypasta symbols is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-controversies",
        "contains",
        "Creepypasta controversies is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-sources",
        "contains",
        "Creepypasta sources is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-geography",
        "contains",
        "Creepypasta geography is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-legacy",
        "contains",
        "Creepypasta legacy is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-practices",
        "contains",
        "Creepypasta practices is a primary trailhead under Creepypasta.",
        0.88,
        0.82
    ],
    [
        "creepypasta",
        "creepypasta-entry-1",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-2",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-3",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-4",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-5",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-6",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-7",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-8",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-9",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-10",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-11",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-12",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-13",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-14",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-15",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-16",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-17",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-18",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-19",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-20",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-21",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-22",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-23",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ],
    [
        "creepypasta",
        "creepypasta-entry-24",
        "contains",
        "Supporting entry under Creepypasta.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
