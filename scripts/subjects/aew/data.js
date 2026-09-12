/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aew",
        "name": "AEW",
        "type": "topic",
        "short_description": "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative.",
        "description": "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative. This Ton-o-Lore subject maps people, places, events, and ideas tied to AEW so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "aew-figures",
        "name": "AEW figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to AEW.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring AEW."
    },
    {
        "slug": "aew-world",
        "name": "AEW world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame AEW.",
        "description": "Geography, institutions, and periodization that give AEW its encyclopedia shape."
    },
    {
        "slug": "aew-places",
        "name": "AEW places",
        "type": "place",
        "short_description": "Locations and geographies that frame AEW.",
        "description": "Places, regions, and built sites that give AEW its map — where events and figures concentrate."
    },
    {
        "slug": "aew-events",
        "name": "AEW events",
        "type": "event",
        "short_description": "Turning points and dated episodes in AEW.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the AEW timeline."
    },
    {
        "slug": "aew-objects",
        "name": "AEW objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to AEW.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through AEW."
    },
    {
        "slug": "aew-factions",
        "name": "AEW factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside AEW.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in AEW."
    },
    {
        "slug": "aew-concepts",
        "name": "AEW concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize AEW.",
        "description": "Keywords, doctrines, systems, and abstract forces that make AEW readable as a lore graph."
    },
    {
        "slug": "aew-eras",
        "name": "AEW eras",
        "type": "event",
        "short_description": "Periodization for AEW.",
        "description": "Named eras and phases that help readers track how AEW changes across time."
    },
    {
        "slug": "aew-works",
        "name": "AEW works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry AEW.",
        "description": "Primary works and adaptations through which most audiences encounter AEW."
    },
    {
        "slug": "aew-symbols",
        "name": "AEW symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with AEW.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside AEW."
    },
    {
        "slug": "aew-controversies",
        "name": "AEW controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in AEW.",
        "description": "Debates, rival canons, scandals, and contested facts that keep AEW argumentative."
    },
    {
        "slug": "aew-sources",
        "name": "AEW sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into AEW.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify AEW."
    },
    {
        "slug": "aew-geography",
        "name": "AEW geography",
        "type": "place",
        "short_description": "Broader geographic framing for AEW.",
        "description": "Regions, routes, and spatial systems that situate AEW beyond single named places."
    },
    {
        "slug": "aew-legacy",
        "name": "AEW legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of AEW.",
        "description": "How AEW continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "aew",
        "aew-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aew",
        "aew-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aew",
        "aew-places",
        "contains",
        "AEW places is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-events",
        "contains",
        "AEW events is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-objects",
        "contains",
        "AEW objects & artifacts is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-factions",
        "contains",
        "AEW factions & groups is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-concepts",
        "contains",
        "AEW concepts is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-eras",
        "contains",
        "AEW eras is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-works",
        "contains",
        "AEW works & media is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-symbols",
        "contains",
        "AEW symbols is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-controversies",
        "contains",
        "AEW controversies is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-sources",
        "contains",
        "AEW sources is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-geography",
        "contains",
        "AEW geography is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-legacy",
        "contains",
        "AEW legacy is a primary trailhead under AEW.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
