/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "4chan-history",
        "name": "4chan history",
        "type": "topic",
        "short_description": "Anonymous boards, meme genesis, and the chaotic imageboard that midwifed early web folklore.",
        "description": "Anonymous boards, meme genesis, and the chaotic imageboard that midwifed early web folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to 4chan history so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "4chan-history-figures",
        "name": "4chan history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 4chan history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 4chan history."
    },
    {
        "slug": "4chan-history-world",
        "name": "4chan history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 4chan history.",
        "description": "Geography, institutions, and periodization that give 4chan history its encyclopedia shape."
    },
    {
        "slug": "4chan-history-places",
        "name": "4chan history places",
        "type": "place",
        "short_description": "Locations and geographies that frame 4chan history.",
        "description": "Places, regions, and built sites that give 4chan history its map — where events and figures concentrate."
    },
    {
        "slug": "4chan-history-events",
        "name": "4chan history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 4chan history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 4chan history timeline."
    },
    {
        "slug": "4chan-history-objects",
        "name": "4chan history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 4chan history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 4chan history."
    },
    {
        "slug": "4chan-history-factions",
        "name": "4chan history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 4chan history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 4chan history."
    },
    {
        "slug": "4chan-history-concepts",
        "name": "4chan history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 4chan history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 4chan history readable as a lore graph."
    },
    {
        "slug": "4chan-history-eras",
        "name": "4chan history eras",
        "type": "event",
        "short_description": "Periodization for 4chan history.",
        "description": "Named eras and phases that help readers track how 4chan history changes across time."
    },
    {
        "slug": "4chan-history-works",
        "name": "4chan history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 4chan history.",
        "description": "Primary works and adaptations through which most audiences encounter 4chan history."
    },
    {
        "slug": "4chan-history-symbols",
        "name": "4chan history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 4chan history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 4chan history."
    },
    {
        "slug": "4chan-history-controversies",
        "name": "4chan history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 4chan history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 4chan history argumentative."
    },
    {
        "slug": "4chan-history-sources",
        "name": "4chan history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 4chan history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 4chan history."
    },
    {
        "slug": "4chan-history-geography",
        "name": "4chan history geography",
        "type": "place",
        "short_description": "Broader geographic framing for 4chan history.",
        "description": "Regions, routes, and spatial systems that situate 4chan history beyond single named places."
    },
    {
        "slug": "4chan-history-legacy",
        "name": "4chan history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 4chan history.",
        "description": "How 4chan history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "4chan-history-practices",
        "name": "4chan history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 4chan history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 4chan history."
    },
    {
        "slug": "4chan-history-entry-1",
        "name": "4chan history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-2",
        "name": "4chan history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-3",
        "name": "4chan history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-4",
        "name": "4chan history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-5",
        "name": "4chan history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-6",
        "name": "4chan history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-7",
        "name": "4chan history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-8",
        "name": "4chan history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-9",
        "name": "4chan history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-10",
        "name": "4chan history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-11",
        "name": "4chan history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-12",
        "name": "4chan history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-13",
        "name": "4chan history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-14",
        "name": "4chan history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-15",
        "name": "4chan history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-16",
        "name": "4chan history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-17",
        "name": "4chan history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-18",
        "name": "4chan history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-19",
        "name": "4chan history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-20",
        "name": "4chan history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-21",
        "name": "4chan history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-22",
        "name": "4chan history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-23",
        "name": "4chan history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "4chan-history-entry-24",
        "name": "4chan history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 4chan history.",
        "description": "A supporting encyclopedia entry in the 4chan history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "4chan-history",
        "4chan-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "4chan-history",
        "4chan-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "4chan-history",
        "4chan-history-places",
        "contains",
        "4chan history places is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-events",
        "contains",
        "4chan history events is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-objects",
        "contains",
        "4chan history objects & artifacts is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-factions",
        "contains",
        "4chan history factions & groups is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-concepts",
        "contains",
        "4chan history concepts is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-eras",
        "contains",
        "4chan history eras is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-works",
        "contains",
        "4chan history works & media is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-symbols",
        "contains",
        "4chan history symbols is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-controversies",
        "contains",
        "4chan history controversies is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-sources",
        "contains",
        "4chan history sources is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-geography",
        "contains",
        "4chan history geography is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-legacy",
        "contains",
        "4chan history legacy is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-practices",
        "contains",
        "4chan history practices is a primary trailhead under 4chan history.",
        0.88,
        0.82
    ],
    [
        "4chan-history",
        "4chan-history-entry-1",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-2",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-3",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-4",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-5",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-6",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-7",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-8",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-9",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-10",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-11",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-12",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-13",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-14",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-15",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-16",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-17",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-18",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-19",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-20",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-21",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-22",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-23",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ],
    [
        "4chan-history",
        "4chan-history-entry-24",
        "contains",
        "Supporting entry under 4chan history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
