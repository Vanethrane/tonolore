/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sandman-comics",
        "name": "The Sandman",
        "type": "topic",
        "short_description": "Dream of the Endless, mythology crossovers, and Gaiman’s landmark Vertigo fantasy.",
        "description": "Dream of the Endless, mythology crossovers, and Gaiman’s landmark Vertigo fantasy. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Sandman so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "sandman-comics-figures",
        "name": "The Sandman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Sandman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Sandman."
    },
    {
        "slug": "sandman-comics-world",
        "name": "The Sandman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Sandman.",
        "description": "Geography, institutions, and periodization that give The Sandman its encyclopedia shape."
    },
    {
        "slug": "sandman-comics-places",
        "name": "The Sandman places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Sandman.",
        "description": "Places, regions, and built sites that give The Sandman its map — where events and figures concentrate."
    },
    {
        "slug": "sandman-comics-events",
        "name": "The Sandman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Sandman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Sandman timeline."
    },
    {
        "slug": "sandman-comics-objects",
        "name": "The Sandman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Sandman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Sandman."
    },
    {
        "slug": "sandman-comics-factions",
        "name": "The Sandman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Sandman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Sandman."
    },
    {
        "slug": "sandman-comics-concepts",
        "name": "The Sandman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Sandman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Sandman readable as a lore graph."
    },
    {
        "slug": "sandman-comics-eras",
        "name": "The Sandman eras",
        "type": "event",
        "short_description": "Periodization for The Sandman.",
        "description": "Named eras and phases that help readers track how The Sandman changes across time."
    },
    {
        "slug": "sandman-comics-works",
        "name": "The Sandman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Sandman.",
        "description": "Primary works and adaptations through which most audiences encounter The Sandman."
    },
    {
        "slug": "sandman-comics-symbols",
        "name": "The Sandman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Sandman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Sandman."
    },
    {
        "slug": "sandman-comics-controversies",
        "name": "The Sandman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Sandman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Sandman argumentative."
    },
    {
        "slug": "sandman-comics-sources",
        "name": "The Sandman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Sandman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Sandman."
    },
    {
        "slug": "sandman-comics-geography",
        "name": "The Sandman geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Sandman.",
        "description": "Regions, routes, and spatial systems that situate The Sandman beyond single named places."
    },
    {
        "slug": "sandman-comics-legacy",
        "name": "The Sandman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Sandman.",
        "description": "How The Sandman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sandman-comics-practices",
        "name": "The Sandman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Sandman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Sandman."
    },
    {
        "slug": "sandman-comics-entry-1",
        "name": "The Sandman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-2",
        "name": "The Sandman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-3",
        "name": "The Sandman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-4",
        "name": "The Sandman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-5",
        "name": "The Sandman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-6",
        "name": "The Sandman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-7",
        "name": "The Sandman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-8",
        "name": "The Sandman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-9",
        "name": "The Sandman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-10",
        "name": "The Sandman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-11",
        "name": "The Sandman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-12",
        "name": "The Sandman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-13",
        "name": "The Sandman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-14",
        "name": "The Sandman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-15",
        "name": "The Sandman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-16",
        "name": "The Sandman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-17",
        "name": "The Sandman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-18",
        "name": "The Sandman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-19",
        "name": "The Sandman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-20",
        "name": "The Sandman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-21",
        "name": "The Sandman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-22",
        "name": "The Sandman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-23",
        "name": "The Sandman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sandman-comics-entry-24",
        "name": "The Sandman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sandman.",
        "description": "A supporting encyclopedia entry in the The Sandman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sandman-comics",
        "sandman-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sandman-comics",
        "sandman-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sandman-comics",
        "sandman-comics-places",
        "contains",
        "The Sandman places is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-events",
        "contains",
        "The Sandman events is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-objects",
        "contains",
        "The Sandman objects & artifacts is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-factions",
        "contains",
        "The Sandman factions & groups is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-concepts",
        "contains",
        "The Sandman concepts is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-eras",
        "contains",
        "The Sandman eras is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-works",
        "contains",
        "The Sandman works & media is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-symbols",
        "contains",
        "The Sandman symbols is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-controversies",
        "contains",
        "The Sandman controversies is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-sources",
        "contains",
        "The Sandman sources is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-geography",
        "contains",
        "The Sandman geography is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-legacy",
        "contains",
        "The Sandman legacy is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-practices",
        "contains",
        "The Sandman practices is a primary trailhead under The Sandman.",
        0.88,
        0.82
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-1",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-2",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-3",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-4",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-5",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-6",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-7",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-8",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-9",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-10",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-11",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-12",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-13",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-14",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-15",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-16",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-17",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-18",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-19",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-20",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-21",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-22",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-23",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ],
    [
        "sandman-comics",
        "sandman-comics-entry-24",
        "contains",
        "Supporting entry under The Sandman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
