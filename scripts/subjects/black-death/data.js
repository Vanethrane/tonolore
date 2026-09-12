/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "black-death",
        "name": "Black Death",
        "type": "topic",
        "short_description": "Plague waves, mortality, social upheaval, and the medieval pandemic that remade Europe.",
        "description": "Plague waves, mortality, social upheaval, and the medieval pandemic that remade Europe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Black Death so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "black-death-figures",
        "name": "Black Death figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Black Death.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Black Death."
    },
    {
        "slug": "black-death-world",
        "name": "Black Death world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Black Death.",
        "description": "Geography, institutions, and periodization that give Black Death its encyclopedia shape."
    },
    {
        "slug": "black-death-places",
        "name": "Black Death places",
        "type": "place",
        "short_description": "Locations and geographies that frame Black Death.",
        "description": "Places, regions, and built sites that give Black Death its map — where events and figures concentrate."
    },
    {
        "slug": "black-death-events",
        "name": "Black Death events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Black Death.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Black Death timeline."
    },
    {
        "slug": "black-death-objects",
        "name": "Black Death objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Black Death.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Black Death."
    },
    {
        "slug": "black-death-factions",
        "name": "Black Death factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Black Death.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Black Death."
    },
    {
        "slug": "black-death-concepts",
        "name": "Black Death concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Black Death.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Black Death readable as a lore graph."
    },
    {
        "slug": "black-death-eras",
        "name": "Black Death eras",
        "type": "event",
        "short_description": "Periodization for Black Death.",
        "description": "Named eras and phases that help readers track how Black Death changes across time."
    },
    {
        "slug": "black-death-works",
        "name": "Black Death works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Black Death.",
        "description": "Primary works and adaptations through which most audiences encounter Black Death."
    },
    {
        "slug": "black-death-symbols",
        "name": "Black Death symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Black Death.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Black Death."
    },
    {
        "slug": "black-death-controversies",
        "name": "Black Death controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Black Death.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Black Death argumentative."
    },
    {
        "slug": "black-death-sources",
        "name": "Black Death sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Black Death.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Black Death."
    },
    {
        "slug": "black-death-geography",
        "name": "Black Death geography",
        "type": "place",
        "short_description": "Broader geographic framing for Black Death.",
        "description": "Regions, routes, and spatial systems that situate Black Death beyond single named places."
    },
    {
        "slug": "black-death-legacy",
        "name": "Black Death legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Black Death.",
        "description": "How Black Death continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "black-death",
        "black-death-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "black-death",
        "black-death-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "black-death",
        "black-death-places",
        "contains",
        "Black Death places is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-events",
        "contains",
        "Black Death events is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-objects",
        "contains",
        "Black Death objects & artifacts is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-factions",
        "contains",
        "Black Death factions & groups is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-concepts",
        "contains",
        "Black Death concepts is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-eras",
        "contains",
        "Black Death eras is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-works",
        "contains",
        "Black Death works & media is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-symbols",
        "contains",
        "Black Death symbols is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-controversies",
        "contains",
        "Black Death controversies is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-sources",
        "contains",
        "Black Death sources is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-geography",
        "contains",
        "Black Death geography is a primary trailhead under Black Death.",
        0.88,
        0.82
    ],
    [
        "black-death",
        "black-death-legacy",
        "contains",
        "Black Death legacy is a primary trailhead under Black Death.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
