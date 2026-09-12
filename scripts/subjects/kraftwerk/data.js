/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kraftwerk",
        "name": "Kraftwerk",
        "type": "topic",
        "short_description": "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music.",
        "description": "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Kraftwerk so readers can follow long-tail connections across the electronic tradition."
    },
    {
        "slug": "kraftwerk-catalog",
        "name": "Kraftwerk catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Kraftwerk.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Kraftwerk in the electronic tradition."
    },
    {
        "slug": "kraftwerk-era",
        "name": "Kraftwerk eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Kraftwerk story.",
        "description": "Periodization helps encyclopedia readers track how Kraftwerk changed sound, lineup, or public myth across decades of electronic history."
    },
    {
        "slug": "kraftwerk-figures",
        "name": "Kraftwerk figures",
        "type": "topic",
        "short_description": "People and named forces central to Kraftwerk.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Kraftwerk."
    },
    {
        "slug": "kraftwerk-places",
        "name": "Kraftwerk places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kraftwerk.",
        "description": "Places, regions, and built sites that give Kraftwerk its map — where events and figures concentrate."
    },
    {
        "slug": "kraftwerk-events",
        "name": "Kraftwerk events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kraftwerk.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kraftwerk timeline."
    },
    {
        "slug": "kraftwerk-objects",
        "name": "Kraftwerk objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kraftwerk.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kraftwerk."
    },
    {
        "slug": "kraftwerk-factions",
        "name": "Kraftwerk factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kraftwerk.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kraftwerk."
    },
    {
        "slug": "kraftwerk-concepts",
        "name": "Kraftwerk concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kraftwerk.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kraftwerk readable as a lore graph."
    },
    {
        "slug": "kraftwerk-eras",
        "name": "Kraftwerk eras",
        "type": "event",
        "short_description": "Periodization for Kraftwerk.",
        "description": "Named eras and phases that help readers track how Kraftwerk changes across time."
    },
    {
        "slug": "kraftwerk-works",
        "name": "Kraftwerk works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kraftwerk.",
        "description": "Primary works and adaptations through which most audiences encounter Kraftwerk."
    },
    {
        "slug": "kraftwerk-symbols",
        "name": "Kraftwerk symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kraftwerk.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kraftwerk."
    },
    {
        "slug": "kraftwerk-controversies",
        "name": "Kraftwerk controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kraftwerk.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kraftwerk argumentative."
    },
    {
        "slug": "kraftwerk-sources",
        "name": "Kraftwerk sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kraftwerk.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kraftwerk."
    },
    {
        "slug": "kraftwerk-geography",
        "name": "Kraftwerk geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kraftwerk.",
        "description": "Regions, routes, and spatial systems that situate Kraftwerk beyond single named places."
    }
];

const relationships = [
    [
        "kraftwerk",
        "kraftwerk-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "kraftwerk",
        "kraftwerk-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "kraftwerk",
        "kraftwerk-figures",
        "contains",
        "Kraftwerk figures is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-places",
        "contains",
        "Kraftwerk places is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-events",
        "contains",
        "Kraftwerk events is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-objects",
        "contains",
        "Kraftwerk objects & artifacts is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-factions",
        "contains",
        "Kraftwerk factions & groups is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-concepts",
        "contains",
        "Kraftwerk concepts is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-eras",
        "contains",
        "Kraftwerk eras is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-works",
        "contains",
        "Kraftwerk works & media is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-symbols",
        "contains",
        "Kraftwerk symbols is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-controversies",
        "contains",
        "Kraftwerk controversies is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-sources",
        "contains",
        "Kraftwerk sources is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-geography",
        "contains",
        "Kraftwerk geography is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
