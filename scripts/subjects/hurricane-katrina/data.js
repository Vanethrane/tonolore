/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hurricane-katrina",
        "name": "Hurricane Katrina",
        "type": "topic",
        "short_description": "Storm, levees, New Orleans, diaspora, and the 2005 catastrophe that exposed governance fault lines.",
        "description": "Storm, levees, New Orleans, diaspora, and the 2005 catastrophe that exposed governance fault lines. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hurricane Katrina so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "hurricane-katrina-figures",
        "name": "Hurricane Katrina figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hurricane Katrina.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-world",
        "name": "Hurricane Katrina world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hurricane Katrina.",
        "description": "Geography, institutions, and periodization that give Hurricane Katrina its encyclopedia shape."
    },
    {
        "slug": "hurricane-katrina-places",
        "name": "Hurricane Katrina places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hurricane Katrina.",
        "description": "Places, regions, and built sites that give Hurricane Katrina its map — where events and figures concentrate."
    },
    {
        "slug": "hurricane-katrina-events",
        "name": "Hurricane Katrina events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hurricane Katrina.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hurricane Katrina timeline."
    },
    {
        "slug": "hurricane-katrina-objects",
        "name": "Hurricane Katrina objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hurricane Katrina.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-factions",
        "name": "Hurricane Katrina factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hurricane Katrina.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-concepts",
        "name": "Hurricane Katrina concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hurricane Katrina.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hurricane Katrina readable as a lore graph."
    },
    {
        "slug": "hurricane-katrina-eras",
        "name": "Hurricane Katrina eras",
        "type": "event",
        "short_description": "Periodization for Hurricane Katrina.",
        "description": "Named eras and phases that help readers track how Hurricane Katrina changes across time."
    },
    {
        "slug": "hurricane-katrina-works",
        "name": "Hurricane Katrina works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hurricane Katrina.",
        "description": "Primary works and adaptations through which most audiences encounter Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-symbols",
        "name": "Hurricane Katrina symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hurricane Katrina.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-controversies",
        "name": "Hurricane Katrina controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hurricane Katrina.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hurricane Katrina argumentative."
    },
    {
        "slug": "hurricane-katrina-sources",
        "name": "Hurricane Katrina sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hurricane Katrina.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hurricane Katrina."
    },
    {
        "slug": "hurricane-katrina-geography",
        "name": "Hurricane Katrina geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hurricane Katrina.",
        "description": "Regions, routes, and spatial systems that situate Hurricane Katrina beyond single named places."
    },
    {
        "slug": "hurricane-katrina-legacy",
        "name": "Hurricane Katrina legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hurricane Katrina.",
        "description": "How Hurricane Katrina continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "hurricane-katrina",
        "hurricane-katrina-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-places",
        "contains",
        "Hurricane Katrina places is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-events",
        "contains",
        "Hurricane Katrina events is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-objects",
        "contains",
        "Hurricane Katrina objects & artifacts is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-factions",
        "contains",
        "Hurricane Katrina factions & groups is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-concepts",
        "contains",
        "Hurricane Katrina concepts is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-eras",
        "contains",
        "Hurricane Katrina eras is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-works",
        "contains",
        "Hurricane Katrina works & media is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-symbols",
        "contains",
        "Hurricane Katrina symbols is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-controversies",
        "contains",
        "Hurricane Katrina controversies is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-sources",
        "contains",
        "Hurricane Katrina sources is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-geography",
        "contains",
        "Hurricane Katrina geography is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ],
    [
        "hurricane-katrina",
        "hurricane-katrina-legacy",
        "contains",
        "Hurricane Katrina legacy is a primary trailhead under Hurricane Katrina.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
