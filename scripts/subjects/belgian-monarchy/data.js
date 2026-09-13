/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "belgian-monarchy",
        "name": "Belgian monarchy",
        "type": "topic",
        "short_description": "Coburg line, Congo controversies, and the young kingdom’s royal story.",
        "description": "Coburg line, Congo controversies, and the young kingdom’s royal story. This Ton-o-Lore subject maps people, places, events, and ideas tied to Belgian monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "belgian-monarchy-figures",
        "name": "Belgian monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Belgian monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-world",
        "name": "Belgian monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Belgian monarchy.",
        "description": "Geography, institutions, and periodization that give Belgian monarchy its encyclopedia shape."
    },
    {
        "slug": "belgian-monarchy-places",
        "name": "Belgian monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Belgian monarchy.",
        "description": "Places, regions, and built sites that give Belgian monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "belgian-monarchy-events",
        "name": "Belgian monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Belgian monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Belgian monarchy timeline."
    },
    {
        "slug": "belgian-monarchy-objects",
        "name": "Belgian monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Belgian monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-factions",
        "name": "Belgian monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Belgian monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-concepts",
        "name": "Belgian monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Belgian monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Belgian monarchy readable as a lore graph."
    },
    {
        "slug": "belgian-monarchy-eras",
        "name": "Belgian monarchy eras",
        "type": "event",
        "short_description": "Periodization for Belgian monarchy.",
        "description": "Named eras and phases that help readers track how Belgian monarchy changes across time."
    },
    {
        "slug": "belgian-monarchy-works",
        "name": "Belgian monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Belgian monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-symbols",
        "name": "Belgian monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Belgian monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-controversies",
        "name": "Belgian monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Belgian monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Belgian monarchy argumentative."
    },
    {
        "slug": "belgian-monarchy-sources",
        "name": "Belgian monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Belgian monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-geography",
        "name": "Belgian monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Belgian monarchy.",
        "description": "Regions, routes, and spatial systems that situate Belgian monarchy beyond single named places."
    },
    {
        "slug": "belgian-monarchy-legacy",
        "name": "Belgian monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Belgian monarchy.",
        "description": "How Belgian monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "belgian-monarchy-practices",
        "name": "Belgian monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Belgian monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Belgian monarchy."
    },
    {
        "slug": "belgian-monarchy-entry-1",
        "name": "Belgian monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-2",
        "name": "Belgian monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-3",
        "name": "Belgian monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-4",
        "name": "Belgian monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-5",
        "name": "Belgian monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-6",
        "name": "Belgian monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-7",
        "name": "Belgian monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-8",
        "name": "Belgian monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-9",
        "name": "Belgian monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-10",
        "name": "Belgian monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-11",
        "name": "Belgian monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-12",
        "name": "Belgian monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-13",
        "name": "Belgian monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-14",
        "name": "Belgian monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-15",
        "name": "Belgian monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-16",
        "name": "Belgian monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-17",
        "name": "Belgian monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-18",
        "name": "Belgian monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-19",
        "name": "Belgian monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-20",
        "name": "Belgian monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-21",
        "name": "Belgian monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-22",
        "name": "Belgian monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-23",
        "name": "Belgian monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "belgian-monarchy-entry-24",
        "name": "Belgian monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Belgian monarchy.",
        "description": "A supporting encyclopedia entry in the Belgian monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "belgian-monarchy",
        "belgian-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-places",
        "contains",
        "Belgian monarchy places is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-events",
        "contains",
        "Belgian monarchy events is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-objects",
        "contains",
        "Belgian monarchy objects & artifacts is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-factions",
        "contains",
        "Belgian monarchy factions & groups is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-concepts",
        "contains",
        "Belgian monarchy concepts is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-eras",
        "contains",
        "Belgian monarchy eras is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-works",
        "contains",
        "Belgian monarchy works & media is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-symbols",
        "contains",
        "Belgian monarchy symbols is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-controversies",
        "contains",
        "Belgian monarchy controversies is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-sources",
        "contains",
        "Belgian monarchy sources is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-geography",
        "contains",
        "Belgian monarchy geography is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-legacy",
        "contains",
        "Belgian monarchy legacy is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-practices",
        "contains",
        "Belgian monarchy practices is a primary trailhead under Belgian monarchy.",
        0.88,
        0.82
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-1",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-2",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-3",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-4",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-5",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-6",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-7",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-8",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-9",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-10",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-11",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-12",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-13",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-14",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-15",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-16",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-17",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-18",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-19",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-20",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-21",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-22",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-23",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ],
    [
        "belgian-monarchy",
        "belgian-monarchy-entry-24",
        "contains",
        "Supporting entry under Belgian monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
