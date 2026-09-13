/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mbmbam",
        "name": "My Brother, My Brother and Me",
        "type": "topic",
        "short_description": "Advice-show chaos, bit lore, and the McElroy comedy podcast that built a multimedia empire.",
        "description": "Advice-show chaos, bit lore, and the McElroy comedy podcast that built a multimedia empire. This Ton-o-Lore subject maps people, places, events, and ideas tied to My Brother, My Brother and Me so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "mbmbam-figures",
        "name": "My Brother, My Brother and Me figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to My Brother, My Brother and Me.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-world",
        "name": "My Brother, My Brother and Me world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame My Brother, My Brother and Me.",
        "description": "Geography, institutions, and periodization that give My Brother, My Brother and Me its encyclopedia shape."
    },
    {
        "slug": "mbmbam-places",
        "name": "My Brother, My Brother and Me places",
        "type": "place",
        "short_description": "Locations and geographies that frame My Brother, My Brother and Me.",
        "description": "Places, regions, and built sites that give My Brother, My Brother and Me its map — where events and figures concentrate."
    },
    {
        "slug": "mbmbam-events",
        "name": "My Brother, My Brother and Me events",
        "type": "event",
        "short_description": "Turning points and dated episodes in My Brother, My Brother and Me.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the My Brother, My Brother and Me timeline."
    },
    {
        "slug": "mbmbam-objects",
        "name": "My Brother, My Brother and Me objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to My Brother, My Brother and Me.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-factions",
        "name": "My Brother, My Brother and Me factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside My Brother, My Brother and Me.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-concepts",
        "name": "My Brother, My Brother and Me concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize My Brother, My Brother and Me.",
        "description": "Keywords, doctrines, systems, and abstract forces that make My Brother, My Brother and Me readable as a lore graph."
    },
    {
        "slug": "mbmbam-eras",
        "name": "My Brother, My Brother and Me eras",
        "type": "event",
        "short_description": "Periodization for My Brother, My Brother and Me.",
        "description": "Named eras and phases that help readers track how My Brother, My Brother and Me changes across time."
    },
    {
        "slug": "mbmbam-works",
        "name": "My Brother, My Brother and Me works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry My Brother, My Brother and Me.",
        "description": "Primary works and adaptations through which most audiences encounter My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-symbols",
        "name": "My Brother, My Brother and Me symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with My Brother, My Brother and Me.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-controversies",
        "name": "My Brother, My Brother and Me controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in My Brother, My Brother and Me.",
        "description": "Debates, rival canons, scandals, and contested facts that keep My Brother, My Brother and Me argumentative."
    },
    {
        "slug": "mbmbam-sources",
        "name": "My Brother, My Brother and Me sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into My Brother, My Brother and Me.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-geography",
        "name": "My Brother, My Brother and Me geography",
        "type": "place",
        "short_description": "Broader geographic framing for My Brother, My Brother and Me.",
        "description": "Regions, routes, and spatial systems that situate My Brother, My Brother and Me beyond single named places."
    },
    {
        "slug": "mbmbam-legacy",
        "name": "My Brother, My Brother and Me legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of My Brother, My Brother and Me.",
        "description": "How My Brother, My Brother and Me continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mbmbam-practices",
        "name": "My Brother, My Brother and Me practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in My Brother, My Brother and Me.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in My Brother, My Brother and Me."
    },
    {
        "slug": "mbmbam-entry-1",
        "name": "My Brother, My Brother and Me entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-2",
        "name": "My Brother, My Brother and Me entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-3",
        "name": "My Brother, My Brother and Me entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-4",
        "name": "My Brother, My Brother and Me entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-5",
        "name": "My Brother, My Brother and Me entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-6",
        "name": "My Brother, My Brother and Me entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-7",
        "name": "My Brother, My Brother and Me entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-8",
        "name": "My Brother, My Brother and Me entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-9",
        "name": "My Brother, My Brother and Me entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-10",
        "name": "My Brother, My Brother and Me entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-11",
        "name": "My Brother, My Brother and Me entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-12",
        "name": "My Brother, My Brother and Me entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-13",
        "name": "My Brother, My Brother and Me entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-14",
        "name": "My Brother, My Brother and Me entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-15",
        "name": "My Brother, My Brother and Me entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-16",
        "name": "My Brother, My Brother and Me entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-17",
        "name": "My Brother, My Brother and Me entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-18",
        "name": "My Brother, My Brother and Me entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-19",
        "name": "My Brother, My Brother and Me entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-20",
        "name": "My Brother, My Brother and Me entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-21",
        "name": "My Brother, My Brother and Me entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-22",
        "name": "My Brother, My Brother and Me entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-23",
        "name": "My Brother, My Brother and Me entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mbmbam-entry-24",
        "name": "My Brother, My Brother and Me entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Brother, My Brother and Me.",
        "description": "A supporting encyclopedia entry in the My Brother, My Brother and Me subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mbmbam",
        "mbmbam-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mbmbam",
        "mbmbam-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mbmbam",
        "mbmbam-places",
        "contains",
        "My Brother, My Brother and Me places is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-events",
        "contains",
        "My Brother, My Brother and Me events is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-objects",
        "contains",
        "My Brother, My Brother and Me objects & artifacts is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-factions",
        "contains",
        "My Brother, My Brother and Me factions & groups is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-concepts",
        "contains",
        "My Brother, My Brother and Me concepts is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-eras",
        "contains",
        "My Brother, My Brother and Me eras is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-works",
        "contains",
        "My Brother, My Brother and Me works & media is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-symbols",
        "contains",
        "My Brother, My Brother and Me symbols is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-controversies",
        "contains",
        "My Brother, My Brother and Me controversies is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-sources",
        "contains",
        "My Brother, My Brother and Me sources is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-geography",
        "contains",
        "My Brother, My Brother and Me geography is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-legacy",
        "contains",
        "My Brother, My Brother and Me legacy is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-practices",
        "contains",
        "My Brother, My Brother and Me practices is a primary trailhead under My Brother, My Brother and Me.",
        0.88,
        0.82
    ],
    [
        "mbmbam",
        "mbmbam-entry-1",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-2",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-3",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-4",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-5",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-6",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-7",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-8",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-9",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-10",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-11",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-12",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-13",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-14",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-15",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-16",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-17",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-18",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-19",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-20",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-21",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-22",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-23",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ],
    [
        "mbmbam",
        "mbmbam-entry-24",
        "contains",
        "Supporting entry under My Brother, My Brother and Me.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
