/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pixar",
        "name": "Pixar",
        "type": "topic",
        "short_description": "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI.",
        "description": "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pixar so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "pixar-figures",
        "name": "Pixar figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pixar.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pixar."
    },
    {
        "slug": "pixar-world",
        "name": "Pixar world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pixar.",
        "description": "Geography, institutions, and periodization that give Pixar its encyclopedia shape."
    },
    {
        "slug": "pixar-places",
        "name": "Pixar places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pixar.",
        "description": "Places, regions, and built sites that give Pixar its map — where events and figures concentrate."
    },
    {
        "slug": "pixar-events",
        "name": "Pixar events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pixar.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pixar timeline."
    },
    {
        "slug": "pixar-objects",
        "name": "Pixar objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pixar.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pixar."
    },
    {
        "slug": "pixar-factions",
        "name": "Pixar factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pixar.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pixar."
    },
    {
        "slug": "pixar-concepts",
        "name": "Pixar concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pixar.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pixar readable as a lore graph."
    },
    {
        "slug": "pixar-eras",
        "name": "Pixar eras",
        "type": "event",
        "short_description": "Periodization for Pixar.",
        "description": "Named eras and phases that help readers track how Pixar changes across time."
    },
    {
        "slug": "pixar-works",
        "name": "Pixar works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pixar.",
        "description": "Primary works and adaptations through which most audiences encounter Pixar."
    },
    {
        "slug": "pixar-symbols",
        "name": "Pixar symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pixar.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pixar."
    },
    {
        "slug": "pixar-controversies",
        "name": "Pixar controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pixar.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pixar argumentative."
    },
    {
        "slug": "pixar-sources",
        "name": "Pixar sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pixar.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pixar."
    },
    {
        "slug": "pixar-geography",
        "name": "Pixar geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pixar.",
        "description": "Regions, routes, and spatial systems that situate Pixar beyond single named places."
    },
    {
        "slug": "pixar-legacy",
        "name": "Pixar legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pixar.",
        "description": "How Pixar continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "pixar",
        "pixar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pixar",
        "pixar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pixar",
        "pixar-places",
        "contains",
        "Pixar places is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-events",
        "contains",
        "Pixar events is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-objects",
        "contains",
        "Pixar objects & artifacts is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-factions",
        "contains",
        "Pixar factions & groups is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-concepts",
        "contains",
        "Pixar concepts is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-eras",
        "contains",
        "Pixar eras is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-works",
        "contains",
        "Pixar works & media is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-symbols",
        "contains",
        "Pixar symbols is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-controversies",
        "contains",
        "Pixar controversies is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-sources",
        "contains",
        "Pixar sources is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-geography",
        "contains",
        "Pixar geography is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-legacy",
        "contains",
        "Pixar legacy is a primary trailhead under Pixar.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
