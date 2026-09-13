/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "folk-monsters",
        "name": "Folk monsters",
        "type": "topic",
        "short_description": "Regional creatures, sightings, local names, folklore variants, and the oral maps that keep monsters alive.",
        "description": "Regional creatures, sightings, local names, folklore variants, and the oral maps that keep monsters alive. This Ton-o-Lore subject maps people, places, events, and ideas tied to Folk monsters so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "folk-monsters-figures",
        "name": "Folk monsters figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Folk monsters.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Folk monsters."
    },
    {
        "slug": "folk-monsters-world",
        "name": "Folk monsters world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Folk monsters.",
        "description": "Geography, institutions, and periodization that give Folk monsters its encyclopedia shape."
    },
    {
        "slug": "folk-monsters-places",
        "name": "Folk monsters places",
        "type": "place",
        "short_description": "Locations and geographies that frame Folk monsters.",
        "description": "Places, regions, and built sites that give Folk monsters its map — where events and figures concentrate."
    },
    {
        "slug": "folk-monsters-events",
        "name": "Folk monsters events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Folk monsters.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Folk monsters timeline."
    },
    {
        "slug": "folk-monsters-objects",
        "name": "Folk monsters objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Folk monsters.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Folk monsters."
    },
    {
        "slug": "folk-monsters-factions",
        "name": "Folk monsters factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Folk monsters.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Folk monsters."
    },
    {
        "slug": "folk-monsters-concepts",
        "name": "Folk monsters concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Folk monsters.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Folk monsters readable as a lore graph."
    },
    {
        "slug": "folk-monsters-eras",
        "name": "Folk monsters eras",
        "type": "event",
        "short_description": "Periodization for Folk monsters.",
        "description": "Named eras and phases that help readers track how Folk monsters changes across time."
    },
    {
        "slug": "folk-monsters-works",
        "name": "Folk monsters works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Folk monsters.",
        "description": "Primary works and adaptations through which most audiences encounter Folk monsters."
    },
    {
        "slug": "folk-monsters-symbols",
        "name": "Folk monsters symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Folk monsters.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Folk monsters."
    },
    {
        "slug": "folk-monsters-controversies",
        "name": "Folk monsters controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Folk monsters.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Folk monsters argumentative."
    },
    {
        "slug": "folk-monsters-sources",
        "name": "Folk monsters sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Folk monsters.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Folk monsters."
    },
    {
        "slug": "folk-monsters-geography",
        "name": "Folk monsters geography",
        "type": "place",
        "short_description": "Broader geographic framing for Folk monsters.",
        "description": "Regions, routes, and spatial systems that situate Folk monsters beyond single named places."
    },
    {
        "slug": "folk-monsters-legacy",
        "name": "Folk monsters legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Folk monsters.",
        "description": "How Folk monsters continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "folk-monsters",
        "folk-monsters-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "folk-monsters",
        "folk-monsters-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "folk-monsters",
        "folk-monsters-places",
        "contains",
        "Folk monsters places is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-events",
        "contains",
        "Folk monsters events is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-objects",
        "contains",
        "Folk monsters objects & artifacts is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-factions",
        "contains",
        "Folk monsters factions & groups is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-concepts",
        "contains",
        "Folk monsters concepts is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-eras",
        "contains",
        "Folk monsters eras is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-works",
        "contains",
        "Folk monsters works & media is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-symbols",
        "contains",
        "Folk monsters symbols is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-controversies",
        "contains",
        "Folk monsters controversies is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-sources",
        "contains",
        "Folk monsters sources is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-geography",
        "contains",
        "Folk monsters geography is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ],
    [
        "folk-monsters",
        "folk-monsters-legacy",
        "contains",
        "Folk monsters legacy is a primary trailhead under Folk monsters.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
