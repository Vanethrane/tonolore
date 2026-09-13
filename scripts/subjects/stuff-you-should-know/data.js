/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stuff-you-should-know",
        "name": "Stuff You Should Know",
        "type": "topic",
        "short_description": "Explainer duos, how-things-work deep dives, and the long-running curiosity podcast template.",
        "description": "Explainer duos, how-things-work deep dives, and the long-running curiosity podcast template. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stuff You Should Know so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "stuff-you-should-know-figures",
        "name": "Stuff You Should Know figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stuff You Should Know.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-world",
        "name": "Stuff You Should Know world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stuff You Should Know.",
        "description": "Geography, institutions, and periodization that give Stuff You Should Know its encyclopedia shape."
    },
    {
        "slug": "stuff-you-should-know-places",
        "name": "Stuff You Should Know places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stuff You Should Know.",
        "description": "Places, regions, and built sites that give Stuff You Should Know its map — where events and figures concentrate."
    },
    {
        "slug": "stuff-you-should-know-events",
        "name": "Stuff You Should Know events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stuff You Should Know.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stuff You Should Know timeline."
    },
    {
        "slug": "stuff-you-should-know-objects",
        "name": "Stuff You Should Know objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stuff You Should Know.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-factions",
        "name": "Stuff You Should Know factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stuff You Should Know.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-concepts",
        "name": "Stuff You Should Know concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stuff You Should Know.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stuff You Should Know readable as a lore graph."
    },
    {
        "slug": "stuff-you-should-know-eras",
        "name": "Stuff You Should Know eras",
        "type": "event",
        "short_description": "Periodization for Stuff You Should Know.",
        "description": "Named eras and phases that help readers track how Stuff You Should Know changes across time."
    },
    {
        "slug": "stuff-you-should-know-works",
        "name": "Stuff You Should Know works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stuff You Should Know.",
        "description": "Primary works and adaptations through which most audiences encounter Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-symbols",
        "name": "Stuff You Should Know symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stuff You Should Know.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-controversies",
        "name": "Stuff You Should Know controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stuff You Should Know.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stuff You Should Know argumentative."
    },
    {
        "slug": "stuff-you-should-know-sources",
        "name": "Stuff You Should Know sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stuff You Should Know.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-geography",
        "name": "Stuff You Should Know geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stuff You Should Know.",
        "description": "Regions, routes, and spatial systems that situate Stuff You Should Know beyond single named places."
    },
    {
        "slug": "stuff-you-should-know-legacy",
        "name": "Stuff You Should Know legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stuff You Should Know.",
        "description": "How Stuff You Should Know continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stuff-you-should-know-practices",
        "name": "Stuff You Should Know practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stuff You Should Know.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stuff You Should Know."
    },
    {
        "slug": "stuff-you-should-know-entry-1",
        "name": "Stuff You Should Know entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-2",
        "name": "Stuff You Should Know entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-3",
        "name": "Stuff You Should Know entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-4",
        "name": "Stuff You Should Know entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-5",
        "name": "Stuff You Should Know entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-6",
        "name": "Stuff You Should Know entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-7",
        "name": "Stuff You Should Know entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-8",
        "name": "Stuff You Should Know entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-9",
        "name": "Stuff You Should Know entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-10",
        "name": "Stuff You Should Know entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-11",
        "name": "Stuff You Should Know entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-12",
        "name": "Stuff You Should Know entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-13",
        "name": "Stuff You Should Know entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-14",
        "name": "Stuff You Should Know entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-15",
        "name": "Stuff You Should Know entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-16",
        "name": "Stuff You Should Know entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-17",
        "name": "Stuff You Should Know entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-18",
        "name": "Stuff You Should Know entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-19",
        "name": "Stuff You Should Know entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-20",
        "name": "Stuff You Should Know entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-21",
        "name": "Stuff You Should Know entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-22",
        "name": "Stuff You Should Know entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-23",
        "name": "Stuff You Should Know entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuff-you-should-know-entry-24",
        "name": "Stuff You Should Know entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuff You Should Know.",
        "description": "A supporting encyclopedia entry in the Stuff You Should Know subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stuff-you-should-know",
        "stuff-you-should-know-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-places",
        "contains",
        "Stuff You Should Know places is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-events",
        "contains",
        "Stuff You Should Know events is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-objects",
        "contains",
        "Stuff You Should Know objects & artifacts is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-factions",
        "contains",
        "Stuff You Should Know factions & groups is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-concepts",
        "contains",
        "Stuff You Should Know concepts is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-eras",
        "contains",
        "Stuff You Should Know eras is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-works",
        "contains",
        "Stuff You Should Know works & media is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-symbols",
        "contains",
        "Stuff You Should Know symbols is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-controversies",
        "contains",
        "Stuff You Should Know controversies is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-sources",
        "contains",
        "Stuff You Should Know sources is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-geography",
        "contains",
        "Stuff You Should Know geography is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-legacy",
        "contains",
        "Stuff You Should Know legacy is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-practices",
        "contains",
        "Stuff You Should Know practices is a primary trailhead under Stuff You Should Know.",
        0.88,
        0.82
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-1",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-2",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-3",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-4",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-5",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-6",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-7",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-8",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-9",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-10",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-11",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-12",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-13",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-14",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-15",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-16",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-17",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-18",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-19",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-20",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-21",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-22",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-23",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ],
    [
        "stuff-you-should-know",
        "stuff-you-should-know-entry-24",
        "contains",
        "Supporting entry under Stuff You Should Know.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
