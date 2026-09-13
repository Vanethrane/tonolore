/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dragon-ball-fighterz",
        "name": "Dragon Ball FighterZ",
        "type": "topic",
        "short_description": "Anime tag teams, sparking blasts, and Arc System’s high-production Dragon Ball fighter.",
        "description": "Anime tag teams, sparking blasts, and Arc System’s high-production Dragon Ball fighter. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dragon Ball FighterZ so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "dragon-ball-fighterz-figures",
        "name": "Dragon Ball FighterZ figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dragon Ball FighterZ.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-world",
        "name": "Dragon Ball FighterZ world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dragon Ball FighterZ.",
        "description": "Geography, institutions, and periodization that give Dragon Ball FighterZ its encyclopedia shape."
    },
    {
        "slug": "dragon-ball-fighterz-places",
        "name": "Dragon Ball FighterZ places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dragon Ball FighterZ.",
        "description": "Places, regions, and built sites that give Dragon Ball FighterZ its map — where events and figures concentrate."
    },
    {
        "slug": "dragon-ball-fighterz-events",
        "name": "Dragon Ball FighterZ events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dragon Ball FighterZ.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dragon Ball FighterZ timeline."
    },
    {
        "slug": "dragon-ball-fighterz-objects",
        "name": "Dragon Ball FighterZ objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dragon Ball FighterZ.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-factions",
        "name": "Dragon Ball FighterZ factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dragon Ball FighterZ.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-concepts",
        "name": "Dragon Ball FighterZ concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dragon Ball FighterZ.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dragon Ball FighterZ readable as a lore graph."
    },
    {
        "slug": "dragon-ball-fighterz-eras",
        "name": "Dragon Ball FighterZ eras",
        "type": "event",
        "short_description": "Periodization for Dragon Ball FighterZ.",
        "description": "Named eras and phases that help readers track how Dragon Ball FighterZ changes across time."
    },
    {
        "slug": "dragon-ball-fighterz-works",
        "name": "Dragon Ball FighterZ works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dragon Ball FighterZ.",
        "description": "Primary works and adaptations through which most audiences encounter Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-symbols",
        "name": "Dragon Ball FighterZ symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dragon Ball FighterZ.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-controversies",
        "name": "Dragon Ball FighterZ controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dragon Ball FighterZ.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dragon Ball FighterZ argumentative."
    },
    {
        "slug": "dragon-ball-fighterz-sources",
        "name": "Dragon Ball FighterZ sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dragon Ball FighterZ.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-geography",
        "name": "Dragon Ball FighterZ geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dragon Ball FighterZ.",
        "description": "Regions, routes, and spatial systems that situate Dragon Ball FighterZ beyond single named places."
    },
    {
        "slug": "dragon-ball-fighterz-legacy",
        "name": "Dragon Ball FighterZ legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dragon Ball FighterZ.",
        "description": "How Dragon Ball FighterZ continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dragon-ball-fighterz-practices",
        "name": "Dragon Ball FighterZ practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dragon Ball FighterZ.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dragon Ball FighterZ."
    },
    {
        "slug": "dragon-ball-fighterz-entry-1",
        "name": "Dragon Ball FighterZ entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-2",
        "name": "Dragon Ball FighterZ entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-3",
        "name": "Dragon Ball FighterZ entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-4",
        "name": "Dragon Ball FighterZ entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-5",
        "name": "Dragon Ball FighterZ entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-6",
        "name": "Dragon Ball FighterZ entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-7",
        "name": "Dragon Ball FighterZ entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-8",
        "name": "Dragon Ball FighterZ entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-9",
        "name": "Dragon Ball FighterZ entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-10",
        "name": "Dragon Ball FighterZ entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-11",
        "name": "Dragon Ball FighterZ entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-12",
        "name": "Dragon Ball FighterZ entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-13",
        "name": "Dragon Ball FighterZ entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-14",
        "name": "Dragon Ball FighterZ entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-15",
        "name": "Dragon Ball FighterZ entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-16",
        "name": "Dragon Ball FighterZ entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-17",
        "name": "Dragon Ball FighterZ entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-18",
        "name": "Dragon Ball FighterZ entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-19",
        "name": "Dragon Ball FighterZ entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-20",
        "name": "Dragon Ball FighterZ entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-21",
        "name": "Dragon Ball FighterZ entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-22",
        "name": "Dragon Ball FighterZ entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-23",
        "name": "Dragon Ball FighterZ entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-fighterz-entry-24",
        "name": "Dragon Ball FighterZ entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball FighterZ.",
        "description": "A supporting encyclopedia entry in the Dragon Ball FighterZ subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-places",
        "contains",
        "Dragon Ball FighterZ places is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-events",
        "contains",
        "Dragon Ball FighterZ events is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-objects",
        "contains",
        "Dragon Ball FighterZ objects & artifacts is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-factions",
        "contains",
        "Dragon Ball FighterZ factions & groups is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-concepts",
        "contains",
        "Dragon Ball FighterZ concepts is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-eras",
        "contains",
        "Dragon Ball FighterZ eras is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-works",
        "contains",
        "Dragon Ball FighterZ works & media is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-symbols",
        "contains",
        "Dragon Ball FighterZ symbols is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-controversies",
        "contains",
        "Dragon Ball FighterZ controversies is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-sources",
        "contains",
        "Dragon Ball FighterZ sources is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-geography",
        "contains",
        "Dragon Ball FighterZ geography is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-legacy",
        "contains",
        "Dragon Ball FighterZ legacy is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-practices",
        "contains",
        "Dragon Ball FighterZ practices is a primary trailhead under Dragon Ball FighterZ.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-1",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-2",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-3",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-4",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-5",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-6",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-7",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-8",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-9",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-10",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-11",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-12",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-13",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-14",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-15",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-16",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-17",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-18",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-19",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-20",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-21",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-22",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-23",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-fighterz",
        "dragon-ball-fighterz-entry-24",
        "contains",
        "Supporting entry under Dragon Ball FighterZ.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
