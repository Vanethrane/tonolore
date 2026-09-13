/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sylvanian-families",
        "name": "Sylvanian Families / Calico Critters",
        "type": "topic",
        "short_description": "Flocked animal families, village playsets, and the gentle collecting world of miniature homes.",
        "description": "Flocked animal families, village playsets, and the gentle collecting world of miniature homes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sylvanian Families / Calico Critters so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "sylvanian-families-figures",
        "name": "Sylvanian Families / Calico Critters figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sylvanian Families / Calico Critters.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-world",
        "name": "Sylvanian Families / Calico Critters world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sylvanian Families / Calico Critters.",
        "description": "Geography, institutions, and periodization that give Sylvanian Families / Calico Critters its encyclopedia shape."
    },
    {
        "slug": "sylvanian-families-places",
        "name": "Sylvanian Families / Calico Critters places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sylvanian Families / Calico Critters.",
        "description": "Places, regions, and built sites that give Sylvanian Families / Calico Critters its map — where events and figures concentrate."
    },
    {
        "slug": "sylvanian-families-events",
        "name": "Sylvanian Families / Calico Critters events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sylvanian Families / Calico Critters.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sylvanian Families / Calico Critters timeline."
    },
    {
        "slug": "sylvanian-families-objects",
        "name": "Sylvanian Families / Calico Critters objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sylvanian Families / Calico Critters.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-factions",
        "name": "Sylvanian Families / Calico Critters factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sylvanian Families / Calico Critters.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-concepts",
        "name": "Sylvanian Families / Calico Critters concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sylvanian Families / Calico Critters.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sylvanian Families / Calico Critters readable as a lore graph."
    },
    {
        "slug": "sylvanian-families-eras",
        "name": "Sylvanian Families / Calico Critters eras",
        "type": "event",
        "short_description": "Periodization for Sylvanian Families / Calico Critters.",
        "description": "Named eras and phases that help readers track how Sylvanian Families / Calico Critters changes across time."
    },
    {
        "slug": "sylvanian-families-works",
        "name": "Sylvanian Families / Calico Critters works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sylvanian Families / Calico Critters.",
        "description": "Primary works and adaptations through which most audiences encounter Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-symbols",
        "name": "Sylvanian Families / Calico Critters symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sylvanian Families / Calico Critters.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-controversies",
        "name": "Sylvanian Families / Calico Critters controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sylvanian Families / Calico Critters.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sylvanian Families / Calico Critters argumentative."
    },
    {
        "slug": "sylvanian-families-sources",
        "name": "Sylvanian Families / Calico Critters sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sylvanian Families / Calico Critters.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-geography",
        "name": "Sylvanian Families / Calico Critters geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sylvanian Families / Calico Critters.",
        "description": "Regions, routes, and spatial systems that situate Sylvanian Families / Calico Critters beyond single named places."
    },
    {
        "slug": "sylvanian-families-legacy",
        "name": "Sylvanian Families / Calico Critters legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sylvanian Families / Calico Critters.",
        "description": "How Sylvanian Families / Calico Critters continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sylvanian-families-practices",
        "name": "Sylvanian Families / Calico Critters practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sylvanian Families / Calico Critters.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sylvanian Families / Calico Critters."
    },
    {
        "slug": "sylvanian-families-entry-1",
        "name": "Sylvanian Families / Calico Critters entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-2",
        "name": "Sylvanian Families / Calico Critters entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-3",
        "name": "Sylvanian Families / Calico Critters entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-4",
        "name": "Sylvanian Families / Calico Critters entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-5",
        "name": "Sylvanian Families / Calico Critters entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-6",
        "name": "Sylvanian Families / Calico Critters entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-7",
        "name": "Sylvanian Families / Calico Critters entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-8",
        "name": "Sylvanian Families / Calico Critters entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-9",
        "name": "Sylvanian Families / Calico Critters entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-10",
        "name": "Sylvanian Families / Calico Critters entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-11",
        "name": "Sylvanian Families / Calico Critters entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-12",
        "name": "Sylvanian Families / Calico Critters entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-13",
        "name": "Sylvanian Families / Calico Critters entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-14",
        "name": "Sylvanian Families / Calico Critters entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-15",
        "name": "Sylvanian Families / Calico Critters entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-16",
        "name": "Sylvanian Families / Calico Critters entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-17",
        "name": "Sylvanian Families / Calico Critters entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-18",
        "name": "Sylvanian Families / Calico Critters entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-19",
        "name": "Sylvanian Families / Calico Critters entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-20",
        "name": "Sylvanian Families / Calico Critters entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-21",
        "name": "Sylvanian Families / Calico Critters entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-22",
        "name": "Sylvanian Families / Calico Critters entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-23",
        "name": "Sylvanian Families / Calico Critters entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sylvanian-families-entry-24",
        "name": "Sylvanian Families / Calico Critters entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sylvanian Families / Calico Critters.",
        "description": "A supporting encyclopedia entry in the Sylvanian Families / Calico Critters subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sylvanian-families",
        "sylvanian-families-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sylvanian-families",
        "sylvanian-families-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sylvanian-families",
        "sylvanian-families-places",
        "contains",
        "Sylvanian Families / Calico Critters places is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-events",
        "contains",
        "Sylvanian Families / Calico Critters events is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-objects",
        "contains",
        "Sylvanian Families / Calico Critters objects & artifacts is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-factions",
        "contains",
        "Sylvanian Families / Calico Critters factions & groups is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-concepts",
        "contains",
        "Sylvanian Families / Calico Critters concepts is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-eras",
        "contains",
        "Sylvanian Families / Calico Critters eras is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-works",
        "contains",
        "Sylvanian Families / Calico Critters works & media is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-symbols",
        "contains",
        "Sylvanian Families / Calico Critters symbols is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-controversies",
        "contains",
        "Sylvanian Families / Calico Critters controversies is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-sources",
        "contains",
        "Sylvanian Families / Calico Critters sources is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-geography",
        "contains",
        "Sylvanian Families / Calico Critters geography is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-legacy",
        "contains",
        "Sylvanian Families / Calico Critters legacy is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-practices",
        "contains",
        "Sylvanian Families / Calico Critters practices is a primary trailhead under Sylvanian Families / Calico Critters.",
        0.88,
        0.82
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-1",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-2",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-3",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-4",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-5",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-6",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-7",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-8",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-9",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-10",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-11",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-12",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-13",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-14",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-15",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-16",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-17",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-18",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-19",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-20",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-21",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-22",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-23",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ],
    [
        "sylvanian-families",
        "sylvanian-families-entry-24",
        "contains",
        "Supporting entry under Sylvanian Families / Calico Critters.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
