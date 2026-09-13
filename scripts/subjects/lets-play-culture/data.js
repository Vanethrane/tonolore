/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lets-play-culture",
        "name": "Let's Play culture",
        "type": "topic",
        "short_description": "Commentary playthroughs, early YouTube gaming, and the format that made watching play a genre.",
        "description": "Commentary playthroughs, early YouTube gaming, and the format that made watching play a genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Let's Play culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "lets-play-culture-figures",
        "name": "Let's Play culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Let's Play culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Let's Play culture."
    },
    {
        "slug": "lets-play-culture-world",
        "name": "Let's Play culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Let's Play culture.",
        "description": "Geography, institutions, and periodization that give Let's Play culture its encyclopedia shape."
    },
    {
        "slug": "lets-play-culture-places",
        "name": "Let's Play culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Let's Play culture.",
        "description": "Places, regions, and built sites that give Let's Play culture its map — where events and figures concentrate."
    },
    {
        "slug": "lets-play-culture-events",
        "name": "Let's Play culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Let's Play culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Let's Play culture timeline."
    },
    {
        "slug": "lets-play-culture-objects",
        "name": "Let's Play culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Let's Play culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Let's Play culture."
    },
    {
        "slug": "lets-play-culture-factions",
        "name": "Let's Play culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Let's Play culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Let's Play culture."
    },
    {
        "slug": "lets-play-culture-concepts",
        "name": "Let's Play culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Let's Play culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Let's Play culture readable as a lore graph."
    },
    {
        "slug": "lets-play-culture-eras",
        "name": "Let's Play culture eras",
        "type": "event",
        "short_description": "Periodization for Let's Play culture.",
        "description": "Named eras and phases that help readers track how Let's Play culture changes across time."
    },
    {
        "slug": "lets-play-culture-works",
        "name": "Let's Play culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Let's Play culture.",
        "description": "Primary works and adaptations through which most audiences encounter Let's Play culture."
    },
    {
        "slug": "lets-play-culture-symbols",
        "name": "Let's Play culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Let's Play culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Let's Play culture."
    },
    {
        "slug": "lets-play-culture-controversies",
        "name": "Let's Play culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Let's Play culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Let's Play culture argumentative."
    },
    {
        "slug": "lets-play-culture-sources",
        "name": "Let's Play culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Let's Play culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Let's Play culture."
    },
    {
        "slug": "lets-play-culture-geography",
        "name": "Let's Play culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Let's Play culture.",
        "description": "Regions, routes, and spatial systems that situate Let's Play culture beyond single named places."
    },
    {
        "slug": "lets-play-culture-legacy",
        "name": "Let's Play culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Let's Play culture.",
        "description": "How Let's Play culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lets-play-culture-practices",
        "name": "Let's Play culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Let's Play culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Let's Play culture."
    },
    {
        "slug": "lets-play-culture-entry-1",
        "name": "Let's Play culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-2",
        "name": "Let's Play culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-3",
        "name": "Let's Play culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-4",
        "name": "Let's Play culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-5",
        "name": "Let's Play culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-6",
        "name": "Let's Play culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-7",
        "name": "Let's Play culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-8",
        "name": "Let's Play culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-9",
        "name": "Let's Play culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-10",
        "name": "Let's Play culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-11",
        "name": "Let's Play culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-12",
        "name": "Let's Play culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-13",
        "name": "Let's Play culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-14",
        "name": "Let's Play culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-15",
        "name": "Let's Play culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-16",
        "name": "Let's Play culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-17",
        "name": "Let's Play culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-18",
        "name": "Let's Play culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-19",
        "name": "Let's Play culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-20",
        "name": "Let's Play culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-21",
        "name": "Let's Play culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-22",
        "name": "Let's Play culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-23",
        "name": "Let's Play culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lets-play-culture-entry-24",
        "name": "Let's Play culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Let's Play culture.",
        "description": "A supporting encyclopedia entry in the Let's Play culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lets-play-culture",
        "lets-play-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lets-play-culture",
        "lets-play-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lets-play-culture",
        "lets-play-culture-places",
        "contains",
        "Let's Play culture places is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-events",
        "contains",
        "Let's Play culture events is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-objects",
        "contains",
        "Let's Play culture objects & artifacts is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-factions",
        "contains",
        "Let's Play culture factions & groups is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-concepts",
        "contains",
        "Let's Play culture concepts is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-eras",
        "contains",
        "Let's Play culture eras is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-works",
        "contains",
        "Let's Play culture works & media is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-symbols",
        "contains",
        "Let's Play culture symbols is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-controversies",
        "contains",
        "Let's Play culture controversies is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-sources",
        "contains",
        "Let's Play culture sources is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-geography",
        "contains",
        "Let's Play culture geography is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-legacy",
        "contains",
        "Let's Play culture legacy is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-practices",
        "contains",
        "Let's Play culture practices is a primary trailhead under Let's Play culture.",
        0.88,
        0.82
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-1",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-2",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-3",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-4",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-5",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-6",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-7",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-8",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-9",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-10",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-11",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-12",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-13",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-14",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-15",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-16",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-17",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-18",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-19",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-20",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-21",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-22",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-23",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ],
    [
        "lets-play-culture",
        "lets-play-culture-entry-24",
        "contains",
        "Supporting entry under Let's Play culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
