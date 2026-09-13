/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "area-51-lore",
        "name": "Area 51",
        "type": "topic",
        "short_description": "Groom Lake secrecy, black projects, and the desert base that became alien-conspiracy shorthand.",
        "description": "Groom Lake secrecy, black projects, and the desert base that became alien-conspiracy shorthand. This Ton-o-Lore subject maps people, places, events, and ideas tied to Area 51 so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "area-51-lore-figures",
        "name": "Area 51 figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Area 51.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Area 51."
    },
    {
        "slug": "area-51-lore-world",
        "name": "Area 51 world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Area 51.",
        "description": "Geography, institutions, and periodization that give Area 51 its encyclopedia shape."
    },
    {
        "slug": "area-51-lore-places",
        "name": "Area 51 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Area 51.",
        "description": "Places, regions, and built sites that give Area 51 its map — where events and figures concentrate."
    },
    {
        "slug": "area-51-lore-events",
        "name": "Area 51 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Area 51.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Area 51 timeline."
    },
    {
        "slug": "area-51-lore-objects",
        "name": "Area 51 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Area 51.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Area 51."
    },
    {
        "slug": "area-51-lore-factions",
        "name": "Area 51 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Area 51.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Area 51."
    },
    {
        "slug": "area-51-lore-concepts",
        "name": "Area 51 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Area 51.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Area 51 readable as a lore graph."
    },
    {
        "slug": "area-51-lore-eras",
        "name": "Area 51 eras",
        "type": "event",
        "short_description": "Periodization for Area 51.",
        "description": "Named eras and phases that help readers track how Area 51 changes across time."
    },
    {
        "slug": "area-51-lore-works",
        "name": "Area 51 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Area 51.",
        "description": "Primary works and adaptations through which most audiences encounter Area 51."
    },
    {
        "slug": "area-51-lore-symbols",
        "name": "Area 51 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Area 51.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Area 51."
    },
    {
        "slug": "area-51-lore-controversies",
        "name": "Area 51 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Area 51.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Area 51 argumentative."
    },
    {
        "slug": "area-51-lore-sources",
        "name": "Area 51 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Area 51.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Area 51."
    },
    {
        "slug": "area-51-lore-geography",
        "name": "Area 51 geography",
        "type": "place",
        "short_description": "Broader geographic framing for Area 51.",
        "description": "Regions, routes, and spatial systems that situate Area 51 beyond single named places."
    },
    {
        "slug": "area-51-lore-legacy",
        "name": "Area 51 legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Area 51.",
        "description": "How Area 51 continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "area-51-lore-practices",
        "name": "Area 51 practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Area 51.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Area 51."
    },
    {
        "slug": "area-51-lore-entry-1",
        "name": "Area 51 entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-2",
        "name": "Area 51 entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-3",
        "name": "Area 51 entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-4",
        "name": "Area 51 entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-5",
        "name": "Area 51 entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-6",
        "name": "Area 51 entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-7",
        "name": "Area 51 entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-8",
        "name": "Area 51 entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-9",
        "name": "Area 51 entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-10",
        "name": "Area 51 entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-11",
        "name": "Area 51 entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-12",
        "name": "Area 51 entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-13",
        "name": "Area 51 entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-14",
        "name": "Area 51 entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-15",
        "name": "Area 51 entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-16",
        "name": "Area 51 entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-17",
        "name": "Area 51 entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-18",
        "name": "Area 51 entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-19",
        "name": "Area 51 entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-20",
        "name": "Area 51 entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-21",
        "name": "Area 51 entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-22",
        "name": "Area 51 entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-23",
        "name": "Area 51 entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "area-51-lore-entry-24",
        "name": "Area 51 entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Area 51.",
        "description": "A supporting encyclopedia entry in the Area 51 subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "area-51-lore",
        "area-51-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "area-51-lore",
        "area-51-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "area-51-lore",
        "area-51-lore-places",
        "contains",
        "Area 51 places is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-events",
        "contains",
        "Area 51 events is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-objects",
        "contains",
        "Area 51 objects & artifacts is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-factions",
        "contains",
        "Area 51 factions & groups is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-concepts",
        "contains",
        "Area 51 concepts is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-eras",
        "contains",
        "Area 51 eras is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-works",
        "contains",
        "Area 51 works & media is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-symbols",
        "contains",
        "Area 51 symbols is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-controversies",
        "contains",
        "Area 51 controversies is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-sources",
        "contains",
        "Area 51 sources is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-geography",
        "contains",
        "Area 51 geography is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-legacy",
        "contains",
        "Area 51 legacy is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-practices",
        "contains",
        "Area 51 practices is a primary trailhead under Area 51.",
        0.88,
        0.82
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-1",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-2",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-3",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-4",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-5",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-6",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-7",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-8",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-9",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-10",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-11",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-12",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-13",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-14",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-15",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-16",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-17",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-18",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-19",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-20",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-21",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-22",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-23",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ],
    [
        "area-51-lore",
        "area-51-lore-entry-24",
        "contains",
        "Supporting entry under Area 51.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
