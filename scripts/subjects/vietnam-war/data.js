/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vietnam-war",
        "name": "Vietnam War",
        "type": "topic",
        "short_description": "Indochina conflict — forces, operations, politics, and the people caught in a long proxy war.",
        "description": "Indochina conflict — forces, operations, politics, and the people caught in a long proxy war. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vietnam War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "vietnam-war-figures",
        "name": "Vietnam War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vietnam War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vietnam War."
    },
    {
        "slug": "vietnam-war-world",
        "name": "Vietnam War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vietnam War.",
        "description": "Geography, institutions, and periodization that give Vietnam War its encyclopedia shape."
    },
    {
        "slug": "vietnam-war-places",
        "name": "Vietnam War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vietnam War.",
        "description": "Places, regions, and built sites that give Vietnam War its map — where events and figures concentrate."
    },
    {
        "slug": "vietnam-war-events",
        "name": "Vietnam War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vietnam War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vietnam War timeline."
    },
    {
        "slug": "vietnam-war-objects",
        "name": "Vietnam War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vietnam War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vietnam War."
    },
    {
        "slug": "vietnam-war-factions",
        "name": "Vietnam War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vietnam War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vietnam War."
    },
    {
        "slug": "vietnam-war-concepts",
        "name": "Vietnam War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vietnam War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vietnam War readable as a lore graph."
    },
    {
        "slug": "vietnam-war-eras",
        "name": "Vietnam War eras",
        "type": "event",
        "short_description": "Periodization for Vietnam War.",
        "description": "Named eras and phases that help readers track how Vietnam War changes across time."
    },
    {
        "slug": "vietnam-war-works",
        "name": "Vietnam War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vietnam War.",
        "description": "Primary works and adaptations through which most audiences encounter Vietnam War."
    },
    {
        "slug": "vietnam-war-symbols",
        "name": "Vietnam War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vietnam War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vietnam War."
    },
    {
        "slug": "vietnam-war-controversies",
        "name": "Vietnam War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vietnam War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vietnam War argumentative."
    },
    {
        "slug": "vietnam-war-sources",
        "name": "Vietnam War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vietnam War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vietnam War."
    },
    {
        "slug": "vietnam-war-geography",
        "name": "Vietnam War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vietnam War.",
        "description": "Regions, routes, and spatial systems that situate Vietnam War beyond single named places."
    },
    {
        "slug": "vietnam-war-legacy",
        "name": "Vietnam War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vietnam War.",
        "description": "How Vietnam War continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "vietnam-war",
        "vietnam-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vietnam-war",
        "vietnam-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vietnam-war",
        "vietnam-war-places",
        "contains",
        "Vietnam War places is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-events",
        "contains",
        "Vietnam War events is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-objects",
        "contains",
        "Vietnam War objects & artifacts is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-factions",
        "contains",
        "Vietnam War factions & groups is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-concepts",
        "contains",
        "Vietnam War concepts is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-eras",
        "contains",
        "Vietnam War eras is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-works",
        "contains",
        "Vietnam War works & media is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-symbols",
        "contains",
        "Vietnam War symbols is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-controversies",
        "contains",
        "Vietnam War controversies is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-sources",
        "contains",
        "Vietnam War sources is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-geography",
        "contains",
        "Vietnam War geography is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ],
    [
        "vietnam-war",
        "vietnam-war-legacy",
        "contains",
        "Vietnam War legacy is a primary trailhead under Vietnam War.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
