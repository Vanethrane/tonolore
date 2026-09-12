/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cold-war",
        "name": "Cold War",
        "type": "topic",
        "short_description": "Superpower rivalry, proxy wars, intelligence contests, and the nuclear standoff that reshaped the late 20th century.",
        "description": "Superpower rivalry, proxy wars, intelligence contests, and the nuclear standoff that reshaped the late 20th century. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cold War so readers can follow long-tail connections across history."
    },
    {
        "slug": "cold-war-figures",
        "name": "Cold War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cold War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cold War."
    },
    {
        "slug": "cold-war-world",
        "name": "Cold War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cold War.",
        "description": "Geography, institutions, and periodization that give Cold War its encyclopedia shape."
    },
    {
        "slug": "cold-war-places",
        "name": "Cold War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cold War.",
        "description": "Places, regions, and built sites that give Cold War its map — where events and figures concentrate."
    },
    {
        "slug": "cold-war-events",
        "name": "Cold War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cold War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cold War timeline."
    },
    {
        "slug": "cold-war-objects",
        "name": "Cold War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cold War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cold War."
    },
    {
        "slug": "cold-war-factions",
        "name": "Cold War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cold War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cold War."
    },
    {
        "slug": "cold-war-concepts",
        "name": "Cold War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cold War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cold War readable as a lore graph."
    },
    {
        "slug": "cold-war-eras",
        "name": "Cold War eras",
        "type": "event",
        "short_description": "Periodization for Cold War.",
        "description": "Named eras and phases that help readers track how Cold War changes across time."
    },
    {
        "slug": "cold-war-works",
        "name": "Cold War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cold War.",
        "description": "Primary works and adaptations through which most audiences encounter Cold War."
    },
    {
        "slug": "cold-war-symbols",
        "name": "Cold War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cold War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cold War."
    },
    {
        "slug": "cold-war-controversies",
        "name": "Cold War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cold War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cold War argumentative."
    },
    {
        "slug": "cold-war-sources",
        "name": "Cold War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cold War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cold War."
    },
    {
        "slug": "cold-war-geography",
        "name": "Cold War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cold War.",
        "description": "Regions, routes, and spatial systems that situate Cold War beyond single named places."
    },
    {
        "slug": "cold-war-legacy",
        "name": "Cold War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cold War.",
        "description": "How Cold War continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "cold-war",
        "cold-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cold-war",
        "cold-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cold-war",
        "cold-war-places",
        "contains",
        "Cold War places is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-events",
        "contains",
        "Cold War events is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-objects",
        "contains",
        "Cold War objects & artifacts is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-factions",
        "contains",
        "Cold War factions & groups is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-concepts",
        "contains",
        "Cold War concepts is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-eras",
        "contains",
        "Cold War eras is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-works",
        "contains",
        "Cold War works & media is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-symbols",
        "contains",
        "Cold War symbols is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-controversies",
        "contains",
        "Cold War controversies is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-sources",
        "contains",
        "Cold War sources is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-geography",
        "contains",
        "Cold War geography is a primary trailhead under Cold War.",
        0.88,
        0.82
    ],
    [
        "cold-war",
        "cold-war-legacy",
        "contains",
        "Cold War legacy is a primary trailhead under Cold War.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
