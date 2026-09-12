/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "haunted-places",
        "name": "Haunted places",
        "type": "topic",
        "short_description": "Buildings, murders, witnesses, owners, investigations, and the events that stick to a place.",
        "description": "Buildings, murders, witnesses, owners, investigations, and the events that stick to a place. This Ton-o-Lore subject maps people, places, events, and ideas tied to Haunted places so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "haunted-places-figures",
        "name": "Haunted places figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Haunted places.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Haunted places."
    },
    {
        "slug": "haunted-places-world",
        "name": "Haunted places world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Haunted places.",
        "description": "Geography, institutions, and periodization that give Haunted places its encyclopedia shape."
    },
    {
        "slug": "haunted-places-places",
        "name": "Haunted places places",
        "type": "place",
        "short_description": "Locations and geographies that frame Haunted places.",
        "description": "Places, regions, and built sites that give Haunted places its map — where events and figures concentrate."
    },
    {
        "slug": "haunted-places-events",
        "name": "Haunted places events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Haunted places.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Haunted places timeline."
    },
    {
        "slug": "haunted-places-objects",
        "name": "Haunted places objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Haunted places.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Haunted places."
    },
    {
        "slug": "haunted-places-factions",
        "name": "Haunted places factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Haunted places.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Haunted places."
    },
    {
        "slug": "haunted-places-concepts",
        "name": "Haunted places concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Haunted places.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Haunted places readable as a lore graph."
    },
    {
        "slug": "haunted-places-eras",
        "name": "Haunted places eras",
        "type": "event",
        "short_description": "Periodization for Haunted places.",
        "description": "Named eras and phases that help readers track how Haunted places changes across time."
    },
    {
        "slug": "haunted-places-works",
        "name": "Haunted places works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Haunted places.",
        "description": "Primary works and adaptations through which most audiences encounter Haunted places."
    },
    {
        "slug": "haunted-places-symbols",
        "name": "Haunted places symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Haunted places.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Haunted places."
    },
    {
        "slug": "haunted-places-controversies",
        "name": "Haunted places controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Haunted places.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Haunted places argumentative."
    },
    {
        "slug": "haunted-places-sources",
        "name": "Haunted places sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Haunted places.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Haunted places."
    },
    {
        "slug": "haunted-places-geography",
        "name": "Haunted places geography",
        "type": "place",
        "short_description": "Broader geographic framing for Haunted places.",
        "description": "Regions, routes, and spatial systems that situate Haunted places beyond single named places."
    },
    {
        "slug": "haunted-places-legacy",
        "name": "Haunted places legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Haunted places.",
        "description": "How Haunted places continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "haunted-places",
        "haunted-places-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "haunted-places",
        "haunted-places-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "haunted-places",
        "haunted-places-places",
        "contains",
        "Haunted places places is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-events",
        "contains",
        "Haunted places events is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-objects",
        "contains",
        "Haunted places objects & artifacts is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-factions",
        "contains",
        "Haunted places factions & groups is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-concepts",
        "contains",
        "Haunted places concepts is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-eras",
        "contains",
        "Haunted places eras is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-works",
        "contains",
        "Haunted places works & media is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-symbols",
        "contains",
        "Haunted places symbols is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-controversies",
        "contains",
        "Haunted places controversies is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-sources",
        "contains",
        "Haunted places sources is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-geography",
        "contains",
        "Haunted places geography is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ],
    [
        "haunted-places",
        "haunted-places-legacy",
        "contains",
        "Haunted places legacy is a primary trailhead under Haunted places.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
