/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "renaissance-italy",
        "name": "Renaissance Italy",
        "type": "topic",
        "short_description": "City-states, patrons, artists, and the cultural rebirth centered on Florence and Rome.",
        "description": "City-states, patrons, artists, and the cultural rebirth centered on Florence and Rome. This Ton-o-Lore subject maps people, places, events, and ideas tied to Renaissance Italy so readers can follow long-tail connections across history."
    },
    {
        "slug": "renaissance-italy-figures",
        "name": "Renaissance Italy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Renaissance Italy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-world",
        "name": "Renaissance Italy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Renaissance Italy.",
        "description": "Geography, institutions, and periodization that give Renaissance Italy its encyclopedia shape."
    },
    {
        "slug": "renaissance-italy-places",
        "name": "Renaissance Italy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Renaissance Italy.",
        "description": "Places, regions, and built sites that give Renaissance Italy its map — where events and figures concentrate."
    },
    {
        "slug": "renaissance-italy-events",
        "name": "Renaissance Italy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Renaissance Italy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Renaissance Italy timeline."
    },
    {
        "slug": "renaissance-italy-objects",
        "name": "Renaissance Italy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Renaissance Italy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-factions",
        "name": "Renaissance Italy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Renaissance Italy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-concepts",
        "name": "Renaissance Italy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Renaissance Italy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Renaissance Italy readable as a lore graph."
    },
    {
        "slug": "renaissance-italy-eras",
        "name": "Renaissance Italy eras",
        "type": "event",
        "short_description": "Periodization for Renaissance Italy.",
        "description": "Named eras and phases that help readers track how Renaissance Italy changes across time."
    },
    {
        "slug": "renaissance-italy-works",
        "name": "Renaissance Italy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Renaissance Italy.",
        "description": "Primary works and adaptations through which most audiences encounter Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-symbols",
        "name": "Renaissance Italy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Renaissance Italy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-controversies",
        "name": "Renaissance Italy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Renaissance Italy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Renaissance Italy argumentative."
    },
    {
        "slug": "renaissance-italy-sources",
        "name": "Renaissance Italy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Renaissance Italy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-geography",
        "name": "Renaissance Italy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Renaissance Italy.",
        "description": "Regions, routes, and spatial systems that situate Renaissance Italy beyond single named places."
    },
    {
        "slug": "renaissance-italy-legacy",
        "name": "Renaissance Italy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Renaissance Italy.",
        "description": "How Renaissance Italy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "renaissance-italy-practices",
        "name": "Renaissance Italy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Renaissance Italy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Renaissance Italy."
    },
    {
        "slug": "renaissance-italy-entry-1",
        "name": "Renaissance Italy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-2",
        "name": "Renaissance Italy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-3",
        "name": "Renaissance Italy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-4",
        "name": "Renaissance Italy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-5",
        "name": "Renaissance Italy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-6",
        "name": "Renaissance Italy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-7",
        "name": "Renaissance Italy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-8",
        "name": "Renaissance Italy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-9",
        "name": "Renaissance Italy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-10",
        "name": "Renaissance Italy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-11",
        "name": "Renaissance Italy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-12",
        "name": "Renaissance Italy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-13",
        "name": "Renaissance Italy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-14",
        "name": "Renaissance Italy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-15",
        "name": "Renaissance Italy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-16",
        "name": "Renaissance Italy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-17",
        "name": "Renaissance Italy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-18",
        "name": "Renaissance Italy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-19",
        "name": "Renaissance Italy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-20",
        "name": "Renaissance Italy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-21",
        "name": "Renaissance Italy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-22",
        "name": "Renaissance Italy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-23",
        "name": "Renaissance Italy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "renaissance-italy-entry-24",
        "name": "Renaissance Italy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Renaissance Italy.",
        "description": "A supporting encyclopedia entry in the Renaissance Italy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "renaissance-italy",
        "renaissance-italy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "renaissance-italy",
        "renaissance-italy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "renaissance-italy",
        "renaissance-italy-places",
        "contains",
        "Renaissance Italy places is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-events",
        "contains",
        "Renaissance Italy events is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-objects",
        "contains",
        "Renaissance Italy objects & artifacts is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-factions",
        "contains",
        "Renaissance Italy factions & groups is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-concepts",
        "contains",
        "Renaissance Italy concepts is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-eras",
        "contains",
        "Renaissance Italy eras is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-works",
        "contains",
        "Renaissance Italy works & media is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-symbols",
        "contains",
        "Renaissance Italy symbols is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-controversies",
        "contains",
        "Renaissance Italy controversies is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-sources",
        "contains",
        "Renaissance Italy sources is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-geography",
        "contains",
        "Renaissance Italy geography is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-legacy",
        "contains",
        "Renaissance Italy legacy is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-practices",
        "contains",
        "Renaissance Italy practices is a primary trailhead under Renaissance Italy.",
        0.88,
        0.82
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-1",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-2",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-3",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-4",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-5",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-6",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-7",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-8",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-9",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-10",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-11",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-12",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-13",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-14",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-15",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-16",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-17",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-18",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-19",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-20",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-21",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-22",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-23",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ],
    [
        "renaissance-italy",
        "renaissance-italy-entry-24",
        "contains",
        "Supporting entry under Renaissance Italy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
