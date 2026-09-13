/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "superman-comics",
        "name": "Superman (comics)",
        "type": "topic",
        "short_description": "Krypton, Metropolis hope, and the archetype of the modern superhero on the page.",
        "description": "Krypton, Metropolis hope, and the archetype of the modern superhero on the page. This Ton-o-Lore subject maps people, places, events, and ideas tied to Superman (comics) so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "superman-comics-figures",
        "name": "Superman (comics) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Superman (comics).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Superman (comics)."
    },
    {
        "slug": "superman-comics-world",
        "name": "Superman (comics) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Superman (comics).",
        "description": "Geography, institutions, and periodization that give Superman (comics) its encyclopedia shape."
    },
    {
        "slug": "superman-comics-places",
        "name": "Superman (comics) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Superman (comics).",
        "description": "Places, regions, and built sites that give Superman (comics) its map — where events and figures concentrate."
    },
    {
        "slug": "superman-comics-events",
        "name": "Superman (comics) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Superman (comics).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Superman (comics) timeline."
    },
    {
        "slug": "superman-comics-objects",
        "name": "Superman (comics) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Superman (comics).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Superman (comics)."
    },
    {
        "slug": "superman-comics-factions",
        "name": "Superman (comics) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Superman (comics).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Superman (comics)."
    },
    {
        "slug": "superman-comics-concepts",
        "name": "Superman (comics) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Superman (comics).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Superman (comics) readable as a lore graph."
    },
    {
        "slug": "superman-comics-eras",
        "name": "Superman (comics) eras",
        "type": "event",
        "short_description": "Periodization for Superman (comics).",
        "description": "Named eras and phases that help readers track how Superman (comics) changes across time."
    },
    {
        "slug": "superman-comics-works",
        "name": "Superman (comics) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Superman (comics).",
        "description": "Primary works and adaptations through which most audiences encounter Superman (comics)."
    },
    {
        "slug": "superman-comics-symbols",
        "name": "Superman (comics) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Superman (comics).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Superman (comics)."
    },
    {
        "slug": "superman-comics-controversies",
        "name": "Superman (comics) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Superman (comics).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Superman (comics) argumentative."
    },
    {
        "slug": "superman-comics-sources",
        "name": "Superman (comics) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Superman (comics).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Superman (comics)."
    },
    {
        "slug": "superman-comics-geography",
        "name": "Superman (comics) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Superman (comics).",
        "description": "Regions, routes, and spatial systems that situate Superman (comics) beyond single named places."
    },
    {
        "slug": "superman-comics-legacy",
        "name": "Superman (comics) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Superman (comics).",
        "description": "How Superman (comics) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "superman-comics-practices",
        "name": "Superman (comics) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Superman (comics).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Superman (comics)."
    },
    {
        "slug": "superman-comics-entry-1",
        "name": "Superman (comics) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-2",
        "name": "Superman (comics) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-3",
        "name": "Superman (comics) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-4",
        "name": "Superman (comics) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-5",
        "name": "Superman (comics) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-6",
        "name": "Superman (comics) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-7",
        "name": "Superman (comics) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-8",
        "name": "Superman (comics) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-9",
        "name": "Superman (comics) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-10",
        "name": "Superman (comics) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-11",
        "name": "Superman (comics) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-12",
        "name": "Superman (comics) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-13",
        "name": "Superman (comics) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-14",
        "name": "Superman (comics) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-15",
        "name": "Superman (comics) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-16",
        "name": "Superman (comics) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-17",
        "name": "Superman (comics) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-18",
        "name": "Superman (comics) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-19",
        "name": "Superman (comics) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-20",
        "name": "Superman (comics) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-21",
        "name": "Superman (comics) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-22",
        "name": "Superman (comics) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-23",
        "name": "Superman (comics) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "superman-comics-entry-24",
        "name": "Superman (comics) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Superman (comics).",
        "description": "A supporting encyclopedia entry in the Superman (comics) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "superman-comics",
        "superman-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "superman-comics",
        "superman-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "superman-comics",
        "superman-comics-places",
        "contains",
        "Superman (comics) places is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-events",
        "contains",
        "Superman (comics) events is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-objects",
        "contains",
        "Superman (comics) objects & artifacts is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-factions",
        "contains",
        "Superman (comics) factions & groups is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-concepts",
        "contains",
        "Superman (comics) concepts is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-eras",
        "contains",
        "Superman (comics) eras is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-works",
        "contains",
        "Superman (comics) works & media is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-symbols",
        "contains",
        "Superman (comics) symbols is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-controversies",
        "contains",
        "Superman (comics) controversies is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-sources",
        "contains",
        "Superman (comics) sources is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-geography",
        "contains",
        "Superman (comics) geography is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-legacy",
        "contains",
        "Superman (comics) legacy is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-practices",
        "contains",
        "Superman (comics) practices is a primary trailhead under Superman (comics).",
        0.88,
        0.82
    ],
    [
        "superman-comics",
        "superman-comics-entry-1",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-2",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-3",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-4",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-5",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-6",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-7",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-8",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-9",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-10",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-11",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-12",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-13",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-14",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-15",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-16",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-17",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-18",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-19",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-20",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-21",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-22",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-23",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ],
    [
        "superman-comics",
        "superman-comics-entry-24",
        "contains",
        "Supporting entry under Superman (comics).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
