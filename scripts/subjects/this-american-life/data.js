/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "this-american-life",
        "name": "This American Life",
        "type": "topic",
        "short_description": "Theme-driven radio stories, Ira Glass's framing, and the template for narrative podcasting.",
        "description": "Theme-driven radio stories, Ira Glass's framing, and the template for narrative podcasting. This Ton-o-Lore subject maps people, places, events, and ideas tied to This American Life so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "this-american-life-figures",
        "name": "This American Life figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to This American Life.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring This American Life."
    },
    {
        "slug": "this-american-life-world",
        "name": "This American Life world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame This American Life.",
        "description": "Geography, institutions, and periodization that give This American Life its encyclopedia shape."
    },
    {
        "slug": "this-american-life-places",
        "name": "This American Life places",
        "type": "place",
        "short_description": "Locations and geographies that frame This American Life.",
        "description": "Places, regions, and built sites that give This American Life its map — where events and figures concentrate."
    },
    {
        "slug": "this-american-life-events",
        "name": "This American Life events",
        "type": "event",
        "short_description": "Turning points and dated episodes in This American Life.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the This American Life timeline."
    },
    {
        "slug": "this-american-life-objects",
        "name": "This American Life objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to This American Life.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through This American Life."
    },
    {
        "slug": "this-american-life-factions",
        "name": "This American Life factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside This American Life.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in This American Life."
    },
    {
        "slug": "this-american-life-concepts",
        "name": "This American Life concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize This American Life.",
        "description": "Keywords, doctrines, systems, and abstract forces that make This American Life readable as a lore graph."
    },
    {
        "slug": "this-american-life-eras",
        "name": "This American Life eras",
        "type": "event",
        "short_description": "Periodization for This American Life.",
        "description": "Named eras and phases that help readers track how This American Life changes across time."
    },
    {
        "slug": "this-american-life-works",
        "name": "This American Life works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry This American Life.",
        "description": "Primary works and adaptations through which most audiences encounter This American Life."
    },
    {
        "slug": "this-american-life-symbols",
        "name": "This American Life symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with This American Life.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside This American Life."
    },
    {
        "slug": "this-american-life-controversies",
        "name": "This American Life controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in This American Life.",
        "description": "Debates, rival canons, scandals, and contested facts that keep This American Life argumentative."
    },
    {
        "slug": "this-american-life-sources",
        "name": "This American Life sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into This American Life.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify This American Life."
    },
    {
        "slug": "this-american-life-geography",
        "name": "This American Life geography",
        "type": "place",
        "short_description": "Broader geographic framing for This American Life.",
        "description": "Regions, routes, and spatial systems that situate This American Life beyond single named places."
    },
    {
        "slug": "this-american-life-legacy",
        "name": "This American Life legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of This American Life.",
        "description": "How This American Life continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "this-american-life",
        "this-american-life-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "this-american-life",
        "this-american-life-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "this-american-life",
        "this-american-life-places",
        "contains",
        "This American Life places is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-events",
        "contains",
        "This American Life events is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-objects",
        "contains",
        "This American Life objects & artifacts is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-factions",
        "contains",
        "This American Life factions & groups is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-concepts",
        "contains",
        "This American Life concepts is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-eras",
        "contains",
        "This American Life eras is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-works",
        "contains",
        "This American Life works & media is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-symbols",
        "contains",
        "This American Life symbols is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-controversies",
        "contains",
        "This American Life controversies is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-sources",
        "contains",
        "This American Life sources is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-geography",
        "contains",
        "This American Life geography is a primary trailhead under This American Life.",
        0.88,
        0.82
    ],
    [
        "this-american-life",
        "this-american-life-legacy",
        "contains",
        "This American Life legacy is a primary trailhead under This American Life.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
