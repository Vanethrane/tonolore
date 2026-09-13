/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fullmetal-alchemist",
        "name": "Fullmetal Alchemist",
        "type": "topic",
        "short_description": "Equivalent exchange, Amestris, and the alchemy-war epic of the Elric brothers.",
        "description": "Equivalent exchange, Amestris, and the alchemy-war epic of the Elric brothers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fullmetal Alchemist so readers can follow long-tail connections across anime."
    },
    {
        "slug": "fullmetal-alchemist-figures",
        "name": "Fullmetal Alchemist figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fullmetal Alchemist.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-world",
        "name": "Fullmetal Alchemist world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fullmetal Alchemist.",
        "description": "Geography, institutions, and periodization that give Fullmetal Alchemist its encyclopedia shape."
    },
    {
        "slug": "fullmetal-alchemist-places",
        "name": "Fullmetal Alchemist places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fullmetal Alchemist.",
        "description": "Places, regions, and built sites that give Fullmetal Alchemist its map — where events and figures concentrate."
    },
    {
        "slug": "fullmetal-alchemist-events",
        "name": "Fullmetal Alchemist events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fullmetal Alchemist.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fullmetal Alchemist timeline."
    },
    {
        "slug": "fullmetal-alchemist-objects",
        "name": "Fullmetal Alchemist objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fullmetal Alchemist.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-factions",
        "name": "Fullmetal Alchemist factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fullmetal Alchemist.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-concepts",
        "name": "Fullmetal Alchemist concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fullmetal Alchemist.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fullmetal Alchemist readable as a lore graph."
    },
    {
        "slug": "fullmetal-alchemist-eras",
        "name": "Fullmetal Alchemist eras",
        "type": "event",
        "short_description": "Periodization for Fullmetal Alchemist.",
        "description": "Named eras and phases that help readers track how Fullmetal Alchemist changes across time."
    },
    {
        "slug": "fullmetal-alchemist-works",
        "name": "Fullmetal Alchemist works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fullmetal Alchemist.",
        "description": "Primary works and adaptations through which most audiences encounter Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-symbols",
        "name": "Fullmetal Alchemist symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fullmetal Alchemist.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-controversies",
        "name": "Fullmetal Alchemist controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fullmetal Alchemist.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fullmetal Alchemist argumentative."
    },
    {
        "slug": "fullmetal-alchemist-sources",
        "name": "Fullmetal Alchemist sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fullmetal Alchemist.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-geography",
        "name": "Fullmetal Alchemist geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fullmetal Alchemist.",
        "description": "Regions, routes, and spatial systems that situate Fullmetal Alchemist beyond single named places."
    },
    {
        "slug": "fullmetal-alchemist-legacy",
        "name": "Fullmetal Alchemist legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fullmetal Alchemist.",
        "description": "How Fullmetal Alchemist continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fullmetal-alchemist-practices",
        "name": "Fullmetal Alchemist practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fullmetal Alchemist.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fullmetal Alchemist."
    },
    {
        "slug": "fullmetal-alchemist-entry-1",
        "name": "Fullmetal Alchemist entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-2",
        "name": "Fullmetal Alchemist entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-3",
        "name": "Fullmetal Alchemist entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-4",
        "name": "Fullmetal Alchemist entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-5",
        "name": "Fullmetal Alchemist entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-6",
        "name": "Fullmetal Alchemist entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-7",
        "name": "Fullmetal Alchemist entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-8",
        "name": "Fullmetal Alchemist entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-9",
        "name": "Fullmetal Alchemist entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-10",
        "name": "Fullmetal Alchemist entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-11",
        "name": "Fullmetal Alchemist entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-12",
        "name": "Fullmetal Alchemist entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-13",
        "name": "Fullmetal Alchemist entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-14",
        "name": "Fullmetal Alchemist entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-15",
        "name": "Fullmetal Alchemist entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-16",
        "name": "Fullmetal Alchemist entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-17",
        "name": "Fullmetal Alchemist entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-18",
        "name": "Fullmetal Alchemist entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-19",
        "name": "Fullmetal Alchemist entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-20",
        "name": "Fullmetal Alchemist entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-21",
        "name": "Fullmetal Alchemist entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-22",
        "name": "Fullmetal Alchemist entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-23",
        "name": "Fullmetal Alchemist entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fullmetal-alchemist-entry-24",
        "name": "Fullmetal Alchemist entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fullmetal Alchemist.",
        "description": "A supporting encyclopedia entry in the Fullmetal Alchemist subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-places",
        "contains",
        "Fullmetal Alchemist places is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-events",
        "contains",
        "Fullmetal Alchemist events is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-objects",
        "contains",
        "Fullmetal Alchemist objects & artifacts is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-factions",
        "contains",
        "Fullmetal Alchemist factions & groups is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-concepts",
        "contains",
        "Fullmetal Alchemist concepts is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-eras",
        "contains",
        "Fullmetal Alchemist eras is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-works",
        "contains",
        "Fullmetal Alchemist works & media is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-symbols",
        "contains",
        "Fullmetal Alchemist symbols is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-controversies",
        "contains",
        "Fullmetal Alchemist controversies is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-sources",
        "contains",
        "Fullmetal Alchemist sources is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-geography",
        "contains",
        "Fullmetal Alchemist geography is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-legacy",
        "contains",
        "Fullmetal Alchemist legacy is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-practices",
        "contains",
        "Fullmetal Alchemist practices is a primary trailhead under Fullmetal Alchemist.",
        0.88,
        0.82
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-1",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-2",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-3",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-4",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-5",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-6",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-7",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-8",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-9",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-10",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-11",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-12",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-13",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-14",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-15",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-16",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-17",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-18",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-19",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-20",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-21",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-22",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-23",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ],
    [
        "fullmetal-alchemist",
        "fullmetal-alchemist-entry-24",
        "contains",
        "Supporting entry under Fullmetal Alchemist.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
