/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stardom-wrestling",
        "name": "World Wonder Ring Stardom",
        "type": "topic",
        "short_description": "Joshi factions, 5 Star Grand Prix, and the flagship women’s promotion of modern Japan.",
        "description": "Joshi factions, 5 Star Grand Prix, and the flagship women’s promotion of modern Japan. This Ton-o-Lore subject maps people, places, events, and ideas tied to World Wonder Ring Stardom so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "stardom-wrestling-figures",
        "name": "World Wonder Ring Stardom figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World Wonder Ring Stardom.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-world",
        "name": "World Wonder Ring Stardom world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World Wonder Ring Stardom.",
        "description": "Geography, institutions, and periodization that give World Wonder Ring Stardom its encyclopedia shape."
    },
    {
        "slug": "stardom-wrestling-places",
        "name": "World Wonder Ring Stardom places",
        "type": "place",
        "short_description": "Locations and geographies that frame World Wonder Ring Stardom.",
        "description": "Places, regions, and built sites that give World Wonder Ring Stardom its map — where events and figures concentrate."
    },
    {
        "slug": "stardom-wrestling-events",
        "name": "World Wonder Ring Stardom events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World Wonder Ring Stardom.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World Wonder Ring Stardom timeline."
    },
    {
        "slug": "stardom-wrestling-objects",
        "name": "World Wonder Ring Stardom objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World Wonder Ring Stardom.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-factions",
        "name": "World Wonder Ring Stardom factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World Wonder Ring Stardom.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-concepts",
        "name": "World Wonder Ring Stardom concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World Wonder Ring Stardom.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World Wonder Ring Stardom readable as a lore graph."
    },
    {
        "slug": "stardom-wrestling-eras",
        "name": "World Wonder Ring Stardom eras",
        "type": "event",
        "short_description": "Periodization for World Wonder Ring Stardom.",
        "description": "Named eras and phases that help readers track how World Wonder Ring Stardom changes across time."
    },
    {
        "slug": "stardom-wrestling-works",
        "name": "World Wonder Ring Stardom works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World Wonder Ring Stardom.",
        "description": "Primary works and adaptations through which most audiences encounter World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-symbols",
        "name": "World Wonder Ring Stardom symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World Wonder Ring Stardom.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-controversies",
        "name": "World Wonder Ring Stardom controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World Wonder Ring Stardom.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World Wonder Ring Stardom argumentative."
    },
    {
        "slug": "stardom-wrestling-sources",
        "name": "World Wonder Ring Stardom sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World Wonder Ring Stardom.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-geography",
        "name": "World Wonder Ring Stardom geography",
        "type": "place",
        "short_description": "Broader geographic framing for World Wonder Ring Stardom.",
        "description": "Regions, routes, and spatial systems that situate World Wonder Ring Stardom beyond single named places."
    },
    {
        "slug": "stardom-wrestling-legacy",
        "name": "World Wonder Ring Stardom legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World Wonder Ring Stardom.",
        "description": "How World Wonder Ring Stardom continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stardom-wrestling-practices",
        "name": "World Wonder Ring Stardom practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in World Wonder Ring Stardom.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in World Wonder Ring Stardom."
    },
    {
        "slug": "stardom-wrestling-entry-1",
        "name": "World Wonder Ring Stardom entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-2",
        "name": "World Wonder Ring Stardom entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-3",
        "name": "World Wonder Ring Stardom entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-4",
        "name": "World Wonder Ring Stardom entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-5",
        "name": "World Wonder Ring Stardom entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-6",
        "name": "World Wonder Ring Stardom entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-7",
        "name": "World Wonder Ring Stardom entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-8",
        "name": "World Wonder Ring Stardom entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-9",
        "name": "World Wonder Ring Stardom entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-10",
        "name": "World Wonder Ring Stardom entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-11",
        "name": "World Wonder Ring Stardom entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-12",
        "name": "World Wonder Ring Stardom entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-13",
        "name": "World Wonder Ring Stardom entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-14",
        "name": "World Wonder Ring Stardom entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-15",
        "name": "World Wonder Ring Stardom entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-16",
        "name": "World Wonder Ring Stardom entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-17",
        "name": "World Wonder Ring Stardom entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-18",
        "name": "World Wonder Ring Stardom entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-19",
        "name": "World Wonder Ring Stardom entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-20",
        "name": "World Wonder Ring Stardom entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-21",
        "name": "World Wonder Ring Stardom entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-22",
        "name": "World Wonder Ring Stardom entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-23",
        "name": "World Wonder Ring Stardom entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stardom-wrestling-entry-24",
        "name": "World Wonder Ring Stardom entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside World Wonder Ring Stardom.",
        "description": "A supporting encyclopedia entry in the World Wonder Ring Stardom subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stardom-wrestling",
        "stardom-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-places",
        "contains",
        "World Wonder Ring Stardom places is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-events",
        "contains",
        "World Wonder Ring Stardom events is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-objects",
        "contains",
        "World Wonder Ring Stardom objects & artifacts is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-factions",
        "contains",
        "World Wonder Ring Stardom factions & groups is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-concepts",
        "contains",
        "World Wonder Ring Stardom concepts is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-eras",
        "contains",
        "World Wonder Ring Stardom eras is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-works",
        "contains",
        "World Wonder Ring Stardom works & media is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-symbols",
        "contains",
        "World Wonder Ring Stardom symbols is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-controversies",
        "contains",
        "World Wonder Ring Stardom controversies is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-sources",
        "contains",
        "World Wonder Ring Stardom sources is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-geography",
        "contains",
        "World Wonder Ring Stardom geography is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-legacy",
        "contains",
        "World Wonder Ring Stardom legacy is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-practices",
        "contains",
        "World Wonder Ring Stardom practices is a primary trailhead under World Wonder Ring Stardom.",
        0.88,
        0.82
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-1",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-2",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-3",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-4",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-5",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-6",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-7",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-8",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-9",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-10",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-11",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-12",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-13",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-14",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-15",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-16",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-17",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-18",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-19",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-20",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-21",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-22",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-23",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ],
    [
        "stardom-wrestling",
        "stardom-wrestling-entry-24",
        "contains",
        "Supporting entry under World Wonder Ring Stardom.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
