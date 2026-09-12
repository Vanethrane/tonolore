/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lore-podcast",
        "name": "Lore (podcast)",
        "type": "topic",
        "short_description": "Historical horror folklore episodes that bridge true oddities and campfire dread.",
        "description": "Historical horror folklore episodes that bridge true oddities and campfire dread. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lore (podcast) so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "lore-podcast-figures",
        "name": "Lore (podcast) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lore (podcast).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lore (podcast)."
    },
    {
        "slug": "lore-podcast-world",
        "name": "Lore (podcast) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lore (podcast).",
        "description": "Geography, institutions, and periodization that give Lore (podcast) its encyclopedia shape."
    },
    {
        "slug": "lore-podcast-places",
        "name": "Lore (podcast) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lore (podcast).",
        "description": "Places, regions, and built sites that give Lore (podcast) its map — where events and figures concentrate."
    },
    {
        "slug": "lore-podcast-events",
        "name": "Lore (podcast) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lore (podcast).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lore (podcast) timeline."
    },
    {
        "slug": "lore-podcast-objects",
        "name": "Lore (podcast) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lore (podcast).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lore (podcast)."
    },
    {
        "slug": "lore-podcast-factions",
        "name": "Lore (podcast) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lore (podcast).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lore (podcast)."
    },
    {
        "slug": "lore-podcast-concepts",
        "name": "Lore (podcast) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lore (podcast).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lore (podcast) readable as a lore graph."
    },
    {
        "slug": "lore-podcast-eras",
        "name": "Lore (podcast) eras",
        "type": "event",
        "short_description": "Periodization for Lore (podcast).",
        "description": "Named eras and phases that help readers track how Lore (podcast) changes across time."
    },
    {
        "slug": "lore-podcast-works",
        "name": "Lore (podcast) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lore (podcast).",
        "description": "Primary works and adaptations through which most audiences encounter Lore (podcast)."
    },
    {
        "slug": "lore-podcast-symbols",
        "name": "Lore (podcast) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lore (podcast).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lore (podcast)."
    },
    {
        "slug": "lore-podcast-controversies",
        "name": "Lore (podcast) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lore (podcast).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lore (podcast) argumentative."
    },
    {
        "slug": "lore-podcast-sources",
        "name": "Lore (podcast) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lore (podcast).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lore (podcast)."
    },
    {
        "slug": "lore-podcast-geography",
        "name": "Lore (podcast) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lore (podcast).",
        "description": "Regions, routes, and spatial systems that situate Lore (podcast) beyond single named places."
    },
    {
        "slug": "lore-podcast-legacy",
        "name": "Lore (podcast) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lore (podcast).",
        "description": "How Lore (podcast) continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "lore-podcast",
        "lore-podcast-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lore-podcast",
        "lore-podcast-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lore-podcast",
        "lore-podcast-places",
        "contains",
        "Lore (podcast) places is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-events",
        "contains",
        "Lore (podcast) events is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-objects",
        "contains",
        "Lore (podcast) objects & artifacts is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-factions",
        "contains",
        "Lore (podcast) factions & groups is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-concepts",
        "contains",
        "Lore (podcast) concepts is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-eras",
        "contains",
        "Lore (podcast) eras is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-works",
        "contains",
        "Lore (podcast) works & media is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-symbols",
        "contains",
        "Lore (podcast) symbols is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-controversies",
        "contains",
        "Lore (podcast) controversies is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-sources",
        "contains",
        "Lore (podcast) sources is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-geography",
        "contains",
        "Lore (podcast) geography is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ],
    [
        "lore-podcast",
        "lore-podcast-legacy",
        "contains",
        "Lore (podcast) legacy is a primary trailhead under Lore (podcast).",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
