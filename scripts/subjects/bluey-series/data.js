/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bluey-series",
        "name": "Bluey",
        "type": "topic",
        "short_description": "Heeler family play-as-storytelling, Australian suburb warmth, and the preschool show adults quote.",
        "description": "Heeler family play-as-storytelling, Australian suburb warmth, and the preschool show adults quote. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bluey so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "bluey-series-figures",
        "name": "Bluey figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bluey.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bluey."
    },
    {
        "slug": "bluey-series-world",
        "name": "Bluey world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bluey.",
        "description": "Geography, institutions, and periodization that give Bluey its encyclopedia shape."
    },
    {
        "slug": "bluey-series-places",
        "name": "Bluey places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bluey.",
        "description": "Places, regions, and built sites that give Bluey its map — where events and figures concentrate."
    },
    {
        "slug": "bluey-series-events",
        "name": "Bluey events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bluey.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bluey timeline."
    },
    {
        "slug": "bluey-series-objects",
        "name": "Bluey objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bluey.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bluey."
    },
    {
        "slug": "bluey-series-factions",
        "name": "Bluey factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bluey.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bluey."
    },
    {
        "slug": "bluey-series-concepts",
        "name": "Bluey concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bluey.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bluey readable as a lore graph."
    },
    {
        "slug": "bluey-series-eras",
        "name": "Bluey eras",
        "type": "event",
        "short_description": "Periodization for Bluey.",
        "description": "Named eras and phases that help readers track how Bluey changes across time."
    },
    {
        "slug": "bluey-series-works",
        "name": "Bluey works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bluey.",
        "description": "Primary works and adaptations through which most audiences encounter Bluey."
    },
    {
        "slug": "bluey-series-symbols",
        "name": "Bluey symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bluey.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bluey."
    },
    {
        "slug": "bluey-series-controversies",
        "name": "Bluey controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bluey.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bluey argumentative."
    },
    {
        "slug": "bluey-series-sources",
        "name": "Bluey sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bluey.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bluey."
    },
    {
        "slug": "bluey-series-geography",
        "name": "Bluey geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bluey.",
        "description": "Regions, routes, and spatial systems that situate Bluey beyond single named places."
    },
    {
        "slug": "bluey-series-legacy",
        "name": "Bluey legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bluey.",
        "description": "How Bluey continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bluey-series-practices",
        "name": "Bluey practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bluey.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bluey."
    },
    {
        "slug": "bluey-series-entry-1",
        "name": "Bluey entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-2",
        "name": "Bluey entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-3",
        "name": "Bluey entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-4",
        "name": "Bluey entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-5",
        "name": "Bluey entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-6",
        "name": "Bluey entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-7",
        "name": "Bluey entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-8",
        "name": "Bluey entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-9",
        "name": "Bluey entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-10",
        "name": "Bluey entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-11",
        "name": "Bluey entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-12",
        "name": "Bluey entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-13",
        "name": "Bluey entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-14",
        "name": "Bluey entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-15",
        "name": "Bluey entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-16",
        "name": "Bluey entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-17",
        "name": "Bluey entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-18",
        "name": "Bluey entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-19",
        "name": "Bluey entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-20",
        "name": "Bluey entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-21",
        "name": "Bluey entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-22",
        "name": "Bluey entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-23",
        "name": "Bluey entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bluey-series-entry-24",
        "name": "Bluey entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bluey.",
        "description": "A supporting encyclopedia entry in the Bluey subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bluey-series",
        "bluey-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bluey-series",
        "bluey-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bluey-series",
        "bluey-series-places",
        "contains",
        "Bluey places is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-events",
        "contains",
        "Bluey events is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-objects",
        "contains",
        "Bluey objects & artifacts is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-factions",
        "contains",
        "Bluey factions & groups is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-concepts",
        "contains",
        "Bluey concepts is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-eras",
        "contains",
        "Bluey eras is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-works",
        "contains",
        "Bluey works & media is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-symbols",
        "contains",
        "Bluey symbols is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-controversies",
        "contains",
        "Bluey controversies is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-sources",
        "contains",
        "Bluey sources is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-geography",
        "contains",
        "Bluey geography is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-legacy",
        "contains",
        "Bluey legacy is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-practices",
        "contains",
        "Bluey practices is a primary trailhead under Bluey.",
        0.88,
        0.82
    ],
    [
        "bluey-series",
        "bluey-series-entry-1",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-2",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-3",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-4",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-5",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-6",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-7",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-8",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-9",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-10",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-11",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-12",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-13",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-14",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-15",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-16",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-17",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-18",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-19",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-20",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-21",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-22",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-23",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ],
    [
        "bluey-series",
        "bluey-series-entry-24",
        "contains",
        "Supporting entry under Bluey.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
