/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wingspan",
        "name": "Wingspan",
        "type": "topic",
        "short_description": "Engine-building bird sanctuary — habitats, food chains, and naturalist card lore.",
        "description": "Engine-building bird sanctuary — habitats, food chains, and naturalist card lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Wingspan so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "wingspan-rules",
        "name": "Wingspan rules & formats",
        "type": "topic",
        "short_description": "How Wingspan is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Wingspan."
    },
    {
        "slug": "wingspan-setting",
        "name": "Wingspan setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Wingspan.",
        "description": "The narrative frame around Wingspan — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "wingspan-figures",
        "name": "Wingspan figures",
        "type": "topic",
        "short_description": "People and named forces central to Wingspan.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Wingspan."
    },
    {
        "slug": "wingspan-places",
        "name": "Wingspan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wingspan.",
        "description": "Places, regions, and built sites that give Wingspan its map — where events and figures concentrate."
    },
    {
        "slug": "wingspan-events",
        "name": "Wingspan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wingspan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wingspan timeline."
    },
    {
        "slug": "wingspan-objects",
        "name": "Wingspan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wingspan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wingspan."
    },
    {
        "slug": "wingspan-factions",
        "name": "Wingspan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wingspan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wingspan."
    },
    {
        "slug": "wingspan-concepts",
        "name": "Wingspan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wingspan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wingspan readable as a lore graph."
    },
    {
        "slug": "wingspan-eras",
        "name": "Wingspan eras",
        "type": "event",
        "short_description": "Periodization for Wingspan.",
        "description": "Named eras and phases that help readers track how Wingspan changes across time."
    },
    {
        "slug": "wingspan-works",
        "name": "Wingspan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wingspan.",
        "description": "Primary works and adaptations through which most audiences encounter Wingspan."
    },
    {
        "slug": "wingspan-symbols",
        "name": "Wingspan symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wingspan.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wingspan."
    },
    {
        "slug": "wingspan-controversies",
        "name": "Wingspan controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wingspan.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wingspan argumentative."
    },
    {
        "slug": "wingspan-sources",
        "name": "Wingspan sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wingspan.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wingspan."
    },
    {
        "slug": "wingspan-geography",
        "name": "Wingspan geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wingspan.",
        "description": "Regions, routes, and spatial systems that situate Wingspan beyond single named places."
    }
];

const relationships = [
    [
        "wingspan",
        "wingspan-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "wingspan",
        "wingspan-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "wingspan",
        "wingspan-figures",
        "contains",
        "Wingspan figures is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-places",
        "contains",
        "Wingspan places is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-events",
        "contains",
        "Wingspan events is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-objects",
        "contains",
        "Wingspan objects & artifacts is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-factions",
        "contains",
        "Wingspan factions & groups is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-concepts",
        "contains",
        "Wingspan concepts is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-eras",
        "contains",
        "Wingspan eras is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-works",
        "contains",
        "Wingspan works & media is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-symbols",
        "contains",
        "Wingspan symbols is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-controversies",
        "contains",
        "Wingspan controversies is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-sources",
        "contains",
        "Wingspan sources is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ],
    [
        "wingspan",
        "wingspan-geography",
        "contains",
        "Wingspan geography is a primary trailhead under Wingspan.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
