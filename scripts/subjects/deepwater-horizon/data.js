/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "deepwater-horizon",
        "name": "Deepwater Horizon",
        "type": "topic",
        "short_description": "2010 blowout, Gulf slick, and the offshore drilling disaster of the smartphone era.",
        "description": "2010 blowout, Gulf slick, and the offshore drilling disaster of the smartphone era. This Ton-o-Lore subject maps people, places, events, and ideas tied to Deepwater Horizon so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "deepwater-horizon-figures",
        "name": "Deepwater Horizon figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Deepwater Horizon.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-world",
        "name": "Deepwater Horizon world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Deepwater Horizon.",
        "description": "Geography, institutions, and periodization that give Deepwater Horizon its encyclopedia shape."
    },
    {
        "slug": "deepwater-horizon-places",
        "name": "Deepwater Horizon places",
        "type": "place",
        "short_description": "Locations and geographies that frame Deepwater Horizon.",
        "description": "Places, regions, and built sites that give Deepwater Horizon its map — where events and figures concentrate."
    },
    {
        "slug": "deepwater-horizon-events",
        "name": "Deepwater Horizon events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Deepwater Horizon.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Deepwater Horizon timeline."
    },
    {
        "slug": "deepwater-horizon-objects",
        "name": "Deepwater Horizon objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Deepwater Horizon.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-factions",
        "name": "Deepwater Horizon factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Deepwater Horizon.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-concepts",
        "name": "Deepwater Horizon concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Deepwater Horizon.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Deepwater Horizon readable as a lore graph."
    },
    {
        "slug": "deepwater-horizon-eras",
        "name": "Deepwater Horizon eras",
        "type": "event",
        "short_description": "Periodization for Deepwater Horizon.",
        "description": "Named eras and phases that help readers track how Deepwater Horizon changes across time."
    },
    {
        "slug": "deepwater-horizon-works",
        "name": "Deepwater Horizon works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Deepwater Horizon.",
        "description": "Primary works and adaptations through which most audiences encounter Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-symbols",
        "name": "Deepwater Horizon symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Deepwater Horizon.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-controversies",
        "name": "Deepwater Horizon controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Deepwater Horizon.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Deepwater Horizon argumentative."
    },
    {
        "slug": "deepwater-horizon-sources",
        "name": "Deepwater Horizon sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Deepwater Horizon.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-geography",
        "name": "Deepwater Horizon geography",
        "type": "place",
        "short_description": "Broader geographic framing for Deepwater Horizon.",
        "description": "Regions, routes, and spatial systems that situate Deepwater Horizon beyond single named places."
    },
    {
        "slug": "deepwater-horizon-legacy",
        "name": "Deepwater Horizon legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Deepwater Horizon.",
        "description": "How Deepwater Horizon continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "deepwater-horizon-practices",
        "name": "Deepwater Horizon practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Deepwater Horizon.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Deepwater Horizon."
    },
    {
        "slug": "deepwater-horizon-entry-1",
        "name": "Deepwater Horizon entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-2",
        "name": "Deepwater Horizon entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-3",
        "name": "Deepwater Horizon entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-4",
        "name": "Deepwater Horizon entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-5",
        "name": "Deepwater Horizon entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-6",
        "name": "Deepwater Horizon entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-7",
        "name": "Deepwater Horizon entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-8",
        "name": "Deepwater Horizon entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-9",
        "name": "Deepwater Horizon entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-10",
        "name": "Deepwater Horizon entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-11",
        "name": "Deepwater Horizon entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-12",
        "name": "Deepwater Horizon entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-13",
        "name": "Deepwater Horizon entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-14",
        "name": "Deepwater Horizon entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-15",
        "name": "Deepwater Horizon entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-16",
        "name": "Deepwater Horizon entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-17",
        "name": "Deepwater Horizon entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-18",
        "name": "Deepwater Horizon entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-19",
        "name": "Deepwater Horizon entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-20",
        "name": "Deepwater Horizon entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-21",
        "name": "Deepwater Horizon entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-22",
        "name": "Deepwater Horizon entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-23",
        "name": "Deepwater Horizon entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deepwater-horizon-entry-24",
        "name": "Deepwater Horizon entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deepwater Horizon.",
        "description": "A supporting encyclopedia entry in the Deepwater Horizon subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "deepwater-horizon",
        "deepwater-horizon-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-places",
        "contains",
        "Deepwater Horizon places is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-events",
        "contains",
        "Deepwater Horizon events is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-objects",
        "contains",
        "Deepwater Horizon objects & artifacts is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-factions",
        "contains",
        "Deepwater Horizon factions & groups is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-concepts",
        "contains",
        "Deepwater Horizon concepts is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-eras",
        "contains",
        "Deepwater Horizon eras is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-works",
        "contains",
        "Deepwater Horizon works & media is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-symbols",
        "contains",
        "Deepwater Horizon symbols is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-controversies",
        "contains",
        "Deepwater Horizon controversies is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-sources",
        "contains",
        "Deepwater Horizon sources is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-geography",
        "contains",
        "Deepwater Horizon geography is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-legacy",
        "contains",
        "Deepwater Horizon legacy is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-practices",
        "contains",
        "Deepwater Horizon practices is a primary trailhead under Deepwater Horizon.",
        0.88,
        0.82
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-1",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-2",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-3",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-4",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-5",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-6",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-7",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-8",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-9",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-10",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-11",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-12",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-13",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-14",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-15",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-16",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-17",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-18",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-19",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-20",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-21",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-22",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-23",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ],
    [
        "deepwater-horizon",
        "deepwater-horizon-entry-24",
        "contains",
        "Supporting entry under Deepwater Horizon.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
