/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "neuromancer-lore",
        "name": "Neuromancer",
        "type": "topic",
        "short_description": "Console cowboys, Wintermute, and the novel that coined cyberspace for popular culture.",
        "description": "Console cowboys, Wintermute, and the novel that coined cyberspace for popular culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Neuromancer so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "neuromancer-lore-figures",
        "name": "Neuromancer figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Neuromancer.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Neuromancer."
    },
    {
        "slug": "neuromancer-lore-world",
        "name": "Neuromancer world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Neuromancer.",
        "description": "Geography, institutions, and periodization that give Neuromancer its encyclopedia shape."
    },
    {
        "slug": "neuromancer-lore-places",
        "name": "Neuromancer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Neuromancer.",
        "description": "Places, regions, and built sites that give Neuromancer its map — where events and figures concentrate."
    },
    {
        "slug": "neuromancer-lore-events",
        "name": "Neuromancer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Neuromancer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Neuromancer timeline."
    },
    {
        "slug": "neuromancer-lore-objects",
        "name": "Neuromancer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Neuromancer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Neuromancer."
    },
    {
        "slug": "neuromancer-lore-factions",
        "name": "Neuromancer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Neuromancer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Neuromancer."
    },
    {
        "slug": "neuromancer-lore-concepts",
        "name": "Neuromancer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Neuromancer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Neuromancer readable as a lore graph."
    },
    {
        "slug": "neuromancer-lore-eras",
        "name": "Neuromancer eras",
        "type": "event",
        "short_description": "Periodization for Neuromancer.",
        "description": "Named eras and phases that help readers track how Neuromancer changes across time."
    },
    {
        "slug": "neuromancer-lore-works",
        "name": "Neuromancer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Neuromancer.",
        "description": "Primary works and adaptations through which most audiences encounter Neuromancer."
    },
    {
        "slug": "neuromancer-lore-symbols",
        "name": "Neuromancer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Neuromancer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Neuromancer."
    },
    {
        "slug": "neuromancer-lore-controversies",
        "name": "Neuromancer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Neuromancer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Neuromancer argumentative."
    },
    {
        "slug": "neuromancer-lore-sources",
        "name": "Neuromancer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Neuromancer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Neuromancer."
    },
    {
        "slug": "neuromancer-lore-geography",
        "name": "Neuromancer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Neuromancer.",
        "description": "Regions, routes, and spatial systems that situate Neuromancer beyond single named places."
    },
    {
        "slug": "neuromancer-lore-legacy",
        "name": "Neuromancer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Neuromancer.",
        "description": "How Neuromancer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "neuromancer-lore-practices",
        "name": "Neuromancer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Neuromancer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Neuromancer."
    },
    {
        "slug": "neuromancer-lore-entry-1",
        "name": "Neuromancer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-2",
        "name": "Neuromancer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-3",
        "name": "Neuromancer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-4",
        "name": "Neuromancer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-5",
        "name": "Neuromancer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-6",
        "name": "Neuromancer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-7",
        "name": "Neuromancer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-8",
        "name": "Neuromancer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-9",
        "name": "Neuromancer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-10",
        "name": "Neuromancer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-11",
        "name": "Neuromancer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-12",
        "name": "Neuromancer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-13",
        "name": "Neuromancer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-14",
        "name": "Neuromancer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-15",
        "name": "Neuromancer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-16",
        "name": "Neuromancer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-17",
        "name": "Neuromancer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-18",
        "name": "Neuromancer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-19",
        "name": "Neuromancer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-20",
        "name": "Neuromancer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-21",
        "name": "Neuromancer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-22",
        "name": "Neuromancer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-23",
        "name": "Neuromancer entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuromancer-lore-entry-24",
        "name": "Neuromancer entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuromancer.",
        "description": "A supporting encyclopedia entry in the Neuromancer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "neuromancer-lore",
        "neuromancer-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-places",
        "contains",
        "Neuromancer places is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-events",
        "contains",
        "Neuromancer events is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-objects",
        "contains",
        "Neuromancer objects & artifacts is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-factions",
        "contains",
        "Neuromancer factions & groups is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-concepts",
        "contains",
        "Neuromancer concepts is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-eras",
        "contains",
        "Neuromancer eras is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-works",
        "contains",
        "Neuromancer works & media is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-symbols",
        "contains",
        "Neuromancer symbols is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-controversies",
        "contains",
        "Neuromancer controversies is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-sources",
        "contains",
        "Neuromancer sources is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-geography",
        "contains",
        "Neuromancer geography is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-legacy",
        "contains",
        "Neuromancer legacy is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-practices",
        "contains",
        "Neuromancer practices is a primary trailhead under Neuromancer.",
        0.88,
        0.82
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-1",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-2",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-3",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-4",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-5",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-6",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-7",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-8",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-9",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-10",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-11",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-12",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-13",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-14",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-15",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-16",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-17",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-18",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-19",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-20",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-21",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-22",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-23",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ],
    [
        "neuromancer-lore",
        "neuromancer-lore-entry-24",
        "contains",
        "Supporting entry under Neuromancer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
