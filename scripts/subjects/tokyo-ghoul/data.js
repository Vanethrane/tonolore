/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tokyo-ghoul",
        "name": "Tokyo Ghoul",
        "type": "topic",
        "short_description": "Ghoul underworld, coffee shop front, and the dark urban fantasy that dominated early 2010s fandom.",
        "description": "Ghoul underworld, coffee shop front, and the dark urban fantasy that dominated early 2010s fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tokyo Ghoul so readers can follow long-tail connections across anime."
    },
    {
        "slug": "tokyo-ghoul-figures",
        "name": "Tokyo Ghoul figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tokyo Ghoul.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-world",
        "name": "Tokyo Ghoul world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tokyo Ghoul.",
        "description": "Geography, institutions, and periodization that give Tokyo Ghoul its encyclopedia shape."
    },
    {
        "slug": "tokyo-ghoul-places",
        "name": "Tokyo Ghoul places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tokyo Ghoul.",
        "description": "Places, regions, and built sites that give Tokyo Ghoul its map — where events and figures concentrate."
    },
    {
        "slug": "tokyo-ghoul-events",
        "name": "Tokyo Ghoul events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tokyo Ghoul.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tokyo Ghoul timeline."
    },
    {
        "slug": "tokyo-ghoul-objects",
        "name": "Tokyo Ghoul objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tokyo Ghoul.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-factions",
        "name": "Tokyo Ghoul factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tokyo Ghoul.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-concepts",
        "name": "Tokyo Ghoul concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tokyo Ghoul.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tokyo Ghoul readable as a lore graph."
    },
    {
        "slug": "tokyo-ghoul-eras",
        "name": "Tokyo Ghoul eras",
        "type": "event",
        "short_description": "Periodization for Tokyo Ghoul.",
        "description": "Named eras and phases that help readers track how Tokyo Ghoul changes across time."
    },
    {
        "slug": "tokyo-ghoul-works",
        "name": "Tokyo Ghoul works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tokyo Ghoul.",
        "description": "Primary works and adaptations through which most audiences encounter Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-symbols",
        "name": "Tokyo Ghoul symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tokyo Ghoul.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-controversies",
        "name": "Tokyo Ghoul controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tokyo Ghoul.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tokyo Ghoul argumentative."
    },
    {
        "slug": "tokyo-ghoul-sources",
        "name": "Tokyo Ghoul sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tokyo Ghoul.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-geography",
        "name": "Tokyo Ghoul geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tokyo Ghoul.",
        "description": "Regions, routes, and spatial systems that situate Tokyo Ghoul beyond single named places."
    },
    {
        "slug": "tokyo-ghoul-legacy",
        "name": "Tokyo Ghoul legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tokyo Ghoul.",
        "description": "How Tokyo Ghoul continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tokyo-ghoul-practices",
        "name": "Tokyo Ghoul practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tokyo Ghoul.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tokyo Ghoul."
    },
    {
        "slug": "tokyo-ghoul-entry-1",
        "name": "Tokyo Ghoul entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-2",
        "name": "Tokyo Ghoul entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-3",
        "name": "Tokyo Ghoul entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-4",
        "name": "Tokyo Ghoul entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-5",
        "name": "Tokyo Ghoul entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-6",
        "name": "Tokyo Ghoul entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-7",
        "name": "Tokyo Ghoul entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-8",
        "name": "Tokyo Ghoul entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-9",
        "name": "Tokyo Ghoul entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-10",
        "name": "Tokyo Ghoul entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-11",
        "name": "Tokyo Ghoul entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-12",
        "name": "Tokyo Ghoul entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-13",
        "name": "Tokyo Ghoul entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-14",
        "name": "Tokyo Ghoul entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-15",
        "name": "Tokyo Ghoul entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-16",
        "name": "Tokyo Ghoul entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-17",
        "name": "Tokyo Ghoul entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-18",
        "name": "Tokyo Ghoul entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-19",
        "name": "Tokyo Ghoul entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-20",
        "name": "Tokyo Ghoul entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-21",
        "name": "Tokyo Ghoul entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-22",
        "name": "Tokyo Ghoul entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-23",
        "name": "Tokyo Ghoul entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tokyo-ghoul-entry-24",
        "name": "Tokyo Ghoul entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tokyo Ghoul.",
        "description": "A supporting encyclopedia entry in the Tokyo Ghoul subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tokyo-ghoul",
        "tokyo-ghoul-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-places",
        "contains",
        "Tokyo Ghoul places is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-events",
        "contains",
        "Tokyo Ghoul events is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-objects",
        "contains",
        "Tokyo Ghoul objects & artifacts is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-factions",
        "contains",
        "Tokyo Ghoul factions & groups is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-concepts",
        "contains",
        "Tokyo Ghoul concepts is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-eras",
        "contains",
        "Tokyo Ghoul eras is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-works",
        "contains",
        "Tokyo Ghoul works & media is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-symbols",
        "contains",
        "Tokyo Ghoul symbols is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-controversies",
        "contains",
        "Tokyo Ghoul controversies is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-sources",
        "contains",
        "Tokyo Ghoul sources is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-geography",
        "contains",
        "Tokyo Ghoul geography is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-legacy",
        "contains",
        "Tokyo Ghoul legacy is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-practices",
        "contains",
        "Tokyo Ghoul practices is a primary trailhead under Tokyo Ghoul.",
        0.88,
        0.82
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-1",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-2",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-3",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-4",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-5",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-6",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-7",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-8",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-9",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-10",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-11",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-12",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-13",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-14",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-15",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-16",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-17",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-18",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-19",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-20",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-21",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-22",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-23",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ],
    [
        "tokyo-ghoul",
        "tokyo-ghoul-entry-24",
        "contains",
        "Supporting entry under Tokyo Ghoul.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
