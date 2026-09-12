/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hindu-mythology",
        "name": "Hindu mythology",
        "type": "topic",
        "short_description": "Devas, avatars, epics, and cosmic cycles that structure South Asian sacred narrative.",
        "description": "Devas, avatars, epics, and cosmic cycles that structure South Asian sacred narrative. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hindu mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "hindu-mythology-figures",
        "name": "Hindu mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hindu mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hindu mythology."
    },
    {
        "slug": "hindu-mythology-world",
        "name": "Hindu mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hindu mythology.",
        "description": "Geography, institutions, and periodization that give Hindu mythology its encyclopedia shape."
    },
    {
        "slug": "hindu-mythology-places",
        "name": "Hindu mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hindu mythology.",
        "description": "Places, regions, and built sites that give Hindu mythology its map — where events and figures concentrate."
    },
    {
        "slug": "hindu-mythology-events",
        "name": "Hindu mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hindu mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hindu mythology timeline."
    },
    {
        "slug": "hindu-mythology-objects",
        "name": "Hindu mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hindu mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hindu mythology."
    },
    {
        "slug": "hindu-mythology-factions",
        "name": "Hindu mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hindu mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hindu mythology."
    },
    {
        "slug": "hindu-mythology-concepts",
        "name": "Hindu mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hindu mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hindu mythology readable as a lore graph."
    },
    {
        "slug": "hindu-mythology-eras",
        "name": "Hindu mythology eras",
        "type": "event",
        "short_description": "Periodization for Hindu mythology.",
        "description": "Named eras and phases that help readers track how Hindu mythology changes across time."
    },
    {
        "slug": "hindu-mythology-works",
        "name": "Hindu mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hindu mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Hindu mythology."
    },
    {
        "slug": "hindu-mythology-symbols",
        "name": "Hindu mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hindu mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hindu mythology."
    },
    {
        "slug": "hindu-mythology-controversies",
        "name": "Hindu mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hindu mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hindu mythology argumentative."
    },
    {
        "slug": "hindu-mythology-sources",
        "name": "Hindu mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hindu mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hindu mythology."
    },
    {
        "slug": "hindu-mythology-geography",
        "name": "Hindu mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hindu mythology.",
        "description": "Regions, routes, and spatial systems that situate Hindu mythology beyond single named places."
    },
    {
        "slug": "hindu-mythology-legacy",
        "name": "Hindu mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hindu mythology.",
        "description": "How Hindu mythology continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "hindu-mythology",
        "hindu-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hindu-mythology",
        "hindu-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hindu-mythology",
        "hindu-mythology-places",
        "contains",
        "Hindu mythology places is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-events",
        "contains",
        "Hindu mythology events is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-objects",
        "contains",
        "Hindu mythology objects & artifacts is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-factions",
        "contains",
        "Hindu mythology factions & groups is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-concepts",
        "contains",
        "Hindu mythology concepts is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-eras",
        "contains",
        "Hindu mythology eras is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-works",
        "contains",
        "Hindu mythology works & media is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-symbols",
        "contains",
        "Hindu mythology symbols is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-controversies",
        "contains",
        "Hindu mythology controversies is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-sources",
        "contains",
        "Hindu mythology sources is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-geography",
        "contains",
        "Hindu mythology geography is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ],
    [
        "hindu-mythology",
        "hindu-mythology-legacy",
        "contains",
        "Hindu mythology legacy is a primary trailhead under Hindu mythology.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
