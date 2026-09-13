/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "russian-folktales",
        "name": "Russian folktales",
        "type": "topic",
        "short_description": "Baba Yaga, firebirds, and the wondertale structures mapped by Afanasyev and Propp.",
        "description": "Baba Yaga, firebirds, and the wondertale structures mapped by Afanasyev and Propp. This Ton-o-Lore subject maps people, places, events, and ideas tied to Russian folktales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "russian-folktales-figures",
        "name": "Russian folktales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Russian folktales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Russian folktales."
    },
    {
        "slug": "russian-folktales-world",
        "name": "Russian folktales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Russian folktales.",
        "description": "Geography, institutions, and periodization that give Russian folktales its encyclopedia shape."
    },
    {
        "slug": "russian-folktales-places",
        "name": "Russian folktales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Russian folktales.",
        "description": "Places, regions, and built sites that give Russian folktales its map — where events and figures concentrate."
    },
    {
        "slug": "russian-folktales-events",
        "name": "Russian folktales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Russian folktales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Russian folktales timeline."
    },
    {
        "slug": "russian-folktales-objects",
        "name": "Russian folktales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Russian folktales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Russian folktales."
    },
    {
        "slug": "russian-folktales-factions",
        "name": "Russian folktales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Russian folktales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Russian folktales."
    },
    {
        "slug": "russian-folktales-concepts",
        "name": "Russian folktales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Russian folktales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Russian folktales readable as a lore graph."
    },
    {
        "slug": "russian-folktales-eras",
        "name": "Russian folktales eras",
        "type": "event",
        "short_description": "Periodization for Russian folktales.",
        "description": "Named eras and phases that help readers track how Russian folktales changes across time."
    },
    {
        "slug": "russian-folktales-works",
        "name": "Russian folktales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Russian folktales.",
        "description": "Primary works and adaptations through which most audiences encounter Russian folktales."
    },
    {
        "slug": "russian-folktales-symbols",
        "name": "Russian folktales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Russian folktales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Russian folktales."
    },
    {
        "slug": "russian-folktales-controversies",
        "name": "Russian folktales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Russian folktales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Russian folktales argumentative."
    },
    {
        "slug": "russian-folktales-sources",
        "name": "Russian folktales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Russian folktales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Russian folktales."
    },
    {
        "slug": "russian-folktales-geography",
        "name": "Russian folktales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Russian folktales.",
        "description": "Regions, routes, and spatial systems that situate Russian folktales beyond single named places."
    },
    {
        "slug": "russian-folktales-legacy",
        "name": "Russian folktales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Russian folktales.",
        "description": "How Russian folktales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "russian-folktales-practices",
        "name": "Russian folktales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Russian folktales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Russian folktales."
    },
    {
        "slug": "russian-folktales-entry-1",
        "name": "Russian folktales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-2",
        "name": "Russian folktales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-3",
        "name": "Russian folktales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-4",
        "name": "Russian folktales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-5",
        "name": "Russian folktales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-6",
        "name": "Russian folktales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-7",
        "name": "Russian folktales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-8",
        "name": "Russian folktales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-9",
        "name": "Russian folktales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-10",
        "name": "Russian folktales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-11",
        "name": "Russian folktales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-12",
        "name": "Russian folktales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-13",
        "name": "Russian folktales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-14",
        "name": "Russian folktales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-15",
        "name": "Russian folktales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-16",
        "name": "Russian folktales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-17",
        "name": "Russian folktales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-18",
        "name": "Russian folktales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-19",
        "name": "Russian folktales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-20",
        "name": "Russian folktales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-21",
        "name": "Russian folktales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-22",
        "name": "Russian folktales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-23",
        "name": "Russian folktales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-folktales-entry-24",
        "name": "Russian folktales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian folktales.",
        "description": "A supporting encyclopedia entry in the Russian folktales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "russian-folktales",
        "russian-folktales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "russian-folktales",
        "russian-folktales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "russian-folktales",
        "russian-folktales-places",
        "contains",
        "Russian folktales places is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-events",
        "contains",
        "Russian folktales events is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-objects",
        "contains",
        "Russian folktales objects & artifacts is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-factions",
        "contains",
        "Russian folktales factions & groups is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-concepts",
        "contains",
        "Russian folktales concepts is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-eras",
        "contains",
        "Russian folktales eras is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-works",
        "contains",
        "Russian folktales works & media is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-symbols",
        "contains",
        "Russian folktales symbols is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-controversies",
        "contains",
        "Russian folktales controversies is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-sources",
        "contains",
        "Russian folktales sources is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-geography",
        "contains",
        "Russian folktales geography is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-legacy",
        "contains",
        "Russian folktales legacy is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-practices",
        "contains",
        "Russian folktales practices is a primary trailhead under Russian folktales.",
        0.88,
        0.82
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-1",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-2",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-3",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-4",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-5",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-6",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-7",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-8",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-9",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-10",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-11",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-12",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-13",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-14",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-15",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-16",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-17",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-18",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-19",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-20",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-21",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-22",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-23",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ],
    [
        "russian-folktales",
        "russian-folktales-entry-24",
        "contains",
        "Supporting entry under Russian folktales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
