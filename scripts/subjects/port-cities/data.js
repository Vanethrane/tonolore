/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "port-cities",
        "name": "Historic port cities",
        "type": "topic",
        "short_description": "Harbors, warehouses, and the urban cultures built on docks and customs houses.",
        "description": "Harbors, warehouses, and the urban cultures built on docks and customs houses. This Ton-o-Lore subject maps people, places, events, and ideas tied to Historic port cities so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "port-cities-figures",
        "name": "Historic port cities figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Historic port cities.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Historic port cities."
    },
    {
        "slug": "port-cities-world",
        "name": "Historic port cities world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Historic port cities.",
        "description": "Geography, institutions, and periodization that give Historic port cities its encyclopedia shape."
    },
    {
        "slug": "port-cities-places",
        "name": "Historic port cities places",
        "type": "place",
        "short_description": "Locations and geographies that frame Historic port cities.",
        "description": "Places, regions, and built sites that give Historic port cities its map — where events and figures concentrate."
    },
    {
        "slug": "port-cities-events",
        "name": "Historic port cities events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Historic port cities.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Historic port cities timeline."
    },
    {
        "slug": "port-cities-objects",
        "name": "Historic port cities objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Historic port cities.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Historic port cities."
    },
    {
        "slug": "port-cities-factions",
        "name": "Historic port cities factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Historic port cities.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Historic port cities."
    },
    {
        "slug": "port-cities-concepts",
        "name": "Historic port cities concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Historic port cities.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Historic port cities readable as a lore graph."
    },
    {
        "slug": "port-cities-eras",
        "name": "Historic port cities eras",
        "type": "event",
        "short_description": "Periodization for Historic port cities.",
        "description": "Named eras and phases that help readers track how Historic port cities changes across time."
    },
    {
        "slug": "port-cities-works",
        "name": "Historic port cities works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Historic port cities.",
        "description": "Primary works and adaptations through which most audiences encounter Historic port cities."
    },
    {
        "slug": "port-cities-symbols",
        "name": "Historic port cities symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Historic port cities.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Historic port cities."
    },
    {
        "slug": "port-cities-controversies",
        "name": "Historic port cities controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Historic port cities.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Historic port cities argumentative."
    },
    {
        "slug": "port-cities-sources",
        "name": "Historic port cities sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Historic port cities.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Historic port cities."
    },
    {
        "slug": "port-cities-geography",
        "name": "Historic port cities geography",
        "type": "place",
        "short_description": "Broader geographic framing for Historic port cities.",
        "description": "Regions, routes, and spatial systems that situate Historic port cities beyond single named places."
    },
    {
        "slug": "port-cities-legacy",
        "name": "Historic port cities legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Historic port cities.",
        "description": "How Historic port cities continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "port-cities-practices",
        "name": "Historic port cities practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Historic port cities.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Historic port cities."
    },
    {
        "slug": "port-cities-entry-1",
        "name": "Historic port cities entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-2",
        "name": "Historic port cities entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-3",
        "name": "Historic port cities entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-4",
        "name": "Historic port cities entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-5",
        "name": "Historic port cities entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-6",
        "name": "Historic port cities entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-7",
        "name": "Historic port cities entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-8",
        "name": "Historic port cities entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-9",
        "name": "Historic port cities entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-10",
        "name": "Historic port cities entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-11",
        "name": "Historic port cities entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-12",
        "name": "Historic port cities entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-13",
        "name": "Historic port cities entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-14",
        "name": "Historic port cities entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-15",
        "name": "Historic port cities entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-16",
        "name": "Historic port cities entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-17",
        "name": "Historic port cities entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-18",
        "name": "Historic port cities entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-19",
        "name": "Historic port cities entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-20",
        "name": "Historic port cities entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-21",
        "name": "Historic port cities entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-22",
        "name": "Historic port cities entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-23",
        "name": "Historic port cities entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "port-cities-entry-24",
        "name": "Historic port cities entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Historic port cities.",
        "description": "A supporting encyclopedia entry in the Historic port cities subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "port-cities",
        "port-cities-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "port-cities",
        "port-cities-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "port-cities",
        "port-cities-places",
        "contains",
        "Historic port cities places is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-events",
        "contains",
        "Historic port cities events is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-objects",
        "contains",
        "Historic port cities objects & artifacts is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-factions",
        "contains",
        "Historic port cities factions & groups is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-concepts",
        "contains",
        "Historic port cities concepts is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-eras",
        "contains",
        "Historic port cities eras is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-works",
        "contains",
        "Historic port cities works & media is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-symbols",
        "contains",
        "Historic port cities symbols is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-controversies",
        "contains",
        "Historic port cities controversies is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-sources",
        "contains",
        "Historic port cities sources is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-geography",
        "contains",
        "Historic port cities geography is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-legacy",
        "contains",
        "Historic port cities legacy is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-practices",
        "contains",
        "Historic port cities practices is a primary trailhead under Historic port cities.",
        0.88,
        0.82
    ],
    [
        "port-cities",
        "port-cities-entry-1",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-2",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-3",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-4",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-5",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-6",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-7",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-8",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-9",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-10",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-11",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-12",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-13",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-14",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-15",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-16",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-17",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-18",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-19",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-20",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-21",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-22",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-23",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ],
    [
        "port-cities",
        "port-cities-entry-24",
        "contains",
        "Supporting entry under Historic port cities.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
