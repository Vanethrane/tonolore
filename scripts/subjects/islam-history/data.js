/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "islam-history",
        "name": "Islam history",
        "type": "topic",
        "short_description": "Prophetic origins, caliphates, schools, and the geographic expansion of Islamic civilization.",
        "description": "Prophetic origins, caliphates, schools, and the geographic expansion of Islamic civilization. This Ton-o-Lore subject maps people, places, events, and ideas tied to Islam history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "islam-history-figures",
        "name": "Islam history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Islam history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Islam history."
    },
    {
        "slug": "islam-history-world",
        "name": "Islam history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Islam history.",
        "description": "Geography, institutions, and periodization that give Islam history its encyclopedia shape."
    },
    {
        "slug": "islam-history-places",
        "name": "Islam history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Islam history.",
        "description": "Places, regions, and built sites that give Islam history its map — where events and figures concentrate."
    },
    {
        "slug": "islam-history-events",
        "name": "Islam history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Islam history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Islam history timeline."
    },
    {
        "slug": "islam-history-objects",
        "name": "Islam history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Islam history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Islam history."
    },
    {
        "slug": "islam-history-factions",
        "name": "Islam history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Islam history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Islam history."
    },
    {
        "slug": "islam-history-concepts",
        "name": "Islam history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Islam history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Islam history readable as a lore graph."
    },
    {
        "slug": "islam-history-eras",
        "name": "Islam history eras",
        "type": "event",
        "short_description": "Periodization for Islam history.",
        "description": "Named eras and phases that help readers track how Islam history changes across time."
    },
    {
        "slug": "islam-history-works",
        "name": "Islam history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Islam history.",
        "description": "Primary works and adaptations through which most audiences encounter Islam history."
    },
    {
        "slug": "islam-history-symbols",
        "name": "Islam history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Islam history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Islam history."
    },
    {
        "slug": "islam-history-controversies",
        "name": "Islam history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Islam history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Islam history argumentative."
    },
    {
        "slug": "islam-history-sources",
        "name": "Islam history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Islam history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Islam history."
    },
    {
        "slug": "islam-history-geography",
        "name": "Islam history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Islam history.",
        "description": "Regions, routes, and spatial systems that situate Islam history beyond single named places."
    },
    {
        "slug": "islam-history-legacy",
        "name": "Islam history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Islam history.",
        "description": "How Islam history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "islam-history",
        "islam-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "islam-history",
        "islam-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "islam-history",
        "islam-history-places",
        "contains",
        "Islam history places is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-events",
        "contains",
        "Islam history events is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-objects",
        "contains",
        "Islam history objects & artifacts is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-factions",
        "contains",
        "Islam history factions & groups is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-concepts",
        "contains",
        "Islam history concepts is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-eras",
        "contains",
        "Islam history eras is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-works",
        "contains",
        "Islam history works & media is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-symbols",
        "contains",
        "Islam history symbols is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-controversies",
        "contains",
        "Islam history controversies is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-sources",
        "contains",
        "Islam history sources is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-geography",
        "contains",
        "Islam history geography is a primary trailhead under Islam history.",
        0.88,
        0.82
    ],
    [
        "islam-history",
        "islam-history-legacy",
        "contains",
        "Islam history legacy is a primary trailhead under Islam history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
