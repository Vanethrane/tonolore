/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "johann-sebastian-bach",
        "name": "Johann Sebastian Bach",
        "type": "topic",
        "short_description": "Baroque master of counterpoint whose sacred and keyboard works remain a foundation of Western music.",
        "description": "Baroque master of counterpoint whose sacred and keyboard works remain a foundation of Western music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Johann Sebastian Bach so readers can follow long-tail connections across the classical tradition."
    },
    {
        "slug": "johann-sebastian-bach-catalog",
        "name": "Johann Sebastian Bach catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Johann Sebastian Bach.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Johann Sebastian Bach in the classical tradition."
    },
    {
        "slug": "johann-sebastian-bach-era",
        "name": "Johann Sebastian Bach eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Johann Sebastian Bach story.",
        "description": "Periodization helps encyclopedia readers track how Johann Sebastian Bach changed sound, lineup, or public myth across decades of classical history."
    },
    {
        "slug": "johann-sebastian-bach-figures",
        "name": "Johann Sebastian Bach figures",
        "type": "topic",
        "short_description": "People and named forces central to Johann Sebastian Bach.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-places",
        "name": "Johann Sebastian Bach places",
        "type": "place",
        "short_description": "Locations and geographies that frame Johann Sebastian Bach.",
        "description": "Places, regions, and built sites that give Johann Sebastian Bach its map — where events and figures concentrate."
    },
    {
        "slug": "johann-sebastian-bach-events",
        "name": "Johann Sebastian Bach events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Johann Sebastian Bach.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Johann Sebastian Bach timeline."
    },
    {
        "slug": "johann-sebastian-bach-objects",
        "name": "Johann Sebastian Bach objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Johann Sebastian Bach.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-factions",
        "name": "Johann Sebastian Bach factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Johann Sebastian Bach.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-concepts",
        "name": "Johann Sebastian Bach concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Johann Sebastian Bach.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Johann Sebastian Bach readable as a lore graph."
    },
    {
        "slug": "johann-sebastian-bach-eras",
        "name": "Johann Sebastian Bach eras",
        "type": "event",
        "short_description": "Periodization for Johann Sebastian Bach.",
        "description": "Named eras and phases that help readers track how Johann Sebastian Bach changes across time."
    },
    {
        "slug": "johann-sebastian-bach-works",
        "name": "Johann Sebastian Bach works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Johann Sebastian Bach.",
        "description": "Primary works and adaptations through which most audiences encounter Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-symbols",
        "name": "Johann Sebastian Bach symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Johann Sebastian Bach.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-controversies",
        "name": "Johann Sebastian Bach controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Johann Sebastian Bach.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Johann Sebastian Bach argumentative."
    },
    {
        "slug": "johann-sebastian-bach-sources",
        "name": "Johann Sebastian Bach sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Johann Sebastian Bach.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Johann Sebastian Bach."
    },
    {
        "slug": "johann-sebastian-bach-geography",
        "name": "Johann Sebastian Bach geography",
        "type": "place",
        "short_description": "Broader geographic framing for Johann Sebastian Bach.",
        "description": "Regions, routes, and spatial systems that situate Johann Sebastian Bach beyond single named places."
    }
];

const relationships = [
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-figures",
        "contains",
        "Johann Sebastian Bach figures is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-places",
        "contains",
        "Johann Sebastian Bach places is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-events",
        "contains",
        "Johann Sebastian Bach events is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-objects",
        "contains",
        "Johann Sebastian Bach objects & artifacts is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-factions",
        "contains",
        "Johann Sebastian Bach factions & groups is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-concepts",
        "contains",
        "Johann Sebastian Bach concepts is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-eras",
        "contains",
        "Johann Sebastian Bach eras is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-works",
        "contains",
        "Johann Sebastian Bach works & media is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-symbols",
        "contains",
        "Johann Sebastian Bach symbols is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-controversies",
        "contains",
        "Johann Sebastian Bach controversies is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-sources",
        "contains",
        "Johann Sebastian Bach sources is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-geography",
        "contains",
        "Johann Sebastian Bach geography is a primary trailhead under Johann Sebastian Bach.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
