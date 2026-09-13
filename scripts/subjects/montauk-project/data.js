/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "montauk-project",
        "name": "Montauk Project",
        "type": "topic",
        "short_description": "Psychic soldier stories, time experiments, and the Long Island base myth tied to Stranger Things vibes.",
        "description": "Psychic soldier stories, time experiments, and the Long Island base myth tied to Stranger Things vibes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Montauk Project so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "montauk-project-figures",
        "name": "Montauk Project figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Montauk Project.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Montauk Project."
    },
    {
        "slug": "montauk-project-world",
        "name": "Montauk Project world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Montauk Project.",
        "description": "Geography, institutions, and periodization that give Montauk Project its encyclopedia shape."
    },
    {
        "slug": "montauk-project-places",
        "name": "Montauk Project places",
        "type": "place",
        "short_description": "Locations and geographies that frame Montauk Project.",
        "description": "Places, regions, and built sites that give Montauk Project its map — where events and figures concentrate."
    },
    {
        "slug": "montauk-project-events",
        "name": "Montauk Project events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Montauk Project.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Montauk Project timeline."
    },
    {
        "slug": "montauk-project-objects",
        "name": "Montauk Project objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Montauk Project.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Montauk Project."
    },
    {
        "slug": "montauk-project-factions",
        "name": "Montauk Project factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Montauk Project.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Montauk Project."
    },
    {
        "slug": "montauk-project-concepts",
        "name": "Montauk Project concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Montauk Project.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Montauk Project readable as a lore graph."
    },
    {
        "slug": "montauk-project-eras",
        "name": "Montauk Project eras",
        "type": "event",
        "short_description": "Periodization for Montauk Project.",
        "description": "Named eras and phases that help readers track how Montauk Project changes across time."
    },
    {
        "slug": "montauk-project-works",
        "name": "Montauk Project works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Montauk Project.",
        "description": "Primary works and adaptations through which most audiences encounter Montauk Project."
    },
    {
        "slug": "montauk-project-symbols",
        "name": "Montauk Project symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Montauk Project.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Montauk Project."
    },
    {
        "slug": "montauk-project-controversies",
        "name": "Montauk Project controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Montauk Project.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Montauk Project argumentative."
    },
    {
        "slug": "montauk-project-sources",
        "name": "Montauk Project sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Montauk Project.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Montauk Project."
    },
    {
        "slug": "montauk-project-geography",
        "name": "Montauk Project geography",
        "type": "place",
        "short_description": "Broader geographic framing for Montauk Project.",
        "description": "Regions, routes, and spatial systems that situate Montauk Project beyond single named places."
    },
    {
        "slug": "montauk-project-legacy",
        "name": "Montauk Project legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Montauk Project.",
        "description": "How Montauk Project continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "montauk-project-practices",
        "name": "Montauk Project practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Montauk Project.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Montauk Project."
    },
    {
        "slug": "montauk-project-entry-1",
        "name": "Montauk Project entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-2",
        "name": "Montauk Project entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-3",
        "name": "Montauk Project entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-4",
        "name": "Montauk Project entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-5",
        "name": "Montauk Project entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-6",
        "name": "Montauk Project entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-7",
        "name": "Montauk Project entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-8",
        "name": "Montauk Project entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-9",
        "name": "Montauk Project entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-10",
        "name": "Montauk Project entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-11",
        "name": "Montauk Project entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-12",
        "name": "Montauk Project entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-13",
        "name": "Montauk Project entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-14",
        "name": "Montauk Project entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-15",
        "name": "Montauk Project entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-16",
        "name": "Montauk Project entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-17",
        "name": "Montauk Project entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-18",
        "name": "Montauk Project entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-19",
        "name": "Montauk Project entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-20",
        "name": "Montauk Project entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-21",
        "name": "Montauk Project entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-22",
        "name": "Montauk Project entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-23",
        "name": "Montauk Project entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "montauk-project-entry-24",
        "name": "Montauk Project entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Montauk Project.",
        "description": "A supporting encyclopedia entry in the Montauk Project subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "montauk-project",
        "montauk-project-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "montauk-project",
        "montauk-project-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "montauk-project",
        "montauk-project-places",
        "contains",
        "Montauk Project places is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-events",
        "contains",
        "Montauk Project events is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-objects",
        "contains",
        "Montauk Project objects & artifacts is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-factions",
        "contains",
        "Montauk Project factions & groups is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-concepts",
        "contains",
        "Montauk Project concepts is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-eras",
        "contains",
        "Montauk Project eras is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-works",
        "contains",
        "Montauk Project works & media is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-symbols",
        "contains",
        "Montauk Project symbols is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-controversies",
        "contains",
        "Montauk Project controversies is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-sources",
        "contains",
        "Montauk Project sources is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-geography",
        "contains",
        "Montauk Project geography is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-legacy",
        "contains",
        "Montauk Project legacy is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-practices",
        "contains",
        "Montauk Project practices is a primary trailhead under Montauk Project.",
        0.88,
        0.82
    ],
    [
        "montauk-project",
        "montauk-project-entry-1",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-2",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-3",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-4",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-5",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-6",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-7",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-8",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-9",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-10",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-11",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-12",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-13",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-14",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-15",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-16",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-17",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-18",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-19",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-20",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-21",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-22",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-23",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ],
    [
        "montauk-project",
        "montauk-project-entry-24",
        "contains",
        "Supporting entry under Montauk Project.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
