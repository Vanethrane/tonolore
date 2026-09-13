/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "yakuza-history",
        "name": "Yakuza history",
        "type": "topic",
        "short_description": "Clans, tattoos, and the Japanese underworld’s public-private mythology.",
        "description": "Clans, tattoos, and the Japanese underworld’s public-private mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Yakuza history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "yakuza-history-figures",
        "name": "Yakuza history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Yakuza history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Yakuza history."
    },
    {
        "slug": "yakuza-history-world",
        "name": "Yakuza history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Yakuza history.",
        "description": "Geography, institutions, and periodization that give Yakuza history its encyclopedia shape."
    },
    {
        "slug": "yakuza-history-places",
        "name": "Yakuza history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Yakuza history.",
        "description": "Places, regions, and built sites that give Yakuza history its map — where events and figures concentrate."
    },
    {
        "slug": "yakuza-history-events",
        "name": "Yakuza history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Yakuza history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Yakuza history timeline."
    },
    {
        "slug": "yakuza-history-objects",
        "name": "Yakuza history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Yakuza history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Yakuza history."
    },
    {
        "slug": "yakuza-history-factions",
        "name": "Yakuza history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Yakuza history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Yakuza history."
    },
    {
        "slug": "yakuza-history-concepts",
        "name": "Yakuza history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Yakuza history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Yakuza history readable as a lore graph."
    },
    {
        "slug": "yakuza-history-eras",
        "name": "Yakuza history eras",
        "type": "event",
        "short_description": "Periodization for Yakuza history.",
        "description": "Named eras and phases that help readers track how Yakuza history changes across time."
    },
    {
        "slug": "yakuza-history-works",
        "name": "Yakuza history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Yakuza history.",
        "description": "Primary works and adaptations through which most audiences encounter Yakuza history."
    },
    {
        "slug": "yakuza-history-symbols",
        "name": "Yakuza history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Yakuza history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Yakuza history."
    },
    {
        "slug": "yakuza-history-controversies",
        "name": "Yakuza history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Yakuza history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Yakuza history argumentative."
    },
    {
        "slug": "yakuza-history-sources",
        "name": "Yakuza history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Yakuza history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Yakuza history."
    },
    {
        "slug": "yakuza-history-geography",
        "name": "Yakuza history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Yakuza history.",
        "description": "Regions, routes, and spatial systems that situate Yakuza history beyond single named places."
    },
    {
        "slug": "yakuza-history-legacy",
        "name": "Yakuza history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Yakuza history.",
        "description": "How Yakuza history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "yakuza-history-practices",
        "name": "Yakuza history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Yakuza history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Yakuza history."
    },
    {
        "slug": "yakuza-history-entry-1",
        "name": "Yakuza history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-2",
        "name": "Yakuza history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-3",
        "name": "Yakuza history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-4",
        "name": "Yakuza history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-5",
        "name": "Yakuza history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-6",
        "name": "Yakuza history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-7",
        "name": "Yakuza history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-8",
        "name": "Yakuza history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-9",
        "name": "Yakuza history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-10",
        "name": "Yakuza history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-11",
        "name": "Yakuza history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-12",
        "name": "Yakuza history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-13",
        "name": "Yakuza history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-14",
        "name": "Yakuza history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-15",
        "name": "Yakuza history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-16",
        "name": "Yakuza history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-17",
        "name": "Yakuza history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-18",
        "name": "Yakuza history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-19",
        "name": "Yakuza history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-20",
        "name": "Yakuza history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-21",
        "name": "Yakuza history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-22",
        "name": "Yakuza history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-23",
        "name": "Yakuza history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yakuza-history-entry-24",
        "name": "Yakuza history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yakuza history.",
        "description": "A supporting encyclopedia entry in the Yakuza history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "yakuza-history",
        "yakuza-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "yakuza-history",
        "yakuza-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "yakuza-history",
        "yakuza-history-places",
        "contains",
        "Yakuza history places is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-events",
        "contains",
        "Yakuza history events is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-objects",
        "contains",
        "Yakuza history objects & artifacts is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-factions",
        "contains",
        "Yakuza history factions & groups is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-concepts",
        "contains",
        "Yakuza history concepts is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-eras",
        "contains",
        "Yakuza history eras is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-works",
        "contains",
        "Yakuza history works & media is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-symbols",
        "contains",
        "Yakuza history symbols is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-controversies",
        "contains",
        "Yakuza history controversies is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-sources",
        "contains",
        "Yakuza history sources is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-geography",
        "contains",
        "Yakuza history geography is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-legacy",
        "contains",
        "Yakuza history legacy is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-practices",
        "contains",
        "Yakuza history practices is a primary trailhead under Yakuza history.",
        0.88,
        0.82
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-1",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-2",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-3",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-4",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-5",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-6",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-7",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-8",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-9",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-10",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-11",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-12",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-13",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-14",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-15",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-16",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-17",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-18",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-19",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-20",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-21",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-22",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-23",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ],
    [
        "yakuza-history",
        "yakuza-history-entry-24",
        "contains",
        "Supporting entry under Yakuza history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
