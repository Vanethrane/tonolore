/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "babylon-5",
        "name": "Babylon 5",
        "type": "topic",
        "short_description": "Five-year novel-for-TV space station politics, wars, and serialized myth-arc SF.",
        "description": "Five-year novel-for-TV space station politics, wars, and serialized myth-arc SF. This Ton-o-Lore subject maps people, places, events, and ideas tied to Babylon 5 so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "babylon-5-figures",
        "name": "Babylon 5 figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Babylon 5.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Babylon 5."
    },
    {
        "slug": "babylon-5-world",
        "name": "Babylon 5 world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Babylon 5.",
        "description": "Geography, institutions, and periodization that give Babylon 5 its encyclopedia shape."
    },
    {
        "slug": "babylon-5-places",
        "name": "Babylon 5 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Babylon 5.",
        "description": "Places, regions, and built sites that give Babylon 5 its map — where events and figures concentrate."
    },
    {
        "slug": "babylon-5-events",
        "name": "Babylon 5 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Babylon 5.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Babylon 5 timeline."
    },
    {
        "slug": "babylon-5-objects",
        "name": "Babylon 5 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Babylon 5.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Babylon 5."
    },
    {
        "slug": "babylon-5-factions",
        "name": "Babylon 5 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Babylon 5.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Babylon 5."
    },
    {
        "slug": "babylon-5-concepts",
        "name": "Babylon 5 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Babylon 5.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Babylon 5 readable as a lore graph."
    },
    {
        "slug": "babylon-5-eras",
        "name": "Babylon 5 eras",
        "type": "event",
        "short_description": "Periodization for Babylon 5.",
        "description": "Named eras and phases that help readers track how Babylon 5 changes across time."
    },
    {
        "slug": "babylon-5-works",
        "name": "Babylon 5 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Babylon 5.",
        "description": "Primary works and adaptations through which most audiences encounter Babylon 5."
    },
    {
        "slug": "babylon-5-symbols",
        "name": "Babylon 5 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Babylon 5.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Babylon 5."
    },
    {
        "slug": "babylon-5-controversies",
        "name": "Babylon 5 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Babylon 5.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Babylon 5 argumentative."
    },
    {
        "slug": "babylon-5-sources",
        "name": "Babylon 5 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Babylon 5.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Babylon 5."
    },
    {
        "slug": "babylon-5-geography",
        "name": "Babylon 5 geography",
        "type": "place",
        "short_description": "Broader geographic framing for Babylon 5.",
        "description": "Regions, routes, and spatial systems that situate Babylon 5 beyond single named places."
    },
    {
        "slug": "babylon-5-legacy",
        "name": "Babylon 5 legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Babylon 5.",
        "description": "How Babylon 5 continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "babylon-5",
        "babylon-5-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "babylon-5",
        "babylon-5-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "babylon-5",
        "babylon-5-places",
        "contains",
        "Babylon 5 places is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-events",
        "contains",
        "Babylon 5 events is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-objects",
        "contains",
        "Babylon 5 objects & artifacts is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-factions",
        "contains",
        "Babylon 5 factions & groups is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-concepts",
        "contains",
        "Babylon 5 concepts is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-eras",
        "contains",
        "Babylon 5 eras is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-works",
        "contains",
        "Babylon 5 works & media is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-symbols",
        "contains",
        "Babylon 5 symbols is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-controversies",
        "contains",
        "Babylon 5 controversies is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-sources",
        "contains",
        "Babylon 5 sources is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-geography",
        "contains",
        "Babylon 5 geography is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ],
    [
        "babylon-5",
        "babylon-5-legacy",
        "contains",
        "Babylon 5 legacy is a primary trailhead under Babylon 5.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
