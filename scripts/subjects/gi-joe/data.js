/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gi-joe",
        "name": "G.I. Joe",
        "type": "topic",
        "short_description": "A Real American Hero — factions, file cards, and toy-to-cartoon lore.",
        "description": "A Real American Hero — factions, file cards, and toy-to-cartoon lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to G.I. Joe so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "gi-joe-figures",
        "name": "G.I. Joe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to G.I. Joe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring G.I. Joe."
    },
    {
        "slug": "gi-joe-world",
        "name": "G.I. Joe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame G.I. Joe.",
        "description": "Geography, institutions, and periodization that give G.I. Joe its encyclopedia shape."
    },
    {
        "slug": "gi-joe-places",
        "name": "G.I. Joe places",
        "type": "place",
        "short_description": "Locations and geographies that frame G.I. Joe.",
        "description": "Places, regions, and built sites that give G.I. Joe its map — where events and figures concentrate."
    },
    {
        "slug": "gi-joe-events",
        "name": "G.I. Joe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in G.I. Joe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the G.I. Joe timeline."
    },
    {
        "slug": "gi-joe-objects",
        "name": "G.I. Joe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to G.I. Joe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through G.I. Joe."
    },
    {
        "slug": "gi-joe-factions",
        "name": "G.I. Joe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside G.I. Joe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in G.I. Joe."
    },
    {
        "slug": "gi-joe-concepts",
        "name": "G.I. Joe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize G.I. Joe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make G.I. Joe readable as a lore graph."
    },
    {
        "slug": "gi-joe-eras",
        "name": "G.I. Joe eras",
        "type": "event",
        "short_description": "Periodization for G.I. Joe.",
        "description": "Named eras and phases that help readers track how G.I. Joe changes across time."
    },
    {
        "slug": "gi-joe-works",
        "name": "G.I. Joe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry G.I. Joe.",
        "description": "Primary works and adaptations through which most audiences encounter G.I. Joe."
    },
    {
        "slug": "gi-joe-symbols",
        "name": "G.I. Joe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with G.I. Joe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside G.I. Joe."
    },
    {
        "slug": "gi-joe-controversies",
        "name": "G.I. Joe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in G.I. Joe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep G.I. Joe argumentative."
    },
    {
        "slug": "gi-joe-sources",
        "name": "G.I. Joe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into G.I. Joe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify G.I. Joe."
    },
    {
        "slug": "gi-joe-geography",
        "name": "G.I. Joe geography",
        "type": "place",
        "short_description": "Broader geographic framing for G.I. Joe.",
        "description": "Regions, routes, and spatial systems that situate G.I. Joe beyond single named places."
    },
    {
        "slug": "gi-joe-legacy",
        "name": "G.I. Joe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of G.I. Joe.",
        "description": "How G.I. Joe continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "gi-joe",
        "gi-joe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gi-joe",
        "gi-joe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gi-joe",
        "gi-joe-places",
        "contains",
        "G.I. Joe places is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-events",
        "contains",
        "G.I. Joe events is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-objects",
        "contains",
        "G.I. Joe objects & artifacts is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-factions",
        "contains",
        "G.I. Joe factions & groups is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-concepts",
        "contains",
        "G.I. Joe concepts is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-eras",
        "contains",
        "G.I. Joe eras is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-works",
        "contains",
        "G.I. Joe works & media is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-symbols",
        "contains",
        "G.I. Joe symbols is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-controversies",
        "contains",
        "G.I. Joe controversies is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-sources",
        "contains",
        "G.I. Joe sources is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-geography",
        "contains",
        "G.I. Joe geography is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ],
    [
        "gi-joe",
        "gi-joe-legacy",
        "contains",
        "G.I. Joe legacy is a primary trailhead under G.I. Joe.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
