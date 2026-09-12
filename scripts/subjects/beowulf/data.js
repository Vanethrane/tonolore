/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "beowulf",
        "name": "Beowulf",
        "type": "topic",
        "short_description": "Geats, Grendel, dragons, and the Old English epic that anchors Northern heroic lore.",
        "description": "Geats, Grendel, dragons, and the Old English epic that anchors Northern heroic lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Beowulf so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "beowulf-figures",
        "name": "Beowulf figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Beowulf.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Beowulf."
    },
    {
        "slug": "beowulf-world",
        "name": "Beowulf world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Beowulf.",
        "description": "Geography, institutions, and periodization that give Beowulf its encyclopedia shape."
    },
    {
        "slug": "beowulf-places",
        "name": "Beowulf places",
        "type": "place",
        "short_description": "Locations and geographies that frame Beowulf.",
        "description": "Places, regions, and built sites that give Beowulf its map — where events and figures concentrate."
    },
    {
        "slug": "beowulf-events",
        "name": "Beowulf events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Beowulf.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Beowulf timeline."
    },
    {
        "slug": "beowulf-objects",
        "name": "Beowulf objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Beowulf.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Beowulf."
    },
    {
        "slug": "beowulf-factions",
        "name": "Beowulf factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Beowulf.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Beowulf."
    },
    {
        "slug": "beowulf-concepts",
        "name": "Beowulf concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Beowulf.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Beowulf readable as a lore graph."
    },
    {
        "slug": "beowulf-eras",
        "name": "Beowulf eras",
        "type": "event",
        "short_description": "Periodization for Beowulf.",
        "description": "Named eras and phases that help readers track how Beowulf changes across time."
    },
    {
        "slug": "beowulf-works",
        "name": "Beowulf works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Beowulf.",
        "description": "Primary works and adaptations through which most audiences encounter Beowulf."
    },
    {
        "slug": "beowulf-symbols",
        "name": "Beowulf symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Beowulf.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Beowulf."
    },
    {
        "slug": "beowulf-controversies",
        "name": "Beowulf controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Beowulf.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Beowulf argumentative."
    },
    {
        "slug": "beowulf-sources",
        "name": "Beowulf sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Beowulf.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Beowulf."
    },
    {
        "slug": "beowulf-geography",
        "name": "Beowulf geography",
        "type": "place",
        "short_description": "Broader geographic framing for Beowulf.",
        "description": "Regions, routes, and spatial systems that situate Beowulf beyond single named places."
    },
    {
        "slug": "beowulf-legacy",
        "name": "Beowulf legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Beowulf.",
        "description": "How Beowulf continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "beowulf",
        "beowulf-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "beowulf",
        "beowulf-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "beowulf",
        "beowulf-places",
        "contains",
        "Beowulf places is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-events",
        "contains",
        "Beowulf events is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-objects",
        "contains",
        "Beowulf objects & artifacts is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-factions",
        "contains",
        "Beowulf factions & groups is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-concepts",
        "contains",
        "Beowulf concepts is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-eras",
        "contains",
        "Beowulf eras is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-works",
        "contains",
        "Beowulf works & media is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-symbols",
        "contains",
        "Beowulf symbols is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-controversies",
        "contains",
        "Beowulf controversies is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-sources",
        "contains",
        "Beowulf sources is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-geography",
        "contains",
        "Beowulf geography is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ],
    [
        "beowulf",
        "beowulf-legacy",
        "contains",
        "Beowulf legacy is a primary trailhead under Beowulf.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
