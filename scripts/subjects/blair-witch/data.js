/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "blair-witch",
        "name": "The Blair Witch Project",
        "type": "topic",
        "short_description": "Burkittsville woods, found footage, and the indie myth that sold a curse as documentary.",
        "description": "Burkittsville woods, found footage, and the indie myth that sold a curse as documentary. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Blair Witch Project so readers can follow long-tail connections across horror."
    },
    {
        "slug": "blair-witch-figures",
        "name": "The Blair Witch Project figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Blair Witch Project.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Blair Witch Project."
    },
    {
        "slug": "blair-witch-world",
        "name": "The Blair Witch Project world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Blair Witch Project.",
        "description": "Geography, institutions, and periodization that give The Blair Witch Project its encyclopedia shape."
    },
    {
        "slug": "blair-witch-places",
        "name": "The Blair Witch Project places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Blair Witch Project.",
        "description": "Places, regions, and built sites that give The Blair Witch Project its map — where events and figures concentrate."
    },
    {
        "slug": "blair-witch-events",
        "name": "The Blair Witch Project events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Blair Witch Project.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Blair Witch Project timeline."
    },
    {
        "slug": "blair-witch-objects",
        "name": "The Blair Witch Project objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Blair Witch Project.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Blair Witch Project."
    },
    {
        "slug": "blair-witch-factions",
        "name": "The Blair Witch Project factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Blair Witch Project.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Blair Witch Project."
    },
    {
        "slug": "blair-witch-concepts",
        "name": "The Blair Witch Project concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Blair Witch Project.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Blair Witch Project readable as a lore graph."
    },
    {
        "slug": "blair-witch-eras",
        "name": "The Blair Witch Project eras",
        "type": "event",
        "short_description": "Periodization for The Blair Witch Project.",
        "description": "Named eras and phases that help readers track how The Blair Witch Project changes across time."
    },
    {
        "slug": "blair-witch-works",
        "name": "The Blair Witch Project works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Blair Witch Project.",
        "description": "Primary works and adaptations through which most audiences encounter The Blair Witch Project."
    },
    {
        "slug": "blair-witch-symbols",
        "name": "The Blair Witch Project symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Blair Witch Project.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Blair Witch Project."
    },
    {
        "slug": "blair-witch-controversies",
        "name": "The Blair Witch Project controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Blair Witch Project.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Blair Witch Project argumentative."
    },
    {
        "slug": "blair-witch-sources",
        "name": "The Blair Witch Project sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Blair Witch Project.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Blair Witch Project."
    },
    {
        "slug": "blair-witch-geography",
        "name": "The Blair Witch Project geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Blair Witch Project.",
        "description": "Regions, routes, and spatial systems that situate The Blair Witch Project beyond single named places."
    },
    {
        "slug": "blair-witch-legacy",
        "name": "The Blair Witch Project legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Blair Witch Project.",
        "description": "How The Blair Witch Project continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "blair-witch-practices",
        "name": "The Blair Witch Project practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Blair Witch Project.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Blair Witch Project."
    },
    {
        "slug": "blair-witch-entry-1",
        "name": "The Blair Witch Project entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-2",
        "name": "The Blair Witch Project entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-3",
        "name": "The Blair Witch Project entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-4",
        "name": "The Blair Witch Project entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-5",
        "name": "The Blair Witch Project entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-6",
        "name": "The Blair Witch Project entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-7",
        "name": "The Blair Witch Project entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-8",
        "name": "The Blair Witch Project entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-9",
        "name": "The Blair Witch Project entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-10",
        "name": "The Blair Witch Project entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-11",
        "name": "The Blair Witch Project entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-12",
        "name": "The Blair Witch Project entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-13",
        "name": "The Blair Witch Project entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-14",
        "name": "The Blair Witch Project entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-15",
        "name": "The Blair Witch Project entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-16",
        "name": "The Blair Witch Project entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-17",
        "name": "The Blair Witch Project entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-18",
        "name": "The Blair Witch Project entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-19",
        "name": "The Blair Witch Project entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-20",
        "name": "The Blair Witch Project entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-21",
        "name": "The Blair Witch Project entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-22",
        "name": "The Blair Witch Project entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-23",
        "name": "The Blair Witch Project entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blair-witch-entry-24",
        "name": "The Blair Witch Project entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Blair Witch Project.",
        "description": "A supporting encyclopedia entry in the The Blair Witch Project subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "blair-witch",
        "blair-witch-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "blair-witch",
        "blair-witch-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "blair-witch",
        "blair-witch-places",
        "contains",
        "The Blair Witch Project places is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-events",
        "contains",
        "The Blair Witch Project events is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-objects",
        "contains",
        "The Blair Witch Project objects & artifacts is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-factions",
        "contains",
        "The Blair Witch Project factions & groups is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-concepts",
        "contains",
        "The Blair Witch Project concepts is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-eras",
        "contains",
        "The Blair Witch Project eras is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-works",
        "contains",
        "The Blair Witch Project works & media is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-symbols",
        "contains",
        "The Blair Witch Project symbols is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-controversies",
        "contains",
        "The Blair Witch Project controversies is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-sources",
        "contains",
        "The Blair Witch Project sources is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-geography",
        "contains",
        "The Blair Witch Project geography is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-legacy",
        "contains",
        "The Blair Witch Project legacy is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-practices",
        "contains",
        "The Blair Witch Project practices is a primary trailhead under The Blair Witch Project.",
        0.88,
        0.82
    ],
    [
        "blair-witch",
        "blair-witch-entry-1",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-2",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-3",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-4",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-5",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-6",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-7",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-8",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-9",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-10",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-11",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-12",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-13",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-14",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-15",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-16",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-17",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-18",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-19",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-20",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-21",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-22",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-23",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ],
    [
        "blair-witch",
        "blair-witch-entry-24",
        "contains",
        "Supporting entry under The Blair Witch Project.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
