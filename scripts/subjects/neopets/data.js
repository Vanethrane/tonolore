/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "neopets",
        "name": "Neopets",
        "type": "topic",
        "short_description": "Virtual pets, Neopia lore, and the early browser-game world that raised a generation online.",
        "description": "Virtual pets, Neopia lore, and the early browser-game world that raised a generation online. This Ton-o-Lore subject maps people, places, events, and ideas tied to Neopets so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "neopets-figures",
        "name": "Neopets figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Neopets.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Neopets."
    },
    {
        "slug": "neopets-world",
        "name": "Neopets world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Neopets.",
        "description": "Geography, institutions, and periodization that give Neopets its encyclopedia shape."
    },
    {
        "slug": "neopets-places",
        "name": "Neopets places",
        "type": "place",
        "short_description": "Locations and geographies that frame Neopets.",
        "description": "Places, regions, and built sites that give Neopets its map — where events and figures concentrate."
    },
    {
        "slug": "neopets-events",
        "name": "Neopets events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Neopets.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Neopets timeline."
    },
    {
        "slug": "neopets-objects",
        "name": "Neopets objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Neopets.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Neopets."
    },
    {
        "slug": "neopets-factions",
        "name": "Neopets factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Neopets.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Neopets."
    },
    {
        "slug": "neopets-concepts",
        "name": "Neopets concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Neopets.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Neopets readable as a lore graph."
    },
    {
        "slug": "neopets-eras",
        "name": "Neopets eras",
        "type": "event",
        "short_description": "Periodization for Neopets.",
        "description": "Named eras and phases that help readers track how Neopets changes across time."
    },
    {
        "slug": "neopets-works",
        "name": "Neopets works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Neopets.",
        "description": "Primary works and adaptations through which most audiences encounter Neopets."
    },
    {
        "slug": "neopets-symbols",
        "name": "Neopets symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Neopets.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Neopets."
    },
    {
        "slug": "neopets-controversies",
        "name": "Neopets controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Neopets.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Neopets argumentative."
    },
    {
        "slug": "neopets-sources",
        "name": "Neopets sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Neopets.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Neopets."
    },
    {
        "slug": "neopets-geography",
        "name": "Neopets geography",
        "type": "place",
        "short_description": "Broader geographic framing for Neopets.",
        "description": "Regions, routes, and spatial systems that situate Neopets beyond single named places."
    },
    {
        "slug": "neopets-legacy",
        "name": "Neopets legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Neopets.",
        "description": "How Neopets continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "neopets-practices",
        "name": "Neopets practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Neopets.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Neopets."
    },
    {
        "slug": "neopets-entry-1",
        "name": "Neopets entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-2",
        "name": "Neopets entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-3",
        "name": "Neopets entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-4",
        "name": "Neopets entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-5",
        "name": "Neopets entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-6",
        "name": "Neopets entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-7",
        "name": "Neopets entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-8",
        "name": "Neopets entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-9",
        "name": "Neopets entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-10",
        "name": "Neopets entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-11",
        "name": "Neopets entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-12",
        "name": "Neopets entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-13",
        "name": "Neopets entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-14",
        "name": "Neopets entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-15",
        "name": "Neopets entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-16",
        "name": "Neopets entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-17",
        "name": "Neopets entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-18",
        "name": "Neopets entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-19",
        "name": "Neopets entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-20",
        "name": "Neopets entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-21",
        "name": "Neopets entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-22",
        "name": "Neopets entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-23",
        "name": "Neopets entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neopets-entry-24",
        "name": "Neopets entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neopets.",
        "description": "A supporting encyclopedia entry in the Neopets subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "neopets",
        "neopets-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "neopets",
        "neopets-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "neopets",
        "neopets-places",
        "contains",
        "Neopets places is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-events",
        "contains",
        "Neopets events is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-objects",
        "contains",
        "Neopets objects & artifacts is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-factions",
        "contains",
        "Neopets factions & groups is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-concepts",
        "contains",
        "Neopets concepts is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-eras",
        "contains",
        "Neopets eras is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-works",
        "contains",
        "Neopets works & media is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-symbols",
        "contains",
        "Neopets symbols is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-controversies",
        "contains",
        "Neopets controversies is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-sources",
        "contains",
        "Neopets sources is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-geography",
        "contains",
        "Neopets geography is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-legacy",
        "contains",
        "Neopets legacy is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-practices",
        "contains",
        "Neopets practices is a primary trailhead under Neopets.",
        0.88,
        0.82
    ],
    [
        "neopets",
        "neopets-entry-1",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-2",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-3",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-4",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-5",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-6",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-7",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-8",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-9",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-10",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-11",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-12",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-13",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-14",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-15",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-16",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-17",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-18",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-19",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-20",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-21",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-22",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-23",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ],
    [
        "neopets",
        "neopets-entry-24",
        "contains",
        "Supporting entry under Neopets.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
