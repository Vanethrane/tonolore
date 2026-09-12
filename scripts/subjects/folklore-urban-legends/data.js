/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "folklore-urban-legends",
        "name": "Folklore & urban legends",
        "type": "topic",
        "short_description": "Regional monsters, cautionary tales, origin variants, and cultural connections across oral tradition.",
        "description": "Regional monsters, cautionary tales, origin variants, and cultural connections across oral tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Folklore & urban legends so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "folklore-urban-legends-figures",
        "name": "Folklore & urban legends figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Folklore & urban legends.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-world",
        "name": "Folklore & urban legends world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Folklore & urban legends.",
        "description": "Geography, institutions, and periodization that give Folklore & urban legends its encyclopedia shape."
    },
    {
        "slug": "folklore-urban-legends-places",
        "name": "Folklore & urban legends places",
        "type": "place",
        "short_description": "Locations and geographies that frame Folklore & urban legends.",
        "description": "Places, regions, and built sites that give Folklore & urban legends its map — where events and figures concentrate."
    },
    {
        "slug": "folklore-urban-legends-events",
        "name": "Folklore & urban legends events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Folklore & urban legends.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Folklore & urban legends timeline."
    },
    {
        "slug": "folklore-urban-legends-objects",
        "name": "Folklore & urban legends objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Folklore & urban legends.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-factions",
        "name": "Folklore & urban legends factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Folklore & urban legends.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-concepts",
        "name": "Folklore & urban legends concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Folklore & urban legends.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Folklore & urban legends readable as a lore graph."
    },
    {
        "slug": "folklore-urban-legends-eras",
        "name": "Folklore & urban legends eras",
        "type": "event",
        "short_description": "Periodization for Folklore & urban legends.",
        "description": "Named eras and phases that help readers track how Folklore & urban legends changes across time."
    },
    {
        "slug": "folklore-urban-legends-works",
        "name": "Folklore & urban legends works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Folklore & urban legends.",
        "description": "Primary works and adaptations through which most audiences encounter Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-symbols",
        "name": "Folklore & urban legends symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Folklore & urban legends.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-controversies",
        "name": "Folklore & urban legends controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Folklore & urban legends.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Folklore & urban legends argumentative."
    },
    {
        "slug": "folklore-urban-legends-sources",
        "name": "Folklore & urban legends sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Folklore & urban legends.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Folklore & urban legends."
    },
    {
        "slug": "folklore-urban-legends-geography",
        "name": "Folklore & urban legends geography",
        "type": "place",
        "short_description": "Broader geographic framing for Folklore & urban legends.",
        "description": "Regions, routes, and spatial systems that situate Folklore & urban legends beyond single named places."
    },
    {
        "slug": "folklore-urban-legends-legacy",
        "name": "Folklore & urban legends legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Folklore & urban legends.",
        "description": "How Folklore & urban legends continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "folklore-urban-legends",
        "folklore-urban-legends-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-places",
        "contains",
        "Folklore & urban legends places is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-events",
        "contains",
        "Folklore & urban legends events is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-objects",
        "contains",
        "Folklore & urban legends objects & artifacts is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-factions",
        "contains",
        "Folklore & urban legends factions & groups is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-concepts",
        "contains",
        "Folklore & urban legends concepts is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-eras",
        "contains",
        "Folklore & urban legends eras is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-works",
        "contains",
        "Folklore & urban legends works & media is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-symbols",
        "contains",
        "Folklore & urban legends symbols is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-controversies",
        "contains",
        "Folklore & urban legends controversies is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-sources",
        "contains",
        "Folklore & urban legends sources is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-geography",
        "contains",
        "Folklore & urban legends geography is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ],
    [
        "folklore-urban-legends",
        "folklore-urban-legends-legacy",
        "contains",
        "Folklore & urban legends legacy is a primary trailhead under Folklore & urban legends.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
