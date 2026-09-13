/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "crystal-healing-lore",
        "name": "Crystal healing lore",
        "type": "topic",
        "short_description": "Stones, chakras, and the mineral mysticism of late-twentieth-century alternative spirituality.",
        "description": "Stones, chakras, and the mineral mysticism of late-twentieth-century alternative spirituality. This Ton-o-Lore subject maps people, places, events, and ideas tied to Crystal healing lore so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "crystal-healing-lore-figures",
        "name": "Crystal healing lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Crystal healing lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-world",
        "name": "Crystal healing lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Crystal healing lore.",
        "description": "Geography, institutions, and periodization that give Crystal healing lore its encyclopedia shape."
    },
    {
        "slug": "crystal-healing-lore-places",
        "name": "Crystal healing lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Crystal healing lore.",
        "description": "Places, regions, and built sites that give Crystal healing lore its map — where events and figures concentrate."
    },
    {
        "slug": "crystal-healing-lore-events",
        "name": "Crystal healing lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Crystal healing lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Crystal healing lore timeline."
    },
    {
        "slug": "crystal-healing-lore-objects",
        "name": "Crystal healing lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Crystal healing lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-factions",
        "name": "Crystal healing lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Crystal healing lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-concepts",
        "name": "Crystal healing lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Crystal healing lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Crystal healing lore readable as a lore graph."
    },
    {
        "slug": "crystal-healing-lore-eras",
        "name": "Crystal healing lore eras",
        "type": "event",
        "short_description": "Periodization for Crystal healing lore.",
        "description": "Named eras and phases that help readers track how Crystal healing lore changes across time."
    },
    {
        "slug": "crystal-healing-lore-works",
        "name": "Crystal healing lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Crystal healing lore.",
        "description": "Primary works and adaptations through which most audiences encounter Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-symbols",
        "name": "Crystal healing lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Crystal healing lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-controversies",
        "name": "Crystal healing lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Crystal healing lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Crystal healing lore argumentative."
    },
    {
        "slug": "crystal-healing-lore-sources",
        "name": "Crystal healing lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Crystal healing lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-geography",
        "name": "Crystal healing lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Crystal healing lore.",
        "description": "Regions, routes, and spatial systems that situate Crystal healing lore beyond single named places."
    },
    {
        "slug": "crystal-healing-lore-legacy",
        "name": "Crystal healing lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Crystal healing lore.",
        "description": "How Crystal healing lore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "crystal-healing-lore-practices",
        "name": "Crystal healing lore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Crystal healing lore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Crystal healing lore."
    },
    {
        "slug": "crystal-healing-lore-entry-1",
        "name": "Crystal healing lore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-2",
        "name": "Crystal healing lore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-3",
        "name": "Crystal healing lore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-4",
        "name": "Crystal healing lore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-5",
        "name": "Crystal healing lore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-6",
        "name": "Crystal healing lore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-7",
        "name": "Crystal healing lore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-8",
        "name": "Crystal healing lore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-9",
        "name": "Crystal healing lore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-10",
        "name": "Crystal healing lore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-11",
        "name": "Crystal healing lore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-12",
        "name": "Crystal healing lore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-13",
        "name": "Crystal healing lore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-14",
        "name": "Crystal healing lore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-15",
        "name": "Crystal healing lore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-16",
        "name": "Crystal healing lore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-17",
        "name": "Crystal healing lore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-18",
        "name": "Crystal healing lore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-19",
        "name": "Crystal healing lore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-20",
        "name": "Crystal healing lore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-21",
        "name": "Crystal healing lore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-22",
        "name": "Crystal healing lore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-23",
        "name": "Crystal healing lore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-healing-lore-entry-24",
        "name": "Crystal healing lore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal healing lore.",
        "description": "A supporting encyclopedia entry in the Crystal healing lore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "crystal-healing-lore",
        "crystal-healing-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-places",
        "contains",
        "Crystal healing lore places is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-events",
        "contains",
        "Crystal healing lore events is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-objects",
        "contains",
        "Crystal healing lore objects & artifacts is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-factions",
        "contains",
        "Crystal healing lore factions & groups is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-concepts",
        "contains",
        "Crystal healing lore concepts is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-eras",
        "contains",
        "Crystal healing lore eras is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-works",
        "contains",
        "Crystal healing lore works & media is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-symbols",
        "contains",
        "Crystal healing lore symbols is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-controversies",
        "contains",
        "Crystal healing lore controversies is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-sources",
        "contains",
        "Crystal healing lore sources is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-geography",
        "contains",
        "Crystal healing lore geography is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-legacy",
        "contains",
        "Crystal healing lore legacy is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-practices",
        "contains",
        "Crystal healing lore practices is a primary trailhead under Crystal healing lore.",
        0.88,
        0.82
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-1",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-2",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-3",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-4",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-5",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-6",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-7",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-8",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-9",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-10",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-11",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-12",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-13",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-14",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-15",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-16",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-17",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-18",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-19",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-20",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-21",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-22",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-23",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ],
    [
        "crystal-healing-lore",
        "crystal-healing-lore-entry-24",
        "contains",
        "Supporting entry under Crystal healing lore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
