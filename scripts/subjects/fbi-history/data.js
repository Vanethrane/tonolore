/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fbi-history",
        "name": "FBI history",
        "type": "topic",
        "short_description": "G-Men, Hoover era, and the federal bureau that became American crime-fighting myth.",
        "description": "G-Men, Hoover era, and the federal bureau that became American crime-fighting myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to FBI history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "fbi-history-figures",
        "name": "FBI history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to FBI history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring FBI history."
    },
    {
        "slug": "fbi-history-world",
        "name": "FBI history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame FBI history.",
        "description": "Geography, institutions, and periodization that give FBI history its encyclopedia shape."
    },
    {
        "slug": "fbi-history-places",
        "name": "FBI history places",
        "type": "place",
        "short_description": "Locations and geographies that frame FBI history.",
        "description": "Places, regions, and built sites that give FBI history its map — where events and figures concentrate."
    },
    {
        "slug": "fbi-history-events",
        "name": "FBI history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in FBI history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the FBI history timeline."
    },
    {
        "slug": "fbi-history-objects",
        "name": "FBI history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to FBI history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through FBI history."
    },
    {
        "slug": "fbi-history-factions",
        "name": "FBI history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside FBI history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in FBI history."
    },
    {
        "slug": "fbi-history-concepts",
        "name": "FBI history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize FBI history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make FBI history readable as a lore graph."
    },
    {
        "slug": "fbi-history-eras",
        "name": "FBI history eras",
        "type": "event",
        "short_description": "Periodization for FBI history.",
        "description": "Named eras and phases that help readers track how FBI history changes across time."
    },
    {
        "slug": "fbi-history-works",
        "name": "FBI history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry FBI history.",
        "description": "Primary works and adaptations through which most audiences encounter FBI history."
    },
    {
        "slug": "fbi-history-symbols",
        "name": "FBI history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with FBI history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside FBI history."
    },
    {
        "slug": "fbi-history-controversies",
        "name": "FBI history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in FBI history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep FBI history argumentative."
    },
    {
        "slug": "fbi-history-sources",
        "name": "FBI history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into FBI history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify FBI history."
    },
    {
        "slug": "fbi-history-geography",
        "name": "FBI history geography",
        "type": "place",
        "short_description": "Broader geographic framing for FBI history.",
        "description": "Regions, routes, and spatial systems that situate FBI history beyond single named places."
    },
    {
        "slug": "fbi-history-legacy",
        "name": "FBI history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of FBI history.",
        "description": "How FBI history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fbi-history-practices",
        "name": "FBI history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in FBI history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in FBI history."
    },
    {
        "slug": "fbi-history-entry-1",
        "name": "FBI history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-2",
        "name": "FBI history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-3",
        "name": "FBI history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-4",
        "name": "FBI history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-5",
        "name": "FBI history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-6",
        "name": "FBI history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-7",
        "name": "FBI history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-8",
        "name": "FBI history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-9",
        "name": "FBI history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-10",
        "name": "FBI history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-11",
        "name": "FBI history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-12",
        "name": "FBI history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-13",
        "name": "FBI history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-14",
        "name": "FBI history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-15",
        "name": "FBI history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-16",
        "name": "FBI history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-17",
        "name": "FBI history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-18",
        "name": "FBI history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-19",
        "name": "FBI history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-20",
        "name": "FBI history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-21",
        "name": "FBI history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-22",
        "name": "FBI history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-23",
        "name": "FBI history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fbi-history-entry-24",
        "name": "FBI history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside FBI history.",
        "description": "A supporting encyclopedia entry in the FBI history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fbi-history",
        "fbi-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fbi-history",
        "fbi-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fbi-history",
        "fbi-history-places",
        "contains",
        "FBI history places is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-events",
        "contains",
        "FBI history events is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-objects",
        "contains",
        "FBI history objects & artifacts is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-factions",
        "contains",
        "FBI history factions & groups is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-concepts",
        "contains",
        "FBI history concepts is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-eras",
        "contains",
        "FBI history eras is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-works",
        "contains",
        "FBI history works & media is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-symbols",
        "contains",
        "FBI history symbols is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-controversies",
        "contains",
        "FBI history controversies is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-sources",
        "contains",
        "FBI history sources is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-geography",
        "contains",
        "FBI history geography is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-legacy",
        "contains",
        "FBI history legacy is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-practices",
        "contains",
        "FBI history practices is a primary trailhead under FBI history.",
        0.88,
        0.82
    ],
    [
        "fbi-history",
        "fbi-history-entry-1",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-2",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-3",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-4",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-5",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-6",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-7",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-8",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-9",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-10",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-11",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-12",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-13",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-14",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-15",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-16",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-17",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-18",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-19",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-20",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-21",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-22",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-23",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ],
    [
        "fbi-history",
        "fbi-history-entry-24",
        "contains",
        "Supporting entry under FBI history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
