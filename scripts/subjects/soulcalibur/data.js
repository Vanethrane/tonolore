/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "soulcalibur",
        "name": "Soulcalibur",
        "type": "topic",
        "short_description": "Weapons fighters, Soul Edge mythology, and 3D arena combat lineages from Namco.",
        "description": "Weapons fighters, Soul Edge mythology, and 3D arena combat lineages from Namco. This Ton-o-Lore subject maps people, places, events, and ideas tied to Soulcalibur so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "soulcalibur-figures",
        "name": "Soulcalibur figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Soulcalibur.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Soulcalibur."
    },
    {
        "slug": "soulcalibur-world",
        "name": "Soulcalibur world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Soulcalibur.",
        "description": "Geography, institutions, and periodization that give Soulcalibur its encyclopedia shape."
    },
    {
        "slug": "soulcalibur-places",
        "name": "Soulcalibur places",
        "type": "place",
        "short_description": "Locations and geographies that frame Soulcalibur.",
        "description": "Places, regions, and built sites that give Soulcalibur its map — where events and figures concentrate."
    },
    {
        "slug": "soulcalibur-events",
        "name": "Soulcalibur events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Soulcalibur.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Soulcalibur timeline."
    },
    {
        "slug": "soulcalibur-objects",
        "name": "Soulcalibur objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Soulcalibur.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Soulcalibur."
    },
    {
        "slug": "soulcalibur-factions",
        "name": "Soulcalibur factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Soulcalibur.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Soulcalibur."
    },
    {
        "slug": "soulcalibur-concepts",
        "name": "Soulcalibur concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Soulcalibur.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Soulcalibur readable as a lore graph."
    },
    {
        "slug": "soulcalibur-eras",
        "name": "Soulcalibur eras",
        "type": "event",
        "short_description": "Periodization for Soulcalibur.",
        "description": "Named eras and phases that help readers track how Soulcalibur changes across time."
    },
    {
        "slug": "soulcalibur-works",
        "name": "Soulcalibur works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Soulcalibur.",
        "description": "Primary works and adaptations through which most audiences encounter Soulcalibur."
    },
    {
        "slug": "soulcalibur-symbols",
        "name": "Soulcalibur symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Soulcalibur.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Soulcalibur."
    },
    {
        "slug": "soulcalibur-controversies",
        "name": "Soulcalibur controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Soulcalibur.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Soulcalibur argumentative."
    },
    {
        "slug": "soulcalibur-sources",
        "name": "Soulcalibur sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Soulcalibur.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Soulcalibur."
    },
    {
        "slug": "soulcalibur-geography",
        "name": "Soulcalibur geography",
        "type": "place",
        "short_description": "Broader geographic framing for Soulcalibur.",
        "description": "Regions, routes, and spatial systems that situate Soulcalibur beyond single named places."
    },
    {
        "slug": "soulcalibur-legacy",
        "name": "Soulcalibur legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Soulcalibur.",
        "description": "How Soulcalibur continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "soulcalibur",
        "soulcalibur-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "soulcalibur",
        "soulcalibur-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "soulcalibur",
        "soulcalibur-places",
        "contains",
        "Soulcalibur places is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-events",
        "contains",
        "Soulcalibur events is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-objects",
        "contains",
        "Soulcalibur objects & artifacts is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-factions",
        "contains",
        "Soulcalibur factions & groups is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-concepts",
        "contains",
        "Soulcalibur concepts is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-eras",
        "contains",
        "Soulcalibur eras is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-works",
        "contains",
        "Soulcalibur works & media is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-symbols",
        "contains",
        "Soulcalibur symbols is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-controversies",
        "contains",
        "Soulcalibur controversies is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-sources",
        "contains",
        "Soulcalibur sources is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-geography",
        "contains",
        "Soulcalibur geography is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ],
    [
        "soulcalibur",
        "soulcalibur-legacy",
        "contains",
        "Soulcalibur legacy is a primary trailhead under Soulcalibur.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
