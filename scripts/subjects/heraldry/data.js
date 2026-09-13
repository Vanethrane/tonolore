/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "heraldry",
        "name": "Heraldry & coats of arms",
        "type": "topic",
        "short_description": "Families, charges, kingdoms, knights, tinctures, and the genealogies encoded in coats of arms.",
        "description": "Families, charges, kingdoms, knights, tinctures, and the genealogies encoded in coats of arms. This Ton-o-Lore subject maps people, places, events, and ideas tied to Heraldry & coats of arms so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "heraldry-figures",
        "name": "Heraldry & coats of arms figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Heraldry & coats of arms.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-world",
        "name": "Heraldry & coats of arms world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Heraldry & coats of arms.",
        "description": "Geography, institutions, and periodization that give Heraldry & coats of arms its encyclopedia shape."
    },
    {
        "slug": "heraldry-places",
        "name": "Heraldry & coats of arms places",
        "type": "place",
        "short_description": "Locations and geographies that frame Heraldry & coats of arms.",
        "description": "Places, regions, and built sites that give Heraldry & coats of arms its map — where events and figures concentrate."
    },
    {
        "slug": "heraldry-events",
        "name": "Heraldry & coats of arms events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Heraldry & coats of arms.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Heraldry & coats of arms timeline."
    },
    {
        "slug": "heraldry-objects",
        "name": "Heraldry & coats of arms objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Heraldry & coats of arms.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-factions",
        "name": "Heraldry & coats of arms factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Heraldry & coats of arms.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-concepts",
        "name": "Heraldry & coats of arms concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Heraldry & coats of arms.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Heraldry & coats of arms readable as a lore graph."
    },
    {
        "slug": "heraldry-eras",
        "name": "Heraldry & coats of arms eras",
        "type": "event",
        "short_description": "Periodization for Heraldry & coats of arms.",
        "description": "Named eras and phases that help readers track how Heraldry & coats of arms changes across time."
    },
    {
        "slug": "heraldry-works",
        "name": "Heraldry & coats of arms works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Heraldry & coats of arms.",
        "description": "Primary works and adaptations through which most audiences encounter Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-symbols",
        "name": "Heraldry & coats of arms symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Heraldry & coats of arms.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-controversies",
        "name": "Heraldry & coats of arms controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Heraldry & coats of arms.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Heraldry & coats of arms argumentative."
    },
    {
        "slug": "heraldry-sources",
        "name": "Heraldry & coats of arms sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Heraldry & coats of arms.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-geography",
        "name": "Heraldry & coats of arms geography",
        "type": "place",
        "short_description": "Broader geographic framing for Heraldry & coats of arms.",
        "description": "Regions, routes, and spatial systems that situate Heraldry & coats of arms beyond single named places."
    },
    {
        "slug": "heraldry-legacy",
        "name": "Heraldry & coats of arms legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Heraldry & coats of arms.",
        "description": "How Heraldry & coats of arms continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "heraldry-practices",
        "name": "Heraldry & coats of arms practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Heraldry & coats of arms.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Heraldry & coats of arms."
    },
    {
        "slug": "heraldry-entry-1",
        "name": "Heraldry & coats of arms entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-2",
        "name": "Heraldry & coats of arms entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-3",
        "name": "Heraldry & coats of arms entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-4",
        "name": "Heraldry & coats of arms entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-5",
        "name": "Heraldry & coats of arms entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-6",
        "name": "Heraldry & coats of arms entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-7",
        "name": "Heraldry & coats of arms entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-8",
        "name": "Heraldry & coats of arms entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-9",
        "name": "Heraldry & coats of arms entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-10",
        "name": "Heraldry & coats of arms entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-11",
        "name": "Heraldry & coats of arms entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-12",
        "name": "Heraldry & coats of arms entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-13",
        "name": "Heraldry & coats of arms entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-14",
        "name": "Heraldry & coats of arms entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-15",
        "name": "Heraldry & coats of arms entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-16",
        "name": "Heraldry & coats of arms entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-17",
        "name": "Heraldry & coats of arms entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-18",
        "name": "Heraldry & coats of arms entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-19",
        "name": "Heraldry & coats of arms entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-20",
        "name": "Heraldry & coats of arms entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-21",
        "name": "Heraldry & coats of arms entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-22",
        "name": "Heraldry & coats of arms entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-23",
        "name": "Heraldry & coats of arms entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heraldry-entry-24",
        "name": "Heraldry & coats of arms entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heraldry & coats of arms.",
        "description": "A supporting encyclopedia entry in the Heraldry & coats of arms subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "heraldry",
        "heraldry-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "heraldry",
        "heraldry-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "heraldry",
        "heraldry-places",
        "contains",
        "Heraldry & coats of arms places is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-events",
        "contains",
        "Heraldry & coats of arms events is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-objects",
        "contains",
        "Heraldry & coats of arms objects & artifacts is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-factions",
        "contains",
        "Heraldry & coats of arms factions & groups is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-concepts",
        "contains",
        "Heraldry & coats of arms concepts is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-eras",
        "contains",
        "Heraldry & coats of arms eras is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-works",
        "contains",
        "Heraldry & coats of arms works & media is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-symbols",
        "contains",
        "Heraldry & coats of arms symbols is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-controversies",
        "contains",
        "Heraldry & coats of arms controversies is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-sources",
        "contains",
        "Heraldry & coats of arms sources is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-geography",
        "contains",
        "Heraldry & coats of arms geography is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-legacy",
        "contains",
        "Heraldry & coats of arms legacy is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-practices",
        "contains",
        "Heraldry & coats of arms practices is a primary trailhead under Heraldry & coats of arms.",
        0.88,
        0.82
    ],
    [
        "heraldry",
        "heraldry-entry-1",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-2",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-3",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-4",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-5",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-6",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-7",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-8",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-9",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-10",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-11",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-12",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-13",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-14",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-15",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-16",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-17",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-18",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-19",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-20",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-21",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-22",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-23",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ],
    [
        "heraldry",
        "heraldry-entry-24",
        "contains",
        "Supporting entry under Heraldry & coats of arms.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
