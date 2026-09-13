/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ufo-uap-history",
        "name": "UFO / UAP history",
        "type": "topic",
        "short_description": "Sightings, military incidents, aircraft, investigations, and the long trail of UAP claims.",
        "description": "Sightings, military incidents, aircraft, investigations, and the long trail of UAP claims. This Ton-o-Lore subject maps people, places, events, and ideas tied to UFO / UAP history so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "ufo-uap-history-figures",
        "name": "UFO / UAP history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to UFO / UAP history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-world",
        "name": "UFO / UAP history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame UFO / UAP history.",
        "description": "Geography, institutions, and periodization that give UFO / UAP history its encyclopedia shape."
    },
    {
        "slug": "ufo-uap-history-places",
        "name": "UFO / UAP history places",
        "type": "place",
        "short_description": "Locations and geographies that frame UFO / UAP history.",
        "description": "Places, regions, and built sites that give UFO / UAP history its map — where events and figures concentrate."
    },
    {
        "slug": "ufo-uap-history-events",
        "name": "UFO / UAP history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in UFO / UAP history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the UFO / UAP history timeline."
    },
    {
        "slug": "ufo-uap-history-objects",
        "name": "UFO / UAP history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to UFO / UAP history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-factions",
        "name": "UFO / UAP history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside UFO / UAP history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-concepts",
        "name": "UFO / UAP history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize UFO / UAP history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make UFO / UAP history readable as a lore graph."
    },
    {
        "slug": "ufo-uap-history-eras",
        "name": "UFO / UAP history eras",
        "type": "event",
        "short_description": "Periodization for UFO / UAP history.",
        "description": "Named eras and phases that help readers track how UFO / UAP history changes across time."
    },
    {
        "slug": "ufo-uap-history-works",
        "name": "UFO / UAP history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry UFO / UAP history.",
        "description": "Primary works and adaptations through which most audiences encounter UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-symbols",
        "name": "UFO / UAP history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with UFO / UAP history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-controversies",
        "name": "UFO / UAP history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in UFO / UAP history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep UFO / UAP history argumentative."
    },
    {
        "slug": "ufo-uap-history-sources",
        "name": "UFO / UAP history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into UFO / UAP history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-geography",
        "name": "UFO / UAP history geography",
        "type": "place",
        "short_description": "Broader geographic framing for UFO / UAP history.",
        "description": "Regions, routes, and spatial systems that situate UFO / UAP history beyond single named places."
    },
    {
        "slug": "ufo-uap-history-legacy",
        "name": "UFO / UAP history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of UFO / UAP history.",
        "description": "How UFO / UAP history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ufo-uap-history-practices",
        "name": "UFO / UAP history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in UFO / UAP history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in UFO / UAP history."
    },
    {
        "slug": "ufo-uap-history-entry-1",
        "name": "UFO / UAP history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-2",
        "name": "UFO / UAP history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-3",
        "name": "UFO / UAP history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-4",
        "name": "UFO / UAP history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-5",
        "name": "UFO / UAP history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-6",
        "name": "UFO / UAP history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-7",
        "name": "UFO / UAP history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-8",
        "name": "UFO / UAP history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-9",
        "name": "UFO / UAP history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-10",
        "name": "UFO / UAP history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-11",
        "name": "UFO / UAP history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-12",
        "name": "UFO / UAP history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-13",
        "name": "UFO / UAP history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-14",
        "name": "UFO / UAP history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-15",
        "name": "UFO / UAP history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-16",
        "name": "UFO / UAP history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-17",
        "name": "UFO / UAP history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-18",
        "name": "UFO / UAP history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-19",
        "name": "UFO / UAP history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-20",
        "name": "UFO / UAP history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-21",
        "name": "UFO / UAP history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-22",
        "name": "UFO / UAP history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-23",
        "name": "UFO / UAP history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ufo-uap-history-entry-24",
        "name": "UFO / UAP history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside UFO / UAP history.",
        "description": "A supporting encyclopedia entry in the UFO / UAP history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ufo-uap-history",
        "ufo-uap-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-places",
        "contains",
        "UFO / UAP history places is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-events",
        "contains",
        "UFO / UAP history events is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-objects",
        "contains",
        "UFO / UAP history objects & artifacts is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-factions",
        "contains",
        "UFO / UAP history factions & groups is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-concepts",
        "contains",
        "UFO / UAP history concepts is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-eras",
        "contains",
        "UFO / UAP history eras is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-works",
        "contains",
        "UFO / UAP history works & media is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-symbols",
        "contains",
        "UFO / UAP history symbols is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-controversies",
        "contains",
        "UFO / UAP history controversies is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-sources",
        "contains",
        "UFO / UAP history sources is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-geography",
        "contains",
        "UFO / UAP history geography is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-legacy",
        "contains",
        "UFO / UAP history legacy is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-practices",
        "contains",
        "UFO / UAP history practices is a primary trailhead under UFO / UAP history.",
        0.88,
        0.82
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-1",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-2",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-3",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-4",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-5",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-6",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-7",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-8",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-9",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-10",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-11",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-12",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-13",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-14",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-15",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-16",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-17",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-18",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-19",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-20",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-21",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-22",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-23",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ],
    [
        "ufo-uap-history",
        "ufo-uap-history-entry-24",
        "contains",
        "Supporting entry under UFO / UAP history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
