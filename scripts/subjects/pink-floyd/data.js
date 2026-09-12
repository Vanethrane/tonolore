/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pink-floyd",
        "name": "Pink Floyd",
        "type": "topic",
        "short_description": "Progressive and psychedelic rock built around concept albums, sound design, and lasting stage mythology.",
        "description": "Progressive and psychedelic rock built around concept albums, sound design, and lasting stage mythology. This Ton-o-Lore subject maps people, works, places, and ideas tied to Pink Floyd so readers can follow long-tail connections across the rock tradition."
    },
    {
        "slug": "pink-floyd-catalog",
        "name": "Pink Floyd catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Pink Floyd.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Pink Floyd in the rock tradition."
    },
    {
        "slug": "pink-floyd-era",
        "name": "Pink Floyd eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Pink Floyd story.",
        "description": "Periodization helps encyclopedia readers track how Pink Floyd changed sound, lineup, or public myth across decades of rock history."
    },
    {
        "slug": "pink-floyd-figures",
        "name": "Pink Floyd figures",
        "type": "topic",
        "short_description": "People and named forces central to Pink Floyd.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Pink Floyd."
    },
    {
        "slug": "pink-floyd-places",
        "name": "Pink Floyd places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pink Floyd.",
        "description": "Places, regions, and built sites that give Pink Floyd its map — where events and figures concentrate."
    },
    {
        "slug": "pink-floyd-events",
        "name": "Pink Floyd events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pink Floyd.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pink Floyd timeline."
    },
    {
        "slug": "pink-floyd-objects",
        "name": "Pink Floyd objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pink Floyd.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pink Floyd."
    },
    {
        "slug": "pink-floyd-factions",
        "name": "Pink Floyd factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pink Floyd.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pink Floyd."
    },
    {
        "slug": "pink-floyd-concepts",
        "name": "Pink Floyd concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pink Floyd.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pink Floyd readable as a lore graph."
    },
    {
        "slug": "pink-floyd-eras",
        "name": "Pink Floyd eras",
        "type": "event",
        "short_description": "Periodization for Pink Floyd.",
        "description": "Named eras and phases that help readers track how Pink Floyd changes across time."
    },
    {
        "slug": "pink-floyd-works",
        "name": "Pink Floyd works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pink Floyd.",
        "description": "Primary works and adaptations through which most audiences encounter Pink Floyd."
    },
    {
        "slug": "pink-floyd-symbols",
        "name": "Pink Floyd symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pink Floyd.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pink Floyd."
    },
    {
        "slug": "pink-floyd-controversies",
        "name": "Pink Floyd controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pink Floyd.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pink Floyd argumentative."
    },
    {
        "slug": "pink-floyd-sources",
        "name": "Pink Floyd sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pink Floyd.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pink Floyd."
    },
    {
        "slug": "pink-floyd-geography",
        "name": "Pink Floyd geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pink Floyd.",
        "description": "Regions, routes, and spatial systems that situate Pink Floyd beyond single named places."
    }
];

const relationships = [
    [
        "pink-floyd",
        "pink-floyd-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "pink-floyd",
        "pink-floyd-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "pink-floyd",
        "pink-floyd-figures",
        "contains",
        "Pink Floyd figures is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-places",
        "contains",
        "Pink Floyd places is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-events",
        "contains",
        "Pink Floyd events is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-objects",
        "contains",
        "Pink Floyd objects & artifacts is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-factions",
        "contains",
        "Pink Floyd factions & groups is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-concepts",
        "contains",
        "Pink Floyd concepts is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-eras",
        "contains",
        "Pink Floyd eras is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-works",
        "contains",
        "Pink Floyd works & media is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-symbols",
        "contains",
        "Pink Floyd symbols is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-controversies",
        "contains",
        "Pink Floyd controversies is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-sources",
        "contains",
        "Pink Floyd sources is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ],
    [
        "pink-floyd",
        "pink-floyd-geography",
        "contains",
        "Pink Floyd geography is a primary trailhead under Pink Floyd.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
