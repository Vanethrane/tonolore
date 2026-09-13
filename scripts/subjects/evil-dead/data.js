/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "evil-dead",
        "name": "Evil Dead",
        "type": "topic",
        "short_description": "Necronomicon chaos, Deadites, and Ash’s cabin-cabin continuum of gonzo horror.",
        "description": "Necronomicon chaos, Deadites, and Ash’s cabin-cabin continuum of gonzo horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to Evil Dead so readers can follow long-tail connections across horror."
    },
    {
        "slug": "evil-dead-figures",
        "name": "Evil Dead figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Evil Dead.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Evil Dead."
    },
    {
        "slug": "evil-dead-world",
        "name": "Evil Dead world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Evil Dead.",
        "description": "Geography, institutions, and periodization that give Evil Dead its encyclopedia shape."
    },
    {
        "slug": "evil-dead-places",
        "name": "Evil Dead places",
        "type": "place",
        "short_description": "Locations and geographies that frame Evil Dead.",
        "description": "Places, regions, and built sites that give Evil Dead its map — where events and figures concentrate."
    },
    {
        "slug": "evil-dead-events",
        "name": "Evil Dead events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Evil Dead.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Evil Dead timeline."
    },
    {
        "slug": "evil-dead-objects",
        "name": "Evil Dead objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Evil Dead.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Evil Dead."
    },
    {
        "slug": "evil-dead-factions",
        "name": "Evil Dead factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Evil Dead.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Evil Dead."
    },
    {
        "slug": "evil-dead-concepts",
        "name": "Evil Dead concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Evil Dead.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Evil Dead readable as a lore graph."
    },
    {
        "slug": "evil-dead-eras",
        "name": "Evil Dead eras",
        "type": "event",
        "short_description": "Periodization for Evil Dead.",
        "description": "Named eras and phases that help readers track how Evil Dead changes across time."
    },
    {
        "slug": "evil-dead-works",
        "name": "Evil Dead works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Evil Dead.",
        "description": "Primary works and adaptations through which most audiences encounter Evil Dead."
    },
    {
        "slug": "evil-dead-symbols",
        "name": "Evil Dead symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Evil Dead.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Evil Dead."
    },
    {
        "slug": "evil-dead-controversies",
        "name": "Evil Dead controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Evil Dead.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Evil Dead argumentative."
    },
    {
        "slug": "evil-dead-sources",
        "name": "Evil Dead sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Evil Dead.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Evil Dead."
    },
    {
        "slug": "evil-dead-geography",
        "name": "Evil Dead geography",
        "type": "place",
        "short_description": "Broader geographic framing for Evil Dead.",
        "description": "Regions, routes, and spatial systems that situate Evil Dead beyond single named places."
    },
    {
        "slug": "evil-dead-legacy",
        "name": "Evil Dead legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Evil Dead.",
        "description": "How Evil Dead continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "evil-dead-practices",
        "name": "Evil Dead practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Evil Dead.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Evil Dead."
    },
    {
        "slug": "evil-dead-entry-1",
        "name": "Evil Dead entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-2",
        "name": "Evil Dead entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-3",
        "name": "Evil Dead entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-4",
        "name": "Evil Dead entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-5",
        "name": "Evil Dead entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-6",
        "name": "Evil Dead entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-7",
        "name": "Evil Dead entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-8",
        "name": "Evil Dead entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-9",
        "name": "Evil Dead entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-10",
        "name": "Evil Dead entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-11",
        "name": "Evil Dead entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-12",
        "name": "Evil Dead entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-13",
        "name": "Evil Dead entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-14",
        "name": "Evil Dead entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-15",
        "name": "Evil Dead entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-16",
        "name": "Evil Dead entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-17",
        "name": "Evil Dead entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-18",
        "name": "Evil Dead entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-19",
        "name": "Evil Dead entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-20",
        "name": "Evil Dead entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-21",
        "name": "Evil Dead entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-22",
        "name": "Evil Dead entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-23",
        "name": "Evil Dead entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evil-dead-entry-24",
        "name": "Evil Dead entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evil Dead.",
        "description": "A supporting encyclopedia entry in the Evil Dead subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "evil-dead",
        "evil-dead-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "evil-dead",
        "evil-dead-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "evil-dead",
        "evil-dead-places",
        "contains",
        "Evil Dead places is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-events",
        "contains",
        "Evil Dead events is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-objects",
        "contains",
        "Evil Dead objects & artifacts is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-factions",
        "contains",
        "Evil Dead factions & groups is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-concepts",
        "contains",
        "Evil Dead concepts is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-eras",
        "contains",
        "Evil Dead eras is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-works",
        "contains",
        "Evil Dead works & media is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-symbols",
        "contains",
        "Evil Dead symbols is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-controversies",
        "contains",
        "Evil Dead controversies is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-sources",
        "contains",
        "Evil Dead sources is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-geography",
        "contains",
        "Evil Dead geography is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-legacy",
        "contains",
        "Evil Dead legacy is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-practices",
        "contains",
        "Evil Dead practices is a primary trailhead under Evil Dead.",
        0.88,
        0.82
    ],
    [
        "evil-dead",
        "evil-dead-entry-1",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-2",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-3",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-4",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-5",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-6",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-7",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-8",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-9",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-10",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-11",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-12",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-13",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-14",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-15",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-16",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-17",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-18",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-19",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-20",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-21",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-22",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-23",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ],
    [
        "evil-dead",
        "evil-dead-entry-24",
        "contains",
        "Supporting entry under Evil Dead.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
