/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "method-acting",
        "name": "Method acting",
        "type": "topic",
        "short_description": "Stanislavski lineages, Actors Studio lore, and the psychological craft that remade screen acting.",
        "description": "Stanislavski lineages, Actors Studio lore, and the psychological craft that remade screen acting. This Ton-o-Lore subject maps people, places, events, and ideas tied to Method acting so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "method-acting-figures",
        "name": "Method acting figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Method acting.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Method acting."
    },
    {
        "slug": "method-acting-world",
        "name": "Method acting world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Method acting.",
        "description": "Geography, institutions, and periodization that give Method acting its encyclopedia shape."
    },
    {
        "slug": "method-acting-places",
        "name": "Method acting places",
        "type": "place",
        "short_description": "Locations and geographies that frame Method acting.",
        "description": "Places, regions, and built sites that give Method acting its map — where events and figures concentrate."
    },
    {
        "slug": "method-acting-events",
        "name": "Method acting events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Method acting.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Method acting timeline."
    },
    {
        "slug": "method-acting-objects",
        "name": "Method acting objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Method acting.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Method acting."
    },
    {
        "slug": "method-acting-factions",
        "name": "Method acting factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Method acting.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Method acting."
    },
    {
        "slug": "method-acting-concepts",
        "name": "Method acting concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Method acting.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Method acting readable as a lore graph."
    },
    {
        "slug": "method-acting-eras",
        "name": "Method acting eras",
        "type": "event",
        "short_description": "Periodization for Method acting.",
        "description": "Named eras and phases that help readers track how Method acting changes across time."
    },
    {
        "slug": "method-acting-works",
        "name": "Method acting works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Method acting.",
        "description": "Primary works and adaptations through which most audiences encounter Method acting."
    },
    {
        "slug": "method-acting-symbols",
        "name": "Method acting symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Method acting.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Method acting."
    },
    {
        "slug": "method-acting-controversies",
        "name": "Method acting controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Method acting.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Method acting argumentative."
    },
    {
        "slug": "method-acting-sources",
        "name": "Method acting sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Method acting.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Method acting."
    },
    {
        "slug": "method-acting-geography",
        "name": "Method acting geography",
        "type": "place",
        "short_description": "Broader geographic framing for Method acting.",
        "description": "Regions, routes, and spatial systems that situate Method acting beyond single named places."
    },
    {
        "slug": "method-acting-legacy",
        "name": "Method acting legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Method acting.",
        "description": "How Method acting continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "method-acting-practices",
        "name": "Method acting practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Method acting.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Method acting."
    },
    {
        "slug": "method-acting-entry-1",
        "name": "Method acting entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-2",
        "name": "Method acting entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-3",
        "name": "Method acting entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-4",
        "name": "Method acting entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-5",
        "name": "Method acting entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-6",
        "name": "Method acting entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-7",
        "name": "Method acting entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-8",
        "name": "Method acting entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-9",
        "name": "Method acting entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-10",
        "name": "Method acting entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-11",
        "name": "Method acting entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-12",
        "name": "Method acting entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-13",
        "name": "Method acting entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-14",
        "name": "Method acting entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-15",
        "name": "Method acting entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-16",
        "name": "Method acting entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-17",
        "name": "Method acting entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-18",
        "name": "Method acting entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-19",
        "name": "Method acting entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-20",
        "name": "Method acting entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-21",
        "name": "Method acting entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-22",
        "name": "Method acting entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-23",
        "name": "Method acting entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "method-acting-entry-24",
        "name": "Method acting entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Method acting.",
        "description": "A supporting encyclopedia entry in the Method acting subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "method-acting",
        "method-acting-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "method-acting",
        "method-acting-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "method-acting",
        "method-acting-places",
        "contains",
        "Method acting places is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-events",
        "contains",
        "Method acting events is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-objects",
        "contains",
        "Method acting objects & artifacts is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-factions",
        "contains",
        "Method acting factions & groups is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-concepts",
        "contains",
        "Method acting concepts is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-eras",
        "contains",
        "Method acting eras is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-works",
        "contains",
        "Method acting works & media is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-symbols",
        "contains",
        "Method acting symbols is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-controversies",
        "contains",
        "Method acting controversies is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-sources",
        "contains",
        "Method acting sources is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-geography",
        "contains",
        "Method acting geography is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-legacy",
        "contains",
        "Method acting legacy is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-practices",
        "contains",
        "Method acting practices is a primary trailhead under Method acting.",
        0.88,
        0.82
    ],
    [
        "method-acting",
        "method-acting-entry-1",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-2",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-3",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-4",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-5",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-6",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-7",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-8",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-9",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-10",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-11",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-12",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-13",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-14",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-15",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-16",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-17",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-18",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-19",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-20",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-21",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-22",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-23",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ],
    [
        "method-acting",
        "method-acting-entry-24",
        "contains",
        "Supporting entry under Method acting.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
