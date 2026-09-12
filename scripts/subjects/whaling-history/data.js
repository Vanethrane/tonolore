/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "whaling-history",
        "name": "Whaling history",
        "type": "topic",
        "short_description": "Whaleships, ports, crews, species, and the maritime industry that shaped coastal economies and myth.",
        "description": "Whaleships, ports, crews, species, and the maritime industry that shaped coastal economies and myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Whaling history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "whaling-history-figures",
        "name": "Whaling history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Whaling history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Whaling history."
    },
    {
        "slug": "whaling-history-world",
        "name": "Whaling history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Whaling history.",
        "description": "Geography, institutions, and periodization that give Whaling history its encyclopedia shape."
    },
    {
        "slug": "whaling-history-places",
        "name": "Whaling history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Whaling history.",
        "description": "Places, regions, and built sites that give Whaling history its map — where events and figures concentrate."
    },
    {
        "slug": "whaling-history-events",
        "name": "Whaling history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Whaling history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Whaling history timeline."
    },
    {
        "slug": "whaling-history-objects",
        "name": "Whaling history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Whaling history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Whaling history."
    },
    {
        "slug": "whaling-history-factions",
        "name": "Whaling history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Whaling history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Whaling history."
    },
    {
        "slug": "whaling-history-concepts",
        "name": "Whaling history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Whaling history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Whaling history readable as a lore graph."
    },
    {
        "slug": "whaling-history-eras",
        "name": "Whaling history eras",
        "type": "event",
        "short_description": "Periodization for Whaling history.",
        "description": "Named eras and phases that help readers track how Whaling history changes across time."
    },
    {
        "slug": "whaling-history-works",
        "name": "Whaling history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Whaling history.",
        "description": "Primary works and adaptations through which most audiences encounter Whaling history."
    },
    {
        "slug": "whaling-history-symbols",
        "name": "Whaling history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Whaling history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Whaling history."
    },
    {
        "slug": "whaling-history-controversies",
        "name": "Whaling history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Whaling history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Whaling history argumentative."
    },
    {
        "slug": "whaling-history-sources",
        "name": "Whaling history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Whaling history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Whaling history."
    },
    {
        "slug": "whaling-history-geography",
        "name": "Whaling history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Whaling history.",
        "description": "Regions, routes, and spatial systems that situate Whaling history beyond single named places."
    },
    {
        "slug": "whaling-history-legacy",
        "name": "Whaling history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Whaling history.",
        "description": "How Whaling history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "whaling-history",
        "whaling-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "whaling-history",
        "whaling-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "whaling-history",
        "whaling-history-places",
        "contains",
        "Whaling history places is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-events",
        "contains",
        "Whaling history events is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-objects",
        "contains",
        "Whaling history objects & artifacts is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-factions",
        "contains",
        "Whaling history factions & groups is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-concepts",
        "contains",
        "Whaling history concepts is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-eras",
        "contains",
        "Whaling history eras is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-works",
        "contains",
        "Whaling history works & media is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-symbols",
        "contains",
        "Whaling history symbols is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-controversies",
        "contains",
        "Whaling history controversies is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-sources",
        "contains",
        "Whaling history sources is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-geography",
        "contains",
        "Whaling history geography is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ],
    [
        "whaling-history",
        "whaling-history-legacy",
        "contains",
        "Whaling history legacy is a primary trailhead under Whaling history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
