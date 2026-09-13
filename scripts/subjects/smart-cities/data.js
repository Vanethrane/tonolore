/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "smart-cities",
        "name": "Smart cities",
        "type": "topic",
        "short_description": "Sensors, dashboards, and the contested future of data-driven urban management.",
        "description": "Sensors, dashboards, and the contested future of data-driven urban management. This Ton-o-Lore subject maps people, places, events, and ideas tied to Smart cities so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "smart-cities-figures",
        "name": "Smart cities figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Smart cities.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Smart cities."
    },
    {
        "slug": "smart-cities-world",
        "name": "Smart cities world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Smart cities.",
        "description": "Geography, institutions, and periodization that give Smart cities its encyclopedia shape."
    },
    {
        "slug": "smart-cities-places",
        "name": "Smart cities places",
        "type": "place",
        "short_description": "Locations and geographies that frame Smart cities.",
        "description": "Places, regions, and built sites that give Smart cities its map — where events and figures concentrate."
    },
    {
        "slug": "smart-cities-events",
        "name": "Smart cities events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Smart cities.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Smart cities timeline."
    },
    {
        "slug": "smart-cities-objects",
        "name": "Smart cities objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Smart cities.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Smart cities."
    },
    {
        "slug": "smart-cities-factions",
        "name": "Smart cities factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Smart cities.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Smart cities."
    },
    {
        "slug": "smart-cities-concepts",
        "name": "Smart cities concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Smart cities.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Smart cities readable as a lore graph."
    },
    {
        "slug": "smart-cities-eras",
        "name": "Smart cities eras",
        "type": "event",
        "short_description": "Periodization for Smart cities.",
        "description": "Named eras and phases that help readers track how Smart cities changes across time."
    },
    {
        "slug": "smart-cities-works",
        "name": "Smart cities works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Smart cities.",
        "description": "Primary works and adaptations through which most audiences encounter Smart cities."
    },
    {
        "slug": "smart-cities-symbols",
        "name": "Smart cities symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Smart cities.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Smart cities."
    },
    {
        "slug": "smart-cities-controversies",
        "name": "Smart cities controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Smart cities.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Smart cities argumentative."
    },
    {
        "slug": "smart-cities-sources",
        "name": "Smart cities sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Smart cities.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Smart cities."
    },
    {
        "slug": "smart-cities-geography",
        "name": "Smart cities geography",
        "type": "place",
        "short_description": "Broader geographic framing for Smart cities.",
        "description": "Regions, routes, and spatial systems that situate Smart cities beyond single named places."
    },
    {
        "slug": "smart-cities-legacy",
        "name": "Smart cities legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Smart cities.",
        "description": "How Smart cities continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "smart-cities-practices",
        "name": "Smart cities practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Smart cities.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Smart cities."
    },
    {
        "slug": "smart-cities-entry-1",
        "name": "Smart cities entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-2",
        "name": "Smart cities entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-3",
        "name": "Smart cities entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-4",
        "name": "Smart cities entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-5",
        "name": "Smart cities entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-6",
        "name": "Smart cities entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-7",
        "name": "Smart cities entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-8",
        "name": "Smart cities entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-9",
        "name": "Smart cities entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-10",
        "name": "Smart cities entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-11",
        "name": "Smart cities entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-12",
        "name": "Smart cities entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-13",
        "name": "Smart cities entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-14",
        "name": "Smart cities entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-15",
        "name": "Smart cities entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-16",
        "name": "Smart cities entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-17",
        "name": "Smart cities entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-18",
        "name": "Smart cities entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-19",
        "name": "Smart cities entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-20",
        "name": "Smart cities entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-21",
        "name": "Smart cities entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-22",
        "name": "Smart cities entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-23",
        "name": "Smart cities entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "smart-cities-entry-24",
        "name": "Smart cities entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Smart cities.",
        "description": "A supporting encyclopedia entry in the Smart cities subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "smart-cities",
        "smart-cities-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "smart-cities",
        "smart-cities-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "smart-cities",
        "smart-cities-places",
        "contains",
        "Smart cities places is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-events",
        "contains",
        "Smart cities events is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-objects",
        "contains",
        "Smart cities objects & artifacts is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-factions",
        "contains",
        "Smart cities factions & groups is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-concepts",
        "contains",
        "Smart cities concepts is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-eras",
        "contains",
        "Smart cities eras is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-works",
        "contains",
        "Smart cities works & media is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-symbols",
        "contains",
        "Smart cities symbols is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-controversies",
        "contains",
        "Smart cities controversies is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-sources",
        "contains",
        "Smart cities sources is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-geography",
        "contains",
        "Smart cities geography is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-legacy",
        "contains",
        "Smart cities legacy is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-practices",
        "contains",
        "Smart cities practices is a primary trailhead under Smart cities.",
        0.88,
        0.82
    ],
    [
        "smart-cities",
        "smart-cities-entry-1",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-2",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-3",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-4",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-5",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-6",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-7",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-8",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-9",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-10",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-11",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-12",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-13",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-14",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-15",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-16",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-17",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-18",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-19",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-20",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-21",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-22",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-23",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ],
    [
        "smart-cities",
        "smart-cities-entry-24",
        "contains",
        "Supporting entry under Smart cities.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
