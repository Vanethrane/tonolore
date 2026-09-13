/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "swedish-monarchy",
        "name": "Swedish monarchy",
        "type": "topic",
        "short_description": "Vasa to Bernadotte, and the Scandinavian crown with deep Baltic history.",
        "description": "Vasa to Bernadotte, and the Scandinavian crown with deep Baltic history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Swedish monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "swedish-monarchy-figures",
        "name": "Swedish monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Swedish monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-world",
        "name": "Swedish monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Swedish monarchy.",
        "description": "Geography, institutions, and periodization that give Swedish monarchy its encyclopedia shape."
    },
    {
        "slug": "swedish-monarchy-places",
        "name": "Swedish monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Swedish monarchy.",
        "description": "Places, regions, and built sites that give Swedish monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "swedish-monarchy-events",
        "name": "Swedish monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Swedish monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Swedish monarchy timeline."
    },
    {
        "slug": "swedish-monarchy-objects",
        "name": "Swedish monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Swedish monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-factions",
        "name": "Swedish monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Swedish monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-concepts",
        "name": "Swedish monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Swedish monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Swedish monarchy readable as a lore graph."
    },
    {
        "slug": "swedish-monarchy-eras",
        "name": "Swedish monarchy eras",
        "type": "event",
        "short_description": "Periodization for Swedish monarchy.",
        "description": "Named eras and phases that help readers track how Swedish monarchy changes across time."
    },
    {
        "slug": "swedish-monarchy-works",
        "name": "Swedish monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Swedish monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-symbols",
        "name": "Swedish monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Swedish monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-controversies",
        "name": "Swedish monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Swedish monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Swedish monarchy argumentative."
    },
    {
        "slug": "swedish-monarchy-sources",
        "name": "Swedish monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Swedish monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-geography",
        "name": "Swedish monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Swedish monarchy.",
        "description": "Regions, routes, and spatial systems that situate Swedish monarchy beyond single named places."
    },
    {
        "slug": "swedish-monarchy-legacy",
        "name": "Swedish monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Swedish monarchy.",
        "description": "How Swedish monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "swedish-monarchy-practices",
        "name": "Swedish monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Swedish monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Swedish monarchy."
    },
    {
        "slug": "swedish-monarchy-entry-1",
        "name": "Swedish monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-2",
        "name": "Swedish monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-3",
        "name": "Swedish monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-4",
        "name": "Swedish monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-5",
        "name": "Swedish monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-6",
        "name": "Swedish monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-7",
        "name": "Swedish monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-8",
        "name": "Swedish monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-9",
        "name": "Swedish monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-10",
        "name": "Swedish monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-11",
        "name": "Swedish monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-12",
        "name": "Swedish monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-13",
        "name": "Swedish monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-14",
        "name": "Swedish monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-15",
        "name": "Swedish monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-16",
        "name": "Swedish monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-17",
        "name": "Swedish monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-18",
        "name": "Swedish monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-19",
        "name": "Swedish monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-20",
        "name": "Swedish monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-21",
        "name": "Swedish monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-22",
        "name": "Swedish monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-23",
        "name": "Swedish monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "swedish-monarchy-entry-24",
        "name": "Swedish monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Swedish monarchy.",
        "description": "A supporting encyclopedia entry in the Swedish monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "swedish-monarchy",
        "swedish-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-places",
        "contains",
        "Swedish monarchy places is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-events",
        "contains",
        "Swedish monarchy events is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-objects",
        "contains",
        "Swedish monarchy objects & artifacts is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-factions",
        "contains",
        "Swedish monarchy factions & groups is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-concepts",
        "contains",
        "Swedish monarchy concepts is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-eras",
        "contains",
        "Swedish monarchy eras is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-works",
        "contains",
        "Swedish monarchy works & media is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-symbols",
        "contains",
        "Swedish monarchy symbols is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-controversies",
        "contains",
        "Swedish monarchy controversies is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-sources",
        "contains",
        "Swedish monarchy sources is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-geography",
        "contains",
        "Swedish monarchy geography is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-legacy",
        "contains",
        "Swedish monarchy legacy is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-practices",
        "contains",
        "Swedish monarchy practices is a primary trailhead under Swedish monarchy.",
        0.88,
        0.82
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-1",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-2",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-3",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-4",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-5",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-6",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-7",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-8",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-9",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-10",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-11",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-12",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-13",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-14",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-15",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-16",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-17",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-18",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-19",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-20",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-21",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-22",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-23",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ],
    [
        "swedish-monarchy",
        "swedish-monarchy-entry-24",
        "contains",
        "Supporting entry under Swedish monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
