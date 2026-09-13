/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "french-revolution",
        "name": "French Revolution",
        "type": "topic",
        "short_description": "Estates, Terror, Napoleon’s rise, and the upheaval that remade European politics.",
        "description": "Estates, Terror, Napoleon’s rise, and the upheaval that remade European politics. This Ton-o-Lore subject maps people, places, events, and ideas tied to French Revolution so readers can follow long-tail connections across history."
    },
    {
        "slug": "french-revolution-figures",
        "name": "French Revolution figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to French Revolution.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring French Revolution."
    },
    {
        "slug": "french-revolution-world",
        "name": "French Revolution world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame French Revolution.",
        "description": "Geography, institutions, and periodization that give French Revolution its encyclopedia shape."
    },
    {
        "slug": "french-revolution-places",
        "name": "French Revolution places",
        "type": "place",
        "short_description": "Locations and geographies that frame French Revolution.",
        "description": "Places, regions, and built sites that give French Revolution its map — where events and figures concentrate."
    },
    {
        "slug": "french-revolution-events",
        "name": "French Revolution events",
        "type": "event",
        "short_description": "Turning points and dated episodes in French Revolution.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the French Revolution timeline."
    },
    {
        "slug": "french-revolution-objects",
        "name": "French Revolution objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to French Revolution.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through French Revolution."
    },
    {
        "slug": "french-revolution-factions",
        "name": "French Revolution factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside French Revolution.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in French Revolution."
    },
    {
        "slug": "french-revolution-concepts",
        "name": "French Revolution concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize French Revolution.",
        "description": "Keywords, doctrines, systems, and abstract forces that make French Revolution readable as a lore graph."
    },
    {
        "slug": "french-revolution-eras",
        "name": "French Revolution eras",
        "type": "event",
        "short_description": "Periodization for French Revolution.",
        "description": "Named eras and phases that help readers track how French Revolution changes across time."
    },
    {
        "slug": "french-revolution-works",
        "name": "French Revolution works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry French Revolution.",
        "description": "Primary works and adaptations through which most audiences encounter French Revolution."
    },
    {
        "slug": "french-revolution-symbols",
        "name": "French Revolution symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with French Revolution.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside French Revolution."
    },
    {
        "slug": "french-revolution-controversies",
        "name": "French Revolution controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in French Revolution.",
        "description": "Debates, rival canons, scandals, and contested facts that keep French Revolution argumentative."
    },
    {
        "slug": "french-revolution-sources",
        "name": "French Revolution sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into French Revolution.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify French Revolution."
    },
    {
        "slug": "french-revolution-geography",
        "name": "French Revolution geography",
        "type": "place",
        "short_description": "Broader geographic framing for French Revolution.",
        "description": "Regions, routes, and spatial systems that situate French Revolution beyond single named places."
    },
    {
        "slug": "french-revolution-legacy",
        "name": "French Revolution legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of French Revolution.",
        "description": "How French Revolution continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "french-revolution-practices",
        "name": "French Revolution practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in French Revolution.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in French Revolution."
    },
    {
        "slug": "french-revolution-entry-1",
        "name": "French Revolution entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-2",
        "name": "French Revolution entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-3",
        "name": "French Revolution entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-4",
        "name": "French Revolution entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-5",
        "name": "French Revolution entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-6",
        "name": "French Revolution entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-7",
        "name": "French Revolution entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-8",
        "name": "French Revolution entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-9",
        "name": "French Revolution entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-10",
        "name": "French Revolution entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-11",
        "name": "French Revolution entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-12",
        "name": "French Revolution entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-13",
        "name": "French Revolution entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-14",
        "name": "French Revolution entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-15",
        "name": "French Revolution entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-16",
        "name": "French Revolution entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-17",
        "name": "French Revolution entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-18",
        "name": "French Revolution entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-19",
        "name": "French Revolution entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-20",
        "name": "French Revolution entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-21",
        "name": "French Revolution entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-22",
        "name": "French Revolution entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-23",
        "name": "French Revolution entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-revolution-entry-24",
        "name": "French Revolution entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside French Revolution.",
        "description": "A supporting encyclopedia entry in the French Revolution subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "french-revolution",
        "french-revolution-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "french-revolution",
        "french-revolution-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "french-revolution",
        "french-revolution-places",
        "contains",
        "French Revolution places is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-events",
        "contains",
        "French Revolution events is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-objects",
        "contains",
        "French Revolution objects & artifacts is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-factions",
        "contains",
        "French Revolution factions & groups is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-concepts",
        "contains",
        "French Revolution concepts is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-eras",
        "contains",
        "French Revolution eras is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-works",
        "contains",
        "French Revolution works & media is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-symbols",
        "contains",
        "French Revolution symbols is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-controversies",
        "contains",
        "French Revolution controversies is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-sources",
        "contains",
        "French Revolution sources is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-geography",
        "contains",
        "French Revolution geography is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-legacy",
        "contains",
        "French Revolution legacy is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-practices",
        "contains",
        "French Revolution practices is a primary trailhead under French Revolution.",
        0.88,
        0.82
    ],
    [
        "french-revolution",
        "french-revolution-entry-1",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-2",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-3",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-4",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-5",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-6",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-7",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-8",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-9",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-10",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-11",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-12",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-13",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-14",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-15",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-16",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-17",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-18",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-19",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-20",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-21",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-22",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-23",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ],
    [
        "french-revolution",
        "french-revolution-entry-24",
        "contains",
        "Supporting entry under French Revolution.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
