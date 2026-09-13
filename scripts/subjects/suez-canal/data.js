/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "suez-canal",
        "name": "Suez Canal",
        "type": "topic",
        "short_description": "Isthmus cut, geopolitics, and the waterway that linked Mediterranean and Red Sea trade.",
        "description": "Isthmus cut, geopolitics, and the waterway that linked Mediterranean and Red Sea trade. This Ton-o-Lore subject maps people, places, events, and ideas tied to Suez Canal so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "suez-canal-figures",
        "name": "Suez Canal figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Suez Canal.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Suez Canal."
    },
    {
        "slug": "suez-canal-world",
        "name": "Suez Canal world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Suez Canal.",
        "description": "Geography, institutions, and periodization that give Suez Canal its encyclopedia shape."
    },
    {
        "slug": "suez-canal-places",
        "name": "Suez Canal places",
        "type": "place",
        "short_description": "Locations and geographies that frame Suez Canal.",
        "description": "Places, regions, and built sites that give Suez Canal its map — where events and figures concentrate."
    },
    {
        "slug": "suez-canal-events",
        "name": "Suez Canal events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Suez Canal.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Suez Canal timeline."
    },
    {
        "slug": "suez-canal-objects",
        "name": "Suez Canal objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Suez Canal.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Suez Canal."
    },
    {
        "slug": "suez-canal-factions",
        "name": "Suez Canal factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Suez Canal.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Suez Canal."
    },
    {
        "slug": "suez-canal-concepts",
        "name": "Suez Canal concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Suez Canal.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Suez Canal readable as a lore graph."
    },
    {
        "slug": "suez-canal-eras",
        "name": "Suez Canal eras",
        "type": "event",
        "short_description": "Periodization for Suez Canal.",
        "description": "Named eras and phases that help readers track how Suez Canal changes across time."
    },
    {
        "slug": "suez-canal-works",
        "name": "Suez Canal works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Suez Canal.",
        "description": "Primary works and adaptations through which most audiences encounter Suez Canal."
    },
    {
        "slug": "suez-canal-symbols",
        "name": "Suez Canal symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Suez Canal.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Suez Canal."
    },
    {
        "slug": "suez-canal-controversies",
        "name": "Suez Canal controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Suez Canal.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Suez Canal argumentative."
    },
    {
        "slug": "suez-canal-sources",
        "name": "Suez Canal sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Suez Canal.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Suez Canal."
    },
    {
        "slug": "suez-canal-geography",
        "name": "Suez Canal geography",
        "type": "place",
        "short_description": "Broader geographic framing for Suez Canal.",
        "description": "Regions, routes, and spatial systems that situate Suez Canal beyond single named places."
    },
    {
        "slug": "suez-canal-legacy",
        "name": "Suez Canal legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Suez Canal.",
        "description": "How Suez Canal continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "suez-canal-practices",
        "name": "Suez Canal practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Suez Canal.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Suez Canal."
    },
    {
        "slug": "suez-canal-entry-1",
        "name": "Suez Canal entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-2",
        "name": "Suez Canal entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-3",
        "name": "Suez Canal entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-4",
        "name": "Suez Canal entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-5",
        "name": "Suez Canal entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-6",
        "name": "Suez Canal entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-7",
        "name": "Suez Canal entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-8",
        "name": "Suez Canal entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-9",
        "name": "Suez Canal entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-10",
        "name": "Suez Canal entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-11",
        "name": "Suez Canal entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-12",
        "name": "Suez Canal entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-13",
        "name": "Suez Canal entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-14",
        "name": "Suez Canal entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-15",
        "name": "Suez Canal entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-16",
        "name": "Suez Canal entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-17",
        "name": "Suez Canal entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-18",
        "name": "Suez Canal entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-19",
        "name": "Suez Canal entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-20",
        "name": "Suez Canal entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-21",
        "name": "Suez Canal entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-22",
        "name": "Suez Canal entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-23",
        "name": "Suez Canal entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "suez-canal-entry-24",
        "name": "Suez Canal entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Suez Canal.",
        "description": "A supporting encyclopedia entry in the Suez Canal subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "suez-canal",
        "suez-canal-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "suez-canal",
        "suez-canal-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "suez-canal",
        "suez-canal-places",
        "contains",
        "Suez Canal places is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-events",
        "contains",
        "Suez Canal events is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-objects",
        "contains",
        "Suez Canal objects & artifacts is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-factions",
        "contains",
        "Suez Canal factions & groups is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-concepts",
        "contains",
        "Suez Canal concepts is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-eras",
        "contains",
        "Suez Canal eras is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-works",
        "contains",
        "Suez Canal works & media is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-symbols",
        "contains",
        "Suez Canal symbols is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-controversies",
        "contains",
        "Suez Canal controversies is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-sources",
        "contains",
        "Suez Canal sources is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-geography",
        "contains",
        "Suez Canal geography is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-legacy",
        "contains",
        "Suez Canal legacy is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-practices",
        "contains",
        "Suez Canal practices is a primary trailhead under Suez Canal.",
        0.88,
        0.82
    ],
    [
        "suez-canal",
        "suez-canal-entry-1",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-2",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-3",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-4",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-5",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-6",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-7",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-8",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-9",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-10",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-11",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-12",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-13",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-14",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-15",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-16",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-17",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-18",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-19",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-20",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-21",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-22",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-23",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ],
    [
        "suez-canal",
        "suez-canal-entry-24",
        "contains",
        "Supporting entry under Suez Canal.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
