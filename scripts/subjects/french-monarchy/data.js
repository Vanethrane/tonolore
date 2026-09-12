/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "french-monarchy",
        "name": "French monarchy",
        "type": "topic",
        "short_description": "Capetians to Bourbons — courts, revolutions, and the crown that defined continental kingship.",
        "description": "Capetians to Bourbons — courts, revolutions, and the crown that defined continental kingship. This Ton-o-Lore subject maps people, places, events, and ideas tied to French monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "french-monarchy-figures",
        "name": "French monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to French monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring French monarchy."
    },
    {
        "slug": "french-monarchy-world",
        "name": "French monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame French monarchy.",
        "description": "Geography, institutions, and periodization that give French monarchy its encyclopedia shape."
    },
    {
        "slug": "french-monarchy-places",
        "name": "French monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame French monarchy.",
        "description": "Places, regions, and built sites that give French monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "french-monarchy-events",
        "name": "French monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in French monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the French monarchy timeline."
    },
    {
        "slug": "french-monarchy-objects",
        "name": "French monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to French monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through French monarchy."
    },
    {
        "slug": "french-monarchy-factions",
        "name": "French monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside French monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in French monarchy."
    },
    {
        "slug": "french-monarchy-concepts",
        "name": "French monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize French monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make French monarchy readable as a lore graph."
    },
    {
        "slug": "french-monarchy-eras",
        "name": "French monarchy eras",
        "type": "event",
        "short_description": "Periodization for French monarchy.",
        "description": "Named eras and phases that help readers track how French monarchy changes across time."
    },
    {
        "slug": "french-monarchy-works",
        "name": "French monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry French monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter French monarchy."
    },
    {
        "slug": "french-monarchy-symbols",
        "name": "French monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with French monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside French monarchy."
    },
    {
        "slug": "french-monarchy-controversies",
        "name": "French monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in French monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep French monarchy argumentative."
    },
    {
        "slug": "french-monarchy-sources",
        "name": "French monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into French monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify French monarchy."
    },
    {
        "slug": "french-monarchy-geography",
        "name": "French monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for French monarchy.",
        "description": "Regions, routes, and spatial systems that situate French monarchy beyond single named places."
    },
    {
        "slug": "french-monarchy-legacy",
        "name": "French monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of French monarchy.",
        "description": "How French monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "french-monarchy",
        "french-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "french-monarchy",
        "french-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "french-monarchy",
        "french-monarchy-places",
        "contains",
        "French monarchy places is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-events",
        "contains",
        "French monarchy events is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-objects",
        "contains",
        "French monarchy objects & artifacts is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-factions",
        "contains",
        "French monarchy factions & groups is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-concepts",
        "contains",
        "French monarchy concepts is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-eras",
        "contains",
        "French monarchy eras is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-works",
        "contains",
        "French monarchy works & media is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-symbols",
        "contains",
        "French monarchy symbols is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-controversies",
        "contains",
        "French monarchy controversies is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-sources",
        "contains",
        "French monarchy sources is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-geography",
        "contains",
        "French monarchy geography is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ],
    [
        "french-monarchy",
        "french-monarchy-legacy",
        "contains",
        "French monarchy legacy is a primary trailhead under French monarchy.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
