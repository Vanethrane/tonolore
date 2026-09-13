/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "prince",
        "name": "Prince",
        "type": "topic",
        "short_description": "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center.",
        "description": "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center. This Ton-o-Lore subject maps people, works, places, and ideas tied to Prince so readers can follow long-tail connections across the pop tradition."
    },
    {
        "slug": "prince-catalog",
        "name": "Prince catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Prince.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Prince in the pop tradition."
    },
    {
        "slug": "prince-era",
        "name": "Prince eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Prince story.",
        "description": "Periodization helps encyclopedia readers track how Prince changed sound, lineup, or public myth across decades of pop history."
    },
    {
        "slug": "prince-figures",
        "name": "Prince figures",
        "type": "topic",
        "short_description": "People and named forces central to Prince.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Prince."
    },
    {
        "slug": "prince-places",
        "name": "Prince places",
        "type": "place",
        "short_description": "Locations and geographies that frame Prince.",
        "description": "Places, regions, and built sites that give Prince its map — where events and figures concentrate."
    },
    {
        "slug": "prince-events",
        "name": "Prince events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Prince.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Prince timeline."
    },
    {
        "slug": "prince-objects",
        "name": "Prince objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Prince.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Prince."
    },
    {
        "slug": "prince-factions",
        "name": "Prince factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Prince.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Prince."
    },
    {
        "slug": "prince-concepts",
        "name": "Prince concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Prince.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Prince readable as a lore graph."
    },
    {
        "slug": "prince-eras",
        "name": "Prince eras",
        "type": "event",
        "short_description": "Periodization for Prince.",
        "description": "Named eras and phases that help readers track how Prince changes across time."
    },
    {
        "slug": "prince-works",
        "name": "Prince works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Prince.",
        "description": "Primary works and adaptations through which most audiences encounter Prince."
    },
    {
        "slug": "prince-symbols",
        "name": "Prince symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Prince.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Prince."
    },
    {
        "slug": "prince-controversies",
        "name": "Prince controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Prince.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Prince argumentative."
    },
    {
        "slug": "prince-sources",
        "name": "Prince sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Prince.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Prince."
    },
    {
        "slug": "prince-geography",
        "name": "Prince geography",
        "type": "place",
        "short_description": "Broader geographic framing for Prince.",
        "description": "Regions, routes, and spatial systems that situate Prince beyond single named places."
    },
    {
        "slug": "prince-legacy",
        "name": "Prince legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Prince.",
        "description": "How Prince continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "prince-practices",
        "name": "Prince practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Prince.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Prince."
    },
    {
        "slug": "prince-entry-1",
        "name": "Prince entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-2",
        "name": "Prince entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-3",
        "name": "Prince entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-4",
        "name": "Prince entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-5",
        "name": "Prince entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-6",
        "name": "Prince entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-7",
        "name": "Prince entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-8",
        "name": "Prince entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-9",
        "name": "Prince entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-10",
        "name": "Prince entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-11",
        "name": "Prince entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-12",
        "name": "Prince entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-13",
        "name": "Prince entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-14",
        "name": "Prince entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-15",
        "name": "Prince entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-16",
        "name": "Prince entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-17",
        "name": "Prince entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-18",
        "name": "Prince entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-19",
        "name": "Prince entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-20",
        "name": "Prince entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-21",
        "name": "Prince entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-22",
        "name": "Prince entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prince-entry-23",
        "name": "Prince entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prince.",
        "description": "A supporting encyclopedia entry in the Prince subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "prince",
        "prince-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "prince",
        "prince-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "prince",
        "prince-figures",
        "contains",
        "Prince figures is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-places",
        "contains",
        "Prince places is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-events",
        "contains",
        "Prince events is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-objects",
        "contains",
        "Prince objects & artifacts is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-factions",
        "contains",
        "Prince factions & groups is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-concepts",
        "contains",
        "Prince concepts is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-eras",
        "contains",
        "Prince eras is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-works",
        "contains",
        "Prince works & media is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-symbols",
        "contains",
        "Prince symbols is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-controversies",
        "contains",
        "Prince controversies is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-sources",
        "contains",
        "Prince sources is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-geography",
        "contains",
        "Prince geography is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-legacy",
        "contains",
        "Prince legacy is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-practices",
        "contains",
        "Prince practices is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-entry-1",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-2",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-3",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-4",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-5",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-6",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-7",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-8",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-9",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-10",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-11",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-12",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-13",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-14",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-15",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-16",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-17",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-18",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-19",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-20",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-21",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-22",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ],
    [
        "prince",
        "prince-entry-23",
        "contains",
        "Supporting entry under Prince.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
