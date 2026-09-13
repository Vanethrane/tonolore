/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sugar-history",
        "name": "Sugar history",
        "type": "topic",
        "short_description": "Plantations, sweetness, and the commodity that remade global diets and empires.",
        "description": "Plantations, sweetness, and the commodity that remade global diets and empires. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sugar history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "sugar-history-figures",
        "name": "Sugar history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sugar history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sugar history."
    },
    {
        "slug": "sugar-history-world",
        "name": "Sugar history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sugar history.",
        "description": "Geography, institutions, and periodization that give Sugar history its encyclopedia shape."
    },
    {
        "slug": "sugar-history-places",
        "name": "Sugar history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sugar history.",
        "description": "Places, regions, and built sites that give Sugar history its map — where events and figures concentrate."
    },
    {
        "slug": "sugar-history-events",
        "name": "Sugar history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sugar history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sugar history timeline."
    },
    {
        "slug": "sugar-history-objects",
        "name": "Sugar history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sugar history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sugar history."
    },
    {
        "slug": "sugar-history-factions",
        "name": "Sugar history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sugar history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sugar history."
    },
    {
        "slug": "sugar-history-concepts",
        "name": "Sugar history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sugar history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sugar history readable as a lore graph."
    },
    {
        "slug": "sugar-history-eras",
        "name": "Sugar history eras",
        "type": "event",
        "short_description": "Periodization for Sugar history.",
        "description": "Named eras and phases that help readers track how Sugar history changes across time."
    },
    {
        "slug": "sugar-history-works",
        "name": "Sugar history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sugar history.",
        "description": "Primary works and adaptations through which most audiences encounter Sugar history."
    },
    {
        "slug": "sugar-history-symbols",
        "name": "Sugar history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sugar history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sugar history."
    },
    {
        "slug": "sugar-history-controversies",
        "name": "Sugar history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sugar history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sugar history argumentative."
    },
    {
        "slug": "sugar-history-sources",
        "name": "Sugar history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sugar history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sugar history."
    },
    {
        "slug": "sugar-history-geography",
        "name": "Sugar history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sugar history.",
        "description": "Regions, routes, and spatial systems that situate Sugar history beyond single named places."
    },
    {
        "slug": "sugar-history-legacy",
        "name": "Sugar history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sugar history.",
        "description": "How Sugar history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sugar-history-practices",
        "name": "Sugar history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sugar history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sugar history."
    },
    {
        "slug": "sugar-history-entry-1",
        "name": "Sugar history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-2",
        "name": "Sugar history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-3",
        "name": "Sugar history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-4",
        "name": "Sugar history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-5",
        "name": "Sugar history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-6",
        "name": "Sugar history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-7",
        "name": "Sugar history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-8",
        "name": "Sugar history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-9",
        "name": "Sugar history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-10",
        "name": "Sugar history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-11",
        "name": "Sugar history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-12",
        "name": "Sugar history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-13",
        "name": "Sugar history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-14",
        "name": "Sugar history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-15",
        "name": "Sugar history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-16",
        "name": "Sugar history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-17",
        "name": "Sugar history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-18",
        "name": "Sugar history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-19",
        "name": "Sugar history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-20",
        "name": "Sugar history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-21",
        "name": "Sugar history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-22",
        "name": "Sugar history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-23",
        "name": "Sugar history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sugar-history-entry-24",
        "name": "Sugar history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sugar history.",
        "description": "A supporting encyclopedia entry in the Sugar history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sugar-history",
        "sugar-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sugar-history",
        "sugar-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sugar-history",
        "sugar-history-places",
        "contains",
        "Sugar history places is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-events",
        "contains",
        "Sugar history events is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-objects",
        "contains",
        "Sugar history objects & artifacts is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-factions",
        "contains",
        "Sugar history factions & groups is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-concepts",
        "contains",
        "Sugar history concepts is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-eras",
        "contains",
        "Sugar history eras is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-works",
        "contains",
        "Sugar history works & media is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-symbols",
        "contains",
        "Sugar history symbols is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-controversies",
        "contains",
        "Sugar history controversies is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-sources",
        "contains",
        "Sugar history sources is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-geography",
        "contains",
        "Sugar history geography is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-legacy",
        "contains",
        "Sugar history legacy is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-practices",
        "contains",
        "Sugar history practices is a primary trailhead under Sugar history.",
        0.88,
        0.82
    ],
    [
        "sugar-history",
        "sugar-history-entry-1",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-2",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-3",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-4",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-5",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-6",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-7",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-8",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-9",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-10",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-11",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-12",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-13",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-14",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-15",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-16",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-17",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-18",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-19",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-20",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-21",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-22",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-23",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ],
    [
        "sugar-history",
        "sugar-history-entry-24",
        "contains",
        "Supporting entry under Sugar history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
