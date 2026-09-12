/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pompeii",
        "name": "Pompeii",
        "type": "topic",
        "short_description": "Vesuvius, buried cities, casts, and the Roman disaster that froze daily life in ash.",
        "description": "Vesuvius, buried cities, casts, and the Roman disaster that froze daily life in ash. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pompeii so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "pompeii-figures",
        "name": "Pompeii figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pompeii.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pompeii."
    },
    {
        "slug": "pompeii-world",
        "name": "Pompeii world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pompeii.",
        "description": "Geography, institutions, and periodization that give Pompeii its encyclopedia shape."
    },
    {
        "slug": "pompeii-places",
        "name": "Pompeii places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pompeii.",
        "description": "Places, regions, and built sites that give Pompeii its map — where events and figures concentrate."
    },
    {
        "slug": "pompeii-events",
        "name": "Pompeii events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pompeii.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pompeii timeline."
    },
    {
        "slug": "pompeii-objects",
        "name": "Pompeii objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pompeii.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pompeii."
    },
    {
        "slug": "pompeii-factions",
        "name": "Pompeii factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pompeii.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pompeii."
    },
    {
        "slug": "pompeii-concepts",
        "name": "Pompeii concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pompeii.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pompeii readable as a lore graph."
    },
    {
        "slug": "pompeii-eras",
        "name": "Pompeii eras",
        "type": "event",
        "short_description": "Periodization for Pompeii.",
        "description": "Named eras and phases that help readers track how Pompeii changes across time."
    },
    {
        "slug": "pompeii-works",
        "name": "Pompeii works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pompeii.",
        "description": "Primary works and adaptations through which most audiences encounter Pompeii."
    },
    {
        "slug": "pompeii-symbols",
        "name": "Pompeii symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pompeii.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pompeii."
    },
    {
        "slug": "pompeii-controversies",
        "name": "Pompeii controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pompeii.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pompeii argumentative."
    },
    {
        "slug": "pompeii-sources",
        "name": "Pompeii sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pompeii.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pompeii."
    },
    {
        "slug": "pompeii-geography",
        "name": "Pompeii geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pompeii.",
        "description": "Regions, routes, and spatial systems that situate Pompeii beyond single named places."
    },
    {
        "slug": "pompeii-legacy",
        "name": "Pompeii legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pompeii.",
        "description": "How Pompeii continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "pompeii",
        "pompeii-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pompeii",
        "pompeii-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pompeii",
        "pompeii-places",
        "contains",
        "Pompeii places is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-events",
        "contains",
        "Pompeii events is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-objects",
        "contains",
        "Pompeii objects & artifacts is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-factions",
        "contains",
        "Pompeii factions & groups is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-concepts",
        "contains",
        "Pompeii concepts is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-eras",
        "contains",
        "Pompeii eras is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-works",
        "contains",
        "Pompeii works & media is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-symbols",
        "contains",
        "Pompeii symbols is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-controversies",
        "contains",
        "Pompeii controversies is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-sources",
        "contains",
        "Pompeii sources is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-geography",
        "contains",
        "Pompeii geography is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ],
    [
        "pompeii",
        "pompeii-legacy",
        "contains",
        "Pompeii legacy is a primary trailhead under Pompeii.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
