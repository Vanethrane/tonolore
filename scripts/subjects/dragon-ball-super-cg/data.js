/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dragon-ball-super-cg",
        "name": "Dragon Ball Super Card Game",
        "type": "topic",
        "short_description": "Leader life, combos, and the Super-era TCG of Z fighters and multiverse sagas.",
        "description": "Leader life, combos, and the Super-era TCG of Z fighters and multiverse sagas. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dragon Ball Super Card Game so readers can follow long-tail connections across card games."
    },
    {
        "slug": "dragon-ball-super-cg-figures",
        "name": "Dragon Ball Super Card Game figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dragon Ball Super Card Game.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-world",
        "name": "Dragon Ball Super Card Game world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dragon Ball Super Card Game.",
        "description": "Geography, institutions, and periodization that give Dragon Ball Super Card Game its encyclopedia shape."
    },
    {
        "slug": "dragon-ball-super-cg-places",
        "name": "Dragon Ball Super Card Game places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dragon Ball Super Card Game.",
        "description": "Places, regions, and built sites that give Dragon Ball Super Card Game its map — where events and figures concentrate."
    },
    {
        "slug": "dragon-ball-super-cg-events",
        "name": "Dragon Ball Super Card Game events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dragon Ball Super Card Game.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dragon Ball Super Card Game timeline."
    },
    {
        "slug": "dragon-ball-super-cg-objects",
        "name": "Dragon Ball Super Card Game objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dragon Ball Super Card Game.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-factions",
        "name": "Dragon Ball Super Card Game factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dragon Ball Super Card Game.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-concepts",
        "name": "Dragon Ball Super Card Game concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dragon Ball Super Card Game.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dragon Ball Super Card Game readable as a lore graph."
    },
    {
        "slug": "dragon-ball-super-cg-eras",
        "name": "Dragon Ball Super Card Game eras",
        "type": "event",
        "short_description": "Periodization for Dragon Ball Super Card Game.",
        "description": "Named eras and phases that help readers track how Dragon Ball Super Card Game changes across time."
    },
    {
        "slug": "dragon-ball-super-cg-works",
        "name": "Dragon Ball Super Card Game works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dragon Ball Super Card Game.",
        "description": "Primary works and adaptations through which most audiences encounter Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-symbols",
        "name": "Dragon Ball Super Card Game symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dragon Ball Super Card Game.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-controversies",
        "name": "Dragon Ball Super Card Game controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dragon Ball Super Card Game.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dragon Ball Super Card Game argumentative."
    },
    {
        "slug": "dragon-ball-super-cg-sources",
        "name": "Dragon Ball Super Card Game sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dragon Ball Super Card Game.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-geography",
        "name": "Dragon Ball Super Card Game geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dragon Ball Super Card Game.",
        "description": "Regions, routes, and spatial systems that situate Dragon Ball Super Card Game beyond single named places."
    },
    {
        "slug": "dragon-ball-super-cg-legacy",
        "name": "Dragon Ball Super Card Game legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dragon Ball Super Card Game.",
        "description": "How Dragon Ball Super Card Game continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dragon-ball-super-cg-practices",
        "name": "Dragon Ball Super Card Game practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dragon Ball Super Card Game.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dragon Ball Super Card Game."
    },
    {
        "slug": "dragon-ball-super-cg-entry-1",
        "name": "Dragon Ball Super Card Game entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-2",
        "name": "Dragon Ball Super Card Game entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-3",
        "name": "Dragon Ball Super Card Game entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-4",
        "name": "Dragon Ball Super Card Game entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-5",
        "name": "Dragon Ball Super Card Game entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-6",
        "name": "Dragon Ball Super Card Game entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-7",
        "name": "Dragon Ball Super Card Game entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-8",
        "name": "Dragon Ball Super Card Game entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-9",
        "name": "Dragon Ball Super Card Game entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-10",
        "name": "Dragon Ball Super Card Game entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-11",
        "name": "Dragon Ball Super Card Game entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-12",
        "name": "Dragon Ball Super Card Game entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-13",
        "name": "Dragon Ball Super Card Game entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-14",
        "name": "Dragon Ball Super Card Game entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-15",
        "name": "Dragon Ball Super Card Game entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-16",
        "name": "Dragon Ball Super Card Game entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-17",
        "name": "Dragon Ball Super Card Game entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-18",
        "name": "Dragon Ball Super Card Game entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-19",
        "name": "Dragon Ball Super Card Game entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-20",
        "name": "Dragon Ball Super Card Game entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-21",
        "name": "Dragon Ball Super Card Game entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-22",
        "name": "Dragon Ball Super Card Game entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-23",
        "name": "Dragon Ball Super Card Game entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dragon-ball-super-cg-entry-24",
        "name": "Dragon Ball Super Card Game entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dragon Ball Super Card Game.",
        "description": "A supporting encyclopedia entry in the Dragon Ball Super Card Game subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-places",
        "contains",
        "Dragon Ball Super Card Game places is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-events",
        "contains",
        "Dragon Ball Super Card Game events is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-objects",
        "contains",
        "Dragon Ball Super Card Game objects & artifacts is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-factions",
        "contains",
        "Dragon Ball Super Card Game factions & groups is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-concepts",
        "contains",
        "Dragon Ball Super Card Game concepts is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-eras",
        "contains",
        "Dragon Ball Super Card Game eras is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-works",
        "contains",
        "Dragon Ball Super Card Game works & media is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-symbols",
        "contains",
        "Dragon Ball Super Card Game symbols is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-controversies",
        "contains",
        "Dragon Ball Super Card Game controversies is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-sources",
        "contains",
        "Dragon Ball Super Card Game sources is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-geography",
        "contains",
        "Dragon Ball Super Card Game geography is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-legacy",
        "contains",
        "Dragon Ball Super Card Game legacy is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-practices",
        "contains",
        "Dragon Ball Super Card Game practices is a primary trailhead under Dragon Ball Super Card Game.",
        0.88,
        0.82
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-1",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-2",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-3",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-4",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-5",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-6",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-7",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-8",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-9",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-10",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-11",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-12",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-13",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-14",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-15",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-16",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-17",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-18",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-19",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-20",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-21",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-22",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-23",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ],
    [
        "dragon-ball-super-cg",
        "dragon-ball-super-cg-entry-24",
        "contains",
        "Supporting entry under Dragon Ball Super Card Game.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
