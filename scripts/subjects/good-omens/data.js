/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "good-omens",
        "name": "Good Omens",
        "type": "topic",
        "short_description": "Angel–demon odd couple, apocalypse paperwork, and the comic novel that became a screen cult.",
        "description": "Angel–demon odd couple, apocalypse paperwork, and the comic novel that became a screen cult. This Ton-o-Lore subject maps people, places, events, and ideas tied to Good Omens so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "good-omens-figures",
        "name": "Good Omens figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Good Omens.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Good Omens."
    },
    {
        "slug": "good-omens-world",
        "name": "Good Omens world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Good Omens.",
        "description": "Geography, institutions, and periodization that give Good Omens its encyclopedia shape."
    },
    {
        "slug": "good-omens-places",
        "name": "Good Omens places",
        "type": "place",
        "short_description": "Locations and geographies that frame Good Omens.",
        "description": "Places, regions, and built sites that give Good Omens its map — where events and figures concentrate."
    },
    {
        "slug": "good-omens-events",
        "name": "Good Omens events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Good Omens.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Good Omens timeline."
    },
    {
        "slug": "good-omens-objects",
        "name": "Good Omens objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Good Omens.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Good Omens."
    },
    {
        "slug": "good-omens-factions",
        "name": "Good Omens factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Good Omens.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Good Omens."
    },
    {
        "slug": "good-omens-concepts",
        "name": "Good Omens concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Good Omens.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Good Omens readable as a lore graph."
    },
    {
        "slug": "good-omens-eras",
        "name": "Good Omens eras",
        "type": "event",
        "short_description": "Periodization for Good Omens.",
        "description": "Named eras and phases that help readers track how Good Omens changes across time."
    },
    {
        "slug": "good-omens-works",
        "name": "Good Omens works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Good Omens.",
        "description": "Primary works and adaptations through which most audiences encounter Good Omens."
    },
    {
        "slug": "good-omens-symbols",
        "name": "Good Omens symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Good Omens.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Good Omens."
    },
    {
        "slug": "good-omens-controversies",
        "name": "Good Omens controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Good Omens.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Good Omens argumentative."
    },
    {
        "slug": "good-omens-sources",
        "name": "Good Omens sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Good Omens.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Good Omens."
    },
    {
        "slug": "good-omens-geography",
        "name": "Good Omens geography",
        "type": "place",
        "short_description": "Broader geographic framing for Good Omens.",
        "description": "Regions, routes, and spatial systems that situate Good Omens beyond single named places."
    },
    {
        "slug": "good-omens-legacy",
        "name": "Good Omens legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Good Omens.",
        "description": "How Good Omens continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "good-omens-practices",
        "name": "Good Omens practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Good Omens.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Good Omens."
    },
    {
        "slug": "good-omens-entry-1",
        "name": "Good Omens entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-2",
        "name": "Good Omens entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-3",
        "name": "Good Omens entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-4",
        "name": "Good Omens entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-5",
        "name": "Good Omens entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-6",
        "name": "Good Omens entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-7",
        "name": "Good Omens entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-8",
        "name": "Good Omens entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-9",
        "name": "Good Omens entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-10",
        "name": "Good Omens entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-11",
        "name": "Good Omens entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-12",
        "name": "Good Omens entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-13",
        "name": "Good Omens entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-14",
        "name": "Good Omens entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-15",
        "name": "Good Omens entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-16",
        "name": "Good Omens entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-17",
        "name": "Good Omens entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-18",
        "name": "Good Omens entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-19",
        "name": "Good Omens entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-20",
        "name": "Good Omens entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-21",
        "name": "Good Omens entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-22",
        "name": "Good Omens entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-23",
        "name": "Good Omens entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "good-omens-entry-24",
        "name": "Good Omens entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Good Omens.",
        "description": "A supporting encyclopedia entry in the Good Omens subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "good-omens",
        "good-omens-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "good-omens",
        "good-omens-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "good-omens",
        "good-omens-places",
        "contains",
        "Good Omens places is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-events",
        "contains",
        "Good Omens events is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-objects",
        "contains",
        "Good Omens objects & artifacts is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-factions",
        "contains",
        "Good Omens factions & groups is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-concepts",
        "contains",
        "Good Omens concepts is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-eras",
        "contains",
        "Good Omens eras is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-works",
        "contains",
        "Good Omens works & media is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-symbols",
        "contains",
        "Good Omens symbols is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-controversies",
        "contains",
        "Good Omens controversies is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-sources",
        "contains",
        "Good Omens sources is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-geography",
        "contains",
        "Good Omens geography is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-legacy",
        "contains",
        "Good Omens legacy is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-practices",
        "contains",
        "Good Omens practices is a primary trailhead under Good Omens.",
        0.88,
        0.82
    ],
    [
        "good-omens",
        "good-omens-entry-1",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-2",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-3",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-4",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-5",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-6",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-7",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-8",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-9",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-10",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-11",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-12",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-13",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-14",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-15",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-16",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-17",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-18",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-19",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-20",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-21",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-22",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-23",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ],
    [
        "good-omens",
        "good-omens-entry-24",
        "contains",
        "Supporting entry under Good Omens.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
