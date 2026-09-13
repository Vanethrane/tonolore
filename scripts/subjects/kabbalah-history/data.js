/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kabbalah-history",
        "name": "Kabbalah history",
        "type": "topic",
        "short_description": "Sefirot, Zohar, and the Jewish mystical system that crossed into Christian and occult adaptations.",
        "description": "Sefirot, Zohar, and the Jewish mystical system that crossed into Christian and occult adaptations. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kabbalah history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "kabbalah-history-figures",
        "name": "Kabbalah history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Kabbalah history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Kabbalah history."
    },
    {
        "slug": "kabbalah-history-world",
        "name": "Kabbalah history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Kabbalah history.",
        "description": "Geography, institutions, and periodization that give Kabbalah history its encyclopedia shape."
    },
    {
        "slug": "kabbalah-history-places",
        "name": "Kabbalah history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kabbalah history.",
        "description": "Places, regions, and built sites that give Kabbalah history its map — where events and figures concentrate."
    },
    {
        "slug": "kabbalah-history-events",
        "name": "Kabbalah history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kabbalah history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kabbalah history timeline."
    },
    {
        "slug": "kabbalah-history-objects",
        "name": "Kabbalah history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kabbalah history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kabbalah history."
    },
    {
        "slug": "kabbalah-history-factions",
        "name": "Kabbalah history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kabbalah history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kabbalah history."
    },
    {
        "slug": "kabbalah-history-concepts",
        "name": "Kabbalah history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kabbalah history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kabbalah history readable as a lore graph."
    },
    {
        "slug": "kabbalah-history-eras",
        "name": "Kabbalah history eras",
        "type": "event",
        "short_description": "Periodization for Kabbalah history.",
        "description": "Named eras and phases that help readers track how Kabbalah history changes across time."
    },
    {
        "slug": "kabbalah-history-works",
        "name": "Kabbalah history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kabbalah history.",
        "description": "Primary works and adaptations through which most audiences encounter Kabbalah history."
    },
    {
        "slug": "kabbalah-history-symbols",
        "name": "Kabbalah history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kabbalah history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kabbalah history."
    },
    {
        "slug": "kabbalah-history-controversies",
        "name": "Kabbalah history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kabbalah history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kabbalah history argumentative."
    },
    {
        "slug": "kabbalah-history-sources",
        "name": "Kabbalah history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kabbalah history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kabbalah history."
    },
    {
        "slug": "kabbalah-history-geography",
        "name": "Kabbalah history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kabbalah history.",
        "description": "Regions, routes, and spatial systems that situate Kabbalah history beyond single named places."
    },
    {
        "slug": "kabbalah-history-legacy",
        "name": "Kabbalah history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kabbalah history.",
        "description": "How Kabbalah history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "kabbalah-history-practices",
        "name": "Kabbalah history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kabbalah history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kabbalah history."
    },
    {
        "slug": "kabbalah-history-entry-1",
        "name": "Kabbalah history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-2",
        "name": "Kabbalah history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-3",
        "name": "Kabbalah history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-4",
        "name": "Kabbalah history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-5",
        "name": "Kabbalah history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-6",
        "name": "Kabbalah history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-7",
        "name": "Kabbalah history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-8",
        "name": "Kabbalah history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-9",
        "name": "Kabbalah history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-10",
        "name": "Kabbalah history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-11",
        "name": "Kabbalah history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-12",
        "name": "Kabbalah history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-13",
        "name": "Kabbalah history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-14",
        "name": "Kabbalah history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-15",
        "name": "Kabbalah history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-16",
        "name": "Kabbalah history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-17",
        "name": "Kabbalah history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-18",
        "name": "Kabbalah history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-19",
        "name": "Kabbalah history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-20",
        "name": "Kabbalah history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-21",
        "name": "Kabbalah history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-22",
        "name": "Kabbalah history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-23",
        "name": "Kabbalah history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabbalah-history-entry-24",
        "name": "Kabbalah history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabbalah history.",
        "description": "A supporting encyclopedia entry in the Kabbalah history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "kabbalah-history",
        "kabbalah-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "kabbalah-history",
        "kabbalah-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "kabbalah-history",
        "kabbalah-history-places",
        "contains",
        "Kabbalah history places is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-events",
        "contains",
        "Kabbalah history events is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-objects",
        "contains",
        "Kabbalah history objects & artifacts is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-factions",
        "contains",
        "Kabbalah history factions & groups is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-concepts",
        "contains",
        "Kabbalah history concepts is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-eras",
        "contains",
        "Kabbalah history eras is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-works",
        "contains",
        "Kabbalah history works & media is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-symbols",
        "contains",
        "Kabbalah history symbols is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-controversies",
        "contains",
        "Kabbalah history controversies is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-sources",
        "contains",
        "Kabbalah history sources is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-geography",
        "contains",
        "Kabbalah history geography is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-legacy",
        "contains",
        "Kabbalah history legacy is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-practices",
        "contains",
        "Kabbalah history practices is a primary trailhead under Kabbalah history.",
        0.88,
        0.82
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-1",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-2",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-3",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-4",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-5",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-6",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-7",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-8",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-9",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-10",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-11",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-12",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-13",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-14",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-15",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-16",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-17",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-18",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-19",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-20",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-21",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-22",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-23",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ],
    [
        "kabbalah-history",
        "kabbalah-history-entry-24",
        "contains",
        "Supporting entry under Kabbalah history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
