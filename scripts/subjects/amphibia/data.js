/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "amphibia",
        "name": "Amphibia",
        "type": "topic",
        "short_description": "Frog-world isekai, wartime lore payoff, and a kids’ adventure with surprising epic stakes.",
        "description": "Frog-world isekai, wartime lore payoff, and a kids’ adventure with surprising epic stakes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Amphibia so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "amphibia-figures",
        "name": "Amphibia figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Amphibia.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Amphibia."
    },
    {
        "slug": "amphibia-world",
        "name": "Amphibia world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Amphibia.",
        "description": "Geography, institutions, and periodization that give Amphibia its encyclopedia shape."
    },
    {
        "slug": "amphibia-places",
        "name": "Amphibia places",
        "type": "place",
        "short_description": "Locations and geographies that frame Amphibia.",
        "description": "Places, regions, and built sites that give Amphibia its map — where events and figures concentrate."
    },
    {
        "slug": "amphibia-events",
        "name": "Amphibia events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Amphibia.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Amphibia timeline."
    },
    {
        "slug": "amphibia-objects",
        "name": "Amphibia objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Amphibia.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Amphibia."
    },
    {
        "slug": "amphibia-factions",
        "name": "Amphibia factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Amphibia.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Amphibia."
    },
    {
        "slug": "amphibia-concepts",
        "name": "Amphibia concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Amphibia.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Amphibia readable as a lore graph."
    },
    {
        "slug": "amphibia-eras",
        "name": "Amphibia eras",
        "type": "event",
        "short_description": "Periodization for Amphibia.",
        "description": "Named eras and phases that help readers track how Amphibia changes across time."
    },
    {
        "slug": "amphibia-works",
        "name": "Amphibia works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Amphibia.",
        "description": "Primary works and adaptations through which most audiences encounter Amphibia."
    },
    {
        "slug": "amphibia-symbols",
        "name": "Amphibia symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Amphibia.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Amphibia."
    },
    {
        "slug": "amphibia-controversies",
        "name": "Amphibia controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Amphibia.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Amphibia argumentative."
    },
    {
        "slug": "amphibia-sources",
        "name": "Amphibia sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Amphibia.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Amphibia."
    },
    {
        "slug": "amphibia-geography",
        "name": "Amphibia geography",
        "type": "place",
        "short_description": "Broader geographic framing for Amphibia.",
        "description": "Regions, routes, and spatial systems that situate Amphibia beyond single named places."
    },
    {
        "slug": "amphibia-legacy",
        "name": "Amphibia legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Amphibia.",
        "description": "How Amphibia continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "amphibia-practices",
        "name": "Amphibia practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Amphibia.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Amphibia."
    },
    {
        "slug": "amphibia-entry-1",
        "name": "Amphibia entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-2",
        "name": "Amphibia entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-3",
        "name": "Amphibia entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-4",
        "name": "Amphibia entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-5",
        "name": "Amphibia entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-6",
        "name": "Amphibia entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-7",
        "name": "Amphibia entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-8",
        "name": "Amphibia entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-9",
        "name": "Amphibia entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-10",
        "name": "Amphibia entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-11",
        "name": "Amphibia entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-12",
        "name": "Amphibia entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-13",
        "name": "Amphibia entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-14",
        "name": "Amphibia entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-15",
        "name": "Amphibia entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-16",
        "name": "Amphibia entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-17",
        "name": "Amphibia entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-18",
        "name": "Amphibia entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-19",
        "name": "Amphibia entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-20",
        "name": "Amphibia entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-21",
        "name": "Amphibia entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-22",
        "name": "Amphibia entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-23",
        "name": "Amphibia entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "amphibia-entry-24",
        "name": "Amphibia entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Amphibia.",
        "description": "A supporting encyclopedia entry in the Amphibia subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "amphibia",
        "amphibia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "amphibia",
        "amphibia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "amphibia",
        "amphibia-places",
        "contains",
        "Amphibia places is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-events",
        "contains",
        "Amphibia events is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-objects",
        "contains",
        "Amphibia objects & artifacts is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-factions",
        "contains",
        "Amphibia factions & groups is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-concepts",
        "contains",
        "Amphibia concepts is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-eras",
        "contains",
        "Amphibia eras is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-works",
        "contains",
        "Amphibia works & media is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-symbols",
        "contains",
        "Amphibia symbols is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-controversies",
        "contains",
        "Amphibia controversies is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-sources",
        "contains",
        "Amphibia sources is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-geography",
        "contains",
        "Amphibia geography is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-legacy",
        "contains",
        "Amphibia legacy is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-practices",
        "contains",
        "Amphibia practices is a primary trailhead under Amphibia.",
        0.88,
        0.82
    ],
    [
        "amphibia",
        "amphibia-entry-1",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-2",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-3",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-4",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-5",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-6",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-7",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-8",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-9",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-10",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-11",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-12",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-13",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-14",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-15",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-16",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-17",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-18",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-19",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-20",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-21",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-22",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-23",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ],
    [
        "amphibia",
        "amphibia-entry-24",
        "contains",
        "Supporting entry under Amphibia.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
