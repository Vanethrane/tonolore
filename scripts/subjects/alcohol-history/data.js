/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alcohol-history",
        "name": "Alcohol history",
        "type": "topic",
        "short_description": "Drinks, distilleries, breweries, regions, prohibition eras, inventions, and the people who made them.",
        "description": "Drinks, distilleries, breweries, regions, prohibition eras, inventions, and the people who made them. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alcohol history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "alcohol-history-figures",
        "name": "Alcohol history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alcohol history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alcohol history."
    },
    {
        "slug": "alcohol-history-world",
        "name": "Alcohol history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alcohol history.",
        "description": "Geography, institutions, and periodization that give Alcohol history its encyclopedia shape."
    },
    {
        "slug": "alcohol-history-places",
        "name": "Alcohol history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alcohol history.",
        "description": "Places, regions, and built sites that give Alcohol history its map — where events and figures concentrate."
    },
    {
        "slug": "alcohol-history-events",
        "name": "Alcohol history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alcohol history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alcohol history timeline."
    },
    {
        "slug": "alcohol-history-objects",
        "name": "Alcohol history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alcohol history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alcohol history."
    },
    {
        "slug": "alcohol-history-factions",
        "name": "Alcohol history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alcohol history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alcohol history."
    },
    {
        "slug": "alcohol-history-concepts",
        "name": "Alcohol history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alcohol history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alcohol history readable as a lore graph."
    },
    {
        "slug": "alcohol-history-eras",
        "name": "Alcohol history eras",
        "type": "event",
        "short_description": "Periodization for Alcohol history.",
        "description": "Named eras and phases that help readers track how Alcohol history changes across time."
    },
    {
        "slug": "alcohol-history-works",
        "name": "Alcohol history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alcohol history.",
        "description": "Primary works and adaptations through which most audiences encounter Alcohol history."
    },
    {
        "slug": "alcohol-history-symbols",
        "name": "Alcohol history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alcohol history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alcohol history."
    },
    {
        "slug": "alcohol-history-controversies",
        "name": "Alcohol history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alcohol history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alcohol history argumentative."
    },
    {
        "slug": "alcohol-history-sources",
        "name": "Alcohol history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alcohol history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alcohol history."
    },
    {
        "slug": "alcohol-history-geography",
        "name": "Alcohol history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alcohol history.",
        "description": "Regions, routes, and spatial systems that situate Alcohol history beyond single named places."
    },
    {
        "slug": "alcohol-history-legacy",
        "name": "Alcohol history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alcohol history.",
        "description": "How Alcohol history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "alcohol-history",
        "alcohol-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alcohol-history",
        "alcohol-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alcohol-history",
        "alcohol-history-places",
        "contains",
        "Alcohol history places is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-events",
        "contains",
        "Alcohol history events is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-objects",
        "contains",
        "Alcohol history objects & artifacts is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-factions",
        "contains",
        "Alcohol history factions & groups is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-concepts",
        "contains",
        "Alcohol history concepts is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-eras",
        "contains",
        "Alcohol history eras is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-works",
        "contains",
        "Alcohol history works & media is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-symbols",
        "contains",
        "Alcohol history symbols is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-controversies",
        "contains",
        "Alcohol history controversies is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-sources",
        "contains",
        "Alcohol history sources is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-geography",
        "contains",
        "Alcohol history geography is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ],
    [
        "alcohol-history",
        "alcohol-history-legacy",
        "contains",
        "Alcohol history legacy is a primary trailhead under Alcohol history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
