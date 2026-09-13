/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bone-comics",
        "name": "Bone",
        "type": "topic",
        "short_description": "Cartoon bones in a high-fantasy valley — Jeff Smith’s all-ages epic of wit and war.",
        "description": "Cartoon bones in a high-fantasy valley — Jeff Smith’s all-ages epic of wit and war. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bone so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "bone-comics-figures",
        "name": "Bone figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bone.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bone."
    },
    {
        "slug": "bone-comics-world",
        "name": "Bone world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bone.",
        "description": "Geography, institutions, and periodization that give Bone its encyclopedia shape."
    },
    {
        "slug": "bone-comics-places",
        "name": "Bone places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bone.",
        "description": "Places, regions, and built sites that give Bone its map — where events and figures concentrate."
    },
    {
        "slug": "bone-comics-events",
        "name": "Bone events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bone.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bone timeline."
    },
    {
        "slug": "bone-comics-objects",
        "name": "Bone objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bone.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bone."
    },
    {
        "slug": "bone-comics-factions",
        "name": "Bone factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bone.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bone."
    },
    {
        "slug": "bone-comics-concepts",
        "name": "Bone concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bone.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bone readable as a lore graph."
    },
    {
        "slug": "bone-comics-eras",
        "name": "Bone eras",
        "type": "event",
        "short_description": "Periodization for Bone.",
        "description": "Named eras and phases that help readers track how Bone changes across time."
    },
    {
        "slug": "bone-comics-works",
        "name": "Bone works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bone.",
        "description": "Primary works and adaptations through which most audiences encounter Bone."
    },
    {
        "slug": "bone-comics-symbols",
        "name": "Bone symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bone.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bone."
    },
    {
        "slug": "bone-comics-controversies",
        "name": "Bone controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bone.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bone argumentative."
    },
    {
        "slug": "bone-comics-sources",
        "name": "Bone sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bone.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bone."
    },
    {
        "slug": "bone-comics-geography",
        "name": "Bone geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bone.",
        "description": "Regions, routes, and spatial systems that situate Bone beyond single named places."
    },
    {
        "slug": "bone-comics-legacy",
        "name": "Bone legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bone.",
        "description": "How Bone continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bone-comics-practices",
        "name": "Bone practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bone.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bone."
    },
    {
        "slug": "bone-comics-entry-1",
        "name": "Bone entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-2",
        "name": "Bone entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-3",
        "name": "Bone entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-4",
        "name": "Bone entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-5",
        "name": "Bone entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-6",
        "name": "Bone entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-7",
        "name": "Bone entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-8",
        "name": "Bone entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-9",
        "name": "Bone entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-10",
        "name": "Bone entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-11",
        "name": "Bone entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-12",
        "name": "Bone entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-13",
        "name": "Bone entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-14",
        "name": "Bone entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-15",
        "name": "Bone entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-16",
        "name": "Bone entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-17",
        "name": "Bone entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-18",
        "name": "Bone entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-19",
        "name": "Bone entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-20",
        "name": "Bone entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-21",
        "name": "Bone entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-22",
        "name": "Bone entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-23",
        "name": "Bone entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bone-comics-entry-24",
        "name": "Bone entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bone.",
        "description": "A supporting encyclopedia entry in the Bone subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bone-comics",
        "bone-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bone-comics",
        "bone-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bone-comics",
        "bone-comics-places",
        "contains",
        "Bone places is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-events",
        "contains",
        "Bone events is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-objects",
        "contains",
        "Bone objects & artifacts is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-factions",
        "contains",
        "Bone factions & groups is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-concepts",
        "contains",
        "Bone concepts is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-eras",
        "contains",
        "Bone eras is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-works",
        "contains",
        "Bone works & media is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-symbols",
        "contains",
        "Bone symbols is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-controversies",
        "contains",
        "Bone controversies is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-sources",
        "contains",
        "Bone sources is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-geography",
        "contains",
        "Bone geography is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-legacy",
        "contains",
        "Bone legacy is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-practices",
        "contains",
        "Bone practices is a primary trailhead under Bone.",
        0.88,
        0.82
    ],
    [
        "bone-comics",
        "bone-comics-entry-1",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-2",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-3",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-4",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-5",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-6",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-7",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-8",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-9",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-10",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-11",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-12",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-13",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-14",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-15",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-16",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-17",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-18",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-19",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-20",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-21",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-22",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-23",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ],
    [
        "bone-comics",
        "bone-comics-entry-24",
        "contains",
        "Supporting entry under Bone.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
