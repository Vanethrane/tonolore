/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "beijing-opera",
        "name": "Beijing opera",
        "type": "topic",
        "short_description": "Painted faces, martial spectacle, and the Chinese opera form that became a national emblem.",
        "description": "Painted faces, martial spectacle, and the Chinese opera form that became a national emblem. This Ton-o-Lore subject maps people, places, events, and ideas tied to Beijing opera so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "beijing-opera-figures",
        "name": "Beijing opera figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Beijing opera.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Beijing opera."
    },
    {
        "slug": "beijing-opera-world",
        "name": "Beijing opera world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Beijing opera.",
        "description": "Geography, institutions, and periodization that give Beijing opera its encyclopedia shape."
    },
    {
        "slug": "beijing-opera-places",
        "name": "Beijing opera places",
        "type": "place",
        "short_description": "Locations and geographies that frame Beijing opera.",
        "description": "Places, regions, and built sites that give Beijing opera its map — where events and figures concentrate."
    },
    {
        "slug": "beijing-opera-events",
        "name": "Beijing opera events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Beijing opera.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Beijing opera timeline."
    },
    {
        "slug": "beijing-opera-objects",
        "name": "Beijing opera objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Beijing opera.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Beijing opera."
    },
    {
        "slug": "beijing-opera-factions",
        "name": "Beijing opera factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Beijing opera.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Beijing opera."
    },
    {
        "slug": "beijing-opera-concepts",
        "name": "Beijing opera concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Beijing opera.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Beijing opera readable as a lore graph."
    },
    {
        "slug": "beijing-opera-eras",
        "name": "Beijing opera eras",
        "type": "event",
        "short_description": "Periodization for Beijing opera.",
        "description": "Named eras and phases that help readers track how Beijing opera changes across time."
    },
    {
        "slug": "beijing-opera-works",
        "name": "Beijing opera works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Beijing opera.",
        "description": "Primary works and adaptations through which most audiences encounter Beijing opera."
    },
    {
        "slug": "beijing-opera-symbols",
        "name": "Beijing opera symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Beijing opera.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Beijing opera."
    },
    {
        "slug": "beijing-opera-controversies",
        "name": "Beijing opera controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Beijing opera.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Beijing opera argumentative."
    },
    {
        "slug": "beijing-opera-sources",
        "name": "Beijing opera sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Beijing opera.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Beijing opera."
    },
    {
        "slug": "beijing-opera-geography",
        "name": "Beijing opera geography",
        "type": "place",
        "short_description": "Broader geographic framing for Beijing opera.",
        "description": "Regions, routes, and spatial systems that situate Beijing opera beyond single named places."
    },
    {
        "slug": "beijing-opera-legacy",
        "name": "Beijing opera legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Beijing opera.",
        "description": "How Beijing opera continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "beijing-opera-practices",
        "name": "Beijing opera practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Beijing opera.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Beijing opera."
    },
    {
        "slug": "beijing-opera-entry-1",
        "name": "Beijing opera entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-2",
        "name": "Beijing opera entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-3",
        "name": "Beijing opera entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-4",
        "name": "Beijing opera entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-5",
        "name": "Beijing opera entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-6",
        "name": "Beijing opera entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-7",
        "name": "Beijing opera entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-8",
        "name": "Beijing opera entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-9",
        "name": "Beijing opera entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-10",
        "name": "Beijing opera entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-11",
        "name": "Beijing opera entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-12",
        "name": "Beijing opera entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-13",
        "name": "Beijing opera entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-14",
        "name": "Beijing opera entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-15",
        "name": "Beijing opera entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-16",
        "name": "Beijing opera entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-17",
        "name": "Beijing opera entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-18",
        "name": "Beijing opera entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-19",
        "name": "Beijing opera entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-20",
        "name": "Beijing opera entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-21",
        "name": "Beijing opera entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-22",
        "name": "Beijing opera entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-23",
        "name": "Beijing opera entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beijing-opera-entry-24",
        "name": "Beijing opera entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beijing opera.",
        "description": "A supporting encyclopedia entry in the Beijing opera subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "beijing-opera",
        "beijing-opera-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "beijing-opera",
        "beijing-opera-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "beijing-opera",
        "beijing-opera-places",
        "contains",
        "Beijing opera places is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-events",
        "contains",
        "Beijing opera events is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-objects",
        "contains",
        "Beijing opera objects & artifacts is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-factions",
        "contains",
        "Beijing opera factions & groups is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-concepts",
        "contains",
        "Beijing opera concepts is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-eras",
        "contains",
        "Beijing opera eras is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-works",
        "contains",
        "Beijing opera works & media is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-symbols",
        "contains",
        "Beijing opera symbols is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-controversies",
        "contains",
        "Beijing opera controversies is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-sources",
        "contains",
        "Beijing opera sources is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-geography",
        "contains",
        "Beijing opera geography is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-legacy",
        "contains",
        "Beijing opera legacy is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-practices",
        "contains",
        "Beijing opera practices is a primary trailhead under Beijing opera.",
        0.88,
        0.82
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-1",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-2",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-3",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-4",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-5",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-6",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-7",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-8",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-9",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-10",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-11",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-12",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-13",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-14",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-15",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-16",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-17",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-18",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-19",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-20",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-21",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-22",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-23",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ],
    [
        "beijing-opera",
        "beijing-opera-entry-24",
        "contains",
        "Supporting entry under Beijing opera.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
