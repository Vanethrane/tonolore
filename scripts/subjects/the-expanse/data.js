/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-expanse",
        "name": "The Expanse",
        "type": "topic",
        "short_description": "Belters, protomolecule, and the hard-SF politics of a colonized solar system.",
        "description": "Belters, protomolecule, and the hard-SF politics of a colonized solar system. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Expanse so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "the-expanse-figures",
        "name": "The Expanse figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Expanse.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Expanse."
    },
    {
        "slug": "the-expanse-world",
        "name": "The Expanse world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Expanse.",
        "description": "Geography, institutions, and periodization that give The Expanse its encyclopedia shape."
    },
    {
        "slug": "the-expanse-places",
        "name": "The Expanse places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Expanse.",
        "description": "Places, regions, and built sites that give The Expanse its map — where events and figures concentrate."
    },
    {
        "slug": "the-expanse-events",
        "name": "The Expanse events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Expanse.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Expanse timeline."
    },
    {
        "slug": "the-expanse-objects",
        "name": "The Expanse objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Expanse.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Expanse."
    },
    {
        "slug": "the-expanse-factions",
        "name": "The Expanse factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Expanse.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Expanse."
    },
    {
        "slug": "the-expanse-concepts",
        "name": "The Expanse concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Expanse.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Expanse readable as a lore graph."
    },
    {
        "slug": "the-expanse-eras",
        "name": "The Expanse eras",
        "type": "event",
        "short_description": "Periodization for The Expanse.",
        "description": "Named eras and phases that help readers track how The Expanse changes across time."
    },
    {
        "slug": "the-expanse-works",
        "name": "The Expanse works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Expanse.",
        "description": "Primary works and adaptations through which most audiences encounter The Expanse."
    },
    {
        "slug": "the-expanse-symbols",
        "name": "The Expanse symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Expanse.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Expanse."
    },
    {
        "slug": "the-expanse-controversies",
        "name": "The Expanse controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Expanse.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Expanse argumentative."
    },
    {
        "slug": "the-expanse-sources",
        "name": "The Expanse sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Expanse.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Expanse."
    },
    {
        "slug": "the-expanse-geography",
        "name": "The Expanse geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Expanse.",
        "description": "Regions, routes, and spatial systems that situate The Expanse beyond single named places."
    },
    {
        "slug": "the-expanse-legacy",
        "name": "The Expanse legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Expanse.",
        "description": "How The Expanse continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-expanse-practices",
        "name": "The Expanse practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Expanse.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Expanse."
    },
    {
        "slug": "the-expanse-entry-1",
        "name": "The Expanse entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-2",
        "name": "The Expanse entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-3",
        "name": "The Expanse entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-4",
        "name": "The Expanse entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-5",
        "name": "The Expanse entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-6",
        "name": "The Expanse entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-7",
        "name": "The Expanse entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-8",
        "name": "The Expanse entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-9",
        "name": "The Expanse entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-10",
        "name": "The Expanse entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-11",
        "name": "The Expanse entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-12",
        "name": "The Expanse entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-13",
        "name": "The Expanse entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-14",
        "name": "The Expanse entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-15",
        "name": "The Expanse entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-16",
        "name": "The Expanse entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-17",
        "name": "The Expanse entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-18",
        "name": "The Expanse entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-19",
        "name": "The Expanse entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-20",
        "name": "The Expanse entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-21",
        "name": "The Expanse entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-22",
        "name": "The Expanse entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-23",
        "name": "The Expanse entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-expanse-entry-24",
        "name": "The Expanse entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Expanse.",
        "description": "A supporting encyclopedia entry in the The Expanse subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-expanse",
        "the-expanse-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-expanse",
        "the-expanse-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-expanse",
        "the-expanse-places",
        "contains",
        "The Expanse places is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-events",
        "contains",
        "The Expanse events is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-objects",
        "contains",
        "The Expanse objects & artifacts is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-factions",
        "contains",
        "The Expanse factions & groups is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-concepts",
        "contains",
        "The Expanse concepts is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-eras",
        "contains",
        "The Expanse eras is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-works",
        "contains",
        "The Expanse works & media is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-symbols",
        "contains",
        "The Expanse symbols is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-controversies",
        "contains",
        "The Expanse controversies is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-sources",
        "contains",
        "The Expanse sources is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-geography",
        "contains",
        "The Expanse geography is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-legacy",
        "contains",
        "The Expanse legacy is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-practices",
        "contains",
        "The Expanse practices is a primary trailhead under The Expanse.",
        0.88,
        0.82
    ],
    [
        "the-expanse",
        "the-expanse-entry-1",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-2",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-3",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-4",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-5",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-6",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-7",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-8",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-9",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-10",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-11",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-12",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-13",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-14",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-15",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-16",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-17",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-18",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-19",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-20",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-21",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-22",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-23",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ],
    [
        "the-expanse",
        "the-expanse-entry-24",
        "contains",
        "Supporting entry under The Expanse.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
