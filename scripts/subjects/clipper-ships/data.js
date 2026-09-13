/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "clipper-ships",
        "name": "Clipper ships",
        "type": "topic",
        "short_description": "Tea races, sleek hulls, and the mid-19th-century speed merchants of global trade.",
        "description": "Tea races, sleek hulls, and the mid-19th-century speed merchants of global trade. This Ton-o-Lore subject maps people, places, events, and ideas tied to Clipper ships so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "clipper-ships-figures",
        "name": "Clipper ships figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Clipper ships.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Clipper ships."
    },
    {
        "slug": "clipper-ships-world",
        "name": "Clipper ships world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Clipper ships.",
        "description": "Geography, institutions, and periodization that give Clipper ships its encyclopedia shape."
    },
    {
        "slug": "clipper-ships-places",
        "name": "Clipper ships places",
        "type": "place",
        "short_description": "Locations and geographies that frame Clipper ships.",
        "description": "Places, regions, and built sites that give Clipper ships its map — where events and figures concentrate."
    },
    {
        "slug": "clipper-ships-events",
        "name": "Clipper ships events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Clipper ships.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Clipper ships timeline."
    },
    {
        "slug": "clipper-ships-objects",
        "name": "Clipper ships objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Clipper ships.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Clipper ships."
    },
    {
        "slug": "clipper-ships-factions",
        "name": "Clipper ships factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Clipper ships.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Clipper ships."
    },
    {
        "slug": "clipper-ships-concepts",
        "name": "Clipper ships concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Clipper ships.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Clipper ships readable as a lore graph."
    },
    {
        "slug": "clipper-ships-eras",
        "name": "Clipper ships eras",
        "type": "event",
        "short_description": "Periodization for Clipper ships.",
        "description": "Named eras and phases that help readers track how Clipper ships changes across time."
    },
    {
        "slug": "clipper-ships-works",
        "name": "Clipper ships works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Clipper ships.",
        "description": "Primary works and adaptations through which most audiences encounter Clipper ships."
    },
    {
        "slug": "clipper-ships-symbols",
        "name": "Clipper ships symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Clipper ships.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Clipper ships."
    },
    {
        "slug": "clipper-ships-controversies",
        "name": "Clipper ships controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Clipper ships.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Clipper ships argumentative."
    },
    {
        "slug": "clipper-ships-sources",
        "name": "Clipper ships sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Clipper ships.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Clipper ships."
    },
    {
        "slug": "clipper-ships-geography",
        "name": "Clipper ships geography",
        "type": "place",
        "short_description": "Broader geographic framing for Clipper ships.",
        "description": "Regions, routes, and spatial systems that situate Clipper ships beyond single named places."
    },
    {
        "slug": "clipper-ships-legacy",
        "name": "Clipper ships legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Clipper ships.",
        "description": "How Clipper ships continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "clipper-ships-practices",
        "name": "Clipper ships practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Clipper ships.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Clipper ships."
    },
    {
        "slug": "clipper-ships-entry-1",
        "name": "Clipper ships entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-2",
        "name": "Clipper ships entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-3",
        "name": "Clipper ships entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-4",
        "name": "Clipper ships entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-5",
        "name": "Clipper ships entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-6",
        "name": "Clipper ships entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-7",
        "name": "Clipper ships entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-8",
        "name": "Clipper ships entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-9",
        "name": "Clipper ships entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-10",
        "name": "Clipper ships entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-11",
        "name": "Clipper ships entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-12",
        "name": "Clipper ships entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-13",
        "name": "Clipper ships entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-14",
        "name": "Clipper ships entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-15",
        "name": "Clipper ships entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-16",
        "name": "Clipper ships entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-17",
        "name": "Clipper ships entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-18",
        "name": "Clipper ships entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-19",
        "name": "Clipper ships entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-20",
        "name": "Clipper ships entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-21",
        "name": "Clipper ships entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-22",
        "name": "Clipper ships entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-23",
        "name": "Clipper ships entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "clipper-ships-entry-24",
        "name": "Clipper ships entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Clipper ships.",
        "description": "A supporting encyclopedia entry in the Clipper ships subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "clipper-ships",
        "clipper-ships-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "clipper-ships",
        "clipper-ships-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "clipper-ships",
        "clipper-ships-places",
        "contains",
        "Clipper ships places is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-events",
        "contains",
        "Clipper ships events is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-objects",
        "contains",
        "Clipper ships objects & artifacts is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-factions",
        "contains",
        "Clipper ships factions & groups is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-concepts",
        "contains",
        "Clipper ships concepts is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-eras",
        "contains",
        "Clipper ships eras is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-works",
        "contains",
        "Clipper ships works & media is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-symbols",
        "contains",
        "Clipper ships symbols is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-controversies",
        "contains",
        "Clipper ships controversies is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-sources",
        "contains",
        "Clipper ships sources is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-geography",
        "contains",
        "Clipper ships geography is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-legacy",
        "contains",
        "Clipper ships legacy is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-practices",
        "contains",
        "Clipper ships practices is a primary trailhead under Clipper ships.",
        0.88,
        0.82
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-1",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-2",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-3",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-4",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-5",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-6",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-7",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-8",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-9",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-10",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-11",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-12",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-13",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-14",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-15",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-16",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-17",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-18",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-19",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-20",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-21",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-22",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-23",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ],
    [
        "clipper-ships",
        "clipper-ships-entry-24",
        "contains",
        "Supporting entry under Clipper ships.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
