/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vampire-lore",
        "name": "Vampire lore",
        "type": "topic",
        "short_description": "Folk vampires, literary bloodlines, rules of undeath, hunters, and the places the myth keeps reanimating.",
        "description": "Folk vampires, literary bloodlines, rules of undeath, hunters, and the places the myth keeps reanimating. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vampire lore so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "vampire-lore-figures",
        "name": "Vampire lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vampire lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vampire lore."
    },
    {
        "slug": "vampire-lore-world",
        "name": "Vampire lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vampire lore.",
        "description": "Geography, institutions, and periodization that give Vampire lore its encyclopedia shape."
    },
    {
        "slug": "vampire-lore-places",
        "name": "Vampire lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vampire lore.",
        "description": "Places, regions, and built sites that give Vampire lore its map — where events and figures concentrate."
    },
    {
        "slug": "vampire-lore-events",
        "name": "Vampire lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vampire lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vampire lore timeline."
    },
    {
        "slug": "vampire-lore-objects",
        "name": "Vampire lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vampire lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vampire lore."
    },
    {
        "slug": "vampire-lore-factions",
        "name": "Vampire lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vampire lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vampire lore."
    },
    {
        "slug": "vampire-lore-concepts",
        "name": "Vampire lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vampire lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vampire lore readable as a lore graph."
    },
    {
        "slug": "vampire-lore-eras",
        "name": "Vampire lore eras",
        "type": "event",
        "short_description": "Periodization for Vampire lore.",
        "description": "Named eras and phases that help readers track how Vampire lore changes across time."
    },
    {
        "slug": "vampire-lore-works",
        "name": "Vampire lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vampire lore.",
        "description": "Primary works and adaptations through which most audiences encounter Vampire lore."
    },
    {
        "slug": "vampire-lore-symbols",
        "name": "Vampire lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vampire lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vampire lore."
    },
    {
        "slug": "vampire-lore-controversies",
        "name": "Vampire lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vampire lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vampire lore argumentative."
    },
    {
        "slug": "vampire-lore-sources",
        "name": "Vampire lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vampire lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vampire lore."
    },
    {
        "slug": "vampire-lore-geography",
        "name": "Vampire lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vampire lore.",
        "description": "Regions, routes, and spatial systems that situate Vampire lore beyond single named places."
    },
    {
        "slug": "vampire-lore-legacy",
        "name": "Vampire lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vampire lore.",
        "description": "How Vampire lore continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "vampire-lore",
        "vampire-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vampire-lore",
        "vampire-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vampire-lore",
        "vampire-lore-places",
        "contains",
        "Vampire lore places is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-events",
        "contains",
        "Vampire lore events is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-objects",
        "contains",
        "Vampire lore objects & artifacts is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-factions",
        "contains",
        "Vampire lore factions & groups is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-concepts",
        "contains",
        "Vampire lore concepts is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-eras",
        "contains",
        "Vampire lore eras is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-works",
        "contains",
        "Vampire lore works & media is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-symbols",
        "contains",
        "Vampire lore symbols is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-controversies",
        "contains",
        "Vampire lore controversies is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-sources",
        "contains",
        "Vampire lore sources is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-geography",
        "contains",
        "Vampire lore geography is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-legacy",
        "contains",
        "Vampire lore legacy is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
