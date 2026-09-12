/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "buddhism-history",
        "name": "Buddhism history",
        "type": "topic",
        "short_description": "Buddha, schools, transmission routes, and the practice lineages across Asia and the world.",
        "description": "Buddha, schools, transmission routes, and the practice lineages across Asia and the world. This Ton-o-Lore subject maps people, places, events, and ideas tied to Buddhism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "buddhism-history-figures",
        "name": "Buddhism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Buddhism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Buddhism history."
    },
    {
        "slug": "buddhism-history-world",
        "name": "Buddhism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Buddhism history.",
        "description": "Geography, institutions, and periodization that give Buddhism history its encyclopedia shape."
    },
    {
        "slug": "buddhism-history-places",
        "name": "Buddhism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Buddhism history.",
        "description": "Places, regions, and built sites that give Buddhism history its map — where events and figures concentrate."
    },
    {
        "slug": "buddhism-history-events",
        "name": "Buddhism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Buddhism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Buddhism history timeline."
    },
    {
        "slug": "buddhism-history-objects",
        "name": "Buddhism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Buddhism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Buddhism history."
    },
    {
        "slug": "buddhism-history-factions",
        "name": "Buddhism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Buddhism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Buddhism history."
    },
    {
        "slug": "buddhism-history-concepts",
        "name": "Buddhism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Buddhism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Buddhism history readable as a lore graph."
    },
    {
        "slug": "buddhism-history-eras",
        "name": "Buddhism history eras",
        "type": "event",
        "short_description": "Periodization for Buddhism history.",
        "description": "Named eras and phases that help readers track how Buddhism history changes across time."
    },
    {
        "slug": "buddhism-history-works",
        "name": "Buddhism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Buddhism history.",
        "description": "Primary works and adaptations through which most audiences encounter Buddhism history."
    },
    {
        "slug": "buddhism-history-symbols",
        "name": "Buddhism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Buddhism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Buddhism history."
    },
    {
        "slug": "buddhism-history-controversies",
        "name": "Buddhism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Buddhism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Buddhism history argumentative."
    },
    {
        "slug": "buddhism-history-sources",
        "name": "Buddhism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Buddhism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Buddhism history."
    },
    {
        "slug": "buddhism-history-geography",
        "name": "Buddhism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Buddhism history.",
        "description": "Regions, routes, and spatial systems that situate Buddhism history beyond single named places."
    },
    {
        "slug": "buddhism-history-legacy",
        "name": "Buddhism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Buddhism history.",
        "description": "How Buddhism history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "buddhism-history",
        "buddhism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "buddhism-history",
        "buddhism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "buddhism-history",
        "buddhism-history-places",
        "contains",
        "Buddhism history places is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-events",
        "contains",
        "Buddhism history events is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-objects",
        "contains",
        "Buddhism history objects & artifacts is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-factions",
        "contains",
        "Buddhism history factions & groups is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-concepts",
        "contains",
        "Buddhism history concepts is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-eras",
        "contains",
        "Buddhism history eras is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-works",
        "contains",
        "Buddhism history works & media is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-symbols",
        "contains",
        "Buddhism history symbols is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-controversies",
        "contains",
        "Buddhism history controversies is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-sources",
        "contains",
        "Buddhism history sources is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-geography",
        "contains",
        "Buddhism history geography is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ],
    [
        "buddhism-history",
        "buddhism-history-legacy",
        "contains",
        "Buddhism history legacy is a primary trailhead under Buddhism history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
