/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "theosophy",
        "name": "Theosophy",
        "type": "topic",
        "short_description": "Blavatsky, Masters, and the late-Victorian synthesis that shaped New Age lineages.",
        "description": "Blavatsky, Masters, and the late-Victorian synthesis that shaped New Age lineages. This Ton-o-Lore subject maps people, places, events, and ideas tied to Theosophy so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "theosophy-figures",
        "name": "Theosophy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Theosophy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Theosophy."
    },
    {
        "slug": "theosophy-world",
        "name": "Theosophy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Theosophy.",
        "description": "Geography, institutions, and periodization that give Theosophy its encyclopedia shape."
    },
    {
        "slug": "theosophy-places",
        "name": "Theosophy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Theosophy.",
        "description": "Places, regions, and built sites that give Theosophy its map — where events and figures concentrate."
    },
    {
        "slug": "theosophy-events",
        "name": "Theosophy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Theosophy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Theosophy timeline."
    },
    {
        "slug": "theosophy-objects",
        "name": "Theosophy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Theosophy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Theosophy."
    },
    {
        "slug": "theosophy-factions",
        "name": "Theosophy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Theosophy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Theosophy."
    },
    {
        "slug": "theosophy-concepts",
        "name": "Theosophy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Theosophy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Theosophy readable as a lore graph."
    },
    {
        "slug": "theosophy-eras",
        "name": "Theosophy eras",
        "type": "event",
        "short_description": "Periodization for Theosophy.",
        "description": "Named eras and phases that help readers track how Theosophy changes across time."
    },
    {
        "slug": "theosophy-works",
        "name": "Theosophy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Theosophy.",
        "description": "Primary works and adaptations through which most audiences encounter Theosophy."
    },
    {
        "slug": "theosophy-symbols",
        "name": "Theosophy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Theosophy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Theosophy."
    },
    {
        "slug": "theosophy-controversies",
        "name": "Theosophy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Theosophy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Theosophy argumentative."
    },
    {
        "slug": "theosophy-sources",
        "name": "Theosophy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Theosophy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Theosophy."
    },
    {
        "slug": "theosophy-geography",
        "name": "Theosophy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Theosophy.",
        "description": "Regions, routes, and spatial systems that situate Theosophy beyond single named places."
    },
    {
        "slug": "theosophy-legacy",
        "name": "Theosophy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Theosophy.",
        "description": "How Theosophy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "theosophy-practices",
        "name": "Theosophy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Theosophy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Theosophy."
    },
    {
        "slug": "theosophy-entry-1",
        "name": "Theosophy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-2",
        "name": "Theosophy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-3",
        "name": "Theosophy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-4",
        "name": "Theosophy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-5",
        "name": "Theosophy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-6",
        "name": "Theosophy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-7",
        "name": "Theosophy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-8",
        "name": "Theosophy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-9",
        "name": "Theosophy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-10",
        "name": "Theosophy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-11",
        "name": "Theosophy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-12",
        "name": "Theosophy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-13",
        "name": "Theosophy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-14",
        "name": "Theosophy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-15",
        "name": "Theosophy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-16",
        "name": "Theosophy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-17",
        "name": "Theosophy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-18",
        "name": "Theosophy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-19",
        "name": "Theosophy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-20",
        "name": "Theosophy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-21",
        "name": "Theosophy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-22",
        "name": "Theosophy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-23",
        "name": "Theosophy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "theosophy-entry-24",
        "name": "Theosophy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Theosophy.",
        "description": "A supporting encyclopedia entry in the Theosophy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "theosophy",
        "theosophy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "theosophy",
        "theosophy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "theosophy",
        "theosophy-places",
        "contains",
        "Theosophy places is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-events",
        "contains",
        "Theosophy events is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-objects",
        "contains",
        "Theosophy objects & artifacts is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-factions",
        "contains",
        "Theosophy factions & groups is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-concepts",
        "contains",
        "Theosophy concepts is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-eras",
        "contains",
        "Theosophy eras is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-works",
        "contains",
        "Theosophy works & media is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-symbols",
        "contains",
        "Theosophy symbols is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-controversies",
        "contains",
        "Theosophy controversies is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-sources",
        "contains",
        "Theosophy sources is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-geography",
        "contains",
        "Theosophy geography is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-legacy",
        "contains",
        "Theosophy legacy is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-practices",
        "contains",
        "Theosophy practices is a primary trailhead under Theosophy.",
        0.88,
        0.82
    ],
    [
        "theosophy",
        "theosophy-entry-1",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-2",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-3",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-4",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-5",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-6",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-7",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-8",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-9",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-10",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-11",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-12",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-13",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-14",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-15",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-16",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-17",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-18",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-19",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-20",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-21",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-22",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-23",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ],
    [
        "theosophy",
        "theosophy-entry-24",
        "contains",
        "Supporting entry under Theosophy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
