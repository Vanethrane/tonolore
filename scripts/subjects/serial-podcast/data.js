/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "serial-podcast",
        "name": "Serial",
        "type": "topic",
        "short_description": "The investigative podcast that remapped true-crime audio storytelling.",
        "description": "The investigative podcast that remapped true-crime audio storytelling. This Ton-o-Lore subject maps people, places, events, and ideas tied to Serial so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "serial-podcast-figures",
        "name": "Serial figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Serial.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Serial."
    },
    {
        "slug": "serial-podcast-world",
        "name": "Serial world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Serial.",
        "description": "Geography, institutions, and periodization that give Serial its encyclopedia shape."
    },
    {
        "slug": "serial-podcast-places",
        "name": "Serial places",
        "type": "place",
        "short_description": "Locations and geographies that frame Serial.",
        "description": "Places, regions, and built sites that give Serial its map — where events and figures concentrate."
    },
    {
        "slug": "serial-podcast-events",
        "name": "Serial events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Serial.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Serial timeline."
    },
    {
        "slug": "serial-podcast-objects",
        "name": "Serial objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Serial.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Serial."
    },
    {
        "slug": "serial-podcast-factions",
        "name": "Serial factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Serial.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Serial."
    },
    {
        "slug": "serial-podcast-concepts",
        "name": "Serial concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Serial.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Serial readable as a lore graph."
    },
    {
        "slug": "serial-podcast-eras",
        "name": "Serial eras",
        "type": "event",
        "short_description": "Periodization for Serial.",
        "description": "Named eras and phases that help readers track how Serial changes across time."
    },
    {
        "slug": "serial-podcast-works",
        "name": "Serial works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Serial.",
        "description": "Primary works and adaptations through which most audiences encounter Serial."
    },
    {
        "slug": "serial-podcast-symbols",
        "name": "Serial symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Serial.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Serial."
    },
    {
        "slug": "serial-podcast-controversies",
        "name": "Serial controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Serial.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Serial argumentative."
    },
    {
        "slug": "serial-podcast-sources",
        "name": "Serial sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Serial.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Serial."
    },
    {
        "slug": "serial-podcast-geography",
        "name": "Serial geography",
        "type": "place",
        "short_description": "Broader geographic framing for Serial.",
        "description": "Regions, routes, and spatial systems that situate Serial beyond single named places."
    },
    {
        "slug": "serial-podcast-legacy",
        "name": "Serial legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Serial.",
        "description": "How Serial continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "serial-podcast",
        "serial-podcast-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "serial-podcast",
        "serial-podcast-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "serial-podcast",
        "serial-podcast-places",
        "contains",
        "Serial places is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-events",
        "contains",
        "Serial events is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-objects",
        "contains",
        "Serial objects & artifacts is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-factions",
        "contains",
        "Serial factions & groups is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-concepts",
        "contains",
        "Serial concepts is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-eras",
        "contains",
        "Serial eras is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-works",
        "contains",
        "Serial works & media is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-symbols",
        "contains",
        "Serial symbols is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-controversies",
        "contains",
        "Serial controversies is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-sources",
        "contains",
        "Serial sources is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-geography",
        "contains",
        "Serial geography is a primary trailhead under Serial.",
        0.88,
        0.82
    ],
    [
        "serial-podcast",
        "serial-podcast-legacy",
        "contains",
        "Serial legacy is a primary trailhead under Serial.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
