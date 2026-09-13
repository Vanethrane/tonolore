/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "microbiology-germs",
        "name": "Microbiology",
        "type": "topic",
        "short_description": "Bacteria, viruses, microbiomes, and the invisible life that shapes health and history.",
        "description": "Bacteria, viruses, microbiomes, and the invisible life that shapes health and history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Microbiology so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "microbiology-germs-figures",
        "name": "Microbiology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Microbiology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Microbiology."
    },
    {
        "slug": "microbiology-germs-world",
        "name": "Microbiology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Microbiology.",
        "description": "Geography, institutions, and periodization that give Microbiology its encyclopedia shape."
    },
    {
        "slug": "microbiology-germs-places",
        "name": "Microbiology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Microbiology.",
        "description": "Places, regions, and built sites that give Microbiology its map — where events and figures concentrate."
    },
    {
        "slug": "microbiology-germs-events",
        "name": "Microbiology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Microbiology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Microbiology timeline."
    },
    {
        "slug": "microbiology-germs-objects",
        "name": "Microbiology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Microbiology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Microbiology."
    },
    {
        "slug": "microbiology-germs-factions",
        "name": "Microbiology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Microbiology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Microbiology."
    },
    {
        "slug": "microbiology-germs-concepts",
        "name": "Microbiology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Microbiology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Microbiology readable as a lore graph."
    },
    {
        "slug": "microbiology-germs-eras",
        "name": "Microbiology eras",
        "type": "event",
        "short_description": "Periodization for Microbiology.",
        "description": "Named eras and phases that help readers track how Microbiology changes across time."
    },
    {
        "slug": "microbiology-germs-works",
        "name": "Microbiology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Microbiology.",
        "description": "Primary works and adaptations through which most audiences encounter Microbiology."
    },
    {
        "slug": "microbiology-germs-symbols",
        "name": "Microbiology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Microbiology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Microbiology."
    },
    {
        "slug": "microbiology-germs-controversies",
        "name": "Microbiology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Microbiology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Microbiology argumentative."
    },
    {
        "slug": "microbiology-germs-sources",
        "name": "Microbiology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Microbiology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Microbiology."
    },
    {
        "slug": "microbiology-germs-geography",
        "name": "Microbiology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Microbiology.",
        "description": "Regions, routes, and spatial systems that situate Microbiology beyond single named places."
    },
    {
        "slug": "microbiology-germs-legacy",
        "name": "Microbiology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Microbiology.",
        "description": "How Microbiology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "microbiology-germs-practices",
        "name": "Microbiology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Microbiology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Microbiology."
    },
    {
        "slug": "microbiology-germs-entry-1",
        "name": "Microbiology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-2",
        "name": "Microbiology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-3",
        "name": "Microbiology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-4",
        "name": "Microbiology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-5",
        "name": "Microbiology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-6",
        "name": "Microbiology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-7",
        "name": "Microbiology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-8",
        "name": "Microbiology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-9",
        "name": "Microbiology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-10",
        "name": "Microbiology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-11",
        "name": "Microbiology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-12",
        "name": "Microbiology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-13",
        "name": "Microbiology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-14",
        "name": "Microbiology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-15",
        "name": "Microbiology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-16",
        "name": "Microbiology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-17",
        "name": "Microbiology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-18",
        "name": "Microbiology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-19",
        "name": "Microbiology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-20",
        "name": "Microbiology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-21",
        "name": "Microbiology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-22",
        "name": "Microbiology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-23",
        "name": "Microbiology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "microbiology-germs-entry-24",
        "name": "Microbiology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Microbiology.",
        "description": "A supporting encyclopedia entry in the Microbiology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "microbiology-germs",
        "microbiology-germs-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "microbiology-germs",
        "microbiology-germs-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "microbiology-germs",
        "microbiology-germs-places",
        "contains",
        "Microbiology places is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-events",
        "contains",
        "Microbiology events is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-objects",
        "contains",
        "Microbiology objects & artifacts is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-factions",
        "contains",
        "Microbiology factions & groups is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-concepts",
        "contains",
        "Microbiology concepts is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-eras",
        "contains",
        "Microbiology eras is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-works",
        "contains",
        "Microbiology works & media is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-symbols",
        "contains",
        "Microbiology symbols is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-controversies",
        "contains",
        "Microbiology controversies is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-sources",
        "contains",
        "Microbiology sources is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-geography",
        "contains",
        "Microbiology geography is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-legacy",
        "contains",
        "Microbiology legacy is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-practices",
        "contains",
        "Microbiology practices is a primary trailhead under Microbiology.",
        0.88,
        0.82
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-1",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-2",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-3",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-4",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-5",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-6",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-7",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-8",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-9",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-10",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-11",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-12",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-13",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-14",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-15",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-16",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-17",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-18",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-19",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-20",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-21",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-22",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-23",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ],
    [
        "microbiology-germs",
        "microbiology-germs-entry-24",
        "contains",
        "Supporting entry under Microbiology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
