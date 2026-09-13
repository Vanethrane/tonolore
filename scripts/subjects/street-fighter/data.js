/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "street-fighter",
        "name": "Street Fighter",
        "type": "topic",
        "short_description": "World warriors, combos, and Capcom's flagship fighting-game universe.",
        "description": "World warriors, combos, and Capcom's flagship fighting-game universe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Street Fighter so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "street-fighter-figures",
        "name": "Street Fighter figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Street Fighter.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Street Fighter."
    },
    {
        "slug": "street-fighter-world",
        "name": "Street Fighter world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Street Fighter.",
        "description": "Geography, institutions, and periodization that give Street Fighter its encyclopedia shape."
    },
    {
        "slug": "street-fighter-places",
        "name": "Street Fighter places",
        "type": "place",
        "short_description": "Locations and geographies that frame Street Fighter.",
        "description": "Places, regions, and built sites that give Street Fighter its map — where events and figures concentrate."
    },
    {
        "slug": "street-fighter-events",
        "name": "Street Fighter events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Street Fighter.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Street Fighter timeline."
    },
    {
        "slug": "street-fighter-objects",
        "name": "Street Fighter objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Street Fighter.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Street Fighter."
    },
    {
        "slug": "street-fighter-factions",
        "name": "Street Fighter factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Street Fighter.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Street Fighter."
    },
    {
        "slug": "street-fighter-concepts",
        "name": "Street Fighter concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Street Fighter.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Street Fighter readable as a lore graph."
    },
    {
        "slug": "street-fighter-eras",
        "name": "Street Fighter eras",
        "type": "event",
        "short_description": "Periodization for Street Fighter.",
        "description": "Named eras and phases that help readers track how Street Fighter changes across time."
    },
    {
        "slug": "street-fighter-works",
        "name": "Street Fighter works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Street Fighter.",
        "description": "Primary works and adaptations through which most audiences encounter Street Fighter."
    },
    {
        "slug": "street-fighter-symbols",
        "name": "Street Fighter symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Street Fighter.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Street Fighter."
    },
    {
        "slug": "street-fighter-controversies",
        "name": "Street Fighter controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Street Fighter.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Street Fighter argumentative."
    },
    {
        "slug": "street-fighter-sources",
        "name": "Street Fighter sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Street Fighter.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Street Fighter."
    },
    {
        "slug": "street-fighter-geography",
        "name": "Street Fighter geography",
        "type": "place",
        "short_description": "Broader geographic framing for Street Fighter.",
        "description": "Regions, routes, and spatial systems that situate Street Fighter beyond single named places."
    },
    {
        "slug": "street-fighter-legacy",
        "name": "Street Fighter legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Street Fighter.",
        "description": "How Street Fighter continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "street-fighter-practices",
        "name": "Street Fighter practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Street Fighter.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Street Fighter."
    },
    {
        "slug": "street-fighter-entry-1",
        "name": "Street Fighter entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-2",
        "name": "Street Fighter entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-3",
        "name": "Street Fighter entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-4",
        "name": "Street Fighter entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-5",
        "name": "Street Fighter entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-6",
        "name": "Street Fighter entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-7",
        "name": "Street Fighter entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-8",
        "name": "Street Fighter entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-9",
        "name": "Street Fighter entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-10",
        "name": "Street Fighter entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-11",
        "name": "Street Fighter entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-12",
        "name": "Street Fighter entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-13",
        "name": "Street Fighter entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-14",
        "name": "Street Fighter entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-15",
        "name": "Street Fighter entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-16",
        "name": "Street Fighter entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-17",
        "name": "Street Fighter entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-18",
        "name": "Street Fighter entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-19",
        "name": "Street Fighter entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-20",
        "name": "Street Fighter entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-21",
        "name": "Street Fighter entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-22",
        "name": "Street Fighter entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-23",
        "name": "Street Fighter entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-fighter-entry-24",
        "name": "Street Fighter entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street Fighter.",
        "description": "A supporting encyclopedia entry in the Street Fighter subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "street-fighter",
        "street-fighter-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "street-fighter",
        "street-fighter-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "street-fighter",
        "street-fighter-places",
        "contains",
        "Street Fighter places is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-events",
        "contains",
        "Street Fighter events is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-objects",
        "contains",
        "Street Fighter objects & artifacts is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-factions",
        "contains",
        "Street Fighter factions & groups is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-concepts",
        "contains",
        "Street Fighter concepts is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-eras",
        "contains",
        "Street Fighter eras is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-works",
        "contains",
        "Street Fighter works & media is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-symbols",
        "contains",
        "Street Fighter symbols is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-controversies",
        "contains",
        "Street Fighter controversies is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-sources",
        "contains",
        "Street Fighter sources is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-geography",
        "contains",
        "Street Fighter geography is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-legacy",
        "contains",
        "Street Fighter legacy is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-practices",
        "contains",
        "Street Fighter practices is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-entry-1",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-2",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-3",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-4",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-5",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-6",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-7",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-8",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-9",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-10",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-11",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-12",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-13",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-14",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-15",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-16",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-17",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-18",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-19",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-20",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-21",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-22",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-23",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ],
    [
        "street-fighter",
        "street-fighter-entry-24",
        "contains",
        "Supporting entry under Street Fighter.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
