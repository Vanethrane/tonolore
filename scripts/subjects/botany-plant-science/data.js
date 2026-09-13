/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "botany-plant-science",
        "name": "Botany & plant science",
        "type": "topic",
        "short_description": "Taxonomy, photosynthesis, and the green world that feeds and fuels ecosystems.",
        "description": "Taxonomy, photosynthesis, and the green world that feeds and fuels ecosystems. This Ton-o-Lore subject maps people, places, events, and ideas tied to Botany & plant science so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "botany-plant-science-figures",
        "name": "Botany & plant science figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Botany & plant science.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Botany & plant science."
    },
    {
        "slug": "botany-plant-science-world",
        "name": "Botany & plant science world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Botany & plant science.",
        "description": "Geography, institutions, and periodization that give Botany & plant science its encyclopedia shape."
    },
    {
        "slug": "botany-plant-science-places",
        "name": "Botany & plant science places",
        "type": "place",
        "short_description": "Locations and geographies that frame Botany & plant science.",
        "description": "Places, regions, and built sites that give Botany & plant science its map — where events and figures concentrate."
    },
    {
        "slug": "botany-plant-science-events",
        "name": "Botany & plant science events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Botany & plant science.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Botany & plant science timeline."
    },
    {
        "slug": "botany-plant-science-objects",
        "name": "Botany & plant science objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Botany & plant science.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Botany & plant science."
    },
    {
        "slug": "botany-plant-science-factions",
        "name": "Botany & plant science factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Botany & plant science.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Botany & plant science."
    },
    {
        "slug": "botany-plant-science-concepts",
        "name": "Botany & plant science concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Botany & plant science.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Botany & plant science readable as a lore graph."
    },
    {
        "slug": "botany-plant-science-eras",
        "name": "Botany & plant science eras",
        "type": "event",
        "short_description": "Periodization for Botany & plant science.",
        "description": "Named eras and phases that help readers track how Botany & plant science changes across time."
    },
    {
        "slug": "botany-plant-science-works",
        "name": "Botany & plant science works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Botany & plant science.",
        "description": "Primary works and adaptations through which most audiences encounter Botany & plant science."
    },
    {
        "slug": "botany-plant-science-symbols",
        "name": "Botany & plant science symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Botany & plant science.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Botany & plant science."
    },
    {
        "slug": "botany-plant-science-controversies",
        "name": "Botany & plant science controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Botany & plant science.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Botany & plant science argumentative."
    },
    {
        "slug": "botany-plant-science-sources",
        "name": "Botany & plant science sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Botany & plant science.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Botany & plant science."
    },
    {
        "slug": "botany-plant-science-geography",
        "name": "Botany & plant science geography",
        "type": "place",
        "short_description": "Broader geographic framing for Botany & plant science.",
        "description": "Regions, routes, and spatial systems that situate Botany & plant science beyond single named places."
    },
    {
        "slug": "botany-plant-science-legacy",
        "name": "Botany & plant science legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Botany & plant science.",
        "description": "How Botany & plant science continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "botany-plant-science-practices",
        "name": "Botany & plant science practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Botany & plant science.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Botany & plant science."
    },
    {
        "slug": "botany-plant-science-entry-1",
        "name": "Botany & plant science entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-2",
        "name": "Botany & plant science entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-3",
        "name": "Botany & plant science entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-4",
        "name": "Botany & plant science entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-5",
        "name": "Botany & plant science entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-6",
        "name": "Botany & plant science entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-7",
        "name": "Botany & plant science entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-8",
        "name": "Botany & plant science entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-9",
        "name": "Botany & plant science entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-10",
        "name": "Botany & plant science entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-11",
        "name": "Botany & plant science entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-12",
        "name": "Botany & plant science entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-13",
        "name": "Botany & plant science entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-14",
        "name": "Botany & plant science entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-15",
        "name": "Botany & plant science entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-16",
        "name": "Botany & plant science entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-17",
        "name": "Botany & plant science entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-18",
        "name": "Botany & plant science entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-19",
        "name": "Botany & plant science entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-20",
        "name": "Botany & plant science entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-21",
        "name": "Botany & plant science entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-22",
        "name": "Botany & plant science entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-23",
        "name": "Botany & plant science entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "botany-plant-science-entry-24",
        "name": "Botany & plant science entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Botany & plant science.",
        "description": "A supporting encyclopedia entry in the Botany & plant science subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "botany-plant-science",
        "botany-plant-science-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "botany-plant-science",
        "botany-plant-science-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "botany-plant-science",
        "botany-plant-science-places",
        "contains",
        "Botany & plant science places is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-events",
        "contains",
        "Botany & plant science events is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-objects",
        "contains",
        "Botany & plant science objects & artifacts is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-factions",
        "contains",
        "Botany & plant science factions & groups is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-concepts",
        "contains",
        "Botany & plant science concepts is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-eras",
        "contains",
        "Botany & plant science eras is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-works",
        "contains",
        "Botany & plant science works & media is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-symbols",
        "contains",
        "Botany & plant science symbols is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-controversies",
        "contains",
        "Botany & plant science controversies is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-sources",
        "contains",
        "Botany & plant science sources is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-geography",
        "contains",
        "Botany & plant science geography is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-legacy",
        "contains",
        "Botany & plant science legacy is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-practices",
        "contains",
        "Botany & plant science practices is a primary trailhead under Botany & plant science.",
        0.88,
        0.82
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-1",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-2",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-3",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-4",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-5",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-6",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-7",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-8",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-9",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-10",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-11",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-12",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-13",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-14",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-15",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-16",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-17",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-18",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-19",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-20",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-21",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-22",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-23",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ],
    [
        "botany-plant-science",
        "botany-plant-science-entry-24",
        "contains",
        "Supporting entry under Botany & plant science.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
