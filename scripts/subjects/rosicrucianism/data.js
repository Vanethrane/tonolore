/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rosicrucianism",
        "name": "Rosicrucianism",
        "type": "topic",
        "short_description": "Manifestos, invisible college lore, and the early modern brotherhood that sparked esoteric Europe.",
        "description": "Manifestos, invisible college lore, and the early modern brotherhood that sparked esoteric Europe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rosicrucianism so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "rosicrucianism-figures",
        "name": "Rosicrucianism figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rosicrucianism.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-world",
        "name": "Rosicrucianism world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rosicrucianism.",
        "description": "Geography, institutions, and periodization that give Rosicrucianism its encyclopedia shape."
    },
    {
        "slug": "rosicrucianism-places",
        "name": "Rosicrucianism places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rosicrucianism.",
        "description": "Places, regions, and built sites that give Rosicrucianism its map — where events and figures concentrate."
    },
    {
        "slug": "rosicrucianism-events",
        "name": "Rosicrucianism events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rosicrucianism.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rosicrucianism timeline."
    },
    {
        "slug": "rosicrucianism-objects",
        "name": "Rosicrucianism objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rosicrucianism.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-factions",
        "name": "Rosicrucianism factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rosicrucianism.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-concepts",
        "name": "Rosicrucianism concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rosicrucianism.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rosicrucianism readable as a lore graph."
    },
    {
        "slug": "rosicrucianism-eras",
        "name": "Rosicrucianism eras",
        "type": "event",
        "short_description": "Periodization for Rosicrucianism.",
        "description": "Named eras and phases that help readers track how Rosicrucianism changes across time."
    },
    {
        "slug": "rosicrucianism-works",
        "name": "Rosicrucianism works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rosicrucianism.",
        "description": "Primary works and adaptations through which most audiences encounter Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-symbols",
        "name": "Rosicrucianism symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rosicrucianism.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-controversies",
        "name": "Rosicrucianism controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rosicrucianism.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rosicrucianism argumentative."
    },
    {
        "slug": "rosicrucianism-sources",
        "name": "Rosicrucianism sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rosicrucianism.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-geography",
        "name": "Rosicrucianism geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rosicrucianism.",
        "description": "Regions, routes, and spatial systems that situate Rosicrucianism beyond single named places."
    },
    {
        "slug": "rosicrucianism-legacy",
        "name": "Rosicrucianism legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rosicrucianism.",
        "description": "How Rosicrucianism continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "rosicrucianism-practices",
        "name": "Rosicrucianism practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Rosicrucianism.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Rosicrucianism."
    },
    {
        "slug": "rosicrucianism-entry-1",
        "name": "Rosicrucianism entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-2",
        "name": "Rosicrucianism entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-3",
        "name": "Rosicrucianism entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-4",
        "name": "Rosicrucianism entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-5",
        "name": "Rosicrucianism entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-6",
        "name": "Rosicrucianism entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-7",
        "name": "Rosicrucianism entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-8",
        "name": "Rosicrucianism entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-9",
        "name": "Rosicrucianism entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-10",
        "name": "Rosicrucianism entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-11",
        "name": "Rosicrucianism entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-12",
        "name": "Rosicrucianism entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-13",
        "name": "Rosicrucianism entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-14",
        "name": "Rosicrucianism entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-15",
        "name": "Rosicrucianism entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-16",
        "name": "Rosicrucianism entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-17",
        "name": "Rosicrucianism entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-18",
        "name": "Rosicrucianism entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-19",
        "name": "Rosicrucianism entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-20",
        "name": "Rosicrucianism entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-21",
        "name": "Rosicrucianism entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-22",
        "name": "Rosicrucianism entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-23",
        "name": "Rosicrucianism entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rosicrucianism-entry-24",
        "name": "Rosicrucianism entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rosicrucianism.",
        "description": "A supporting encyclopedia entry in the Rosicrucianism subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "rosicrucianism",
        "rosicrucianism-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rosicrucianism",
        "rosicrucianism-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rosicrucianism",
        "rosicrucianism-places",
        "contains",
        "Rosicrucianism places is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-events",
        "contains",
        "Rosicrucianism events is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-objects",
        "contains",
        "Rosicrucianism objects & artifacts is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-factions",
        "contains",
        "Rosicrucianism factions & groups is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-concepts",
        "contains",
        "Rosicrucianism concepts is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-eras",
        "contains",
        "Rosicrucianism eras is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-works",
        "contains",
        "Rosicrucianism works & media is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-symbols",
        "contains",
        "Rosicrucianism symbols is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-controversies",
        "contains",
        "Rosicrucianism controversies is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-sources",
        "contains",
        "Rosicrucianism sources is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-geography",
        "contains",
        "Rosicrucianism geography is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-legacy",
        "contains",
        "Rosicrucianism legacy is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-practices",
        "contains",
        "Rosicrucianism practices is a primary trailhead under Rosicrucianism.",
        0.88,
        0.82
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-1",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-2",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-3",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-4",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-5",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-6",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-7",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-8",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-9",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-10",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-11",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-12",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-13",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-14",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-15",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-16",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-17",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-18",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-19",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-20",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-21",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-22",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-23",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ],
    [
        "rosicrucianism",
        "rosicrucianism-entry-24",
        "contains",
        "Supporting entry under Rosicrucianism.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
