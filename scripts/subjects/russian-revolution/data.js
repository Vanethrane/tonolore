/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "russian-revolution",
        "name": "Russian Revolution",
        "type": "topic",
        "short_description": "1917 upheavals, Bolsheviks, civil war, and the birth of the Soviet state.",
        "description": "1917 upheavals, Bolsheviks, civil war, and the birth of the Soviet state. This Ton-o-Lore subject maps people, places, events, and ideas tied to Russian Revolution so readers can follow long-tail connections across history."
    },
    {
        "slug": "russian-revolution-figures",
        "name": "Russian Revolution figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Russian Revolution.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Russian Revolution."
    },
    {
        "slug": "russian-revolution-world",
        "name": "Russian Revolution world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Russian Revolution.",
        "description": "Geography, institutions, and periodization that give Russian Revolution its encyclopedia shape."
    },
    {
        "slug": "russian-revolution-places",
        "name": "Russian Revolution places",
        "type": "place",
        "short_description": "Locations and geographies that frame Russian Revolution.",
        "description": "Places, regions, and built sites that give Russian Revolution its map — where events and figures concentrate."
    },
    {
        "slug": "russian-revolution-events",
        "name": "Russian Revolution events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Russian Revolution.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Russian Revolution timeline."
    },
    {
        "slug": "russian-revolution-objects",
        "name": "Russian Revolution objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Russian Revolution.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Russian Revolution."
    },
    {
        "slug": "russian-revolution-factions",
        "name": "Russian Revolution factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Russian Revolution.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Russian Revolution."
    },
    {
        "slug": "russian-revolution-concepts",
        "name": "Russian Revolution concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Russian Revolution.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Russian Revolution readable as a lore graph."
    },
    {
        "slug": "russian-revolution-eras",
        "name": "Russian Revolution eras",
        "type": "event",
        "short_description": "Periodization for Russian Revolution.",
        "description": "Named eras and phases that help readers track how Russian Revolution changes across time."
    },
    {
        "slug": "russian-revolution-works",
        "name": "Russian Revolution works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Russian Revolution.",
        "description": "Primary works and adaptations through which most audiences encounter Russian Revolution."
    },
    {
        "slug": "russian-revolution-symbols",
        "name": "Russian Revolution symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Russian Revolution.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Russian Revolution."
    },
    {
        "slug": "russian-revolution-controversies",
        "name": "Russian Revolution controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Russian Revolution.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Russian Revolution argumentative."
    },
    {
        "slug": "russian-revolution-sources",
        "name": "Russian Revolution sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Russian Revolution.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Russian Revolution."
    },
    {
        "slug": "russian-revolution-geography",
        "name": "Russian Revolution geography",
        "type": "place",
        "short_description": "Broader geographic framing for Russian Revolution.",
        "description": "Regions, routes, and spatial systems that situate Russian Revolution beyond single named places."
    },
    {
        "slug": "russian-revolution-legacy",
        "name": "Russian Revolution legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Russian Revolution.",
        "description": "How Russian Revolution continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "russian-revolution-practices",
        "name": "Russian Revolution practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Russian Revolution.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Russian Revolution."
    },
    {
        "slug": "russian-revolution-entry-1",
        "name": "Russian Revolution entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-2",
        "name": "Russian Revolution entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-3",
        "name": "Russian Revolution entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-4",
        "name": "Russian Revolution entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-5",
        "name": "Russian Revolution entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-6",
        "name": "Russian Revolution entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-7",
        "name": "Russian Revolution entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-8",
        "name": "Russian Revolution entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-9",
        "name": "Russian Revolution entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-10",
        "name": "Russian Revolution entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-11",
        "name": "Russian Revolution entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-12",
        "name": "Russian Revolution entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-13",
        "name": "Russian Revolution entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-14",
        "name": "Russian Revolution entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-15",
        "name": "Russian Revolution entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-16",
        "name": "Russian Revolution entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-17",
        "name": "Russian Revolution entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-18",
        "name": "Russian Revolution entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-19",
        "name": "Russian Revolution entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-20",
        "name": "Russian Revolution entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-21",
        "name": "Russian Revolution entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-22",
        "name": "Russian Revolution entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-23",
        "name": "Russian Revolution entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "russian-revolution-entry-24",
        "name": "Russian Revolution entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Russian Revolution.",
        "description": "A supporting encyclopedia entry in the Russian Revolution subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "russian-revolution",
        "russian-revolution-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "russian-revolution",
        "russian-revolution-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "russian-revolution",
        "russian-revolution-places",
        "contains",
        "Russian Revolution places is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-events",
        "contains",
        "Russian Revolution events is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-objects",
        "contains",
        "Russian Revolution objects & artifacts is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-factions",
        "contains",
        "Russian Revolution factions & groups is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-concepts",
        "contains",
        "Russian Revolution concepts is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-eras",
        "contains",
        "Russian Revolution eras is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-works",
        "contains",
        "Russian Revolution works & media is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-symbols",
        "contains",
        "Russian Revolution symbols is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-controversies",
        "contains",
        "Russian Revolution controversies is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-sources",
        "contains",
        "Russian Revolution sources is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-geography",
        "contains",
        "Russian Revolution geography is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-legacy",
        "contains",
        "Russian Revolution legacy is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-practices",
        "contains",
        "Russian Revolution practices is a primary trailhead under Russian Revolution.",
        0.88,
        0.82
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-1",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-2",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-3",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-4",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-5",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-6",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-7",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-8",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-9",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-10",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-11",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-12",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-13",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-14",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-15",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-16",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-17",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-18",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-19",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-20",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-21",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-22",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-23",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ],
    [
        "russian-revolution",
        "russian-revolution-entry-24",
        "contains",
        "Supporting entry under Russian Revolution.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
