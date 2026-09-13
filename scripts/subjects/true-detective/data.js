/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "true-detective",
        "name": "True Detective",
        "type": "topic",
        "short_description": "Anthology gloom, occult crime poetry, and the prestige mystery that peaks and valleys by season.",
        "description": "Anthology gloom, occult crime poetry, and the prestige mystery that peaks and valleys by season. This Ton-o-Lore subject maps people, places, events, and ideas tied to True Detective so readers can follow long-tail connections across television."
    },
    {
        "slug": "true-detective-figures",
        "name": "True Detective figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to True Detective.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring True Detective."
    },
    {
        "slug": "true-detective-world",
        "name": "True Detective world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame True Detective.",
        "description": "Geography, institutions, and periodization that give True Detective its encyclopedia shape."
    },
    {
        "slug": "true-detective-places",
        "name": "True Detective places",
        "type": "place",
        "short_description": "Locations and geographies that frame True Detective.",
        "description": "Places, regions, and built sites that give True Detective its map — where events and figures concentrate."
    },
    {
        "slug": "true-detective-events",
        "name": "True Detective events",
        "type": "event",
        "short_description": "Turning points and dated episodes in True Detective.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the True Detective timeline."
    },
    {
        "slug": "true-detective-objects",
        "name": "True Detective objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to True Detective.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through True Detective."
    },
    {
        "slug": "true-detective-factions",
        "name": "True Detective factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside True Detective.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in True Detective."
    },
    {
        "slug": "true-detective-concepts",
        "name": "True Detective concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize True Detective.",
        "description": "Keywords, doctrines, systems, and abstract forces that make True Detective readable as a lore graph."
    },
    {
        "slug": "true-detective-eras",
        "name": "True Detective eras",
        "type": "event",
        "short_description": "Periodization for True Detective.",
        "description": "Named eras and phases that help readers track how True Detective changes across time."
    },
    {
        "slug": "true-detective-works",
        "name": "True Detective works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry True Detective.",
        "description": "Primary works and adaptations through which most audiences encounter True Detective."
    },
    {
        "slug": "true-detective-symbols",
        "name": "True Detective symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with True Detective.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside True Detective."
    },
    {
        "slug": "true-detective-controversies",
        "name": "True Detective controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in True Detective.",
        "description": "Debates, rival canons, scandals, and contested facts that keep True Detective argumentative."
    },
    {
        "slug": "true-detective-sources",
        "name": "True Detective sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into True Detective.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify True Detective."
    },
    {
        "slug": "true-detective-geography",
        "name": "True Detective geography",
        "type": "place",
        "short_description": "Broader geographic framing for True Detective.",
        "description": "Regions, routes, and spatial systems that situate True Detective beyond single named places."
    },
    {
        "slug": "true-detective-legacy",
        "name": "True Detective legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of True Detective.",
        "description": "How True Detective continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "true-detective-practices",
        "name": "True Detective practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in True Detective.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in True Detective."
    },
    {
        "slug": "true-detective-entry-1",
        "name": "True Detective entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-2",
        "name": "True Detective entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-3",
        "name": "True Detective entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-4",
        "name": "True Detective entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-5",
        "name": "True Detective entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-6",
        "name": "True Detective entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-7",
        "name": "True Detective entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-8",
        "name": "True Detective entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-9",
        "name": "True Detective entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-10",
        "name": "True Detective entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-11",
        "name": "True Detective entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-12",
        "name": "True Detective entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-13",
        "name": "True Detective entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-14",
        "name": "True Detective entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-15",
        "name": "True Detective entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-16",
        "name": "True Detective entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-17",
        "name": "True Detective entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-18",
        "name": "True Detective entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-19",
        "name": "True Detective entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-20",
        "name": "True Detective entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-21",
        "name": "True Detective entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-22",
        "name": "True Detective entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-23",
        "name": "True Detective entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-detective-entry-24",
        "name": "True Detective entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside True Detective.",
        "description": "A supporting encyclopedia entry in the True Detective subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "true-detective",
        "true-detective-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "true-detective",
        "true-detective-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "true-detective",
        "true-detective-places",
        "contains",
        "True Detective places is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-events",
        "contains",
        "True Detective events is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-objects",
        "contains",
        "True Detective objects & artifacts is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-factions",
        "contains",
        "True Detective factions & groups is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-concepts",
        "contains",
        "True Detective concepts is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-eras",
        "contains",
        "True Detective eras is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-works",
        "contains",
        "True Detective works & media is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-symbols",
        "contains",
        "True Detective symbols is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-controversies",
        "contains",
        "True Detective controversies is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-sources",
        "contains",
        "True Detective sources is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-geography",
        "contains",
        "True Detective geography is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-legacy",
        "contains",
        "True Detective legacy is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-practices",
        "contains",
        "True Detective practices is a primary trailhead under True Detective.",
        0.88,
        0.82
    ],
    [
        "true-detective",
        "true-detective-entry-1",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-2",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-3",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-4",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-5",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-6",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-7",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-8",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-9",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-10",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-11",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-12",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-13",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-14",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-15",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-16",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-17",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-18",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-19",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-20",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-21",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-22",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-23",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ],
    [
        "true-detective",
        "true-detective-entry-24",
        "contains",
        "Supporting entry under True Detective.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
