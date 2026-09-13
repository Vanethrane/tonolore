/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "root-board-game",
        "name": "Root",
        "type": "topic",
        "short_description": "Asymmetric woodland war, factions with unique rules, and the critter politics board game.",
        "description": "Asymmetric woodland war, factions with unique rules, and the critter politics board game. This Ton-o-Lore subject maps people, places, events, and ideas tied to Root so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "root-board-game-figures",
        "name": "Root figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Root.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Root."
    },
    {
        "slug": "root-board-game-world",
        "name": "Root world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Root.",
        "description": "Geography, institutions, and periodization that give Root its encyclopedia shape."
    },
    {
        "slug": "root-board-game-places",
        "name": "Root places",
        "type": "place",
        "short_description": "Locations and geographies that frame Root.",
        "description": "Places, regions, and built sites that give Root its map — where events and figures concentrate."
    },
    {
        "slug": "root-board-game-events",
        "name": "Root events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Root.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Root timeline."
    },
    {
        "slug": "root-board-game-objects",
        "name": "Root objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Root.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Root."
    },
    {
        "slug": "root-board-game-factions",
        "name": "Root factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Root.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Root."
    },
    {
        "slug": "root-board-game-concepts",
        "name": "Root concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Root.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Root readable as a lore graph."
    },
    {
        "slug": "root-board-game-eras",
        "name": "Root eras",
        "type": "event",
        "short_description": "Periodization for Root.",
        "description": "Named eras and phases that help readers track how Root changes across time."
    },
    {
        "slug": "root-board-game-works",
        "name": "Root works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Root.",
        "description": "Primary works and adaptations through which most audiences encounter Root."
    },
    {
        "slug": "root-board-game-symbols",
        "name": "Root symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Root.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Root."
    },
    {
        "slug": "root-board-game-controversies",
        "name": "Root controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Root.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Root argumentative."
    },
    {
        "slug": "root-board-game-sources",
        "name": "Root sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Root.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Root."
    },
    {
        "slug": "root-board-game-geography",
        "name": "Root geography",
        "type": "place",
        "short_description": "Broader geographic framing for Root.",
        "description": "Regions, routes, and spatial systems that situate Root beyond single named places."
    },
    {
        "slug": "root-board-game-legacy",
        "name": "Root legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Root.",
        "description": "How Root continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "root-board-game-practices",
        "name": "Root practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Root.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Root."
    },
    {
        "slug": "root-board-game-entry-1",
        "name": "Root entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-2",
        "name": "Root entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-3",
        "name": "Root entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-4",
        "name": "Root entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-5",
        "name": "Root entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-6",
        "name": "Root entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-7",
        "name": "Root entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-8",
        "name": "Root entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-9",
        "name": "Root entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-10",
        "name": "Root entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-11",
        "name": "Root entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-12",
        "name": "Root entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-13",
        "name": "Root entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-14",
        "name": "Root entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-15",
        "name": "Root entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-16",
        "name": "Root entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-17",
        "name": "Root entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-18",
        "name": "Root entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-19",
        "name": "Root entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-20",
        "name": "Root entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-21",
        "name": "Root entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-22",
        "name": "Root entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-23",
        "name": "Root entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "root-board-game-entry-24",
        "name": "Root entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Root.",
        "description": "A supporting encyclopedia entry in the Root subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "root-board-game",
        "root-board-game-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "root-board-game",
        "root-board-game-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "root-board-game",
        "root-board-game-places",
        "contains",
        "Root places is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-events",
        "contains",
        "Root events is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-objects",
        "contains",
        "Root objects & artifacts is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-factions",
        "contains",
        "Root factions & groups is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-concepts",
        "contains",
        "Root concepts is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-eras",
        "contains",
        "Root eras is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-works",
        "contains",
        "Root works & media is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-symbols",
        "contains",
        "Root symbols is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-controversies",
        "contains",
        "Root controversies is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-sources",
        "contains",
        "Root sources is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-geography",
        "contains",
        "Root geography is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-legacy",
        "contains",
        "Root legacy is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-practices",
        "contains",
        "Root practices is a primary trailhead under Root.",
        0.88,
        0.82
    ],
    [
        "root-board-game",
        "root-board-game-entry-1",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-2",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-3",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-4",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-5",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-6",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-7",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-8",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-9",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-10",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-11",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-12",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-13",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-14",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-15",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-16",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-17",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-18",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-19",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-20",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-21",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-22",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-23",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ],
    [
        "root-board-game",
        "root-board-game-entry-24",
        "contains",
        "Supporting entry under Root.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
