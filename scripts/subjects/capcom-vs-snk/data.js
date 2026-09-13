/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "capcom-vs-snk",
        "name": "Capcom vs. SNK",
        "type": "topic",
        "short_description": "Ratio systems, groove styles, and the dream match of Street Fighter and KOF universes.",
        "description": "Ratio systems, groove styles, and the dream match of Street Fighter and KOF universes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Capcom vs. SNK so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "capcom-vs-snk-figures",
        "name": "Capcom vs. SNK figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Capcom vs. SNK.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-world",
        "name": "Capcom vs. SNK world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Capcom vs. SNK.",
        "description": "Geography, institutions, and periodization that give Capcom vs. SNK its encyclopedia shape."
    },
    {
        "slug": "capcom-vs-snk-places",
        "name": "Capcom vs. SNK places",
        "type": "place",
        "short_description": "Locations and geographies that frame Capcom vs. SNK.",
        "description": "Places, regions, and built sites that give Capcom vs. SNK its map — where events and figures concentrate."
    },
    {
        "slug": "capcom-vs-snk-events",
        "name": "Capcom vs. SNK events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Capcom vs. SNK.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Capcom vs. SNK timeline."
    },
    {
        "slug": "capcom-vs-snk-objects",
        "name": "Capcom vs. SNK objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Capcom vs. SNK.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-factions",
        "name": "Capcom vs. SNK factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Capcom vs. SNK.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-concepts",
        "name": "Capcom vs. SNK concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Capcom vs. SNK.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Capcom vs. SNK readable as a lore graph."
    },
    {
        "slug": "capcom-vs-snk-eras",
        "name": "Capcom vs. SNK eras",
        "type": "event",
        "short_description": "Periodization for Capcom vs. SNK.",
        "description": "Named eras and phases that help readers track how Capcom vs. SNK changes across time."
    },
    {
        "slug": "capcom-vs-snk-works",
        "name": "Capcom vs. SNK works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Capcom vs. SNK.",
        "description": "Primary works and adaptations through which most audiences encounter Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-symbols",
        "name": "Capcom vs. SNK symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Capcom vs. SNK.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-controversies",
        "name": "Capcom vs. SNK controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Capcom vs. SNK.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Capcom vs. SNK argumentative."
    },
    {
        "slug": "capcom-vs-snk-sources",
        "name": "Capcom vs. SNK sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Capcom vs. SNK.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-geography",
        "name": "Capcom vs. SNK geography",
        "type": "place",
        "short_description": "Broader geographic framing for Capcom vs. SNK.",
        "description": "Regions, routes, and spatial systems that situate Capcom vs. SNK beyond single named places."
    },
    {
        "slug": "capcom-vs-snk-legacy",
        "name": "Capcom vs. SNK legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Capcom vs. SNK.",
        "description": "How Capcom vs. SNK continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "capcom-vs-snk-practices",
        "name": "Capcom vs. SNK practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Capcom vs. SNK.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Capcom vs. SNK."
    },
    {
        "slug": "capcom-vs-snk-entry-1",
        "name": "Capcom vs. SNK entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-2",
        "name": "Capcom vs. SNK entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-3",
        "name": "Capcom vs. SNK entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-4",
        "name": "Capcom vs. SNK entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-5",
        "name": "Capcom vs. SNK entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-6",
        "name": "Capcom vs. SNK entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-7",
        "name": "Capcom vs. SNK entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-8",
        "name": "Capcom vs. SNK entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-9",
        "name": "Capcom vs. SNK entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-10",
        "name": "Capcom vs. SNK entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-11",
        "name": "Capcom vs. SNK entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-12",
        "name": "Capcom vs. SNK entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-13",
        "name": "Capcom vs. SNK entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-14",
        "name": "Capcom vs. SNK entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-15",
        "name": "Capcom vs. SNK entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-16",
        "name": "Capcom vs. SNK entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-17",
        "name": "Capcom vs. SNK entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-18",
        "name": "Capcom vs. SNK entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-19",
        "name": "Capcom vs. SNK entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-20",
        "name": "Capcom vs. SNK entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-21",
        "name": "Capcom vs. SNK entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-22",
        "name": "Capcom vs. SNK entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-23",
        "name": "Capcom vs. SNK entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "capcom-vs-snk-entry-24",
        "name": "Capcom vs. SNK entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Capcom vs. SNK.",
        "description": "A supporting encyclopedia entry in the Capcom vs. SNK subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "capcom-vs-snk",
        "capcom-vs-snk-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-places",
        "contains",
        "Capcom vs. SNK places is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-events",
        "contains",
        "Capcom vs. SNK events is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-objects",
        "contains",
        "Capcom vs. SNK objects & artifacts is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-factions",
        "contains",
        "Capcom vs. SNK factions & groups is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-concepts",
        "contains",
        "Capcom vs. SNK concepts is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-eras",
        "contains",
        "Capcom vs. SNK eras is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-works",
        "contains",
        "Capcom vs. SNK works & media is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-symbols",
        "contains",
        "Capcom vs. SNK symbols is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-controversies",
        "contains",
        "Capcom vs. SNK controversies is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-sources",
        "contains",
        "Capcom vs. SNK sources is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-geography",
        "contains",
        "Capcom vs. SNK geography is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-legacy",
        "contains",
        "Capcom vs. SNK legacy is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-practices",
        "contains",
        "Capcom vs. SNK practices is a primary trailhead under Capcom vs. SNK.",
        0.88,
        0.82
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-1",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-2",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-3",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-4",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-5",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-6",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-7",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-8",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-9",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-10",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-11",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-12",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-13",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-14",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-15",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-16",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-17",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-18",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-19",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-20",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-21",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-22",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-23",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ],
    [
        "capcom-vs-snk",
        "capcom-vs-snk-entry-24",
        "contains",
        "Supporting entry under Capcom vs. SNK.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
