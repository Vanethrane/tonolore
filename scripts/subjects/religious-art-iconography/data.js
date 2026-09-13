/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "religious-art-iconography",
        "name": "Religious art & iconography",
        "type": "topic",
        "short_description": "Icons, mandalas, and the visual languages that teach doctrine without words.",
        "description": "Icons, mandalas, and the visual languages that teach doctrine without words. This Ton-o-Lore subject maps people, places, events, and ideas tied to Religious art & iconography so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "religious-art-iconography-figures",
        "name": "Religious art & iconography figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Religious art & iconography.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-world",
        "name": "Religious art & iconography world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Religious art & iconography.",
        "description": "Geography, institutions, and periodization that give Religious art & iconography its encyclopedia shape."
    },
    {
        "slug": "religious-art-iconography-places",
        "name": "Religious art & iconography places",
        "type": "place",
        "short_description": "Locations and geographies that frame Religious art & iconography.",
        "description": "Places, regions, and built sites that give Religious art & iconography its map — where events and figures concentrate."
    },
    {
        "slug": "religious-art-iconography-events",
        "name": "Religious art & iconography events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Religious art & iconography.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Religious art & iconography timeline."
    },
    {
        "slug": "religious-art-iconography-objects",
        "name": "Religious art & iconography objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Religious art & iconography.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-factions",
        "name": "Religious art & iconography factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Religious art & iconography.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-concepts",
        "name": "Religious art & iconography concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Religious art & iconography.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Religious art & iconography readable as a lore graph."
    },
    {
        "slug": "religious-art-iconography-eras",
        "name": "Religious art & iconography eras",
        "type": "event",
        "short_description": "Periodization for Religious art & iconography.",
        "description": "Named eras and phases that help readers track how Religious art & iconography changes across time."
    },
    {
        "slug": "religious-art-iconography-works",
        "name": "Religious art & iconography works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Religious art & iconography.",
        "description": "Primary works and adaptations through which most audiences encounter Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-symbols",
        "name": "Religious art & iconography symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Religious art & iconography.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-controversies",
        "name": "Religious art & iconography controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Religious art & iconography.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Religious art & iconography argumentative."
    },
    {
        "slug": "religious-art-iconography-sources",
        "name": "Religious art & iconography sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Religious art & iconography.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-geography",
        "name": "Religious art & iconography geography",
        "type": "place",
        "short_description": "Broader geographic framing for Religious art & iconography.",
        "description": "Regions, routes, and spatial systems that situate Religious art & iconography beyond single named places."
    },
    {
        "slug": "religious-art-iconography-legacy",
        "name": "Religious art & iconography legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Religious art & iconography.",
        "description": "How Religious art & iconography continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "religious-art-iconography-practices",
        "name": "Religious art & iconography practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Religious art & iconography.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Religious art & iconography."
    },
    {
        "slug": "religious-art-iconography-entry-1",
        "name": "Religious art & iconography entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-2",
        "name": "Religious art & iconography entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-3",
        "name": "Religious art & iconography entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-4",
        "name": "Religious art & iconography entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-5",
        "name": "Religious art & iconography entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-6",
        "name": "Religious art & iconography entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-7",
        "name": "Religious art & iconography entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-8",
        "name": "Religious art & iconography entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-9",
        "name": "Religious art & iconography entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-10",
        "name": "Religious art & iconography entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-11",
        "name": "Religious art & iconography entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-12",
        "name": "Religious art & iconography entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-13",
        "name": "Religious art & iconography entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-14",
        "name": "Religious art & iconography entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-15",
        "name": "Religious art & iconography entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-16",
        "name": "Religious art & iconography entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-17",
        "name": "Religious art & iconography entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-18",
        "name": "Religious art & iconography entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-19",
        "name": "Religious art & iconography entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-20",
        "name": "Religious art & iconography entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-21",
        "name": "Religious art & iconography entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-22",
        "name": "Religious art & iconography entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-23",
        "name": "Religious art & iconography entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-art-iconography-entry-24",
        "name": "Religious art & iconography entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious art & iconography.",
        "description": "A supporting encyclopedia entry in the Religious art & iconography subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "religious-art-iconography",
        "religious-art-iconography-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-places",
        "contains",
        "Religious art & iconography places is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-events",
        "contains",
        "Religious art & iconography events is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-objects",
        "contains",
        "Religious art & iconography objects & artifacts is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-factions",
        "contains",
        "Religious art & iconography factions & groups is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-concepts",
        "contains",
        "Religious art & iconography concepts is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-eras",
        "contains",
        "Religious art & iconography eras is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-works",
        "contains",
        "Religious art & iconography works & media is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-symbols",
        "contains",
        "Religious art & iconography symbols is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-controversies",
        "contains",
        "Religious art & iconography controversies is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-sources",
        "contains",
        "Religious art & iconography sources is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-geography",
        "contains",
        "Religious art & iconography geography is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-legacy",
        "contains",
        "Religious art & iconography legacy is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-practices",
        "contains",
        "Religious art & iconography practices is a primary trailhead under Religious art & iconography.",
        0.88,
        0.82
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-1",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-2",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-3",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-4",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-5",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-6",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-7",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-8",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-9",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-10",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-11",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-12",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-13",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-14",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-15",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-16",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-17",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-18",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-19",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-20",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-21",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-22",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-23",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ],
    [
        "religious-art-iconography",
        "religious-art-iconography-entry-24",
        "contains",
        "Supporting entry under Religious art & iconography.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
