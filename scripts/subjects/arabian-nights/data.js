/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arabian-nights",
        "name": "Arabian Nights / One Thousand and One Nights",
        "type": "topic",
        "short_description": "Scheherazade, djinn, and the nested frame tales that define Middle Eastern story cycles.",
        "description": "Scheherazade, djinn, and the nested frame tales that define Middle Eastern story cycles. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arabian Nights / One Thousand and One Nights so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "arabian-nights-figures",
        "name": "Arabian Nights / One Thousand and One Nights figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arabian Nights / One Thousand and One Nights.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-world",
        "name": "Arabian Nights / One Thousand and One Nights world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arabian Nights / One Thousand and One Nights.",
        "description": "Geography, institutions, and periodization that give Arabian Nights / One Thousand and One Nights its encyclopedia shape."
    },
    {
        "slug": "arabian-nights-places",
        "name": "Arabian Nights / One Thousand and One Nights places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arabian Nights / One Thousand and One Nights.",
        "description": "Places, regions, and built sites that give Arabian Nights / One Thousand and One Nights its map — where events and figures concentrate."
    },
    {
        "slug": "arabian-nights-events",
        "name": "Arabian Nights / One Thousand and One Nights events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arabian Nights / One Thousand and One Nights.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arabian Nights / One Thousand and One Nights timeline."
    },
    {
        "slug": "arabian-nights-objects",
        "name": "Arabian Nights / One Thousand and One Nights objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arabian Nights / One Thousand and One Nights.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-factions",
        "name": "Arabian Nights / One Thousand and One Nights factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arabian Nights / One Thousand and One Nights.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-concepts",
        "name": "Arabian Nights / One Thousand and One Nights concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arabian Nights / One Thousand and One Nights.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arabian Nights / One Thousand and One Nights readable as a lore graph."
    },
    {
        "slug": "arabian-nights-eras",
        "name": "Arabian Nights / One Thousand and One Nights eras",
        "type": "event",
        "short_description": "Periodization for Arabian Nights / One Thousand and One Nights.",
        "description": "Named eras and phases that help readers track how Arabian Nights / One Thousand and One Nights changes across time."
    },
    {
        "slug": "arabian-nights-works",
        "name": "Arabian Nights / One Thousand and One Nights works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arabian Nights / One Thousand and One Nights.",
        "description": "Primary works and adaptations through which most audiences encounter Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-symbols",
        "name": "Arabian Nights / One Thousand and One Nights symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arabian Nights / One Thousand and One Nights.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-controversies",
        "name": "Arabian Nights / One Thousand and One Nights controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arabian Nights / One Thousand and One Nights.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arabian Nights / One Thousand and One Nights argumentative."
    },
    {
        "slug": "arabian-nights-sources",
        "name": "Arabian Nights / One Thousand and One Nights sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arabian Nights / One Thousand and One Nights.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-geography",
        "name": "Arabian Nights / One Thousand and One Nights geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arabian Nights / One Thousand and One Nights.",
        "description": "Regions, routes, and spatial systems that situate Arabian Nights / One Thousand and One Nights beyond single named places."
    },
    {
        "slug": "arabian-nights-legacy",
        "name": "Arabian Nights / One Thousand and One Nights legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arabian Nights / One Thousand and One Nights.",
        "description": "How Arabian Nights / One Thousand and One Nights continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "arabian-nights-practices",
        "name": "Arabian Nights / One Thousand and One Nights practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Arabian Nights / One Thousand and One Nights.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Arabian Nights / One Thousand and One Nights."
    },
    {
        "slug": "arabian-nights-entry-1",
        "name": "Arabian Nights / One Thousand and One Nights entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-2",
        "name": "Arabian Nights / One Thousand and One Nights entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-3",
        "name": "Arabian Nights / One Thousand and One Nights entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-4",
        "name": "Arabian Nights / One Thousand and One Nights entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-5",
        "name": "Arabian Nights / One Thousand and One Nights entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-6",
        "name": "Arabian Nights / One Thousand and One Nights entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-7",
        "name": "Arabian Nights / One Thousand and One Nights entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-8",
        "name": "Arabian Nights / One Thousand and One Nights entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-9",
        "name": "Arabian Nights / One Thousand and One Nights entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-10",
        "name": "Arabian Nights / One Thousand and One Nights entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-11",
        "name": "Arabian Nights / One Thousand and One Nights entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-12",
        "name": "Arabian Nights / One Thousand and One Nights entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-13",
        "name": "Arabian Nights / One Thousand and One Nights entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-14",
        "name": "Arabian Nights / One Thousand and One Nights entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-15",
        "name": "Arabian Nights / One Thousand and One Nights entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-16",
        "name": "Arabian Nights / One Thousand and One Nights entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-17",
        "name": "Arabian Nights / One Thousand and One Nights entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-18",
        "name": "Arabian Nights / One Thousand and One Nights entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-19",
        "name": "Arabian Nights / One Thousand and One Nights entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-20",
        "name": "Arabian Nights / One Thousand and One Nights entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-21",
        "name": "Arabian Nights / One Thousand and One Nights entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-22",
        "name": "Arabian Nights / One Thousand and One Nights entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-23",
        "name": "Arabian Nights / One Thousand and One Nights entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arabian-nights-entry-24",
        "name": "Arabian Nights / One Thousand and One Nights entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arabian Nights / One Thousand and One Nights.",
        "description": "A supporting encyclopedia entry in the Arabian Nights / One Thousand and One Nights subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "arabian-nights",
        "arabian-nights-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arabian-nights",
        "arabian-nights-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arabian-nights",
        "arabian-nights-places",
        "contains",
        "Arabian Nights / One Thousand and One Nights places is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-events",
        "contains",
        "Arabian Nights / One Thousand and One Nights events is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-objects",
        "contains",
        "Arabian Nights / One Thousand and One Nights objects & artifacts is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-factions",
        "contains",
        "Arabian Nights / One Thousand and One Nights factions & groups is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-concepts",
        "contains",
        "Arabian Nights / One Thousand and One Nights concepts is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-eras",
        "contains",
        "Arabian Nights / One Thousand and One Nights eras is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-works",
        "contains",
        "Arabian Nights / One Thousand and One Nights works & media is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-symbols",
        "contains",
        "Arabian Nights / One Thousand and One Nights symbols is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-controversies",
        "contains",
        "Arabian Nights / One Thousand and One Nights controversies is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-sources",
        "contains",
        "Arabian Nights / One Thousand and One Nights sources is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-geography",
        "contains",
        "Arabian Nights / One Thousand and One Nights geography is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-legacy",
        "contains",
        "Arabian Nights / One Thousand and One Nights legacy is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-practices",
        "contains",
        "Arabian Nights / One Thousand and One Nights practices is a primary trailhead under Arabian Nights / One Thousand and One Nights.",
        0.88,
        0.82
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-1",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-2",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-3",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-4",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-5",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-6",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-7",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-8",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-9",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-10",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-11",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-12",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-13",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-14",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-15",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-16",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-17",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-18",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-19",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-20",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-21",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-22",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-23",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ],
    [
        "arabian-nights",
        "arabian-nights-entry-24",
        "contains",
        "Supporting entry under Arabian Nights / One Thousand and One Nights.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
