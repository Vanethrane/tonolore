/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ruthless-aggression",
        "name": "Ruthless Aggression Era",
        "type": "topic",
        "short_description": "Brand splits, rising stars, and the post-Invasion rebuild of early-2000s WWE.",
        "description": "Brand splits, rising stars, and the post-Invasion rebuild of early-2000s WWE. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ruthless Aggression Era so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "ruthless-aggression-figures",
        "name": "Ruthless Aggression Era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ruthless Aggression Era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-world",
        "name": "Ruthless Aggression Era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ruthless Aggression Era.",
        "description": "Geography, institutions, and periodization that give Ruthless Aggression Era its encyclopedia shape."
    },
    {
        "slug": "ruthless-aggression-places",
        "name": "Ruthless Aggression Era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ruthless Aggression Era.",
        "description": "Places, regions, and built sites that give Ruthless Aggression Era its map — where events and figures concentrate."
    },
    {
        "slug": "ruthless-aggression-events",
        "name": "Ruthless Aggression Era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ruthless Aggression Era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ruthless Aggression Era timeline."
    },
    {
        "slug": "ruthless-aggression-objects",
        "name": "Ruthless Aggression Era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ruthless Aggression Era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-factions",
        "name": "Ruthless Aggression Era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ruthless Aggression Era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-concepts",
        "name": "Ruthless Aggression Era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ruthless Aggression Era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ruthless Aggression Era readable as a lore graph."
    },
    {
        "slug": "ruthless-aggression-eras",
        "name": "Ruthless Aggression Era eras",
        "type": "event",
        "short_description": "Periodization for Ruthless Aggression Era.",
        "description": "Named eras and phases that help readers track how Ruthless Aggression Era changes across time."
    },
    {
        "slug": "ruthless-aggression-works",
        "name": "Ruthless Aggression Era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ruthless Aggression Era.",
        "description": "Primary works and adaptations through which most audiences encounter Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-symbols",
        "name": "Ruthless Aggression Era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ruthless Aggression Era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-controversies",
        "name": "Ruthless Aggression Era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ruthless Aggression Era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ruthless Aggression Era argumentative."
    },
    {
        "slug": "ruthless-aggression-sources",
        "name": "Ruthless Aggression Era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ruthless Aggression Era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-geography",
        "name": "Ruthless Aggression Era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ruthless Aggression Era.",
        "description": "Regions, routes, and spatial systems that situate Ruthless Aggression Era beyond single named places."
    },
    {
        "slug": "ruthless-aggression-legacy",
        "name": "Ruthless Aggression Era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ruthless Aggression Era.",
        "description": "How Ruthless Aggression Era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ruthless-aggression-practices",
        "name": "Ruthless Aggression Era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ruthless Aggression Era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ruthless Aggression Era."
    },
    {
        "slug": "ruthless-aggression-entry-1",
        "name": "Ruthless Aggression Era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-2",
        "name": "Ruthless Aggression Era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-3",
        "name": "Ruthless Aggression Era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-4",
        "name": "Ruthless Aggression Era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-5",
        "name": "Ruthless Aggression Era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-6",
        "name": "Ruthless Aggression Era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-7",
        "name": "Ruthless Aggression Era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-8",
        "name": "Ruthless Aggression Era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-9",
        "name": "Ruthless Aggression Era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-10",
        "name": "Ruthless Aggression Era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-11",
        "name": "Ruthless Aggression Era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-12",
        "name": "Ruthless Aggression Era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-13",
        "name": "Ruthless Aggression Era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-14",
        "name": "Ruthless Aggression Era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-15",
        "name": "Ruthless Aggression Era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-16",
        "name": "Ruthless Aggression Era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-17",
        "name": "Ruthless Aggression Era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-18",
        "name": "Ruthless Aggression Era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-19",
        "name": "Ruthless Aggression Era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-20",
        "name": "Ruthless Aggression Era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-21",
        "name": "Ruthless Aggression Era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-22",
        "name": "Ruthless Aggression Era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-23",
        "name": "Ruthless Aggression Era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruthless-aggression-entry-24",
        "name": "Ruthless Aggression Era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruthless Aggression Era.",
        "description": "A supporting encyclopedia entry in the Ruthless Aggression Era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ruthless-aggression",
        "ruthless-aggression-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-places",
        "contains",
        "Ruthless Aggression Era places is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-events",
        "contains",
        "Ruthless Aggression Era events is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-objects",
        "contains",
        "Ruthless Aggression Era objects & artifacts is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-factions",
        "contains",
        "Ruthless Aggression Era factions & groups is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-concepts",
        "contains",
        "Ruthless Aggression Era concepts is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-eras",
        "contains",
        "Ruthless Aggression Era eras is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-works",
        "contains",
        "Ruthless Aggression Era works & media is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-symbols",
        "contains",
        "Ruthless Aggression Era symbols is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-controversies",
        "contains",
        "Ruthless Aggression Era controversies is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-sources",
        "contains",
        "Ruthless Aggression Era sources is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-geography",
        "contains",
        "Ruthless Aggression Era geography is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-legacy",
        "contains",
        "Ruthless Aggression Era legacy is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-practices",
        "contains",
        "Ruthless Aggression Era practices is a primary trailhead under Ruthless Aggression Era.",
        0.88,
        0.82
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-1",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-2",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-3",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-4",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-5",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-6",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-7",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-8",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-9",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-10",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-11",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-12",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-13",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-14",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-15",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-16",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-17",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-18",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-19",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-20",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-21",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-22",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-23",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ],
    [
        "ruthless-aggression",
        "ruthless-aggression-entry-24",
        "contains",
        "Supporting entry under Ruthless Aggression Era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
