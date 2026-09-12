/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ludwig-van-beethoven",
        "name": "Ludwig van Beethoven",
        "type": "topic",
        "short_description": "Composer whose symphonies and late style mark the hinge from Classical to Romantic eras.",
        "description": "Composer whose symphonies and late style mark the hinge from Classical to Romantic eras. This Ton-o-Lore subject maps people, works, places, and ideas tied to Ludwig van Beethoven so readers can follow long-tail connections across the classical tradition."
    },
    {
        "slug": "ludwig-van-beethoven-catalog",
        "name": "Ludwig van Beethoven catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Ludwig van Beethoven.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Ludwig van Beethoven in the classical tradition."
    },
    {
        "slug": "ludwig-van-beethoven-era",
        "name": "Ludwig van Beethoven eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Ludwig van Beethoven story.",
        "description": "Periodization helps encyclopedia readers track how Ludwig van Beethoven changed sound, lineup, or public myth across decades of classical history."
    },
    {
        "slug": "ludwig-van-beethoven-figures",
        "name": "Ludwig van Beethoven figures",
        "type": "topic",
        "short_description": "People and named forces central to Ludwig van Beethoven.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-places",
        "name": "Ludwig van Beethoven places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ludwig van Beethoven.",
        "description": "Places, regions, and built sites that give Ludwig van Beethoven its map — where events and figures concentrate."
    },
    {
        "slug": "ludwig-van-beethoven-events",
        "name": "Ludwig van Beethoven events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ludwig van Beethoven.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ludwig van Beethoven timeline."
    },
    {
        "slug": "ludwig-van-beethoven-objects",
        "name": "Ludwig van Beethoven objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ludwig van Beethoven.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-factions",
        "name": "Ludwig van Beethoven factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ludwig van Beethoven.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-concepts",
        "name": "Ludwig van Beethoven concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ludwig van Beethoven.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ludwig van Beethoven readable as a lore graph."
    },
    {
        "slug": "ludwig-van-beethoven-eras",
        "name": "Ludwig van Beethoven eras",
        "type": "event",
        "short_description": "Periodization for Ludwig van Beethoven.",
        "description": "Named eras and phases that help readers track how Ludwig van Beethoven changes across time."
    },
    {
        "slug": "ludwig-van-beethoven-works",
        "name": "Ludwig van Beethoven works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ludwig van Beethoven.",
        "description": "Primary works and adaptations through which most audiences encounter Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-symbols",
        "name": "Ludwig van Beethoven symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ludwig van Beethoven.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-controversies",
        "name": "Ludwig van Beethoven controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ludwig van Beethoven.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ludwig van Beethoven argumentative."
    },
    {
        "slug": "ludwig-van-beethoven-sources",
        "name": "Ludwig van Beethoven sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ludwig van Beethoven.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ludwig van Beethoven."
    },
    {
        "slug": "ludwig-van-beethoven-geography",
        "name": "Ludwig van Beethoven geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ludwig van Beethoven.",
        "description": "Regions, routes, and spatial systems that situate Ludwig van Beethoven beyond single named places."
    }
];

const relationships = [
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-figures",
        "contains",
        "Ludwig van Beethoven figures is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-places",
        "contains",
        "Ludwig van Beethoven places is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-events",
        "contains",
        "Ludwig van Beethoven events is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-objects",
        "contains",
        "Ludwig van Beethoven objects & artifacts is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-factions",
        "contains",
        "Ludwig van Beethoven factions & groups is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-concepts",
        "contains",
        "Ludwig van Beethoven concepts is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-eras",
        "contains",
        "Ludwig van Beethoven eras is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-works",
        "contains",
        "Ludwig van Beethoven works & media is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-symbols",
        "contains",
        "Ludwig van Beethoven symbols is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-controversies",
        "contains",
        "Ludwig van Beethoven controversies is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-sources",
        "contains",
        "Ludwig van Beethoven sources is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-geography",
        "contains",
        "Ludwig van Beethoven geography is a primary trailhead under Ludwig van Beethoven.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
