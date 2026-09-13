/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arcane-league",
        "name": "Arcane",
        "type": "topic",
        "short_description": "Piltover–Zaun class war, Hextech, and the League of Legends prestige animated saga.",
        "description": "Piltover–Zaun class war, Hextech, and the League of Legends prestige animated saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arcane so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "arcane-league-figures",
        "name": "Arcane figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arcane.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arcane."
    },
    {
        "slug": "arcane-league-world",
        "name": "Arcane world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arcane.",
        "description": "Geography, institutions, and periodization that give Arcane its encyclopedia shape."
    },
    {
        "slug": "arcane-league-places",
        "name": "Arcane places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arcane.",
        "description": "Places, regions, and built sites that give Arcane its map — where events and figures concentrate."
    },
    {
        "slug": "arcane-league-events",
        "name": "Arcane events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arcane.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arcane timeline."
    },
    {
        "slug": "arcane-league-objects",
        "name": "Arcane objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arcane.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arcane."
    },
    {
        "slug": "arcane-league-factions",
        "name": "Arcane factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arcane.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arcane."
    },
    {
        "slug": "arcane-league-concepts",
        "name": "Arcane concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arcane.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arcane readable as a lore graph."
    },
    {
        "slug": "arcane-league-eras",
        "name": "Arcane eras",
        "type": "event",
        "short_description": "Periodization for Arcane.",
        "description": "Named eras and phases that help readers track how Arcane changes across time."
    },
    {
        "slug": "arcane-league-works",
        "name": "Arcane works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arcane.",
        "description": "Primary works and adaptations through which most audiences encounter Arcane."
    },
    {
        "slug": "arcane-league-symbols",
        "name": "Arcane symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arcane.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arcane."
    },
    {
        "slug": "arcane-league-controversies",
        "name": "Arcane controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arcane.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arcane argumentative."
    },
    {
        "slug": "arcane-league-sources",
        "name": "Arcane sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arcane.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arcane."
    },
    {
        "slug": "arcane-league-geography",
        "name": "Arcane geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arcane.",
        "description": "Regions, routes, and spatial systems that situate Arcane beyond single named places."
    },
    {
        "slug": "arcane-league-legacy",
        "name": "Arcane legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arcane.",
        "description": "How Arcane continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "arcane-league-practices",
        "name": "Arcane practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Arcane.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Arcane."
    },
    {
        "slug": "arcane-league-entry-1",
        "name": "Arcane entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-2",
        "name": "Arcane entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-3",
        "name": "Arcane entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-4",
        "name": "Arcane entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-5",
        "name": "Arcane entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-6",
        "name": "Arcane entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-7",
        "name": "Arcane entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-8",
        "name": "Arcane entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-9",
        "name": "Arcane entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-10",
        "name": "Arcane entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-11",
        "name": "Arcane entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-12",
        "name": "Arcane entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-13",
        "name": "Arcane entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-14",
        "name": "Arcane entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-15",
        "name": "Arcane entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-16",
        "name": "Arcane entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-17",
        "name": "Arcane entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-18",
        "name": "Arcane entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-19",
        "name": "Arcane entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-20",
        "name": "Arcane entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-21",
        "name": "Arcane entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-22",
        "name": "Arcane entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-23",
        "name": "Arcane entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arcane-league-entry-24",
        "name": "Arcane entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arcane.",
        "description": "A supporting encyclopedia entry in the Arcane subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "arcane-league",
        "arcane-league-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arcane-league",
        "arcane-league-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arcane-league",
        "arcane-league-places",
        "contains",
        "Arcane places is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-events",
        "contains",
        "Arcane events is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-objects",
        "contains",
        "Arcane objects & artifacts is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-factions",
        "contains",
        "Arcane factions & groups is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-concepts",
        "contains",
        "Arcane concepts is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-eras",
        "contains",
        "Arcane eras is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-works",
        "contains",
        "Arcane works & media is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-symbols",
        "contains",
        "Arcane symbols is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-controversies",
        "contains",
        "Arcane controversies is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-sources",
        "contains",
        "Arcane sources is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-geography",
        "contains",
        "Arcane geography is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-legacy",
        "contains",
        "Arcane legacy is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-practices",
        "contains",
        "Arcane practices is a primary trailhead under Arcane.",
        0.88,
        0.82
    ],
    [
        "arcane-league",
        "arcane-league-entry-1",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-2",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-3",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-4",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-5",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-6",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-7",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-8",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-9",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-10",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-11",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-12",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-13",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-14",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-15",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-16",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-17",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-18",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-19",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-20",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-21",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-22",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-23",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ],
    [
        "arcane-league",
        "arcane-league-entry-24",
        "contains",
        "Supporting entry under Arcane.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
