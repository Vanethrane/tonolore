/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "disasters-catastrophes",
        "name": "Disasters & catastrophes",
        "type": "topic",
        "short_description": "Earthquakes, fires, floods, industrial failures, pandemics, and the human networks each catastrophe remaps.",
        "description": "Earthquakes, fires, floods, industrial failures, pandemics, and the human networks each catastrophe remaps. This Ton-o-Lore subject maps people, places, events, and ideas tied to Disasters & catastrophes so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-figures",
        "name": "Disasters & catastrophes figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Disasters & catastrophes.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-world",
        "name": "Disasters & catastrophes world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Disasters & catastrophes.",
        "description": "Geography, institutions, and periodization that give Disasters & catastrophes its encyclopedia shape."
    },
    {
        "slug": "disasters-catastrophes-places",
        "name": "Disasters & catastrophes places",
        "type": "place",
        "short_description": "Locations and geographies that frame Disasters & catastrophes.",
        "description": "Places, regions, and built sites that give Disasters & catastrophes its map — where events and figures concentrate."
    },
    {
        "slug": "disasters-catastrophes-events",
        "name": "Disasters & catastrophes events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Disasters & catastrophes.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Disasters & catastrophes timeline."
    },
    {
        "slug": "disasters-catastrophes-objects",
        "name": "Disasters & catastrophes objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Disasters & catastrophes.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-factions",
        "name": "Disasters & catastrophes factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Disasters & catastrophes.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-concepts",
        "name": "Disasters & catastrophes concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Disasters & catastrophes.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Disasters & catastrophes readable as a lore graph."
    },
    {
        "slug": "disasters-catastrophes-eras",
        "name": "Disasters & catastrophes eras",
        "type": "event",
        "short_description": "Periodization for Disasters & catastrophes.",
        "description": "Named eras and phases that help readers track how Disasters & catastrophes changes across time."
    },
    {
        "slug": "disasters-catastrophes-works",
        "name": "Disasters & catastrophes works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Disasters & catastrophes.",
        "description": "Primary works and adaptations through which most audiences encounter Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-symbols",
        "name": "Disasters & catastrophes symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Disasters & catastrophes.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-controversies",
        "name": "Disasters & catastrophes controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Disasters & catastrophes.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Disasters & catastrophes argumentative."
    },
    {
        "slug": "disasters-catastrophes-sources",
        "name": "Disasters & catastrophes sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Disasters & catastrophes.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-geography",
        "name": "Disasters & catastrophes geography",
        "type": "place",
        "short_description": "Broader geographic framing for Disasters & catastrophes.",
        "description": "Regions, routes, and spatial systems that situate Disasters & catastrophes beyond single named places."
    },
    {
        "slug": "disasters-catastrophes-legacy",
        "name": "Disasters & catastrophes legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Disasters & catastrophes.",
        "description": "How Disasters & catastrophes continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "disasters-catastrophes-practices",
        "name": "Disasters & catastrophes practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Disasters & catastrophes.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Disasters & catastrophes."
    },
    {
        "slug": "disasters-catastrophes-entry-1",
        "name": "Disasters & catastrophes entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-2",
        "name": "Disasters & catastrophes entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-3",
        "name": "Disasters & catastrophes entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-4",
        "name": "Disasters & catastrophes entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-5",
        "name": "Disasters & catastrophes entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-6",
        "name": "Disasters & catastrophes entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-7",
        "name": "Disasters & catastrophes entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-8",
        "name": "Disasters & catastrophes entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-9",
        "name": "Disasters & catastrophes entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-10",
        "name": "Disasters & catastrophes entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-11",
        "name": "Disasters & catastrophes entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-12",
        "name": "Disasters & catastrophes entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-13",
        "name": "Disasters & catastrophes entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-14",
        "name": "Disasters & catastrophes entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-15",
        "name": "Disasters & catastrophes entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-16",
        "name": "Disasters & catastrophes entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-17",
        "name": "Disasters & catastrophes entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-18",
        "name": "Disasters & catastrophes entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-19",
        "name": "Disasters & catastrophes entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-20",
        "name": "Disasters & catastrophes entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-21",
        "name": "Disasters & catastrophes entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-22",
        "name": "Disasters & catastrophes entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-23",
        "name": "Disasters & catastrophes entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disasters-catastrophes-entry-24",
        "name": "Disasters & catastrophes entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disasters & catastrophes.",
        "description": "A supporting encyclopedia entry in the Disasters & catastrophes subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "disasters-catastrophes",
        "disasters-catastrophes-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-places",
        "contains",
        "Disasters & catastrophes places is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-events",
        "contains",
        "Disasters & catastrophes events is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-objects",
        "contains",
        "Disasters & catastrophes objects & artifacts is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-factions",
        "contains",
        "Disasters & catastrophes factions & groups is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-concepts",
        "contains",
        "Disasters & catastrophes concepts is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-eras",
        "contains",
        "Disasters & catastrophes eras is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-works",
        "contains",
        "Disasters & catastrophes works & media is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-symbols",
        "contains",
        "Disasters & catastrophes symbols is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-controversies",
        "contains",
        "Disasters & catastrophes controversies is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-sources",
        "contains",
        "Disasters & catastrophes sources is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-geography",
        "contains",
        "Disasters & catastrophes geography is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-legacy",
        "contains",
        "Disasters & catastrophes legacy is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-practices",
        "contains",
        "Disasters & catastrophes practices is a primary trailhead under Disasters & catastrophes.",
        0.88,
        0.82
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-1",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-2",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-3",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-4",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-5",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-6",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-7",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-8",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-9",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-10",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-11",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-12",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-13",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-14",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-15",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-16",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-17",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-18",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-19",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-20",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-21",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-22",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-23",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ],
    [
        "disasters-catastrophes",
        "disasters-catastrophes-entry-24",
        "contains",
        "Supporting entry under Disasters & catastrophes.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
