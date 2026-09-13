/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "judaism-history",
        "name": "Judaism history",
        "type": "topic",
        "short_description": "Covenant, diaspora, and the oldest continuous Abrahamic tradition.",
        "description": "Covenant, diaspora, and the oldest continuous Abrahamic tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Judaism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "judaism-history-figures",
        "name": "Judaism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Judaism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Judaism history."
    },
    {
        "slug": "judaism-history-world",
        "name": "Judaism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Judaism history.",
        "description": "Geography, institutions, and periodization that give Judaism history its encyclopedia shape."
    },
    {
        "slug": "judaism-history-places",
        "name": "Judaism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Judaism history.",
        "description": "Places, regions, and built sites that give Judaism history its map — where events and figures concentrate."
    },
    {
        "slug": "judaism-history-events",
        "name": "Judaism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Judaism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Judaism history timeline."
    },
    {
        "slug": "judaism-history-objects",
        "name": "Judaism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Judaism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Judaism history."
    },
    {
        "slug": "judaism-history-factions",
        "name": "Judaism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Judaism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Judaism history."
    },
    {
        "slug": "judaism-history-concepts",
        "name": "Judaism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Judaism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Judaism history readable as a lore graph."
    },
    {
        "slug": "judaism-history-eras",
        "name": "Judaism history eras",
        "type": "event",
        "short_description": "Periodization for Judaism history.",
        "description": "Named eras and phases that help readers track how Judaism history changes across time."
    },
    {
        "slug": "judaism-history-works",
        "name": "Judaism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Judaism history.",
        "description": "Primary works and adaptations through which most audiences encounter Judaism history."
    },
    {
        "slug": "judaism-history-symbols",
        "name": "Judaism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Judaism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Judaism history."
    },
    {
        "slug": "judaism-history-controversies",
        "name": "Judaism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Judaism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Judaism history argumentative."
    },
    {
        "slug": "judaism-history-sources",
        "name": "Judaism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Judaism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Judaism history."
    },
    {
        "slug": "judaism-history-geography",
        "name": "Judaism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Judaism history.",
        "description": "Regions, routes, and spatial systems that situate Judaism history beyond single named places."
    },
    {
        "slug": "judaism-history-legacy",
        "name": "Judaism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Judaism history.",
        "description": "How Judaism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "judaism-history-practices",
        "name": "Judaism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Judaism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Judaism history."
    },
    {
        "slug": "judaism-history-entry-1",
        "name": "Judaism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-2",
        "name": "Judaism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-3",
        "name": "Judaism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-4",
        "name": "Judaism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-5",
        "name": "Judaism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-6",
        "name": "Judaism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-7",
        "name": "Judaism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-8",
        "name": "Judaism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-9",
        "name": "Judaism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-10",
        "name": "Judaism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-11",
        "name": "Judaism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-12",
        "name": "Judaism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-13",
        "name": "Judaism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-14",
        "name": "Judaism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-15",
        "name": "Judaism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-16",
        "name": "Judaism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-17",
        "name": "Judaism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-18",
        "name": "Judaism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-19",
        "name": "Judaism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-20",
        "name": "Judaism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-21",
        "name": "Judaism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-22",
        "name": "Judaism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-23",
        "name": "Judaism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "judaism-history-entry-24",
        "name": "Judaism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Judaism history.",
        "description": "A supporting encyclopedia entry in the Judaism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "judaism-history",
        "judaism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "judaism-history",
        "judaism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "judaism-history",
        "judaism-history-places",
        "contains",
        "Judaism history places is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-events",
        "contains",
        "Judaism history events is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-objects",
        "contains",
        "Judaism history objects & artifacts is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-factions",
        "contains",
        "Judaism history factions & groups is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-concepts",
        "contains",
        "Judaism history concepts is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-eras",
        "contains",
        "Judaism history eras is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-works",
        "contains",
        "Judaism history works & media is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-symbols",
        "contains",
        "Judaism history symbols is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-controversies",
        "contains",
        "Judaism history controversies is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-sources",
        "contains",
        "Judaism history sources is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-geography",
        "contains",
        "Judaism history geography is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-legacy",
        "contains",
        "Judaism history legacy is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-practices",
        "contains",
        "Judaism history practices is a primary trailhead under Judaism history.",
        0.88,
        0.82
    ],
    [
        "judaism-history",
        "judaism-history-entry-1",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-2",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-3",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-4",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-5",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-6",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-7",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-8",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-9",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-10",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-11",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-12",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-13",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-14",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-15",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-16",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-17",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-18",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-19",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-20",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-21",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-22",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-23",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ],
    [
        "judaism-history",
        "judaism-history-entry-24",
        "contains",
        "Supporting entry under Judaism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
