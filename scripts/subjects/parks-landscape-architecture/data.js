/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "parks-landscape-architecture",
        "name": "Parks & landscape architecture",
        "type": "topic",
        "short_description": "Olmsted to pocket parks — designed nature inside urban fabric.",
        "description": "Olmsted to pocket parks — designed nature inside urban fabric. This Ton-o-Lore subject maps people, places, events, and ideas tied to Parks & landscape architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "parks-landscape-architecture-figures",
        "name": "Parks & landscape architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Parks & landscape architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-world",
        "name": "Parks & landscape architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Parks & landscape architecture.",
        "description": "Geography, institutions, and periodization that give Parks & landscape architecture its encyclopedia shape."
    },
    {
        "slug": "parks-landscape-architecture-places",
        "name": "Parks & landscape architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Parks & landscape architecture.",
        "description": "Places, regions, and built sites that give Parks & landscape architecture its map — where events and figures concentrate."
    },
    {
        "slug": "parks-landscape-architecture-events",
        "name": "Parks & landscape architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Parks & landscape architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Parks & landscape architecture timeline."
    },
    {
        "slug": "parks-landscape-architecture-objects",
        "name": "Parks & landscape architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Parks & landscape architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-factions",
        "name": "Parks & landscape architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Parks & landscape architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-concepts",
        "name": "Parks & landscape architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Parks & landscape architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Parks & landscape architecture readable as a lore graph."
    },
    {
        "slug": "parks-landscape-architecture-eras",
        "name": "Parks & landscape architecture eras",
        "type": "event",
        "short_description": "Periodization for Parks & landscape architecture.",
        "description": "Named eras and phases that help readers track how Parks & landscape architecture changes across time."
    },
    {
        "slug": "parks-landscape-architecture-works",
        "name": "Parks & landscape architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Parks & landscape architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-symbols",
        "name": "Parks & landscape architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Parks & landscape architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-controversies",
        "name": "Parks & landscape architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Parks & landscape architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Parks & landscape architecture argumentative."
    },
    {
        "slug": "parks-landscape-architecture-sources",
        "name": "Parks & landscape architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Parks & landscape architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-geography",
        "name": "Parks & landscape architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Parks & landscape architecture.",
        "description": "Regions, routes, and spatial systems that situate Parks & landscape architecture beyond single named places."
    },
    {
        "slug": "parks-landscape-architecture-legacy",
        "name": "Parks & landscape architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Parks & landscape architecture.",
        "description": "How Parks & landscape architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "parks-landscape-architecture-practices",
        "name": "Parks & landscape architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Parks & landscape architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Parks & landscape architecture."
    },
    {
        "slug": "parks-landscape-architecture-entry-1",
        "name": "Parks & landscape architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-2",
        "name": "Parks & landscape architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-3",
        "name": "Parks & landscape architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-4",
        "name": "Parks & landscape architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-5",
        "name": "Parks & landscape architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-6",
        "name": "Parks & landscape architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-7",
        "name": "Parks & landscape architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-8",
        "name": "Parks & landscape architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-9",
        "name": "Parks & landscape architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-10",
        "name": "Parks & landscape architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-11",
        "name": "Parks & landscape architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-12",
        "name": "Parks & landscape architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-13",
        "name": "Parks & landscape architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-14",
        "name": "Parks & landscape architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-15",
        "name": "Parks & landscape architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-16",
        "name": "Parks & landscape architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-17",
        "name": "Parks & landscape architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-18",
        "name": "Parks & landscape architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-19",
        "name": "Parks & landscape architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-20",
        "name": "Parks & landscape architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-21",
        "name": "Parks & landscape architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-22",
        "name": "Parks & landscape architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-23",
        "name": "Parks & landscape architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "parks-landscape-architecture-entry-24",
        "name": "Parks & landscape architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Parks & landscape architecture.",
        "description": "A supporting encyclopedia entry in the Parks & landscape architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-places",
        "contains",
        "Parks & landscape architecture places is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-events",
        "contains",
        "Parks & landscape architecture events is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-objects",
        "contains",
        "Parks & landscape architecture objects & artifacts is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-factions",
        "contains",
        "Parks & landscape architecture factions & groups is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-concepts",
        "contains",
        "Parks & landscape architecture concepts is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-eras",
        "contains",
        "Parks & landscape architecture eras is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-works",
        "contains",
        "Parks & landscape architecture works & media is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-symbols",
        "contains",
        "Parks & landscape architecture symbols is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-controversies",
        "contains",
        "Parks & landscape architecture controversies is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-sources",
        "contains",
        "Parks & landscape architecture sources is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-geography",
        "contains",
        "Parks & landscape architecture geography is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-legacy",
        "contains",
        "Parks & landscape architecture legacy is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-practices",
        "contains",
        "Parks & landscape architecture practices is a primary trailhead under Parks & landscape architecture.",
        0.88,
        0.82
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-1",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-2",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-3",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-4",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-5",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-6",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-7",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-8",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-9",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-10",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-11",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-12",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-13",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-14",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-15",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-16",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-17",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-18",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-19",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-20",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-21",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-22",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-23",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ],
    [
        "parks-landscape-architecture",
        "parks-landscape-architecture-entry-24",
        "contains",
        "Supporting entry under Parks & landscape architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
