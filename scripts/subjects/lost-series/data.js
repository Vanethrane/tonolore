/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lost-series",
        "name": "Lost",
        "type": "topic",
        "short_description": "Island mysteries, Dharma, and the serialized puzzle box that defined 2000s watercooler TV.",
        "description": "Island mysteries, Dharma, and the serialized puzzle box that defined 2000s watercooler TV. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lost so readers can follow long-tail connections across television."
    },
    {
        "slug": "lost-series-figures",
        "name": "Lost figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lost.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lost."
    },
    {
        "slug": "lost-series-world",
        "name": "Lost world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lost.",
        "description": "Geography, institutions, and periodization that give Lost its encyclopedia shape."
    },
    {
        "slug": "lost-series-places",
        "name": "Lost places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lost.",
        "description": "Places, regions, and built sites that give Lost its map — where events and figures concentrate."
    },
    {
        "slug": "lost-series-events",
        "name": "Lost events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lost.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lost timeline."
    },
    {
        "slug": "lost-series-objects",
        "name": "Lost objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lost.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lost."
    },
    {
        "slug": "lost-series-factions",
        "name": "Lost factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lost.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lost."
    },
    {
        "slug": "lost-series-concepts",
        "name": "Lost concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lost.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lost readable as a lore graph."
    },
    {
        "slug": "lost-series-eras",
        "name": "Lost eras",
        "type": "event",
        "short_description": "Periodization for Lost.",
        "description": "Named eras and phases that help readers track how Lost changes across time."
    },
    {
        "slug": "lost-series-works",
        "name": "Lost works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lost.",
        "description": "Primary works and adaptations through which most audiences encounter Lost."
    },
    {
        "slug": "lost-series-symbols",
        "name": "Lost symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lost.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lost."
    },
    {
        "slug": "lost-series-controversies",
        "name": "Lost controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lost.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lost argumentative."
    },
    {
        "slug": "lost-series-sources",
        "name": "Lost sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lost.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lost."
    },
    {
        "slug": "lost-series-geography",
        "name": "Lost geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lost.",
        "description": "Regions, routes, and spatial systems that situate Lost beyond single named places."
    },
    {
        "slug": "lost-series-legacy",
        "name": "Lost legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lost.",
        "description": "How Lost continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lost-series-practices",
        "name": "Lost practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Lost.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Lost."
    },
    {
        "slug": "lost-series-entry-1",
        "name": "Lost entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-2",
        "name": "Lost entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-3",
        "name": "Lost entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-4",
        "name": "Lost entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-5",
        "name": "Lost entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-6",
        "name": "Lost entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-7",
        "name": "Lost entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-8",
        "name": "Lost entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-9",
        "name": "Lost entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-10",
        "name": "Lost entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-11",
        "name": "Lost entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-12",
        "name": "Lost entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-13",
        "name": "Lost entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-14",
        "name": "Lost entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-15",
        "name": "Lost entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-16",
        "name": "Lost entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-17",
        "name": "Lost entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-18",
        "name": "Lost entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-19",
        "name": "Lost entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-20",
        "name": "Lost entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-21",
        "name": "Lost entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-22",
        "name": "Lost entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-23",
        "name": "Lost entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lost-series-entry-24",
        "name": "Lost entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lost.",
        "description": "A supporting encyclopedia entry in the Lost subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lost-series",
        "lost-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lost-series",
        "lost-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lost-series",
        "lost-series-places",
        "contains",
        "Lost places is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-events",
        "contains",
        "Lost events is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-objects",
        "contains",
        "Lost objects & artifacts is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-factions",
        "contains",
        "Lost factions & groups is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-concepts",
        "contains",
        "Lost concepts is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-eras",
        "contains",
        "Lost eras is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-works",
        "contains",
        "Lost works & media is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-symbols",
        "contains",
        "Lost symbols is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-controversies",
        "contains",
        "Lost controversies is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-sources",
        "contains",
        "Lost sources is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-geography",
        "contains",
        "Lost geography is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-legacy",
        "contains",
        "Lost legacy is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-practices",
        "contains",
        "Lost practices is a primary trailhead under Lost.",
        0.88,
        0.82
    ],
    [
        "lost-series",
        "lost-series-entry-1",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-2",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-3",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-4",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-5",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-6",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-7",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-8",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-9",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-10",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-11",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-12",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-13",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-14",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-15",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-16",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-17",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-18",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-19",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-20",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-21",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-22",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-23",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ],
    [
        "lost-series",
        "lost-series-entry-24",
        "contains",
        "Supporting entry under Lost.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
