/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "altered-carbon",
        "name": "Altered Carbon",
        "type": "topic",
        "short_description": "Sleeve bodies, Meth elite, and the neo-noir future of consciousness as transferable property.",
        "description": "Sleeve bodies, Meth elite, and the neo-noir future of consciousness as transferable property. This Ton-o-Lore subject maps people, places, events, and ideas tied to Altered Carbon so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "altered-carbon-figures",
        "name": "Altered Carbon figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Altered Carbon.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Altered Carbon."
    },
    {
        "slug": "altered-carbon-world",
        "name": "Altered Carbon world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Altered Carbon.",
        "description": "Geography, institutions, and periodization that give Altered Carbon its encyclopedia shape."
    },
    {
        "slug": "altered-carbon-places",
        "name": "Altered Carbon places",
        "type": "place",
        "short_description": "Locations and geographies that frame Altered Carbon.",
        "description": "Places, regions, and built sites that give Altered Carbon its map — where events and figures concentrate."
    },
    {
        "slug": "altered-carbon-events",
        "name": "Altered Carbon events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Altered Carbon.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Altered Carbon timeline."
    },
    {
        "slug": "altered-carbon-objects",
        "name": "Altered Carbon objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Altered Carbon.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Altered Carbon."
    },
    {
        "slug": "altered-carbon-factions",
        "name": "Altered Carbon factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Altered Carbon.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Altered Carbon."
    },
    {
        "slug": "altered-carbon-concepts",
        "name": "Altered Carbon concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Altered Carbon.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Altered Carbon readable as a lore graph."
    },
    {
        "slug": "altered-carbon-eras",
        "name": "Altered Carbon eras",
        "type": "event",
        "short_description": "Periodization for Altered Carbon.",
        "description": "Named eras and phases that help readers track how Altered Carbon changes across time."
    },
    {
        "slug": "altered-carbon-works",
        "name": "Altered Carbon works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Altered Carbon.",
        "description": "Primary works and adaptations through which most audiences encounter Altered Carbon."
    },
    {
        "slug": "altered-carbon-symbols",
        "name": "Altered Carbon symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Altered Carbon.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Altered Carbon."
    },
    {
        "slug": "altered-carbon-controversies",
        "name": "Altered Carbon controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Altered Carbon.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Altered Carbon argumentative."
    },
    {
        "slug": "altered-carbon-sources",
        "name": "Altered Carbon sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Altered Carbon.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Altered Carbon."
    },
    {
        "slug": "altered-carbon-geography",
        "name": "Altered Carbon geography",
        "type": "place",
        "short_description": "Broader geographic framing for Altered Carbon.",
        "description": "Regions, routes, and spatial systems that situate Altered Carbon beyond single named places."
    },
    {
        "slug": "altered-carbon-legacy",
        "name": "Altered Carbon legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Altered Carbon.",
        "description": "How Altered Carbon continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "altered-carbon-practices",
        "name": "Altered Carbon practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Altered Carbon.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Altered Carbon."
    },
    {
        "slug": "altered-carbon-entry-1",
        "name": "Altered Carbon entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-2",
        "name": "Altered Carbon entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-3",
        "name": "Altered Carbon entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-4",
        "name": "Altered Carbon entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-5",
        "name": "Altered Carbon entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-6",
        "name": "Altered Carbon entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-7",
        "name": "Altered Carbon entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-8",
        "name": "Altered Carbon entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-9",
        "name": "Altered Carbon entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-10",
        "name": "Altered Carbon entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-11",
        "name": "Altered Carbon entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-12",
        "name": "Altered Carbon entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-13",
        "name": "Altered Carbon entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-14",
        "name": "Altered Carbon entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-15",
        "name": "Altered Carbon entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-16",
        "name": "Altered Carbon entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-17",
        "name": "Altered Carbon entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-18",
        "name": "Altered Carbon entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-19",
        "name": "Altered Carbon entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-20",
        "name": "Altered Carbon entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-21",
        "name": "Altered Carbon entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-22",
        "name": "Altered Carbon entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-23",
        "name": "Altered Carbon entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "altered-carbon-entry-24",
        "name": "Altered Carbon entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Altered Carbon.",
        "description": "A supporting encyclopedia entry in the Altered Carbon subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "altered-carbon",
        "altered-carbon-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "altered-carbon",
        "altered-carbon-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "altered-carbon",
        "altered-carbon-places",
        "contains",
        "Altered Carbon places is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-events",
        "contains",
        "Altered Carbon events is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-objects",
        "contains",
        "Altered Carbon objects & artifacts is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-factions",
        "contains",
        "Altered Carbon factions & groups is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-concepts",
        "contains",
        "Altered Carbon concepts is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-eras",
        "contains",
        "Altered Carbon eras is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-works",
        "contains",
        "Altered Carbon works & media is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-symbols",
        "contains",
        "Altered Carbon symbols is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-controversies",
        "contains",
        "Altered Carbon controversies is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-sources",
        "contains",
        "Altered Carbon sources is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-geography",
        "contains",
        "Altered Carbon geography is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-legacy",
        "contains",
        "Altered Carbon legacy is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-practices",
        "contains",
        "Altered Carbon practices is a primary trailhead under Altered Carbon.",
        0.88,
        0.82
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-1",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-2",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-3",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-4",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-5",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-6",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-7",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-8",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-9",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-10",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-11",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-12",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-13",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-14",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-15",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-16",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-17",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-18",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-19",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-20",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-21",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-22",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-23",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ],
    [
        "altered-carbon",
        "altered-carbon-entry-24",
        "contains",
        "Supporting entry under Altered Carbon.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
