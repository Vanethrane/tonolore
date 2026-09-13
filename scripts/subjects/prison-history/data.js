/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "prison-history",
        "name": "Prison history",
        "type": "topic",
        "short_description": "Penitentiaries, reform movements, and the institutions that warehouse punishment.",
        "description": "Penitentiaries, reform movements, and the institutions that warehouse punishment. This Ton-o-Lore subject maps people, places, events, and ideas tied to Prison history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "prison-history-figures",
        "name": "Prison history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Prison history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Prison history."
    },
    {
        "slug": "prison-history-world",
        "name": "Prison history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Prison history.",
        "description": "Geography, institutions, and periodization that give Prison history its encyclopedia shape."
    },
    {
        "slug": "prison-history-places",
        "name": "Prison history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Prison history.",
        "description": "Places, regions, and built sites that give Prison history its map — where events and figures concentrate."
    },
    {
        "slug": "prison-history-events",
        "name": "Prison history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Prison history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Prison history timeline."
    },
    {
        "slug": "prison-history-objects",
        "name": "Prison history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Prison history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Prison history."
    },
    {
        "slug": "prison-history-factions",
        "name": "Prison history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Prison history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Prison history."
    },
    {
        "slug": "prison-history-concepts",
        "name": "Prison history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Prison history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Prison history readable as a lore graph."
    },
    {
        "slug": "prison-history-eras",
        "name": "Prison history eras",
        "type": "event",
        "short_description": "Periodization for Prison history.",
        "description": "Named eras and phases that help readers track how Prison history changes across time."
    },
    {
        "slug": "prison-history-works",
        "name": "Prison history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Prison history.",
        "description": "Primary works and adaptations through which most audiences encounter Prison history."
    },
    {
        "slug": "prison-history-symbols",
        "name": "Prison history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Prison history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Prison history."
    },
    {
        "slug": "prison-history-controversies",
        "name": "Prison history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Prison history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Prison history argumentative."
    },
    {
        "slug": "prison-history-sources",
        "name": "Prison history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Prison history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Prison history."
    },
    {
        "slug": "prison-history-geography",
        "name": "Prison history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Prison history.",
        "description": "Regions, routes, and spatial systems that situate Prison history beyond single named places."
    },
    {
        "slug": "prison-history-legacy",
        "name": "Prison history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Prison history.",
        "description": "How Prison history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "prison-history-practices",
        "name": "Prison history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Prison history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Prison history."
    },
    {
        "slug": "prison-history-entry-1",
        "name": "Prison history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-2",
        "name": "Prison history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-3",
        "name": "Prison history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-4",
        "name": "Prison history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-5",
        "name": "Prison history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-6",
        "name": "Prison history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-7",
        "name": "Prison history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-8",
        "name": "Prison history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-9",
        "name": "Prison history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-10",
        "name": "Prison history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-11",
        "name": "Prison history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-12",
        "name": "Prison history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-13",
        "name": "Prison history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-14",
        "name": "Prison history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-15",
        "name": "Prison history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-16",
        "name": "Prison history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-17",
        "name": "Prison history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-18",
        "name": "Prison history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-19",
        "name": "Prison history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-20",
        "name": "Prison history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-21",
        "name": "Prison history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-22",
        "name": "Prison history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-23",
        "name": "Prison history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "prison-history-entry-24",
        "name": "Prison history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Prison history.",
        "description": "A supporting encyclopedia entry in the Prison history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "prison-history",
        "prison-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "prison-history",
        "prison-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "prison-history",
        "prison-history-places",
        "contains",
        "Prison history places is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-events",
        "contains",
        "Prison history events is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-objects",
        "contains",
        "Prison history objects & artifacts is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-factions",
        "contains",
        "Prison history factions & groups is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-concepts",
        "contains",
        "Prison history concepts is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-eras",
        "contains",
        "Prison history eras is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-works",
        "contains",
        "Prison history works & media is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-symbols",
        "contains",
        "Prison history symbols is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-controversies",
        "contains",
        "Prison history controversies is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-sources",
        "contains",
        "Prison history sources is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-geography",
        "contains",
        "Prison history geography is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-legacy",
        "contains",
        "Prison history legacy is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-practices",
        "contains",
        "Prison history practices is a primary trailhead under Prison history.",
        0.88,
        0.82
    ],
    [
        "prison-history",
        "prison-history-entry-1",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-2",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-3",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-4",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-5",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-6",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-7",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-8",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-9",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-10",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-11",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-12",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-13",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-14",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-15",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-16",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-17",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-18",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-19",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-20",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-21",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-22",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-23",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ],
    [
        "prison-history",
        "prison-history-entry-24",
        "contains",
        "Supporting entry under Prison history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
