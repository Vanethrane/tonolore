/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pandemic",
        "name": "Pandemic",
        "type": "topic",
        "short_description": "Co-op disease control on a world map — roles, outbreaks, and scenario expansions.",
        "description": "Co-op disease control on a world map — roles, outbreaks, and scenario expansions. This Ton-o-Lore subject maps people, places, products, and ideas tied to Pandemic so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "pandemic-rules",
        "name": "Pandemic rules & formats",
        "type": "topic",
        "short_description": "How Pandemic is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Pandemic."
    },
    {
        "slug": "pandemic-setting",
        "name": "Pandemic setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Pandemic.",
        "description": "The narrative frame around Pandemic — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "pandemic-figures",
        "name": "Pandemic figures",
        "type": "topic",
        "short_description": "People and named forces central to Pandemic.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Pandemic."
    },
    {
        "slug": "pandemic-places",
        "name": "Pandemic places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pandemic.",
        "description": "Places, regions, and built sites that give Pandemic its map — where events and figures concentrate."
    },
    {
        "slug": "pandemic-events",
        "name": "Pandemic events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pandemic.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pandemic timeline."
    },
    {
        "slug": "pandemic-objects",
        "name": "Pandemic objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pandemic.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pandemic."
    },
    {
        "slug": "pandemic-factions",
        "name": "Pandemic factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pandemic.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pandemic."
    },
    {
        "slug": "pandemic-concepts",
        "name": "Pandemic concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pandemic.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pandemic readable as a lore graph."
    },
    {
        "slug": "pandemic-eras",
        "name": "Pandemic eras",
        "type": "event",
        "short_description": "Periodization for Pandemic.",
        "description": "Named eras and phases that help readers track how Pandemic changes across time."
    },
    {
        "slug": "pandemic-works",
        "name": "Pandemic works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pandemic.",
        "description": "Primary works and adaptations through which most audiences encounter Pandemic."
    },
    {
        "slug": "pandemic-symbols",
        "name": "Pandemic symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pandemic.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pandemic."
    },
    {
        "slug": "pandemic-controversies",
        "name": "Pandemic controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pandemic.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pandemic argumentative."
    },
    {
        "slug": "pandemic-sources",
        "name": "Pandemic sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pandemic.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pandemic."
    },
    {
        "slug": "pandemic-geography",
        "name": "Pandemic geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pandemic.",
        "description": "Regions, routes, and spatial systems that situate Pandemic beyond single named places."
    },
    {
        "slug": "pandemic-legacy",
        "name": "Pandemic legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pandemic.",
        "description": "How Pandemic continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pandemic-practices",
        "name": "Pandemic practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pandemic.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pandemic."
    },
    {
        "slug": "pandemic-entry-1",
        "name": "Pandemic entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-2",
        "name": "Pandemic entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-3",
        "name": "Pandemic entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-4",
        "name": "Pandemic entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-5",
        "name": "Pandemic entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-6",
        "name": "Pandemic entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-7",
        "name": "Pandemic entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-8",
        "name": "Pandemic entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-9",
        "name": "Pandemic entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-10",
        "name": "Pandemic entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-11",
        "name": "Pandemic entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-12",
        "name": "Pandemic entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-13",
        "name": "Pandemic entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-14",
        "name": "Pandemic entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-15",
        "name": "Pandemic entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-16",
        "name": "Pandemic entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-17",
        "name": "Pandemic entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-18",
        "name": "Pandemic entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-19",
        "name": "Pandemic entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-20",
        "name": "Pandemic entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-21",
        "name": "Pandemic entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-22",
        "name": "Pandemic entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pandemic-entry-23",
        "name": "Pandemic entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pandemic.",
        "description": "A supporting encyclopedia entry in the Pandemic subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pandemic",
        "pandemic-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "pandemic",
        "pandemic-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "pandemic",
        "pandemic-figures",
        "contains",
        "Pandemic figures is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-places",
        "contains",
        "Pandemic places is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-events",
        "contains",
        "Pandemic events is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-objects",
        "contains",
        "Pandemic objects & artifacts is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-factions",
        "contains",
        "Pandemic factions & groups is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-concepts",
        "contains",
        "Pandemic concepts is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-eras",
        "contains",
        "Pandemic eras is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-works",
        "contains",
        "Pandemic works & media is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-symbols",
        "contains",
        "Pandemic symbols is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-controversies",
        "contains",
        "Pandemic controversies is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-sources",
        "contains",
        "Pandemic sources is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-geography",
        "contains",
        "Pandemic geography is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-legacy",
        "contains",
        "Pandemic legacy is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-practices",
        "contains",
        "Pandemic practices is a primary trailhead under Pandemic.",
        0.88,
        0.82
    ],
    [
        "pandemic",
        "pandemic-entry-1",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-2",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-3",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-4",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-5",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-6",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-7",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-8",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-9",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-10",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-11",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-12",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-13",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-14",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-15",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-16",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-17",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-18",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-19",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-20",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-21",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-22",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ],
    [
        "pandemic",
        "pandemic-entry-23",
        "contains",
        "Supporting entry under Pandemic.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
