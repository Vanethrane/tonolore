/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "serial-killer-history",
        "name": "Serial killer history",
        "type": "topic",
        "short_description": "Cases, investigators, victims, timelines, and the cultural machinery that turns crimes into lasting lore.",
        "description": "Cases, investigators, victims, timelines, and the cultural machinery that turns crimes into lasting lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Serial killer history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "serial-killer-history-figures",
        "name": "Serial killer history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Serial killer history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Serial killer history."
    },
    {
        "slug": "serial-killer-history-world",
        "name": "Serial killer history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Serial killer history.",
        "description": "Geography, institutions, and periodization that give Serial killer history its encyclopedia shape."
    },
    {
        "slug": "serial-killer-history-places",
        "name": "Serial killer history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Serial killer history.",
        "description": "Places, regions, and built sites that give Serial killer history its map — where events and figures concentrate."
    },
    {
        "slug": "serial-killer-history-events",
        "name": "Serial killer history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Serial killer history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Serial killer history timeline."
    },
    {
        "slug": "serial-killer-history-objects",
        "name": "Serial killer history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Serial killer history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Serial killer history."
    },
    {
        "slug": "serial-killer-history-factions",
        "name": "Serial killer history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Serial killer history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Serial killer history."
    },
    {
        "slug": "serial-killer-history-concepts",
        "name": "Serial killer history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Serial killer history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Serial killer history readable as a lore graph."
    },
    {
        "slug": "serial-killer-history-eras",
        "name": "Serial killer history eras",
        "type": "event",
        "short_description": "Periodization for Serial killer history.",
        "description": "Named eras and phases that help readers track how Serial killer history changes across time."
    },
    {
        "slug": "serial-killer-history-works",
        "name": "Serial killer history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Serial killer history.",
        "description": "Primary works and adaptations through which most audiences encounter Serial killer history."
    },
    {
        "slug": "serial-killer-history-symbols",
        "name": "Serial killer history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Serial killer history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Serial killer history."
    },
    {
        "slug": "serial-killer-history-controversies",
        "name": "Serial killer history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Serial killer history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Serial killer history argumentative."
    },
    {
        "slug": "serial-killer-history-sources",
        "name": "Serial killer history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Serial killer history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Serial killer history."
    },
    {
        "slug": "serial-killer-history-geography",
        "name": "Serial killer history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Serial killer history.",
        "description": "Regions, routes, and spatial systems that situate Serial killer history beyond single named places."
    },
    {
        "slug": "serial-killer-history-legacy",
        "name": "Serial killer history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Serial killer history.",
        "description": "How Serial killer history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "serial-killer-history-practices",
        "name": "Serial killer history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Serial killer history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Serial killer history."
    },
    {
        "slug": "serial-killer-history-entry-1",
        "name": "Serial killer history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-2",
        "name": "Serial killer history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-3",
        "name": "Serial killer history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-4",
        "name": "Serial killer history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-5",
        "name": "Serial killer history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-6",
        "name": "Serial killer history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-7",
        "name": "Serial killer history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-8",
        "name": "Serial killer history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-9",
        "name": "Serial killer history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-10",
        "name": "Serial killer history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-11",
        "name": "Serial killer history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-12",
        "name": "Serial killer history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-13",
        "name": "Serial killer history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-14",
        "name": "Serial killer history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-15",
        "name": "Serial killer history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-16",
        "name": "Serial killer history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-17",
        "name": "Serial killer history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-18",
        "name": "Serial killer history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-19",
        "name": "Serial killer history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-20",
        "name": "Serial killer history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-21",
        "name": "Serial killer history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-22",
        "name": "Serial killer history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-23",
        "name": "Serial killer history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "serial-killer-history-entry-24",
        "name": "Serial killer history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Serial killer history.",
        "description": "A supporting encyclopedia entry in the Serial killer history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "serial-killer-history",
        "serial-killer-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "serial-killer-history",
        "serial-killer-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "serial-killer-history",
        "serial-killer-history-places",
        "contains",
        "Serial killer history places is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-events",
        "contains",
        "Serial killer history events is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-objects",
        "contains",
        "Serial killer history objects & artifacts is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-factions",
        "contains",
        "Serial killer history factions & groups is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-concepts",
        "contains",
        "Serial killer history concepts is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-eras",
        "contains",
        "Serial killer history eras is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-works",
        "contains",
        "Serial killer history works & media is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-symbols",
        "contains",
        "Serial killer history symbols is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-controversies",
        "contains",
        "Serial killer history controversies is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-sources",
        "contains",
        "Serial killer history sources is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-geography",
        "contains",
        "Serial killer history geography is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-legacy",
        "contains",
        "Serial killer history legacy is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-practices",
        "contains",
        "Serial killer history practices is a primary trailhead under Serial killer history.",
        0.88,
        0.82
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-1",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-2",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-3",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-4",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-5",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-6",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-7",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-8",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-9",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-10",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-11",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-12",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-13",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-14",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-15",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-16",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-17",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-18",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-19",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-20",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-21",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-22",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-23",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ],
    [
        "serial-killer-history",
        "serial-killer-history-entry-24",
        "contains",
        "Supporting entry under Serial killer history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
