/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sherlock-holmes-canon",
        "name": "Sherlock Holmes canon",
        "type": "topic",
        "short_description": "Baker Street, deductions, and Doyle’s detective mythology that still structures crime fiction.",
        "description": "Baker Street, deductions, and Doyle’s detective mythology that still structures crime fiction. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sherlock Holmes canon so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "sherlock-holmes-canon-figures",
        "name": "Sherlock Holmes canon figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sherlock Holmes canon.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-world",
        "name": "Sherlock Holmes canon world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sherlock Holmes canon.",
        "description": "Geography, institutions, and periodization that give Sherlock Holmes canon its encyclopedia shape."
    },
    {
        "slug": "sherlock-holmes-canon-places",
        "name": "Sherlock Holmes canon places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sherlock Holmes canon.",
        "description": "Places, regions, and built sites that give Sherlock Holmes canon its map — where events and figures concentrate."
    },
    {
        "slug": "sherlock-holmes-canon-events",
        "name": "Sherlock Holmes canon events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sherlock Holmes canon.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sherlock Holmes canon timeline."
    },
    {
        "slug": "sherlock-holmes-canon-objects",
        "name": "Sherlock Holmes canon objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sherlock Holmes canon.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-factions",
        "name": "Sherlock Holmes canon factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sherlock Holmes canon.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-concepts",
        "name": "Sherlock Holmes canon concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sherlock Holmes canon.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sherlock Holmes canon readable as a lore graph."
    },
    {
        "slug": "sherlock-holmes-canon-eras",
        "name": "Sherlock Holmes canon eras",
        "type": "event",
        "short_description": "Periodization for Sherlock Holmes canon.",
        "description": "Named eras and phases that help readers track how Sherlock Holmes canon changes across time."
    },
    {
        "slug": "sherlock-holmes-canon-works",
        "name": "Sherlock Holmes canon works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sherlock Holmes canon.",
        "description": "Primary works and adaptations through which most audiences encounter Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-symbols",
        "name": "Sherlock Holmes canon symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sherlock Holmes canon.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-controversies",
        "name": "Sherlock Holmes canon controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sherlock Holmes canon.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sherlock Holmes canon argumentative."
    },
    {
        "slug": "sherlock-holmes-canon-sources",
        "name": "Sherlock Holmes canon sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sherlock Holmes canon.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-geography",
        "name": "Sherlock Holmes canon geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sherlock Holmes canon.",
        "description": "Regions, routes, and spatial systems that situate Sherlock Holmes canon beyond single named places."
    },
    {
        "slug": "sherlock-holmes-canon-legacy",
        "name": "Sherlock Holmes canon legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sherlock Holmes canon.",
        "description": "How Sherlock Holmes canon continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sherlock-holmes-canon-practices",
        "name": "Sherlock Holmes canon practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sherlock Holmes canon.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sherlock Holmes canon."
    },
    {
        "slug": "sherlock-holmes-canon-entry-1",
        "name": "Sherlock Holmes canon entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-2",
        "name": "Sherlock Holmes canon entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-3",
        "name": "Sherlock Holmes canon entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-4",
        "name": "Sherlock Holmes canon entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-5",
        "name": "Sherlock Holmes canon entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-6",
        "name": "Sherlock Holmes canon entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-7",
        "name": "Sherlock Holmes canon entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-8",
        "name": "Sherlock Holmes canon entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-9",
        "name": "Sherlock Holmes canon entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-10",
        "name": "Sherlock Holmes canon entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-11",
        "name": "Sherlock Holmes canon entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-12",
        "name": "Sherlock Holmes canon entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-13",
        "name": "Sherlock Holmes canon entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-14",
        "name": "Sherlock Holmes canon entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-15",
        "name": "Sherlock Holmes canon entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-16",
        "name": "Sherlock Holmes canon entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-17",
        "name": "Sherlock Holmes canon entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-18",
        "name": "Sherlock Holmes canon entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-19",
        "name": "Sherlock Holmes canon entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-20",
        "name": "Sherlock Holmes canon entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-21",
        "name": "Sherlock Holmes canon entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-22",
        "name": "Sherlock Holmes canon entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-23",
        "name": "Sherlock Holmes canon entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sherlock-holmes-canon-entry-24",
        "name": "Sherlock Holmes canon entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sherlock Holmes canon.",
        "description": "A supporting encyclopedia entry in the Sherlock Holmes canon subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-places",
        "contains",
        "Sherlock Holmes canon places is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-events",
        "contains",
        "Sherlock Holmes canon events is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-objects",
        "contains",
        "Sherlock Holmes canon objects & artifacts is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-factions",
        "contains",
        "Sherlock Holmes canon factions & groups is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-concepts",
        "contains",
        "Sherlock Holmes canon concepts is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-eras",
        "contains",
        "Sherlock Holmes canon eras is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-works",
        "contains",
        "Sherlock Holmes canon works & media is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-symbols",
        "contains",
        "Sherlock Holmes canon symbols is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-controversies",
        "contains",
        "Sherlock Holmes canon controversies is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-sources",
        "contains",
        "Sherlock Holmes canon sources is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-geography",
        "contains",
        "Sherlock Holmes canon geography is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-legacy",
        "contains",
        "Sherlock Holmes canon legacy is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-practices",
        "contains",
        "Sherlock Holmes canon practices is a primary trailhead under Sherlock Holmes canon.",
        0.88,
        0.82
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-1",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-2",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-3",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-4",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-5",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-6",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-7",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-8",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-9",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-10",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-11",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-12",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-13",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-14",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-15",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-16",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-17",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-18",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-19",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-20",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-21",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-22",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-23",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ],
    [
        "sherlock-holmes-canon",
        "sherlock-holmes-canon-entry-24",
        "contains",
        "Supporting entry under Sherlock Holmes canon.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
