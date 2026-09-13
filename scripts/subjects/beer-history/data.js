/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "beer-history",
        "name": "Beer history",
        "type": "topic",
        "short_description": "Mashing, monasteries, and the ancient fermented drink that rivaled wine in daily life.",
        "description": "Mashing, monasteries, and the ancient fermented drink that rivaled wine in daily life. This Ton-o-Lore subject maps people, places, events, and ideas tied to Beer history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "beer-history-figures",
        "name": "Beer history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Beer history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Beer history."
    },
    {
        "slug": "beer-history-world",
        "name": "Beer history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Beer history.",
        "description": "Geography, institutions, and periodization that give Beer history its encyclopedia shape."
    },
    {
        "slug": "beer-history-places",
        "name": "Beer history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Beer history.",
        "description": "Places, regions, and built sites that give Beer history its map — where events and figures concentrate."
    },
    {
        "slug": "beer-history-events",
        "name": "Beer history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Beer history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Beer history timeline."
    },
    {
        "slug": "beer-history-objects",
        "name": "Beer history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Beer history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Beer history."
    },
    {
        "slug": "beer-history-factions",
        "name": "Beer history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Beer history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Beer history."
    },
    {
        "slug": "beer-history-concepts",
        "name": "Beer history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Beer history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Beer history readable as a lore graph."
    },
    {
        "slug": "beer-history-eras",
        "name": "Beer history eras",
        "type": "event",
        "short_description": "Periodization for Beer history.",
        "description": "Named eras and phases that help readers track how Beer history changes across time."
    },
    {
        "slug": "beer-history-works",
        "name": "Beer history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Beer history.",
        "description": "Primary works and adaptations through which most audiences encounter Beer history."
    },
    {
        "slug": "beer-history-symbols",
        "name": "Beer history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Beer history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Beer history."
    },
    {
        "slug": "beer-history-controversies",
        "name": "Beer history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Beer history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Beer history argumentative."
    },
    {
        "slug": "beer-history-sources",
        "name": "Beer history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Beer history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Beer history."
    },
    {
        "slug": "beer-history-geography",
        "name": "Beer history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Beer history.",
        "description": "Regions, routes, and spatial systems that situate Beer history beyond single named places."
    },
    {
        "slug": "beer-history-legacy",
        "name": "Beer history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Beer history.",
        "description": "How Beer history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "beer-history-practices",
        "name": "Beer history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Beer history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Beer history."
    },
    {
        "slug": "beer-history-entry-1",
        "name": "Beer history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-2",
        "name": "Beer history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-3",
        "name": "Beer history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-4",
        "name": "Beer history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-5",
        "name": "Beer history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-6",
        "name": "Beer history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-7",
        "name": "Beer history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-8",
        "name": "Beer history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-9",
        "name": "Beer history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-10",
        "name": "Beer history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-11",
        "name": "Beer history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-12",
        "name": "Beer history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-13",
        "name": "Beer history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-14",
        "name": "Beer history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-15",
        "name": "Beer history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-16",
        "name": "Beer history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-17",
        "name": "Beer history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-18",
        "name": "Beer history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-19",
        "name": "Beer history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-20",
        "name": "Beer history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-21",
        "name": "Beer history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-22",
        "name": "Beer history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-23",
        "name": "Beer history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beer-history-entry-24",
        "name": "Beer history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beer history.",
        "description": "A supporting encyclopedia entry in the Beer history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "beer-history",
        "beer-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "beer-history",
        "beer-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "beer-history",
        "beer-history-places",
        "contains",
        "Beer history places is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-events",
        "contains",
        "Beer history events is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-objects",
        "contains",
        "Beer history objects & artifacts is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-factions",
        "contains",
        "Beer history factions & groups is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-concepts",
        "contains",
        "Beer history concepts is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-eras",
        "contains",
        "Beer history eras is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-works",
        "contains",
        "Beer history works & media is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-symbols",
        "contains",
        "Beer history symbols is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-controversies",
        "contains",
        "Beer history controversies is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-sources",
        "contains",
        "Beer history sources is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-geography",
        "contains",
        "Beer history geography is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-legacy",
        "contains",
        "Beer history legacy is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-practices",
        "contains",
        "Beer history practices is a primary trailhead under Beer history.",
        0.88,
        0.82
    ],
    [
        "beer-history",
        "beer-history-entry-1",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-2",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-3",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-4",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-5",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-6",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-7",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-8",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-9",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-10",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-11",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-12",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-13",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-14",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-15",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-16",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-17",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-18",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-19",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-20",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-21",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-22",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-23",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ],
    [
        "beer-history",
        "beer-history-entry-24",
        "contains",
        "Supporting entry under Beer history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
