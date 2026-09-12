/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spongebob-squarepants",
        "name": "SpongeBob SquarePants",
        "type": "topic",
        "short_description": "Bikini Bottom characters, absurdist lore, and a kids' comedy that became enduring meme canon.",
        "description": "Bikini Bottom characters, absurdist lore, and a kids' comedy that became enduring meme canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to SpongeBob SquarePants so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "spongebob-squarepants-figures",
        "name": "SpongeBob SquarePants figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to SpongeBob SquarePants.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-world",
        "name": "SpongeBob SquarePants world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame SpongeBob SquarePants.",
        "description": "Geography, institutions, and periodization that give SpongeBob SquarePants its encyclopedia shape."
    },
    {
        "slug": "spongebob-squarepants-places",
        "name": "SpongeBob SquarePants places",
        "type": "place",
        "short_description": "Locations and geographies that frame SpongeBob SquarePants.",
        "description": "Places, regions, and built sites that give SpongeBob SquarePants its map — where events and figures concentrate."
    },
    {
        "slug": "spongebob-squarepants-events",
        "name": "SpongeBob SquarePants events",
        "type": "event",
        "short_description": "Turning points and dated episodes in SpongeBob SquarePants.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the SpongeBob SquarePants timeline."
    },
    {
        "slug": "spongebob-squarepants-objects",
        "name": "SpongeBob SquarePants objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to SpongeBob SquarePants.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-factions",
        "name": "SpongeBob SquarePants factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside SpongeBob SquarePants.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-concepts",
        "name": "SpongeBob SquarePants concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize SpongeBob SquarePants.",
        "description": "Keywords, doctrines, systems, and abstract forces that make SpongeBob SquarePants readable as a lore graph."
    },
    {
        "slug": "spongebob-squarepants-eras",
        "name": "SpongeBob SquarePants eras",
        "type": "event",
        "short_description": "Periodization for SpongeBob SquarePants.",
        "description": "Named eras and phases that help readers track how SpongeBob SquarePants changes across time."
    },
    {
        "slug": "spongebob-squarepants-works",
        "name": "SpongeBob SquarePants works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry SpongeBob SquarePants.",
        "description": "Primary works and adaptations through which most audiences encounter SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-symbols",
        "name": "SpongeBob SquarePants symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with SpongeBob SquarePants.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-controversies",
        "name": "SpongeBob SquarePants controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in SpongeBob SquarePants.",
        "description": "Debates, rival canons, scandals, and contested facts that keep SpongeBob SquarePants argumentative."
    },
    {
        "slug": "spongebob-squarepants-sources",
        "name": "SpongeBob SquarePants sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into SpongeBob SquarePants.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify SpongeBob SquarePants."
    },
    {
        "slug": "spongebob-squarepants-geography",
        "name": "SpongeBob SquarePants geography",
        "type": "place",
        "short_description": "Broader geographic framing for SpongeBob SquarePants.",
        "description": "Regions, routes, and spatial systems that situate SpongeBob SquarePants beyond single named places."
    },
    {
        "slug": "spongebob-squarepants-legacy",
        "name": "SpongeBob SquarePants legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of SpongeBob SquarePants.",
        "description": "How SpongeBob SquarePants continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "spongebob-squarepants",
        "spongebob-squarepants-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-places",
        "contains",
        "SpongeBob SquarePants places is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-events",
        "contains",
        "SpongeBob SquarePants events is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-objects",
        "contains",
        "SpongeBob SquarePants objects & artifacts is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-factions",
        "contains",
        "SpongeBob SquarePants factions & groups is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-concepts",
        "contains",
        "SpongeBob SquarePants concepts is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-eras",
        "contains",
        "SpongeBob SquarePants eras is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-works",
        "contains",
        "SpongeBob SquarePants works & media is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-symbols",
        "contains",
        "SpongeBob SquarePants symbols is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-controversies",
        "contains",
        "SpongeBob SquarePants controversies is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-sources",
        "contains",
        "SpongeBob SquarePants sources is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-geography",
        "contains",
        "SpongeBob SquarePants geography is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ],
    [
        "spongebob-squarepants",
        "spongebob-squarepants-legacy",
        "contains",
        "SpongeBob SquarePants legacy is a primary trailhead under SpongeBob SquarePants.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
