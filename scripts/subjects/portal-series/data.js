/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "portal-series",
        "name": "Portal",
        "type": "topic",
        "short_description": "Aperture Science, cakes, and the puzzle-shooter that made dry wit a gameplay genre.",
        "description": "Aperture Science, cakes, and the puzzle-shooter that made dry wit a gameplay genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Portal so readers can follow long-tail connections across video games."
    },
    {
        "slug": "portal-series-figures",
        "name": "Portal figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Portal.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Portal."
    },
    {
        "slug": "portal-series-world",
        "name": "Portal world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Portal.",
        "description": "Geography, institutions, and periodization that give Portal its encyclopedia shape."
    },
    {
        "slug": "portal-series-places",
        "name": "Portal places",
        "type": "place",
        "short_description": "Locations and geographies that frame Portal.",
        "description": "Places, regions, and built sites that give Portal its map — where events and figures concentrate."
    },
    {
        "slug": "portal-series-events",
        "name": "Portal events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Portal.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Portal timeline."
    },
    {
        "slug": "portal-series-objects",
        "name": "Portal objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Portal.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Portal."
    },
    {
        "slug": "portal-series-factions",
        "name": "Portal factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Portal.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Portal."
    },
    {
        "slug": "portal-series-concepts",
        "name": "Portal concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Portal.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Portal readable as a lore graph."
    },
    {
        "slug": "portal-series-eras",
        "name": "Portal eras",
        "type": "event",
        "short_description": "Periodization for Portal.",
        "description": "Named eras and phases that help readers track how Portal changes across time."
    },
    {
        "slug": "portal-series-works",
        "name": "Portal works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Portal.",
        "description": "Primary works and adaptations through which most audiences encounter Portal."
    },
    {
        "slug": "portal-series-symbols",
        "name": "Portal symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Portal.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Portal."
    },
    {
        "slug": "portal-series-controversies",
        "name": "Portal controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Portal.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Portal argumentative."
    },
    {
        "slug": "portal-series-sources",
        "name": "Portal sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Portal.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Portal."
    },
    {
        "slug": "portal-series-geography",
        "name": "Portal geography",
        "type": "place",
        "short_description": "Broader geographic framing for Portal.",
        "description": "Regions, routes, and spatial systems that situate Portal beyond single named places."
    },
    {
        "slug": "portal-series-legacy",
        "name": "Portal legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Portal.",
        "description": "How Portal continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "portal-series-practices",
        "name": "Portal practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Portal.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Portal."
    },
    {
        "slug": "portal-series-entry-1",
        "name": "Portal entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-2",
        "name": "Portal entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-3",
        "name": "Portal entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-4",
        "name": "Portal entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-5",
        "name": "Portal entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-6",
        "name": "Portal entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-7",
        "name": "Portal entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-8",
        "name": "Portal entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-9",
        "name": "Portal entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-10",
        "name": "Portal entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-11",
        "name": "Portal entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-12",
        "name": "Portal entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-13",
        "name": "Portal entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-14",
        "name": "Portal entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-15",
        "name": "Portal entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-16",
        "name": "Portal entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-17",
        "name": "Portal entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-18",
        "name": "Portal entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-19",
        "name": "Portal entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-20",
        "name": "Portal entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-21",
        "name": "Portal entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-22",
        "name": "Portal entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-23",
        "name": "Portal entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "portal-series-entry-24",
        "name": "Portal entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Portal.",
        "description": "A supporting encyclopedia entry in the Portal subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "portal-series",
        "portal-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "portal-series",
        "portal-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "portal-series",
        "portal-series-places",
        "contains",
        "Portal places is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-events",
        "contains",
        "Portal events is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-objects",
        "contains",
        "Portal objects & artifacts is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-factions",
        "contains",
        "Portal factions & groups is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-concepts",
        "contains",
        "Portal concepts is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-eras",
        "contains",
        "Portal eras is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-works",
        "contains",
        "Portal works & media is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-symbols",
        "contains",
        "Portal symbols is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-controversies",
        "contains",
        "Portal controversies is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-sources",
        "contains",
        "Portal sources is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-geography",
        "contains",
        "Portal geography is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-legacy",
        "contains",
        "Portal legacy is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-practices",
        "contains",
        "Portal practices is a primary trailhead under Portal.",
        0.88,
        0.82
    ],
    [
        "portal-series",
        "portal-series-entry-1",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-2",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-3",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-4",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-5",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-6",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-7",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-8",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-9",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-10",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-11",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-12",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-13",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-14",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-15",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-16",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-17",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-18",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-19",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-20",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-21",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-22",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-23",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ],
    [
        "portal-series",
        "portal-series-entry-24",
        "contains",
        "Supporting entry under Portal.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
