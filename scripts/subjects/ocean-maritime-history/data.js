/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ocean-maritime-history",
        "name": "Ocean & maritime history",
        "type": "topic",
        "short_description": "Shipwrecks, expeditions, lost ships, naval battles, explorers, and deep-sea mysteries.",
        "description": "Shipwrecks, expeditions, lost ships, naval battles, explorers, and deep-sea mysteries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ocean & maritime history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "ocean-maritime-history-figures",
        "name": "Ocean & maritime history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ocean & maritime history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-world",
        "name": "Ocean & maritime history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ocean & maritime history.",
        "description": "Geography, institutions, and periodization that give Ocean & maritime history its encyclopedia shape."
    },
    {
        "slug": "ocean-maritime-history-places",
        "name": "Ocean & maritime history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ocean & maritime history.",
        "description": "Places, regions, and built sites that give Ocean & maritime history its map — where events and figures concentrate."
    },
    {
        "slug": "ocean-maritime-history-events",
        "name": "Ocean & maritime history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ocean & maritime history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ocean & maritime history timeline."
    },
    {
        "slug": "ocean-maritime-history-objects",
        "name": "Ocean & maritime history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ocean & maritime history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-factions",
        "name": "Ocean & maritime history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ocean & maritime history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-concepts",
        "name": "Ocean & maritime history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ocean & maritime history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ocean & maritime history readable as a lore graph."
    },
    {
        "slug": "ocean-maritime-history-eras",
        "name": "Ocean & maritime history eras",
        "type": "event",
        "short_description": "Periodization for Ocean & maritime history.",
        "description": "Named eras and phases that help readers track how Ocean & maritime history changes across time."
    },
    {
        "slug": "ocean-maritime-history-works",
        "name": "Ocean & maritime history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ocean & maritime history.",
        "description": "Primary works and adaptations through which most audiences encounter Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-symbols",
        "name": "Ocean & maritime history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ocean & maritime history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-controversies",
        "name": "Ocean & maritime history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ocean & maritime history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ocean & maritime history argumentative."
    },
    {
        "slug": "ocean-maritime-history-sources",
        "name": "Ocean & maritime history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ocean & maritime history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ocean & maritime history."
    },
    {
        "slug": "ocean-maritime-history-geography",
        "name": "Ocean & maritime history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ocean & maritime history.",
        "description": "Regions, routes, and spatial systems that situate Ocean & maritime history beyond single named places."
    },
    {
        "slug": "ocean-maritime-history-legacy",
        "name": "Ocean & maritime history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ocean & maritime history.",
        "description": "How Ocean & maritime history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "ocean-maritime-history",
        "ocean-maritime-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-places",
        "contains",
        "Ocean & maritime history places is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-events",
        "contains",
        "Ocean & maritime history events is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-objects",
        "contains",
        "Ocean & maritime history objects & artifacts is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-factions",
        "contains",
        "Ocean & maritime history factions & groups is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-concepts",
        "contains",
        "Ocean & maritime history concepts is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-eras",
        "contains",
        "Ocean & maritime history eras is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-works",
        "contains",
        "Ocean & maritime history works & media is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-symbols",
        "contains",
        "Ocean & maritime history symbols is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-controversies",
        "contains",
        "Ocean & maritime history controversies is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-sources",
        "contains",
        "Ocean & maritime history sources is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-geography",
        "contains",
        "Ocean & maritime history geography is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ],
    [
        "ocean-maritime-history",
        "ocean-maritime-history-legacy",
        "contains",
        "Ocean & maritime history legacy is a primary trailhead under Ocean & maritime history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
