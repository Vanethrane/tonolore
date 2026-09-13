/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "terminator-movies",
        "name": "Terminator (movies)",
        "type": "topic",
        "short_description": "Judgment Day timelines and the cyborg hunter films that defined 80s–90s action SF.",
        "description": "Judgment Day timelines and the cyborg hunter films that defined 80s–90s action SF. This Ton-o-Lore subject maps people, places, events, and ideas tied to Terminator (movies) so readers can follow long-tail connections across movies."
    },
    {
        "slug": "terminator-movies-figures",
        "name": "Terminator (movies) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Terminator (movies).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Terminator (movies)."
    },
    {
        "slug": "terminator-movies-world",
        "name": "Terminator (movies) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Terminator (movies).",
        "description": "Geography, institutions, and periodization that give Terminator (movies) its encyclopedia shape."
    },
    {
        "slug": "terminator-movies-places",
        "name": "Terminator (movies) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Terminator (movies).",
        "description": "Places, regions, and built sites that give Terminator (movies) its map — where events and figures concentrate."
    },
    {
        "slug": "terminator-movies-events",
        "name": "Terminator (movies) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Terminator (movies).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Terminator (movies) timeline."
    },
    {
        "slug": "terminator-movies-objects",
        "name": "Terminator (movies) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Terminator (movies).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Terminator (movies)."
    },
    {
        "slug": "terminator-movies-factions",
        "name": "Terminator (movies) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Terminator (movies).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Terminator (movies)."
    },
    {
        "slug": "terminator-movies-concepts",
        "name": "Terminator (movies) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Terminator (movies).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Terminator (movies) readable as a lore graph."
    },
    {
        "slug": "terminator-movies-eras",
        "name": "Terminator (movies) eras",
        "type": "event",
        "short_description": "Periodization for Terminator (movies).",
        "description": "Named eras and phases that help readers track how Terminator (movies) changes across time."
    },
    {
        "slug": "terminator-movies-works",
        "name": "Terminator (movies) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Terminator (movies).",
        "description": "Primary works and adaptations through which most audiences encounter Terminator (movies)."
    },
    {
        "slug": "terminator-movies-symbols",
        "name": "Terminator (movies) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Terminator (movies).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Terminator (movies)."
    },
    {
        "slug": "terminator-movies-controversies",
        "name": "Terminator (movies) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Terminator (movies).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Terminator (movies) argumentative."
    },
    {
        "slug": "terminator-movies-sources",
        "name": "Terminator (movies) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Terminator (movies).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Terminator (movies)."
    },
    {
        "slug": "terminator-movies-geography",
        "name": "Terminator (movies) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Terminator (movies).",
        "description": "Regions, routes, and spatial systems that situate Terminator (movies) beyond single named places."
    },
    {
        "slug": "terminator-movies-legacy",
        "name": "Terminator (movies) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Terminator (movies).",
        "description": "How Terminator (movies) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "terminator-movies-practices",
        "name": "Terminator (movies) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Terminator (movies).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Terminator (movies)."
    },
    {
        "slug": "terminator-movies-entry-1",
        "name": "Terminator (movies) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-2",
        "name": "Terminator (movies) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-3",
        "name": "Terminator (movies) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-4",
        "name": "Terminator (movies) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-5",
        "name": "Terminator (movies) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-6",
        "name": "Terminator (movies) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-7",
        "name": "Terminator (movies) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-8",
        "name": "Terminator (movies) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-9",
        "name": "Terminator (movies) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-10",
        "name": "Terminator (movies) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-11",
        "name": "Terminator (movies) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-12",
        "name": "Terminator (movies) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-13",
        "name": "Terminator (movies) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-14",
        "name": "Terminator (movies) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-15",
        "name": "Terminator (movies) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-16",
        "name": "Terminator (movies) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-17",
        "name": "Terminator (movies) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-18",
        "name": "Terminator (movies) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-19",
        "name": "Terminator (movies) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-20",
        "name": "Terminator (movies) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-21",
        "name": "Terminator (movies) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-22",
        "name": "Terminator (movies) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-23",
        "name": "Terminator (movies) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "terminator-movies-entry-24",
        "name": "Terminator (movies) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Terminator (movies).",
        "description": "A supporting encyclopedia entry in the Terminator (movies) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "terminator-movies",
        "terminator-movies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "terminator-movies",
        "terminator-movies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "terminator-movies",
        "terminator-movies-places",
        "contains",
        "Terminator (movies) places is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-events",
        "contains",
        "Terminator (movies) events is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-objects",
        "contains",
        "Terminator (movies) objects & artifacts is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-factions",
        "contains",
        "Terminator (movies) factions & groups is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-concepts",
        "contains",
        "Terminator (movies) concepts is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-eras",
        "contains",
        "Terminator (movies) eras is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-works",
        "contains",
        "Terminator (movies) works & media is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-symbols",
        "contains",
        "Terminator (movies) symbols is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-controversies",
        "contains",
        "Terminator (movies) controversies is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-sources",
        "contains",
        "Terminator (movies) sources is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-geography",
        "contains",
        "Terminator (movies) geography is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-legacy",
        "contains",
        "Terminator (movies) legacy is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-practices",
        "contains",
        "Terminator (movies) practices is a primary trailhead under Terminator (movies).",
        0.88,
        0.82
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-1",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-2",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-3",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-4",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-5",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-6",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-7",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-8",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-9",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-10",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-11",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-12",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-13",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-14",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-15",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-16",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-17",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-18",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-19",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-20",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-21",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-22",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-23",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ],
    [
        "terminator-movies",
        "terminator-movies-entry-24",
        "contains",
        "Supporting entry under Terminator (movies).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
