/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "yu-gi-oh",
        "name": "Yu-Gi-Oh!",
        "type": "topic",
        "short_description": "Duel Monsters and the competitive TCG — archetypes, banlists, and anime-shadowed card lore.",
        "description": "Duel Monsters and the competitive TCG — archetypes, banlists, and anime-shadowed card lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Yu-Gi-Oh! so readers can follow long-tail connections across the card game hobby."
    },
    {
        "slug": "yu-gi-oh-rules",
        "name": "Yu-Gi-Oh! rules & formats",
        "type": "topic",
        "short_description": "How Yu-Gi-Oh! is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-setting",
        "name": "Yu-Gi-Oh! setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Yu-Gi-Oh!.",
        "description": "The narrative frame around Yu-Gi-Oh! — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "yu-gi-oh-figures",
        "name": "Yu-Gi-Oh! figures",
        "type": "topic",
        "short_description": "People and named forces central to Yu-Gi-Oh!.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-places",
        "name": "Yu-Gi-Oh! places",
        "type": "place",
        "short_description": "Locations and geographies that frame Yu-Gi-Oh!.",
        "description": "Places, regions, and built sites that give Yu-Gi-Oh! its map — where events and figures concentrate."
    },
    {
        "slug": "yu-gi-oh-events",
        "name": "Yu-Gi-Oh! events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Yu-Gi-Oh!.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Yu-Gi-Oh! timeline."
    },
    {
        "slug": "yu-gi-oh-objects",
        "name": "Yu-Gi-Oh! objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Yu-Gi-Oh!.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-factions",
        "name": "Yu-Gi-Oh! factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Yu-Gi-Oh!.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-concepts",
        "name": "Yu-Gi-Oh! concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Yu-Gi-Oh!.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Yu-Gi-Oh! readable as a lore graph."
    },
    {
        "slug": "yu-gi-oh-eras",
        "name": "Yu-Gi-Oh! eras",
        "type": "event",
        "short_description": "Periodization for Yu-Gi-Oh!.",
        "description": "Named eras and phases that help readers track how Yu-Gi-Oh! changes across time."
    },
    {
        "slug": "yu-gi-oh-works",
        "name": "Yu-Gi-Oh! works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Yu-Gi-Oh!.",
        "description": "Primary works and adaptations through which most audiences encounter Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-symbols",
        "name": "Yu-Gi-Oh! symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Yu-Gi-Oh!.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-controversies",
        "name": "Yu-Gi-Oh! controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Yu-Gi-Oh!.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Yu-Gi-Oh! argumentative."
    },
    {
        "slug": "yu-gi-oh-sources",
        "name": "Yu-Gi-Oh! sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Yu-Gi-Oh!.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Yu-Gi-Oh!."
    },
    {
        "slug": "yu-gi-oh-geography",
        "name": "Yu-Gi-Oh! geography",
        "type": "place",
        "short_description": "Broader geographic framing for Yu-Gi-Oh!.",
        "description": "Regions, routes, and spatial systems that situate Yu-Gi-Oh! beyond single named places."
    }
];

const relationships = [
    [
        "yu-gi-oh",
        "yu-gi-oh-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-figures",
        "contains",
        "Yu-Gi-Oh! figures is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-places",
        "contains",
        "Yu-Gi-Oh! places is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-events",
        "contains",
        "Yu-Gi-Oh! events is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-objects",
        "contains",
        "Yu-Gi-Oh! objects & artifacts is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-factions",
        "contains",
        "Yu-Gi-Oh! factions & groups is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-concepts",
        "contains",
        "Yu-Gi-Oh! concepts is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-eras",
        "contains",
        "Yu-Gi-Oh! eras is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-works",
        "contains",
        "Yu-Gi-Oh! works & media is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-symbols",
        "contains",
        "Yu-Gi-Oh! symbols is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-controversies",
        "contains",
        "Yu-Gi-Oh! controversies is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-sources",
        "contains",
        "Yu-Gi-Oh! sources is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-geography",
        "contains",
        "Yu-Gi-Oh! geography is a primary trailhead under Yu-Gi-Oh!.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
