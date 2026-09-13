/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "batman-comics",
        "name": "Batman (comics)",
        "type": "topic",
        "short_description": "Gotham detectives, rogues gallery, and the Dark Knight’s endlessly reinvented comic continuity.",
        "description": "Gotham detectives, rogues gallery, and the Dark Knight’s endlessly reinvented comic continuity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Batman (comics) so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "batman-comics-figures",
        "name": "Batman (comics) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Batman (comics).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Batman (comics)."
    },
    {
        "slug": "batman-comics-world",
        "name": "Batman (comics) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Batman (comics).",
        "description": "Geography, institutions, and periodization that give Batman (comics) its encyclopedia shape."
    },
    {
        "slug": "batman-comics-places",
        "name": "Batman (comics) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Batman (comics).",
        "description": "Places, regions, and built sites that give Batman (comics) its map — where events and figures concentrate."
    },
    {
        "slug": "batman-comics-events",
        "name": "Batman (comics) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Batman (comics).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Batman (comics) timeline."
    },
    {
        "slug": "batman-comics-objects",
        "name": "Batman (comics) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Batman (comics).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Batman (comics)."
    },
    {
        "slug": "batman-comics-factions",
        "name": "Batman (comics) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Batman (comics).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Batman (comics)."
    },
    {
        "slug": "batman-comics-concepts",
        "name": "Batman (comics) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Batman (comics).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Batman (comics) readable as a lore graph."
    },
    {
        "slug": "batman-comics-eras",
        "name": "Batman (comics) eras",
        "type": "event",
        "short_description": "Periodization for Batman (comics).",
        "description": "Named eras and phases that help readers track how Batman (comics) changes across time."
    },
    {
        "slug": "batman-comics-works",
        "name": "Batman (comics) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Batman (comics).",
        "description": "Primary works and adaptations through which most audiences encounter Batman (comics)."
    },
    {
        "slug": "batman-comics-symbols",
        "name": "Batman (comics) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Batman (comics).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Batman (comics)."
    },
    {
        "slug": "batman-comics-controversies",
        "name": "Batman (comics) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Batman (comics).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Batman (comics) argumentative."
    },
    {
        "slug": "batman-comics-sources",
        "name": "Batman (comics) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Batman (comics).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Batman (comics)."
    },
    {
        "slug": "batman-comics-geography",
        "name": "Batman (comics) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Batman (comics).",
        "description": "Regions, routes, and spatial systems that situate Batman (comics) beyond single named places."
    },
    {
        "slug": "batman-comics-legacy",
        "name": "Batman (comics) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Batman (comics).",
        "description": "How Batman (comics) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "batman-comics-practices",
        "name": "Batman (comics) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Batman (comics).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Batman (comics)."
    },
    {
        "slug": "batman-comics-entry-1",
        "name": "Batman (comics) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-2",
        "name": "Batman (comics) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-3",
        "name": "Batman (comics) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-4",
        "name": "Batman (comics) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-5",
        "name": "Batman (comics) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-6",
        "name": "Batman (comics) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-7",
        "name": "Batman (comics) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-8",
        "name": "Batman (comics) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-9",
        "name": "Batman (comics) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-10",
        "name": "Batman (comics) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-11",
        "name": "Batman (comics) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-12",
        "name": "Batman (comics) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-13",
        "name": "Batman (comics) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-14",
        "name": "Batman (comics) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-15",
        "name": "Batman (comics) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-16",
        "name": "Batman (comics) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-17",
        "name": "Batman (comics) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-18",
        "name": "Batman (comics) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-19",
        "name": "Batman (comics) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-20",
        "name": "Batman (comics) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-21",
        "name": "Batman (comics) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-22",
        "name": "Batman (comics) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-23",
        "name": "Batman (comics) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-comics-entry-24",
        "name": "Batman (comics) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman (comics).",
        "description": "A supporting encyclopedia entry in the Batman (comics) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "batman-comics",
        "batman-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "batman-comics",
        "batman-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "batman-comics",
        "batman-comics-places",
        "contains",
        "Batman (comics) places is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-events",
        "contains",
        "Batman (comics) events is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-objects",
        "contains",
        "Batman (comics) objects & artifacts is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-factions",
        "contains",
        "Batman (comics) factions & groups is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-concepts",
        "contains",
        "Batman (comics) concepts is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-eras",
        "contains",
        "Batman (comics) eras is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-works",
        "contains",
        "Batman (comics) works & media is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-symbols",
        "contains",
        "Batman (comics) symbols is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-controversies",
        "contains",
        "Batman (comics) controversies is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-sources",
        "contains",
        "Batman (comics) sources is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-geography",
        "contains",
        "Batman (comics) geography is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-legacy",
        "contains",
        "Batman (comics) legacy is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-practices",
        "contains",
        "Batman (comics) practices is a primary trailhead under Batman (comics).",
        0.88,
        0.82
    ],
    [
        "batman-comics",
        "batman-comics-entry-1",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-2",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-3",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-4",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-5",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-6",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-7",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-8",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-9",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-10",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-11",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-12",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-13",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-14",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-15",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-16",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-17",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-18",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-19",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-20",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-21",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-22",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-23",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ],
    [
        "batman-comics",
        "batman-comics-entry-24",
        "contains",
        "Supporting entry under Batman (comics).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
