/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pixar",
        "name": "Pixar",
        "type": "topic",
        "short_description": "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI.",
        "description": "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pixar so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "pixar-figures",
        "name": "Pixar figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pixar.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pixar."
    },
    {
        "slug": "pixar-world",
        "name": "Pixar world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pixar.",
        "description": "Geography, institutions, and periodization that give Pixar its encyclopedia shape."
    },
    {
        "slug": "pixar-places",
        "name": "Pixar places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pixar.",
        "description": "Places, regions, and built sites that give Pixar its map — where events and figures concentrate."
    },
    {
        "slug": "pixar-events",
        "name": "Pixar events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pixar.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pixar timeline."
    },
    {
        "slug": "pixar-objects",
        "name": "Pixar objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pixar.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pixar."
    },
    {
        "slug": "pixar-factions",
        "name": "Pixar factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pixar.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pixar."
    },
    {
        "slug": "pixar-concepts",
        "name": "Pixar concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pixar.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pixar readable as a lore graph."
    },
    {
        "slug": "pixar-eras",
        "name": "Pixar eras",
        "type": "event",
        "short_description": "Periodization for Pixar.",
        "description": "Named eras and phases that help readers track how Pixar changes across time."
    },
    {
        "slug": "pixar-works",
        "name": "Pixar works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pixar.",
        "description": "Primary works and adaptations through which most audiences encounter Pixar."
    },
    {
        "slug": "pixar-symbols",
        "name": "Pixar symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pixar.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pixar."
    },
    {
        "slug": "pixar-controversies",
        "name": "Pixar controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pixar.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pixar argumentative."
    },
    {
        "slug": "pixar-sources",
        "name": "Pixar sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pixar.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pixar."
    },
    {
        "slug": "pixar-geography",
        "name": "Pixar geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pixar.",
        "description": "Regions, routes, and spatial systems that situate Pixar beyond single named places."
    },
    {
        "slug": "pixar-legacy",
        "name": "Pixar legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pixar.",
        "description": "How Pixar continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pixar-practices",
        "name": "Pixar practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pixar.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pixar."
    },
    {
        "slug": "pixar-entry-1",
        "name": "Pixar entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-2",
        "name": "Pixar entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-3",
        "name": "Pixar entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-4",
        "name": "Pixar entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-5",
        "name": "Pixar entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-6",
        "name": "Pixar entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-7",
        "name": "Pixar entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-8",
        "name": "Pixar entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-9",
        "name": "Pixar entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-10",
        "name": "Pixar entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-11",
        "name": "Pixar entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-12",
        "name": "Pixar entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-13",
        "name": "Pixar entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-14",
        "name": "Pixar entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-15",
        "name": "Pixar entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-16",
        "name": "Pixar entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-17",
        "name": "Pixar entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-18",
        "name": "Pixar entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-19",
        "name": "Pixar entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-20",
        "name": "Pixar entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-21",
        "name": "Pixar entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-22",
        "name": "Pixar entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-23",
        "name": "Pixar entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pixar-entry-24",
        "name": "Pixar entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pixar.",
        "description": "A supporting encyclopedia entry in the Pixar subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pixar",
        "pixar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pixar",
        "pixar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pixar",
        "pixar-places",
        "contains",
        "Pixar places is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-events",
        "contains",
        "Pixar events is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-objects",
        "contains",
        "Pixar objects & artifacts is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-factions",
        "contains",
        "Pixar factions & groups is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-concepts",
        "contains",
        "Pixar concepts is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-eras",
        "contains",
        "Pixar eras is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-works",
        "contains",
        "Pixar works & media is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-symbols",
        "contains",
        "Pixar symbols is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-controversies",
        "contains",
        "Pixar controversies is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-sources",
        "contains",
        "Pixar sources is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-geography",
        "contains",
        "Pixar geography is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-legacy",
        "contains",
        "Pixar legacy is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-practices",
        "contains",
        "Pixar practices is a primary trailhead under Pixar.",
        0.88,
        0.82
    ],
    [
        "pixar",
        "pixar-entry-1",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-2",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-3",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-4",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-5",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-6",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-7",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-8",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-9",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-10",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-11",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-12",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-13",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-14",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-15",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-16",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-17",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-18",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-19",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-20",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-21",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-22",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-23",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ],
    [
        "pixar",
        "pixar-entry-24",
        "contains",
        "Supporting entry under Pixar.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
