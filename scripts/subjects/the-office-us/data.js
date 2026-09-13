/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-office-us",
        "name": "The Office (US)",
        "type": "topic",
        "short_description": "Dunder Mifflin mockumentary, cringe romance, and the streaming-era sitcom giant.",
        "description": "Dunder Mifflin mockumentary, cringe romance, and the streaming-era sitcom giant. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Office (US) so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-office-us-figures",
        "name": "The Office (US) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Office (US).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Office (US)."
    },
    {
        "slug": "the-office-us-world",
        "name": "The Office (US) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Office (US).",
        "description": "Geography, institutions, and periodization that give The Office (US) its encyclopedia shape."
    },
    {
        "slug": "the-office-us-places",
        "name": "The Office (US) places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Office (US).",
        "description": "Places, regions, and built sites that give The Office (US) its map — where events and figures concentrate."
    },
    {
        "slug": "the-office-us-events",
        "name": "The Office (US) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Office (US).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Office (US) timeline."
    },
    {
        "slug": "the-office-us-objects",
        "name": "The Office (US) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Office (US).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Office (US)."
    },
    {
        "slug": "the-office-us-factions",
        "name": "The Office (US) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Office (US).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Office (US)."
    },
    {
        "slug": "the-office-us-concepts",
        "name": "The Office (US) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Office (US).",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Office (US) readable as a lore graph."
    },
    {
        "slug": "the-office-us-eras",
        "name": "The Office (US) eras",
        "type": "event",
        "short_description": "Periodization for The Office (US).",
        "description": "Named eras and phases that help readers track how The Office (US) changes across time."
    },
    {
        "slug": "the-office-us-works",
        "name": "The Office (US) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Office (US).",
        "description": "Primary works and adaptations through which most audiences encounter The Office (US)."
    },
    {
        "slug": "the-office-us-symbols",
        "name": "The Office (US) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Office (US).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Office (US)."
    },
    {
        "slug": "the-office-us-controversies",
        "name": "The Office (US) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Office (US).",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Office (US) argumentative."
    },
    {
        "slug": "the-office-us-sources",
        "name": "The Office (US) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Office (US).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Office (US)."
    },
    {
        "slug": "the-office-us-geography",
        "name": "The Office (US) geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Office (US).",
        "description": "Regions, routes, and spatial systems that situate The Office (US) beyond single named places."
    },
    {
        "slug": "the-office-us-legacy",
        "name": "The Office (US) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Office (US).",
        "description": "How The Office (US) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-office-us-practices",
        "name": "The Office (US) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Office (US).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Office (US)."
    },
    {
        "slug": "the-office-us-entry-1",
        "name": "The Office (US) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-2",
        "name": "The Office (US) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-3",
        "name": "The Office (US) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-4",
        "name": "The Office (US) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-5",
        "name": "The Office (US) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-6",
        "name": "The Office (US) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-7",
        "name": "The Office (US) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-8",
        "name": "The Office (US) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-9",
        "name": "The Office (US) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-10",
        "name": "The Office (US) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-11",
        "name": "The Office (US) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-12",
        "name": "The Office (US) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-13",
        "name": "The Office (US) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-14",
        "name": "The Office (US) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-15",
        "name": "The Office (US) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-16",
        "name": "The Office (US) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-17",
        "name": "The Office (US) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-18",
        "name": "The Office (US) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-19",
        "name": "The Office (US) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-20",
        "name": "The Office (US) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-21",
        "name": "The Office (US) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-22",
        "name": "The Office (US) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-23",
        "name": "The Office (US) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-office-us-entry-24",
        "name": "The Office (US) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Office (US).",
        "description": "A supporting encyclopedia entry in the The Office (US) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-office-us",
        "the-office-us-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-office-us",
        "the-office-us-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-office-us",
        "the-office-us-places",
        "contains",
        "The Office (US) places is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-events",
        "contains",
        "The Office (US) events is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-objects",
        "contains",
        "The Office (US) objects & artifacts is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-factions",
        "contains",
        "The Office (US) factions & groups is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-concepts",
        "contains",
        "The Office (US) concepts is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-eras",
        "contains",
        "The Office (US) eras is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-works",
        "contains",
        "The Office (US) works & media is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-symbols",
        "contains",
        "The Office (US) symbols is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-controversies",
        "contains",
        "The Office (US) controversies is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-sources",
        "contains",
        "The Office (US) sources is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-geography",
        "contains",
        "The Office (US) geography is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-legacy",
        "contains",
        "The Office (US) legacy is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-practices",
        "contains",
        "The Office (US) practices is a primary trailhead under The Office (US).",
        0.88,
        0.82
    ],
    [
        "the-office-us",
        "the-office-us-entry-1",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-2",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-3",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-4",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-5",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-6",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-7",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-8",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-9",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-10",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-11",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-12",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-13",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-14",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-15",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-16",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-17",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-18",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-19",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-20",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-21",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-22",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-23",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ],
    [
        "the-office-us",
        "the-office-us-entry-24",
        "contains",
        "Supporting entry under The Office (US).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
