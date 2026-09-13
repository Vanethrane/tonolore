/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "coffee",
        "name": "Coffee history & culture",
        "type": "topic",
        "short_description": "Origins, regions, varieties, companies, cafés, inventions, and the personalities who shaped coffee culture.",
        "description": "Origins, regions, varieties, companies, cafés, inventions, and the personalities who shaped coffee culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to coffee history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "coffee-figures",
        "name": "Coffee history & culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Coffee history & culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Coffee history & culture."
    },
    {
        "slug": "coffee-world",
        "name": "Coffee history & culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Coffee history & culture.",
        "description": "Geography, institutions, and periodization that give Coffee history & culture its encyclopedia shape."
    },
    {
        "slug": "coffee-places",
        "name": "Coffee places",
        "type": "place",
        "short_description": "Locations and geographies that frame Coffee.",
        "description": "Places, regions, and built sites that give Coffee its map — where events and figures concentrate."
    },
    {
        "slug": "coffee-events",
        "name": "Coffee events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Coffee.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Coffee timeline."
    },
    {
        "slug": "coffee-objects",
        "name": "Coffee objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Coffee.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Coffee."
    },
    {
        "slug": "coffee-factions",
        "name": "Coffee factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Coffee.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Coffee."
    },
    {
        "slug": "coffee-concepts",
        "name": "Coffee concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Coffee.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Coffee readable as a lore graph."
    },
    {
        "slug": "coffee-eras",
        "name": "Coffee eras",
        "type": "event",
        "short_description": "Periodization for Coffee.",
        "description": "Named eras and phases that help readers track how Coffee changes across time."
    },
    {
        "slug": "coffee-works",
        "name": "Coffee works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Coffee.",
        "description": "Primary works and adaptations through which most audiences encounter Coffee."
    },
    {
        "slug": "coffee-symbols",
        "name": "Coffee symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Coffee.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Coffee."
    },
    {
        "slug": "coffee-controversies",
        "name": "Coffee controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Coffee.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Coffee argumentative."
    },
    {
        "slug": "coffee-sources",
        "name": "Coffee sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Coffee.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Coffee."
    },
    {
        "slug": "coffee-geography",
        "name": "Coffee geography",
        "type": "place",
        "short_description": "Broader geographic framing for Coffee.",
        "description": "Regions, routes, and spatial systems that situate Coffee beyond single named places."
    },
    {
        "slug": "coffee-legacy",
        "name": "Coffee legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Coffee.",
        "description": "How Coffee continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "coffee-practices",
        "name": "Coffee history & culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Coffee history & culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Coffee history & culture."
    },
    {
        "slug": "coffee-entry-1",
        "name": "Coffee history & culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-2",
        "name": "Coffee history & culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-3",
        "name": "Coffee history & culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-4",
        "name": "Coffee history & culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-5",
        "name": "Coffee history & culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-6",
        "name": "Coffee history & culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-7",
        "name": "Coffee history & culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-8",
        "name": "Coffee history & culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-9",
        "name": "Coffee history & culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-10",
        "name": "Coffee history & culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-11",
        "name": "Coffee history & culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-12",
        "name": "Coffee history & culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-13",
        "name": "Coffee history & culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-14",
        "name": "Coffee history & culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-15",
        "name": "Coffee history & culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-16",
        "name": "Coffee history & culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-17",
        "name": "Coffee history & culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-18",
        "name": "Coffee history & culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-19",
        "name": "Coffee history & culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-20",
        "name": "Coffee history & culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-21",
        "name": "Coffee history & culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-22",
        "name": "Coffee history & culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-23",
        "name": "Coffee history & culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffee-entry-24",
        "name": "Coffee history & culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffee history & culture.",
        "description": "A supporting encyclopedia entry in the Coffee history & culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "coffee",
        "coffee-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "coffee",
        "coffee-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "coffee",
        "coffee-places",
        "contains",
        "Coffee places is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-events",
        "contains",
        "Coffee events is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-objects",
        "contains",
        "Coffee objects & artifacts is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-factions",
        "contains",
        "Coffee factions & groups is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-concepts",
        "contains",
        "Coffee concepts is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-eras",
        "contains",
        "Coffee eras is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-works",
        "contains",
        "Coffee works & media is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-symbols",
        "contains",
        "Coffee symbols is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-controversies",
        "contains",
        "Coffee controversies is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-sources",
        "contains",
        "Coffee sources is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-geography",
        "contains",
        "Coffee geography is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-legacy",
        "contains",
        "Coffee legacy is a primary trailhead under Coffee.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-practices",
        "contains",
        "Coffee history & culture practices is a primary trailhead under Coffee history & culture.",
        0.88,
        0.82
    ],
    [
        "coffee",
        "coffee-entry-1",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-2",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-3",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-4",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-5",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-6",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-7",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-8",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-9",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-10",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-11",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-12",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-13",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-14",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-15",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-16",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-17",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-18",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-19",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-20",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-21",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-22",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-23",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ],
    [
        "coffee",
        "coffee-entry-24",
        "contains",
        "Supporting entry under Coffee history & culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
