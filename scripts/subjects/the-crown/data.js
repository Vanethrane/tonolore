/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-crown",
        "name": "The Crown",
        "type": "topic",
        "short_description": "Windsor dramatization, decades of reign, and the prestige biopic soap of modern monarchy.",
        "description": "Windsor dramatization, decades of reign, and the prestige biopic soap of modern monarchy. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Crown so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-crown-figures",
        "name": "The Crown figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Crown.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Crown."
    },
    {
        "slug": "the-crown-world",
        "name": "The Crown world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Crown.",
        "description": "Geography, institutions, and periodization that give The Crown its encyclopedia shape."
    },
    {
        "slug": "the-crown-places",
        "name": "The Crown places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Crown.",
        "description": "Places, regions, and built sites that give The Crown its map — where events and figures concentrate."
    },
    {
        "slug": "the-crown-events",
        "name": "The Crown events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Crown.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Crown timeline."
    },
    {
        "slug": "the-crown-objects",
        "name": "The Crown objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Crown.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Crown."
    },
    {
        "slug": "the-crown-factions",
        "name": "The Crown factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Crown.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Crown."
    },
    {
        "slug": "the-crown-concepts",
        "name": "The Crown concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Crown.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Crown readable as a lore graph."
    },
    {
        "slug": "the-crown-eras",
        "name": "The Crown eras",
        "type": "event",
        "short_description": "Periodization for The Crown.",
        "description": "Named eras and phases that help readers track how The Crown changes across time."
    },
    {
        "slug": "the-crown-works",
        "name": "The Crown works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Crown.",
        "description": "Primary works and adaptations through which most audiences encounter The Crown."
    },
    {
        "slug": "the-crown-symbols",
        "name": "The Crown symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Crown.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Crown."
    },
    {
        "slug": "the-crown-controversies",
        "name": "The Crown controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Crown.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Crown argumentative."
    },
    {
        "slug": "the-crown-sources",
        "name": "The Crown sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Crown.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Crown."
    },
    {
        "slug": "the-crown-geography",
        "name": "The Crown geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Crown.",
        "description": "Regions, routes, and spatial systems that situate The Crown beyond single named places."
    },
    {
        "slug": "the-crown-legacy",
        "name": "The Crown legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Crown.",
        "description": "How The Crown continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-crown-practices",
        "name": "The Crown practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Crown.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Crown."
    },
    {
        "slug": "the-crown-entry-1",
        "name": "The Crown entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-2",
        "name": "The Crown entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-3",
        "name": "The Crown entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-4",
        "name": "The Crown entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-5",
        "name": "The Crown entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-6",
        "name": "The Crown entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-7",
        "name": "The Crown entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-8",
        "name": "The Crown entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-9",
        "name": "The Crown entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-10",
        "name": "The Crown entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-11",
        "name": "The Crown entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-12",
        "name": "The Crown entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-13",
        "name": "The Crown entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-14",
        "name": "The Crown entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-15",
        "name": "The Crown entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-16",
        "name": "The Crown entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-17",
        "name": "The Crown entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-18",
        "name": "The Crown entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-19",
        "name": "The Crown entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-20",
        "name": "The Crown entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-21",
        "name": "The Crown entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-22",
        "name": "The Crown entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-23",
        "name": "The Crown entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crown-entry-24",
        "name": "The Crown entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crown.",
        "description": "A supporting encyclopedia entry in the The Crown subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-crown",
        "the-crown-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-crown",
        "the-crown-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-crown",
        "the-crown-places",
        "contains",
        "The Crown places is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-events",
        "contains",
        "The Crown events is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-objects",
        "contains",
        "The Crown objects & artifacts is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-factions",
        "contains",
        "The Crown factions & groups is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-concepts",
        "contains",
        "The Crown concepts is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-eras",
        "contains",
        "The Crown eras is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-works",
        "contains",
        "The Crown works & media is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-symbols",
        "contains",
        "The Crown symbols is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-controversies",
        "contains",
        "The Crown controversies is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-sources",
        "contains",
        "The Crown sources is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-geography",
        "contains",
        "The Crown geography is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-legacy",
        "contains",
        "The Crown legacy is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-practices",
        "contains",
        "The Crown practices is a primary trailhead under The Crown.",
        0.88,
        0.82
    ],
    [
        "the-crown",
        "the-crown-entry-1",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-2",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-3",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-4",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-5",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-6",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-7",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-8",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-9",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-10",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-11",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-12",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-13",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-14",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-15",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-16",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-17",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-18",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-19",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-20",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-21",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-22",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-23",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ],
    [
        "the-crown",
        "the-crown-entry-24",
        "contains",
        "Supporting entry under The Crown.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
