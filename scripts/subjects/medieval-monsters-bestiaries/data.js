/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "medieval-monsters-bestiaries",
        "name": "Medieval monsters & bestiaries",
        "type": "topic",
        "short_description": "Bestiary beasts, manuscripts, moral symbolism, legends, and the sources that taught medieval readers their monsters.",
        "description": "Bestiary beasts, manuscripts, moral symbolism, legends, and the sources that taught medieval readers their monsters. This Ton-o-Lore subject maps people, places, events, and ideas tied to Medieval monsters & bestiaries so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "medieval-monsters-bestiaries-figures",
        "name": "Medieval monsters & bestiaries figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Medieval monsters & bestiaries.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-world",
        "name": "Medieval monsters & bestiaries world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Medieval monsters & bestiaries.",
        "description": "Geography, institutions, and periodization that give Medieval monsters & bestiaries its encyclopedia shape."
    },
    {
        "slug": "medieval-monsters-bestiaries-places",
        "name": "Medieval monsters & bestiaries places",
        "type": "place",
        "short_description": "Locations and geographies that frame Medieval monsters & bestiaries.",
        "description": "Places, regions, and built sites that give Medieval monsters & bestiaries its map — where events and figures concentrate."
    },
    {
        "slug": "medieval-monsters-bestiaries-events",
        "name": "Medieval monsters & bestiaries events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Medieval monsters & bestiaries.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Medieval monsters & bestiaries timeline."
    },
    {
        "slug": "medieval-monsters-bestiaries-objects",
        "name": "Medieval monsters & bestiaries objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Medieval monsters & bestiaries.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-factions",
        "name": "Medieval monsters & bestiaries factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Medieval monsters & bestiaries.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-concepts",
        "name": "Medieval monsters & bestiaries concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Medieval monsters & bestiaries.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Medieval monsters & bestiaries readable as a lore graph."
    },
    {
        "slug": "medieval-monsters-bestiaries-eras",
        "name": "Medieval monsters & bestiaries eras",
        "type": "event",
        "short_description": "Periodization for Medieval monsters & bestiaries.",
        "description": "Named eras and phases that help readers track how Medieval monsters & bestiaries changes across time."
    },
    {
        "slug": "medieval-monsters-bestiaries-works",
        "name": "Medieval monsters & bestiaries works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Medieval monsters & bestiaries.",
        "description": "Primary works and adaptations through which most audiences encounter Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-symbols",
        "name": "Medieval monsters & bestiaries symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Medieval monsters & bestiaries.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-controversies",
        "name": "Medieval monsters & bestiaries controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Medieval monsters & bestiaries.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Medieval monsters & bestiaries argumentative."
    },
    {
        "slug": "medieval-monsters-bestiaries-sources",
        "name": "Medieval monsters & bestiaries sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Medieval monsters & bestiaries.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Medieval monsters & bestiaries."
    },
    {
        "slug": "medieval-monsters-bestiaries-geography",
        "name": "Medieval monsters & bestiaries geography",
        "type": "place",
        "short_description": "Broader geographic framing for Medieval monsters & bestiaries.",
        "description": "Regions, routes, and spatial systems that situate Medieval monsters & bestiaries beyond single named places."
    },
    {
        "slug": "medieval-monsters-bestiaries-legacy",
        "name": "Medieval monsters & bestiaries legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Medieval monsters & bestiaries.",
        "description": "How Medieval monsters & bestiaries continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-places",
        "contains",
        "Medieval monsters & bestiaries places is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-events",
        "contains",
        "Medieval monsters & bestiaries events is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-objects",
        "contains",
        "Medieval monsters & bestiaries objects & artifacts is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-factions",
        "contains",
        "Medieval monsters & bestiaries factions & groups is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-concepts",
        "contains",
        "Medieval monsters & bestiaries concepts is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-eras",
        "contains",
        "Medieval monsters & bestiaries eras is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-works",
        "contains",
        "Medieval monsters & bestiaries works & media is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-symbols",
        "contains",
        "Medieval monsters & bestiaries symbols is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-controversies",
        "contains",
        "Medieval monsters & bestiaries controversies is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-sources",
        "contains",
        "Medieval monsters & bestiaries sources is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-geography",
        "contains",
        "Medieval monsters & bestiaries geography is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ],
    [
        "medieval-monsters-bestiaries",
        "medieval-monsters-bestiaries-legacy",
        "contains",
        "Medieval monsters & bestiaries legacy is a primary trailhead under Medieval monsters & bestiaries.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
