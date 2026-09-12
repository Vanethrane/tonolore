/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "greek-tragedy",
        "name": "Greek tragedy",
        "type": "topic",
        "short_description": "Aeschylus, Sophocles, Euripides — choruses, fate, and the civic theater of Athens.",
        "description": "Aeschylus, Sophocles, Euripides — choruses, fate, and the civic theater of Athens. This Ton-o-Lore subject maps people, places, events, and ideas tied to Greek tragedy so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "greek-tragedy-figures",
        "name": "Greek tragedy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Greek tragedy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Greek tragedy."
    },
    {
        "slug": "greek-tragedy-world",
        "name": "Greek tragedy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Greek tragedy.",
        "description": "Geography, institutions, and periodization that give Greek tragedy its encyclopedia shape."
    },
    {
        "slug": "greek-tragedy-places",
        "name": "Greek tragedy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Greek tragedy.",
        "description": "Places, regions, and built sites that give Greek tragedy its map — where events and figures concentrate."
    },
    {
        "slug": "greek-tragedy-events",
        "name": "Greek tragedy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Greek tragedy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Greek tragedy timeline."
    },
    {
        "slug": "greek-tragedy-objects",
        "name": "Greek tragedy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Greek tragedy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Greek tragedy."
    },
    {
        "slug": "greek-tragedy-factions",
        "name": "Greek tragedy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Greek tragedy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Greek tragedy."
    },
    {
        "slug": "greek-tragedy-concepts",
        "name": "Greek tragedy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Greek tragedy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Greek tragedy readable as a lore graph."
    },
    {
        "slug": "greek-tragedy-eras",
        "name": "Greek tragedy eras",
        "type": "event",
        "short_description": "Periodization for Greek tragedy.",
        "description": "Named eras and phases that help readers track how Greek tragedy changes across time."
    },
    {
        "slug": "greek-tragedy-works",
        "name": "Greek tragedy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Greek tragedy.",
        "description": "Primary works and adaptations through which most audiences encounter Greek tragedy."
    },
    {
        "slug": "greek-tragedy-symbols",
        "name": "Greek tragedy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Greek tragedy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Greek tragedy."
    },
    {
        "slug": "greek-tragedy-controversies",
        "name": "Greek tragedy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Greek tragedy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Greek tragedy argumentative."
    },
    {
        "slug": "greek-tragedy-sources",
        "name": "Greek tragedy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Greek tragedy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Greek tragedy."
    },
    {
        "slug": "greek-tragedy-geography",
        "name": "Greek tragedy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Greek tragedy.",
        "description": "Regions, routes, and spatial systems that situate Greek tragedy beyond single named places."
    },
    {
        "slug": "greek-tragedy-legacy",
        "name": "Greek tragedy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Greek tragedy.",
        "description": "How Greek tragedy continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "greek-tragedy",
        "greek-tragedy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "greek-tragedy",
        "greek-tragedy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "greek-tragedy",
        "greek-tragedy-places",
        "contains",
        "Greek tragedy places is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-events",
        "contains",
        "Greek tragedy events is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-objects",
        "contains",
        "Greek tragedy objects & artifacts is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-factions",
        "contains",
        "Greek tragedy factions & groups is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-concepts",
        "contains",
        "Greek tragedy concepts is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-eras",
        "contains",
        "Greek tragedy eras is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-works",
        "contains",
        "Greek tragedy works & media is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-symbols",
        "contains",
        "Greek tragedy symbols is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-controversies",
        "contains",
        "Greek tragedy controversies is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-sources",
        "contains",
        "Greek tragedy sources is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-geography",
        "contains",
        "Greek tragedy geography is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ],
    [
        "greek-tragedy",
        "greek-tragedy-legacy",
        "contains",
        "Greek tragedy legacy is a primary trailhead under Greek tragedy.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
