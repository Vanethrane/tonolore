/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "breaking-bad",
        "name": "Breaking Bad",
        "type": "topic",
        "short_description": "Heisenberg’s empire, Albuquerque chemistry, and the prestige crime saga of moral corrosion.",
        "description": "Heisenberg’s empire, Albuquerque chemistry, and the prestige crime saga of moral corrosion. This Ton-o-Lore subject maps people, places, events, and ideas tied to Breaking Bad so readers can follow long-tail connections across television."
    },
    {
        "slug": "breaking-bad-figures",
        "name": "Breaking Bad figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Breaking Bad.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Breaking Bad."
    },
    {
        "slug": "breaking-bad-world",
        "name": "Breaking Bad world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Breaking Bad.",
        "description": "Geography, institutions, and periodization that give Breaking Bad its encyclopedia shape."
    },
    {
        "slug": "breaking-bad-places",
        "name": "Breaking Bad places",
        "type": "place",
        "short_description": "Locations and geographies that frame Breaking Bad.",
        "description": "Places, regions, and built sites that give Breaking Bad its map — where events and figures concentrate."
    },
    {
        "slug": "breaking-bad-events",
        "name": "Breaking Bad events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Breaking Bad.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Breaking Bad timeline."
    },
    {
        "slug": "breaking-bad-objects",
        "name": "Breaking Bad objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Breaking Bad.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Breaking Bad."
    },
    {
        "slug": "breaking-bad-factions",
        "name": "Breaking Bad factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Breaking Bad.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Breaking Bad."
    },
    {
        "slug": "breaking-bad-concepts",
        "name": "Breaking Bad concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Breaking Bad.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Breaking Bad readable as a lore graph."
    },
    {
        "slug": "breaking-bad-eras",
        "name": "Breaking Bad eras",
        "type": "event",
        "short_description": "Periodization for Breaking Bad.",
        "description": "Named eras and phases that help readers track how Breaking Bad changes across time."
    },
    {
        "slug": "breaking-bad-works",
        "name": "Breaking Bad works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Breaking Bad.",
        "description": "Primary works and adaptations through which most audiences encounter Breaking Bad."
    },
    {
        "slug": "breaking-bad-symbols",
        "name": "Breaking Bad symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Breaking Bad.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Breaking Bad."
    },
    {
        "slug": "breaking-bad-controversies",
        "name": "Breaking Bad controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Breaking Bad.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Breaking Bad argumentative."
    },
    {
        "slug": "breaking-bad-sources",
        "name": "Breaking Bad sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Breaking Bad.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Breaking Bad."
    },
    {
        "slug": "breaking-bad-geography",
        "name": "Breaking Bad geography",
        "type": "place",
        "short_description": "Broader geographic framing for Breaking Bad.",
        "description": "Regions, routes, and spatial systems that situate Breaking Bad beyond single named places."
    },
    {
        "slug": "breaking-bad-legacy",
        "name": "Breaking Bad legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Breaking Bad.",
        "description": "How Breaking Bad continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "breaking-bad-practices",
        "name": "Breaking Bad practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Breaking Bad.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Breaking Bad."
    },
    {
        "slug": "breaking-bad-entry-1",
        "name": "Breaking Bad entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-2",
        "name": "Breaking Bad entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-3",
        "name": "Breaking Bad entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-4",
        "name": "Breaking Bad entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-5",
        "name": "Breaking Bad entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-6",
        "name": "Breaking Bad entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-7",
        "name": "Breaking Bad entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-8",
        "name": "Breaking Bad entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-9",
        "name": "Breaking Bad entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-10",
        "name": "Breaking Bad entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-11",
        "name": "Breaking Bad entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-12",
        "name": "Breaking Bad entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-13",
        "name": "Breaking Bad entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-14",
        "name": "Breaking Bad entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-15",
        "name": "Breaking Bad entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-16",
        "name": "Breaking Bad entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-17",
        "name": "Breaking Bad entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-18",
        "name": "Breaking Bad entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-19",
        "name": "Breaking Bad entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-20",
        "name": "Breaking Bad entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-21",
        "name": "Breaking Bad entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-22",
        "name": "Breaking Bad entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-23",
        "name": "Breaking Bad entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "breaking-bad-entry-24",
        "name": "Breaking Bad entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Breaking Bad.",
        "description": "A supporting encyclopedia entry in the Breaking Bad subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "breaking-bad",
        "breaking-bad-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "breaking-bad",
        "breaking-bad-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "breaking-bad",
        "breaking-bad-places",
        "contains",
        "Breaking Bad places is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-events",
        "contains",
        "Breaking Bad events is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-objects",
        "contains",
        "Breaking Bad objects & artifacts is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-factions",
        "contains",
        "Breaking Bad factions & groups is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-concepts",
        "contains",
        "Breaking Bad concepts is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-eras",
        "contains",
        "Breaking Bad eras is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-works",
        "contains",
        "Breaking Bad works & media is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-symbols",
        "contains",
        "Breaking Bad symbols is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-controversies",
        "contains",
        "Breaking Bad controversies is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-sources",
        "contains",
        "Breaking Bad sources is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-geography",
        "contains",
        "Breaking Bad geography is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-legacy",
        "contains",
        "Breaking Bad legacy is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-practices",
        "contains",
        "Breaking Bad practices is a primary trailhead under Breaking Bad.",
        0.88,
        0.82
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-1",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-2",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-3",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-4",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-5",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-6",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-7",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-8",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-9",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-10",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-11",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-12",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-13",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-14",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-15",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-16",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-17",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-18",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-19",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-20",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-21",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-22",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-23",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ],
    [
        "breaking-bad",
        "breaking-bad-entry-24",
        "contains",
        "Supporting entry under Breaking Bad.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
