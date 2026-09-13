/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "les-miserables-musical",
        "name": "Les Misérables (musical)",
        "type": "topic",
        "short_description": "Barricades, sung-through score, and the global megamusical of Hugo’s revolutionary epic.",
        "description": "Barricades, sung-through score, and the global megamusical of Hugo’s revolutionary epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Les Misérables (musical) so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "les-miserables-musical-figures",
        "name": "Les Misérables (musical) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Les Misérables (musical).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-world",
        "name": "Les Misérables (musical) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Les Misérables (musical).",
        "description": "Geography, institutions, and periodization that give Les Misérables (musical) its encyclopedia shape."
    },
    {
        "slug": "les-miserables-musical-places",
        "name": "Les Misérables (musical) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Les Misérables (musical).",
        "description": "Places, regions, and built sites that give Les Misérables (musical) its map — where events and figures concentrate."
    },
    {
        "slug": "les-miserables-musical-events",
        "name": "Les Misérables (musical) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Les Misérables (musical).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Les Misérables (musical) timeline."
    },
    {
        "slug": "les-miserables-musical-objects",
        "name": "Les Misérables (musical) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Les Misérables (musical).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-factions",
        "name": "Les Misérables (musical) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Les Misérables (musical).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-concepts",
        "name": "Les Misérables (musical) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Les Misérables (musical).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Les Misérables (musical) readable as a lore graph."
    },
    {
        "slug": "les-miserables-musical-eras",
        "name": "Les Misérables (musical) eras",
        "type": "event",
        "short_description": "Periodization for Les Misérables (musical).",
        "description": "Named eras and phases that help readers track how Les Misérables (musical) changes across time."
    },
    {
        "slug": "les-miserables-musical-works",
        "name": "Les Misérables (musical) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Les Misérables (musical).",
        "description": "Primary works and adaptations through which most audiences encounter Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-symbols",
        "name": "Les Misérables (musical) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Les Misérables (musical).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-controversies",
        "name": "Les Misérables (musical) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Les Misérables (musical).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Les Misérables (musical) argumentative."
    },
    {
        "slug": "les-miserables-musical-sources",
        "name": "Les Misérables (musical) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Les Misérables (musical).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-geography",
        "name": "Les Misérables (musical) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Les Misérables (musical).",
        "description": "Regions, routes, and spatial systems that situate Les Misérables (musical) beyond single named places."
    },
    {
        "slug": "les-miserables-musical-legacy",
        "name": "Les Misérables (musical) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Les Misérables (musical).",
        "description": "How Les Misérables (musical) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "les-miserables-musical-practices",
        "name": "Les Misérables (musical) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Les Misérables (musical).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Les Misérables (musical)."
    },
    {
        "slug": "les-miserables-musical-entry-1",
        "name": "Les Misérables (musical) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-2",
        "name": "Les Misérables (musical) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-3",
        "name": "Les Misérables (musical) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-4",
        "name": "Les Misérables (musical) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-5",
        "name": "Les Misérables (musical) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-6",
        "name": "Les Misérables (musical) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-7",
        "name": "Les Misérables (musical) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-8",
        "name": "Les Misérables (musical) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-9",
        "name": "Les Misérables (musical) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-10",
        "name": "Les Misérables (musical) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-11",
        "name": "Les Misérables (musical) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-12",
        "name": "Les Misérables (musical) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-13",
        "name": "Les Misérables (musical) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-14",
        "name": "Les Misérables (musical) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-15",
        "name": "Les Misérables (musical) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-16",
        "name": "Les Misérables (musical) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-17",
        "name": "Les Misérables (musical) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-18",
        "name": "Les Misérables (musical) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-19",
        "name": "Les Misérables (musical) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-20",
        "name": "Les Misérables (musical) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-21",
        "name": "Les Misérables (musical) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-22",
        "name": "Les Misérables (musical) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-23",
        "name": "Les Misérables (musical) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "les-miserables-musical-entry-24",
        "name": "Les Misérables (musical) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Les Misérables (musical).",
        "description": "A supporting encyclopedia entry in the Les Misérables (musical) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "les-miserables-musical",
        "les-miserables-musical-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-places",
        "contains",
        "Les Misérables (musical) places is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-events",
        "contains",
        "Les Misérables (musical) events is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-objects",
        "contains",
        "Les Misérables (musical) objects & artifacts is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-factions",
        "contains",
        "Les Misérables (musical) factions & groups is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-concepts",
        "contains",
        "Les Misérables (musical) concepts is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-eras",
        "contains",
        "Les Misérables (musical) eras is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-works",
        "contains",
        "Les Misérables (musical) works & media is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-symbols",
        "contains",
        "Les Misérables (musical) symbols is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-controversies",
        "contains",
        "Les Misérables (musical) controversies is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-sources",
        "contains",
        "Les Misérables (musical) sources is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-geography",
        "contains",
        "Les Misérables (musical) geography is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-legacy",
        "contains",
        "Les Misérables (musical) legacy is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-practices",
        "contains",
        "Les Misérables (musical) practices is a primary trailhead under Les Misérables (musical).",
        0.88,
        0.82
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-1",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-2",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-3",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-4",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-5",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-6",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-7",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-8",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-9",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-10",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-11",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-12",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-13",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-14",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-15",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-16",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-17",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-18",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-19",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-20",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-21",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-22",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-23",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ],
    [
        "les-miserables-musical",
        "les-miserables-musical-entry-24",
        "contains",
        "Supporting entry under Les Misérables (musical).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
