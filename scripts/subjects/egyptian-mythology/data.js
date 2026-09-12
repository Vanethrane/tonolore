/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "egyptian-mythology",
        "name": "Egyptian mythology",
        "type": "topic",
        "short_description": "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study.",
        "description": "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study. This Ton-o-Lore subject maps people, places, events, and ideas tied to Egyptian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "egyptian-mythology-figures",
        "name": "Egyptian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Egyptian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-world",
        "name": "Egyptian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Egyptian mythology.",
        "description": "Geography, institutions, and periodization that give Egyptian mythology its encyclopedia shape."
    },
    {
        "slug": "egyptian-mythology-places",
        "name": "Egyptian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Egyptian mythology.",
        "description": "Places, regions, and built sites that give Egyptian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "egyptian-mythology-events",
        "name": "Egyptian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Egyptian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Egyptian mythology timeline."
    },
    {
        "slug": "egyptian-mythology-objects",
        "name": "Egyptian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Egyptian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-factions",
        "name": "Egyptian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Egyptian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-concepts",
        "name": "Egyptian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Egyptian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Egyptian mythology readable as a lore graph."
    },
    {
        "slug": "egyptian-mythology-eras",
        "name": "Egyptian mythology eras",
        "type": "event",
        "short_description": "Periodization for Egyptian mythology.",
        "description": "Named eras and phases that help readers track how Egyptian mythology changes across time."
    },
    {
        "slug": "egyptian-mythology-works",
        "name": "Egyptian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Egyptian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-symbols",
        "name": "Egyptian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Egyptian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-controversies",
        "name": "Egyptian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Egyptian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Egyptian mythology argumentative."
    },
    {
        "slug": "egyptian-mythology-sources",
        "name": "Egyptian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Egyptian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Egyptian mythology."
    },
    {
        "slug": "egyptian-mythology-geography",
        "name": "Egyptian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Egyptian mythology.",
        "description": "Regions, routes, and spatial systems that situate Egyptian mythology beyond single named places."
    },
    {
        "slug": "egyptian-mythology-legacy",
        "name": "Egyptian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Egyptian mythology.",
        "description": "How Egyptian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "egyptian-mythology",
        "egyptian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-places",
        "contains",
        "Egyptian mythology places is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-events",
        "contains",
        "Egyptian mythology events is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-objects",
        "contains",
        "Egyptian mythology objects & artifacts is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-factions",
        "contains",
        "Egyptian mythology factions & groups is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-concepts",
        "contains",
        "Egyptian mythology concepts is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-eras",
        "contains",
        "Egyptian mythology eras is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-works",
        "contains",
        "Egyptian mythology works & media is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-symbols",
        "contains",
        "Egyptian mythology symbols is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-controversies",
        "contains",
        "Egyptian mythology controversies is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-sources",
        "contains",
        "Egyptian mythology sources is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-geography",
        "contains",
        "Egyptian mythology geography is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-legacy",
        "contains",
        "Egyptian mythology legacy is a primary trailhead under Egyptian mythology.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
