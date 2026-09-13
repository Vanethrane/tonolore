/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ottoman-sultans",
        "name": "Ottoman sultans",
        "type": "topic",
        "short_description": "Topkapı court, harem politics, and the padishahs who ruled a three-continent empire.",
        "description": "Topkapı court, harem politics, and the padishahs who ruled a three-continent empire. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ottoman sultans so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "ottoman-sultans-figures",
        "name": "Ottoman sultans figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ottoman sultans.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-world",
        "name": "Ottoman sultans world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ottoman sultans.",
        "description": "Geography, institutions, and periodization that give Ottoman sultans its encyclopedia shape."
    },
    {
        "slug": "ottoman-sultans-places",
        "name": "Ottoman sultans places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ottoman sultans.",
        "description": "Places, regions, and built sites that give Ottoman sultans its map — where events and figures concentrate."
    },
    {
        "slug": "ottoman-sultans-events",
        "name": "Ottoman sultans events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ottoman sultans.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ottoman sultans timeline."
    },
    {
        "slug": "ottoman-sultans-objects",
        "name": "Ottoman sultans objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ottoman sultans.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-factions",
        "name": "Ottoman sultans factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ottoman sultans.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-concepts",
        "name": "Ottoman sultans concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ottoman sultans.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ottoman sultans readable as a lore graph."
    },
    {
        "slug": "ottoman-sultans-eras",
        "name": "Ottoman sultans eras",
        "type": "event",
        "short_description": "Periodization for Ottoman sultans.",
        "description": "Named eras and phases that help readers track how Ottoman sultans changes across time."
    },
    {
        "slug": "ottoman-sultans-works",
        "name": "Ottoman sultans works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ottoman sultans.",
        "description": "Primary works and adaptations through which most audiences encounter Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-symbols",
        "name": "Ottoman sultans symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ottoman sultans.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-controversies",
        "name": "Ottoman sultans controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ottoman sultans.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ottoman sultans argumentative."
    },
    {
        "slug": "ottoman-sultans-sources",
        "name": "Ottoman sultans sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ottoman sultans.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-geography",
        "name": "Ottoman sultans geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ottoman sultans.",
        "description": "Regions, routes, and spatial systems that situate Ottoman sultans beyond single named places."
    },
    {
        "slug": "ottoman-sultans-legacy",
        "name": "Ottoman sultans legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ottoman sultans.",
        "description": "How Ottoman sultans continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ottoman-sultans-practices",
        "name": "Ottoman sultans practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ottoman sultans.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ottoman sultans."
    },
    {
        "slug": "ottoman-sultans-entry-1",
        "name": "Ottoman sultans entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-2",
        "name": "Ottoman sultans entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-3",
        "name": "Ottoman sultans entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-4",
        "name": "Ottoman sultans entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-5",
        "name": "Ottoman sultans entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-6",
        "name": "Ottoman sultans entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-7",
        "name": "Ottoman sultans entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-8",
        "name": "Ottoman sultans entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-9",
        "name": "Ottoman sultans entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-10",
        "name": "Ottoman sultans entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-11",
        "name": "Ottoman sultans entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-12",
        "name": "Ottoman sultans entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-13",
        "name": "Ottoman sultans entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-14",
        "name": "Ottoman sultans entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-15",
        "name": "Ottoman sultans entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-16",
        "name": "Ottoman sultans entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-17",
        "name": "Ottoman sultans entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-18",
        "name": "Ottoman sultans entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-19",
        "name": "Ottoman sultans entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-20",
        "name": "Ottoman sultans entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-21",
        "name": "Ottoman sultans entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-22",
        "name": "Ottoman sultans entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-23",
        "name": "Ottoman sultans entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ottoman-sultans-entry-24",
        "name": "Ottoman sultans entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ottoman sultans.",
        "description": "A supporting encyclopedia entry in the Ottoman sultans subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ottoman-sultans",
        "ottoman-sultans-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-places",
        "contains",
        "Ottoman sultans places is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-events",
        "contains",
        "Ottoman sultans events is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-objects",
        "contains",
        "Ottoman sultans objects & artifacts is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-factions",
        "contains",
        "Ottoman sultans factions & groups is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-concepts",
        "contains",
        "Ottoman sultans concepts is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-eras",
        "contains",
        "Ottoman sultans eras is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-works",
        "contains",
        "Ottoman sultans works & media is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-symbols",
        "contains",
        "Ottoman sultans symbols is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-controversies",
        "contains",
        "Ottoman sultans controversies is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-sources",
        "contains",
        "Ottoman sultans sources is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-geography",
        "contains",
        "Ottoman sultans geography is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-legacy",
        "contains",
        "Ottoman sultans legacy is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-practices",
        "contains",
        "Ottoman sultans practices is a primary trailhead under Ottoman sultans.",
        0.88,
        0.82
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-1",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-2",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-3",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-4",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-5",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-6",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-7",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-8",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-9",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-10",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-11",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-12",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-13",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-14",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-15",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-16",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-17",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-18",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-19",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-20",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-21",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-22",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-23",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ],
    [
        "ottoman-sultans",
        "ottoman-sultans-entry-24",
        "contains",
        "Supporting entry under Ottoman sultans.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
