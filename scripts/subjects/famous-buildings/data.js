/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "famous-buildings",
        "name": "Famous buildings",
        "type": "topic",
        "short_description": "Architects, owners, construction, scandals, events, renovations, and the lives of landmark structures.",
        "description": "Architects, owners, construction, scandals, events, renovations, and the lives of landmark structures. This Ton-o-Lore subject maps people, places, events, and ideas tied to Famous buildings so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "famous-buildings-figures",
        "name": "Famous buildings figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Famous buildings.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Famous buildings."
    },
    {
        "slug": "famous-buildings-world",
        "name": "Famous buildings world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Famous buildings.",
        "description": "Geography, institutions, and periodization that give Famous buildings its encyclopedia shape."
    },
    {
        "slug": "famous-buildings-places",
        "name": "Famous buildings places",
        "type": "place",
        "short_description": "Locations and geographies that frame Famous buildings.",
        "description": "Places, regions, and built sites that give Famous buildings its map — where events and figures concentrate."
    },
    {
        "slug": "famous-buildings-events",
        "name": "Famous buildings events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Famous buildings.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Famous buildings timeline."
    },
    {
        "slug": "famous-buildings-objects",
        "name": "Famous buildings objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Famous buildings.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Famous buildings."
    },
    {
        "slug": "famous-buildings-factions",
        "name": "Famous buildings factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Famous buildings.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Famous buildings."
    },
    {
        "slug": "famous-buildings-concepts",
        "name": "Famous buildings concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Famous buildings.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Famous buildings readable as a lore graph."
    },
    {
        "slug": "famous-buildings-eras",
        "name": "Famous buildings eras",
        "type": "event",
        "short_description": "Periodization for Famous buildings.",
        "description": "Named eras and phases that help readers track how Famous buildings changes across time."
    },
    {
        "slug": "famous-buildings-works",
        "name": "Famous buildings works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Famous buildings.",
        "description": "Primary works and adaptations through which most audiences encounter Famous buildings."
    },
    {
        "slug": "famous-buildings-symbols",
        "name": "Famous buildings symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Famous buildings.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Famous buildings."
    },
    {
        "slug": "famous-buildings-controversies",
        "name": "Famous buildings controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Famous buildings.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Famous buildings argumentative."
    },
    {
        "slug": "famous-buildings-sources",
        "name": "Famous buildings sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Famous buildings.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Famous buildings."
    },
    {
        "slug": "famous-buildings-geography",
        "name": "Famous buildings geography",
        "type": "place",
        "short_description": "Broader geographic framing for Famous buildings.",
        "description": "Regions, routes, and spatial systems that situate Famous buildings beyond single named places."
    },
    {
        "slug": "famous-buildings-legacy",
        "name": "Famous buildings legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Famous buildings.",
        "description": "How Famous buildings continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "famous-buildings-practices",
        "name": "Famous buildings practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Famous buildings.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Famous buildings."
    },
    {
        "slug": "famous-buildings-entry-1",
        "name": "Famous buildings entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-2",
        "name": "Famous buildings entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-3",
        "name": "Famous buildings entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-4",
        "name": "Famous buildings entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-5",
        "name": "Famous buildings entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-6",
        "name": "Famous buildings entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-7",
        "name": "Famous buildings entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-8",
        "name": "Famous buildings entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-9",
        "name": "Famous buildings entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-10",
        "name": "Famous buildings entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-11",
        "name": "Famous buildings entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-12",
        "name": "Famous buildings entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-13",
        "name": "Famous buildings entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-14",
        "name": "Famous buildings entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-15",
        "name": "Famous buildings entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-16",
        "name": "Famous buildings entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-17",
        "name": "Famous buildings entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-18",
        "name": "Famous buildings entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-19",
        "name": "Famous buildings entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-20",
        "name": "Famous buildings entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-21",
        "name": "Famous buildings entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-22",
        "name": "Famous buildings entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-23",
        "name": "Famous buildings entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-buildings-entry-24",
        "name": "Famous buildings entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous buildings.",
        "description": "A supporting encyclopedia entry in the Famous buildings subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "famous-buildings",
        "famous-buildings-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "famous-buildings",
        "famous-buildings-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "famous-buildings",
        "famous-buildings-places",
        "contains",
        "Famous buildings places is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-events",
        "contains",
        "Famous buildings events is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-objects",
        "contains",
        "Famous buildings objects & artifacts is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-factions",
        "contains",
        "Famous buildings factions & groups is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-concepts",
        "contains",
        "Famous buildings concepts is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-eras",
        "contains",
        "Famous buildings eras is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-works",
        "contains",
        "Famous buildings works & media is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-symbols",
        "contains",
        "Famous buildings symbols is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-controversies",
        "contains",
        "Famous buildings controversies is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-sources",
        "contains",
        "Famous buildings sources is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-geography",
        "contains",
        "Famous buildings geography is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-legacy",
        "contains",
        "Famous buildings legacy is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-practices",
        "contains",
        "Famous buildings practices is a primary trailhead under Famous buildings.",
        0.88,
        0.82
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-1",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-2",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-3",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-4",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-5",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-6",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-7",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-8",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-9",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-10",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-11",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-12",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-13",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-14",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-15",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-16",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-17",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-18",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-19",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-20",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-21",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-22",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-23",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ],
    [
        "famous-buildings",
        "famous-buildings-entry-24",
        "contains",
        "Supporting entry under Famous buildings.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
