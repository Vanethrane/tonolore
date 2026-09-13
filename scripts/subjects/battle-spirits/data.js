/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "battle-spirits",
        "name": "Battle Spirits",
        "type": "topic",
        "short_description": "Core removal, spirit evolution, and Bandai’s long-running anime TCG continuum.",
        "description": "Core removal, spirit evolution, and Bandai’s long-running anime TCG continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Battle Spirits so readers can follow long-tail connections across card games."
    },
    {
        "slug": "battle-spirits-figures",
        "name": "Battle Spirits figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Battle Spirits.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Battle Spirits."
    },
    {
        "slug": "battle-spirits-world",
        "name": "Battle Spirits world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Battle Spirits.",
        "description": "Geography, institutions, and periodization that give Battle Spirits its encyclopedia shape."
    },
    {
        "slug": "battle-spirits-places",
        "name": "Battle Spirits places",
        "type": "place",
        "short_description": "Locations and geographies that frame Battle Spirits.",
        "description": "Places, regions, and built sites that give Battle Spirits its map — where events and figures concentrate."
    },
    {
        "slug": "battle-spirits-events",
        "name": "Battle Spirits events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Battle Spirits.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Battle Spirits timeline."
    },
    {
        "slug": "battle-spirits-objects",
        "name": "Battle Spirits objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Battle Spirits.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Battle Spirits."
    },
    {
        "slug": "battle-spirits-factions",
        "name": "Battle Spirits factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Battle Spirits.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Battle Spirits."
    },
    {
        "slug": "battle-spirits-concepts",
        "name": "Battle Spirits concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Battle Spirits.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Battle Spirits readable as a lore graph."
    },
    {
        "slug": "battle-spirits-eras",
        "name": "Battle Spirits eras",
        "type": "event",
        "short_description": "Periodization for Battle Spirits.",
        "description": "Named eras and phases that help readers track how Battle Spirits changes across time."
    },
    {
        "slug": "battle-spirits-works",
        "name": "Battle Spirits works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Battle Spirits.",
        "description": "Primary works and adaptations through which most audiences encounter Battle Spirits."
    },
    {
        "slug": "battle-spirits-symbols",
        "name": "Battle Spirits symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Battle Spirits.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Battle Spirits."
    },
    {
        "slug": "battle-spirits-controversies",
        "name": "Battle Spirits controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Battle Spirits.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Battle Spirits argumentative."
    },
    {
        "slug": "battle-spirits-sources",
        "name": "Battle Spirits sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Battle Spirits.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Battle Spirits."
    },
    {
        "slug": "battle-spirits-geography",
        "name": "Battle Spirits geography",
        "type": "place",
        "short_description": "Broader geographic framing for Battle Spirits.",
        "description": "Regions, routes, and spatial systems that situate Battle Spirits beyond single named places."
    },
    {
        "slug": "battle-spirits-legacy",
        "name": "Battle Spirits legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Battle Spirits.",
        "description": "How Battle Spirits continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "battle-spirits-practices",
        "name": "Battle Spirits practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Battle Spirits.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Battle Spirits."
    },
    {
        "slug": "battle-spirits-entry-1",
        "name": "Battle Spirits entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-2",
        "name": "Battle Spirits entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-3",
        "name": "Battle Spirits entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-4",
        "name": "Battle Spirits entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-5",
        "name": "Battle Spirits entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-6",
        "name": "Battle Spirits entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-7",
        "name": "Battle Spirits entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-8",
        "name": "Battle Spirits entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-9",
        "name": "Battle Spirits entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-10",
        "name": "Battle Spirits entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-11",
        "name": "Battle Spirits entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-12",
        "name": "Battle Spirits entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-13",
        "name": "Battle Spirits entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-14",
        "name": "Battle Spirits entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-15",
        "name": "Battle Spirits entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-16",
        "name": "Battle Spirits entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-17",
        "name": "Battle Spirits entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-18",
        "name": "Battle Spirits entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-19",
        "name": "Battle Spirits entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-20",
        "name": "Battle Spirits entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-21",
        "name": "Battle Spirits entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-22",
        "name": "Battle Spirits entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-23",
        "name": "Battle Spirits entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battle-spirits-entry-24",
        "name": "Battle Spirits entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battle Spirits.",
        "description": "A supporting encyclopedia entry in the Battle Spirits subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "battle-spirits",
        "battle-spirits-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "battle-spirits",
        "battle-spirits-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "battle-spirits",
        "battle-spirits-places",
        "contains",
        "Battle Spirits places is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-events",
        "contains",
        "Battle Spirits events is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-objects",
        "contains",
        "Battle Spirits objects & artifacts is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-factions",
        "contains",
        "Battle Spirits factions & groups is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-concepts",
        "contains",
        "Battle Spirits concepts is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-eras",
        "contains",
        "Battle Spirits eras is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-works",
        "contains",
        "Battle Spirits works & media is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-symbols",
        "contains",
        "Battle Spirits symbols is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-controversies",
        "contains",
        "Battle Spirits controversies is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-sources",
        "contains",
        "Battle Spirits sources is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-geography",
        "contains",
        "Battle Spirits geography is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-legacy",
        "contains",
        "Battle Spirits legacy is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-practices",
        "contains",
        "Battle Spirits practices is a primary trailhead under Battle Spirits.",
        0.88,
        0.82
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-1",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-2",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-3",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-4",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-5",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-6",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-7",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-8",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-9",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-10",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-11",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-12",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-13",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-14",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-15",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-16",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-17",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-18",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-19",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-20",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-21",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-22",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-23",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ],
    [
        "battle-spirits",
        "battle-spirits-entry-24",
        "contains",
        "Supporting entry under Battle Spirits.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
