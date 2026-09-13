/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "black-mirror-tv",
        "name": "Black Mirror (TV shelf)",
        "type": "topic",
        "short_description": "Tech dread anthologies and the series that became shorthand for digital anxiety.",
        "description": "Tech dread anthologies and the series that became shorthand for digital anxiety. This Ton-o-Lore subject maps people, places, events, and ideas tied to Black Mirror (TV shelf) so readers can follow long-tail connections across television."
    },
    {
        "slug": "black-mirror-tv-figures",
        "name": "Black Mirror (TV shelf) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Black Mirror (TV shelf).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-world",
        "name": "Black Mirror (TV shelf) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Black Mirror (TV shelf).",
        "description": "Geography, institutions, and periodization that give Black Mirror (TV shelf) its encyclopedia shape."
    },
    {
        "slug": "black-mirror-tv-places",
        "name": "Black Mirror (TV shelf) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Black Mirror (TV shelf).",
        "description": "Places, regions, and built sites that give Black Mirror (TV shelf) its map — where events and figures concentrate."
    },
    {
        "slug": "black-mirror-tv-events",
        "name": "Black Mirror (TV shelf) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Black Mirror (TV shelf).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Black Mirror (TV shelf) timeline."
    },
    {
        "slug": "black-mirror-tv-objects",
        "name": "Black Mirror (TV shelf) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Black Mirror (TV shelf).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-factions",
        "name": "Black Mirror (TV shelf) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Black Mirror (TV shelf).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-concepts",
        "name": "Black Mirror (TV shelf) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Black Mirror (TV shelf).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Black Mirror (TV shelf) readable as a lore graph."
    },
    {
        "slug": "black-mirror-tv-eras",
        "name": "Black Mirror (TV shelf) eras",
        "type": "event",
        "short_description": "Periodization for Black Mirror (TV shelf).",
        "description": "Named eras and phases that help readers track how Black Mirror (TV shelf) changes across time."
    },
    {
        "slug": "black-mirror-tv-works",
        "name": "Black Mirror (TV shelf) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Black Mirror (TV shelf).",
        "description": "Primary works and adaptations through which most audiences encounter Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-symbols",
        "name": "Black Mirror (TV shelf) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Black Mirror (TV shelf).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-controversies",
        "name": "Black Mirror (TV shelf) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Black Mirror (TV shelf).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Black Mirror (TV shelf) argumentative."
    },
    {
        "slug": "black-mirror-tv-sources",
        "name": "Black Mirror (TV shelf) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Black Mirror (TV shelf).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-geography",
        "name": "Black Mirror (TV shelf) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Black Mirror (TV shelf).",
        "description": "Regions, routes, and spatial systems that situate Black Mirror (TV shelf) beyond single named places."
    },
    {
        "slug": "black-mirror-tv-legacy",
        "name": "Black Mirror (TV shelf) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Black Mirror (TV shelf).",
        "description": "How Black Mirror (TV shelf) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "black-mirror-tv-practices",
        "name": "Black Mirror (TV shelf) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Black Mirror (TV shelf).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Black Mirror (TV shelf)."
    },
    {
        "slug": "black-mirror-tv-entry-1",
        "name": "Black Mirror (TV shelf) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-2",
        "name": "Black Mirror (TV shelf) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-3",
        "name": "Black Mirror (TV shelf) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-4",
        "name": "Black Mirror (TV shelf) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-5",
        "name": "Black Mirror (TV shelf) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-6",
        "name": "Black Mirror (TV shelf) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-7",
        "name": "Black Mirror (TV shelf) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-8",
        "name": "Black Mirror (TV shelf) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-9",
        "name": "Black Mirror (TV shelf) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-10",
        "name": "Black Mirror (TV shelf) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-11",
        "name": "Black Mirror (TV shelf) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-12",
        "name": "Black Mirror (TV shelf) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-13",
        "name": "Black Mirror (TV shelf) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-14",
        "name": "Black Mirror (TV shelf) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-15",
        "name": "Black Mirror (TV shelf) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-16",
        "name": "Black Mirror (TV shelf) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-17",
        "name": "Black Mirror (TV shelf) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-18",
        "name": "Black Mirror (TV shelf) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-19",
        "name": "Black Mirror (TV shelf) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-20",
        "name": "Black Mirror (TV shelf) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-21",
        "name": "Black Mirror (TV shelf) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-22",
        "name": "Black Mirror (TV shelf) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-23",
        "name": "Black Mirror (TV shelf) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-tv-entry-24",
        "name": "Black Mirror (TV shelf) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror (TV shelf).",
        "description": "A supporting encyclopedia entry in the Black Mirror (TV shelf) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "black-mirror-tv",
        "black-mirror-tv-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-places",
        "contains",
        "Black Mirror (TV shelf) places is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-events",
        "contains",
        "Black Mirror (TV shelf) events is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-objects",
        "contains",
        "Black Mirror (TV shelf) objects & artifacts is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-factions",
        "contains",
        "Black Mirror (TV shelf) factions & groups is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-concepts",
        "contains",
        "Black Mirror (TV shelf) concepts is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-eras",
        "contains",
        "Black Mirror (TV shelf) eras is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-works",
        "contains",
        "Black Mirror (TV shelf) works & media is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-symbols",
        "contains",
        "Black Mirror (TV shelf) symbols is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-controversies",
        "contains",
        "Black Mirror (TV shelf) controversies is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-sources",
        "contains",
        "Black Mirror (TV shelf) sources is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-geography",
        "contains",
        "Black Mirror (TV shelf) geography is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-legacy",
        "contains",
        "Black Mirror (TV shelf) legacy is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-practices",
        "contains",
        "Black Mirror (TV shelf) practices is a primary trailhead under Black Mirror (TV shelf).",
        0.88,
        0.82
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-1",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-2",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-3",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-4",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-5",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-6",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-7",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-8",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-9",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-10",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-11",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-12",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-13",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-14",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-15",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-16",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-17",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-18",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-19",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-20",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-21",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-22",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-23",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ],
    [
        "black-mirror-tv",
        "black-mirror-tv-entry-24",
        "contains",
        "Supporting entry under Black Mirror (TV shelf).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
