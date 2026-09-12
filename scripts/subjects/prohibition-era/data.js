/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "prohibition-era",
        "name": "Prohibition era",
        "type": "topic",
        "short_description": "Speakeasies, bootleggers, G-men, and the dry-law underworld of 1920s America.",
        "description": "Speakeasies, bootleggers, G-men, and the dry-law underworld of 1920s America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Prohibition era so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "prohibition-era-figures",
        "name": "Prohibition era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Prohibition era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Prohibition era."
    },
    {
        "slug": "prohibition-era-world",
        "name": "Prohibition era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Prohibition era.",
        "description": "Geography, institutions, and periodization that give Prohibition era its encyclopedia shape."
    },
    {
        "slug": "prohibition-era-places",
        "name": "Prohibition era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Prohibition era.",
        "description": "Places, regions, and built sites that give Prohibition era its map — where events and figures concentrate."
    },
    {
        "slug": "prohibition-era-events",
        "name": "Prohibition era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Prohibition era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Prohibition era timeline."
    },
    {
        "slug": "prohibition-era-objects",
        "name": "Prohibition era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Prohibition era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Prohibition era."
    },
    {
        "slug": "prohibition-era-factions",
        "name": "Prohibition era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Prohibition era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Prohibition era."
    },
    {
        "slug": "prohibition-era-concepts",
        "name": "Prohibition era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Prohibition era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Prohibition era readable as a lore graph."
    },
    {
        "slug": "prohibition-era-eras",
        "name": "Prohibition era eras",
        "type": "event",
        "short_description": "Periodization for Prohibition era.",
        "description": "Named eras and phases that help readers track how Prohibition era changes across time."
    },
    {
        "slug": "prohibition-era-works",
        "name": "Prohibition era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Prohibition era.",
        "description": "Primary works and adaptations through which most audiences encounter Prohibition era."
    },
    {
        "slug": "prohibition-era-symbols",
        "name": "Prohibition era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Prohibition era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Prohibition era."
    },
    {
        "slug": "prohibition-era-controversies",
        "name": "Prohibition era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Prohibition era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Prohibition era argumentative."
    },
    {
        "slug": "prohibition-era-sources",
        "name": "Prohibition era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Prohibition era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Prohibition era."
    },
    {
        "slug": "prohibition-era-geography",
        "name": "Prohibition era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Prohibition era.",
        "description": "Regions, routes, and spatial systems that situate Prohibition era beyond single named places."
    },
    {
        "slug": "prohibition-era-legacy",
        "name": "Prohibition era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Prohibition era.",
        "description": "How Prohibition era continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "prohibition-era",
        "prohibition-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "prohibition-era",
        "prohibition-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "prohibition-era",
        "prohibition-era-places",
        "contains",
        "Prohibition era places is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-events",
        "contains",
        "Prohibition era events is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-objects",
        "contains",
        "Prohibition era objects & artifacts is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-factions",
        "contains",
        "Prohibition era factions & groups is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-concepts",
        "contains",
        "Prohibition era concepts is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-eras",
        "contains",
        "Prohibition era eras is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-works",
        "contains",
        "Prohibition era works & media is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-symbols",
        "contains",
        "Prohibition era symbols is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-controversies",
        "contains",
        "Prohibition era controversies is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-sources",
        "contains",
        "Prohibition era sources is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-geography",
        "contains",
        "Prohibition era geography is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ],
    [
        "prohibition-era",
        "prohibition-era-legacy",
        "contains",
        "Prohibition era legacy is a primary trailhead under Prohibition era.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
