/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "welcome-to-night-vale",
        "name": "Welcome to Night Vale",
        "type": "topic",
        "short_description": "A desert community radio fiction of conspiracies, angels, and small-town weird.",
        "description": "A desert community radio fiction of conspiracies, angels, and small-town weird. This Ton-o-Lore subject maps people, places, events, and ideas tied to Welcome to Night Vale so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "welcome-to-night-vale-figures",
        "name": "Welcome to Night Vale figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Welcome to Night Vale.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-world",
        "name": "Welcome to Night Vale world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Welcome to Night Vale.",
        "description": "Geography, institutions, and periodization that give Welcome to Night Vale its encyclopedia shape."
    },
    {
        "slug": "welcome-to-night-vale-places",
        "name": "Welcome to Night Vale places",
        "type": "place",
        "short_description": "Locations and geographies that frame Welcome to Night Vale.",
        "description": "Places, regions, and built sites that give Welcome to Night Vale its map — where events and figures concentrate."
    },
    {
        "slug": "welcome-to-night-vale-events",
        "name": "Welcome to Night Vale events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Welcome to Night Vale.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Welcome to Night Vale timeline."
    },
    {
        "slug": "welcome-to-night-vale-objects",
        "name": "Welcome to Night Vale objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Welcome to Night Vale.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-factions",
        "name": "Welcome to Night Vale factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Welcome to Night Vale.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-concepts",
        "name": "Welcome to Night Vale concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Welcome to Night Vale.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Welcome to Night Vale readable as a lore graph."
    },
    {
        "slug": "welcome-to-night-vale-eras",
        "name": "Welcome to Night Vale eras",
        "type": "event",
        "short_description": "Periodization for Welcome to Night Vale.",
        "description": "Named eras and phases that help readers track how Welcome to Night Vale changes across time."
    },
    {
        "slug": "welcome-to-night-vale-works",
        "name": "Welcome to Night Vale works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Welcome to Night Vale.",
        "description": "Primary works and adaptations through which most audiences encounter Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-symbols",
        "name": "Welcome to Night Vale symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Welcome to Night Vale.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-controversies",
        "name": "Welcome to Night Vale controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Welcome to Night Vale.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Welcome to Night Vale argumentative."
    },
    {
        "slug": "welcome-to-night-vale-sources",
        "name": "Welcome to Night Vale sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Welcome to Night Vale.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Welcome to Night Vale."
    },
    {
        "slug": "welcome-to-night-vale-geography",
        "name": "Welcome to Night Vale geography",
        "type": "place",
        "short_description": "Broader geographic framing for Welcome to Night Vale.",
        "description": "Regions, routes, and spatial systems that situate Welcome to Night Vale beyond single named places."
    },
    {
        "slug": "welcome-to-night-vale-legacy",
        "name": "Welcome to Night Vale legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Welcome to Night Vale.",
        "description": "How Welcome to Night Vale continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-places",
        "contains",
        "Welcome to Night Vale places is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-events",
        "contains",
        "Welcome to Night Vale events is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-objects",
        "contains",
        "Welcome to Night Vale objects & artifacts is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-factions",
        "contains",
        "Welcome to Night Vale factions & groups is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-concepts",
        "contains",
        "Welcome to Night Vale concepts is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-eras",
        "contains",
        "Welcome to Night Vale eras is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-works",
        "contains",
        "Welcome to Night Vale works & media is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-symbols",
        "contains",
        "Welcome to Night Vale symbols is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-controversies",
        "contains",
        "Welcome to Night Vale controversies is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-sources",
        "contains",
        "Welcome to Night Vale sources is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-geography",
        "contains",
        "Welcome to Night Vale geography is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ],
    [
        "welcome-to-night-vale",
        "welcome-to-night-vale-legacy",
        "contains",
        "Welcome to Night Vale legacy is a primary trailhead under Welcome to Night Vale.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
