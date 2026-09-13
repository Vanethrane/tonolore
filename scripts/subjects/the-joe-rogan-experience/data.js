/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-joe-rogan-experience",
        "name": "The Joe Rogan Experience",
        "type": "topic",
        "short_description": "Long-form interviews, cultural flashpoints, and the megaphone podcast of the 2010s–2020s.",
        "description": "Long-form interviews, cultural flashpoints, and the megaphone podcast of the 2010s–2020s. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Joe Rogan Experience so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "the-joe-rogan-experience-figures",
        "name": "The Joe Rogan Experience figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Joe Rogan Experience.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-world",
        "name": "The Joe Rogan Experience world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Joe Rogan Experience.",
        "description": "Geography, institutions, and periodization that give The Joe Rogan Experience its encyclopedia shape."
    },
    {
        "slug": "the-joe-rogan-experience-places",
        "name": "The Joe Rogan Experience places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Joe Rogan Experience.",
        "description": "Places, regions, and built sites that give The Joe Rogan Experience its map — where events and figures concentrate."
    },
    {
        "slug": "the-joe-rogan-experience-events",
        "name": "The Joe Rogan Experience events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Joe Rogan Experience.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Joe Rogan Experience timeline."
    },
    {
        "slug": "the-joe-rogan-experience-objects",
        "name": "The Joe Rogan Experience objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Joe Rogan Experience.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-factions",
        "name": "The Joe Rogan Experience factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Joe Rogan Experience.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-concepts",
        "name": "The Joe Rogan Experience concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Joe Rogan Experience.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Joe Rogan Experience readable as a lore graph."
    },
    {
        "slug": "the-joe-rogan-experience-eras",
        "name": "The Joe Rogan Experience eras",
        "type": "event",
        "short_description": "Periodization for The Joe Rogan Experience.",
        "description": "Named eras and phases that help readers track how The Joe Rogan Experience changes across time."
    },
    {
        "slug": "the-joe-rogan-experience-works",
        "name": "The Joe Rogan Experience works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Joe Rogan Experience.",
        "description": "Primary works and adaptations through which most audiences encounter The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-symbols",
        "name": "The Joe Rogan Experience symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Joe Rogan Experience.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-controversies",
        "name": "The Joe Rogan Experience controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Joe Rogan Experience.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Joe Rogan Experience argumentative."
    },
    {
        "slug": "the-joe-rogan-experience-sources",
        "name": "The Joe Rogan Experience sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Joe Rogan Experience.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-geography",
        "name": "The Joe Rogan Experience geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Joe Rogan Experience.",
        "description": "Regions, routes, and spatial systems that situate The Joe Rogan Experience beyond single named places."
    },
    {
        "slug": "the-joe-rogan-experience-legacy",
        "name": "The Joe Rogan Experience legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Joe Rogan Experience.",
        "description": "How The Joe Rogan Experience continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-joe-rogan-experience-practices",
        "name": "The Joe Rogan Experience practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Joe Rogan Experience.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Joe Rogan Experience."
    },
    {
        "slug": "the-joe-rogan-experience-entry-1",
        "name": "The Joe Rogan Experience entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-2",
        "name": "The Joe Rogan Experience entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-3",
        "name": "The Joe Rogan Experience entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-4",
        "name": "The Joe Rogan Experience entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-5",
        "name": "The Joe Rogan Experience entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-6",
        "name": "The Joe Rogan Experience entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-7",
        "name": "The Joe Rogan Experience entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-8",
        "name": "The Joe Rogan Experience entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-9",
        "name": "The Joe Rogan Experience entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-10",
        "name": "The Joe Rogan Experience entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-11",
        "name": "The Joe Rogan Experience entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-12",
        "name": "The Joe Rogan Experience entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-13",
        "name": "The Joe Rogan Experience entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-14",
        "name": "The Joe Rogan Experience entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-15",
        "name": "The Joe Rogan Experience entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-16",
        "name": "The Joe Rogan Experience entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-17",
        "name": "The Joe Rogan Experience entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-18",
        "name": "The Joe Rogan Experience entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-19",
        "name": "The Joe Rogan Experience entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-20",
        "name": "The Joe Rogan Experience entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-21",
        "name": "The Joe Rogan Experience entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-22",
        "name": "The Joe Rogan Experience entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-23",
        "name": "The Joe Rogan Experience entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-joe-rogan-experience-entry-24",
        "name": "The Joe Rogan Experience entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Joe Rogan Experience.",
        "description": "A supporting encyclopedia entry in the The Joe Rogan Experience subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-places",
        "contains",
        "The Joe Rogan Experience places is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-events",
        "contains",
        "The Joe Rogan Experience events is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-objects",
        "contains",
        "The Joe Rogan Experience objects & artifacts is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-factions",
        "contains",
        "The Joe Rogan Experience factions & groups is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-concepts",
        "contains",
        "The Joe Rogan Experience concepts is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-eras",
        "contains",
        "The Joe Rogan Experience eras is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-works",
        "contains",
        "The Joe Rogan Experience works & media is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-symbols",
        "contains",
        "The Joe Rogan Experience symbols is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-controversies",
        "contains",
        "The Joe Rogan Experience controversies is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-sources",
        "contains",
        "The Joe Rogan Experience sources is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-geography",
        "contains",
        "The Joe Rogan Experience geography is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-legacy",
        "contains",
        "The Joe Rogan Experience legacy is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-practices",
        "contains",
        "The Joe Rogan Experience practices is a primary trailhead under The Joe Rogan Experience.",
        0.88,
        0.82
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-1",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-2",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-3",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-4",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-5",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-6",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-7",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-8",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-9",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-10",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-11",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-12",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-13",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-14",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-15",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-16",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-17",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-18",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-19",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-20",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-21",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-22",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-23",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ],
    [
        "the-joe-rogan-experience",
        "the-joe-rogan-experience-entry-24",
        "contains",
        "Supporting entry under The Joe Rogan Experience.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
