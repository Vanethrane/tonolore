/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "native-american-folktales",
        "name": "Native American folktales",
        "type": "topic",
        "short_description": "Tricksters, emergence stories, and oral literatures across Indigenous North America.",
        "description": "Tricksters, emergence stories, and oral literatures across Indigenous North America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Native American folktales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "native-american-folktales-figures",
        "name": "Native American folktales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Native American folktales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Native American folktales."
    },
    {
        "slug": "native-american-folktales-world",
        "name": "Native American folktales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Native American folktales.",
        "description": "Geography, institutions, and periodization that give Native American folktales its encyclopedia shape."
    },
    {
        "slug": "native-american-folktales-places",
        "name": "Native American folktales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Native American folktales.",
        "description": "Places, regions, and built sites that give Native American folktales its map — where events and figures concentrate."
    },
    {
        "slug": "native-american-folktales-events",
        "name": "Native American folktales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Native American folktales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Native American folktales timeline."
    },
    {
        "slug": "native-american-folktales-objects",
        "name": "Native American folktales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Native American folktales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Native American folktales."
    },
    {
        "slug": "native-american-folktales-factions",
        "name": "Native American folktales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Native American folktales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Native American folktales."
    },
    {
        "slug": "native-american-folktales-concepts",
        "name": "Native American folktales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Native American folktales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Native American folktales readable as a lore graph."
    },
    {
        "slug": "native-american-folktales-eras",
        "name": "Native American folktales eras",
        "type": "event",
        "short_description": "Periodization for Native American folktales.",
        "description": "Named eras and phases that help readers track how Native American folktales changes across time."
    },
    {
        "slug": "native-american-folktales-works",
        "name": "Native American folktales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Native American folktales.",
        "description": "Primary works and adaptations through which most audiences encounter Native American folktales."
    },
    {
        "slug": "native-american-folktales-symbols",
        "name": "Native American folktales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Native American folktales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Native American folktales."
    },
    {
        "slug": "native-american-folktales-controversies",
        "name": "Native American folktales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Native American folktales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Native American folktales argumentative."
    },
    {
        "slug": "native-american-folktales-sources",
        "name": "Native American folktales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Native American folktales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Native American folktales."
    },
    {
        "slug": "native-american-folktales-geography",
        "name": "Native American folktales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Native American folktales.",
        "description": "Regions, routes, and spatial systems that situate Native American folktales beyond single named places."
    },
    {
        "slug": "native-american-folktales-legacy",
        "name": "Native American folktales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Native American folktales.",
        "description": "How Native American folktales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "native-american-folktales-practices",
        "name": "Native American folktales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Native American folktales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Native American folktales."
    },
    {
        "slug": "native-american-folktales-entry-1",
        "name": "Native American folktales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-2",
        "name": "Native American folktales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-3",
        "name": "Native American folktales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-4",
        "name": "Native American folktales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-5",
        "name": "Native American folktales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-6",
        "name": "Native American folktales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-7",
        "name": "Native American folktales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-8",
        "name": "Native American folktales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-9",
        "name": "Native American folktales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-10",
        "name": "Native American folktales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-11",
        "name": "Native American folktales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-12",
        "name": "Native American folktales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-13",
        "name": "Native American folktales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-14",
        "name": "Native American folktales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-15",
        "name": "Native American folktales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-16",
        "name": "Native American folktales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-17",
        "name": "Native American folktales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-18",
        "name": "Native American folktales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-19",
        "name": "Native American folktales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-20",
        "name": "Native American folktales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-21",
        "name": "Native American folktales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-22",
        "name": "Native American folktales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-23",
        "name": "Native American folktales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "native-american-folktales-entry-24",
        "name": "Native American folktales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Native American folktales.",
        "description": "A supporting encyclopedia entry in the Native American folktales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "native-american-folktales",
        "native-american-folktales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "native-american-folktales",
        "native-american-folktales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "native-american-folktales",
        "native-american-folktales-places",
        "contains",
        "Native American folktales places is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-events",
        "contains",
        "Native American folktales events is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-objects",
        "contains",
        "Native American folktales objects & artifacts is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-factions",
        "contains",
        "Native American folktales factions & groups is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-concepts",
        "contains",
        "Native American folktales concepts is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-eras",
        "contains",
        "Native American folktales eras is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-works",
        "contains",
        "Native American folktales works & media is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-symbols",
        "contains",
        "Native American folktales symbols is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-controversies",
        "contains",
        "Native American folktales controversies is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-sources",
        "contains",
        "Native American folktales sources is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-geography",
        "contains",
        "Native American folktales geography is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-legacy",
        "contains",
        "Native American folktales legacy is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-practices",
        "contains",
        "Native American folktales practices is a primary trailhead under Native American folktales.",
        0.88,
        0.82
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-1",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-2",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-3",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-4",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-5",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-6",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-7",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-8",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-9",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-10",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-11",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-12",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-13",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-14",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-15",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-16",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-17",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-18",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-19",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-20",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-21",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-22",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-23",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ],
    [
        "native-american-folktales",
        "native-american-folktales-entry-24",
        "contains",
        "Supporting entry under Native American folktales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
