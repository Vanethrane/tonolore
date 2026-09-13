/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "great-wall-china",
        "name": "Great Wall of China",
        "type": "topic",
        "short_description": "Frontier fortifications, dynastic rebuilds, and the mythic length of China’s northern defense.",
        "description": "Frontier fortifications, dynastic rebuilds, and the mythic length of China’s northern defense. This Ton-o-Lore subject maps people, places, events, and ideas tied to Great Wall of China so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "great-wall-china-figures",
        "name": "Great Wall of China figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Great Wall of China.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Great Wall of China."
    },
    {
        "slug": "great-wall-china-world",
        "name": "Great Wall of China world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Great Wall of China.",
        "description": "Geography, institutions, and periodization that give Great Wall of China its encyclopedia shape."
    },
    {
        "slug": "great-wall-china-places",
        "name": "Great Wall of China places",
        "type": "place",
        "short_description": "Locations and geographies that frame Great Wall of China.",
        "description": "Places, regions, and built sites that give Great Wall of China its map — where events and figures concentrate."
    },
    {
        "slug": "great-wall-china-events",
        "name": "Great Wall of China events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Great Wall of China.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Great Wall of China timeline."
    },
    {
        "slug": "great-wall-china-objects",
        "name": "Great Wall of China objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Great Wall of China.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Great Wall of China."
    },
    {
        "slug": "great-wall-china-factions",
        "name": "Great Wall of China factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Great Wall of China.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Great Wall of China."
    },
    {
        "slug": "great-wall-china-concepts",
        "name": "Great Wall of China concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Great Wall of China.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Great Wall of China readable as a lore graph."
    },
    {
        "slug": "great-wall-china-eras",
        "name": "Great Wall of China eras",
        "type": "event",
        "short_description": "Periodization for Great Wall of China.",
        "description": "Named eras and phases that help readers track how Great Wall of China changes across time."
    },
    {
        "slug": "great-wall-china-works",
        "name": "Great Wall of China works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Great Wall of China.",
        "description": "Primary works and adaptations through which most audiences encounter Great Wall of China."
    },
    {
        "slug": "great-wall-china-symbols",
        "name": "Great Wall of China symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Great Wall of China.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Great Wall of China."
    },
    {
        "slug": "great-wall-china-controversies",
        "name": "Great Wall of China controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Great Wall of China.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Great Wall of China argumentative."
    },
    {
        "slug": "great-wall-china-sources",
        "name": "Great Wall of China sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Great Wall of China.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Great Wall of China."
    },
    {
        "slug": "great-wall-china-geography",
        "name": "Great Wall of China geography",
        "type": "place",
        "short_description": "Broader geographic framing for Great Wall of China.",
        "description": "Regions, routes, and spatial systems that situate Great Wall of China beyond single named places."
    },
    {
        "slug": "great-wall-china-legacy",
        "name": "Great Wall of China legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Great Wall of China.",
        "description": "How Great Wall of China continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "great-wall-china-practices",
        "name": "Great Wall of China practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Great Wall of China.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Great Wall of China."
    },
    {
        "slug": "great-wall-china-entry-1",
        "name": "Great Wall of China entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-2",
        "name": "Great Wall of China entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-3",
        "name": "Great Wall of China entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-4",
        "name": "Great Wall of China entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-5",
        "name": "Great Wall of China entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-6",
        "name": "Great Wall of China entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-7",
        "name": "Great Wall of China entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-8",
        "name": "Great Wall of China entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-9",
        "name": "Great Wall of China entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-10",
        "name": "Great Wall of China entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-11",
        "name": "Great Wall of China entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-12",
        "name": "Great Wall of China entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-13",
        "name": "Great Wall of China entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-14",
        "name": "Great Wall of China entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-15",
        "name": "Great Wall of China entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-16",
        "name": "Great Wall of China entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-17",
        "name": "Great Wall of China entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-18",
        "name": "Great Wall of China entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-19",
        "name": "Great Wall of China entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-20",
        "name": "Great Wall of China entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-21",
        "name": "Great Wall of China entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-22",
        "name": "Great Wall of China entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-23",
        "name": "Great Wall of China entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "great-wall-china-entry-24",
        "name": "Great Wall of China entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Great Wall of China.",
        "description": "A supporting encyclopedia entry in the Great Wall of China subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "great-wall-china",
        "great-wall-china-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "great-wall-china",
        "great-wall-china-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "great-wall-china",
        "great-wall-china-places",
        "contains",
        "Great Wall of China places is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-events",
        "contains",
        "Great Wall of China events is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-objects",
        "contains",
        "Great Wall of China objects & artifacts is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-factions",
        "contains",
        "Great Wall of China factions & groups is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-concepts",
        "contains",
        "Great Wall of China concepts is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-eras",
        "contains",
        "Great Wall of China eras is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-works",
        "contains",
        "Great Wall of China works & media is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-symbols",
        "contains",
        "Great Wall of China symbols is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-controversies",
        "contains",
        "Great Wall of China controversies is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-sources",
        "contains",
        "Great Wall of China sources is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-geography",
        "contains",
        "Great Wall of China geography is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-legacy",
        "contains",
        "Great Wall of China legacy is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-practices",
        "contains",
        "Great Wall of China practices is a primary trailhead under Great Wall of China.",
        0.88,
        0.82
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-1",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-2",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-3",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-4",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-5",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-6",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-7",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-8",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-9",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-10",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-11",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-12",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-13",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-14",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-15",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-16",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-17",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-18",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-19",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-20",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-21",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-22",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-23",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ],
    [
        "great-wall-china",
        "great-wall-china-entry-24",
        "contains",
        "Supporting entry under Great Wall of China.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
