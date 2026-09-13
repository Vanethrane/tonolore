/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "native-american-history",
        "name": "Native American history & nations",
        "type": "topic",
        "short_description": "Nations, leaders, languages, wars, treaties, homelands, and living traditions across Indigenous North America.",
        "description": "Nations, leaders, languages, wars, treaties, homelands, and living traditions across Indigenous North America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Native American history & nations so readers can follow long-tail connections across history."
    },
    {
        "slug": "native-american-history-figures",
        "name": "Native American history & nations figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Native American history & nations.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Native American history & nations."
    },
    {
        "slug": "native-american-history-world",
        "name": "Native American history & nations world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Native American history & nations.",
        "description": "Geography, institutions, and periodization that give Native American history & nations its encyclopedia shape."
    },
    {
        "slug": "native-american-history-places",
        "name": "Native American history & nations places",
        "type": "place",
        "short_description": "Locations and geographies that frame Native American history & nations.",
        "description": "Places, regions, and built sites that give Native American history & nations its map — where events and figures concentrate."
    },
    {
        "slug": "native-american-history-events",
        "name": "Native American history & nations events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Native American history & nations.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Native American history & nations timeline."
    },
    {
        "slug": "native-american-history-objects",
        "name": "Native American history & nations objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Native American history & nations.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Native American history & nations."
    },
    {
        "slug": "native-american-history-factions",
        "name": "Native American history & nations factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Native American history & nations.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Native American history & nations."
    },
    {
        "slug": "native-american-history-concepts",
        "name": "Native American history & nations concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Native American history & nations.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Native American history & nations readable as a lore graph."
    },
    {
        "slug": "native-american-history-eras",
        "name": "Native American history & nations eras",
        "type": "event",
        "short_description": "Periodization for Native American history & nations.",
        "description": "Named eras and phases that help readers track how Native American history & nations changes across time."
    },
    {
        "slug": "native-american-history-works",
        "name": "Native American history & nations works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Native American history & nations.",
        "description": "Primary works and adaptations through which most audiences encounter Native American history & nations."
    },
    {
        "slug": "native-american-history-symbols",
        "name": "Native American history & nations symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Native American history & nations.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Native American history & nations."
    },
    {
        "slug": "native-american-history-controversies",
        "name": "Native American history & nations controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Native American history & nations.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Native American history & nations argumentative."
    },
    {
        "slug": "native-american-history-sources",
        "name": "Native American history & nations sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Native American history & nations.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Native American history & nations."
    },
    {
        "slug": "native-american-history-geography",
        "name": "Native American history & nations geography",
        "type": "place",
        "short_description": "Broader geographic framing for Native American history & nations.",
        "description": "Regions, routes, and spatial systems that situate Native American history & nations beyond single named places."
    },
    {
        "slug": "native-american-history-legacy",
        "name": "Native American history & nations legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Native American history & nations.",
        "description": "How Native American history & nations continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "native-american-history",
        "native-american-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "native-american-history",
        "native-american-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "native-american-history",
        "native-american-history-places",
        "contains",
        "Native American history & nations places is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-events",
        "contains",
        "Native American history & nations events is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-objects",
        "contains",
        "Native American history & nations objects & artifacts is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-factions",
        "contains",
        "Native American history & nations factions & groups is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-concepts",
        "contains",
        "Native American history & nations concepts is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-eras",
        "contains",
        "Native American history & nations eras is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-works",
        "contains",
        "Native American history & nations works & media is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-symbols",
        "contains",
        "Native American history & nations symbols is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-controversies",
        "contains",
        "Native American history & nations controversies is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-sources",
        "contains",
        "Native American history & nations sources is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-geography",
        "contains",
        "Native American history & nations geography is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ],
    [
        "native-american-history",
        "native-american-history-legacy",
        "contains",
        "Native American history & nations legacy is a primary trailhead under Native American history & nations.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
