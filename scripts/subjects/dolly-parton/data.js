/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dolly-parton",
        "name": "Dolly Parton",
        "type": "topic",
        "short_description": "Songwriter, performer, and Appalachian icon whose authorship and persona reshaped country stardom.",
        "description": "Songwriter, performer, and Appalachian icon whose authorship and persona reshaped country stardom. This Ton-o-Lore subject maps people, works, places, and ideas tied to Dolly Parton so readers can follow long-tail connections across the country tradition."
    },
    {
        "slug": "dolly-parton-catalog",
        "name": "Dolly Parton catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Dolly Parton.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Dolly Parton in the country tradition."
    },
    {
        "slug": "dolly-parton-era",
        "name": "Dolly Parton eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Dolly Parton story.",
        "description": "Periodization helps encyclopedia readers track how Dolly Parton changed sound, lineup, or public myth across decades of country history."
    },
    {
        "slug": "dolly-parton-figures",
        "name": "Dolly Parton figures",
        "type": "topic",
        "short_description": "People and named forces central to Dolly Parton.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Dolly Parton."
    },
    {
        "slug": "dolly-parton-places",
        "name": "Dolly Parton places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dolly Parton.",
        "description": "Places, regions, and built sites that give Dolly Parton its map — where events and figures concentrate."
    },
    {
        "slug": "dolly-parton-events",
        "name": "Dolly Parton events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dolly Parton.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dolly Parton timeline."
    },
    {
        "slug": "dolly-parton-objects",
        "name": "Dolly Parton objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dolly Parton.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dolly Parton."
    },
    {
        "slug": "dolly-parton-factions",
        "name": "Dolly Parton factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dolly Parton.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dolly Parton."
    },
    {
        "slug": "dolly-parton-concepts",
        "name": "Dolly Parton concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dolly Parton.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dolly Parton readable as a lore graph."
    },
    {
        "slug": "dolly-parton-eras",
        "name": "Dolly Parton eras",
        "type": "event",
        "short_description": "Periodization for Dolly Parton.",
        "description": "Named eras and phases that help readers track how Dolly Parton changes across time."
    },
    {
        "slug": "dolly-parton-works",
        "name": "Dolly Parton works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dolly Parton.",
        "description": "Primary works and adaptations through which most audiences encounter Dolly Parton."
    },
    {
        "slug": "dolly-parton-symbols",
        "name": "Dolly Parton symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dolly Parton.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dolly Parton."
    },
    {
        "slug": "dolly-parton-controversies",
        "name": "Dolly Parton controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dolly Parton.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dolly Parton argumentative."
    },
    {
        "slug": "dolly-parton-sources",
        "name": "Dolly Parton sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dolly Parton.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dolly Parton."
    },
    {
        "slug": "dolly-parton-geography",
        "name": "Dolly Parton geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dolly Parton.",
        "description": "Regions, routes, and spatial systems that situate Dolly Parton beyond single named places."
    }
];

const relationships = [
    [
        "dolly-parton",
        "dolly-parton-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "dolly-parton",
        "dolly-parton-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "dolly-parton",
        "dolly-parton-figures",
        "contains",
        "Dolly Parton figures is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-places",
        "contains",
        "Dolly Parton places is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-events",
        "contains",
        "Dolly Parton events is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-objects",
        "contains",
        "Dolly Parton objects & artifacts is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-factions",
        "contains",
        "Dolly Parton factions & groups is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-concepts",
        "contains",
        "Dolly Parton concepts is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-eras",
        "contains",
        "Dolly Parton eras is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-works",
        "contains",
        "Dolly Parton works & media is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-symbols",
        "contains",
        "Dolly Parton symbols is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-controversies",
        "contains",
        "Dolly Parton controversies is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-sources",
        "contains",
        "Dolly Parton sources is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ],
    [
        "dolly-parton",
        "dolly-parton-geography",
        "contains",
        "Dolly Parton geography is a primary trailhead under Dolly Parton.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
