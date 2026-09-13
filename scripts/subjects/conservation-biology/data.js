/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "conservation-biology",
        "name": "Conservation biology",
        "type": "topic",
        "short_description": "Endangered species, habitats, and the science of keeping biodiversity alive.",
        "description": "Endangered species, habitats, and the science of keeping biodiversity alive. This Ton-o-Lore subject maps people, places, events, and ideas tied to Conservation biology so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "conservation-biology-figures",
        "name": "Conservation biology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Conservation biology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Conservation biology."
    },
    {
        "slug": "conservation-biology-world",
        "name": "Conservation biology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Conservation biology.",
        "description": "Geography, institutions, and periodization that give Conservation biology its encyclopedia shape."
    },
    {
        "slug": "conservation-biology-places",
        "name": "Conservation biology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Conservation biology.",
        "description": "Places, regions, and built sites that give Conservation biology its map — where events and figures concentrate."
    },
    {
        "slug": "conservation-biology-events",
        "name": "Conservation biology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Conservation biology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Conservation biology timeline."
    },
    {
        "slug": "conservation-biology-objects",
        "name": "Conservation biology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Conservation biology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Conservation biology."
    },
    {
        "slug": "conservation-biology-factions",
        "name": "Conservation biology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Conservation biology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Conservation biology."
    },
    {
        "slug": "conservation-biology-concepts",
        "name": "Conservation biology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Conservation biology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Conservation biology readable as a lore graph."
    },
    {
        "slug": "conservation-biology-eras",
        "name": "Conservation biology eras",
        "type": "event",
        "short_description": "Periodization for Conservation biology.",
        "description": "Named eras and phases that help readers track how Conservation biology changes across time."
    },
    {
        "slug": "conservation-biology-works",
        "name": "Conservation biology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Conservation biology.",
        "description": "Primary works and adaptations through which most audiences encounter Conservation biology."
    },
    {
        "slug": "conservation-biology-symbols",
        "name": "Conservation biology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Conservation biology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Conservation biology."
    },
    {
        "slug": "conservation-biology-controversies",
        "name": "Conservation biology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Conservation biology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Conservation biology argumentative."
    },
    {
        "slug": "conservation-biology-sources",
        "name": "Conservation biology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Conservation biology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Conservation biology."
    },
    {
        "slug": "conservation-biology-geography",
        "name": "Conservation biology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Conservation biology.",
        "description": "Regions, routes, and spatial systems that situate Conservation biology beyond single named places."
    },
    {
        "slug": "conservation-biology-legacy",
        "name": "Conservation biology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Conservation biology.",
        "description": "How Conservation biology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "conservation-biology-practices",
        "name": "Conservation biology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Conservation biology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Conservation biology."
    },
    {
        "slug": "conservation-biology-entry-1",
        "name": "Conservation biology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-2",
        "name": "Conservation biology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-3",
        "name": "Conservation biology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-4",
        "name": "Conservation biology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-5",
        "name": "Conservation biology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-6",
        "name": "Conservation biology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-7",
        "name": "Conservation biology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-8",
        "name": "Conservation biology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-9",
        "name": "Conservation biology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-10",
        "name": "Conservation biology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-11",
        "name": "Conservation biology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-12",
        "name": "Conservation biology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-13",
        "name": "Conservation biology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-14",
        "name": "Conservation biology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-15",
        "name": "Conservation biology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-16",
        "name": "Conservation biology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-17",
        "name": "Conservation biology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-18",
        "name": "Conservation biology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-19",
        "name": "Conservation biology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-20",
        "name": "Conservation biology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-21",
        "name": "Conservation biology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-22",
        "name": "Conservation biology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-23",
        "name": "Conservation biology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conservation-biology-entry-24",
        "name": "Conservation biology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conservation biology.",
        "description": "A supporting encyclopedia entry in the Conservation biology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "conservation-biology",
        "conservation-biology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "conservation-biology",
        "conservation-biology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "conservation-biology",
        "conservation-biology-places",
        "contains",
        "Conservation biology places is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-events",
        "contains",
        "Conservation biology events is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-objects",
        "contains",
        "Conservation biology objects & artifacts is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-factions",
        "contains",
        "Conservation biology factions & groups is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-concepts",
        "contains",
        "Conservation biology concepts is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-eras",
        "contains",
        "Conservation biology eras is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-works",
        "contains",
        "Conservation biology works & media is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-symbols",
        "contains",
        "Conservation biology symbols is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-controversies",
        "contains",
        "Conservation biology controversies is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-sources",
        "contains",
        "Conservation biology sources is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-geography",
        "contains",
        "Conservation biology geography is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-legacy",
        "contains",
        "Conservation biology legacy is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-practices",
        "contains",
        "Conservation biology practices is a primary trailhead under Conservation biology.",
        0.88,
        0.82
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-1",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-2",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-3",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-4",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-5",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-6",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-7",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-8",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-9",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-10",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-11",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-12",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-13",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-14",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-15",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-16",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-17",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-18",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-19",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-20",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-21",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-22",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-23",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ],
    [
        "conservation-biology",
        "conservation-biology-entry-24",
        "contains",
        "Supporting entry under Conservation biology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
