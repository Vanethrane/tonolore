/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arthurian-legend",
        "name": "Arthurian legend",
        "type": "topic",
        "short_description": "Camelot, the Round Table, and Grail quests across medieval and modern retellings.",
        "description": "Camelot, the Round Table, and Grail quests across medieval and modern retellings. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arthurian legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "arthurian-legend-figures",
        "name": "Arthurian legend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arthurian legend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arthurian legend."
    },
    {
        "slug": "arthurian-legend-world",
        "name": "Arthurian legend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arthurian legend.",
        "description": "Geography, institutions, and periodization that give Arthurian legend its encyclopedia shape."
    },
    {
        "slug": "arthurian-legend-places",
        "name": "Arthurian legend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arthurian legend.",
        "description": "Places, regions, and built sites that give Arthurian legend its map — where events and figures concentrate."
    },
    {
        "slug": "arthurian-legend-events",
        "name": "Arthurian legend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arthurian legend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arthurian legend timeline."
    },
    {
        "slug": "arthurian-legend-objects",
        "name": "Arthurian legend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arthurian legend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arthurian legend."
    },
    {
        "slug": "arthurian-legend-factions",
        "name": "Arthurian legend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arthurian legend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arthurian legend."
    },
    {
        "slug": "arthurian-legend-concepts",
        "name": "Arthurian legend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arthurian legend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arthurian legend readable as a lore graph."
    },
    {
        "slug": "arthurian-legend-eras",
        "name": "Arthurian legend eras",
        "type": "event",
        "short_description": "Periodization for Arthurian legend.",
        "description": "Named eras and phases that help readers track how Arthurian legend changes across time."
    },
    {
        "slug": "arthurian-legend-works",
        "name": "Arthurian legend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arthurian legend.",
        "description": "Primary works and adaptations through which most audiences encounter Arthurian legend."
    },
    {
        "slug": "arthurian-legend-symbols",
        "name": "Arthurian legend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arthurian legend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arthurian legend."
    },
    {
        "slug": "arthurian-legend-controversies",
        "name": "Arthurian legend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arthurian legend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arthurian legend argumentative."
    },
    {
        "slug": "arthurian-legend-sources",
        "name": "Arthurian legend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arthurian legend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arthurian legend."
    },
    {
        "slug": "arthurian-legend-geography",
        "name": "Arthurian legend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arthurian legend.",
        "description": "Regions, routes, and spatial systems that situate Arthurian legend beyond single named places."
    },
    {
        "slug": "arthurian-legend-legacy",
        "name": "Arthurian legend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arthurian legend.",
        "description": "How Arthurian legend continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "arthurian-legend",
        "arthurian-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arthurian-legend",
        "arthurian-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arthurian-legend",
        "arthurian-legend-places",
        "contains",
        "Arthurian legend places is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-events",
        "contains",
        "Arthurian legend events is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-objects",
        "contains",
        "Arthurian legend objects & artifacts is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-factions",
        "contains",
        "Arthurian legend factions & groups is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-concepts",
        "contains",
        "Arthurian legend concepts is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-eras",
        "contains",
        "Arthurian legend eras is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-works",
        "contains",
        "Arthurian legend works & media is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-symbols",
        "contains",
        "Arthurian legend symbols is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-controversies",
        "contains",
        "Arthurian legend controversies is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-sources",
        "contains",
        "Arthurian legend sources is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-geography",
        "contains",
        "Arthurian legend geography is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-legacy",
        "contains",
        "Arthurian legend legacy is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
