/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "astrology-history",
        "name": "Astrology history",
        "type": "topic",
        "short_description": "Charts, houses, historical practitioners, and the sky-language that crossed courts and cultures.",
        "description": "Charts, houses, historical practitioners, and the sky-language that crossed courts and cultures. This Ton-o-Lore subject maps people, places, events, and ideas tied to Astrology history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "astrology-history-figures",
        "name": "Astrology history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Astrology history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Astrology history."
    },
    {
        "slug": "astrology-history-world",
        "name": "Astrology history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Astrology history.",
        "description": "Geography, institutions, and periodization that give Astrology history its encyclopedia shape."
    },
    {
        "slug": "astrology-history-places",
        "name": "Astrology history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Astrology history.",
        "description": "Places, regions, and built sites that give Astrology history its map — where events and figures concentrate."
    },
    {
        "slug": "astrology-history-events",
        "name": "Astrology history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Astrology history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Astrology history timeline."
    },
    {
        "slug": "astrology-history-objects",
        "name": "Astrology history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Astrology history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Astrology history."
    },
    {
        "slug": "astrology-history-factions",
        "name": "Astrology history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Astrology history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Astrology history."
    },
    {
        "slug": "astrology-history-concepts",
        "name": "Astrology history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Astrology history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Astrology history readable as a lore graph."
    },
    {
        "slug": "astrology-history-eras",
        "name": "Astrology history eras",
        "type": "event",
        "short_description": "Periodization for Astrology history.",
        "description": "Named eras and phases that help readers track how Astrology history changes across time."
    },
    {
        "slug": "astrology-history-works",
        "name": "Astrology history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Astrology history.",
        "description": "Primary works and adaptations through which most audiences encounter Astrology history."
    },
    {
        "slug": "astrology-history-symbols",
        "name": "Astrology history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Astrology history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Astrology history."
    },
    {
        "slug": "astrology-history-controversies",
        "name": "Astrology history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Astrology history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Astrology history argumentative."
    },
    {
        "slug": "astrology-history-sources",
        "name": "Astrology history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Astrology history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Astrology history."
    },
    {
        "slug": "astrology-history-geography",
        "name": "Astrology history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Astrology history.",
        "description": "Regions, routes, and spatial systems that situate Astrology history beyond single named places."
    },
    {
        "slug": "astrology-history-legacy",
        "name": "Astrology history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Astrology history.",
        "description": "How Astrology history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "astrology-history",
        "astrology-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "astrology-history",
        "astrology-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "astrology-history",
        "astrology-history-places",
        "contains",
        "Astrology history places is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-events",
        "contains",
        "Astrology history events is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-objects",
        "contains",
        "Astrology history objects & artifacts is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-factions",
        "contains",
        "Astrology history factions & groups is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-concepts",
        "contains",
        "Astrology history concepts is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-eras",
        "contains",
        "Astrology history eras is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-works",
        "contains",
        "Astrology history works & media is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-symbols",
        "contains",
        "Astrology history symbols is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-controversies",
        "contains",
        "Astrology history controversies is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-sources",
        "contains",
        "Astrology history sources is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-geography",
        "contains",
        "Astrology history geography is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ],
    [
        "astrology-history",
        "astrology-history-legacy",
        "contains",
        "Astrology history legacy is a primary trailhead under Astrology history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
