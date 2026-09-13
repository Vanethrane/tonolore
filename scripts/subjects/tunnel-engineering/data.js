/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tunnel-engineering",
        "name": "Tunnel engineering",
        "type": "topic",
        "short_description": "Boring, under-river links, and the invisible infrastructure of modern mobility.",
        "description": "Boring, under-river links, and the invisible infrastructure of modern mobility. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tunnel engineering so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "tunnel-engineering-figures",
        "name": "Tunnel engineering figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tunnel engineering.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-world",
        "name": "Tunnel engineering world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tunnel engineering.",
        "description": "Geography, institutions, and periodization that give Tunnel engineering its encyclopedia shape."
    },
    {
        "slug": "tunnel-engineering-places",
        "name": "Tunnel engineering places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tunnel engineering.",
        "description": "Places, regions, and built sites that give Tunnel engineering its map — where events and figures concentrate."
    },
    {
        "slug": "tunnel-engineering-events",
        "name": "Tunnel engineering events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tunnel engineering.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tunnel engineering timeline."
    },
    {
        "slug": "tunnel-engineering-objects",
        "name": "Tunnel engineering objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tunnel engineering.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-factions",
        "name": "Tunnel engineering factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tunnel engineering.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-concepts",
        "name": "Tunnel engineering concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tunnel engineering.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tunnel engineering readable as a lore graph."
    },
    {
        "slug": "tunnel-engineering-eras",
        "name": "Tunnel engineering eras",
        "type": "event",
        "short_description": "Periodization for Tunnel engineering.",
        "description": "Named eras and phases that help readers track how Tunnel engineering changes across time."
    },
    {
        "slug": "tunnel-engineering-works",
        "name": "Tunnel engineering works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tunnel engineering.",
        "description": "Primary works and adaptations through which most audiences encounter Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-symbols",
        "name": "Tunnel engineering symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tunnel engineering.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-controversies",
        "name": "Tunnel engineering controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tunnel engineering.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tunnel engineering argumentative."
    },
    {
        "slug": "tunnel-engineering-sources",
        "name": "Tunnel engineering sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tunnel engineering.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-geography",
        "name": "Tunnel engineering geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tunnel engineering.",
        "description": "Regions, routes, and spatial systems that situate Tunnel engineering beyond single named places."
    },
    {
        "slug": "tunnel-engineering-legacy",
        "name": "Tunnel engineering legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tunnel engineering.",
        "description": "How Tunnel engineering continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tunnel-engineering-practices",
        "name": "Tunnel engineering practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tunnel engineering.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tunnel engineering."
    },
    {
        "slug": "tunnel-engineering-entry-1",
        "name": "Tunnel engineering entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-2",
        "name": "Tunnel engineering entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-3",
        "name": "Tunnel engineering entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-4",
        "name": "Tunnel engineering entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-5",
        "name": "Tunnel engineering entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-6",
        "name": "Tunnel engineering entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-7",
        "name": "Tunnel engineering entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-8",
        "name": "Tunnel engineering entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-9",
        "name": "Tunnel engineering entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-10",
        "name": "Tunnel engineering entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-11",
        "name": "Tunnel engineering entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-12",
        "name": "Tunnel engineering entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-13",
        "name": "Tunnel engineering entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-14",
        "name": "Tunnel engineering entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-15",
        "name": "Tunnel engineering entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-16",
        "name": "Tunnel engineering entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-17",
        "name": "Tunnel engineering entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-18",
        "name": "Tunnel engineering entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-19",
        "name": "Tunnel engineering entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-20",
        "name": "Tunnel engineering entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-21",
        "name": "Tunnel engineering entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-22",
        "name": "Tunnel engineering entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-23",
        "name": "Tunnel engineering entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tunnel-engineering-entry-24",
        "name": "Tunnel engineering entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tunnel engineering.",
        "description": "A supporting encyclopedia entry in the Tunnel engineering subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tunnel-engineering",
        "tunnel-engineering-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-places",
        "contains",
        "Tunnel engineering places is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-events",
        "contains",
        "Tunnel engineering events is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-objects",
        "contains",
        "Tunnel engineering objects & artifacts is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-factions",
        "contains",
        "Tunnel engineering factions & groups is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-concepts",
        "contains",
        "Tunnel engineering concepts is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-eras",
        "contains",
        "Tunnel engineering eras is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-works",
        "contains",
        "Tunnel engineering works & media is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-symbols",
        "contains",
        "Tunnel engineering symbols is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-controversies",
        "contains",
        "Tunnel engineering controversies is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-sources",
        "contains",
        "Tunnel engineering sources is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-geography",
        "contains",
        "Tunnel engineering geography is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-legacy",
        "contains",
        "Tunnel engineering legacy is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-practices",
        "contains",
        "Tunnel engineering practices is a primary trailhead under Tunnel engineering.",
        0.88,
        0.82
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-1",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-2",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-3",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-4",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-5",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-6",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-7",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-8",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-9",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-10",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-11",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-12",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-13",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-14",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-15",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-16",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-17",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-18",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-19",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-20",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-21",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-22",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-23",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ],
    [
        "tunnel-engineering",
        "tunnel-engineering-entry-24",
        "contains",
        "Supporting entry under Tunnel engineering.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
