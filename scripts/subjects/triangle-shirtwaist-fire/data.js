/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "triangle-shirtwaist-fire",
        "name": "Triangle Shirtwaist Factory fire",
        "type": "topic",
        "short_description": "1911 loft blaze, locked doors, and the industrial tragedy that remade labor safety law.",
        "description": "1911 loft blaze, locked doors, and the industrial tragedy that remade labor safety law. This Ton-o-Lore subject maps people, places, events, and ideas tied to Triangle Shirtwaist Factory fire so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "triangle-shirtwaist-fire-figures",
        "name": "Triangle Shirtwaist Factory fire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Triangle Shirtwaist Factory fire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-world",
        "name": "Triangle Shirtwaist Factory fire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Triangle Shirtwaist Factory fire.",
        "description": "Geography, institutions, and periodization that give Triangle Shirtwaist Factory fire its encyclopedia shape."
    },
    {
        "slug": "triangle-shirtwaist-fire-places",
        "name": "Triangle Shirtwaist Factory fire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Triangle Shirtwaist Factory fire.",
        "description": "Places, regions, and built sites that give Triangle Shirtwaist Factory fire its map — where events and figures concentrate."
    },
    {
        "slug": "triangle-shirtwaist-fire-events",
        "name": "Triangle Shirtwaist Factory fire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Triangle Shirtwaist Factory fire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Triangle Shirtwaist Factory fire timeline."
    },
    {
        "slug": "triangle-shirtwaist-fire-objects",
        "name": "Triangle Shirtwaist Factory fire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Triangle Shirtwaist Factory fire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-factions",
        "name": "Triangle Shirtwaist Factory fire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Triangle Shirtwaist Factory fire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-concepts",
        "name": "Triangle Shirtwaist Factory fire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Triangle Shirtwaist Factory fire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Triangle Shirtwaist Factory fire readable as a lore graph."
    },
    {
        "slug": "triangle-shirtwaist-fire-eras",
        "name": "Triangle Shirtwaist Factory fire eras",
        "type": "event",
        "short_description": "Periodization for Triangle Shirtwaist Factory fire.",
        "description": "Named eras and phases that help readers track how Triangle Shirtwaist Factory fire changes across time."
    },
    {
        "slug": "triangle-shirtwaist-fire-works",
        "name": "Triangle Shirtwaist Factory fire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Triangle Shirtwaist Factory fire.",
        "description": "Primary works and adaptations through which most audiences encounter Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-symbols",
        "name": "Triangle Shirtwaist Factory fire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Triangle Shirtwaist Factory fire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-controversies",
        "name": "Triangle Shirtwaist Factory fire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Triangle Shirtwaist Factory fire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Triangle Shirtwaist Factory fire argumentative."
    },
    {
        "slug": "triangle-shirtwaist-fire-sources",
        "name": "Triangle Shirtwaist Factory fire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Triangle Shirtwaist Factory fire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-geography",
        "name": "Triangle Shirtwaist Factory fire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Triangle Shirtwaist Factory fire.",
        "description": "Regions, routes, and spatial systems that situate Triangle Shirtwaist Factory fire beyond single named places."
    },
    {
        "slug": "triangle-shirtwaist-fire-legacy",
        "name": "Triangle Shirtwaist Factory fire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Triangle Shirtwaist Factory fire.",
        "description": "How Triangle Shirtwaist Factory fire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "triangle-shirtwaist-fire-practices",
        "name": "Triangle Shirtwaist Factory fire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Triangle Shirtwaist Factory fire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Triangle Shirtwaist Factory fire."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-1",
        "name": "Triangle Shirtwaist Factory fire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-2",
        "name": "Triangle Shirtwaist Factory fire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-3",
        "name": "Triangle Shirtwaist Factory fire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-4",
        "name": "Triangle Shirtwaist Factory fire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-5",
        "name": "Triangle Shirtwaist Factory fire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-6",
        "name": "Triangle Shirtwaist Factory fire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-7",
        "name": "Triangle Shirtwaist Factory fire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-8",
        "name": "Triangle Shirtwaist Factory fire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-9",
        "name": "Triangle Shirtwaist Factory fire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-10",
        "name": "Triangle Shirtwaist Factory fire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-11",
        "name": "Triangle Shirtwaist Factory fire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-12",
        "name": "Triangle Shirtwaist Factory fire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-13",
        "name": "Triangle Shirtwaist Factory fire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-14",
        "name": "Triangle Shirtwaist Factory fire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-15",
        "name": "Triangle Shirtwaist Factory fire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-16",
        "name": "Triangle Shirtwaist Factory fire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-17",
        "name": "Triangle Shirtwaist Factory fire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-18",
        "name": "Triangle Shirtwaist Factory fire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-19",
        "name": "Triangle Shirtwaist Factory fire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-20",
        "name": "Triangle Shirtwaist Factory fire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-21",
        "name": "Triangle Shirtwaist Factory fire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-22",
        "name": "Triangle Shirtwaist Factory fire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-23",
        "name": "Triangle Shirtwaist Factory fire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "triangle-shirtwaist-fire-entry-24",
        "name": "Triangle Shirtwaist Factory fire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Triangle Shirtwaist Factory fire.",
        "description": "A supporting encyclopedia entry in the Triangle Shirtwaist Factory fire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-places",
        "contains",
        "Triangle Shirtwaist Factory fire places is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-events",
        "contains",
        "Triangle Shirtwaist Factory fire events is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-objects",
        "contains",
        "Triangle Shirtwaist Factory fire objects & artifacts is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-factions",
        "contains",
        "Triangle Shirtwaist Factory fire factions & groups is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-concepts",
        "contains",
        "Triangle Shirtwaist Factory fire concepts is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-eras",
        "contains",
        "Triangle Shirtwaist Factory fire eras is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-works",
        "contains",
        "Triangle Shirtwaist Factory fire works & media is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-symbols",
        "contains",
        "Triangle Shirtwaist Factory fire symbols is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-controversies",
        "contains",
        "Triangle Shirtwaist Factory fire controversies is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-sources",
        "contains",
        "Triangle Shirtwaist Factory fire sources is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-geography",
        "contains",
        "Triangle Shirtwaist Factory fire geography is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-legacy",
        "contains",
        "Triangle Shirtwaist Factory fire legacy is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-practices",
        "contains",
        "Triangle Shirtwaist Factory fire practices is a primary trailhead under Triangle Shirtwaist Factory fire.",
        0.88,
        0.82
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-1",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-2",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-3",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-4",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-5",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-6",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-7",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-8",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-9",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-10",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-11",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-12",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-13",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-14",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-15",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-16",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-17",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-18",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-19",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-20",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-21",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-22",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-23",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ],
    [
        "triangle-shirtwaist-fire",
        "triangle-shirtwaist-fire-entry-24",
        "contains",
        "Supporting entry under Triangle Shirtwaist Factory fire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
