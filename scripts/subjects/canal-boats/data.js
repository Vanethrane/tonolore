/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "canal-boats",
        "name": "Canal boats & barges",
        "type": "topic",
        "short_description": "Towpaths, inland freight, and the slow water highways of industrializing nations.",
        "description": "Towpaths, inland freight, and the slow water highways of industrializing nations. This Ton-o-Lore subject maps people, places, events, and ideas tied to Canal boats & barges so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "canal-boats-figures",
        "name": "Canal boats & barges figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Canal boats & barges.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Canal boats & barges."
    },
    {
        "slug": "canal-boats-world",
        "name": "Canal boats & barges world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Canal boats & barges.",
        "description": "Geography, institutions, and periodization that give Canal boats & barges its encyclopedia shape."
    },
    {
        "slug": "canal-boats-places",
        "name": "Canal boats & barges places",
        "type": "place",
        "short_description": "Locations and geographies that frame Canal boats & barges.",
        "description": "Places, regions, and built sites that give Canal boats & barges its map — where events and figures concentrate."
    },
    {
        "slug": "canal-boats-events",
        "name": "Canal boats & barges events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Canal boats & barges.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Canal boats & barges timeline."
    },
    {
        "slug": "canal-boats-objects",
        "name": "Canal boats & barges objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Canal boats & barges.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Canal boats & barges."
    },
    {
        "slug": "canal-boats-factions",
        "name": "Canal boats & barges factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Canal boats & barges.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Canal boats & barges."
    },
    {
        "slug": "canal-boats-concepts",
        "name": "Canal boats & barges concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Canal boats & barges.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Canal boats & barges readable as a lore graph."
    },
    {
        "slug": "canal-boats-eras",
        "name": "Canal boats & barges eras",
        "type": "event",
        "short_description": "Periodization for Canal boats & barges.",
        "description": "Named eras and phases that help readers track how Canal boats & barges changes across time."
    },
    {
        "slug": "canal-boats-works",
        "name": "Canal boats & barges works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Canal boats & barges.",
        "description": "Primary works and adaptations through which most audiences encounter Canal boats & barges."
    },
    {
        "slug": "canal-boats-symbols",
        "name": "Canal boats & barges symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Canal boats & barges.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Canal boats & barges."
    },
    {
        "slug": "canal-boats-controversies",
        "name": "Canal boats & barges controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Canal boats & barges.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Canal boats & barges argumentative."
    },
    {
        "slug": "canal-boats-sources",
        "name": "Canal boats & barges sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Canal boats & barges.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Canal boats & barges."
    },
    {
        "slug": "canal-boats-geography",
        "name": "Canal boats & barges geography",
        "type": "place",
        "short_description": "Broader geographic framing for Canal boats & barges.",
        "description": "Regions, routes, and spatial systems that situate Canal boats & barges beyond single named places."
    },
    {
        "slug": "canal-boats-legacy",
        "name": "Canal boats & barges legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Canal boats & barges.",
        "description": "How Canal boats & barges continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "canal-boats-practices",
        "name": "Canal boats & barges practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Canal boats & barges.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Canal boats & barges."
    },
    {
        "slug": "canal-boats-entry-1",
        "name": "Canal boats & barges entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-2",
        "name": "Canal boats & barges entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-3",
        "name": "Canal boats & barges entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-4",
        "name": "Canal boats & barges entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-5",
        "name": "Canal boats & barges entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-6",
        "name": "Canal boats & barges entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-7",
        "name": "Canal boats & barges entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-8",
        "name": "Canal boats & barges entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-9",
        "name": "Canal boats & barges entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-10",
        "name": "Canal boats & barges entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-11",
        "name": "Canal boats & barges entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-12",
        "name": "Canal boats & barges entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-13",
        "name": "Canal boats & barges entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-14",
        "name": "Canal boats & barges entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-15",
        "name": "Canal boats & barges entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-16",
        "name": "Canal boats & barges entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-17",
        "name": "Canal boats & barges entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-18",
        "name": "Canal boats & barges entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-19",
        "name": "Canal boats & barges entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-20",
        "name": "Canal boats & barges entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-21",
        "name": "Canal boats & barges entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-22",
        "name": "Canal boats & barges entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-23",
        "name": "Canal boats & barges entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-boats-entry-24",
        "name": "Canal boats & barges entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal boats & barges.",
        "description": "A supporting encyclopedia entry in the Canal boats & barges subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "canal-boats",
        "canal-boats-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "canal-boats",
        "canal-boats-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "canal-boats",
        "canal-boats-places",
        "contains",
        "Canal boats & barges places is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-events",
        "contains",
        "Canal boats & barges events is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-objects",
        "contains",
        "Canal boats & barges objects & artifacts is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-factions",
        "contains",
        "Canal boats & barges factions & groups is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-concepts",
        "contains",
        "Canal boats & barges concepts is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-eras",
        "contains",
        "Canal boats & barges eras is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-works",
        "contains",
        "Canal boats & barges works & media is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-symbols",
        "contains",
        "Canal boats & barges symbols is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-controversies",
        "contains",
        "Canal boats & barges controversies is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-sources",
        "contains",
        "Canal boats & barges sources is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-geography",
        "contains",
        "Canal boats & barges geography is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-legacy",
        "contains",
        "Canal boats & barges legacy is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-practices",
        "contains",
        "Canal boats & barges practices is a primary trailhead under Canal boats & barges.",
        0.88,
        0.82
    ],
    [
        "canal-boats",
        "canal-boats-entry-1",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-2",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-3",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-4",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-5",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-6",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-7",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-8",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-9",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-10",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-11",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-12",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-13",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-14",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-15",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-16",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-17",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-18",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-19",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-20",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-21",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-22",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-23",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ],
    [
        "canal-boats",
        "canal-boats-entry-24",
        "contains",
        "Supporting entry under Canal boats & barges.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
