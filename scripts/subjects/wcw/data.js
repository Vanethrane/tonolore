/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wcw",
        "name": "WCW",
        "type": "topic",
        "short_description": "Monday Nitro, nWo, and the southern promotion that warred with WWF in the Attitude era.",
        "description": "Monday Nitro, nWo, and the southern promotion that warred with WWF in the Attitude era. This Ton-o-Lore subject maps people, places, events, and ideas tied to WCW so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wcw-figures",
        "name": "WCW figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WCW.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WCW."
    },
    {
        "slug": "wcw-world",
        "name": "WCW world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WCW.",
        "description": "Geography, institutions, and periodization that give WCW its encyclopedia shape."
    },
    {
        "slug": "wcw-places",
        "name": "WCW places",
        "type": "place",
        "short_description": "Locations and geographies that frame WCW.",
        "description": "Places, regions, and built sites that give WCW its map — where events and figures concentrate."
    },
    {
        "slug": "wcw-events",
        "name": "WCW events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WCW.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WCW timeline."
    },
    {
        "slug": "wcw-objects",
        "name": "WCW objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WCW.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WCW."
    },
    {
        "slug": "wcw-factions",
        "name": "WCW factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WCW.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WCW."
    },
    {
        "slug": "wcw-concepts",
        "name": "WCW concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WCW.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WCW readable as a lore graph."
    },
    {
        "slug": "wcw-eras",
        "name": "WCW eras",
        "type": "event",
        "short_description": "Periodization for WCW.",
        "description": "Named eras and phases that help readers track how WCW changes across time."
    },
    {
        "slug": "wcw-works",
        "name": "WCW works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WCW.",
        "description": "Primary works and adaptations through which most audiences encounter WCW."
    },
    {
        "slug": "wcw-symbols",
        "name": "WCW symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WCW.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WCW."
    },
    {
        "slug": "wcw-controversies",
        "name": "WCW controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WCW.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WCW argumentative."
    },
    {
        "slug": "wcw-sources",
        "name": "WCW sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WCW.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WCW."
    },
    {
        "slug": "wcw-geography",
        "name": "WCW geography",
        "type": "place",
        "short_description": "Broader geographic framing for WCW.",
        "description": "Regions, routes, and spatial systems that situate WCW beyond single named places."
    },
    {
        "slug": "wcw-legacy",
        "name": "WCW legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WCW.",
        "description": "How WCW continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "wcw",
        "wcw-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wcw",
        "wcw-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wcw",
        "wcw-places",
        "contains",
        "WCW places is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-events",
        "contains",
        "WCW events is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-objects",
        "contains",
        "WCW objects & artifacts is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-factions",
        "contains",
        "WCW factions & groups is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-concepts",
        "contains",
        "WCW concepts is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-eras",
        "contains",
        "WCW eras is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-works",
        "contains",
        "WCW works & media is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-symbols",
        "contains",
        "WCW symbols is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-controversies",
        "contains",
        "WCW controversies is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-sources",
        "contains",
        "WCW sources is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-geography",
        "contains",
        "WCW geography is a primary trailhead under WCW.",
        0.88,
        0.82
    ],
    [
        "wcw",
        "wcw-legacy",
        "contains",
        "WCW legacy is a primary trailhead under WCW.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
