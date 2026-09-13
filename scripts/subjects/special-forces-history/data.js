/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "special-forces-history",
        "name": "Special forces history",
        "type": "topic",
        "short_description": "Commandos, SOF units, and the elite raid tradition of twentieth-century war.",
        "description": "Commandos, SOF units, and the elite raid tradition of twentieth-century war. This Ton-o-Lore subject maps people, places, events, and ideas tied to Special forces history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "special-forces-history-figures",
        "name": "Special forces history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Special forces history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Special forces history."
    },
    {
        "slug": "special-forces-history-world",
        "name": "Special forces history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Special forces history.",
        "description": "Geography, institutions, and periodization that give Special forces history its encyclopedia shape."
    },
    {
        "slug": "special-forces-history-places",
        "name": "Special forces history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Special forces history.",
        "description": "Places, regions, and built sites that give Special forces history its map — where events and figures concentrate."
    },
    {
        "slug": "special-forces-history-events",
        "name": "Special forces history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Special forces history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Special forces history timeline."
    },
    {
        "slug": "special-forces-history-objects",
        "name": "Special forces history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Special forces history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Special forces history."
    },
    {
        "slug": "special-forces-history-factions",
        "name": "Special forces history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Special forces history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Special forces history."
    },
    {
        "slug": "special-forces-history-concepts",
        "name": "Special forces history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Special forces history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Special forces history readable as a lore graph."
    },
    {
        "slug": "special-forces-history-eras",
        "name": "Special forces history eras",
        "type": "event",
        "short_description": "Periodization for Special forces history.",
        "description": "Named eras and phases that help readers track how Special forces history changes across time."
    },
    {
        "slug": "special-forces-history-works",
        "name": "Special forces history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Special forces history.",
        "description": "Primary works and adaptations through which most audiences encounter Special forces history."
    },
    {
        "slug": "special-forces-history-symbols",
        "name": "Special forces history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Special forces history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Special forces history."
    },
    {
        "slug": "special-forces-history-controversies",
        "name": "Special forces history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Special forces history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Special forces history argumentative."
    },
    {
        "slug": "special-forces-history-sources",
        "name": "Special forces history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Special forces history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Special forces history."
    },
    {
        "slug": "special-forces-history-geography",
        "name": "Special forces history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Special forces history.",
        "description": "Regions, routes, and spatial systems that situate Special forces history beyond single named places."
    },
    {
        "slug": "special-forces-history-legacy",
        "name": "Special forces history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Special forces history.",
        "description": "How Special forces history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "special-forces-history-practices",
        "name": "Special forces history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Special forces history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Special forces history."
    },
    {
        "slug": "special-forces-history-entry-1",
        "name": "Special forces history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-2",
        "name": "Special forces history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-3",
        "name": "Special forces history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-4",
        "name": "Special forces history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-5",
        "name": "Special forces history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-6",
        "name": "Special forces history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-7",
        "name": "Special forces history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-8",
        "name": "Special forces history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-9",
        "name": "Special forces history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-10",
        "name": "Special forces history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-11",
        "name": "Special forces history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-12",
        "name": "Special forces history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-13",
        "name": "Special forces history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-14",
        "name": "Special forces history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-15",
        "name": "Special forces history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-16",
        "name": "Special forces history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-17",
        "name": "Special forces history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-18",
        "name": "Special forces history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-19",
        "name": "Special forces history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-20",
        "name": "Special forces history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-21",
        "name": "Special forces history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-22",
        "name": "Special forces history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-23",
        "name": "Special forces history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "special-forces-history-entry-24",
        "name": "Special forces history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Special forces history.",
        "description": "A supporting encyclopedia entry in the Special forces history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "special-forces-history",
        "special-forces-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "special-forces-history",
        "special-forces-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "special-forces-history",
        "special-forces-history-places",
        "contains",
        "Special forces history places is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-events",
        "contains",
        "Special forces history events is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-objects",
        "contains",
        "Special forces history objects & artifacts is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-factions",
        "contains",
        "Special forces history factions & groups is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-concepts",
        "contains",
        "Special forces history concepts is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-eras",
        "contains",
        "Special forces history eras is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-works",
        "contains",
        "Special forces history works & media is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-symbols",
        "contains",
        "Special forces history symbols is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-controversies",
        "contains",
        "Special forces history controversies is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-sources",
        "contains",
        "Special forces history sources is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-geography",
        "contains",
        "Special forces history geography is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-legacy",
        "contains",
        "Special forces history legacy is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-practices",
        "contains",
        "Special forces history practices is a primary trailhead under Special forces history.",
        0.88,
        0.82
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-1",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-2",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-3",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-4",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-5",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-6",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-7",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-8",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-9",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-10",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-11",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-12",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-13",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-14",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-15",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-16",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-17",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-18",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-19",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-20",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-21",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-22",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-23",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ],
    [
        "special-forces-history",
        "special-forces-history-entry-24",
        "contains",
        "Supporting entry under Special forces history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
