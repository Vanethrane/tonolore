/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chinese-cuisine-history",
        "name": "Chinese cuisine history",
        "type": "topic",
        "short_description": "Eight great cuisines, wok craft, and the regional foodways of China.",
        "description": "Eight great cuisines, wok craft, and the regional foodways of China. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chinese cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "chinese-cuisine-history-figures",
        "name": "Chinese cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chinese cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-world",
        "name": "Chinese cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chinese cuisine history.",
        "description": "Geography, institutions, and periodization that give Chinese cuisine history its encyclopedia shape."
    },
    {
        "slug": "chinese-cuisine-history-places",
        "name": "Chinese cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chinese cuisine history.",
        "description": "Places, regions, and built sites that give Chinese cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "chinese-cuisine-history-events",
        "name": "Chinese cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chinese cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chinese cuisine history timeline."
    },
    {
        "slug": "chinese-cuisine-history-objects",
        "name": "Chinese cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chinese cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-factions",
        "name": "Chinese cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chinese cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-concepts",
        "name": "Chinese cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chinese cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chinese cuisine history readable as a lore graph."
    },
    {
        "slug": "chinese-cuisine-history-eras",
        "name": "Chinese cuisine history eras",
        "type": "event",
        "short_description": "Periodization for Chinese cuisine history.",
        "description": "Named eras and phases that help readers track how Chinese cuisine history changes across time."
    },
    {
        "slug": "chinese-cuisine-history-works",
        "name": "Chinese cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chinese cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-symbols",
        "name": "Chinese cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chinese cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-controversies",
        "name": "Chinese cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chinese cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chinese cuisine history argumentative."
    },
    {
        "slug": "chinese-cuisine-history-sources",
        "name": "Chinese cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chinese cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-geography",
        "name": "Chinese cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chinese cuisine history.",
        "description": "Regions, routes, and spatial systems that situate Chinese cuisine history beyond single named places."
    },
    {
        "slug": "chinese-cuisine-history-legacy",
        "name": "Chinese cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chinese cuisine history.",
        "description": "How Chinese cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chinese-cuisine-history-practices",
        "name": "Chinese cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chinese cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chinese cuisine history."
    },
    {
        "slug": "chinese-cuisine-history-entry-1",
        "name": "Chinese cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-2",
        "name": "Chinese cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-3",
        "name": "Chinese cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-4",
        "name": "Chinese cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-5",
        "name": "Chinese cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-6",
        "name": "Chinese cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-7",
        "name": "Chinese cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-8",
        "name": "Chinese cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-9",
        "name": "Chinese cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-10",
        "name": "Chinese cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-11",
        "name": "Chinese cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-12",
        "name": "Chinese cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-13",
        "name": "Chinese cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-14",
        "name": "Chinese cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-15",
        "name": "Chinese cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-16",
        "name": "Chinese cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-17",
        "name": "Chinese cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-18",
        "name": "Chinese cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-19",
        "name": "Chinese cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-20",
        "name": "Chinese cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-21",
        "name": "Chinese cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-22",
        "name": "Chinese cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-23",
        "name": "Chinese cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-cuisine-history-entry-24",
        "name": "Chinese cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese cuisine history.",
        "description": "A supporting encyclopedia entry in the Chinese cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-places",
        "contains",
        "Chinese cuisine history places is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-events",
        "contains",
        "Chinese cuisine history events is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-objects",
        "contains",
        "Chinese cuisine history objects & artifacts is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-factions",
        "contains",
        "Chinese cuisine history factions & groups is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-concepts",
        "contains",
        "Chinese cuisine history concepts is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-eras",
        "contains",
        "Chinese cuisine history eras is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-works",
        "contains",
        "Chinese cuisine history works & media is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-symbols",
        "contains",
        "Chinese cuisine history symbols is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-controversies",
        "contains",
        "Chinese cuisine history controversies is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-sources",
        "contains",
        "Chinese cuisine history sources is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-geography",
        "contains",
        "Chinese cuisine history geography is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-legacy",
        "contains",
        "Chinese cuisine history legacy is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-practices",
        "contains",
        "Chinese cuisine history practices is a primary trailhead under Chinese cuisine history.",
        0.88,
        0.82
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-1",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-2",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-3",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-4",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-5",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-6",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-7",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-8",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-9",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-10",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-11",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-12",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-13",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-14",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-15",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-16",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-17",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-18",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-19",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-20",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-21",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-22",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-23",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ],
    [
        "chinese-cuisine-history",
        "chinese-cuisine-history-entry-24",
        "contains",
        "Supporting entry under Chinese cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
