/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alien-franchise",
        "name": "Alien",
        "type": "topic",
        "short_description": "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre.",
        "description": "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alien so readers can follow long-tail connections across horror."
    },
    {
        "slug": "alien-franchise-figures",
        "name": "Alien figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alien.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alien."
    },
    {
        "slug": "alien-franchise-world",
        "name": "Alien world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alien.",
        "description": "Geography, institutions, and periodization that give Alien its encyclopedia shape."
    },
    {
        "slug": "alien-franchise-places",
        "name": "Alien places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alien.",
        "description": "Places, regions, and built sites that give Alien its map — where events and figures concentrate."
    },
    {
        "slug": "alien-franchise-events",
        "name": "Alien events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alien.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alien timeline."
    },
    {
        "slug": "alien-franchise-objects",
        "name": "Alien objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alien.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alien."
    },
    {
        "slug": "alien-franchise-factions",
        "name": "Alien factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alien.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alien."
    },
    {
        "slug": "alien-franchise-concepts",
        "name": "Alien concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alien.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alien readable as a lore graph."
    },
    {
        "slug": "alien-franchise-eras",
        "name": "Alien eras",
        "type": "event",
        "short_description": "Periodization for Alien.",
        "description": "Named eras and phases that help readers track how Alien changes across time."
    },
    {
        "slug": "alien-franchise-works",
        "name": "Alien works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alien.",
        "description": "Primary works and adaptations through which most audiences encounter Alien."
    },
    {
        "slug": "alien-franchise-symbols",
        "name": "Alien symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alien.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alien."
    },
    {
        "slug": "alien-franchise-controversies",
        "name": "Alien controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alien.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alien argumentative."
    },
    {
        "slug": "alien-franchise-sources",
        "name": "Alien sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alien.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alien."
    },
    {
        "slug": "alien-franchise-geography",
        "name": "Alien geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alien.",
        "description": "Regions, routes, and spatial systems that situate Alien beyond single named places."
    },
    {
        "slug": "alien-franchise-legacy",
        "name": "Alien legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alien.",
        "description": "How Alien continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "alien-franchise",
        "alien-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alien-franchise",
        "alien-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alien-franchise",
        "alien-franchise-places",
        "contains",
        "Alien places is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-events",
        "contains",
        "Alien events is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-objects",
        "contains",
        "Alien objects & artifacts is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-factions",
        "contains",
        "Alien factions & groups is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-concepts",
        "contains",
        "Alien concepts is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-eras",
        "contains",
        "Alien eras is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-works",
        "contains",
        "Alien works & media is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-symbols",
        "contains",
        "Alien symbols is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-controversies",
        "contains",
        "Alien controversies is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-sources",
        "contains",
        "Alien sources is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-geography",
        "contains",
        "Alien geography is a primary trailhead under Alien.",
        0.88,
        0.82
    ],
    [
        "alien-franchise",
        "alien-franchise-legacy",
        "contains",
        "Alien legacy is a primary trailhead under Alien.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
