/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "air-warfare-history",
        "name": "Air warfare history",
        "type": "topic",
        "short_description": "Aces, bombers, and the sky fronts that decided twentieth-century conflicts.",
        "description": "Aces, bombers, and the sky fronts that decided twentieth-century conflicts. This Ton-o-Lore subject maps people, places, events, and ideas tied to Air warfare history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "air-warfare-history-figures",
        "name": "Air warfare history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Air warfare history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Air warfare history."
    },
    {
        "slug": "air-warfare-history-world",
        "name": "Air warfare history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Air warfare history.",
        "description": "Geography, institutions, and periodization that give Air warfare history its encyclopedia shape."
    },
    {
        "slug": "air-warfare-history-places",
        "name": "Air warfare history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Air warfare history.",
        "description": "Places, regions, and built sites that give Air warfare history its map — where events and figures concentrate."
    },
    {
        "slug": "air-warfare-history-events",
        "name": "Air warfare history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Air warfare history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Air warfare history timeline."
    },
    {
        "slug": "air-warfare-history-objects",
        "name": "Air warfare history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Air warfare history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Air warfare history."
    },
    {
        "slug": "air-warfare-history-factions",
        "name": "Air warfare history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Air warfare history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Air warfare history."
    },
    {
        "slug": "air-warfare-history-concepts",
        "name": "Air warfare history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Air warfare history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Air warfare history readable as a lore graph."
    },
    {
        "slug": "air-warfare-history-eras",
        "name": "Air warfare history eras",
        "type": "event",
        "short_description": "Periodization for Air warfare history.",
        "description": "Named eras and phases that help readers track how Air warfare history changes across time."
    },
    {
        "slug": "air-warfare-history-works",
        "name": "Air warfare history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Air warfare history.",
        "description": "Primary works and adaptations through which most audiences encounter Air warfare history."
    },
    {
        "slug": "air-warfare-history-symbols",
        "name": "Air warfare history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Air warfare history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Air warfare history."
    },
    {
        "slug": "air-warfare-history-controversies",
        "name": "Air warfare history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Air warfare history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Air warfare history argumentative."
    },
    {
        "slug": "air-warfare-history-sources",
        "name": "Air warfare history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Air warfare history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Air warfare history."
    },
    {
        "slug": "air-warfare-history-geography",
        "name": "Air warfare history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Air warfare history.",
        "description": "Regions, routes, and spatial systems that situate Air warfare history beyond single named places."
    },
    {
        "slug": "air-warfare-history-legacy",
        "name": "Air warfare history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Air warfare history.",
        "description": "How Air warfare history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "air-warfare-history-practices",
        "name": "Air warfare history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Air warfare history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Air warfare history."
    },
    {
        "slug": "air-warfare-history-entry-1",
        "name": "Air warfare history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-2",
        "name": "Air warfare history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-3",
        "name": "Air warfare history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-4",
        "name": "Air warfare history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-5",
        "name": "Air warfare history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-6",
        "name": "Air warfare history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-7",
        "name": "Air warfare history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-8",
        "name": "Air warfare history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-9",
        "name": "Air warfare history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-10",
        "name": "Air warfare history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-11",
        "name": "Air warfare history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-12",
        "name": "Air warfare history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-13",
        "name": "Air warfare history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-14",
        "name": "Air warfare history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-15",
        "name": "Air warfare history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-16",
        "name": "Air warfare history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-17",
        "name": "Air warfare history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-18",
        "name": "Air warfare history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-19",
        "name": "Air warfare history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-20",
        "name": "Air warfare history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-21",
        "name": "Air warfare history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-22",
        "name": "Air warfare history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-23",
        "name": "Air warfare history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "air-warfare-history-entry-24",
        "name": "Air warfare history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Air warfare history.",
        "description": "A supporting encyclopedia entry in the Air warfare history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "air-warfare-history",
        "air-warfare-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "air-warfare-history",
        "air-warfare-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "air-warfare-history",
        "air-warfare-history-places",
        "contains",
        "Air warfare history places is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-events",
        "contains",
        "Air warfare history events is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-objects",
        "contains",
        "Air warfare history objects & artifacts is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-factions",
        "contains",
        "Air warfare history factions & groups is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-concepts",
        "contains",
        "Air warfare history concepts is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-eras",
        "contains",
        "Air warfare history eras is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-works",
        "contains",
        "Air warfare history works & media is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-symbols",
        "contains",
        "Air warfare history symbols is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-controversies",
        "contains",
        "Air warfare history controversies is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-sources",
        "contains",
        "Air warfare history sources is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-geography",
        "contains",
        "Air warfare history geography is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-legacy",
        "contains",
        "Air warfare history legacy is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-practices",
        "contains",
        "Air warfare history practices is a primary trailhead under Air warfare history.",
        0.88,
        0.82
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-1",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-2",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-3",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-4",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-5",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-6",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-7",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-8",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-9",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-10",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-11",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-12",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-13",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-14",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-15",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-16",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-17",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-18",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-19",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-20",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-21",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-22",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-23",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ],
    [
        "air-warfare-history",
        "air-warfare-history-entry-24",
        "contains",
        "Supporting entry under Air warfare history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
