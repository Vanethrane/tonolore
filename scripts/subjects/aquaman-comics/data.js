/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aquaman-comics",
        "name": "Aquaman",
        "type": "topic",
        "short_description": "Atlantis politics, trench horrors, and the underwater king whose comics lore runs deep.",
        "description": "Atlantis politics, trench horrors, and the underwater king whose comics lore runs deep. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aquaman so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "aquaman-comics-figures",
        "name": "Aquaman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aquaman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aquaman."
    },
    {
        "slug": "aquaman-comics-world",
        "name": "Aquaman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aquaman.",
        "description": "Geography, institutions, and periodization that give Aquaman its encyclopedia shape."
    },
    {
        "slug": "aquaman-comics-places",
        "name": "Aquaman places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aquaman.",
        "description": "Places, regions, and built sites that give Aquaman its map — where events and figures concentrate."
    },
    {
        "slug": "aquaman-comics-events",
        "name": "Aquaman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aquaman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aquaman timeline."
    },
    {
        "slug": "aquaman-comics-objects",
        "name": "Aquaman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aquaman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aquaman."
    },
    {
        "slug": "aquaman-comics-factions",
        "name": "Aquaman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aquaman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aquaman."
    },
    {
        "slug": "aquaman-comics-concepts",
        "name": "Aquaman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aquaman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aquaman readable as a lore graph."
    },
    {
        "slug": "aquaman-comics-eras",
        "name": "Aquaman eras",
        "type": "event",
        "short_description": "Periodization for Aquaman.",
        "description": "Named eras and phases that help readers track how Aquaman changes across time."
    },
    {
        "slug": "aquaman-comics-works",
        "name": "Aquaman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aquaman.",
        "description": "Primary works and adaptations through which most audiences encounter Aquaman."
    },
    {
        "slug": "aquaman-comics-symbols",
        "name": "Aquaman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aquaman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aquaman."
    },
    {
        "slug": "aquaman-comics-controversies",
        "name": "Aquaman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aquaman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aquaman argumentative."
    },
    {
        "slug": "aquaman-comics-sources",
        "name": "Aquaman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aquaman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aquaman."
    },
    {
        "slug": "aquaman-comics-geography",
        "name": "Aquaman geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aquaman.",
        "description": "Regions, routes, and spatial systems that situate Aquaman beyond single named places."
    },
    {
        "slug": "aquaman-comics-legacy",
        "name": "Aquaman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aquaman.",
        "description": "How Aquaman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aquaman-comics-practices",
        "name": "Aquaman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aquaman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aquaman."
    },
    {
        "slug": "aquaman-comics-entry-1",
        "name": "Aquaman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-2",
        "name": "Aquaman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-3",
        "name": "Aquaman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-4",
        "name": "Aquaman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-5",
        "name": "Aquaman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-6",
        "name": "Aquaman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-7",
        "name": "Aquaman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-8",
        "name": "Aquaman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-9",
        "name": "Aquaman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-10",
        "name": "Aquaman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-11",
        "name": "Aquaman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-12",
        "name": "Aquaman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-13",
        "name": "Aquaman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-14",
        "name": "Aquaman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-15",
        "name": "Aquaman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-16",
        "name": "Aquaman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-17",
        "name": "Aquaman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-18",
        "name": "Aquaman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-19",
        "name": "Aquaman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-20",
        "name": "Aquaman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-21",
        "name": "Aquaman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-22",
        "name": "Aquaman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-23",
        "name": "Aquaman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aquaman-comics-entry-24",
        "name": "Aquaman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aquaman.",
        "description": "A supporting encyclopedia entry in the Aquaman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aquaman-comics",
        "aquaman-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aquaman-comics",
        "aquaman-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aquaman-comics",
        "aquaman-comics-places",
        "contains",
        "Aquaman places is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-events",
        "contains",
        "Aquaman events is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-objects",
        "contains",
        "Aquaman objects & artifacts is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-factions",
        "contains",
        "Aquaman factions & groups is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-concepts",
        "contains",
        "Aquaman concepts is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-eras",
        "contains",
        "Aquaman eras is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-works",
        "contains",
        "Aquaman works & media is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-symbols",
        "contains",
        "Aquaman symbols is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-controversies",
        "contains",
        "Aquaman controversies is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-sources",
        "contains",
        "Aquaman sources is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-geography",
        "contains",
        "Aquaman geography is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-legacy",
        "contains",
        "Aquaman legacy is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-practices",
        "contains",
        "Aquaman practices is a primary trailhead under Aquaman.",
        0.88,
        0.82
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-1",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-2",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-3",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-4",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-5",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-6",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-7",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-8",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-9",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-10",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-11",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-12",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-13",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-14",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-15",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-16",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-17",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-18",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-19",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-20",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-21",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-22",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-23",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ],
    [
        "aquaman-comics",
        "aquaman-comics-entry-24",
        "contains",
        "Supporting entry under Aquaman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
