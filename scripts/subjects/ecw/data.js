/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ecw",
        "name": "ECW",
        "type": "topic",
        "short_description": "Hardcore Philadelphia wrestling, cult personas, and the extreme style that remapped 1990s indie myth.",
        "description": "Hardcore Philadelphia wrestling, cult personas, and the extreme style that remapped 1990s indie myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to ECW so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "ecw-figures",
        "name": "ECW figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to ECW.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring ECW."
    },
    {
        "slug": "ecw-world",
        "name": "ECW world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame ECW.",
        "description": "Geography, institutions, and periodization that give ECW its encyclopedia shape."
    },
    {
        "slug": "ecw-places",
        "name": "ECW places",
        "type": "place",
        "short_description": "Locations and geographies that frame ECW.",
        "description": "Places, regions, and built sites that give ECW its map — where events and figures concentrate."
    },
    {
        "slug": "ecw-events",
        "name": "ECW events",
        "type": "event",
        "short_description": "Turning points and dated episodes in ECW.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the ECW timeline."
    },
    {
        "slug": "ecw-objects",
        "name": "ECW objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to ECW.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through ECW."
    },
    {
        "slug": "ecw-factions",
        "name": "ECW factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside ECW.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in ECW."
    },
    {
        "slug": "ecw-concepts",
        "name": "ECW concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize ECW.",
        "description": "Keywords, doctrines, systems, and abstract forces that make ECW readable as a lore graph."
    },
    {
        "slug": "ecw-eras",
        "name": "ECW eras",
        "type": "event",
        "short_description": "Periodization for ECW.",
        "description": "Named eras and phases that help readers track how ECW changes across time."
    },
    {
        "slug": "ecw-works",
        "name": "ECW works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry ECW.",
        "description": "Primary works and adaptations through which most audiences encounter ECW."
    },
    {
        "slug": "ecw-symbols",
        "name": "ECW symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with ECW.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside ECW."
    },
    {
        "slug": "ecw-controversies",
        "name": "ECW controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in ECW.",
        "description": "Debates, rival canons, scandals, and contested facts that keep ECW argumentative."
    },
    {
        "slug": "ecw-sources",
        "name": "ECW sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into ECW.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify ECW."
    },
    {
        "slug": "ecw-geography",
        "name": "ECW geography",
        "type": "place",
        "short_description": "Broader geographic framing for ECW.",
        "description": "Regions, routes, and spatial systems that situate ECW beyond single named places."
    },
    {
        "slug": "ecw-legacy",
        "name": "ECW legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of ECW.",
        "description": "How ECW continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "ecw",
        "ecw-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ecw",
        "ecw-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ecw",
        "ecw-places",
        "contains",
        "ECW places is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-events",
        "contains",
        "ECW events is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-objects",
        "contains",
        "ECW objects & artifacts is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-factions",
        "contains",
        "ECW factions & groups is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-concepts",
        "contains",
        "ECW concepts is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-eras",
        "contains",
        "ECW eras is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-works",
        "contains",
        "ECW works & media is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-symbols",
        "contains",
        "ECW symbols is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-controversies",
        "contains",
        "ECW controversies is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-sources",
        "contains",
        "ECW sources is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-geography",
        "contains",
        "ECW geography is a primary trailhead under ECW.",
        0.88,
        0.82
    ],
    [
        "ecw",
        "ecw-legacy",
        "contains",
        "ECW legacy is a primary trailhead under ECW.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
