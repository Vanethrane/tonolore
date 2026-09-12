/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "coffee",
        "name": "Coffee",
        "type": "topic",
        "short_description": "Beans, brewing traditions, and café cultures from origin to specialty.",
        "description": "Beans, brewing traditions, and café cultures from origin to specialty. This Ton-o-Lore subject maps people, places, events, and ideas tied to Coffee so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "coffee-figures",
        "name": "Coffee figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Coffee.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Coffee."
    },
    {
        "slug": "coffee-world",
        "name": "Coffee world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Coffee.",
        "description": "Geography, institutions, and periodization that give Coffee its encyclopedia shape."
    },
    {
        "slug": "coffee-places",
        "name": "Coffee places",
        "type": "place",
        "short_description": "Locations and geographies that frame Coffee.",
        "description": "Places, regions, and built sites that give Coffee its map — where events and figures concentrate."
    },
    {
        "slug": "coffee-events",
        "name": "Coffee events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Coffee.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Coffee timeline."
    },
    {
        "slug": "coffee-objects",
        "name": "Coffee objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Coffee.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Coffee."
    },
    {
        "slug": "coffee-factions",
        "name": "Coffee factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Coffee.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Coffee."
    },
    {
        "slug": "coffee-concepts",
        "name": "Coffee concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Coffee.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Coffee readable as a lore graph."
    },
    {
        "slug": "coffee-eras",
        "name": "Coffee eras",
        "type": "event",
        "short_description": "Periodization for Coffee.",
        "description": "Named eras and phases that help readers track how Coffee changes across time."
    },
    {
        "slug": "coffee-works",
        "name": "Coffee works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Coffee.",
        "description": "Primary works and adaptations through which most audiences encounter Coffee."
    },
    {
        "slug": "coffee-symbols",
        "name": "Coffee symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Coffee.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Coffee."
    },
    {
        "slug": "coffee-controversies",
        "name": "Coffee controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Coffee.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Coffee argumentative."
    },
    {
        "slug": "coffee-sources",
        "name": "Coffee sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Coffee.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Coffee."
    },
    {
        "slug": "coffee-geography",
        "name": "Coffee geography",
        "type": "place",
        "short_description": "Broader geographic framing for Coffee.",
        "description": "Regions, routes, and spatial systems that situate Coffee beyond single named places."
    },
    {
        "slug": "coffee-legacy",
        "name": "Coffee legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Coffee.",
        "description": "How Coffee continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "coffee",
        "coffee-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "coffee",
        "coffee-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "coffee",
        "coffee-places",
        "contains",
        "Coffee places is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-events",
        "contains",
        "Coffee events is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-objects",
        "contains",
        "Coffee objects & artifacts is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-factions",
        "contains",
        "Coffee factions & groups is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-concepts",
        "contains",
        "Coffee concepts is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-eras",
        "contains",
        "Coffee eras is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-works",
        "contains",
        "Coffee works & media is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-symbols",
        "contains",
        "Coffee symbols is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-controversies",
        "contains",
        "Coffee controversies is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-sources",
        "contains",
        "Coffee sources is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-geography",
        "contains",
        "Coffee geography is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-legacy",
        "contains",
        "Coffee legacy is a primary trailhead under Coffee.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
