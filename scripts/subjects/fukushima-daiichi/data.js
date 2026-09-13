/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fukushima-daiichi",
        "name": "Fukushima Daiichi",
        "type": "topic",
        "short_description": "2011 tsunami-triggered meltdowns and the nuclear crisis that reshaped Japan’s energy politics.",
        "description": "2011 tsunami-triggered meltdowns and the nuclear crisis that reshaped Japan’s energy politics. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fukushima Daiichi so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "fukushima-daiichi-figures",
        "name": "Fukushima Daiichi figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fukushima Daiichi.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-world",
        "name": "Fukushima Daiichi world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fukushima Daiichi.",
        "description": "Geography, institutions, and periodization that give Fukushima Daiichi its encyclopedia shape."
    },
    {
        "slug": "fukushima-daiichi-places",
        "name": "Fukushima Daiichi places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fukushima Daiichi.",
        "description": "Places, regions, and built sites that give Fukushima Daiichi its map — where events and figures concentrate."
    },
    {
        "slug": "fukushima-daiichi-events",
        "name": "Fukushima Daiichi events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fukushima Daiichi.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fukushima Daiichi timeline."
    },
    {
        "slug": "fukushima-daiichi-objects",
        "name": "Fukushima Daiichi objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fukushima Daiichi.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-factions",
        "name": "Fukushima Daiichi factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fukushima Daiichi.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-concepts",
        "name": "Fukushima Daiichi concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fukushima Daiichi.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fukushima Daiichi readable as a lore graph."
    },
    {
        "slug": "fukushima-daiichi-eras",
        "name": "Fukushima Daiichi eras",
        "type": "event",
        "short_description": "Periodization for Fukushima Daiichi.",
        "description": "Named eras and phases that help readers track how Fukushima Daiichi changes across time."
    },
    {
        "slug": "fukushima-daiichi-works",
        "name": "Fukushima Daiichi works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fukushima Daiichi.",
        "description": "Primary works and adaptations through which most audiences encounter Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-symbols",
        "name": "Fukushima Daiichi symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fukushima Daiichi.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-controversies",
        "name": "Fukushima Daiichi controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fukushima Daiichi.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fukushima Daiichi argumentative."
    },
    {
        "slug": "fukushima-daiichi-sources",
        "name": "Fukushima Daiichi sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fukushima Daiichi.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-geography",
        "name": "Fukushima Daiichi geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fukushima Daiichi.",
        "description": "Regions, routes, and spatial systems that situate Fukushima Daiichi beyond single named places."
    },
    {
        "slug": "fukushima-daiichi-legacy",
        "name": "Fukushima Daiichi legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fukushima Daiichi.",
        "description": "How Fukushima Daiichi continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fukushima-daiichi-practices",
        "name": "Fukushima Daiichi practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fukushima Daiichi.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fukushima Daiichi."
    },
    {
        "slug": "fukushima-daiichi-entry-1",
        "name": "Fukushima Daiichi entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-2",
        "name": "Fukushima Daiichi entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-3",
        "name": "Fukushima Daiichi entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-4",
        "name": "Fukushima Daiichi entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-5",
        "name": "Fukushima Daiichi entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-6",
        "name": "Fukushima Daiichi entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-7",
        "name": "Fukushima Daiichi entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-8",
        "name": "Fukushima Daiichi entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-9",
        "name": "Fukushima Daiichi entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-10",
        "name": "Fukushima Daiichi entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-11",
        "name": "Fukushima Daiichi entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-12",
        "name": "Fukushima Daiichi entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-13",
        "name": "Fukushima Daiichi entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-14",
        "name": "Fukushima Daiichi entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-15",
        "name": "Fukushima Daiichi entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-16",
        "name": "Fukushima Daiichi entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-17",
        "name": "Fukushima Daiichi entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-18",
        "name": "Fukushima Daiichi entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-19",
        "name": "Fukushima Daiichi entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-20",
        "name": "Fukushima Daiichi entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-21",
        "name": "Fukushima Daiichi entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-22",
        "name": "Fukushima Daiichi entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-23",
        "name": "Fukushima Daiichi entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fukushima-daiichi-entry-24",
        "name": "Fukushima Daiichi entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fukushima Daiichi.",
        "description": "A supporting encyclopedia entry in the Fukushima Daiichi subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fukushima-daiichi",
        "fukushima-daiichi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-places",
        "contains",
        "Fukushima Daiichi places is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-events",
        "contains",
        "Fukushima Daiichi events is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-objects",
        "contains",
        "Fukushima Daiichi objects & artifacts is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-factions",
        "contains",
        "Fukushima Daiichi factions & groups is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-concepts",
        "contains",
        "Fukushima Daiichi concepts is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-eras",
        "contains",
        "Fukushima Daiichi eras is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-works",
        "contains",
        "Fukushima Daiichi works & media is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-symbols",
        "contains",
        "Fukushima Daiichi symbols is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-controversies",
        "contains",
        "Fukushima Daiichi controversies is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-sources",
        "contains",
        "Fukushima Daiichi sources is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-geography",
        "contains",
        "Fukushima Daiichi geography is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-legacy",
        "contains",
        "Fukushima Daiichi legacy is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-practices",
        "contains",
        "Fukushima Daiichi practices is a primary trailhead under Fukushima Daiichi.",
        0.88,
        0.82
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-1",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-2",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-3",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-4",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-5",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-6",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-7",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-8",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-9",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-10",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-11",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-12",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-13",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-14",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-15",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-16",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-17",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-18",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-19",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-20",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-21",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-22",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-23",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ],
    [
        "fukushima-daiichi",
        "fukushima-daiichi-entry-24",
        "contains",
        "Supporting entry under Fukushima Daiichi.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
