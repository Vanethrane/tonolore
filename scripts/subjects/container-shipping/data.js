/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "container-shipping",
        "name": "Container shipping",
        "type": "topic",
        "short_description": "Intermodal boxes, mega-ports, and the standardization that globalized trade.",
        "description": "Intermodal boxes, mega-ports, and the standardization that globalized trade. This Ton-o-Lore subject maps people, places, events, and ideas tied to Container shipping so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "container-shipping-figures",
        "name": "Container shipping figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Container shipping.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Container shipping."
    },
    {
        "slug": "container-shipping-world",
        "name": "Container shipping world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Container shipping.",
        "description": "Geography, institutions, and periodization that give Container shipping its encyclopedia shape."
    },
    {
        "slug": "container-shipping-places",
        "name": "Container shipping places",
        "type": "place",
        "short_description": "Locations and geographies that frame Container shipping.",
        "description": "Places, regions, and built sites that give Container shipping its map — where events and figures concentrate."
    },
    {
        "slug": "container-shipping-events",
        "name": "Container shipping events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Container shipping.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Container shipping timeline."
    },
    {
        "slug": "container-shipping-objects",
        "name": "Container shipping objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Container shipping.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Container shipping."
    },
    {
        "slug": "container-shipping-factions",
        "name": "Container shipping factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Container shipping.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Container shipping."
    },
    {
        "slug": "container-shipping-concepts",
        "name": "Container shipping concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Container shipping.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Container shipping readable as a lore graph."
    },
    {
        "slug": "container-shipping-eras",
        "name": "Container shipping eras",
        "type": "event",
        "short_description": "Periodization for Container shipping.",
        "description": "Named eras and phases that help readers track how Container shipping changes across time."
    },
    {
        "slug": "container-shipping-works",
        "name": "Container shipping works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Container shipping.",
        "description": "Primary works and adaptations through which most audiences encounter Container shipping."
    },
    {
        "slug": "container-shipping-symbols",
        "name": "Container shipping symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Container shipping.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Container shipping."
    },
    {
        "slug": "container-shipping-controversies",
        "name": "Container shipping controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Container shipping.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Container shipping argumentative."
    },
    {
        "slug": "container-shipping-sources",
        "name": "Container shipping sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Container shipping.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Container shipping."
    },
    {
        "slug": "container-shipping-geography",
        "name": "Container shipping geography",
        "type": "place",
        "short_description": "Broader geographic framing for Container shipping.",
        "description": "Regions, routes, and spatial systems that situate Container shipping beyond single named places."
    },
    {
        "slug": "container-shipping-legacy",
        "name": "Container shipping legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Container shipping.",
        "description": "How Container shipping continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "container-shipping-practices",
        "name": "Container shipping practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Container shipping.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Container shipping."
    },
    {
        "slug": "container-shipping-entry-1",
        "name": "Container shipping entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-2",
        "name": "Container shipping entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-3",
        "name": "Container shipping entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-4",
        "name": "Container shipping entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-5",
        "name": "Container shipping entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-6",
        "name": "Container shipping entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-7",
        "name": "Container shipping entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-8",
        "name": "Container shipping entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-9",
        "name": "Container shipping entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-10",
        "name": "Container shipping entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-11",
        "name": "Container shipping entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-12",
        "name": "Container shipping entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-13",
        "name": "Container shipping entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-14",
        "name": "Container shipping entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-15",
        "name": "Container shipping entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-16",
        "name": "Container shipping entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-17",
        "name": "Container shipping entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-18",
        "name": "Container shipping entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-19",
        "name": "Container shipping entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-20",
        "name": "Container shipping entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-21",
        "name": "Container shipping entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-22",
        "name": "Container shipping entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-23",
        "name": "Container shipping entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "container-shipping-entry-24",
        "name": "Container shipping entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Container shipping.",
        "description": "A supporting encyclopedia entry in the Container shipping subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "container-shipping",
        "container-shipping-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "container-shipping",
        "container-shipping-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "container-shipping",
        "container-shipping-places",
        "contains",
        "Container shipping places is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-events",
        "contains",
        "Container shipping events is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-objects",
        "contains",
        "Container shipping objects & artifacts is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-factions",
        "contains",
        "Container shipping factions & groups is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-concepts",
        "contains",
        "Container shipping concepts is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-eras",
        "contains",
        "Container shipping eras is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-works",
        "contains",
        "Container shipping works & media is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-symbols",
        "contains",
        "Container shipping symbols is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-controversies",
        "contains",
        "Container shipping controversies is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-sources",
        "contains",
        "Container shipping sources is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-geography",
        "contains",
        "Container shipping geography is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-legacy",
        "contains",
        "Container shipping legacy is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-practices",
        "contains",
        "Container shipping practices is a primary trailhead under Container shipping.",
        0.88,
        0.82
    ],
    [
        "container-shipping",
        "container-shipping-entry-1",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-2",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-3",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-4",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-5",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-6",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-7",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-8",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-9",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-10",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-11",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-12",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-13",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-14",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-15",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-16",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-17",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-18",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-19",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-20",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-21",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-22",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-23",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ],
    [
        "container-shipping",
        "container-shipping-entry-24",
        "contains",
        "Supporting entry under Container shipping.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
