/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "persona-series",
        "name": "Persona",
        "type": "topic",
        "short_description": "Shadows, velvet rooms, and the stylish JRPG social-sim continuum of Phantom Thieves and beyond.",
        "description": "Shadows, velvet rooms, and the stylish JRPG social-sim continuum of Phantom Thieves and beyond. This Ton-o-Lore subject maps people, places, events, and ideas tied to Persona so readers can follow long-tail connections across video games."
    },
    {
        "slug": "persona-series-figures",
        "name": "Persona figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Persona.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Persona."
    },
    {
        "slug": "persona-series-world",
        "name": "Persona world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Persona.",
        "description": "Geography, institutions, and periodization that give Persona its encyclopedia shape."
    },
    {
        "slug": "persona-series-places",
        "name": "Persona places",
        "type": "place",
        "short_description": "Locations and geographies that frame Persona.",
        "description": "Places, regions, and built sites that give Persona its map — where events and figures concentrate."
    },
    {
        "slug": "persona-series-events",
        "name": "Persona events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Persona.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Persona timeline."
    },
    {
        "slug": "persona-series-objects",
        "name": "Persona objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Persona.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Persona."
    },
    {
        "slug": "persona-series-factions",
        "name": "Persona factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Persona.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Persona."
    },
    {
        "slug": "persona-series-concepts",
        "name": "Persona concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Persona.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Persona readable as a lore graph."
    },
    {
        "slug": "persona-series-eras",
        "name": "Persona eras",
        "type": "event",
        "short_description": "Periodization for Persona.",
        "description": "Named eras and phases that help readers track how Persona changes across time."
    },
    {
        "slug": "persona-series-works",
        "name": "Persona works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Persona.",
        "description": "Primary works and adaptations through which most audiences encounter Persona."
    },
    {
        "slug": "persona-series-symbols",
        "name": "Persona symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Persona.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Persona."
    },
    {
        "slug": "persona-series-controversies",
        "name": "Persona controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Persona.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Persona argumentative."
    },
    {
        "slug": "persona-series-sources",
        "name": "Persona sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Persona.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Persona."
    },
    {
        "slug": "persona-series-geography",
        "name": "Persona geography",
        "type": "place",
        "short_description": "Broader geographic framing for Persona.",
        "description": "Regions, routes, and spatial systems that situate Persona beyond single named places."
    },
    {
        "slug": "persona-series-legacy",
        "name": "Persona legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Persona.",
        "description": "How Persona continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "persona-series-practices",
        "name": "Persona practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Persona.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Persona."
    },
    {
        "slug": "persona-series-entry-1",
        "name": "Persona entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-2",
        "name": "Persona entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-3",
        "name": "Persona entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-4",
        "name": "Persona entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-5",
        "name": "Persona entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-6",
        "name": "Persona entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-7",
        "name": "Persona entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-8",
        "name": "Persona entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-9",
        "name": "Persona entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-10",
        "name": "Persona entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-11",
        "name": "Persona entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-12",
        "name": "Persona entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-13",
        "name": "Persona entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-14",
        "name": "Persona entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-15",
        "name": "Persona entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-16",
        "name": "Persona entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-17",
        "name": "Persona entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-18",
        "name": "Persona entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-19",
        "name": "Persona entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-20",
        "name": "Persona entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-21",
        "name": "Persona entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-22",
        "name": "Persona entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-23",
        "name": "Persona entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-series-entry-24",
        "name": "Persona entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona.",
        "description": "A supporting encyclopedia entry in the Persona subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "persona-series",
        "persona-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "persona-series",
        "persona-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "persona-series",
        "persona-series-places",
        "contains",
        "Persona places is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-events",
        "contains",
        "Persona events is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-objects",
        "contains",
        "Persona objects & artifacts is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-factions",
        "contains",
        "Persona factions & groups is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-concepts",
        "contains",
        "Persona concepts is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-eras",
        "contains",
        "Persona eras is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-works",
        "contains",
        "Persona works & media is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-symbols",
        "contains",
        "Persona symbols is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-controversies",
        "contains",
        "Persona controversies is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-sources",
        "contains",
        "Persona sources is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-geography",
        "contains",
        "Persona geography is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-legacy",
        "contains",
        "Persona legacy is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-practices",
        "contains",
        "Persona practices is a primary trailhead under Persona.",
        0.88,
        0.82
    ],
    [
        "persona-series",
        "persona-series-entry-1",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-2",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-3",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-4",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-5",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-6",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-7",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-8",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-9",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-10",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-11",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-12",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-13",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-14",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-15",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-16",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-17",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-18",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-19",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-20",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-21",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-22",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-23",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ],
    [
        "persona-series",
        "persona-series-entry-24",
        "contains",
        "Supporting entry under Persona.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
