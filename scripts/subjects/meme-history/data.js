/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "meme-history",
        "name": "Meme history",
        "type": "topic",
        "short_description": "Image macros, copypasta, and viral forms tracked as vernacular folklore.",
        "description": "Image macros, copypasta, and viral forms tracked as vernacular folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Meme history so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "meme-history-figures",
        "name": "Meme history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Meme history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Meme history."
    },
    {
        "slug": "meme-history-world",
        "name": "Meme history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Meme history.",
        "description": "Geography, institutions, and periodization that give Meme history its encyclopedia shape."
    },
    {
        "slug": "meme-history-places",
        "name": "Meme history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Meme history.",
        "description": "Places, regions, and built sites that give Meme history its map — where events and figures concentrate."
    },
    {
        "slug": "meme-history-events",
        "name": "Meme history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Meme history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Meme history timeline."
    },
    {
        "slug": "meme-history-objects",
        "name": "Meme history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Meme history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Meme history."
    },
    {
        "slug": "meme-history-factions",
        "name": "Meme history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Meme history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Meme history."
    },
    {
        "slug": "meme-history-concepts",
        "name": "Meme history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Meme history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Meme history readable as a lore graph."
    },
    {
        "slug": "meme-history-eras",
        "name": "Meme history eras",
        "type": "event",
        "short_description": "Periodization for Meme history.",
        "description": "Named eras and phases that help readers track how Meme history changes across time."
    },
    {
        "slug": "meme-history-works",
        "name": "Meme history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Meme history.",
        "description": "Primary works and adaptations through which most audiences encounter Meme history."
    },
    {
        "slug": "meme-history-symbols",
        "name": "Meme history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Meme history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Meme history."
    },
    {
        "slug": "meme-history-controversies",
        "name": "Meme history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Meme history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Meme history argumentative."
    },
    {
        "slug": "meme-history-sources",
        "name": "Meme history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Meme history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Meme history."
    },
    {
        "slug": "meme-history-geography",
        "name": "Meme history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Meme history.",
        "description": "Regions, routes, and spatial systems that situate Meme history beyond single named places."
    },
    {
        "slug": "meme-history-legacy",
        "name": "Meme history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Meme history.",
        "description": "How Meme history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "meme-history-practices",
        "name": "Meme history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Meme history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Meme history."
    },
    {
        "slug": "meme-history-entry-1",
        "name": "Meme history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-2",
        "name": "Meme history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-3",
        "name": "Meme history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-4",
        "name": "Meme history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-5",
        "name": "Meme history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-6",
        "name": "Meme history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-7",
        "name": "Meme history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-8",
        "name": "Meme history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-9",
        "name": "Meme history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-10",
        "name": "Meme history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-11",
        "name": "Meme history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-12",
        "name": "Meme history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-13",
        "name": "Meme history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-14",
        "name": "Meme history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-15",
        "name": "Meme history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-16",
        "name": "Meme history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-17",
        "name": "Meme history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-18",
        "name": "Meme history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-19",
        "name": "Meme history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-20",
        "name": "Meme history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-21",
        "name": "Meme history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-22",
        "name": "Meme history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-23",
        "name": "Meme history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meme-history-entry-24",
        "name": "Meme history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meme history.",
        "description": "A supporting encyclopedia entry in the Meme history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "meme-history",
        "meme-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "meme-history",
        "meme-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "meme-history",
        "meme-history-places",
        "contains",
        "Meme history places is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-events",
        "contains",
        "Meme history events is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-objects",
        "contains",
        "Meme history objects & artifacts is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-factions",
        "contains",
        "Meme history factions & groups is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-concepts",
        "contains",
        "Meme history concepts is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-eras",
        "contains",
        "Meme history eras is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-works",
        "contains",
        "Meme history works & media is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-symbols",
        "contains",
        "Meme history symbols is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-controversies",
        "contains",
        "Meme history controversies is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-sources",
        "contains",
        "Meme history sources is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-geography",
        "contains",
        "Meme history geography is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-legacy",
        "contains",
        "Meme history legacy is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-practices",
        "contains",
        "Meme history practices is a primary trailhead under Meme history.",
        0.88,
        0.82
    ],
    [
        "meme-history",
        "meme-history-entry-1",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-2",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-3",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-4",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-5",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-6",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-7",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-8",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-9",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-10",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-11",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-12",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-13",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-14",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-15",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-16",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-17",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-18",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-19",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-20",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-21",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-22",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-23",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ],
    [
        "meme-history",
        "meme-history-entry-24",
        "contains",
        "Supporting entry under Meme history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
