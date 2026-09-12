/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "space-race",
        "name": "Space Race",
        "type": "topic",
        "short_description": "Sputnik to Apollo — nations, rockets, crews, and the Cold War contest for orbital prestige.",
        "description": "Sputnik to Apollo — nations, rockets, crews, and the Cold War contest for orbital prestige. This Ton-o-Lore subject maps people, places, events, and ideas tied to Space Race so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "space-race-figures",
        "name": "Space Race figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Space Race.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Space Race."
    },
    {
        "slug": "space-race-world",
        "name": "Space Race world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Space Race.",
        "description": "Geography, institutions, and periodization that give Space Race its encyclopedia shape."
    },
    {
        "slug": "space-race-places",
        "name": "Space Race places",
        "type": "place",
        "short_description": "Locations and geographies that frame Space Race.",
        "description": "Places, regions, and built sites that give Space Race its map — where events and figures concentrate."
    },
    {
        "slug": "space-race-events",
        "name": "Space Race events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Space Race.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Space Race timeline."
    },
    {
        "slug": "space-race-objects",
        "name": "Space Race objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Space Race.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Space Race."
    },
    {
        "slug": "space-race-factions",
        "name": "Space Race factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Space Race.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Space Race."
    },
    {
        "slug": "space-race-concepts",
        "name": "Space Race concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Space Race.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Space Race readable as a lore graph."
    },
    {
        "slug": "space-race-eras",
        "name": "Space Race eras",
        "type": "event",
        "short_description": "Periodization for Space Race.",
        "description": "Named eras and phases that help readers track how Space Race changes across time."
    },
    {
        "slug": "space-race-works",
        "name": "Space Race works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Space Race.",
        "description": "Primary works and adaptations through which most audiences encounter Space Race."
    },
    {
        "slug": "space-race-symbols",
        "name": "Space Race symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Space Race.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Space Race."
    },
    {
        "slug": "space-race-controversies",
        "name": "Space Race controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Space Race.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Space Race argumentative."
    },
    {
        "slug": "space-race-sources",
        "name": "Space Race sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Space Race.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Space Race."
    },
    {
        "slug": "space-race-geography",
        "name": "Space Race geography",
        "type": "place",
        "short_description": "Broader geographic framing for Space Race.",
        "description": "Regions, routes, and spatial systems that situate Space Race beyond single named places."
    },
    {
        "slug": "space-race-legacy",
        "name": "Space Race legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Space Race.",
        "description": "How Space Race continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "space-race",
        "space-race-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "space-race",
        "space-race-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "space-race",
        "space-race-places",
        "contains",
        "Space Race places is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-events",
        "contains",
        "Space Race events is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-objects",
        "contains",
        "Space Race objects & artifacts is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-factions",
        "contains",
        "Space Race factions & groups is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-concepts",
        "contains",
        "Space Race concepts is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-eras",
        "contains",
        "Space Race eras is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-works",
        "contains",
        "Space Race works & media is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-symbols",
        "contains",
        "Space Race symbols is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-controversies",
        "contains",
        "Space Race controversies is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-sources",
        "contains",
        "Space Race sources is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-geography",
        "contains",
        "Space Race geography is a primary trailhead under Space Race.",
        0.88,
        0.82
    ],
    [
        "space-race",
        "space-race-legacy",
        "contains",
        "Space Race legacy is a primary trailhead under Space Race.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
