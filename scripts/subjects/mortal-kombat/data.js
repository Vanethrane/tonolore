/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mortal-kombat",
        "name": "Mortal Kombat",
        "type": "topic",
        "short_description": "Outworld tournaments, fatalities, and decades of multiverse reboot lore.",
        "description": "Outworld tournaments, fatalities, and decades of multiverse reboot lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mortal Kombat so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "mortal-kombat-figures",
        "name": "Mortal Kombat figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mortal Kombat.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-world",
        "name": "Mortal Kombat world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mortal Kombat.",
        "description": "Geography, institutions, and periodization that give Mortal Kombat its encyclopedia shape."
    },
    {
        "slug": "mortal-kombat-places",
        "name": "Mortal Kombat places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mortal Kombat.",
        "description": "Places, regions, and built sites that give Mortal Kombat its map — where events and figures concentrate."
    },
    {
        "slug": "mortal-kombat-events",
        "name": "Mortal Kombat events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mortal Kombat.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mortal Kombat timeline."
    },
    {
        "slug": "mortal-kombat-objects",
        "name": "Mortal Kombat objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mortal Kombat.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-factions",
        "name": "Mortal Kombat factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mortal Kombat.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-concepts",
        "name": "Mortal Kombat concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mortal Kombat.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mortal Kombat readable as a lore graph."
    },
    {
        "slug": "mortal-kombat-eras",
        "name": "Mortal Kombat eras",
        "type": "event",
        "short_description": "Periodization for Mortal Kombat.",
        "description": "Named eras and phases that help readers track how Mortal Kombat changes across time."
    },
    {
        "slug": "mortal-kombat-works",
        "name": "Mortal Kombat works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mortal Kombat.",
        "description": "Primary works and adaptations through which most audiences encounter Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-symbols",
        "name": "Mortal Kombat symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mortal Kombat.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-controversies",
        "name": "Mortal Kombat controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mortal Kombat.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mortal Kombat argumentative."
    },
    {
        "slug": "mortal-kombat-sources",
        "name": "Mortal Kombat sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mortal Kombat.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mortal Kombat."
    },
    {
        "slug": "mortal-kombat-geography",
        "name": "Mortal Kombat geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mortal Kombat.",
        "description": "Regions, routes, and spatial systems that situate Mortal Kombat beyond single named places."
    },
    {
        "slug": "mortal-kombat-legacy",
        "name": "Mortal Kombat legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mortal Kombat.",
        "description": "How Mortal Kombat continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "mortal-kombat",
        "mortal-kombat-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mortal-kombat",
        "mortal-kombat-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mortal-kombat",
        "mortal-kombat-places",
        "contains",
        "Mortal Kombat places is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-events",
        "contains",
        "Mortal Kombat events is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-objects",
        "contains",
        "Mortal Kombat objects & artifacts is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-factions",
        "contains",
        "Mortal Kombat factions & groups is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-concepts",
        "contains",
        "Mortal Kombat concepts is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-eras",
        "contains",
        "Mortal Kombat eras is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-works",
        "contains",
        "Mortal Kombat works & media is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-symbols",
        "contains",
        "Mortal Kombat symbols is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-controversies",
        "contains",
        "Mortal Kombat controversies is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-sources",
        "contains",
        "Mortal Kombat sources is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-geography",
        "contains",
        "Mortal Kombat geography is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ],
    [
        "mortal-kombat",
        "mortal-kombat-legacy",
        "contains",
        "Mortal Kombat legacy is a primary trailhead under Mortal Kombat.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
