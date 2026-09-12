/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chernobyl",
        "name": "Chernobyl",
        "type": "topic",
        "short_description": "Reactor disaster, exclusion zone, liquidators, and the nuclear accident that remapped risk lore.",
        "description": "Reactor disaster, exclusion zone, liquidators, and the nuclear accident that remapped risk lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chernobyl so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "chernobyl-figures",
        "name": "Chernobyl figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chernobyl.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chernobyl."
    },
    {
        "slug": "chernobyl-world",
        "name": "Chernobyl world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chernobyl.",
        "description": "Geography, institutions, and periodization that give Chernobyl its encyclopedia shape."
    },
    {
        "slug": "chernobyl-places",
        "name": "Chernobyl places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chernobyl.",
        "description": "Places, regions, and built sites that give Chernobyl its map — where events and figures concentrate."
    },
    {
        "slug": "chernobyl-events",
        "name": "Chernobyl events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chernobyl.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chernobyl timeline."
    },
    {
        "slug": "chernobyl-objects",
        "name": "Chernobyl objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chernobyl.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chernobyl."
    },
    {
        "slug": "chernobyl-factions",
        "name": "Chernobyl factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chernobyl.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chernobyl."
    },
    {
        "slug": "chernobyl-concepts",
        "name": "Chernobyl concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chernobyl.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chernobyl readable as a lore graph."
    },
    {
        "slug": "chernobyl-eras",
        "name": "Chernobyl eras",
        "type": "event",
        "short_description": "Periodization for Chernobyl.",
        "description": "Named eras and phases that help readers track how Chernobyl changes across time."
    },
    {
        "slug": "chernobyl-works",
        "name": "Chernobyl works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chernobyl.",
        "description": "Primary works and adaptations through which most audiences encounter Chernobyl."
    },
    {
        "slug": "chernobyl-symbols",
        "name": "Chernobyl symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chernobyl.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chernobyl."
    },
    {
        "slug": "chernobyl-controversies",
        "name": "Chernobyl controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chernobyl.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chernobyl argumentative."
    },
    {
        "slug": "chernobyl-sources",
        "name": "Chernobyl sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chernobyl.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chernobyl."
    },
    {
        "slug": "chernobyl-geography",
        "name": "Chernobyl geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chernobyl.",
        "description": "Regions, routes, and spatial systems that situate Chernobyl beyond single named places."
    },
    {
        "slug": "chernobyl-legacy",
        "name": "Chernobyl legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chernobyl.",
        "description": "How Chernobyl continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "chernobyl",
        "chernobyl-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chernobyl",
        "chernobyl-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chernobyl",
        "chernobyl-places",
        "contains",
        "Chernobyl places is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-events",
        "contains",
        "Chernobyl events is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-objects",
        "contains",
        "Chernobyl objects & artifacts is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-factions",
        "contains",
        "Chernobyl factions & groups is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-concepts",
        "contains",
        "Chernobyl concepts is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-eras",
        "contains",
        "Chernobyl eras is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-works",
        "contains",
        "Chernobyl works & media is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-symbols",
        "contains",
        "Chernobyl symbols is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-controversies",
        "contains",
        "Chernobyl controversies is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-sources",
        "contains",
        "Chernobyl sources is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-geography",
        "contains",
        "Chernobyl geography is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ],
    [
        "chernobyl",
        "chernobyl-legacy",
        "contains",
        "Chernobyl legacy is a primary trailhead under Chernobyl.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
