/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "celtic-mythology",
        "name": "Celtic mythology",
        "type": "topic",
        "short_description": "Tuatha Dé, Otherworld geography, and Insular cycles that feed modern fantasy language.",
        "description": "Tuatha Dé, Otherworld geography, and Insular cycles that feed modern fantasy language. This Ton-o-Lore subject maps people, places, events, and ideas tied to Celtic mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "celtic-mythology-figures",
        "name": "Celtic mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Celtic mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Celtic mythology."
    },
    {
        "slug": "celtic-mythology-world",
        "name": "Celtic mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Celtic mythology.",
        "description": "Geography, institutions, and periodization that give Celtic mythology its encyclopedia shape."
    },
    {
        "slug": "celtic-mythology-places",
        "name": "Celtic mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Celtic mythology.",
        "description": "Places, regions, and built sites that give Celtic mythology its map — where events and figures concentrate."
    },
    {
        "slug": "celtic-mythology-events",
        "name": "Celtic mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Celtic mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Celtic mythology timeline."
    },
    {
        "slug": "celtic-mythology-objects",
        "name": "Celtic mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Celtic mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Celtic mythology."
    },
    {
        "slug": "celtic-mythology-factions",
        "name": "Celtic mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Celtic mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Celtic mythology."
    },
    {
        "slug": "celtic-mythology-concepts",
        "name": "Celtic mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Celtic mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Celtic mythology readable as a lore graph."
    },
    {
        "slug": "celtic-mythology-eras",
        "name": "Celtic mythology eras",
        "type": "event",
        "short_description": "Periodization for Celtic mythology.",
        "description": "Named eras and phases that help readers track how Celtic mythology changes across time."
    },
    {
        "slug": "celtic-mythology-works",
        "name": "Celtic mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Celtic mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Celtic mythology."
    },
    {
        "slug": "celtic-mythology-symbols",
        "name": "Celtic mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Celtic mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Celtic mythology."
    },
    {
        "slug": "celtic-mythology-controversies",
        "name": "Celtic mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Celtic mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Celtic mythology argumentative."
    },
    {
        "slug": "celtic-mythology-sources",
        "name": "Celtic mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Celtic mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Celtic mythology."
    },
    {
        "slug": "celtic-mythology-geography",
        "name": "Celtic mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Celtic mythology.",
        "description": "Regions, routes, and spatial systems that situate Celtic mythology beyond single named places."
    },
    {
        "slug": "celtic-mythology-legacy",
        "name": "Celtic mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Celtic mythology.",
        "description": "How Celtic mythology continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "celtic-mythology",
        "celtic-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "celtic-mythology",
        "celtic-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "celtic-mythology",
        "celtic-mythology-places",
        "contains",
        "Celtic mythology places is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-events",
        "contains",
        "Celtic mythology events is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-objects",
        "contains",
        "Celtic mythology objects & artifacts is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-factions",
        "contains",
        "Celtic mythology factions & groups is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-concepts",
        "contains",
        "Celtic mythology concepts is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-eras",
        "contains",
        "Celtic mythology eras is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-works",
        "contains",
        "Celtic mythology works & media is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-symbols",
        "contains",
        "Celtic mythology symbols is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-controversies",
        "contains",
        "Celtic mythology controversies is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-sources",
        "contains",
        "Celtic mythology sources is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-geography",
        "contains",
        "Celtic mythology geography is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-mythology",
        "celtic-mythology-legacy",
        "contains",
        "Celtic mythology legacy is a primary trailhead under Celtic mythology.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
