/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "numenera",
        "name": "Numenera",
        "type": "topic",
        "short_description": "Ninth World ruins, cyphers, and weird science-fantasy discovery RPG design.",
        "description": "Ninth World ruins, cyphers, and weird science-fantasy discovery RPG design. This Ton-o-Lore subject maps people, places, events, and ideas tied to Numenera so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "numenera-figures",
        "name": "Numenera figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Numenera.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Numenera."
    },
    {
        "slug": "numenera-world",
        "name": "Numenera world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Numenera.",
        "description": "Geography, institutions, and periodization that give Numenera its encyclopedia shape."
    },
    {
        "slug": "numenera-places",
        "name": "Numenera places",
        "type": "place",
        "short_description": "Locations and geographies that frame Numenera.",
        "description": "Places, regions, and built sites that give Numenera its map — where events and figures concentrate."
    },
    {
        "slug": "numenera-events",
        "name": "Numenera events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Numenera.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Numenera timeline."
    },
    {
        "slug": "numenera-objects",
        "name": "Numenera objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Numenera.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Numenera."
    },
    {
        "slug": "numenera-factions",
        "name": "Numenera factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Numenera.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Numenera."
    },
    {
        "slug": "numenera-concepts",
        "name": "Numenera concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Numenera.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Numenera readable as a lore graph."
    },
    {
        "slug": "numenera-eras",
        "name": "Numenera eras",
        "type": "event",
        "short_description": "Periodization for Numenera.",
        "description": "Named eras and phases that help readers track how Numenera changes across time."
    },
    {
        "slug": "numenera-works",
        "name": "Numenera works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Numenera.",
        "description": "Primary works and adaptations through which most audiences encounter Numenera."
    },
    {
        "slug": "numenera-symbols",
        "name": "Numenera symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Numenera.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Numenera."
    },
    {
        "slug": "numenera-controversies",
        "name": "Numenera controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Numenera.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Numenera argumentative."
    },
    {
        "slug": "numenera-sources",
        "name": "Numenera sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Numenera.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Numenera."
    },
    {
        "slug": "numenera-geography",
        "name": "Numenera geography",
        "type": "place",
        "short_description": "Broader geographic framing for Numenera.",
        "description": "Regions, routes, and spatial systems that situate Numenera beyond single named places."
    },
    {
        "slug": "numenera-legacy",
        "name": "Numenera legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Numenera.",
        "description": "How Numenera continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "numenera-practices",
        "name": "Numenera practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Numenera.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Numenera."
    },
    {
        "slug": "numenera-entry-1",
        "name": "Numenera entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-2",
        "name": "Numenera entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-3",
        "name": "Numenera entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-4",
        "name": "Numenera entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-5",
        "name": "Numenera entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-6",
        "name": "Numenera entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-7",
        "name": "Numenera entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-8",
        "name": "Numenera entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-9",
        "name": "Numenera entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-10",
        "name": "Numenera entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-11",
        "name": "Numenera entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-12",
        "name": "Numenera entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-13",
        "name": "Numenera entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-14",
        "name": "Numenera entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-15",
        "name": "Numenera entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-16",
        "name": "Numenera entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-17",
        "name": "Numenera entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-18",
        "name": "Numenera entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-19",
        "name": "Numenera entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-20",
        "name": "Numenera entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-21",
        "name": "Numenera entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-22",
        "name": "Numenera entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-23",
        "name": "Numenera entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "numenera-entry-24",
        "name": "Numenera entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Numenera.",
        "description": "A supporting encyclopedia entry in the Numenera subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "numenera",
        "numenera-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "numenera",
        "numenera-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "numenera",
        "numenera-places",
        "contains",
        "Numenera places is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-events",
        "contains",
        "Numenera events is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-objects",
        "contains",
        "Numenera objects & artifacts is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-factions",
        "contains",
        "Numenera factions & groups is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-concepts",
        "contains",
        "Numenera concepts is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-eras",
        "contains",
        "Numenera eras is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-works",
        "contains",
        "Numenera works & media is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-symbols",
        "contains",
        "Numenera symbols is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-controversies",
        "contains",
        "Numenera controversies is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-sources",
        "contains",
        "Numenera sources is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-geography",
        "contains",
        "Numenera geography is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-legacy",
        "contains",
        "Numenera legacy is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-practices",
        "contains",
        "Numenera practices is a primary trailhead under Numenera.",
        0.88,
        0.82
    ],
    [
        "numenera",
        "numenera-entry-1",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-2",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-3",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-4",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-5",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-6",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-7",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-8",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-9",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-10",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-11",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-12",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-13",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-14",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-15",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-16",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-17",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-18",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-19",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-20",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-21",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-22",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-23",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ],
    [
        "numenera",
        "numenera-entry-24",
        "contains",
        "Supporting entry under Numenera.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
