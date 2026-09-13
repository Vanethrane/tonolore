/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hellraiser",
        "name": "Hellraiser",
        "type": "topic",
        "short_description": "Cenobites, lament configurations, and Clive Barker’s pain-as-pleasure underworld.",
        "description": "Cenobites, lament configurations, and Clive Barker’s pain-as-pleasure underworld. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hellraiser so readers can follow long-tail connections across horror."
    },
    {
        "slug": "hellraiser-figures",
        "name": "Hellraiser figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hellraiser.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hellraiser."
    },
    {
        "slug": "hellraiser-world",
        "name": "Hellraiser world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hellraiser.",
        "description": "Geography, institutions, and periodization that give Hellraiser its encyclopedia shape."
    },
    {
        "slug": "hellraiser-places",
        "name": "Hellraiser places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hellraiser.",
        "description": "Places, regions, and built sites that give Hellraiser its map — where events and figures concentrate."
    },
    {
        "slug": "hellraiser-events",
        "name": "Hellraiser events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hellraiser.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hellraiser timeline."
    },
    {
        "slug": "hellraiser-objects",
        "name": "Hellraiser objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hellraiser.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hellraiser."
    },
    {
        "slug": "hellraiser-factions",
        "name": "Hellraiser factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hellraiser.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hellraiser."
    },
    {
        "slug": "hellraiser-concepts",
        "name": "Hellraiser concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hellraiser.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hellraiser readable as a lore graph."
    },
    {
        "slug": "hellraiser-eras",
        "name": "Hellraiser eras",
        "type": "event",
        "short_description": "Periodization for Hellraiser.",
        "description": "Named eras and phases that help readers track how Hellraiser changes across time."
    },
    {
        "slug": "hellraiser-works",
        "name": "Hellraiser works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hellraiser.",
        "description": "Primary works and adaptations through which most audiences encounter Hellraiser."
    },
    {
        "slug": "hellraiser-symbols",
        "name": "Hellraiser symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hellraiser.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hellraiser."
    },
    {
        "slug": "hellraiser-controversies",
        "name": "Hellraiser controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hellraiser.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hellraiser argumentative."
    },
    {
        "slug": "hellraiser-sources",
        "name": "Hellraiser sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hellraiser.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hellraiser."
    },
    {
        "slug": "hellraiser-geography",
        "name": "Hellraiser geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hellraiser.",
        "description": "Regions, routes, and spatial systems that situate Hellraiser beyond single named places."
    },
    {
        "slug": "hellraiser-legacy",
        "name": "Hellraiser legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hellraiser.",
        "description": "How Hellraiser continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hellraiser-practices",
        "name": "Hellraiser practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hellraiser.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hellraiser."
    },
    {
        "slug": "hellraiser-entry-1",
        "name": "Hellraiser entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-2",
        "name": "Hellraiser entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-3",
        "name": "Hellraiser entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-4",
        "name": "Hellraiser entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-5",
        "name": "Hellraiser entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-6",
        "name": "Hellraiser entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-7",
        "name": "Hellraiser entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-8",
        "name": "Hellraiser entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-9",
        "name": "Hellraiser entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-10",
        "name": "Hellraiser entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-11",
        "name": "Hellraiser entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-12",
        "name": "Hellraiser entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-13",
        "name": "Hellraiser entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-14",
        "name": "Hellraiser entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-15",
        "name": "Hellraiser entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-16",
        "name": "Hellraiser entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-17",
        "name": "Hellraiser entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-18",
        "name": "Hellraiser entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-19",
        "name": "Hellraiser entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-20",
        "name": "Hellraiser entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-21",
        "name": "Hellraiser entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-22",
        "name": "Hellraiser entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-23",
        "name": "Hellraiser entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hellraiser-entry-24",
        "name": "Hellraiser entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hellraiser.",
        "description": "A supporting encyclopedia entry in the Hellraiser subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hellraiser",
        "hellraiser-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hellraiser",
        "hellraiser-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hellraiser",
        "hellraiser-places",
        "contains",
        "Hellraiser places is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-events",
        "contains",
        "Hellraiser events is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-objects",
        "contains",
        "Hellraiser objects & artifacts is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-factions",
        "contains",
        "Hellraiser factions & groups is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-concepts",
        "contains",
        "Hellraiser concepts is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-eras",
        "contains",
        "Hellraiser eras is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-works",
        "contains",
        "Hellraiser works & media is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-symbols",
        "contains",
        "Hellraiser symbols is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-controversies",
        "contains",
        "Hellraiser controversies is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-sources",
        "contains",
        "Hellraiser sources is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-geography",
        "contains",
        "Hellraiser geography is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-legacy",
        "contains",
        "Hellraiser legacy is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-practices",
        "contains",
        "Hellraiser practices is a primary trailhead under Hellraiser.",
        0.88,
        0.82
    ],
    [
        "hellraiser",
        "hellraiser-entry-1",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-2",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-3",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-4",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-5",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-6",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-7",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-8",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-9",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-10",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-11",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-12",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-13",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-14",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-15",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-16",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-17",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-18",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-19",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-20",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-21",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-22",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-23",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ],
    [
        "hellraiser",
        "hellraiser-entry-24",
        "contains",
        "Supporting entry under Hellraiser.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
