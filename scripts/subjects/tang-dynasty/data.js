/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tang-dynasty",
        "name": "Tang dynasty",
        "type": "topic",
        "short_description": "Cosmopolitan Chang’an, poetry, Buddhism, and China’s medieval golden age.",
        "description": "Cosmopolitan Chang’an, poetry, Buddhism, and China’s medieval golden age. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tang dynasty so readers can follow long-tail connections across history."
    },
    {
        "slug": "tang-dynasty-figures",
        "name": "Tang dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tang dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tang dynasty."
    },
    {
        "slug": "tang-dynasty-world",
        "name": "Tang dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tang dynasty.",
        "description": "Geography, institutions, and periodization that give Tang dynasty its encyclopedia shape."
    },
    {
        "slug": "tang-dynasty-places",
        "name": "Tang dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tang dynasty.",
        "description": "Places, regions, and built sites that give Tang dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "tang-dynasty-events",
        "name": "Tang dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tang dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tang dynasty timeline."
    },
    {
        "slug": "tang-dynasty-objects",
        "name": "Tang dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tang dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tang dynasty."
    },
    {
        "slug": "tang-dynasty-factions",
        "name": "Tang dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tang dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tang dynasty."
    },
    {
        "slug": "tang-dynasty-concepts",
        "name": "Tang dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tang dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tang dynasty readable as a lore graph."
    },
    {
        "slug": "tang-dynasty-eras",
        "name": "Tang dynasty eras",
        "type": "event",
        "short_description": "Periodization for Tang dynasty.",
        "description": "Named eras and phases that help readers track how Tang dynasty changes across time."
    },
    {
        "slug": "tang-dynasty-works",
        "name": "Tang dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tang dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Tang dynasty."
    },
    {
        "slug": "tang-dynasty-symbols",
        "name": "Tang dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tang dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tang dynasty."
    },
    {
        "slug": "tang-dynasty-controversies",
        "name": "Tang dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tang dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tang dynasty argumentative."
    },
    {
        "slug": "tang-dynasty-sources",
        "name": "Tang dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tang dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tang dynasty."
    },
    {
        "slug": "tang-dynasty-geography",
        "name": "Tang dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tang dynasty.",
        "description": "Regions, routes, and spatial systems that situate Tang dynasty beyond single named places."
    },
    {
        "slug": "tang-dynasty-legacy",
        "name": "Tang dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tang dynasty.",
        "description": "How Tang dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tang-dynasty-practices",
        "name": "Tang dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tang dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tang dynasty."
    },
    {
        "slug": "tang-dynasty-entry-1",
        "name": "Tang dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-2",
        "name": "Tang dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-3",
        "name": "Tang dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-4",
        "name": "Tang dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-5",
        "name": "Tang dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-6",
        "name": "Tang dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-7",
        "name": "Tang dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-8",
        "name": "Tang dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-9",
        "name": "Tang dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-10",
        "name": "Tang dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-11",
        "name": "Tang dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-12",
        "name": "Tang dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-13",
        "name": "Tang dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-14",
        "name": "Tang dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-15",
        "name": "Tang dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-16",
        "name": "Tang dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-17",
        "name": "Tang dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-18",
        "name": "Tang dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-19",
        "name": "Tang dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-20",
        "name": "Tang dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-21",
        "name": "Tang dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-22",
        "name": "Tang dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-23",
        "name": "Tang dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tang-dynasty-entry-24",
        "name": "Tang dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tang dynasty.",
        "description": "A supporting encyclopedia entry in the Tang dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tang-dynasty",
        "tang-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tang-dynasty",
        "tang-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tang-dynasty",
        "tang-dynasty-places",
        "contains",
        "Tang dynasty places is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-events",
        "contains",
        "Tang dynasty events is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-objects",
        "contains",
        "Tang dynasty objects & artifacts is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-factions",
        "contains",
        "Tang dynasty factions & groups is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-concepts",
        "contains",
        "Tang dynasty concepts is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-eras",
        "contains",
        "Tang dynasty eras is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-works",
        "contains",
        "Tang dynasty works & media is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-symbols",
        "contains",
        "Tang dynasty symbols is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-controversies",
        "contains",
        "Tang dynasty controversies is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-sources",
        "contains",
        "Tang dynasty sources is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-geography",
        "contains",
        "Tang dynasty geography is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-legacy",
        "contains",
        "Tang dynasty legacy is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-practices",
        "contains",
        "Tang dynasty practices is a primary trailhead under Tang dynasty.",
        0.88,
        0.82
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-1",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-2",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-3",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-4",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-5",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-6",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-7",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-8",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-9",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-10",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-11",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-12",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-13",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-14",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-15",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-16",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-17",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-18",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-19",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-20",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-21",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-22",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-23",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ],
    [
        "tang-dynasty",
        "tang-dynasty-entry-24",
        "contains",
        "Supporting entry under Tang dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
