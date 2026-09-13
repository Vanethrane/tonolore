/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-last-of-us",
        "name": "The Last of Us",
        "type": "topic",
        "short_description": "Cordyceps apocalypse, Joel and Ellie, and the grounded narrative that crossed to prestige TV.",
        "description": "Cordyceps apocalypse, Joel and Ellie, and the grounded narrative that crossed to prestige TV. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Last of Us so readers can follow long-tail connections across video games."
    },
    {
        "slug": "the-last-of-us-figures",
        "name": "The Last of Us figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Last of Us.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Last of Us."
    },
    {
        "slug": "the-last-of-us-world",
        "name": "The Last of Us world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Last of Us.",
        "description": "Geography, institutions, and periodization that give The Last of Us its encyclopedia shape."
    },
    {
        "slug": "the-last-of-us-places",
        "name": "The Last of Us places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Last of Us.",
        "description": "Places, regions, and built sites that give The Last of Us its map — where events and figures concentrate."
    },
    {
        "slug": "the-last-of-us-events",
        "name": "The Last of Us events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Last of Us.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Last of Us timeline."
    },
    {
        "slug": "the-last-of-us-objects",
        "name": "The Last of Us objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Last of Us.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Last of Us."
    },
    {
        "slug": "the-last-of-us-factions",
        "name": "The Last of Us factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Last of Us.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Last of Us."
    },
    {
        "slug": "the-last-of-us-concepts",
        "name": "The Last of Us concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Last of Us.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Last of Us readable as a lore graph."
    },
    {
        "slug": "the-last-of-us-eras",
        "name": "The Last of Us eras",
        "type": "event",
        "short_description": "Periodization for The Last of Us.",
        "description": "Named eras and phases that help readers track how The Last of Us changes across time."
    },
    {
        "slug": "the-last-of-us-works",
        "name": "The Last of Us works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Last of Us.",
        "description": "Primary works and adaptations through which most audiences encounter The Last of Us."
    },
    {
        "slug": "the-last-of-us-symbols",
        "name": "The Last of Us symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Last of Us.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Last of Us."
    },
    {
        "slug": "the-last-of-us-controversies",
        "name": "The Last of Us controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Last of Us.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Last of Us argumentative."
    },
    {
        "slug": "the-last-of-us-sources",
        "name": "The Last of Us sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Last of Us.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Last of Us."
    },
    {
        "slug": "the-last-of-us-geography",
        "name": "The Last of Us geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Last of Us.",
        "description": "Regions, routes, and spatial systems that situate The Last of Us beyond single named places."
    },
    {
        "slug": "the-last-of-us-legacy",
        "name": "The Last of Us legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Last of Us.",
        "description": "How The Last of Us continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-last-of-us-practices",
        "name": "The Last of Us practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Last of Us.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Last of Us."
    },
    {
        "slug": "the-last-of-us-entry-1",
        "name": "The Last of Us entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-2",
        "name": "The Last of Us entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-3",
        "name": "The Last of Us entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-4",
        "name": "The Last of Us entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-5",
        "name": "The Last of Us entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-6",
        "name": "The Last of Us entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-7",
        "name": "The Last of Us entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-8",
        "name": "The Last of Us entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-9",
        "name": "The Last of Us entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-10",
        "name": "The Last of Us entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-11",
        "name": "The Last of Us entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-12",
        "name": "The Last of Us entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-13",
        "name": "The Last of Us entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-14",
        "name": "The Last of Us entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-15",
        "name": "The Last of Us entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-16",
        "name": "The Last of Us entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-17",
        "name": "The Last of Us entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-18",
        "name": "The Last of Us entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-19",
        "name": "The Last of Us entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-20",
        "name": "The Last of Us entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-21",
        "name": "The Last of Us entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-22",
        "name": "The Last of Us entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-23",
        "name": "The Last of Us entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-last-of-us-entry-24",
        "name": "The Last of Us entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Last of Us.",
        "description": "A supporting encyclopedia entry in the The Last of Us subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-last-of-us",
        "the-last-of-us-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-last-of-us",
        "the-last-of-us-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-last-of-us",
        "the-last-of-us-places",
        "contains",
        "The Last of Us places is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-events",
        "contains",
        "The Last of Us events is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-objects",
        "contains",
        "The Last of Us objects & artifacts is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-factions",
        "contains",
        "The Last of Us factions & groups is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-concepts",
        "contains",
        "The Last of Us concepts is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-eras",
        "contains",
        "The Last of Us eras is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-works",
        "contains",
        "The Last of Us works & media is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-symbols",
        "contains",
        "The Last of Us symbols is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-controversies",
        "contains",
        "The Last of Us controversies is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-sources",
        "contains",
        "The Last of Us sources is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-geography",
        "contains",
        "The Last of Us geography is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-legacy",
        "contains",
        "The Last of Us legacy is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-practices",
        "contains",
        "The Last of Us practices is a primary trailhead under The Last of Us.",
        0.88,
        0.82
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-1",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-2",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-3",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-4",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-5",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-6",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-7",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-8",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-9",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-10",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-11",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-12",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-13",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-14",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-15",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-16",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-17",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-18",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-19",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-20",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-21",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-22",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-23",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ],
    [
        "the-last-of-us",
        "the-last-of-us-entry-24",
        "contains",
        "Supporting entry under The Last of Us.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
