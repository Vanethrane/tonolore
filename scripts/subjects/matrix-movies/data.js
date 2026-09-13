/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "matrix-movies",
        "name": "The Matrix (movies)",
        "type": "topic",
        "short_description": "Bullet time, Zion, and the Wachowskis’ simulation saga across sequels.",
        "description": "Bullet time, Zion, and the Wachowskis’ simulation saga across sequels. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Matrix (movies) so readers can follow long-tail connections across movies."
    },
    {
        "slug": "matrix-movies-figures",
        "name": "The Matrix (movies) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Matrix (movies).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-world",
        "name": "The Matrix (movies) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Matrix (movies).",
        "description": "Geography, institutions, and periodization that give The Matrix (movies) its encyclopedia shape."
    },
    {
        "slug": "matrix-movies-places",
        "name": "The Matrix (movies) places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Matrix (movies).",
        "description": "Places, regions, and built sites that give The Matrix (movies) its map — where events and figures concentrate."
    },
    {
        "slug": "matrix-movies-events",
        "name": "The Matrix (movies) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Matrix (movies).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Matrix (movies) timeline."
    },
    {
        "slug": "matrix-movies-objects",
        "name": "The Matrix (movies) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Matrix (movies).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-factions",
        "name": "The Matrix (movies) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Matrix (movies).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-concepts",
        "name": "The Matrix (movies) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Matrix (movies).",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Matrix (movies) readable as a lore graph."
    },
    {
        "slug": "matrix-movies-eras",
        "name": "The Matrix (movies) eras",
        "type": "event",
        "short_description": "Periodization for The Matrix (movies).",
        "description": "Named eras and phases that help readers track how The Matrix (movies) changes across time."
    },
    {
        "slug": "matrix-movies-works",
        "name": "The Matrix (movies) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Matrix (movies).",
        "description": "Primary works and adaptations through which most audiences encounter The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-symbols",
        "name": "The Matrix (movies) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Matrix (movies).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-controversies",
        "name": "The Matrix (movies) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Matrix (movies).",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Matrix (movies) argumentative."
    },
    {
        "slug": "matrix-movies-sources",
        "name": "The Matrix (movies) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Matrix (movies).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-geography",
        "name": "The Matrix (movies) geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Matrix (movies).",
        "description": "Regions, routes, and spatial systems that situate The Matrix (movies) beyond single named places."
    },
    {
        "slug": "matrix-movies-legacy",
        "name": "The Matrix (movies) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Matrix (movies).",
        "description": "How The Matrix (movies) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "matrix-movies-practices",
        "name": "The Matrix (movies) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Matrix (movies).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Matrix (movies)."
    },
    {
        "slug": "matrix-movies-entry-1",
        "name": "The Matrix (movies) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-2",
        "name": "The Matrix (movies) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-3",
        "name": "The Matrix (movies) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-4",
        "name": "The Matrix (movies) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-5",
        "name": "The Matrix (movies) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-6",
        "name": "The Matrix (movies) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-7",
        "name": "The Matrix (movies) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-8",
        "name": "The Matrix (movies) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-9",
        "name": "The Matrix (movies) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-10",
        "name": "The Matrix (movies) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-11",
        "name": "The Matrix (movies) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-12",
        "name": "The Matrix (movies) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-13",
        "name": "The Matrix (movies) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-14",
        "name": "The Matrix (movies) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-15",
        "name": "The Matrix (movies) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-16",
        "name": "The Matrix (movies) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-17",
        "name": "The Matrix (movies) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-18",
        "name": "The Matrix (movies) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-19",
        "name": "The Matrix (movies) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-20",
        "name": "The Matrix (movies) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-21",
        "name": "The Matrix (movies) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-22",
        "name": "The Matrix (movies) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-23",
        "name": "The Matrix (movies) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "matrix-movies-entry-24",
        "name": "The Matrix (movies) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Matrix (movies).",
        "description": "A supporting encyclopedia entry in the The Matrix (movies) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "matrix-movies",
        "matrix-movies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "matrix-movies",
        "matrix-movies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "matrix-movies",
        "matrix-movies-places",
        "contains",
        "The Matrix (movies) places is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-events",
        "contains",
        "The Matrix (movies) events is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-objects",
        "contains",
        "The Matrix (movies) objects & artifacts is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-factions",
        "contains",
        "The Matrix (movies) factions & groups is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-concepts",
        "contains",
        "The Matrix (movies) concepts is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-eras",
        "contains",
        "The Matrix (movies) eras is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-works",
        "contains",
        "The Matrix (movies) works & media is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-symbols",
        "contains",
        "The Matrix (movies) symbols is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-controversies",
        "contains",
        "The Matrix (movies) controversies is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-sources",
        "contains",
        "The Matrix (movies) sources is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-geography",
        "contains",
        "The Matrix (movies) geography is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-legacy",
        "contains",
        "The Matrix (movies) legacy is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-practices",
        "contains",
        "The Matrix (movies) practices is a primary trailhead under The Matrix (movies).",
        0.88,
        0.82
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-1",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-2",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-3",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-4",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-5",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-6",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-7",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-8",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-9",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-10",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-11",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-12",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-13",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-14",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-15",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-16",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-17",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-18",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-19",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-20",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-21",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-22",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-23",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ],
    [
        "matrix-movies",
        "matrix-movies-entry-24",
        "contains",
        "Supporting entry under The Matrix (movies).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
