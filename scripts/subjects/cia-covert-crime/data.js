/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cia-covert-crime",
        "name": "CIA covert operations history",
        "type": "topic",
        "short_description": "Black ops, coups, and the intelligence-crime borderlands of Cold War statecraft.",
        "description": "Black ops, coups, and the intelligence-crime borderlands of Cold War statecraft. This Ton-o-Lore subject maps people, places, events, and ideas tied to CIA covert operations history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "cia-covert-crime-figures",
        "name": "CIA covert operations history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to CIA covert operations history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-world",
        "name": "CIA covert operations history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame CIA covert operations history.",
        "description": "Geography, institutions, and periodization that give CIA covert operations history its encyclopedia shape."
    },
    {
        "slug": "cia-covert-crime-places",
        "name": "CIA covert operations history places",
        "type": "place",
        "short_description": "Locations and geographies that frame CIA covert operations history.",
        "description": "Places, regions, and built sites that give CIA covert operations history its map — where events and figures concentrate."
    },
    {
        "slug": "cia-covert-crime-events",
        "name": "CIA covert operations history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in CIA covert operations history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the CIA covert operations history timeline."
    },
    {
        "slug": "cia-covert-crime-objects",
        "name": "CIA covert operations history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to CIA covert operations history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-factions",
        "name": "CIA covert operations history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside CIA covert operations history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-concepts",
        "name": "CIA covert operations history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize CIA covert operations history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make CIA covert operations history readable as a lore graph."
    },
    {
        "slug": "cia-covert-crime-eras",
        "name": "CIA covert operations history eras",
        "type": "event",
        "short_description": "Periodization for CIA covert operations history.",
        "description": "Named eras and phases that help readers track how CIA covert operations history changes across time."
    },
    {
        "slug": "cia-covert-crime-works",
        "name": "CIA covert operations history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry CIA covert operations history.",
        "description": "Primary works and adaptations through which most audiences encounter CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-symbols",
        "name": "CIA covert operations history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with CIA covert operations history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-controversies",
        "name": "CIA covert operations history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in CIA covert operations history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep CIA covert operations history argumentative."
    },
    {
        "slug": "cia-covert-crime-sources",
        "name": "CIA covert operations history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into CIA covert operations history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-geography",
        "name": "CIA covert operations history geography",
        "type": "place",
        "short_description": "Broader geographic framing for CIA covert operations history.",
        "description": "Regions, routes, and spatial systems that situate CIA covert operations history beyond single named places."
    },
    {
        "slug": "cia-covert-crime-legacy",
        "name": "CIA covert operations history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of CIA covert operations history.",
        "description": "How CIA covert operations history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cia-covert-crime-practices",
        "name": "CIA covert operations history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in CIA covert operations history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in CIA covert operations history."
    },
    {
        "slug": "cia-covert-crime-entry-1",
        "name": "CIA covert operations history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-2",
        "name": "CIA covert operations history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-3",
        "name": "CIA covert operations history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-4",
        "name": "CIA covert operations history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-5",
        "name": "CIA covert operations history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-6",
        "name": "CIA covert operations history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-7",
        "name": "CIA covert operations history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-8",
        "name": "CIA covert operations history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-9",
        "name": "CIA covert operations history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-10",
        "name": "CIA covert operations history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-11",
        "name": "CIA covert operations history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-12",
        "name": "CIA covert operations history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-13",
        "name": "CIA covert operations history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-14",
        "name": "CIA covert operations history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-15",
        "name": "CIA covert operations history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-16",
        "name": "CIA covert operations history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-17",
        "name": "CIA covert operations history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-18",
        "name": "CIA covert operations history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-19",
        "name": "CIA covert operations history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-20",
        "name": "CIA covert operations history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-21",
        "name": "CIA covert operations history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-22",
        "name": "CIA covert operations history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-23",
        "name": "CIA covert operations history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cia-covert-crime-entry-24",
        "name": "CIA covert operations history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside CIA covert operations history.",
        "description": "A supporting encyclopedia entry in the CIA covert operations history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cia-covert-crime",
        "cia-covert-crime-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-places",
        "contains",
        "CIA covert operations history places is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-events",
        "contains",
        "CIA covert operations history events is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-objects",
        "contains",
        "CIA covert operations history objects & artifacts is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-factions",
        "contains",
        "CIA covert operations history factions & groups is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-concepts",
        "contains",
        "CIA covert operations history concepts is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-eras",
        "contains",
        "CIA covert operations history eras is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-works",
        "contains",
        "CIA covert operations history works & media is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-symbols",
        "contains",
        "CIA covert operations history symbols is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-controversies",
        "contains",
        "CIA covert operations history controversies is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-sources",
        "contains",
        "CIA covert operations history sources is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-geography",
        "contains",
        "CIA covert operations history geography is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-legacy",
        "contains",
        "CIA covert operations history legacy is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-practices",
        "contains",
        "CIA covert operations history practices is a primary trailhead under CIA covert operations history.",
        0.88,
        0.82
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-1",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-2",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-3",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-4",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-5",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-6",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-7",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-8",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-9",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-10",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-11",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-12",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-13",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-14",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-15",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-16",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-17",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-18",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-19",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-20",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-21",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-22",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-23",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ],
    [
        "cia-covert-crime",
        "cia-covert-crime-entry-24",
        "contains",
        "Supporting entry under CIA covert operations history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
