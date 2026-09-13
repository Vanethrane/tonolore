/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "steamship-history",
        "name": "Steamship history",
        "type": "topic",
        "short_description": "Ocean liners, packet ships, companies, routes, disasters, and the steam age that remade long-distance travel.",
        "description": "Ocean liners, packet ships, companies, routes, disasters, and the steam age that remade long-distance travel. This Ton-o-Lore subject maps people, places, events, and ideas tied to Steamship history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "steamship-history-figures",
        "name": "Steamship history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Steamship history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Steamship history."
    },
    {
        "slug": "steamship-history-world",
        "name": "Steamship history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Steamship history.",
        "description": "Geography, institutions, and periodization that give Steamship history its encyclopedia shape."
    },
    {
        "slug": "steamship-history-places",
        "name": "Steamship history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Steamship history.",
        "description": "Places, regions, and built sites that give Steamship history its map — where events and figures concentrate."
    },
    {
        "slug": "steamship-history-events",
        "name": "Steamship history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Steamship history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Steamship history timeline."
    },
    {
        "slug": "steamship-history-objects",
        "name": "Steamship history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Steamship history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Steamship history."
    },
    {
        "slug": "steamship-history-factions",
        "name": "Steamship history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Steamship history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Steamship history."
    },
    {
        "slug": "steamship-history-concepts",
        "name": "Steamship history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Steamship history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Steamship history readable as a lore graph."
    },
    {
        "slug": "steamship-history-eras",
        "name": "Steamship history eras",
        "type": "event",
        "short_description": "Periodization for Steamship history.",
        "description": "Named eras and phases that help readers track how Steamship history changes across time."
    },
    {
        "slug": "steamship-history-works",
        "name": "Steamship history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Steamship history.",
        "description": "Primary works and adaptations through which most audiences encounter Steamship history."
    },
    {
        "slug": "steamship-history-symbols",
        "name": "Steamship history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Steamship history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Steamship history."
    },
    {
        "slug": "steamship-history-controversies",
        "name": "Steamship history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Steamship history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Steamship history argumentative."
    },
    {
        "slug": "steamship-history-sources",
        "name": "Steamship history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Steamship history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Steamship history."
    },
    {
        "slug": "steamship-history-geography",
        "name": "Steamship history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Steamship history.",
        "description": "Regions, routes, and spatial systems that situate Steamship history beyond single named places."
    },
    {
        "slug": "steamship-history-legacy",
        "name": "Steamship history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Steamship history.",
        "description": "How Steamship history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "steamship-history",
        "steamship-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "steamship-history",
        "steamship-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "steamship-history",
        "steamship-history-places",
        "contains",
        "Steamship history places is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-events",
        "contains",
        "Steamship history events is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-objects",
        "contains",
        "Steamship history objects & artifacts is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-factions",
        "contains",
        "Steamship history factions & groups is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-concepts",
        "contains",
        "Steamship history concepts is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-eras",
        "contains",
        "Steamship history eras is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-works",
        "contains",
        "Steamship history works & media is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-symbols",
        "contains",
        "Steamship history symbols is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-controversies",
        "contains",
        "Steamship history controversies is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-sources",
        "contains",
        "Steamship history sources is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-geography",
        "contains",
        "Steamship history geography is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ],
    [
        "steamship-history",
        "steamship-history-legacy",
        "contains",
        "Steamship history legacy is a primary trailhead under Steamship history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
