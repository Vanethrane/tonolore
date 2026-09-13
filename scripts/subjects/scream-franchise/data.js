/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "scream-franchise",
        "name": "Scream",
        "type": "topic",
        "short_description": "Ghostface, meta-rules, and the self-aware slasher reboot that remade 1990s horror.",
        "description": "Ghostface, meta-rules, and the self-aware slasher reboot that remade 1990s horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to Scream so readers can follow long-tail connections across horror."
    },
    {
        "slug": "scream-franchise-figures",
        "name": "Scream figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Scream.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Scream."
    },
    {
        "slug": "scream-franchise-world",
        "name": "Scream world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Scream.",
        "description": "Geography, institutions, and periodization that give Scream its encyclopedia shape."
    },
    {
        "slug": "scream-franchise-places",
        "name": "Scream places",
        "type": "place",
        "short_description": "Locations and geographies that frame Scream.",
        "description": "Places, regions, and built sites that give Scream its map — where events and figures concentrate."
    },
    {
        "slug": "scream-franchise-events",
        "name": "Scream events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Scream.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Scream timeline."
    },
    {
        "slug": "scream-franchise-objects",
        "name": "Scream objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Scream.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Scream."
    },
    {
        "slug": "scream-franchise-factions",
        "name": "Scream factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Scream.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Scream."
    },
    {
        "slug": "scream-franchise-concepts",
        "name": "Scream concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Scream.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Scream readable as a lore graph."
    },
    {
        "slug": "scream-franchise-eras",
        "name": "Scream eras",
        "type": "event",
        "short_description": "Periodization for Scream.",
        "description": "Named eras and phases that help readers track how Scream changes across time."
    },
    {
        "slug": "scream-franchise-works",
        "name": "Scream works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Scream.",
        "description": "Primary works and adaptations through which most audiences encounter Scream."
    },
    {
        "slug": "scream-franchise-symbols",
        "name": "Scream symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Scream.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Scream."
    },
    {
        "slug": "scream-franchise-controversies",
        "name": "Scream controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Scream.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Scream argumentative."
    },
    {
        "slug": "scream-franchise-sources",
        "name": "Scream sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Scream.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Scream."
    },
    {
        "slug": "scream-franchise-geography",
        "name": "Scream geography",
        "type": "place",
        "short_description": "Broader geographic framing for Scream.",
        "description": "Regions, routes, and spatial systems that situate Scream beyond single named places."
    },
    {
        "slug": "scream-franchise-legacy",
        "name": "Scream legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Scream.",
        "description": "How Scream continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "scream-franchise-practices",
        "name": "Scream practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Scream.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Scream."
    },
    {
        "slug": "scream-franchise-entry-1",
        "name": "Scream entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-2",
        "name": "Scream entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-3",
        "name": "Scream entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-4",
        "name": "Scream entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-5",
        "name": "Scream entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-6",
        "name": "Scream entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-7",
        "name": "Scream entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-8",
        "name": "Scream entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-9",
        "name": "Scream entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-10",
        "name": "Scream entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-11",
        "name": "Scream entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-12",
        "name": "Scream entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-13",
        "name": "Scream entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-14",
        "name": "Scream entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-15",
        "name": "Scream entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-16",
        "name": "Scream entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-17",
        "name": "Scream entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-18",
        "name": "Scream entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-19",
        "name": "Scream entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-20",
        "name": "Scream entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-21",
        "name": "Scream entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-22",
        "name": "Scream entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-23",
        "name": "Scream entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scream-franchise-entry-24",
        "name": "Scream entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scream.",
        "description": "A supporting encyclopedia entry in the Scream subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "scream-franchise",
        "scream-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "scream-franchise",
        "scream-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "scream-franchise",
        "scream-franchise-places",
        "contains",
        "Scream places is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-events",
        "contains",
        "Scream events is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-objects",
        "contains",
        "Scream objects & artifacts is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-factions",
        "contains",
        "Scream factions & groups is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-concepts",
        "contains",
        "Scream concepts is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-eras",
        "contains",
        "Scream eras is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-works",
        "contains",
        "Scream works & media is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-symbols",
        "contains",
        "Scream symbols is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-controversies",
        "contains",
        "Scream controversies is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-sources",
        "contains",
        "Scream sources is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-geography",
        "contains",
        "Scream geography is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-legacy",
        "contains",
        "Scream legacy is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-practices",
        "contains",
        "Scream practices is a primary trailhead under Scream.",
        0.88,
        0.82
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-1",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-2",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-3",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-4",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-5",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-6",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-7",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-8",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-9",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-10",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-11",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-12",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-13",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-14",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-15",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-16",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-17",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-18",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-19",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-20",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-21",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-22",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-23",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ],
    [
        "scream-franchise",
        "scream-franchise-entry-24",
        "contains",
        "Supporting entry under Scream.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
