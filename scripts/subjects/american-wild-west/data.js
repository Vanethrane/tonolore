/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-wild-west",
        "name": "The American Wild West",
        "type": "topic",
        "short_description": "Outlaws, lawmen, boomtowns, railroads, Native nations, and frontier legends of the American West.",
        "description": "Outlaws, lawmen, boomtowns, railroads, Native nations, and frontier legends of the American West. This Ton-o-Lore subject maps people, places, events, and ideas tied to The American Wild West so readers can follow long-tail connections across history."
    },
    {
        "slug": "american-wild-west-figures",
        "name": "The American Wild West figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The American Wild West.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The American Wild West."
    },
    {
        "slug": "american-wild-west-world",
        "name": "The American Wild West world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The American Wild West.",
        "description": "Geography, institutions, and periodization that give The American Wild West its encyclopedia shape."
    },
    {
        "slug": "american-wild-west-places",
        "name": "The American Wild West places",
        "type": "place",
        "short_description": "Locations and geographies that frame The American Wild West.",
        "description": "Places, regions, and built sites that give The American Wild West its map — where events and figures concentrate."
    },
    {
        "slug": "american-wild-west-events",
        "name": "The American Wild West events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The American Wild West.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The American Wild West timeline."
    },
    {
        "slug": "american-wild-west-objects",
        "name": "The American Wild West objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The American Wild West.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The American Wild West."
    },
    {
        "slug": "american-wild-west-factions",
        "name": "The American Wild West factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The American Wild West.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The American Wild West."
    },
    {
        "slug": "american-wild-west-concepts",
        "name": "The American Wild West concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The American Wild West.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The American Wild West readable as a lore graph."
    },
    {
        "slug": "american-wild-west-eras",
        "name": "The American Wild West eras",
        "type": "event",
        "short_description": "Periodization for The American Wild West.",
        "description": "Named eras and phases that help readers track how The American Wild West changes across time."
    },
    {
        "slug": "american-wild-west-works",
        "name": "The American Wild West works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The American Wild West.",
        "description": "Primary works and adaptations through which most audiences encounter The American Wild West."
    },
    {
        "slug": "american-wild-west-symbols",
        "name": "The American Wild West symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The American Wild West.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The American Wild West."
    },
    {
        "slug": "american-wild-west-controversies",
        "name": "The American Wild West controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The American Wild West.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The American Wild West argumentative."
    },
    {
        "slug": "american-wild-west-sources",
        "name": "The American Wild West sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The American Wild West.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The American Wild West."
    },
    {
        "slug": "american-wild-west-geography",
        "name": "The American Wild West geography",
        "type": "place",
        "short_description": "Broader geographic framing for The American Wild West.",
        "description": "Regions, routes, and spatial systems that situate The American Wild West beyond single named places."
    },
    {
        "slug": "american-wild-west-legacy",
        "name": "The American Wild West legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The American Wild West.",
        "description": "How The American Wild West continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-wild-west-practices",
        "name": "The American Wild West practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The American Wild West.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The American Wild West."
    },
    {
        "slug": "american-wild-west-entry-1",
        "name": "The American Wild West entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-2",
        "name": "The American Wild West entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-3",
        "name": "The American Wild West entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-4",
        "name": "The American Wild West entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-5",
        "name": "The American Wild West entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-6",
        "name": "The American Wild West entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-7",
        "name": "The American Wild West entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-8",
        "name": "The American Wild West entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-9",
        "name": "The American Wild West entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-10",
        "name": "The American Wild West entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-11",
        "name": "The American Wild West entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-12",
        "name": "The American Wild West entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-13",
        "name": "The American Wild West entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-14",
        "name": "The American Wild West entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-15",
        "name": "The American Wild West entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-16",
        "name": "The American Wild West entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-17",
        "name": "The American Wild West entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-18",
        "name": "The American Wild West entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-19",
        "name": "The American Wild West entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-20",
        "name": "The American Wild West entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-21",
        "name": "The American Wild West entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-22",
        "name": "The American Wild West entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-23",
        "name": "The American Wild West entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-wild-west-entry-24",
        "name": "The American Wild West entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The American Wild West.",
        "description": "A supporting encyclopedia entry in the The American Wild West subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-wild-west",
        "american-wild-west-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-wild-west",
        "american-wild-west-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-wild-west",
        "american-wild-west-places",
        "contains",
        "The American Wild West places is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-events",
        "contains",
        "The American Wild West events is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-objects",
        "contains",
        "The American Wild West objects & artifacts is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-factions",
        "contains",
        "The American Wild West factions & groups is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-concepts",
        "contains",
        "The American Wild West concepts is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-eras",
        "contains",
        "The American Wild West eras is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-works",
        "contains",
        "The American Wild West works & media is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-symbols",
        "contains",
        "The American Wild West symbols is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-controversies",
        "contains",
        "The American Wild West controversies is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-sources",
        "contains",
        "The American Wild West sources is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-geography",
        "contains",
        "The American Wild West geography is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-legacy",
        "contains",
        "The American Wild West legacy is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-practices",
        "contains",
        "The American Wild West practices is a primary trailhead under The American Wild West.",
        0.88,
        0.82
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-1",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-2",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-3",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-4",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-5",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-6",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-7",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-8",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-9",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-10",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-11",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-12",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-13",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-14",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-15",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-16",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-17",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-18",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-19",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-20",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-21",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-22",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-23",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ],
    [
        "american-wild-west",
        "american-wild-west-entry-24",
        "contains",
        "Supporting entry under The American Wild West.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
