/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wolverine-comics",
        "name": "Wolverine",
        "type": "topic",
        "short_description": "Adamantium claws, Weapon X, and the lone-wolf mutant whose solo books built a mythos.",
        "description": "Adamantium claws, Weapon X, and the lone-wolf mutant whose solo books built a mythos. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wolverine so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "wolverine-comics-figures",
        "name": "Wolverine figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wolverine.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wolverine."
    },
    {
        "slug": "wolverine-comics-world",
        "name": "Wolverine world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wolverine.",
        "description": "Geography, institutions, and periodization that give Wolverine its encyclopedia shape."
    },
    {
        "slug": "wolverine-comics-places",
        "name": "Wolverine places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wolverine.",
        "description": "Places, regions, and built sites that give Wolverine its map — where events and figures concentrate."
    },
    {
        "slug": "wolverine-comics-events",
        "name": "Wolverine events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wolverine.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wolverine timeline."
    },
    {
        "slug": "wolverine-comics-objects",
        "name": "Wolverine objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wolverine.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wolverine."
    },
    {
        "slug": "wolverine-comics-factions",
        "name": "Wolverine factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wolverine.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wolverine."
    },
    {
        "slug": "wolverine-comics-concepts",
        "name": "Wolverine concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wolverine.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wolverine readable as a lore graph."
    },
    {
        "slug": "wolverine-comics-eras",
        "name": "Wolverine eras",
        "type": "event",
        "short_description": "Periodization for Wolverine.",
        "description": "Named eras and phases that help readers track how Wolverine changes across time."
    },
    {
        "slug": "wolverine-comics-works",
        "name": "Wolverine works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wolverine.",
        "description": "Primary works and adaptations through which most audiences encounter Wolverine."
    },
    {
        "slug": "wolverine-comics-symbols",
        "name": "Wolverine symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wolverine.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wolverine."
    },
    {
        "slug": "wolverine-comics-controversies",
        "name": "Wolverine controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wolverine.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wolverine argumentative."
    },
    {
        "slug": "wolverine-comics-sources",
        "name": "Wolverine sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wolverine.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wolverine."
    },
    {
        "slug": "wolverine-comics-geography",
        "name": "Wolverine geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wolverine.",
        "description": "Regions, routes, and spatial systems that situate Wolverine beyond single named places."
    },
    {
        "slug": "wolverine-comics-legacy",
        "name": "Wolverine legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wolverine.",
        "description": "How Wolverine continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wolverine-comics-practices",
        "name": "Wolverine practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wolverine.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wolverine."
    },
    {
        "slug": "wolverine-comics-entry-1",
        "name": "Wolverine entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-2",
        "name": "Wolverine entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-3",
        "name": "Wolverine entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-4",
        "name": "Wolverine entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-5",
        "name": "Wolverine entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-6",
        "name": "Wolverine entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-7",
        "name": "Wolverine entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-8",
        "name": "Wolverine entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-9",
        "name": "Wolverine entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-10",
        "name": "Wolverine entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-11",
        "name": "Wolverine entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-12",
        "name": "Wolverine entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-13",
        "name": "Wolverine entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-14",
        "name": "Wolverine entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-15",
        "name": "Wolverine entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-16",
        "name": "Wolverine entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-17",
        "name": "Wolverine entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-18",
        "name": "Wolverine entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-19",
        "name": "Wolverine entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-20",
        "name": "Wolverine entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-21",
        "name": "Wolverine entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-22",
        "name": "Wolverine entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-23",
        "name": "Wolverine entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolverine-comics-entry-24",
        "name": "Wolverine entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolverine.",
        "description": "A supporting encyclopedia entry in the Wolverine subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wolverine-comics",
        "wolverine-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wolverine-comics",
        "wolverine-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wolverine-comics",
        "wolverine-comics-places",
        "contains",
        "Wolverine places is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-events",
        "contains",
        "Wolverine events is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-objects",
        "contains",
        "Wolverine objects & artifacts is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-factions",
        "contains",
        "Wolverine factions & groups is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-concepts",
        "contains",
        "Wolverine concepts is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-eras",
        "contains",
        "Wolverine eras is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-works",
        "contains",
        "Wolverine works & media is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-symbols",
        "contains",
        "Wolverine symbols is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-controversies",
        "contains",
        "Wolverine controversies is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-sources",
        "contains",
        "Wolverine sources is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-geography",
        "contains",
        "Wolverine geography is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-legacy",
        "contains",
        "Wolverine legacy is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-practices",
        "contains",
        "Wolverine practices is a primary trailhead under Wolverine.",
        0.88,
        0.82
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-1",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-2",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-3",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-4",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-5",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-6",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-7",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-8",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-9",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-10",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-11",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-12",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-13",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-14",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-15",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-16",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-17",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-18",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-19",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-20",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-21",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-22",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-23",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ],
    [
        "wolverine-comics",
        "wolverine-comics-entry-24",
        "contains",
        "Supporting entry under Wolverine.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
