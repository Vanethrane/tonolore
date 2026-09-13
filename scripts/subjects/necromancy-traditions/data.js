/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "necromancy-traditions",
        "name": "Necromancy traditions",
        "type": "topic",
        "short_description": "Dead-speaking rites, grimoires, and the forbidden craft of consulting the departed.",
        "description": "Dead-speaking rites, grimoires, and the forbidden craft of consulting the departed. This Ton-o-Lore subject maps people, places, events, and ideas tied to Necromancy traditions so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "necromancy-traditions-figures",
        "name": "Necromancy traditions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Necromancy traditions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-world",
        "name": "Necromancy traditions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Necromancy traditions.",
        "description": "Geography, institutions, and periodization that give Necromancy traditions its encyclopedia shape."
    },
    {
        "slug": "necromancy-traditions-places",
        "name": "Necromancy traditions places",
        "type": "place",
        "short_description": "Locations and geographies that frame Necromancy traditions.",
        "description": "Places, regions, and built sites that give Necromancy traditions its map — where events and figures concentrate."
    },
    {
        "slug": "necromancy-traditions-events",
        "name": "Necromancy traditions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Necromancy traditions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Necromancy traditions timeline."
    },
    {
        "slug": "necromancy-traditions-objects",
        "name": "Necromancy traditions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Necromancy traditions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-factions",
        "name": "Necromancy traditions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Necromancy traditions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-concepts",
        "name": "Necromancy traditions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Necromancy traditions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Necromancy traditions readable as a lore graph."
    },
    {
        "slug": "necromancy-traditions-eras",
        "name": "Necromancy traditions eras",
        "type": "event",
        "short_description": "Periodization for Necromancy traditions.",
        "description": "Named eras and phases that help readers track how Necromancy traditions changes across time."
    },
    {
        "slug": "necromancy-traditions-works",
        "name": "Necromancy traditions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Necromancy traditions.",
        "description": "Primary works and adaptations through which most audiences encounter Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-symbols",
        "name": "Necromancy traditions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Necromancy traditions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-controversies",
        "name": "Necromancy traditions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Necromancy traditions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Necromancy traditions argumentative."
    },
    {
        "slug": "necromancy-traditions-sources",
        "name": "Necromancy traditions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Necromancy traditions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-geography",
        "name": "Necromancy traditions geography",
        "type": "place",
        "short_description": "Broader geographic framing for Necromancy traditions.",
        "description": "Regions, routes, and spatial systems that situate Necromancy traditions beyond single named places."
    },
    {
        "slug": "necromancy-traditions-legacy",
        "name": "Necromancy traditions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Necromancy traditions.",
        "description": "How Necromancy traditions continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "necromancy-traditions-practices",
        "name": "Necromancy traditions practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Necromancy traditions.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Necromancy traditions."
    },
    {
        "slug": "necromancy-traditions-entry-1",
        "name": "Necromancy traditions entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-2",
        "name": "Necromancy traditions entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-3",
        "name": "Necromancy traditions entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-4",
        "name": "Necromancy traditions entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-5",
        "name": "Necromancy traditions entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-6",
        "name": "Necromancy traditions entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-7",
        "name": "Necromancy traditions entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-8",
        "name": "Necromancy traditions entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-9",
        "name": "Necromancy traditions entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-10",
        "name": "Necromancy traditions entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-11",
        "name": "Necromancy traditions entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-12",
        "name": "Necromancy traditions entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-13",
        "name": "Necromancy traditions entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-14",
        "name": "Necromancy traditions entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-15",
        "name": "Necromancy traditions entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-16",
        "name": "Necromancy traditions entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-17",
        "name": "Necromancy traditions entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-18",
        "name": "Necromancy traditions entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-19",
        "name": "Necromancy traditions entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-20",
        "name": "Necromancy traditions entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-21",
        "name": "Necromancy traditions entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-22",
        "name": "Necromancy traditions entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-23",
        "name": "Necromancy traditions entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "necromancy-traditions-entry-24",
        "name": "Necromancy traditions entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Necromancy traditions.",
        "description": "A supporting encyclopedia entry in the Necromancy traditions subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "necromancy-traditions",
        "necromancy-traditions-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-places",
        "contains",
        "Necromancy traditions places is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-events",
        "contains",
        "Necromancy traditions events is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-objects",
        "contains",
        "Necromancy traditions objects & artifacts is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-factions",
        "contains",
        "Necromancy traditions factions & groups is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-concepts",
        "contains",
        "Necromancy traditions concepts is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-eras",
        "contains",
        "Necromancy traditions eras is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-works",
        "contains",
        "Necromancy traditions works & media is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-symbols",
        "contains",
        "Necromancy traditions symbols is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-controversies",
        "contains",
        "Necromancy traditions controversies is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-sources",
        "contains",
        "Necromancy traditions sources is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-geography",
        "contains",
        "Necromancy traditions geography is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-legacy",
        "contains",
        "Necromancy traditions legacy is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-practices",
        "contains",
        "Necromancy traditions practices is a primary trailhead under Necromancy traditions.",
        0.88,
        0.82
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-1",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-2",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-3",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-4",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-5",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-6",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-7",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-8",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-9",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-10",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-11",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-12",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-13",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-14",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-15",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-16",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-17",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-18",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-19",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-20",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-21",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-22",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-23",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ],
    [
        "necromancy-traditions",
        "necromancy-traditions-entry-24",
        "contains",
        "Supporting entry under Necromancy traditions.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
