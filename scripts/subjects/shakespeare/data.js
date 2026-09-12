/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shakespeare",
        "name": "Shakespeare",
        "type": "topic",
        "short_description": "Plays, characters, and performance traditions around William Shakespeare's canon.",
        "description": "Plays, characters, and performance traditions around William Shakespeare's canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shakespeare so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "shakespeare-figures",
        "name": "Shakespeare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shakespeare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shakespeare."
    },
    {
        "slug": "shakespeare-world",
        "name": "Shakespeare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shakespeare.",
        "description": "Geography, institutions, and periodization that give Shakespeare its encyclopedia shape."
    },
    {
        "slug": "shakespeare-places",
        "name": "Shakespeare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shakespeare.",
        "description": "Places, regions, and built sites that give Shakespeare its map — where events and figures concentrate."
    },
    {
        "slug": "shakespeare-events",
        "name": "Shakespeare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shakespeare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shakespeare timeline."
    },
    {
        "slug": "shakespeare-objects",
        "name": "Shakespeare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shakespeare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shakespeare."
    },
    {
        "slug": "shakespeare-factions",
        "name": "Shakespeare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shakespeare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shakespeare."
    },
    {
        "slug": "shakespeare-concepts",
        "name": "Shakespeare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shakespeare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shakespeare readable as a lore graph."
    },
    {
        "slug": "shakespeare-eras",
        "name": "Shakespeare eras",
        "type": "event",
        "short_description": "Periodization for Shakespeare.",
        "description": "Named eras and phases that help readers track how Shakespeare changes across time."
    },
    {
        "slug": "shakespeare-works",
        "name": "Shakespeare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shakespeare.",
        "description": "Primary works and adaptations through which most audiences encounter Shakespeare."
    },
    {
        "slug": "shakespeare-symbols",
        "name": "Shakespeare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shakespeare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shakespeare."
    },
    {
        "slug": "shakespeare-controversies",
        "name": "Shakespeare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shakespeare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shakespeare argumentative."
    },
    {
        "slug": "shakespeare-sources",
        "name": "Shakespeare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shakespeare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shakespeare."
    },
    {
        "slug": "shakespeare-geography",
        "name": "Shakespeare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shakespeare.",
        "description": "Regions, routes, and spatial systems that situate Shakespeare beyond single named places."
    },
    {
        "slug": "shakespeare-legacy",
        "name": "Shakespeare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shakespeare.",
        "description": "How Shakespeare continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "shakespeare",
        "shakespeare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shakespeare",
        "shakespeare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shakespeare",
        "shakespeare-places",
        "contains",
        "Shakespeare places is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-events",
        "contains",
        "Shakespeare events is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-objects",
        "contains",
        "Shakespeare objects & artifacts is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-factions",
        "contains",
        "Shakespeare factions & groups is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-concepts",
        "contains",
        "Shakespeare concepts is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-eras",
        "contains",
        "Shakespeare eras is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-works",
        "contains",
        "Shakespeare works & media is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-symbols",
        "contains",
        "Shakespeare symbols is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-controversies",
        "contains",
        "Shakespeare controversies is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-sources",
        "contains",
        "Shakespeare sources is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-geography",
        "contains",
        "Shakespeare geography is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-legacy",
        "contains",
        "Shakespeare legacy is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
