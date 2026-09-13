/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "panama-canal",
        "name": "Panama Canal",
        "type": "topic",
        "short_description": "Locks, fever, and the American-built shortcut between Atlantic and Pacific.",
        "description": "Locks, fever, and the American-built shortcut between Atlantic and Pacific. This Ton-o-Lore subject maps people, places, events, and ideas tied to Panama Canal so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "panama-canal-figures",
        "name": "Panama Canal figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Panama Canal.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Panama Canal."
    },
    {
        "slug": "panama-canal-world",
        "name": "Panama Canal world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Panama Canal.",
        "description": "Geography, institutions, and periodization that give Panama Canal its encyclopedia shape."
    },
    {
        "slug": "panama-canal-places",
        "name": "Panama Canal places",
        "type": "place",
        "short_description": "Locations and geographies that frame Panama Canal.",
        "description": "Places, regions, and built sites that give Panama Canal its map — where events and figures concentrate."
    },
    {
        "slug": "panama-canal-events",
        "name": "Panama Canal events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Panama Canal.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Panama Canal timeline."
    },
    {
        "slug": "panama-canal-objects",
        "name": "Panama Canal objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Panama Canal.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Panama Canal."
    },
    {
        "slug": "panama-canal-factions",
        "name": "Panama Canal factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Panama Canal.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Panama Canal."
    },
    {
        "slug": "panama-canal-concepts",
        "name": "Panama Canal concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Panama Canal.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Panama Canal readable as a lore graph."
    },
    {
        "slug": "panama-canal-eras",
        "name": "Panama Canal eras",
        "type": "event",
        "short_description": "Periodization for Panama Canal.",
        "description": "Named eras and phases that help readers track how Panama Canal changes across time."
    },
    {
        "slug": "panama-canal-works",
        "name": "Panama Canal works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Panama Canal.",
        "description": "Primary works and adaptations through which most audiences encounter Panama Canal."
    },
    {
        "slug": "panama-canal-symbols",
        "name": "Panama Canal symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Panama Canal.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Panama Canal."
    },
    {
        "slug": "panama-canal-controversies",
        "name": "Panama Canal controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Panama Canal.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Panama Canal argumentative."
    },
    {
        "slug": "panama-canal-sources",
        "name": "Panama Canal sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Panama Canal.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Panama Canal."
    },
    {
        "slug": "panama-canal-geography",
        "name": "Panama Canal geography",
        "type": "place",
        "short_description": "Broader geographic framing for Panama Canal.",
        "description": "Regions, routes, and spatial systems that situate Panama Canal beyond single named places."
    },
    {
        "slug": "panama-canal-legacy",
        "name": "Panama Canal legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Panama Canal.",
        "description": "How Panama Canal continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "panama-canal-practices",
        "name": "Panama Canal practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Panama Canal.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Panama Canal."
    },
    {
        "slug": "panama-canal-entry-1",
        "name": "Panama Canal entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-2",
        "name": "Panama Canal entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-3",
        "name": "Panama Canal entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-4",
        "name": "Panama Canal entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-5",
        "name": "Panama Canal entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-6",
        "name": "Panama Canal entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-7",
        "name": "Panama Canal entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-8",
        "name": "Panama Canal entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-9",
        "name": "Panama Canal entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-10",
        "name": "Panama Canal entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-11",
        "name": "Panama Canal entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-12",
        "name": "Panama Canal entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-13",
        "name": "Panama Canal entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-14",
        "name": "Panama Canal entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-15",
        "name": "Panama Canal entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-16",
        "name": "Panama Canal entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-17",
        "name": "Panama Canal entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-18",
        "name": "Panama Canal entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-19",
        "name": "Panama Canal entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-20",
        "name": "Panama Canal entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-21",
        "name": "Panama Canal entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-22",
        "name": "Panama Canal entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-23",
        "name": "Panama Canal entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "panama-canal-entry-24",
        "name": "Panama Canal entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Panama Canal.",
        "description": "A supporting encyclopedia entry in the Panama Canal subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "panama-canal",
        "panama-canal-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "panama-canal",
        "panama-canal-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "panama-canal",
        "panama-canal-places",
        "contains",
        "Panama Canal places is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-events",
        "contains",
        "Panama Canal events is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-objects",
        "contains",
        "Panama Canal objects & artifacts is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-factions",
        "contains",
        "Panama Canal factions & groups is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-concepts",
        "contains",
        "Panama Canal concepts is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-eras",
        "contains",
        "Panama Canal eras is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-works",
        "contains",
        "Panama Canal works & media is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-symbols",
        "contains",
        "Panama Canal symbols is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-controversies",
        "contains",
        "Panama Canal controversies is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-sources",
        "contains",
        "Panama Canal sources is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-geography",
        "contains",
        "Panama Canal geography is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-legacy",
        "contains",
        "Panama Canal legacy is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-practices",
        "contains",
        "Panama Canal practices is a primary trailhead under Panama Canal.",
        0.88,
        0.82
    ],
    [
        "panama-canal",
        "panama-canal-entry-1",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-2",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-3",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-4",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-5",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-6",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-7",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-8",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-9",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-10",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-11",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-12",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-13",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-14",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-15",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-16",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-17",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-18",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-19",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-20",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-21",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-22",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-23",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ],
    [
        "panama-canal",
        "panama-canal-entry-24",
        "contains",
        "Supporting entry under Panama Canal.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
