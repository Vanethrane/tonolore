/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rick-and-morty",
        "name": "Rick and Morty",
        "type": "topic",
        "short_description": "Multiverse family chaos, sci-fi parody arcs, and dense continuity jokes across seasons.",
        "description": "Multiverse family chaos, sci-fi parody arcs, and dense continuity jokes across seasons. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rick and Morty so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "rick-and-morty-figures",
        "name": "Rick and Morty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rick and Morty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rick and Morty."
    },
    {
        "slug": "rick-and-morty-world",
        "name": "Rick and Morty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rick and Morty.",
        "description": "Geography, institutions, and periodization that give Rick and Morty its encyclopedia shape."
    },
    {
        "slug": "rick-and-morty-places",
        "name": "Rick and Morty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rick and Morty.",
        "description": "Places, regions, and built sites that give Rick and Morty its map — where events and figures concentrate."
    },
    {
        "slug": "rick-and-morty-events",
        "name": "Rick and Morty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rick and Morty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rick and Morty timeline."
    },
    {
        "slug": "rick-and-morty-objects",
        "name": "Rick and Morty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rick and Morty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rick and Morty."
    },
    {
        "slug": "rick-and-morty-factions",
        "name": "Rick and Morty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rick and Morty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rick and Morty."
    },
    {
        "slug": "rick-and-morty-concepts",
        "name": "Rick and Morty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rick and Morty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rick and Morty readable as a lore graph."
    },
    {
        "slug": "rick-and-morty-eras",
        "name": "Rick and Morty eras",
        "type": "event",
        "short_description": "Periodization for Rick and Morty.",
        "description": "Named eras and phases that help readers track how Rick and Morty changes across time."
    },
    {
        "slug": "rick-and-morty-works",
        "name": "Rick and Morty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rick and Morty.",
        "description": "Primary works and adaptations through which most audiences encounter Rick and Morty."
    },
    {
        "slug": "rick-and-morty-symbols",
        "name": "Rick and Morty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rick and Morty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rick and Morty."
    },
    {
        "slug": "rick-and-morty-controversies",
        "name": "Rick and Morty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rick and Morty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rick and Morty argumentative."
    },
    {
        "slug": "rick-and-morty-sources",
        "name": "Rick and Morty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rick and Morty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rick and Morty."
    },
    {
        "slug": "rick-and-morty-geography",
        "name": "Rick and Morty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rick and Morty.",
        "description": "Regions, routes, and spatial systems that situate Rick and Morty beyond single named places."
    },
    {
        "slug": "rick-and-morty-legacy",
        "name": "Rick and Morty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rick and Morty.",
        "description": "How Rick and Morty continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "rick-and-morty",
        "rick-and-morty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rick-and-morty",
        "rick-and-morty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rick-and-morty",
        "rick-and-morty-places",
        "contains",
        "Rick and Morty places is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-events",
        "contains",
        "Rick and Morty events is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-objects",
        "contains",
        "Rick and Morty objects & artifacts is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-factions",
        "contains",
        "Rick and Morty factions & groups is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-concepts",
        "contains",
        "Rick and Morty concepts is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-eras",
        "contains",
        "Rick and Morty eras is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-works",
        "contains",
        "Rick and Morty works & media is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-symbols",
        "contains",
        "Rick and Morty symbols is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-controversies",
        "contains",
        "Rick and Morty controversies is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-sources",
        "contains",
        "Rick and Morty sources is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-geography",
        "contains",
        "Rick and Morty geography is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ],
    [
        "rick-and-morty",
        "rick-and-morty-legacy",
        "contains",
        "Rick and Morty legacy is a primary trailhead under Rick and Morty.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
