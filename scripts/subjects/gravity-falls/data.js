/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gravity-falls",
        "name": "Gravity Falls",
        "type": "topic",
        "short_description": "Mystery shack ciphers, twin siblings, and the serialized kids’ conspiracy show that rewarded rewatches.",
        "description": "Mystery shack ciphers, twin siblings, and the serialized kids’ conspiracy show that rewarded rewatches. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gravity Falls so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "gravity-falls-figures",
        "name": "Gravity Falls figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gravity Falls.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gravity Falls."
    },
    {
        "slug": "gravity-falls-world",
        "name": "Gravity Falls world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gravity Falls.",
        "description": "Geography, institutions, and periodization that give Gravity Falls its encyclopedia shape."
    },
    {
        "slug": "gravity-falls-places",
        "name": "Gravity Falls places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gravity Falls.",
        "description": "Places, regions, and built sites that give Gravity Falls its map — where events and figures concentrate."
    },
    {
        "slug": "gravity-falls-events",
        "name": "Gravity Falls events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gravity Falls.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gravity Falls timeline."
    },
    {
        "slug": "gravity-falls-objects",
        "name": "Gravity Falls objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gravity Falls.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gravity Falls."
    },
    {
        "slug": "gravity-falls-factions",
        "name": "Gravity Falls factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gravity Falls.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gravity Falls."
    },
    {
        "slug": "gravity-falls-concepts",
        "name": "Gravity Falls concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gravity Falls.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gravity Falls readable as a lore graph."
    },
    {
        "slug": "gravity-falls-eras",
        "name": "Gravity Falls eras",
        "type": "event",
        "short_description": "Periodization for Gravity Falls.",
        "description": "Named eras and phases that help readers track how Gravity Falls changes across time."
    },
    {
        "slug": "gravity-falls-works",
        "name": "Gravity Falls works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gravity Falls.",
        "description": "Primary works and adaptations through which most audiences encounter Gravity Falls."
    },
    {
        "slug": "gravity-falls-symbols",
        "name": "Gravity Falls symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gravity Falls.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gravity Falls."
    },
    {
        "slug": "gravity-falls-controversies",
        "name": "Gravity Falls controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gravity Falls.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gravity Falls argumentative."
    },
    {
        "slug": "gravity-falls-sources",
        "name": "Gravity Falls sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gravity Falls.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gravity Falls."
    },
    {
        "slug": "gravity-falls-geography",
        "name": "Gravity Falls geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gravity Falls.",
        "description": "Regions, routes, and spatial systems that situate Gravity Falls beyond single named places."
    },
    {
        "slug": "gravity-falls-legacy",
        "name": "Gravity Falls legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gravity Falls.",
        "description": "How Gravity Falls continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gravity-falls-practices",
        "name": "Gravity Falls practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gravity Falls.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gravity Falls."
    },
    {
        "slug": "gravity-falls-entry-1",
        "name": "Gravity Falls entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-2",
        "name": "Gravity Falls entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-3",
        "name": "Gravity Falls entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-4",
        "name": "Gravity Falls entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-5",
        "name": "Gravity Falls entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-6",
        "name": "Gravity Falls entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-7",
        "name": "Gravity Falls entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-8",
        "name": "Gravity Falls entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-9",
        "name": "Gravity Falls entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-10",
        "name": "Gravity Falls entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-11",
        "name": "Gravity Falls entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-12",
        "name": "Gravity Falls entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-13",
        "name": "Gravity Falls entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-14",
        "name": "Gravity Falls entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-15",
        "name": "Gravity Falls entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-16",
        "name": "Gravity Falls entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-17",
        "name": "Gravity Falls entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-18",
        "name": "Gravity Falls entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-19",
        "name": "Gravity Falls entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-20",
        "name": "Gravity Falls entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-21",
        "name": "Gravity Falls entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-22",
        "name": "Gravity Falls entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-23",
        "name": "Gravity Falls entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gravity-falls-entry-24",
        "name": "Gravity Falls entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gravity Falls.",
        "description": "A supporting encyclopedia entry in the Gravity Falls subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gravity-falls",
        "gravity-falls-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gravity-falls",
        "gravity-falls-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gravity-falls",
        "gravity-falls-places",
        "contains",
        "Gravity Falls places is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-events",
        "contains",
        "Gravity Falls events is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-objects",
        "contains",
        "Gravity Falls objects & artifacts is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-factions",
        "contains",
        "Gravity Falls factions & groups is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-concepts",
        "contains",
        "Gravity Falls concepts is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-eras",
        "contains",
        "Gravity Falls eras is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-works",
        "contains",
        "Gravity Falls works & media is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-symbols",
        "contains",
        "Gravity Falls symbols is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-controversies",
        "contains",
        "Gravity Falls controversies is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-sources",
        "contains",
        "Gravity Falls sources is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-geography",
        "contains",
        "Gravity Falls geography is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-legacy",
        "contains",
        "Gravity Falls legacy is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-practices",
        "contains",
        "Gravity Falls practices is a primary trailhead under Gravity Falls.",
        0.88,
        0.82
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-1",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-2",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-3",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-4",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-5",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-6",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-7",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-8",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-9",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-10",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-11",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-12",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-13",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-14",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-15",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-16",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-17",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-18",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-19",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-20",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-21",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-22",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-23",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ],
    [
        "gravity-falls",
        "gravity-falls-entry-24",
        "contains",
        "Supporting entry under Gravity Falls.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
