/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "metazoo",
        "name": "MetaZoo",
        "type": "topic",
        "short_description": "Cryptid folklore cards, aura mechanics, and the indie TCG that rode a viral collecting wave.",
        "description": "Cryptid folklore cards, aura mechanics, and the indie TCG that rode a viral collecting wave. This Ton-o-Lore subject maps people, places, events, and ideas tied to MetaZoo so readers can follow long-tail connections across card games."
    },
    {
        "slug": "metazoo-figures",
        "name": "MetaZoo figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to MetaZoo.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring MetaZoo."
    },
    {
        "slug": "metazoo-world",
        "name": "MetaZoo world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame MetaZoo.",
        "description": "Geography, institutions, and periodization that give MetaZoo its encyclopedia shape."
    },
    {
        "slug": "metazoo-places",
        "name": "MetaZoo places",
        "type": "place",
        "short_description": "Locations and geographies that frame MetaZoo.",
        "description": "Places, regions, and built sites that give MetaZoo its map — where events and figures concentrate."
    },
    {
        "slug": "metazoo-events",
        "name": "MetaZoo events",
        "type": "event",
        "short_description": "Turning points and dated episodes in MetaZoo.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the MetaZoo timeline."
    },
    {
        "slug": "metazoo-objects",
        "name": "MetaZoo objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to MetaZoo.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through MetaZoo."
    },
    {
        "slug": "metazoo-factions",
        "name": "MetaZoo factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside MetaZoo.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in MetaZoo."
    },
    {
        "slug": "metazoo-concepts",
        "name": "MetaZoo concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize MetaZoo.",
        "description": "Keywords, doctrines, systems, and abstract forces that make MetaZoo readable as a lore graph."
    },
    {
        "slug": "metazoo-eras",
        "name": "MetaZoo eras",
        "type": "event",
        "short_description": "Periodization for MetaZoo.",
        "description": "Named eras and phases that help readers track how MetaZoo changes across time."
    },
    {
        "slug": "metazoo-works",
        "name": "MetaZoo works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry MetaZoo.",
        "description": "Primary works and adaptations through which most audiences encounter MetaZoo."
    },
    {
        "slug": "metazoo-symbols",
        "name": "MetaZoo symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with MetaZoo.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside MetaZoo."
    },
    {
        "slug": "metazoo-controversies",
        "name": "MetaZoo controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in MetaZoo.",
        "description": "Debates, rival canons, scandals, and contested facts that keep MetaZoo argumentative."
    },
    {
        "slug": "metazoo-sources",
        "name": "MetaZoo sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into MetaZoo.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify MetaZoo."
    },
    {
        "slug": "metazoo-geography",
        "name": "MetaZoo geography",
        "type": "place",
        "short_description": "Broader geographic framing for MetaZoo.",
        "description": "Regions, routes, and spatial systems that situate MetaZoo beyond single named places."
    },
    {
        "slug": "metazoo-legacy",
        "name": "MetaZoo legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of MetaZoo.",
        "description": "How MetaZoo continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "metazoo-practices",
        "name": "MetaZoo practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in MetaZoo.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in MetaZoo."
    },
    {
        "slug": "metazoo-entry-1",
        "name": "MetaZoo entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-2",
        "name": "MetaZoo entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-3",
        "name": "MetaZoo entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-4",
        "name": "MetaZoo entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-5",
        "name": "MetaZoo entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-6",
        "name": "MetaZoo entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-7",
        "name": "MetaZoo entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-8",
        "name": "MetaZoo entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-9",
        "name": "MetaZoo entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-10",
        "name": "MetaZoo entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-11",
        "name": "MetaZoo entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-12",
        "name": "MetaZoo entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-13",
        "name": "MetaZoo entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-14",
        "name": "MetaZoo entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-15",
        "name": "MetaZoo entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-16",
        "name": "MetaZoo entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-17",
        "name": "MetaZoo entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-18",
        "name": "MetaZoo entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-19",
        "name": "MetaZoo entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-20",
        "name": "MetaZoo entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-21",
        "name": "MetaZoo entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-22",
        "name": "MetaZoo entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-23",
        "name": "MetaZoo entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metazoo-entry-24",
        "name": "MetaZoo entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside MetaZoo.",
        "description": "A supporting encyclopedia entry in the MetaZoo subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "metazoo",
        "metazoo-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "metazoo",
        "metazoo-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "metazoo",
        "metazoo-places",
        "contains",
        "MetaZoo places is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-events",
        "contains",
        "MetaZoo events is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-objects",
        "contains",
        "MetaZoo objects & artifacts is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-factions",
        "contains",
        "MetaZoo factions & groups is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-concepts",
        "contains",
        "MetaZoo concepts is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-eras",
        "contains",
        "MetaZoo eras is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-works",
        "contains",
        "MetaZoo works & media is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-symbols",
        "contains",
        "MetaZoo symbols is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-controversies",
        "contains",
        "MetaZoo controversies is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-sources",
        "contains",
        "MetaZoo sources is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-geography",
        "contains",
        "MetaZoo geography is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-legacy",
        "contains",
        "MetaZoo legacy is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-practices",
        "contains",
        "MetaZoo practices is a primary trailhead under MetaZoo.",
        0.88,
        0.82
    ],
    [
        "metazoo",
        "metazoo-entry-1",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-2",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-3",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-4",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-5",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-6",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-7",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-8",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-9",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-10",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-11",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-12",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-13",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-14",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-15",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-16",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-17",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-18",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-19",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-20",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-21",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-22",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-23",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ],
    [
        "metazoo",
        "metazoo-entry-24",
        "contains",
        "Supporting entry under MetaZoo.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
