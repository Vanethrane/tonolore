/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hellboy",
        "name": "Hellboy",
        "type": "topic",
        "short_description": "B.P.R.D., folk-horror occult, and Mignola’s half-demon hero of pulp mythology.",
        "description": "B.P.R.D., folk-horror occult, and Mignola’s half-demon hero of pulp mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hellboy so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "hellboy-figures",
        "name": "Hellboy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hellboy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hellboy."
    },
    {
        "slug": "hellboy-world",
        "name": "Hellboy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hellboy.",
        "description": "Geography, institutions, and periodization that give Hellboy its encyclopedia shape."
    },
    {
        "slug": "hellboy-places",
        "name": "Hellboy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hellboy.",
        "description": "Places, regions, and built sites that give Hellboy its map — where events and figures concentrate."
    },
    {
        "slug": "hellboy-events",
        "name": "Hellboy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hellboy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hellboy timeline."
    },
    {
        "slug": "hellboy-objects",
        "name": "Hellboy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hellboy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hellboy."
    },
    {
        "slug": "hellboy-factions",
        "name": "Hellboy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hellboy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hellboy."
    },
    {
        "slug": "hellboy-concepts",
        "name": "Hellboy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hellboy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hellboy readable as a lore graph."
    },
    {
        "slug": "hellboy-eras",
        "name": "Hellboy eras",
        "type": "event",
        "short_description": "Periodization for Hellboy.",
        "description": "Named eras and phases that help readers track how Hellboy changes across time."
    },
    {
        "slug": "hellboy-works",
        "name": "Hellboy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hellboy.",
        "description": "Primary works and adaptations through which most audiences encounter Hellboy."
    },
    {
        "slug": "hellboy-symbols",
        "name": "Hellboy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hellboy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hellboy."
    },
    {
        "slug": "hellboy-controversies",
        "name": "Hellboy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hellboy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hellboy argumentative."
    },
    {
        "slug": "hellboy-sources",
        "name": "Hellboy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hellboy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hellboy."
    },
    {
        "slug": "hellboy-geography",
        "name": "Hellboy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hellboy.",
        "description": "Regions, routes, and spatial systems that situate Hellboy beyond single named places."
    },
    {
        "slug": "hellboy-legacy",
        "name": "Hellboy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hellboy.",
        "description": "How Hellboy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hellboy-practices",
        "name": "Hellboy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hellboy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hellboy."
    },
    {
        "slug": "hellboy-entry-1",
        "name": "Hellboy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-2",
        "name": "Hellboy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-3",
        "name": "Hellboy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-4",
        "name": "Hellboy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-5",
        "name": "Hellboy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-6",
        "name": "Hellboy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-7",
        "name": "Hellboy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-8",
        "name": "Hellboy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-9",
        "name": "Hellboy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-10",
        "name": "Hellboy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-11",
        "name": "Hellboy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-12",
        "name": "Hellboy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-13",
        "name": "Hellboy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-14",
        "name": "Hellboy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-15",
        "name": "Hellboy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-16",
        "name": "Hellboy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-17",
        "name": "Hellboy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-18",
        "name": "Hellboy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-19",
        "name": "Hellboy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-20",
        "name": "Hellboy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-21",
        "name": "Hellboy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-22",
        "name": "Hellboy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-23",
        "name": "Hellboy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellboy-entry-24",
        "name": "Hellboy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellboy.",
        "description": "A supporting encyclopedia entry in the Hellboy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hellboy",
        "hellboy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hellboy",
        "hellboy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hellboy",
        "hellboy-places",
        "contains",
        "Hellboy places is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-events",
        "contains",
        "Hellboy events is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-objects",
        "contains",
        "Hellboy objects & artifacts is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-factions",
        "contains",
        "Hellboy factions & groups is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-concepts",
        "contains",
        "Hellboy concepts is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-eras",
        "contains",
        "Hellboy eras is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-works",
        "contains",
        "Hellboy works & media is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-symbols",
        "contains",
        "Hellboy symbols is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-controversies",
        "contains",
        "Hellboy controversies is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-sources",
        "contains",
        "Hellboy sources is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-geography",
        "contains",
        "Hellboy geography is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-legacy",
        "contains",
        "Hellboy legacy is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-practices",
        "contains",
        "Hellboy practices is a primary trailhead under Hellboy.",
        0.88,
        0.82
    ],
    [
        "hellboy",
        "hellboy-entry-1",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-2",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-3",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-4",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-5",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-6",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-7",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-8",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-9",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-10",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-11",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-12",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-13",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-14",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-15",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-16",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-17",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-18",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-19",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-20",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-21",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-22",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-23",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ],
    [
        "hellboy",
        "hellboy-entry-24",
        "contains",
        "Supporting entry under Hellboy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
