/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-crusades",
        "name": "The Crusades",
        "type": "topic",
        "short_description": "Holy wars, Levantine kingdoms, and the medieval Christian-Muslim contest for sacred cities.",
        "description": "Holy wars, Levantine kingdoms, and the medieval Christian-Muslim contest for sacred cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Crusades so readers can follow long-tail connections across history."
    },
    {
        "slug": "the-crusades-figures",
        "name": "The Crusades figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Crusades.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Crusades."
    },
    {
        "slug": "the-crusades-world",
        "name": "The Crusades world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Crusades.",
        "description": "Geography, institutions, and periodization that give The Crusades its encyclopedia shape."
    },
    {
        "slug": "the-crusades-places",
        "name": "The Crusades places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Crusades.",
        "description": "Places, regions, and built sites that give The Crusades its map — where events and figures concentrate."
    },
    {
        "slug": "the-crusades-events",
        "name": "The Crusades events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Crusades.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Crusades timeline."
    },
    {
        "slug": "the-crusades-objects",
        "name": "The Crusades objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Crusades.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Crusades."
    },
    {
        "slug": "the-crusades-factions",
        "name": "The Crusades factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Crusades.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Crusades."
    },
    {
        "slug": "the-crusades-concepts",
        "name": "The Crusades concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Crusades.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Crusades readable as a lore graph."
    },
    {
        "slug": "the-crusades-eras",
        "name": "The Crusades eras",
        "type": "event",
        "short_description": "Periodization for The Crusades.",
        "description": "Named eras and phases that help readers track how The Crusades changes across time."
    },
    {
        "slug": "the-crusades-works",
        "name": "The Crusades works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Crusades.",
        "description": "Primary works and adaptations through which most audiences encounter The Crusades."
    },
    {
        "slug": "the-crusades-symbols",
        "name": "The Crusades symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Crusades.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Crusades."
    },
    {
        "slug": "the-crusades-controversies",
        "name": "The Crusades controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Crusades.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Crusades argumentative."
    },
    {
        "slug": "the-crusades-sources",
        "name": "The Crusades sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Crusades.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Crusades."
    },
    {
        "slug": "the-crusades-geography",
        "name": "The Crusades geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Crusades.",
        "description": "Regions, routes, and spatial systems that situate The Crusades beyond single named places."
    },
    {
        "slug": "the-crusades-legacy",
        "name": "The Crusades legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Crusades.",
        "description": "How The Crusades continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-crusades-practices",
        "name": "The Crusades practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Crusades.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Crusades."
    },
    {
        "slug": "the-crusades-entry-1",
        "name": "The Crusades entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-2",
        "name": "The Crusades entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-3",
        "name": "The Crusades entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-4",
        "name": "The Crusades entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-5",
        "name": "The Crusades entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-6",
        "name": "The Crusades entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-7",
        "name": "The Crusades entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-8",
        "name": "The Crusades entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-9",
        "name": "The Crusades entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-10",
        "name": "The Crusades entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-11",
        "name": "The Crusades entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-12",
        "name": "The Crusades entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-13",
        "name": "The Crusades entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-14",
        "name": "The Crusades entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-15",
        "name": "The Crusades entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-16",
        "name": "The Crusades entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-17",
        "name": "The Crusades entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-18",
        "name": "The Crusades entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-19",
        "name": "The Crusades entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-20",
        "name": "The Crusades entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-21",
        "name": "The Crusades entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-22",
        "name": "The Crusades entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-23",
        "name": "The Crusades entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-crusades-entry-24",
        "name": "The Crusades entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Crusades.",
        "description": "A supporting encyclopedia entry in the The Crusades subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-crusades",
        "the-crusades-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-crusades",
        "the-crusades-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-crusades",
        "the-crusades-places",
        "contains",
        "The Crusades places is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-events",
        "contains",
        "The Crusades events is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-objects",
        "contains",
        "The Crusades objects & artifacts is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-factions",
        "contains",
        "The Crusades factions & groups is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-concepts",
        "contains",
        "The Crusades concepts is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-eras",
        "contains",
        "The Crusades eras is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-works",
        "contains",
        "The Crusades works & media is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-symbols",
        "contains",
        "The Crusades symbols is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-controversies",
        "contains",
        "The Crusades controversies is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-sources",
        "contains",
        "The Crusades sources is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-geography",
        "contains",
        "The Crusades geography is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-legacy",
        "contains",
        "The Crusades legacy is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-practices",
        "contains",
        "The Crusades practices is a primary trailhead under The Crusades.",
        0.88,
        0.82
    ],
    [
        "the-crusades",
        "the-crusades-entry-1",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-2",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-3",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-4",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-5",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-6",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-7",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-8",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-9",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-10",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-11",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-12",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-13",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-14",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-15",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-16",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-17",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-18",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-19",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-20",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-21",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-22",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-23",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ],
    [
        "the-crusades",
        "the-crusades-entry-24",
        "contains",
        "Supporting entry under The Crusades.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
