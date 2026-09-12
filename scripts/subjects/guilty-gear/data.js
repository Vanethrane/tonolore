/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "guilty-gear",
        "name": "Guilty Gear",
        "type": "topic",
        "short_description": "Anime fighters, Gears lore, and the stylish 2D tradition Arc System keeps escalating.",
        "description": "Anime fighters, Gears lore, and the stylish 2D tradition Arc System keeps escalating. This Ton-o-Lore subject maps people, places, events, and ideas tied to Guilty Gear so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "guilty-gear-figures",
        "name": "Guilty Gear figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Guilty Gear.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Guilty Gear."
    },
    {
        "slug": "guilty-gear-world",
        "name": "Guilty Gear world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Guilty Gear.",
        "description": "Geography, institutions, and periodization that give Guilty Gear its encyclopedia shape."
    },
    {
        "slug": "guilty-gear-places",
        "name": "Guilty Gear places",
        "type": "place",
        "short_description": "Locations and geographies that frame Guilty Gear.",
        "description": "Places, regions, and built sites that give Guilty Gear its map — where events and figures concentrate."
    },
    {
        "slug": "guilty-gear-events",
        "name": "Guilty Gear events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Guilty Gear.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Guilty Gear timeline."
    },
    {
        "slug": "guilty-gear-objects",
        "name": "Guilty Gear objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Guilty Gear.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Guilty Gear."
    },
    {
        "slug": "guilty-gear-factions",
        "name": "Guilty Gear factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Guilty Gear.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Guilty Gear."
    },
    {
        "slug": "guilty-gear-concepts",
        "name": "Guilty Gear concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Guilty Gear.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Guilty Gear readable as a lore graph."
    },
    {
        "slug": "guilty-gear-eras",
        "name": "Guilty Gear eras",
        "type": "event",
        "short_description": "Periodization for Guilty Gear.",
        "description": "Named eras and phases that help readers track how Guilty Gear changes across time."
    },
    {
        "slug": "guilty-gear-works",
        "name": "Guilty Gear works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Guilty Gear.",
        "description": "Primary works and adaptations through which most audiences encounter Guilty Gear."
    },
    {
        "slug": "guilty-gear-symbols",
        "name": "Guilty Gear symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Guilty Gear.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Guilty Gear."
    },
    {
        "slug": "guilty-gear-controversies",
        "name": "Guilty Gear controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Guilty Gear.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Guilty Gear argumentative."
    },
    {
        "slug": "guilty-gear-sources",
        "name": "Guilty Gear sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Guilty Gear.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Guilty Gear."
    },
    {
        "slug": "guilty-gear-geography",
        "name": "Guilty Gear geography",
        "type": "place",
        "short_description": "Broader geographic framing for Guilty Gear.",
        "description": "Regions, routes, and spatial systems that situate Guilty Gear beyond single named places."
    },
    {
        "slug": "guilty-gear-legacy",
        "name": "Guilty Gear legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Guilty Gear.",
        "description": "How Guilty Gear continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "guilty-gear",
        "guilty-gear-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "guilty-gear",
        "guilty-gear-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "guilty-gear",
        "guilty-gear-places",
        "contains",
        "Guilty Gear places is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-events",
        "contains",
        "Guilty Gear events is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-objects",
        "contains",
        "Guilty Gear objects & artifacts is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-factions",
        "contains",
        "Guilty Gear factions & groups is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-concepts",
        "contains",
        "Guilty Gear concepts is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-eras",
        "contains",
        "Guilty Gear eras is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-works",
        "contains",
        "Guilty Gear works & media is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-symbols",
        "contains",
        "Guilty Gear symbols is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-controversies",
        "contains",
        "Guilty Gear controversies is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-sources",
        "contains",
        "Guilty Gear sources is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-geography",
        "contains",
        "Guilty Gear geography is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ],
    [
        "guilty-gear",
        "guilty-gear-legacy",
        "contains",
        "Guilty Gear legacy is a primary trailhead under Guilty Gear.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
