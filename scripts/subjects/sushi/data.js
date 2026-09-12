/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sushi",
        "name": "Sushi",
        "type": "topic",
        "short_description": "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation.",
        "description": "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sushi so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "sushi-figures",
        "name": "Sushi figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sushi.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sushi."
    },
    {
        "slug": "sushi-world",
        "name": "Sushi world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sushi.",
        "description": "Geography, institutions, and periodization that give Sushi its encyclopedia shape."
    },
    {
        "slug": "sushi-places",
        "name": "Sushi places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sushi.",
        "description": "Places, regions, and built sites that give Sushi its map — where events and figures concentrate."
    },
    {
        "slug": "sushi-events",
        "name": "Sushi events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sushi.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sushi timeline."
    },
    {
        "slug": "sushi-objects",
        "name": "Sushi objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sushi.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sushi."
    },
    {
        "slug": "sushi-factions",
        "name": "Sushi factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sushi.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sushi."
    },
    {
        "slug": "sushi-concepts",
        "name": "Sushi concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sushi.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sushi readable as a lore graph."
    },
    {
        "slug": "sushi-eras",
        "name": "Sushi eras",
        "type": "event",
        "short_description": "Periodization for Sushi.",
        "description": "Named eras and phases that help readers track how Sushi changes across time."
    },
    {
        "slug": "sushi-works",
        "name": "Sushi works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sushi.",
        "description": "Primary works and adaptations through which most audiences encounter Sushi."
    },
    {
        "slug": "sushi-symbols",
        "name": "Sushi symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sushi.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sushi."
    },
    {
        "slug": "sushi-controversies",
        "name": "Sushi controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sushi.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sushi argumentative."
    },
    {
        "slug": "sushi-sources",
        "name": "Sushi sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sushi.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sushi."
    },
    {
        "slug": "sushi-geography",
        "name": "Sushi geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sushi.",
        "description": "Regions, routes, and spatial systems that situate Sushi beyond single named places."
    },
    {
        "slug": "sushi-legacy",
        "name": "Sushi legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sushi.",
        "description": "How Sushi continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "sushi",
        "sushi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sushi",
        "sushi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sushi",
        "sushi-places",
        "contains",
        "Sushi places is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-events",
        "contains",
        "Sushi events is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-objects",
        "contains",
        "Sushi objects & artifacts is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-factions",
        "contains",
        "Sushi factions & groups is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-concepts",
        "contains",
        "Sushi concepts is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-eras",
        "contains",
        "Sushi eras is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-works",
        "contains",
        "Sushi works & media is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-symbols",
        "contains",
        "Sushi symbols is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-controversies",
        "contains",
        "Sushi controversies is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-sources",
        "contains",
        "Sushi sources is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-geography",
        "contains",
        "Sushi geography is a primary trailhead under Sushi.",
        0.88,
        0.82
    ],
    [
        "sushi",
        "sushi-legacy",
        "contains",
        "Sushi legacy is a primary trailhead under Sushi.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
