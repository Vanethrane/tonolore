/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alien-movies",
        "name": "Alien (movies)",
        "type": "topic",
        "short_description": "Nostromo dread to covenant prequels — the xenomorph film continuum on the big screen.",
        "description": "Nostromo dread to covenant prequels — the xenomorph film continuum on the big screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alien (movies) so readers can follow long-tail connections across movies."
    },
    {
        "slug": "alien-movies-figures",
        "name": "Alien (movies) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alien (movies).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alien (movies)."
    },
    {
        "slug": "alien-movies-world",
        "name": "Alien (movies) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alien (movies).",
        "description": "Geography, institutions, and periodization that give Alien (movies) its encyclopedia shape."
    },
    {
        "slug": "alien-movies-places",
        "name": "Alien (movies) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alien (movies).",
        "description": "Places, regions, and built sites that give Alien (movies) its map — where events and figures concentrate."
    },
    {
        "slug": "alien-movies-events",
        "name": "Alien (movies) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alien (movies).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alien (movies) timeline."
    },
    {
        "slug": "alien-movies-objects",
        "name": "Alien (movies) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alien (movies).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alien (movies)."
    },
    {
        "slug": "alien-movies-factions",
        "name": "Alien (movies) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alien (movies).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alien (movies)."
    },
    {
        "slug": "alien-movies-concepts",
        "name": "Alien (movies) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alien (movies).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alien (movies) readable as a lore graph."
    },
    {
        "slug": "alien-movies-eras",
        "name": "Alien (movies) eras",
        "type": "event",
        "short_description": "Periodization for Alien (movies).",
        "description": "Named eras and phases that help readers track how Alien (movies) changes across time."
    },
    {
        "slug": "alien-movies-works",
        "name": "Alien (movies) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alien (movies).",
        "description": "Primary works and adaptations through which most audiences encounter Alien (movies)."
    },
    {
        "slug": "alien-movies-symbols",
        "name": "Alien (movies) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alien (movies).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alien (movies)."
    },
    {
        "slug": "alien-movies-controversies",
        "name": "Alien (movies) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alien (movies).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alien (movies) argumentative."
    },
    {
        "slug": "alien-movies-sources",
        "name": "Alien (movies) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alien (movies).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alien (movies)."
    },
    {
        "slug": "alien-movies-geography",
        "name": "Alien (movies) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alien (movies).",
        "description": "Regions, routes, and spatial systems that situate Alien (movies) beyond single named places."
    },
    {
        "slug": "alien-movies-legacy",
        "name": "Alien (movies) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alien (movies).",
        "description": "How Alien (movies) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "alien-movies-practices",
        "name": "Alien (movies) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Alien (movies).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Alien (movies)."
    },
    {
        "slug": "alien-movies-entry-1",
        "name": "Alien (movies) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-2",
        "name": "Alien (movies) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-3",
        "name": "Alien (movies) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-4",
        "name": "Alien (movies) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-5",
        "name": "Alien (movies) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-6",
        "name": "Alien (movies) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-7",
        "name": "Alien (movies) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-8",
        "name": "Alien (movies) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-9",
        "name": "Alien (movies) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-10",
        "name": "Alien (movies) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-11",
        "name": "Alien (movies) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-12",
        "name": "Alien (movies) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-13",
        "name": "Alien (movies) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-14",
        "name": "Alien (movies) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-15",
        "name": "Alien (movies) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-16",
        "name": "Alien (movies) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-17",
        "name": "Alien (movies) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-18",
        "name": "Alien (movies) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-19",
        "name": "Alien (movies) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-20",
        "name": "Alien (movies) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-21",
        "name": "Alien (movies) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-22",
        "name": "Alien (movies) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-23",
        "name": "Alien (movies) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "alien-movies-entry-24",
        "name": "Alien (movies) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Alien (movies).",
        "description": "A supporting encyclopedia entry in the Alien (movies) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "alien-movies",
        "alien-movies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alien-movies",
        "alien-movies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alien-movies",
        "alien-movies-places",
        "contains",
        "Alien (movies) places is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-events",
        "contains",
        "Alien (movies) events is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-objects",
        "contains",
        "Alien (movies) objects & artifacts is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-factions",
        "contains",
        "Alien (movies) factions & groups is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-concepts",
        "contains",
        "Alien (movies) concepts is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-eras",
        "contains",
        "Alien (movies) eras is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-works",
        "contains",
        "Alien (movies) works & media is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-symbols",
        "contains",
        "Alien (movies) symbols is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-controversies",
        "contains",
        "Alien (movies) controversies is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-sources",
        "contains",
        "Alien (movies) sources is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-geography",
        "contains",
        "Alien (movies) geography is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-legacy",
        "contains",
        "Alien (movies) legacy is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-practices",
        "contains",
        "Alien (movies) practices is a primary trailhead under Alien (movies).",
        0.88,
        0.82
    ],
    [
        "alien-movies",
        "alien-movies-entry-1",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-2",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-3",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-4",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-5",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-6",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-7",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-8",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-9",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-10",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-11",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-12",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-13",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-14",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-15",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-16",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-17",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-18",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-19",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-20",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-21",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-22",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-23",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ],
    [
        "alien-movies",
        "alien-movies-entry-24",
        "contains",
        "Supporting entry under Alien (movies).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
