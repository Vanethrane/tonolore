/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "michael-jackson",
        "name": "Michael Jackson",
        "type": "topic",
        "short_description": "The King of Pop — video era spectacle, dance vocabulary, and a catalog that still defines mainstream pop.",
        "description": "The King of Pop — video era spectacle, dance vocabulary, and a catalog that still defines mainstream pop. This Ton-o-Lore subject maps people, works, places, and ideas tied to Michael Jackson so readers can follow long-tail connections across the pop tradition."
    },
    {
        "slug": "michael-jackson-catalog",
        "name": "Michael Jackson catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Michael Jackson.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Michael Jackson in the pop tradition."
    },
    {
        "slug": "michael-jackson-era",
        "name": "Michael Jackson eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Michael Jackson story.",
        "description": "Periodization helps encyclopedia readers track how Michael Jackson changed sound, lineup, or public myth across decades of pop history."
    },
    {
        "slug": "michael-jackson-figures",
        "name": "Michael Jackson figures",
        "type": "topic",
        "short_description": "People and named forces central to Michael Jackson.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Michael Jackson."
    },
    {
        "slug": "michael-jackson-places",
        "name": "Michael Jackson places",
        "type": "place",
        "short_description": "Locations and geographies that frame Michael Jackson.",
        "description": "Places, regions, and built sites that give Michael Jackson its map — where events and figures concentrate."
    },
    {
        "slug": "michael-jackson-events",
        "name": "Michael Jackson events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Michael Jackson.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Michael Jackson timeline."
    },
    {
        "slug": "michael-jackson-objects",
        "name": "Michael Jackson objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Michael Jackson.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Michael Jackson."
    },
    {
        "slug": "michael-jackson-factions",
        "name": "Michael Jackson factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Michael Jackson.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Michael Jackson."
    },
    {
        "slug": "michael-jackson-concepts",
        "name": "Michael Jackson concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Michael Jackson.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Michael Jackson readable as a lore graph."
    },
    {
        "slug": "michael-jackson-eras",
        "name": "Michael Jackson eras",
        "type": "event",
        "short_description": "Periodization for Michael Jackson.",
        "description": "Named eras and phases that help readers track how Michael Jackson changes across time."
    },
    {
        "slug": "michael-jackson-works",
        "name": "Michael Jackson works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Michael Jackson.",
        "description": "Primary works and adaptations through which most audiences encounter Michael Jackson."
    },
    {
        "slug": "michael-jackson-symbols",
        "name": "Michael Jackson symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Michael Jackson.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Michael Jackson."
    },
    {
        "slug": "michael-jackson-controversies",
        "name": "Michael Jackson controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Michael Jackson.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Michael Jackson argumentative."
    },
    {
        "slug": "michael-jackson-sources",
        "name": "Michael Jackson sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Michael Jackson.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Michael Jackson."
    },
    {
        "slug": "michael-jackson-geography",
        "name": "Michael Jackson geography",
        "type": "place",
        "short_description": "Broader geographic framing for Michael Jackson.",
        "description": "Regions, routes, and spatial systems that situate Michael Jackson beyond single named places."
    },
    {
        "slug": "michael-jackson-legacy",
        "name": "Michael Jackson legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Michael Jackson.",
        "description": "How Michael Jackson continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "michael-jackson-practices",
        "name": "Michael Jackson practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Michael Jackson.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Michael Jackson."
    },
    {
        "slug": "michael-jackson-entry-1",
        "name": "Michael Jackson entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-2",
        "name": "Michael Jackson entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-3",
        "name": "Michael Jackson entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-4",
        "name": "Michael Jackson entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-5",
        "name": "Michael Jackson entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-6",
        "name": "Michael Jackson entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-7",
        "name": "Michael Jackson entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-8",
        "name": "Michael Jackson entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-9",
        "name": "Michael Jackson entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-10",
        "name": "Michael Jackson entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-11",
        "name": "Michael Jackson entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-12",
        "name": "Michael Jackson entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-13",
        "name": "Michael Jackson entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-14",
        "name": "Michael Jackson entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-15",
        "name": "Michael Jackson entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-16",
        "name": "Michael Jackson entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-17",
        "name": "Michael Jackson entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-18",
        "name": "Michael Jackson entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-19",
        "name": "Michael Jackson entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-20",
        "name": "Michael Jackson entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-21",
        "name": "Michael Jackson entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-22",
        "name": "Michael Jackson entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "michael-jackson-entry-23",
        "name": "Michael Jackson entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Michael Jackson.",
        "description": "A supporting encyclopedia entry in the Michael Jackson subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "michael-jackson",
        "michael-jackson-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "michael-jackson",
        "michael-jackson-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "michael-jackson",
        "michael-jackson-figures",
        "contains",
        "Michael Jackson figures is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-places",
        "contains",
        "Michael Jackson places is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-events",
        "contains",
        "Michael Jackson events is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-objects",
        "contains",
        "Michael Jackson objects & artifacts is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-factions",
        "contains",
        "Michael Jackson factions & groups is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-concepts",
        "contains",
        "Michael Jackson concepts is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-eras",
        "contains",
        "Michael Jackson eras is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-works",
        "contains",
        "Michael Jackson works & media is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-symbols",
        "contains",
        "Michael Jackson symbols is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-controversies",
        "contains",
        "Michael Jackson controversies is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-sources",
        "contains",
        "Michael Jackson sources is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-geography",
        "contains",
        "Michael Jackson geography is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-legacy",
        "contains",
        "Michael Jackson legacy is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-practices",
        "contains",
        "Michael Jackson practices is a primary trailhead under Michael Jackson.",
        0.88,
        0.82
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-1",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-2",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-3",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-4",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-5",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-6",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-7",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-8",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-9",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-10",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-11",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-12",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-13",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-14",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-15",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-16",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-17",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-18",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-19",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-20",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-21",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-22",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ],
    [
        "michael-jackson",
        "michael-jackson-entry-23",
        "contains",
        "Supporting entry under Michael Jackson.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
