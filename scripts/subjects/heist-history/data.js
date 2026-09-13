/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "heist-history",
        "name": "Famous heists",
        "type": "topic",
        "short_description": "Brinks, Hatton Garden, and the meticulously planned thefts that became crime folklore.",
        "description": "Brinks, Hatton Garden, and the meticulously planned thefts that became crime folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Famous heists so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "heist-history-figures",
        "name": "Famous heists figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Famous heists.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Famous heists."
    },
    {
        "slug": "heist-history-world",
        "name": "Famous heists world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Famous heists.",
        "description": "Geography, institutions, and periodization that give Famous heists its encyclopedia shape."
    },
    {
        "slug": "heist-history-places",
        "name": "Famous heists places",
        "type": "place",
        "short_description": "Locations and geographies that frame Famous heists.",
        "description": "Places, regions, and built sites that give Famous heists its map — where events and figures concentrate."
    },
    {
        "slug": "heist-history-events",
        "name": "Famous heists events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Famous heists.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Famous heists timeline."
    },
    {
        "slug": "heist-history-objects",
        "name": "Famous heists objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Famous heists.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Famous heists."
    },
    {
        "slug": "heist-history-factions",
        "name": "Famous heists factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Famous heists.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Famous heists."
    },
    {
        "slug": "heist-history-concepts",
        "name": "Famous heists concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Famous heists.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Famous heists readable as a lore graph."
    },
    {
        "slug": "heist-history-eras",
        "name": "Famous heists eras",
        "type": "event",
        "short_description": "Periodization for Famous heists.",
        "description": "Named eras and phases that help readers track how Famous heists changes across time."
    },
    {
        "slug": "heist-history-works",
        "name": "Famous heists works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Famous heists.",
        "description": "Primary works and adaptations through which most audiences encounter Famous heists."
    },
    {
        "slug": "heist-history-symbols",
        "name": "Famous heists symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Famous heists.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Famous heists."
    },
    {
        "slug": "heist-history-controversies",
        "name": "Famous heists controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Famous heists.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Famous heists argumentative."
    },
    {
        "slug": "heist-history-sources",
        "name": "Famous heists sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Famous heists.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Famous heists."
    },
    {
        "slug": "heist-history-geography",
        "name": "Famous heists geography",
        "type": "place",
        "short_description": "Broader geographic framing for Famous heists.",
        "description": "Regions, routes, and spatial systems that situate Famous heists beyond single named places."
    },
    {
        "slug": "heist-history-legacy",
        "name": "Famous heists legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Famous heists.",
        "description": "How Famous heists continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "heist-history-practices",
        "name": "Famous heists practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Famous heists.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Famous heists."
    },
    {
        "slug": "heist-history-entry-1",
        "name": "Famous heists entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-2",
        "name": "Famous heists entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-3",
        "name": "Famous heists entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-4",
        "name": "Famous heists entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-5",
        "name": "Famous heists entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-6",
        "name": "Famous heists entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-7",
        "name": "Famous heists entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-8",
        "name": "Famous heists entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-9",
        "name": "Famous heists entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-10",
        "name": "Famous heists entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-11",
        "name": "Famous heists entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-12",
        "name": "Famous heists entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-13",
        "name": "Famous heists entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-14",
        "name": "Famous heists entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-15",
        "name": "Famous heists entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-16",
        "name": "Famous heists entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-17",
        "name": "Famous heists entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-18",
        "name": "Famous heists entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-19",
        "name": "Famous heists entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-20",
        "name": "Famous heists entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-21",
        "name": "Famous heists entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-22",
        "name": "Famous heists entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-23",
        "name": "Famous heists entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heist-history-entry-24",
        "name": "Famous heists entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous heists.",
        "description": "A supporting encyclopedia entry in the Famous heists subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "heist-history",
        "heist-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "heist-history",
        "heist-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "heist-history",
        "heist-history-places",
        "contains",
        "Famous heists places is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-events",
        "contains",
        "Famous heists events is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-objects",
        "contains",
        "Famous heists objects & artifacts is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-factions",
        "contains",
        "Famous heists factions & groups is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-concepts",
        "contains",
        "Famous heists concepts is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-eras",
        "contains",
        "Famous heists eras is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-works",
        "contains",
        "Famous heists works & media is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-symbols",
        "contains",
        "Famous heists symbols is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-controversies",
        "contains",
        "Famous heists controversies is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-sources",
        "contains",
        "Famous heists sources is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-geography",
        "contains",
        "Famous heists geography is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-legacy",
        "contains",
        "Famous heists legacy is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-practices",
        "contains",
        "Famous heists practices is a primary trailhead under Famous heists.",
        0.88,
        0.82
    ],
    [
        "heist-history",
        "heist-history-entry-1",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-2",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-3",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-4",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-5",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-6",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-7",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-8",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-9",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-10",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-11",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-12",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-13",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-14",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-15",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-16",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-17",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-18",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-19",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-20",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-21",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-22",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-23",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ],
    [
        "heist-history",
        "heist-history-entry-24",
        "contains",
        "Supporting entry under Famous heists.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
