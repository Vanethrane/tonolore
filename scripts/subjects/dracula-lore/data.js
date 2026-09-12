/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dracula-lore",
        "name": "Dracula lore",
        "type": "topic",
        "short_description": "Stoker's Count, adaptations, and the vampire template that still organizes horror bloodlines.",
        "description": "Stoker's Count, adaptations, and the vampire template that still organizes horror bloodlines. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dracula lore so readers can follow long-tail connections across horror."
    },
    {
        "slug": "dracula-lore-figures",
        "name": "Dracula lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dracula lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dracula lore."
    },
    {
        "slug": "dracula-lore-world",
        "name": "Dracula lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dracula lore.",
        "description": "Geography, institutions, and periodization that give Dracula lore its encyclopedia shape."
    },
    {
        "slug": "dracula-lore-places",
        "name": "Dracula lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dracula lore.",
        "description": "Places, regions, and built sites that give Dracula lore its map — where events and figures concentrate."
    },
    {
        "slug": "dracula-lore-events",
        "name": "Dracula lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dracula lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dracula lore timeline."
    },
    {
        "slug": "dracula-lore-objects",
        "name": "Dracula lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dracula lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dracula lore."
    },
    {
        "slug": "dracula-lore-factions",
        "name": "Dracula lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dracula lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dracula lore."
    },
    {
        "slug": "dracula-lore-concepts",
        "name": "Dracula lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dracula lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dracula lore readable as a lore graph."
    },
    {
        "slug": "dracula-lore-eras",
        "name": "Dracula lore eras",
        "type": "event",
        "short_description": "Periodization for Dracula lore.",
        "description": "Named eras and phases that help readers track how Dracula lore changes across time."
    },
    {
        "slug": "dracula-lore-works",
        "name": "Dracula lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dracula lore.",
        "description": "Primary works and adaptations through which most audiences encounter Dracula lore."
    },
    {
        "slug": "dracula-lore-symbols",
        "name": "Dracula lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dracula lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dracula lore."
    },
    {
        "slug": "dracula-lore-controversies",
        "name": "Dracula lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dracula lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dracula lore argumentative."
    },
    {
        "slug": "dracula-lore-sources",
        "name": "Dracula lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dracula lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dracula lore."
    },
    {
        "slug": "dracula-lore-geography",
        "name": "Dracula lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dracula lore.",
        "description": "Regions, routes, and spatial systems that situate Dracula lore beyond single named places."
    },
    {
        "slug": "dracula-lore-legacy",
        "name": "Dracula lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dracula lore.",
        "description": "How Dracula lore continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "dracula-lore",
        "dracula-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dracula-lore",
        "dracula-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dracula-lore",
        "dracula-lore-places",
        "contains",
        "Dracula lore places is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-events",
        "contains",
        "Dracula lore events is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-objects",
        "contains",
        "Dracula lore objects & artifacts is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-factions",
        "contains",
        "Dracula lore factions & groups is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-concepts",
        "contains",
        "Dracula lore concepts is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-eras",
        "contains",
        "Dracula lore eras is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-works",
        "contains",
        "Dracula lore works & media is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-symbols",
        "contains",
        "Dracula lore symbols is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-controversies",
        "contains",
        "Dracula lore controversies is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-sources",
        "contains",
        "Dracula lore sources is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-geography",
        "contains",
        "Dracula lore geography is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ],
    [
        "dracula-lore",
        "dracula-lore-legacy",
        "contains",
        "Dracula lore legacy is a primary trailhead under Dracula lore.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
