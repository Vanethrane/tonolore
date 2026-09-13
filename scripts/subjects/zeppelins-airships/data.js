/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "zeppelins-airships",
        "name": "Zeppelins & airships",
        "type": "topic",
        "short_description": "Rigid airships, Hindenburg, and the brief age of luxury sky liners.",
        "description": "Rigid airships, Hindenburg, and the brief age of luxury sky liners. This Ton-o-Lore subject maps people, places, events, and ideas tied to Zeppelins & airships so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "zeppelins-airships-figures",
        "name": "Zeppelins & airships figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Zeppelins & airships.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-world",
        "name": "Zeppelins & airships world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Zeppelins & airships.",
        "description": "Geography, institutions, and periodization that give Zeppelins & airships its encyclopedia shape."
    },
    {
        "slug": "zeppelins-airships-places",
        "name": "Zeppelins & airships places",
        "type": "place",
        "short_description": "Locations and geographies that frame Zeppelins & airships.",
        "description": "Places, regions, and built sites that give Zeppelins & airships its map — where events and figures concentrate."
    },
    {
        "slug": "zeppelins-airships-events",
        "name": "Zeppelins & airships events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Zeppelins & airships.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Zeppelins & airships timeline."
    },
    {
        "slug": "zeppelins-airships-objects",
        "name": "Zeppelins & airships objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Zeppelins & airships.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-factions",
        "name": "Zeppelins & airships factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Zeppelins & airships.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-concepts",
        "name": "Zeppelins & airships concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Zeppelins & airships.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Zeppelins & airships readable as a lore graph."
    },
    {
        "slug": "zeppelins-airships-eras",
        "name": "Zeppelins & airships eras",
        "type": "event",
        "short_description": "Periodization for Zeppelins & airships.",
        "description": "Named eras and phases that help readers track how Zeppelins & airships changes across time."
    },
    {
        "slug": "zeppelins-airships-works",
        "name": "Zeppelins & airships works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Zeppelins & airships.",
        "description": "Primary works and adaptations through which most audiences encounter Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-symbols",
        "name": "Zeppelins & airships symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Zeppelins & airships.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-controversies",
        "name": "Zeppelins & airships controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Zeppelins & airships.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Zeppelins & airships argumentative."
    },
    {
        "slug": "zeppelins-airships-sources",
        "name": "Zeppelins & airships sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Zeppelins & airships.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-geography",
        "name": "Zeppelins & airships geography",
        "type": "place",
        "short_description": "Broader geographic framing for Zeppelins & airships.",
        "description": "Regions, routes, and spatial systems that situate Zeppelins & airships beyond single named places."
    },
    {
        "slug": "zeppelins-airships-legacy",
        "name": "Zeppelins & airships legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Zeppelins & airships.",
        "description": "How Zeppelins & airships continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "zeppelins-airships-practices",
        "name": "Zeppelins & airships practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Zeppelins & airships.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Zeppelins & airships."
    },
    {
        "slug": "zeppelins-airships-entry-1",
        "name": "Zeppelins & airships entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-2",
        "name": "Zeppelins & airships entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-3",
        "name": "Zeppelins & airships entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-4",
        "name": "Zeppelins & airships entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-5",
        "name": "Zeppelins & airships entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-6",
        "name": "Zeppelins & airships entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-7",
        "name": "Zeppelins & airships entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-8",
        "name": "Zeppelins & airships entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-9",
        "name": "Zeppelins & airships entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-10",
        "name": "Zeppelins & airships entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-11",
        "name": "Zeppelins & airships entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-12",
        "name": "Zeppelins & airships entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-13",
        "name": "Zeppelins & airships entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-14",
        "name": "Zeppelins & airships entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-15",
        "name": "Zeppelins & airships entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-16",
        "name": "Zeppelins & airships entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-17",
        "name": "Zeppelins & airships entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-18",
        "name": "Zeppelins & airships entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-19",
        "name": "Zeppelins & airships entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-20",
        "name": "Zeppelins & airships entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-21",
        "name": "Zeppelins & airships entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-22",
        "name": "Zeppelins & airships entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-23",
        "name": "Zeppelins & airships entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zeppelins-airships-entry-24",
        "name": "Zeppelins & airships entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zeppelins & airships.",
        "description": "A supporting encyclopedia entry in the Zeppelins & airships subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "zeppelins-airships",
        "zeppelins-airships-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-places",
        "contains",
        "Zeppelins & airships places is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-events",
        "contains",
        "Zeppelins & airships events is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-objects",
        "contains",
        "Zeppelins & airships objects & artifacts is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-factions",
        "contains",
        "Zeppelins & airships factions & groups is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-concepts",
        "contains",
        "Zeppelins & airships concepts is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-eras",
        "contains",
        "Zeppelins & airships eras is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-works",
        "contains",
        "Zeppelins & airships works & media is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-symbols",
        "contains",
        "Zeppelins & airships symbols is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-controversies",
        "contains",
        "Zeppelins & airships controversies is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-sources",
        "contains",
        "Zeppelins & airships sources is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-geography",
        "contains",
        "Zeppelins & airships geography is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-legacy",
        "contains",
        "Zeppelins & airships legacy is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-practices",
        "contains",
        "Zeppelins & airships practices is a primary trailhead under Zeppelins & airships.",
        0.88,
        0.82
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-1",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-2",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-3",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-4",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-5",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-6",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-7",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-8",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-9",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-10",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-11",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-12",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-13",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-14",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-15",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-16",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-17",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-18",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-19",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-20",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-21",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-22",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-23",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ],
    [
        "zeppelins-airships",
        "zeppelins-airships-entry-24",
        "contains",
        "Supporting entry under Zeppelins & airships.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
