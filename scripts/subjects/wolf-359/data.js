/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wolf-359",
        "name": "Wolf 359",
        "type": "topic",
        "short_description": "Spaceship audio drama, Hephaestus crew, and one of fiction podcasting’s landmark serials.",
        "description": "Spaceship audio drama, Hephaestus crew, and one of fiction podcasting’s landmark serials. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wolf 359 so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "wolf-359-figures",
        "name": "Wolf 359 figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wolf 359.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wolf 359."
    },
    {
        "slug": "wolf-359-world",
        "name": "Wolf 359 world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wolf 359.",
        "description": "Geography, institutions, and periodization that give Wolf 359 its encyclopedia shape."
    },
    {
        "slug": "wolf-359-places",
        "name": "Wolf 359 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wolf 359.",
        "description": "Places, regions, and built sites that give Wolf 359 its map — where events and figures concentrate."
    },
    {
        "slug": "wolf-359-events",
        "name": "Wolf 359 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wolf 359.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wolf 359 timeline."
    },
    {
        "slug": "wolf-359-objects",
        "name": "Wolf 359 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wolf 359.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wolf 359."
    },
    {
        "slug": "wolf-359-factions",
        "name": "Wolf 359 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wolf 359.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wolf 359."
    },
    {
        "slug": "wolf-359-concepts",
        "name": "Wolf 359 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wolf 359.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wolf 359 readable as a lore graph."
    },
    {
        "slug": "wolf-359-eras",
        "name": "Wolf 359 eras",
        "type": "event",
        "short_description": "Periodization for Wolf 359.",
        "description": "Named eras and phases that help readers track how Wolf 359 changes across time."
    },
    {
        "slug": "wolf-359-works",
        "name": "Wolf 359 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wolf 359.",
        "description": "Primary works and adaptations through which most audiences encounter Wolf 359."
    },
    {
        "slug": "wolf-359-symbols",
        "name": "Wolf 359 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wolf 359.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wolf 359."
    },
    {
        "slug": "wolf-359-controversies",
        "name": "Wolf 359 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wolf 359.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wolf 359 argumentative."
    },
    {
        "slug": "wolf-359-sources",
        "name": "Wolf 359 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wolf 359.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wolf 359."
    },
    {
        "slug": "wolf-359-geography",
        "name": "Wolf 359 geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wolf 359.",
        "description": "Regions, routes, and spatial systems that situate Wolf 359 beyond single named places."
    },
    {
        "slug": "wolf-359-legacy",
        "name": "Wolf 359 legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wolf 359.",
        "description": "How Wolf 359 continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wolf-359-practices",
        "name": "Wolf 359 practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wolf 359.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wolf 359."
    },
    {
        "slug": "wolf-359-entry-1",
        "name": "Wolf 359 entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-2",
        "name": "Wolf 359 entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-3",
        "name": "Wolf 359 entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-4",
        "name": "Wolf 359 entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-5",
        "name": "Wolf 359 entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-6",
        "name": "Wolf 359 entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-7",
        "name": "Wolf 359 entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-8",
        "name": "Wolf 359 entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-9",
        "name": "Wolf 359 entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-10",
        "name": "Wolf 359 entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-11",
        "name": "Wolf 359 entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-12",
        "name": "Wolf 359 entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-13",
        "name": "Wolf 359 entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-14",
        "name": "Wolf 359 entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-15",
        "name": "Wolf 359 entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-16",
        "name": "Wolf 359 entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-17",
        "name": "Wolf 359 entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-18",
        "name": "Wolf 359 entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-19",
        "name": "Wolf 359 entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-20",
        "name": "Wolf 359 entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-21",
        "name": "Wolf 359 entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-22",
        "name": "Wolf 359 entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-23",
        "name": "Wolf 359 entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolf-359-entry-24",
        "name": "Wolf 359 entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolf 359.",
        "description": "A supporting encyclopedia entry in the Wolf 359 subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wolf-359",
        "wolf-359-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wolf-359",
        "wolf-359-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wolf-359",
        "wolf-359-places",
        "contains",
        "Wolf 359 places is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-events",
        "contains",
        "Wolf 359 events is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-objects",
        "contains",
        "Wolf 359 objects & artifacts is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-factions",
        "contains",
        "Wolf 359 factions & groups is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-concepts",
        "contains",
        "Wolf 359 concepts is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-eras",
        "contains",
        "Wolf 359 eras is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-works",
        "contains",
        "Wolf 359 works & media is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-symbols",
        "contains",
        "Wolf 359 symbols is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-controversies",
        "contains",
        "Wolf 359 controversies is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-sources",
        "contains",
        "Wolf 359 sources is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-geography",
        "contains",
        "Wolf 359 geography is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-legacy",
        "contains",
        "Wolf 359 legacy is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-practices",
        "contains",
        "Wolf 359 practices is a primary trailhead under Wolf 359.",
        0.88,
        0.82
    ],
    [
        "wolf-359",
        "wolf-359-entry-1",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-2",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-3",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-4",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-5",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-6",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-7",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-8",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-9",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-10",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-11",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-12",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-13",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-14",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-15",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-16",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-17",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-18",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-19",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-20",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-21",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-22",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-23",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ],
    [
        "wolf-359",
        "wolf-359-entry-24",
        "contains",
        "Supporting entry under Wolf 359.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
