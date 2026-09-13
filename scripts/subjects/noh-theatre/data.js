/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "noh-theatre",
        "name": "Noh theatre",
        "type": "topic",
        "short_description": "Masks, chant, and the classical Japanese drama of ghosts and refined stillness.",
        "description": "Masks, chant, and the classical Japanese drama of ghosts and refined stillness. This Ton-o-Lore subject maps people, places, events, and ideas tied to Noh theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "noh-theatre-figures",
        "name": "Noh theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Noh theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Noh theatre."
    },
    {
        "slug": "noh-theatre-world",
        "name": "Noh theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Noh theatre.",
        "description": "Geography, institutions, and periodization that give Noh theatre its encyclopedia shape."
    },
    {
        "slug": "noh-theatre-places",
        "name": "Noh theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame Noh theatre.",
        "description": "Places, regions, and built sites that give Noh theatre its map — where events and figures concentrate."
    },
    {
        "slug": "noh-theatre-events",
        "name": "Noh theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Noh theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Noh theatre timeline."
    },
    {
        "slug": "noh-theatre-objects",
        "name": "Noh theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Noh theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Noh theatre."
    },
    {
        "slug": "noh-theatre-factions",
        "name": "Noh theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Noh theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Noh theatre."
    },
    {
        "slug": "noh-theatre-concepts",
        "name": "Noh theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Noh theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Noh theatre readable as a lore graph."
    },
    {
        "slug": "noh-theatre-eras",
        "name": "Noh theatre eras",
        "type": "event",
        "short_description": "Periodization for Noh theatre.",
        "description": "Named eras and phases that help readers track how Noh theatre changes across time."
    },
    {
        "slug": "noh-theatre-works",
        "name": "Noh theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Noh theatre.",
        "description": "Primary works and adaptations through which most audiences encounter Noh theatre."
    },
    {
        "slug": "noh-theatre-symbols",
        "name": "Noh theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Noh theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Noh theatre."
    },
    {
        "slug": "noh-theatre-controversies",
        "name": "Noh theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Noh theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Noh theatre argumentative."
    },
    {
        "slug": "noh-theatre-sources",
        "name": "Noh theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Noh theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Noh theatre."
    },
    {
        "slug": "noh-theatre-geography",
        "name": "Noh theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for Noh theatre.",
        "description": "Regions, routes, and spatial systems that situate Noh theatre beyond single named places."
    },
    {
        "slug": "noh-theatre-legacy",
        "name": "Noh theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Noh theatre.",
        "description": "How Noh theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "noh-theatre-practices",
        "name": "Noh theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Noh theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Noh theatre."
    },
    {
        "slug": "noh-theatre-entry-1",
        "name": "Noh theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-2",
        "name": "Noh theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-3",
        "name": "Noh theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-4",
        "name": "Noh theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-5",
        "name": "Noh theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-6",
        "name": "Noh theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-7",
        "name": "Noh theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-8",
        "name": "Noh theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-9",
        "name": "Noh theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-10",
        "name": "Noh theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-11",
        "name": "Noh theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-12",
        "name": "Noh theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-13",
        "name": "Noh theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-14",
        "name": "Noh theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-15",
        "name": "Noh theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-16",
        "name": "Noh theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-17",
        "name": "Noh theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-18",
        "name": "Noh theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-19",
        "name": "Noh theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-20",
        "name": "Noh theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-21",
        "name": "Noh theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-22",
        "name": "Noh theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-23",
        "name": "Noh theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "noh-theatre-entry-24",
        "name": "Noh theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Noh theatre.",
        "description": "A supporting encyclopedia entry in the Noh theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "noh-theatre",
        "noh-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "noh-theatre",
        "noh-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "noh-theatre",
        "noh-theatre-places",
        "contains",
        "Noh theatre places is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-events",
        "contains",
        "Noh theatre events is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-objects",
        "contains",
        "Noh theatre objects & artifacts is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-factions",
        "contains",
        "Noh theatre factions & groups is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-concepts",
        "contains",
        "Noh theatre concepts is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-eras",
        "contains",
        "Noh theatre eras is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-works",
        "contains",
        "Noh theatre works & media is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-symbols",
        "contains",
        "Noh theatre symbols is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-controversies",
        "contains",
        "Noh theatre controversies is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-sources",
        "contains",
        "Noh theatre sources is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-geography",
        "contains",
        "Noh theatre geography is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-legacy",
        "contains",
        "Noh theatre legacy is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-practices",
        "contains",
        "Noh theatre practices is a primary trailhead under Noh theatre.",
        0.88,
        0.82
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-1",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-2",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-3",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-4",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-5",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-6",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-7",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-8",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-9",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-10",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-11",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-12",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-13",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-14",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-15",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-16",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-17",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-18",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-19",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-20",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-21",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-22",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-23",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ],
    [
        "noh-theatre",
        "noh-theatre-entry-24",
        "contains",
        "Supporting entry under Noh theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
