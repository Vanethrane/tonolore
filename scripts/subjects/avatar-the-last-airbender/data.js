/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "avatar-the-last-airbender",
        "name": "Avatar: The Last Airbender",
        "type": "topic",
        "short_description": "Bending nations, Avatars, and a coming-of-age war story that became a modern classic.",
        "description": "Bending nations, Avatars, and a coming-of-age war story that became a modern classic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Avatar: The Last Airbender so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "avatar-the-last-airbender-figures",
        "name": "Avatar: The Last Airbender figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Avatar: The Last Airbender.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-world",
        "name": "Avatar: The Last Airbender world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Avatar: The Last Airbender.",
        "description": "Geography, institutions, and periodization that give Avatar: The Last Airbender its encyclopedia shape."
    },
    {
        "slug": "avatar-the-last-airbender-places",
        "name": "Avatar: The Last Airbender places",
        "type": "place",
        "short_description": "Locations and geographies that frame Avatar: The Last Airbender.",
        "description": "Places, regions, and built sites that give Avatar: The Last Airbender its map — where events and figures concentrate."
    },
    {
        "slug": "avatar-the-last-airbender-events",
        "name": "Avatar: The Last Airbender events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Avatar: The Last Airbender.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Avatar: The Last Airbender timeline."
    },
    {
        "slug": "avatar-the-last-airbender-objects",
        "name": "Avatar: The Last Airbender objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Avatar: The Last Airbender.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-factions",
        "name": "Avatar: The Last Airbender factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Avatar: The Last Airbender.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-concepts",
        "name": "Avatar: The Last Airbender concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Avatar: The Last Airbender.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Avatar: The Last Airbender readable as a lore graph."
    },
    {
        "slug": "avatar-the-last-airbender-eras",
        "name": "Avatar: The Last Airbender eras",
        "type": "event",
        "short_description": "Periodization for Avatar: The Last Airbender.",
        "description": "Named eras and phases that help readers track how Avatar: The Last Airbender changes across time."
    },
    {
        "slug": "avatar-the-last-airbender-works",
        "name": "Avatar: The Last Airbender works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Avatar: The Last Airbender.",
        "description": "Primary works and adaptations through which most audiences encounter Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-symbols",
        "name": "Avatar: The Last Airbender symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Avatar: The Last Airbender.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-controversies",
        "name": "Avatar: The Last Airbender controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Avatar: The Last Airbender.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Avatar: The Last Airbender argumentative."
    },
    {
        "slug": "avatar-the-last-airbender-sources",
        "name": "Avatar: The Last Airbender sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Avatar: The Last Airbender.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Avatar: The Last Airbender."
    },
    {
        "slug": "avatar-the-last-airbender-geography",
        "name": "Avatar: The Last Airbender geography",
        "type": "place",
        "short_description": "Broader geographic framing for Avatar: The Last Airbender.",
        "description": "Regions, routes, and spatial systems that situate Avatar: The Last Airbender beyond single named places."
    },
    {
        "slug": "avatar-the-last-airbender-legacy",
        "name": "Avatar: The Last Airbender legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Avatar: The Last Airbender.",
        "description": "How Avatar: The Last Airbender continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-places",
        "contains",
        "Avatar: The Last Airbender places is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-events",
        "contains",
        "Avatar: The Last Airbender events is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-objects",
        "contains",
        "Avatar: The Last Airbender objects & artifacts is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-factions",
        "contains",
        "Avatar: The Last Airbender factions & groups is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-concepts",
        "contains",
        "Avatar: The Last Airbender concepts is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-eras",
        "contains",
        "Avatar: The Last Airbender eras is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-works",
        "contains",
        "Avatar: The Last Airbender works & media is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-symbols",
        "contains",
        "Avatar: The Last Airbender symbols is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-controversies",
        "contains",
        "Avatar: The Last Airbender controversies is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-sources",
        "contains",
        "Avatar: The Last Airbender sources is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-geography",
        "contains",
        "Avatar: The Last Airbender geography is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-legacy",
        "contains",
        "Avatar: The Last Airbender legacy is a primary trailhead under Avatar: The Last Airbender.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
