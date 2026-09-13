/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hyperloop-concepts",
        "name": "Hyperloop & future transit concepts",
        "type": "topic",
        "short_description": "Vacuum tubes, vaporware, and the speculative transport ideas chasing speed.",
        "description": "Vacuum tubes, vaporware, and the speculative transport ideas chasing speed. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hyperloop & future transit concepts so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "hyperloop-concepts-figures",
        "name": "Hyperloop & future transit concepts figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hyperloop & future transit concepts.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-world",
        "name": "Hyperloop & future transit concepts world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hyperloop & future transit concepts.",
        "description": "Geography, institutions, and periodization that give Hyperloop & future transit concepts its encyclopedia shape."
    },
    {
        "slug": "hyperloop-concepts-places",
        "name": "Hyperloop & future transit concepts places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hyperloop & future transit concepts.",
        "description": "Places, regions, and built sites that give Hyperloop & future transit concepts its map — where events and figures concentrate."
    },
    {
        "slug": "hyperloop-concepts-events",
        "name": "Hyperloop & future transit concepts events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hyperloop & future transit concepts.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hyperloop & future transit concepts timeline."
    },
    {
        "slug": "hyperloop-concepts-objects",
        "name": "Hyperloop & future transit concepts objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hyperloop & future transit concepts.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-factions",
        "name": "Hyperloop & future transit concepts factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hyperloop & future transit concepts.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-concepts",
        "name": "Hyperloop & future transit concepts concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hyperloop & future transit concepts.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hyperloop & future transit concepts readable as a lore graph."
    },
    {
        "slug": "hyperloop-concepts-eras",
        "name": "Hyperloop & future transit concepts eras",
        "type": "event",
        "short_description": "Periodization for Hyperloop & future transit concepts.",
        "description": "Named eras and phases that help readers track how Hyperloop & future transit concepts changes across time."
    },
    {
        "slug": "hyperloop-concepts-works",
        "name": "Hyperloop & future transit concepts works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hyperloop & future transit concepts.",
        "description": "Primary works and adaptations through which most audiences encounter Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-symbols",
        "name": "Hyperloop & future transit concepts symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hyperloop & future transit concepts.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-controversies",
        "name": "Hyperloop & future transit concepts controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hyperloop & future transit concepts.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hyperloop & future transit concepts argumentative."
    },
    {
        "slug": "hyperloop-concepts-sources",
        "name": "Hyperloop & future transit concepts sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hyperloop & future transit concepts.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-geography",
        "name": "Hyperloop & future transit concepts geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hyperloop & future transit concepts.",
        "description": "Regions, routes, and spatial systems that situate Hyperloop & future transit concepts beyond single named places."
    },
    {
        "slug": "hyperloop-concepts-legacy",
        "name": "Hyperloop & future transit concepts legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hyperloop & future transit concepts.",
        "description": "How Hyperloop & future transit concepts continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hyperloop-concepts-practices",
        "name": "Hyperloop & future transit concepts practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hyperloop & future transit concepts.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hyperloop & future transit concepts."
    },
    {
        "slug": "hyperloop-concepts-entry-1",
        "name": "Hyperloop & future transit concepts entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-2",
        "name": "Hyperloop & future transit concepts entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-3",
        "name": "Hyperloop & future transit concepts entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-4",
        "name": "Hyperloop & future transit concepts entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-5",
        "name": "Hyperloop & future transit concepts entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-6",
        "name": "Hyperloop & future transit concepts entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-7",
        "name": "Hyperloop & future transit concepts entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-8",
        "name": "Hyperloop & future transit concepts entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-9",
        "name": "Hyperloop & future transit concepts entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-10",
        "name": "Hyperloop & future transit concepts entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-11",
        "name": "Hyperloop & future transit concepts entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-12",
        "name": "Hyperloop & future transit concepts entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-13",
        "name": "Hyperloop & future transit concepts entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-14",
        "name": "Hyperloop & future transit concepts entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-15",
        "name": "Hyperloop & future transit concepts entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-16",
        "name": "Hyperloop & future transit concepts entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-17",
        "name": "Hyperloop & future transit concepts entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-18",
        "name": "Hyperloop & future transit concepts entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-19",
        "name": "Hyperloop & future transit concepts entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-20",
        "name": "Hyperloop & future transit concepts entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-21",
        "name": "Hyperloop & future transit concepts entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-22",
        "name": "Hyperloop & future transit concepts entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-23",
        "name": "Hyperloop & future transit concepts entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hyperloop-concepts-entry-24",
        "name": "Hyperloop & future transit concepts entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hyperloop & future transit concepts.",
        "description": "A supporting encyclopedia entry in the Hyperloop & future transit concepts subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hyperloop-concepts",
        "hyperloop-concepts-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-places",
        "contains",
        "Hyperloop & future transit concepts places is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-events",
        "contains",
        "Hyperloop & future transit concepts events is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-objects",
        "contains",
        "Hyperloop & future transit concepts objects & artifacts is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-factions",
        "contains",
        "Hyperloop & future transit concepts factions & groups is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-concepts",
        "contains",
        "Hyperloop & future transit concepts concepts is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-eras",
        "contains",
        "Hyperloop & future transit concepts eras is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-works",
        "contains",
        "Hyperloop & future transit concepts works & media is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-symbols",
        "contains",
        "Hyperloop & future transit concepts symbols is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-controversies",
        "contains",
        "Hyperloop & future transit concepts controversies is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-sources",
        "contains",
        "Hyperloop & future transit concepts sources is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-geography",
        "contains",
        "Hyperloop & future transit concepts geography is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-legacy",
        "contains",
        "Hyperloop & future transit concepts legacy is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-practices",
        "contains",
        "Hyperloop & future transit concepts practices is a primary trailhead under Hyperloop & future transit concepts.",
        0.88,
        0.82
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-1",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-2",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-3",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-4",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-5",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-6",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-7",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-8",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-9",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-10",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-11",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-12",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-13",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-14",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-15",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-16",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-17",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-18",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-19",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-20",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-21",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-22",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-23",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ],
    [
        "hyperloop-concepts",
        "hyperloop-concepts-entry-24",
        "contains",
        "Supporting entry under Hyperloop & future transit concepts.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
